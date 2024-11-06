function sampleRUM(e, t) {
  let a = () =>
    window.performance
      ? window.performance.now()
      : Date.now() - window.hlx.rum.firstReadTime;
  try {
    if (
      ((window.hlx = window.hlx || {}),
      (sampleRUM.enhance = () => {}),
      !window.hlx.rum)
    ) {
      let l = new URLSearchParams(window.location.search).get('rum'),
        o =
          ('high' === window.SAMPLE_PAGEVIEWS_AT_RATE && 10) ||
          ('low' === window.SAMPLE_PAGEVIEWS_AT_RATE && 1e3) ||
          ('on' === l && 1) ||
          100,
        r = Math.random().toString(36).slice(-4),
        n = 'off' !== l && Math.random() * o < 1;
      if (
        ((window.hlx.rum = {
          weight: o,
          id: r,
          isSelected: n,
          firstReadTime: window.performance
            ? window.performance.timeOrigin
            : Date.now(),
          sampleRUM,
          queue: [],
          collector: (...e) => window.hlx.rum.queue.push(e),
        }),
        n)
      ) {
        let c = (e) => {
          let t = { source: 'undefined error' };
          try {
            (t.target = e.toString()),
              (t.source = e.stack
                .split('\n')
                .filter((e) => e.match(/https?:\/\//))
                .shift()
                .replace(/at ([^ ]+) \((.+)\)/, '$1@$2')
                .replace(/ at /, '@')
                .trim());
          } catch (a) {}
          return t;
        };
        window.addEventListener('error', ({ error: e }) => {
          let t = c(e);
          sampleRUM('error', t);
        }),
          window.addEventListener('unhandledrejection', ({ reason: e }) => {
            let t = { source: 'Unhandled Rejection', target: e || 'Unknown' };
            e instanceof Error && (t = c(e)), sampleRUM('error', t);
          }),
          (sampleRUM.baseURL =
            sampleRUM.baseURL ||
            new URL(window.RUM_BASE || '/', new URL('https://rum.hlx.page'))),
          (sampleRUM.collectBaseURL =
            sampleRUM.collectBaseURL || sampleRUM.baseURL),
          (sampleRUM.sendPing = (e, t, a = {}) => {
            let l = JSON.stringify({
                weight: o,
                id: r,
                referer: window.location.href,
                checkpoint: e,
                t: t,
                ...a,
              }),
              n = window.RUM_PARAMS
                ? `?${new URLSearchParams(window.RUM_PARAMS).toString()}`
                : '',
              { href: c, origin: i } = new URL(
                `.rum/${o}${n}`,
                sampleRUM.collectBaseURL
              ),
              s =
                i === window.location.origin
                  ? new Blob([l], { type: 'application/json' })
                  : l;
            navigator.sendBeacon(c, s), console.debug(`ping:${e}`, a);
          }),
          sampleRUM.sendPing('top', a()),
          (sampleRUM.enhance = () => {
            if (document.querySelector('script[src*="rum-enhancer"]')) return;
            let e = document.createElement('script');
            (e.src = new URL(
              '.rum/@adobe/helix-rum-enhancer@^2/src/index.js',
              sampleRUM.baseURL
            ).href),
              document.head.appendChild(e);
          }),
          window.hlx.RUM_MANUAL_ENHANCE || sampleRUM.enhance();
      }
    }
    window.hlx.rum &&
      window.hlx.rum.isSelected &&
      e &&
      window.hlx.rum.collector(e, t, a()),
      document.dispatchEvent(
        new CustomEvent('rum', { detail: { checkpoint: e, data: t } })
      );
  } catch (i) {}
}
function setup() {
  (window.hlx = window.hlx || {}),
    (window.hlx.RUM_MASK_URL = 'full'),
    (window.hlx.RUM_MANUAL_ENHANCE = !0),
    (window.hlx.codeBasePath = ''),
    (window.hlx.lighthouse =
      'on' === new URLSearchParams(window.location.search).get('lighthouse'));
  let e = document.querySelector('script[src$="/scripts/scripts.js"]');
  if (e)
    try {
      [window.hlx.codeBasePath] = new URL(e.src).pathname.split(
        '/scripts/scripts.js'
      );
    } catch (t) {
      console.log(t);
    }
}
function init() {
  setup(), sampleRUM();
}
function toClassName(e) {
  return 'string' == typeof e
    ? e
        .toLowerCase()
        .replace(/[^0-9a-z]/gi, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
    : '';
}
function toCamelCase(e) {
  return toClassName(e).replace(/-([a-z])/g, (e) => e[1].toUpperCase());
}
function readBlockConfig(e) {
  let t = {};
  return (
    e.querySelectorAll(':scope > div').forEach((e) => {
      if (e.children) {
        let a = [...e.children];
        if (a[1]) {
          let l = a[1],
            o = toClassName(a[0].textContent),
            r = '';
          if (l.querySelector('a')) {
            let n = [...l.querySelectorAll('a')];
            r = 1 === n.length ? n[0].href : n.map((e) => e.href);
          } else if (l.querySelector('img')) {
            let c = [...l.querySelectorAll('img')];
            r = 1 === c.length ? c[0].src : c.map((e) => e.src);
          } else if (l.querySelector('p')) {
            let i = [...l.querySelectorAll('p')];
            r = 1 === i.length ? i[0].textContent : i.map((e) => e.textContent);
          } else r = e.children[1].textContent;
          t[o] = r;
        }
      }
    }),
    t
  );
}
async function loadCSS(e) {
  return new Promise((t, a) => {
    if (document.querySelector(`head > link[href="${e}"]`)) t();
    else {
      let l = document.createElement('link');
      (l.rel = 'stylesheet'),
        (l.href = e),
        (l.onload = t),
        (l.onerror = a),
        document.head.append(l);
    }
  });
}
async function loadScript(e, t) {
  return new Promise((a, l) => {
    if (document.querySelector(`head > script[src="${e}"]`)) a();
    else {
      let o = document.createElement('script');
      if (((o.src = e), t)) for (let r in t) o.setAttribute(r, t[r]);
      (o.onload = a), (o.onerror = l), document.head.append(o);
    }
  });
}
function getMetadata(e, t = document) {
  let a = e && e.includes(':') ? 'property' : 'name',
    l = [...t.head.querySelectorAll(`meta[${a}="${e}"]`)]
      .map((e) => e.content)
      .join(', ');
  return l || '';
}
function createOptimizedPicture(
  e,
  t = '',
  a = !1,
  l = [{ media: '(min-width: 600px)', width: '2000' }, { width: '750' }]
) {
  let o = new URL(e, window.location.href),
    r = document.createElement('picture'),
    { pathname: n } = o,
    c = n.substring(n.lastIndexOf('.') + 1);
  return (
    l.forEach((e) => {
      let t = document.createElement('source');
      e.media && t.setAttribute('media', e.media),
        t.setAttribute('type', 'image/webp'),
        t.setAttribute(
          'srcset',
          `${n}?width=${e.width}&format=webply&optimize=medium`
        ),
        r.appendChild(t);
    }),
    l.forEach((e, o) => {
      if (o < l.length - 1) {
        let i = document.createElement('source');
        e.media && i.setAttribute('media', e.media),
          i.setAttribute(
            'srcset',
            `${n}?width=${e.width}&format=${c}&optimize=medium`
          ),
          r.appendChild(i);
      } else {
        let s = document.createElement('img');
        s.setAttribute('loading', a ? 'eager' : 'lazy'),
          s.setAttribute('alt', t),
          r.appendChild(s),
          s.setAttribute(
            'src',
            `${n}?width=${e.width}&format=${c}&optimize=medium`
          );
      }
    }),
    r
  );
}
function decorateTemplateAndTheme() {
  let e = (e, t) => {
      t.split(',').forEach((t) => {
        e.classList.add(toClassName(t.trim()));
      });
    },
    t = getMetadata('template');
  t && e(document.body, t);
  let a = getMetadata('theme');
  a && e(document.body, a);
}
function wrapTextNodes(e) {
  let t = [
      'P',
      'PRE',
      'UL',
      'OL',
      'PICTURE',
      'TABLE',
      'H1',
      'H2',
      'H3',
      'H4',
      'H5',
      'H6',
    ],
    a = (e) => {
      let t = document.createElement('p');
      t.append(...e.childNodes), e.append(t);
    };
  e.querySelectorAll(':scope > div > div').forEach((e) => {
    if (e.hasChildNodes()) {
      let l =
        !!e.firstElementChild &&
        t.some((t) => e.firstElementChild.tagName === t);
      l
        ? 'PICTURE' === e.firstElementChild.tagName &&
          (e.children.length > 1 || e.textContent.trim()) &&
          a(e)
        : a(e);
    }
  });
}
function decorateButtons(e) {
  e.querySelectorAll('a').forEach((e) => {
    if (((e.title = e.title || e.textContent), e.href !== e.textContent)) {
      let t = e.parentElement,
        a = e.parentElement.parentElement;
      e.querySelector('img') ||
        (1 === t.childNodes.length &&
          ('P' === t.tagName || 'DIV' === t.tagName) &&
          ((e.className = 'button'), t.classList.add('button-container')),
        1 === t.childNodes.length &&
          'STRONG' === t.tagName &&
          1 === a.childNodes.length &&
          'P' === a.tagName &&
          ((e.className = 'button primary'),
          a.classList.add('button-container')),
        1 === t.childNodes.length &&
          'EM' === t.tagName &&
          1 === a.childNodes.length &&
          'P' === a.tagName &&
          ((e.className = 'button secondary'),
          a.classList.add('button-container')));
    }
  });
}
function decorateIcon(e, t = '', a = '') {
  let l = Array.from(e.classList)
      .find((e) => e.startsWith('icon-'))
      .substring(5),
    o = document.createElement('img');
  (o.dataset.iconName = l),
    (o.src = `${window.hlx.codeBasePath}${t}/icons/${l}.svg`),
    (o.alt = a),
    (o.loading = 'lazy'),
    e.append(o);
}
function decorateIcons(e, t = '') {
  let a = [...e.querySelectorAll('span.icon')];
  a.forEach((e) => {
    decorateIcon(e, t);
  });
}
function decorateSections(e) {
  e.querySelectorAll(':scope > div').forEach((e) => {
    let t = [],
      a = !1;
    [...e.children].forEach((e) => {
      if ('DIV' === e.tagName || !a) {
        let l = document.createElement('div');
        t.push(l),
          (a = 'DIV' !== e.tagName) &&
            l.classList.add('default-content-wrapper');
      }
      t[t.length - 1].append(e);
    }),
      t.forEach((t) => e.append(t)),
      e.classList.add('section'),
      (e.dataset.sectionStatus = 'initialized'),
      (e.style.display = 'none');
    let l = e.querySelector('div.section-metadata');
    if (l) {
      let o = readBlockConfig(l);
      Object.keys(o).forEach((t) => {
        if ('style' === t) {
          let a = o.style
            .split(',')
            .filter((e) => e)
            .map((e) => toClassName(e.trim()));
          a.forEach((t) => e.classList.add(t));
        } else e.dataset[toCamelCase(t)] = o[t];
      }),
        l.parentNode.remove();
    }
  });
}
async function fetchPlaceholders(e = 'default') {
  return (
    (window.placeholders = window.placeholders || {}),
    window.placeholders[e] ||
      (window.placeholders[e] = new Promise((t) => {
        fetch(`${'default' === e ? '' : e}/placeholders.json`)
          .then((e) => (e.ok ? e.json() : {}))
          .then((a) => {
            let l = {};
            a.data
              .filter((e) => e.Key)
              .forEach((e) => {
                l[toCamelCase(e.Key)] = e.Text;
              }),
              (window.placeholders[e] = l),
              t(window.placeholders[e]);
          })
          .catch(() => {
            (window.placeholders[e] = {}), t(window.placeholders[e]);
          });
      })),
    window.placeholders[`${e}`]
  );
}
function buildBlock(e, t) {
  let a = Array.isArray(t) ? t : [[t]],
    l = document.createElement('div');
  return (
    l.classList.add(e),
    a.forEach((e) => {
      let t = document.createElement('div');
      e.forEach((e) => {
        let a = document.createElement('div'),
          l = e.elems ? e.elems : [e];
        l.forEach((e) => {
          e && ('string' == typeof e ? (a.innerHTML += e) : a.appendChild(e));
        }),
          t.appendChild(a);
      }),
        l.appendChild(t);
    }),
    l
  );
}
async function loadBlock(e) {
  let t = e.dataset.blockStatus;
  if ('loading' !== t && 'loaded' !== t) {
    e.dataset.blockStatus = 'loading';
    let { blockName: a } = e.dataset;
    try {
      let l = loadCSS(`${window.hlx.codeBasePath}/blocks/${a}/${a}.css`),
        o = new Promise((t) => {
          (async () => {
            try {
              let l = await import(
                `${window.hlx.codeBasePath}/blocks/${a}/${a}.js`
              );
              l.default && (await l.default(e));
            } catch (o) {
              console.log(`failed to load module for ${a}`, o);
            }
            t();
          })();
        });
      await Promise.all([l, o]);
    } catch (r) {
      console.log(`failed to load block ${a}`, r);
    }
    e.dataset.blockStatus = 'loaded';
  }
  return e;
}
function decorateBlock(e) {
  let t = e.classList[0];
  if (t) {
    e.classList.add('block'),
      (e.dataset.blockName = t),
      (e.dataset.blockStatus = 'initialized'),
      wrapTextNodes(e);
    let a = e.parentElement;
    a.classList.add(`${t}-wrapper`);
    let l = e.closest('.section');
    l && l.classList.add(`${t}-container`);
  }
}
function decorateBlocks(e) {
  e.querySelectorAll('div.section > div > div').forEach(decorateBlock);
}
async function loadHeader(e) {
  let t = buildBlock('header', '');
  return e.append(t), decorateBlock(t), loadBlock(t);
}
async function loadFooter(e) {
  let t = buildBlock('footer', '');
  return e.append(t), decorateBlock(t), loadBlock(t);
}
async function waitForFirstImage(e) {
  let t = e.querySelector('img');
  await new Promise((e) => {
    t && !t.complete
      ? (t.setAttribute('loading', 'eager'),
        t.addEventListener('load', e),
        t.addEventListener('error', e))
      : e();
  });
}
async function loadSection(e, t) {
  let a = e.dataset.sectionStatus;
  if (!a || 'initialized' === a) {
    e.dataset.sectionStatus = 'loading';
    let l = [...e.querySelectorAll('div.block')];
    for (let o = 0; o < l.length; o += 1) await loadBlock(l[o]);
    t && (await t(e)),
      (e.dataset.sectionStatus = 'loaded'),
      (e.style.display = null);
  }
}
async function loadSections(e) {
  let t = [...e.querySelectorAll('div.section')];
  for (let a = 0; a < t.length; a += 1)
    await loadSection(t[a]),
      0 === a && sampleRUM.enhance && sampleRUM.enhance();
}
init();
export {
  buildBlock,
  createOptimizedPicture,
  decorateBlock,
  decorateBlocks,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateTemplateAndTheme,
  fetchPlaceholders,
  getMetadata,
  loadBlock,
  loadCSS,
  loadFooter,
  loadHeader,
  loadScript,
  loadSection,
  loadSections,
  readBlockConfig,
  sampleRUM,
  setup,
  toCamelCase,
  toClassName,
  waitForFirstImage,
  wrapTextNodes,
};
