const FINNHUB_WEBSOCKET_URL =
  'wss://ws.finnhub.io?token=ct7u96pr01qkgg0vbch0ct7u96pr01qkgg0vbchg';
const CRYPTO_SYMBOLS = [
  'BINANCE:BTCUSDT',
  'BINANCE:ETHUSDT',
  'BINANCE:BNBUSDT',
  'BINANCE:ADAUSDT',
  'BINANCE:XRPUSDT',
];

function createCryptoElement(symbol) {
  const card = document.createElement('div');
  card.className = 'crypto-card';
  card.setAttribute('data-symbol', symbol);
  card.innerHTML = `
    <div class="crypto-header">
      <h3 class="crypto-symbol">${symbol.split(':')[1]}</h3>
      <span class="crypto-price">Loading...</span>
    </div>
    <div class="crypto-details">
      <div class="crypto-change">Change: <span class="change-value">-</span></div>
      <div class="crypto-trend">Trend: <span class="trend-indicator">-</span></div>
    </div>
  `;
  return card;
}

class CryptoWebSocket {
  constructor(symbols) {
    this.symbols = symbols;
    this.socket = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 10;
    this.reconnectTimeout = 1000; // Start with 1 second
    this.connectionStartTime = null;
  }

  connect() {
    // If already connected, do nothing
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      return this.socket;
    }

    // Record connection start time
    this.connectionStartTime = performance.now();

    this.socket = new WebSocket(FINNHUB_WEBSOCKET_URL);

    this.socket.onopen = () => {
      const connectionTime =
        (performance.now() - this.connectionStartTime) / 1000;
      console.log(
        `WebSocket connection established in ${connectionTime.toFixed(
          3
        )} seconds`
      );

      this.reconnectAttempts = 0; // Reset reconnect attempts on successful connection

      // Subscribe to each crypto symbol
      this.symbols.forEach((symbol) => {
        this.socket.send(JSON.stringify({ type: 'subscribe', symbol: symbol }));
      });
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'trade') {
        const trades = data.data;
        trades.forEach((trade) => {
          const symbol = trade.s;
          const price = trade.p.toFixed(2);

          const card = document.querySelector(
            `.crypto-card[data-symbol="${symbol}"]`
          );
          if (card) {
            const priceElement = card.querySelector('.crypto-price');
            const changeElement = card.querySelector('.change-value');
            const trendElement = card.querySelector('.trend-indicator');

            priceElement.textContent = `$${price}`;

            // Simple trend indication (you'd want more sophisticated logic in a real app)
            const change = (Math.random() * 5).toFixed(2);
            changeElement.textContent = `${change}%`;
            trendElement.textContent = Math.random() > 0.5 ? '↑' : '↓';

            // Color coding for trend
            trendElement.style.color =
              trendElement.textContent === '↑' ? 'green' : 'red';
            changeElement.style.color = change > 0 ? 'green' : 'red';
          }
        });
      }
    };

    this.socket.onerror = (error) => {
      const connectionTime =
        (performance.now() - this.connectionStartTime) / 1000;
      console.error(
        `WebSocket Error after ${connectionTime.toFixed(3)} seconds:`,
        error
      );
      this.reconnect();
    };

    this.socket.onclose = (event) => {
      const connectionTime =
        (performance.now() - this.connectionStartTime) / 1000;
      console.log(
        `WebSocket connection closed after ${connectionTime.toFixed(
          3
        )} seconds`,
        event
      );
      this.reconnect();
    };

    return this.socket;
  }

  reconnect() {
    // Prevent infinite reconnection attempts
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.log('Max reconnect attempts reached. Stopping reconnection.');
      return;
    }

    this.reconnectAttempts++;

    // Exponential backoff for reconnection
    const timeout = Math.min(
      this.reconnectTimeout * Math.pow(2, this.reconnectAttempts),
      30000 // Max 30 seconds between attempts
    );

    console.log(`Attempting to reconnect in ${timeout / 1000} seconds...`);

    setTimeout(() => {
      console.log('Attempting WebSocket reconnection...');
      this.connect();
    }, timeout);
  }

  close() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}

export default function decorate(block) {
  // Create a container for crypto cards if it doesn't exist
  let container = document.getElementById('cryptos');
  if (!container) {
    container = document.createElement('div');
    container.id = 'cryptos';
    container.className = 'crypto-container';
    block.appendChild(container);
  }

  // Clear any existing cards
  container.innerHTML = '';

  // Create and append crypto cards
  CRYPTO_SYMBOLS.forEach((symbol) => {
    const cryptoCard = createCryptoElement(symbol);
    container.appendChild(cryptoCard);
  });

  // Link external CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/styles/crypto-cards.css';
  document.head.appendChild(link);

  // Create WebSocket instance
  const cryptoSocket = new CryptoWebSocket(CRYPTO_SYMBOLS);

  // Establish initial connection
  cryptoSocket.connect();

  // Optional: Cleanup on block removal
  block.addEventListener('disconnected', () => {
    cryptoSocket.close();
  });

  // Ensure connection is maintained
  window.addEventListener('online', () => {
    if (
      !cryptoSocket.socket ||
      cryptoSocket.socket.readyState !== WebSocket.OPEN
    ) {
      cryptoSocket.connect();
    }
  });

  // Store cryptoSocket on the block for potential later access
  block.cryptoSocket = cryptoSocket;
}
