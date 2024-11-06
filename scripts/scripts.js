import {
  loadSections as a,
  waitForFirstImage as c,
  decorateButtons as e,
  decorateSections as h,
  decorateBlocks as i,
  decorateTemplateAndTheme as l,
  loadCSS as n,
  loadHeader as o,
  loadFooter as r,
  decorateIcons as s,
  buildBlock as t,
  loadSection as u,
} from './aem.js';
function buildHeroBlock(i) {
  let e = i.querySelector('h1'),
    s = i.querySelector('picture');
  if (
    e &&
    s &&
    e.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_PRECEDING
  ) {
    let h = document.createElement('div');
    h.append(t('hero', { elems: [s, e] })), i.prepend(h);
  }
}
async function loadFonts() {
  await n(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    window.location.hostname.includes('localhost') ||
      sessionStorage.setItem('fonts-loaded', 'true');
  } catch (t) {}
}
function buildAutoBlocks(t) {
  try {
    buildHeroBlock(t);
  } catch (i) {
    console.error('Auto Blocking failed', i);
  }
}
export function decorateMain(t) {
  e(t), s(t), buildAutoBlocks(t), h(t), i(t);
}
async function loadEager(t) {
  (document.documentElement.lang = 'en'), l();
  let i = t.querySelector('main');
  i &&
    (decorateMain(i),
    document.body.classList.add('appear'),
    await u(i.querySelector('.section'), c));
  try {
    (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) &&
      loadFonts();
  } catch (e) {}
}
async function loadLazy(t) {
  let i = t.querySelector('main');
  await a(i);
  let { hash: e } = window.location,
    s = !!e && t.getElementById(e.substring(1));
  e && s && s.scrollIntoView(),
    o(t.querySelector('header')),
    r(t.querySelector('footer')),
    n(`${window.hlx.codeBasePath}/styles/lazy-styles.css`),
    loadFonts();
}
function loadDelayed() {
  window.setTimeout(() => import('./delayed.js'), 3e3);
}
async function loadPage() {
  await loadEager(document), await loadLazy(document), loadDelayed();
}
loadPage(),
  (function () {
    'use strict';
    let t = {
        upColor: '#26a69a',
        downColor: '#ef5350',
        wickVisible: !0,
        borderVisible: !0,
        borderColor: '#378658',
        borderUpColor: '#26a69a',
        borderDownColor: '#ef5350',
        wickColor: '#737375',
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      },
      i = {
        upColor: '#26a69a',
        downColor: '#ef5350',
        openVisible: !0,
        thinBars: !0,
      },
      e = {
        color: '#2196f3',
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        lineVisible: !0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: '',
        crosshairMarkerBorderWidth: 2,
        crosshairMarkerBackgroundColor: '',
        lastPriceAnimation: 0,
        pointMarkersVisible: !1,
      },
      s = {
        topColor: 'rgba( 46, 220, 135, 0.4)',
        bottomColor: 'rgba( 40, 221, 100, 0)',
        invertFilledArea: !1,
        lineColor: '#33D778',
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        lineVisible: !0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: '',
        crosshairMarkerBorderWidth: 2,
        crosshairMarkerBackgroundColor: '',
        lastPriceAnimation: 0,
        pointMarkersVisible: !1,
      },
      h = {
        baseValue: { type: 'price', price: 0 },
        topFillColor1: 'rgba(38, 166, 154, 0.28)',
        topFillColor2: 'rgba(38, 166, 154, 0.05)',
        topLineColor: 'rgba(38, 166, 154, 1)',
        bottomFillColor1: 'rgba(239, 83, 80, 0.05)',
        bottomFillColor2: 'rgba(239, 83, 80, 0.28)',
        bottomLineColor: 'rgba(239, 83, 80, 1)',
        lineWidth: 3,
        lineStyle: 0,
        lineType: 0,
        lineVisible: !0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: '',
        crosshairMarkerBorderWidth: 2,
        crosshairMarkerBackgroundColor: '',
        lastPriceAnimation: 0,
        pointMarkersVisible: !1,
      },
      l = { color: '#26a69a', base: 0 },
      n = { color: '#2196f3' },
      r = {
        title: '',
        visible: !0,
        lastValueVisible: !0,
        priceLineVisible: !0,
        priceLineSource: 0,
        priceLineWidth: 1,
        priceLineColor: '',
        priceLineStyle: 2,
        baseLineVisible: !0,
        baseLineWidth: 1,
        baseLineColor: '#B2B5BE',
        baseLineStyle: 0,
        priceFormat: { type: 'price', precision: 2, minMove: 0.01 },
      };
    function o(t, i) {
      let e = {
        0: [],
        1: [t.lineWidth, t.lineWidth],
        2: [2 * t.lineWidth, 2 * t.lineWidth],
        3: [6 * t.lineWidth, 6 * t.lineWidth],
        4: [t.lineWidth, 4 * t.lineWidth],
      }[i];
      t.setLineDash(e);
    }
    function u(t, i, e, s) {
      t.beginPath();
      let h = t.lineWidth % 2 ? 0.5 : 0;
      t.moveTo(e, i + h), t.lineTo(s, i + h), t.stroke();
    }
    function a(t, i) {
      if (!t) throw Error('Assertion failed' + (i ? ': ' + i : ''));
    }
    function c(t) {
      if (void 0 === t) throw Error('Value is undefined');
      return t;
    }
    function d(t) {
      if (null === t) throw Error('Value is null');
      return t;
    }
    function f(t) {
      return d(c(t));
    }
    ((iX = i4 || (i4 = {}))[(iX.Simple = 0)] = 'Simple'),
      (iX[(iX.WithSteps = 1)] = 'WithSteps'),
      (iX[(iX.Curved = 2)] = 'Curved'),
      ((iN = iq || (iq = {}))[(iN.Solid = 0)] = 'Solid'),
      (iN[(iN.Dotted = 1)] = 'Dotted'),
      (iN[(iN.Dashed = 2)] = 'Dashed'),
      (iN[(iN.LargeDashed = 3)] = 'LargeDashed'),
      (iN[(iN.SparseDotted = 4)] = 'SparseDotted');
    let $ = {
      khaki: '#f0e68c',
      azure: '#f0ffff',
      aliceblue: '#f0f8ff',
      ghostwhite: '#f8f8ff',
      gold: '#ffd700',
      goldenrod: '#daa520',
      gainsboro: '#dcdcdc',
      gray: '#808080',
      green: '#008000',
      honeydew: '#f0fff0',
      floralwhite: '#fffaf0',
      lightblue: '#add8e6',
      lightcoral: '#f08080',
      lemonchiffon: '#fffacd',
      hotpink: '#ff69b4',
      lightyellow: '#ffffe0',
      greenyellow: '#adff2f',
      lightgoldenrodyellow: '#fafad2',
      limegreen: '#32cd32',
      linen: '#faf0e6',
      lightcyan: '#e0ffff',
      magenta: '#f0f',
      maroon: '#800000',
      olive: '#808000',
      orange: '#ffa500',
      oldlace: '#fdf5e6',
      mediumblue: '#0000cd',
      transparent: '#0000',
      lime: '#0f0',
      lightpink: '#ffb6c1',
      mistyrose: '#ffe4e1',
      moccasin: '#ffe4b5',
      midnightblue: '#191970',
      orchid: '#da70d6',
      mediumorchid: '#ba55d3',
      mediumturquoise: '#48d1cc',
      orangered: '#ff4500',
      royalblue: '#4169e1',
      powderblue: '#b0e0e6',
      red: '#f00',
      coral: '#ff7f50',
      turquoise: '#40e0d0',
      white: '#fff',
      whitesmoke: '#f5f5f5',
      wheat: '#f5deb3',
      teal: '#008080',
      steelblue: '#4682b4',
      bisque: '#ffe4c4',
      aquamarine: '#7fffd4',
      aqua: '#0ff',
      sienna: '#a0522d',
      silver: '#c0c0c0',
      springgreen: '#00ff7f',
      antiquewhite: '#faebd7',
      burlywood: '#deb887',
      brown: '#a52a2a',
      beige: '#f5f5dc',
      chocolate: '#d2691e',
      chartreuse: '#7fff00',
      cornflowerblue: '#6495ed',
      cornsilk: '#fff8dc',
      crimson: '#dc143c',
      cadetblue: '#5f9ea0',
      tomato: '#ff6347',
      fuchsia: '#f0f',
      blue: '#00f',
      salmon: '#fa8072',
      blanchedalmond: '#ffebcd',
      slateblue: '#6a5acd',
      slategray: '#708090',
      thistle: '#d8bfd8',
      tan: '#d2b48c',
      cyan: '#0ff',
      darkblue: '#00008b',
      darkcyan: '#008b8b',
      darkgoldenrod: '#b8860b',
      darkgray: '#a9a9a9',
      blueviolet: '#8a2be2',
      black: '#000',
      darkmagenta: '#8b008b',
      darkslateblue: '#483d8b',
      darkkhaki: '#bdb76b',
      darkorchid: '#9932cc',
      darkorange: '#ff8c00',
      darkgreen: '#006400',
      darkred: '#8b0000',
      dodgerblue: '#1e90ff',
      darkslategray: '#2f4f4f',
      dimgray: '#696969',
      deepskyblue: '#00bfff',
      firebrick: '#b22222',
      forestgreen: '#228b22',
      indigo: '#4b0082',
      ivory: '#fffff0',
      lavenderblush: '#fff0f5',
      feldspar: '#d19275',
      indianred: '#cd5c5c',
      lightgreen: '#90ee90',
      lightgrey: '#d3d3d3',
      lightskyblue: '#87cefa',
      lightslategray: '#789',
      lightslateblue: '#8470ff',
      snow: '#fffafa',
      lightseagreen: '#20b2aa',
      lightsalmon: '#ffa07a',
      darksalmon: '#e9967a',
      darkviolet: '#9400d3',
      mediumpurple: '#9370d8',
      mediumaquamarine: '#66cdaa',
      skyblue: '#87ceeb',
      lavender: '#e6e6fa',
      lightsteelblue: '#b0c4de',
      mediumvioletred: '#c71585',
      mintcream: '#f5fffa',
      navajowhite: '#ffdead',
      navy: '#000080',
      olivedrab: '#6b8e23',
      palevioletred: '#d87093',
      violetred: '#d02090',
      yellow: '#ff0',
      yellowgreen: '#9acd32',
      lawngreen: '#7cfc00',
      pink: '#ffc0cb',
      paleturquoise: '#afeeee',
      palegoldenrod: '#eee8aa',
      darkolivegreen: '#556b2f',
      darkseagreen: '#8fbc8f',
      darkturquoise: '#00ced1',
      peachpuff: '#ffdab9',
      deeppink: '#ff1493',
      violet: '#ee82ee',
      palegreen: '#98fb98',
      mediumseagreen: '#3cb371',
      peru: '#cd853f',
      saddlebrown: '#8b4513',
      sandybrown: '#f4a460',
      rosybrown: '#bc8f8f',
      purple: '#800080',
      seagreen: '#2e8b57',
      seashell: '#fff5ee',
      papayawhip: '#ffefd5',
      mediumslateblue: '#7b68ee',
      plum: '#dda0dd',
      mediumspringgreen: '#00fa9a',
    };
    function v(t) {
      return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
    }
    function p(t) {
      return t <= 0 || t > 1
        ? Math.min(Math.max(t, 0), 1)
        : Math.round(1e4 * t) / 1e4;
    }
    let m = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
      b = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
      g = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
      w =
        /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;
    function _(t) {
      (t = t.toLowerCase()) in $ && (t = $[t]);
      {
        let i = w.exec(t) || g.exec(t);
        if (i)
          return [
            v(parseInt(i[1], 10)),
            v(parseInt(i[2], 10)),
            v(parseInt(i[3], 10)),
            p(i.length < 5 ? 1 : parseFloat(i[4])),
          ];
      }
      {
        let e = b.exec(t);
        if (e)
          return [
            v(parseInt(e[1], 16)),
            v(parseInt(e[2], 16)),
            v(parseInt(e[3], 16)),
            1,
          ];
      }
      {
        let s = m.exec(t);
        if (s)
          return [
            v(17 * parseInt(s[1], 16)),
            v(17 * parseInt(s[2], 16)),
            v(17 * parseInt(s[3], 16)),
            1,
          ];
      }
      throw Error(`Cannot parse color: ${t}`);
    }
    function S(t) {
      return 0.199 * t[0] + 0.687 * t[1] + 0.114 * t[2];
    }
    function y(t) {
      let i = _(t);
      return {
        t: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
        i: S(i) > 160 ? 'black' : 'white',
      };
    }
    class x {
      constructor() {
        this.h = [];
      }
      l(t, i, e) {
        this.h.push({ o: t, _: i, u: !0 === e });
      }
      v(t) {
        let i = this.h.findIndex((i) => t === i.o);
        i > -1 && this.h.splice(i, 1);
      }
      p(t) {
        this.h = this.h.filter((i) => i._ !== t);
      }
      m(t, i, e) {
        let s = [...this.h];
        (this.h = this.h.filter((t) => !t.u)), s.forEach((s) => s.o(t, i, e));
      }
      M() {
        return this.h.length > 0;
      }
      S() {
        this.h = [];
      }
    }
    function C(t, ...i) {
      for (let e of i)
        for (let s in e)
          void 0 !== e[s] &&
            ('object' != typeof e[s] || void 0 === t[s] || Array.isArray(e[s])
              ? (t[s] = e[s])
              : C(t[s], e[s]));
      return t;
    }
    function E(t) {
      return 'number' == typeof t && isFinite(t);
    }
    function k(t) {
      return 'number' == typeof t && t % 1 == 0;
    }
    function z(t) {
      return 'string' == typeof t;
    }
    function I(t) {
      return 'boolean' == typeof t;
    }
    function L(t) {
      let i = t;
      if (!i || 'object' != typeof i) return i;
      let e, s, h;
      for (s in ((e = Array.isArray(i) ? [] : {}), i))
        i.hasOwnProperty(s) &&
          ((h = i[s]), (e[s] = h && 'object' == typeof h ? L(h) : h));
      return e;
    }
    function O(t) {
      return null !== t;
    }
    function P(t) {
      return null === t ? void 0 : t;
    }
    let W =
      "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
    function T(t, i, e) {
      return (
        void 0 === i && (i = W),
        `${(e = void 0 !== e ? `${e} ` : '')}${t}px ${i}`
      );
    }
    class R {
      constructor() {
        this.Y = [];
      }
      Z(t) {
        this.Y = t;
      }
      X(t, i, e) {
        this.Y.forEach((s) => {
          s.X(t, i, e);
        });
      }
    }
    class M {
      X(t, i, e) {
        t.useBitmapCoordinateSpace((t) => this.K(t, i, e));
      }
    }
    class B extends M {
      constructor() {
        super(...arguments), (this.G = null);
      }
      J(t) {
        this.G = t;
      }
      K({ context: t, horizontalPixelRatio: i, verticalPixelRatio: e }) {
        if (null === this.G || null === this.G.tt) return;
        let s = this.G.tt,
          h = this.G,
          l = (Math.max(1, Math.floor(i)) % 2) / 2,
          n = (n) => {
            t.beginPath();
            for (let r = s.to - 1; r >= s.from; --r) {
              let o = h.it[r],
                u = Math.round(o.nt * i) + l,
                a = o.st * e,
                c = n * e + l;
              t.moveTo(u, a), t.arc(u, a, c, 0, 2 * Math.PI);
            }
            t.fill();
          };
        h.et > 0 && ((t.fillStyle = h.rt), n(h.ht + h.et)),
          (t.fillStyle = h.lt),
          n(h.ht);
      }
    }
    function D() {
      return {
        it: [{ nt: 0, st: 0, ot: 0, _t: 0 }],
        lt: '',
        rt: '',
        ht: 0,
        et: 0,
        tt: null,
      };
    }
    let F = { from: 0, to: 1 };
    function A(t, i, e, s, h, l) {
      t.fillRect(i + l, e, s - 2 * l, l),
        t.fillRect(i + l, e + h - l, s - 2 * l, l),
        t.fillRect(i, e, l, h),
        t.fillRect(i + s - l, e, l, h);
    }
    function K(t, i, e, s, h, l) {
      t.save(),
        (t.globalCompositeOperation = 'copy'),
        (t.fillStyle = l),
        t.fillRect(i, e, s, h),
        t.restore();
    }
    function U(t, i, e, s, h, l) {
      t.beginPath(),
        t.roundRect
          ? t.roundRect(i, e, s, h, l)
          : (t.lineTo(i + s - l[1], e),
            0 !== l[1] && t.arcTo(i + s, e, i + s, e + l[1], l[1]),
            t.lineTo(i + s, e + h - l[2]),
            0 !== l[2] && t.arcTo(i + s, e + h, i + s - l[2], e + h, l[2]),
            t.lineTo(i + l[3], e + h),
            0 !== l[3] && t.arcTo(i, e + h, i, e + h - l[3], l[3]),
            t.lineTo(i, e + l[0]),
            0 !== l[0] && t.arcTo(i, e, i + l[0], e, l[0]));
    }
    function V(t, i, e, s, h, l, n = 0, r = [0, 0, 0, 0], o = '') {
      var u;
      if ((t.save(), !n || !o || o === l))
        return (
          U(t, i, e, s, h, r), (t.fillStyle = l), t.fill(), void t.restore()
        );
      let a = n / 2;
      U(
        t,
        i + a,
        e + a,
        s - n,
        h - n,
        ((u = -a), r.map((t) => (0 === t ? t : t + u)))
      ),
        'transparent' !== l && ((t.fillStyle = l), t.fill()),
        'transparent' !== o &&
          ((t.lineWidth = n), (t.strokeStyle = o), t.closePath(), t.stroke()),
        t.restore();
    }
    function X(t, i, e, s, h, l, n) {
      t.save(), (t.globalCompositeOperation = 'copy');
      let r = t.createLinearGradient(0, 0, 0, h);
      r.addColorStop(0, l),
        r.addColorStop(1, n),
        (t.fillStyle = r),
        t.fillRect(i, e, s, h),
        t.restore();
    }
    class N {
      constructor(t, i) {
        this.J(t, i);
      }
      J(t, i) {
        (this.Et = t), (this.Xt = i);
      }
      At(t, i) {
        return this.Et.yt ? t.P + t.L + t.V : 0;
      }
      X(t, i, e, s) {
        if (!this.Et.yt || 0 === this.Et.Kt.length) return;
        let h = this.Et.O,
          l = this.Xt.t,
          n = t.useBitmapCoordinateSpace((t) => {
            let n = t.context;
            n.font = i.R;
            let r = this.Gt(t, i, e, s),
              o = r.Jt;
            return (
              r.Qt
                ? V(n, o.ti, o.ii, o.ni, o.si, l, o.ei, [o.ht, 0, 0, o.ht], l)
                : V(n, o.ri, o.ii, o.ni, o.si, l, o.ei, [0, o.ht, o.ht, 0], l),
              this.Et.hi &&
                ((n.fillStyle = h), n.fillRect(o.ri, o.li, o.ai - o.ri, o.oi)),
              this.Et._i &&
                ((n.fillStyle = i.B),
                n.fillRect(r.Qt ? o.ui - o.ei : 0, o.ii, o.ei, o.ci - o.ii)),
              r
            );
          });
        t.useMediaCoordinateSpace(({ context: t }) => {
          let e = n.di;
          (t.font = i.R),
            (t.textAlign = n.Qt ? 'right' : 'left'),
            (t.textBaseline = 'middle'),
            (t.fillStyle = h),
            t.fillText(this.Et.Kt, e.fi, (e.ii + e.ci) / 2 + e.pi);
        });
      }
      Gt(t, i, e, s) {
        var h;
        let {
            context: l,
            bitmapSize: n,
            mediaSize: r,
            horizontalPixelRatio: o,
            verticalPixelRatio: u,
          } = t,
          a = this.Et.hi || !this.Et.mi ? i.T : 0,
          c = this.Et.bi ? i.C : 0,
          d = i.L + this.Xt.wi,
          f = i.V + this.Xt.gi,
          $ = i.A,
          v = i.I,
          p = this.Et.Kt,
          m = i.P,
          b = e.Mi(l, p),
          g = Math.ceil(e.xi(l, p)),
          w = i.C + $ + v + g + a,
          _ = Math.max(1, Math.floor(u)),
          S = Math.round((m + d + f) * u);
        S % 2 != _ % 2 && (S += 1);
        let y = c > 0 ? Math.max(1, Math.floor(c * o)) : 0,
          x = Math.round(w * o),
          C = Math.round(a * o),
          E = null !== (h = this.Xt.Si) && void 0 !== h ? h : this.Xt.ki,
          k = Math.round(E * u) - Math.floor(0.5 * u),
          z = Math.floor(k + _ / 2 - S / 2),
          I = z + S,
          L = 'right' === s,
          O = L ? r.width - c : c,
          P = L ? n.width - y : y,
          W,
          T,
          R;
        return (
          L
            ? ((W = P - x), (T = P - C), (R = O - a - $ - c))
            : ((W = P + x), (T = P + C), (R = O + a + $)),
          {
            Qt: L,
            Jt: {
              ii: z,
              li: k,
              ci: I,
              ni: x,
              si: S,
              ht: 2 * o,
              ei: y,
              ti: W,
              ri: P,
              ai: T,
              oi: _,
              ui: n.width,
            },
            di: { ii: z / u, ci: I / u, fi: R, pi: b },
          }
        );
      }
    }
    class j {
      constructor(t) {
        (this.yi = { ki: 0, t: '#000', gi: 0, wi: 0 }),
          (this.Ci = {
            Kt: '',
            yt: !1,
            hi: !0,
            mi: !1,
            Bt: '',
            O: '#FFF',
            _i: !1,
            bi: !1,
          }),
          (this.Ti = {
            Kt: '',
            yt: !1,
            hi: !1,
            mi: !0,
            Bt: '',
            O: '#FFF',
            _i: !0,
            bi: !0,
          }),
          (this.ft = !0),
          (this.Pi = new (t || N)(this.Ci, this.yi)),
          (this.Ri = new (t || N)(this.Ti, this.yi));
      }
      Kt() {
        return this.Di(), this.Ci.Kt;
      }
      ki() {
        return this.Di(), this.yi.ki;
      }
      bt() {
        this.ft = !0;
      }
      At(t, i = !1) {
        return Math.max(this.Pi.At(t, i), this.Ri.At(t, i));
      }
      Oi() {
        return this.yi.Si || 0;
      }
      Bi(t) {
        this.yi.Si = t;
      }
      Vi() {
        return this.Di(), this.Ci.yt || this.Ti.yt;
      }
      Ai() {
        return this.Di(), this.Ci.yt;
      }
      gt(t) {
        return (
          this.Di(),
          (this.Ci.hi = this.Ci.hi && t.W().ticksVisible),
          (this.Ti.hi = this.Ti.hi && t.W().ticksVisible),
          this.Pi.J(this.Ci, this.yi),
          this.Ri.J(this.Ti, this.yi),
          this.Pi
        );
      }
      zi() {
        return (
          this.Di(),
          this.Pi.J(this.Ci, this.yi),
          this.Ri.J(this.Ti, this.yi),
          this.Ri
        );
      }
      Di() {
        this.ft &&
          ((this.Ci.hi = !0),
          (this.Ti.hi = !1),
          this.Ei(this.Ci, this.Ti, this.yi));
      }
    }
    class J extends j {
      constructor(t, i, e) {
        super(), (this.jt = t), (this.Ii = i), (this.Li = e);
      }
      Ei(t, i, e) {
        if (((t.yt = !1), 2 === this.jt.W().mode)) return;
        let s = this.jt.W().horzLine;
        if (!s.labelVisible) return;
        let h = this.Ii.Ct();
        if (!this.jt.yt() || this.Ii.Ni() || null === h) return;
        let l = y(s.labelBackgroundColor);
        (e.t = l.t), (t.O = l.i);
        let n = (2 / 12) * this.Ii.P();
        (e.wi = n), (e.gi = n);
        let r = this.Li(this.Ii);
        (e.ki = r.ki), (t.Kt = this.Ii.Fi(r._t, h)), (t.yt = !0);
      }
    }
    let H = /[1-9]/g;
    class Z {
      constructor() {
        this.Et = null;
      }
      J(t) {
        this.Et = t;
      }
      X(t, i) {
        if (null === this.Et || !1 === this.Et.yt || 0 === this.Et.Kt.length)
          return;
        let e = t.useMediaCoordinateSpace(
          ({ context: t }) => (
            (t.font = i.R), Math.round(i.Wi.xi(t, d(this.Et).Kt, H))
          )
        );
        if (e <= 0) return;
        let s = i.ji,
          h = e + 2 * s,
          l = h / 2,
          n = this.Et.Hi,
          r = this.Et.ki,
          o = Math.floor(r - l) + 0.5;
        o < 0
          ? ((r += Math.abs(0 - o)), (o = Math.floor(r - l) + 0.5))
          : o + h > n &&
            ((r -= Math.abs(n - (o + h))), (o = Math.floor(r - l) + 0.5));
        let u = o + h,
          a = Math.ceil(0 + i.C + i.T + i.L + i.P + i.V);
        t.useBitmapCoordinateSpace(
          ({ context: t, horizontalPixelRatio: e, verticalPixelRatio: s }) => {
            let h = d(this.Et);
            t.fillStyle = h.t;
            let l = Math.round(o * e),
              n = Math.round(0 * s),
              r = Math.round(u * e),
              c = Math.round(a * s),
              f = Math.round(2 * e);
            if (
              (t.beginPath(),
              t.moveTo(l, n),
              t.lineTo(l, c - f),
              t.arcTo(l, c, l + f, c, f),
              t.lineTo(r - f, c),
              t.arcTo(r, c, r, c - f, f),
              t.lineTo(r, n),
              t.fill(),
              h.hi)
            ) {
              let $ = Math.round(h.ki * e),
                v = n,
                p = Math.round((v + i.T) * s);
              (t.fillStyle = h.O),
                t.fillRect(
                  $ - Math.floor(0.5 * e),
                  v,
                  Math.max(1, Math.floor(e)),
                  p - v
                );
            }
          }
        ),
          t.useMediaCoordinateSpace(({ context: t }) => {
            let e = d(this.Et),
              h = 0 + i.C + i.T + i.L + i.P / 2;
            (t.font = i.R),
              (t.textAlign = 'left'),
              (t.textBaseline = 'middle'),
              (t.fillStyle = e.O);
            let l = i.Wi.Mi(t, 'Apr0');
            t.translate(o + s, h + l), t.fillText(e.Kt, 0, 0);
          });
      }
    }
    class G {
      constructor() {
        (this.Yi = null), (this.Zi = 0);
      }
      Xi() {
        return this.Zi;
      }
      Ki(t) {
        this.Zi = t;
      }
      Dt() {
        return this.Yi;
      }
      Gi(t) {
        this.Yi = t;
      }
      Ji(t) {
        return [];
      }
      Qi() {
        return [];
      }
      yt() {
        return !0;
      }
    }
    function Y(t) {
      return 'left' === t || 'right' === t;
    }
    ((ij = iQ || (iQ = {}))[(ij.Normal = 0)] = 'Normal'),
      (ij[(ij.Magnet = 1)] = 'Magnet'),
      (ij[(ij.Hidden = 2)] = 'Hidden');
    class q {
      constructor(t) {
        (this.En = new Map()), (this.In = []), (this.Ln = t);
      }
      Nn(t, i) {
        var e, s;
        let h =
          ((e = this.En.get(t)),
          (s = i),
          void 0 === e ? s : { Fn: Math.max(e.Fn, s.Fn), Wn: e.Wn || s.Wn });
        this.En.set(t, h);
      }
      jn() {
        return this.Ln;
      }
      Hn(t) {
        let i = this.En.get(t);
        return void 0 === i
          ? { Fn: this.Ln }
          : { Fn: Math.max(this.Ln, i.Fn), Wn: i.Wn };
      }
      $n() {
        this.Un(), (this.In = [{ qn: 0 }]);
      }
      Yn(t) {
        this.Un(), (this.In = [{ qn: 1, Ot: t }]);
      }
      Zn(t) {
        this.Xn(), this.In.push({ qn: 5, Ot: t });
      }
      Un() {
        this.Xn(), this.In.push({ qn: 6 });
      }
      Kn() {
        this.Un(), (this.In = [{ qn: 4 }]);
      }
      Gn(t) {
        this.Un(), this.In.push({ qn: 2, Ot: t });
      }
      Jn(t) {
        this.Un(), this.In.push({ qn: 3, Ot: t });
      }
      Qn() {
        return this.In;
      }
      ts(t) {
        for (let i of t.In) this.ns(i);
        (this.Ln = Math.max(this.Ln, t.Ln)),
          t.En.forEach((t, i) => {
            this.Nn(i, t);
          });
      }
      static ss() {
        return new q(2);
      }
      static es() {
        return new q(3);
      }
      ns(t) {
        switch (t.qn) {
          case 0:
            this.$n();
            break;
          case 1:
            this.Yn(t.Ot);
            break;
          case 2:
            this.Gn(t.Ot);
            break;
          case 3:
            this.Jn(t.Ot);
            break;
          case 4:
            this.Kn();
            break;
          case 5:
            this.Zn(t.Ot);
            break;
          case 6:
            this.Xn();
        }
      }
      Xn() {
        let t = this.In.findIndex((t) => 5 === t.qn);
        -1 !== t && this.In.splice(t, 1);
      }
    }
    function Q(t, i) {
      if (!E(t)) return 'n/a';
      if (!k(i) || i < 0 || i > 16) throw TypeError('invalid length');
      return 0 === i
        ? t.toString()
        : ('0000000000000000' + t.toString()).slice(-i);
    }
    class tt {
      constructor(t, i) {
        if ((i || (i = 1), (E(t) && k(t)) || (t = 100), t < 0))
          throw TypeError('invalid base');
        (this.Ii = t), (this.rs = i), this.hs();
      }
      format(t) {
        let i = t < 0 ? '−' : '';
        return (t = Math.abs(t)), i + this.ls(t);
      }
      hs() {
        if (((this.os = 0), this.Ii > 0 && this.rs > 0)) {
          let t = this.Ii;
          for (; t > 1; ) (t /= 10), this.os++;
        }
      }
      ls(t) {
        let i = this.Ii / this.rs,
          e = Math.floor(t),
          s = '',
          h = void 0 !== this.os ? this.os : NaN;
        if (i > 1) {
          let l = +(Math.round(t * i) - e * i).toFixed(this.os);
          l >= i && ((l -= i), (e += 1)),
            (s = '.' + Q(+l.toFixed(this.os) * this.rs, h));
        } else (e = Math.round(e * i) / i), h > 0 && (s = '.' + Q(0, h));
        return e.toFixed(0) + s;
      }
    }
    class ti extends tt {
      constructor(t = 100) {
        super(t);
      }
      format(t) {
        return `${super.format(t)}%`;
      }
    }
    class te {
      constructor(t) {
        this._s = t;
      }
      format(t) {
        let i = '';
        return (
          t < 0 && ((i = '-'), (t = -t)),
          t < 995
            ? i + this.us(t)
            : t < 999995
            ? i + this.us(t / 1e3) + 'K'
            : t < 999999995
            ? ((t = 1e3 * Math.round(t / 1e3)), i + this.us(t / 1e6) + 'M')
            : ((t = 1e6 * Math.round(t / 1e6)), i + this.us(t / 1e9) + 'B')
        );
      }
      us(t) {
        let i,
          e = Math.pow(10, this._s);
        return (i =
          (t = Math.round(t * e) / e) >= 1e-15 && t < 1
            ? t.toFixed(this._s).replace(/\.?0+$/, '')
            : String(t)).replace(/(\.[1-9]*)0+$/, (t, i) => i);
      }
    }
    function ts(t, i, e, s, h, l, n) {
      if (0 === i.length || s.from >= i.length || s.to <= 0) return;
      let { context: r, horizontalPixelRatio: o, verticalPixelRatio: u } = t,
        a = i[s.from],
        c = l(t, a),
        d = a;
      if (s.to - s.from < 2) {
        let f = h / 2;
        r.beginPath();
        let $ = { nt: a.nt - f, st: a.st },
          v = { nt: a.nt + f, st: a.st };
        r.moveTo($.nt * o, $.st * u),
          r.lineTo(v.nt * o, v.st * u),
          n(t, c, $, v);
      } else {
        let p = (i, e) => {
            n(t, c, d, e), r.beginPath(), (c = i), (d = e);
          },
          m = d;
        r.beginPath(), r.moveTo(a.nt * o, a.st * u);
        for (let b = s.from + 1; b < s.to; ++b) {
          m = i[b];
          let g = l(t, m);
          switch (e) {
            case 0:
              r.lineTo(m.nt * o, m.st * u);
              break;
            case 1:
              r.lineTo(m.nt * o, i[b - 1].st * u),
                g !== c && (p(g, m), r.lineTo(m.nt * o, i[b - 1].st * u)),
                r.lineTo(m.nt * o, m.st * u);
              break;
            case 2: {
              let [w, _] = tn(i, b - 1, b);
              r.bezierCurveTo(
                w.nt * o,
                w.st * u,
                _.nt * o,
                _.st * u,
                m.nt * o,
                m.st * u
              );
            }
          }
          1 !== e && g !== c && (p(g, m), r.moveTo(m.nt * o, m.st * u));
        }
        (d !== m || (d === m && 1 === e)) && n(t, c, d, m);
      }
    }
    function th(t, i) {
      return { nt: t.nt - i.nt, st: t.st - i.st };
    }
    function tl(t, i) {
      return { nt: t.nt / i, st: t.st / i };
    }
    function tn(t, i, e) {
      var s, h;
      let l = Math.min(t.length - 1, e + 1);
      return [
        ((s = t[i]),
        (h = tl(th(t[e], t[Math.max(0, i - 1)]), 6)),
        { nt: s.nt + h.nt, st: s.st + h.st }),
        th(t[e], tl(th(t[l], t[i]), 6)),
      ];
    }
    function tr(t, i, e, s, h) {
      let { context: l, horizontalPixelRatio: n, verticalPixelRatio: r } = i;
      l.lineTo(h.nt * n, t * r),
        l.lineTo(s.nt * n, t * r),
        l.closePath(),
        (l.fillStyle = e),
        l.fill();
    }
    class to extends M {
      constructor() {
        super(...arguments), (this.G = null);
      }
      J(t) {
        this.G = t;
      }
      K(t) {
        var i;
        if (null === this.G) return;
        let { it: e, tt: s, cs: h, et: l, Nt: n, ds: r } = this.G,
          u =
            null !== (i = this.G.fs) && void 0 !== i
              ? i
              : this.G.vs
              ? 0
              : t.mediaSize.height;
        if (null === s) return;
        let a = t.context;
        (a.lineCap = 'butt'),
          (a.lineJoin = 'round'),
          (a.lineWidth = l),
          o(a, n),
          (a.lineWidth = 1),
          ts(t, e, r, s, h, this.ps.bind(this), tr.bind(null, u));
      }
    }
    function tu(t, i, e) {
      return Math.min(Math.max(t, i), e);
    }
    function ta(t, i, e) {
      return i - t <= e;
    }
    function tc(t) {
      let i = Math.ceil(t);
      return i % 2 == 0 ? i - 1 : i;
    }
    class td {
      bs(t, i) {
        let e = this.ws,
          { gs: s, Ms: h, xs: l, Ss: n, ks: r, fs: o } = i;
        if (
          void 0 === this.ys ||
          void 0 === e ||
          e.gs !== s ||
          e.Ms !== h ||
          e.xs !== l ||
          e.Ss !== n ||
          e.fs !== o ||
          e.ks !== r
        ) {
          let u = t.context.createLinearGradient(0, 0, 0, r);
          if ((u.addColorStop(0, s), null != o)) {
            let a = tu((o * t.verticalPixelRatio) / r, 0, 1);
            u.addColorStop(a, h), u.addColorStop(a, l);
          }
          u.addColorStop(1, n), (this.ys = u), (this.ws = i);
        }
        return this.ys;
      }
    }
    function tf(t, i) {
      let e = t.context;
      (e.strokeStyle = i), e.stroke();
    }
    class t$ extends M {
      constructor() {
        super(...arguments), (this.G = null);
      }
      J(t) {
        this.G = t;
      }
      K(t) {
        if (null === this.G) return;
        let { it: i, tt: e, cs: s, ds: h, et: l, Nt: n, Rs: r } = this.G;
        if (null === e) return;
        let u = t.context;
        (u.lineCap = 'butt'),
          (u.lineWidth = l * t.verticalPixelRatio),
          o(u, n),
          (u.lineJoin = 'round');
        let a = this.Ds.bind(this);
        void 0 !== h && ts(t, i, h, e, s, a, tf),
          r &&
            (function (t, i, e, s, h) {
              let {
                  horizontalPixelRatio: l,
                  verticalPixelRatio: n,
                  context: r,
                } = t,
                o = null,
                u = (Math.max(1, Math.floor(l)) % 2) / 2,
                a = e * n + u;
              for (let c = s.to - 1; c >= s.from; --c) {
                let d = i[c];
                if (d) {
                  let f = h(t, d);
                  f !== o &&
                    (r.beginPath(),
                    null !== o && r.fill(),
                    (r.fillStyle = f),
                    (o = f));
                  let $ = Math.round(d.nt * l) + u,
                    v = d.st * n;
                  r.moveTo($, v), r.arc($, v, a, 0, 2 * Math.PI);
                }
              }
              r.fill();
            })(t, i, r, e, a);
      }
    }
    class tv extends t$ {
      Ds(t, i) {
        return i.lt;
      }
    }
    function tp(t, i, e, s, h = 0, l = i.length) {
      let n = l - h;
      for (; 0 < n; ) {
        let r = n >> 1,
          o = h + r;
        s(i[o], e) === t ? ((h = o + 1), (n -= r + 1)) : (n = r);
      }
      return h;
    }
    let tm = tp.bind(null, !0),
      tb = tp.bind(null, !1);
    function tg(t, i) {
      return t.ot < i;
    }
    function tw(t, i) {
      return i < t.ot;
    }
    function t_(t, i, e) {
      let s = i.Os(),
        h = i.ui(),
        l = tm(t, s, tg),
        n = tb(t, h, tw);
      if (!e) return { from: l, to: n };
      let r = l,
        o = n;
      return (
        l > 0 && l < t.length && t[l].ot >= s && (r = l - 1),
        n > 0 && n < t.length && t[n - 1].ot <= h && (o = n + 1),
        { from: r, to: o }
      );
    }
    class tS {
      constructor(t, i, e) {
        (this.Bs = !0),
          (this.Vs = !0),
          (this.As = !0),
          (this.zs = []),
          (this.Es = null),
          (this.Is = t),
          (this.Ls = i),
          (this.Ns = e);
      }
      bt(t) {
        (this.Bs = !0),
          'data' === t && (this.Vs = !0),
          'options' === t && (this.As = !0);
      }
      gt() {
        return this.Is.yt()
          ? (this.Fs(), null === this.Es ? null : this.Ws)
          : null;
      }
      js() {
        this.zs = this.zs.map((t) =>
          Object.assign(Object.assign({}, t), this.Is.$s().Hs(t.ot))
        );
      }
      Us() {
        this.Es = null;
      }
      Fs() {
        this.Vs && (this.qs(), (this.Vs = !1)),
          this.As && (this.js(), (this.As = !1)),
          this.Bs && (this.Ys(), (this.Bs = !1));
      }
      Ys() {
        let t = this.Is.Dt(),
          i = this.Ls.St();
        if ((this.Us(), i.Ni() || t.Ni())) return;
        let e = i.Zs();
        if (null === e || 0 === this.Is.zn().Xs()) return;
        let s = this.Is.Ct();
        null !== s &&
          ((this.Es = t_(this.zs, e, this.Ns)), this.Ks(t, i, s.Ot), this.Gs());
      }
    }
    class ty extends tS {
      constructor(t, i) {
        super(t, i, !0);
      }
      Ks(t, i, e) {
        i.Js(this.zs, P(this.Es)), t.Qs(this.zs, e, P(this.Es));
      }
      te(t, i) {
        return { ot: t, _t: i, nt: NaN, st: NaN };
      }
      qs() {
        let t = this.Is.$s();
        this.zs = this.Is.zn()
          .ie()
          .map((i) => {
            let e = i.Ot[3];
            return this.ne(i.se, e, t);
          });
      }
    }
    class t8 extends ty {
      constructor(t, i) {
        super(t, i),
          (this.Ws = new R()),
          (this.ee = new (class t extends to {
            constructor() {
              super(...arguments), (this.Cs = new td());
            }
            ps(t, i) {
              return this.Cs.bs(t, {
                gs: i.Ts,
                Ms: '',
                xs: '',
                Ss: i.Ps,
                ks: t.bitmapSize.height,
              });
            }
          })()),
          (this.re = new tv()),
          this.Ws.Z([this.ee, this.re]);
      }
      ne(t, i, e) {
        return Object.assign(Object.assign({}, this.te(t, i)), e.Hs(t));
      }
      Gs() {
        let t = this.Is.W();
        this.ee.J({
          ds: t.lineType,
          it: this.zs,
          Nt: t.lineStyle,
          et: t.lineWidth,
          fs: null,
          vs: t.invertFilledArea,
          tt: this.Es,
          cs: this.Ls.St().he(),
        }),
          this.re.J({
            ds: t.lineVisible ? t.lineType : void 0,
            it: this.zs,
            Nt: t.lineStyle,
            et: t.lineWidth,
            tt: this.Es,
            cs: this.Ls.St().he(),
            Rs: t.pointMarkersVisible
              ? t.pointMarkersRadius || t.lineWidth / 2 + 2
              : void 0,
          });
      }
    }
    class tx extends tS {
      constructor(t, i) {
        super(t, i, !1);
      }
      Ks(t, i, e) {
        i.Js(this.zs, P(this.Es)), t.me(this.zs, e, P(this.Es));
      }
      be(t, i, e) {
        return {
          ot: t,
          we: i.Ot[0],
          ge: i.Ot[1],
          Me: i.Ot[2],
          xe: i.Ot[3],
          nt: NaN,
          ve: NaN,
          ce: NaN,
          de: NaN,
          pe: NaN,
        };
      }
      qs() {
        let t = this.Is.$s();
        this.zs = this.Is.zn()
          .ie()
          .map((i) => this.ne(i.se, i, t));
      }
    }
    class tC extends tx {
      constructor() {
        super(...arguments),
          (this.Ws = new (class t extends M {
            constructor() {
              super(...arguments),
                (this.Et = null),
                (this.le = 0),
                (this.ae = 0);
            }
            J(t) {
              this.Et = t;
            }
            K({ context: t, horizontalPixelRatio: i, verticalPixelRatio: e }) {
              if (
                null === this.Et ||
                0 === this.Et.zn.length ||
                null === this.Et.tt
              )
                return;
              (this.le = this.oe(i)),
                this.le >= 2 &&
                  Math.max(1, Math.floor(i)) % 2 != this.le % 2 &&
                  this.le--,
                (this.ae = this.Et._e
                  ? Math.min(this.le, Math.floor(i))
                  : this.le);
              let s = null,
                h = this.ae <= this.le && this.Et.he >= Math.floor(1.5 * i);
              for (let l = this.Et.tt.from; l < this.Et.tt.to; ++l) {
                let n = this.Et.zn[l];
                s !== n.ue && ((t.fillStyle = n.ue), (s = n.ue));
                let r = Math.floor(0.5 * this.ae),
                  o = Math.round(n.nt * i),
                  u = o - r,
                  a = this.ae,
                  c = u + a - 1,
                  d = Math.min(n.ce, n.de),
                  f = Math.max(n.ce, n.de),
                  $ = Math.round(d * e) - r,
                  v = Math.round(f * e) + r,
                  p = Math.max(v - $, this.ae);
                t.fillRect(u, $, a, p);
                let m = Math.ceil(1.5 * this.le);
                if (h) {
                  if (this.Et.fe) {
                    let b = o - m,
                      g = Math.max($, Math.round(n.ve * e) - r),
                      w = g + a - 1;
                    w > $ + p - 1 && (g = (w = $ + p - 1) - a + 1),
                      t.fillRect(b, g, u - b, w - g + 1);
                  }
                  let _ = o + m,
                    S = Math.max($, Math.round(n.pe * e) - r),
                    y = S + a - 1;
                  y > $ + p - 1 && (S = (y = $ + p - 1) - a + 1),
                    t.fillRect(c + 1, S, _ - c, y - S + 1);
                }
              }
            }
            oe(t) {
              var i, e;
              return Math.max(
                Math.floor(t),
                Math.floor(((i = d(this.Et).he), Math.floor(0.3 * i * (e = t))))
              );
            }
          })());
      }
      ne(t, i, e) {
        return Object.assign(Object.assign({}, this.be(t, i, e)), e.Hs(t));
      }
      Gs() {
        let t = this.Is.W();
        this.Ws.J({
          zn: this.zs,
          he: this.Ls.St().he(),
          fe: t.openVisible,
          _e: t.thinBars,
          tt: this.Es,
        });
      }
    }
    class tE extends ty {
      constructor(t, i) {
        super(t, i),
          (this.Ws = new R()),
          (this.De = new (class t extends to {
            constructor() {
              super(...arguments), (this.Cs = new td());
            }
            ps(t, i) {
              let e = this.G;
              return this.Cs.bs(t, {
                gs: i.Se,
                Ms: i.ke,
                xs: i.ye,
                Ss: i.Ce,
                ks: t.bitmapSize.height,
                fs: e.fs,
              });
            }
          })()),
          (this.Oe = new (class t extends t$ {
            constructor() {
              super(...arguments), (this.Te = new td());
            }
            Ds(t, i) {
              let e = this.G;
              return this.Te.bs(t, {
                gs: i.Pe,
                Ms: i.Pe,
                xs: i.Re,
                Ss: i.Re,
                ks: t.bitmapSize.height,
                fs: e.fs,
              });
            }
          })()),
          this.Ws.Z([this.De, this.Oe]);
      }
      ne(t, i, e) {
        return Object.assign(Object.assign({}, this.te(t, i)), e.Hs(t));
      }
      Gs() {
        let t = this.Is.Ct();
        if (null === t) return;
        let i = this.Is.W(),
          e = this.Is.Dt().Rt(i.baseValue.price, t.Ot),
          s = this.Ls.St().he();
        this.De.J({
          it: this.zs,
          et: i.lineWidth,
          Nt: i.lineStyle,
          ds: i.lineType,
          fs: e,
          vs: !1,
          tt: this.Es,
          cs: s,
        }),
          this.Oe.J({
            it: this.zs,
            et: i.lineWidth,
            Nt: i.lineStyle,
            ds: i.lineVisible ? i.lineType : void 0,
            Rs: i.pointMarkersVisible
              ? i.pointMarkersRadius || i.lineWidth / 2 + 2
              : void 0,
            fs: e,
            tt: this.Es,
            cs: s,
          });
      }
    }
    class tk extends tx {
      constructor() {
        super(...arguments),
          (this.Ws = new (class t extends M {
            constructor() {
              super(...arguments), (this.Et = null), (this.le = 0);
            }
            J(t) {
              this.Et = t;
            }
            K(t) {
              var i, e;
              if (
                null === this.Et ||
                0 === this.Et.zn.length ||
                null === this.Et.tt
              )
                return;
              let { horizontalPixelRatio: s } = t;
              (this.le =
                ((i = this.Et.he),
                (e = s),
                i >= 2.5 && i <= 4
                  ? Math.floor(3 * e)
                  : Math.max(
                      Math.floor(e),
                      Math.min(
                        Math.floor(
                          i *
                            (1 -
                              (0.2 * Math.atan(Math.max(4, i) - 4)) /
                                (0.5 * Math.PI)) *
                            e
                        ),
                        Math.floor(i * e)
                      )
                    ))),
                this.le >= 2 && Math.floor(s) % 2 != this.le % 2 && this.le--;
              let h = this.Et.zn;
              this.Et.Be && this.Ve(t, h, this.Et.tt),
                this.Et._i && this.Ae(t, h, this.Et.tt);
              let l = this.ze(s);
              (!this.Et._i || this.le > 2 * l) && this.Ee(t, h, this.Et.tt);
            }
            Ve(t, i, e) {
              if (null === this.Et) return;
              let {
                  context: s,
                  horizontalPixelRatio: h,
                  verticalPixelRatio: l,
                } = t,
                n = '',
                r = Math.min(Math.floor(h), Math.floor(this.Et.he * h));
              r = Math.max(Math.floor(h), Math.min(r, this.le));
              let o = Math.floor(0.5 * r),
                u = null;
              for (let a = e.from; a < e.to; a++) {
                let c = i[a];
                c.Ie !== n && ((s.fillStyle = c.Ie), (n = c.Ie));
                let d = Math.round(Math.min(c.ve, c.pe) * l),
                  f = Math.round(Math.max(c.ve, c.pe) * l),
                  $ = Math.round(c.ce * l),
                  v = Math.round(c.de * l),
                  p = Math.round(h * c.nt) - o,
                  m = p + r - 1;
                null !== u && (p = Math.min((p = Math.max(u + 1, p)), m));
                let b = m - p + 1;
                s.fillRect(p, $, b, d - $),
                  s.fillRect(p, f + 1, b, v - f),
                  (u = m);
              }
            }
            ze(t) {
              let i = Math.floor(1 * t);
              this.le <= 2 * i && (i = Math.floor(0.5 * (this.le - 1)));
              let e = Math.max(Math.floor(t), i);
              return this.le <= 2 * e
                ? Math.max(Math.floor(t), Math.floor(1 * t))
                : e;
            }
            Ae(t, i, e) {
              if (null === this.Et) return;
              let {
                  context: s,
                  horizontalPixelRatio: h,
                  verticalPixelRatio: l,
                } = t,
                n = '',
                r = this.ze(h),
                o = null;
              for (let u = e.from; u < e.to; u++) {
                let a = i[u];
                a.Le !== n && ((s.fillStyle = a.Le), (n = a.Le));
                let c = Math.round(a.nt * h) - Math.floor(0.5 * this.le),
                  d = c + this.le - 1,
                  f = Math.round(Math.min(a.ve, a.pe) * l),
                  $ = Math.round(Math.max(a.ve, a.pe) * l);
                if (
                  (null !== o && (c = Math.min((c = Math.max(o + 1, c)), d)),
                  this.Et.he * h > 2 * r)
                )
                  A(s, c, f, d - c + 1, $ - f + 1, r);
                else {
                  let v = d - c + 1;
                  s.fillRect(c, f, v, $ - f + 1);
                }
                o = d;
              }
            }
            Ee(t, i, e) {
              if (null === this.Et) return;
              let {
                  context: s,
                  horizontalPixelRatio: h,
                  verticalPixelRatio: l,
                } = t,
                n = '',
                r = this.ze(h);
              for (let o = e.from; o < e.to; o++) {
                let u = i[o],
                  a = Math.round(Math.min(u.ve, u.pe) * l),
                  c = Math.round(Math.max(u.ve, u.pe) * l),
                  d = Math.round(u.nt * h) - Math.floor(0.5 * this.le),
                  f = d + this.le - 1;
                if (u.ue !== n) {
                  let $ = u.ue;
                  (s.fillStyle = $), (n = $);
                }
                this.Et._i && ((d += r), (a += r), (f -= r), (c -= r)),
                  a > c || s.fillRect(d, a, f - d + 1, c - a + 1);
              }
            }
          })());
      }
      ne(t, i, e) {
        return Object.assign(Object.assign({}, this.be(t, i, e)), e.Hs(t));
      }
      Gs() {
        let t = this.Is.W();
        this.Ws.J({
          zn: this.zs,
          he: this.Ls.St().he(),
          Be: t.wickVisible,
          _i: t.borderVisible,
          tt: this.Es,
        });
      }
    }
    class tz extends tS {
      constructor(t, i, e) {
        super(t, i, !1),
          (this.wn = e),
          (this.Ws = new (class t {
            constructor(t, i) {
              (this.Ne = t), (this.Ii = i);
            }
            X(t, i, e) {
              this.Ne.draw(t, this.Ii, i, e);
            }
          })(this.wn.renderer(), (i) => {
            let e = t.Ct();
            return null === e ? null : t.Dt().Rt(i, e.Ot);
          }));
      }
      Fe(t) {
        return this.wn.priceValueBuilder(t);
      }
      We(t) {
        return this.wn.isWhitespace(t);
      }
      qs() {
        let t = this.Is.$s();
        this.zs = this.Is.zn()
          .ie()
          .map((i) =>
            Object.assign(Object.assign({ ot: i.se, nt: NaN }, t.Hs(i.se)), {
              je: i.He,
            })
          );
      }
      Ks(t, i) {
        i.Js(this.zs, P(this.Es));
      }
      Gs() {
        this.wn.update(
          {
            bars: this.zs.map(tI),
            barSpacing: this.Ls.St().he(),
            visibleRange: this.Es,
          },
          this.Is.W()
        );
      }
    }
    function tI(t) {
      return { x: t.nt, time: t.ot, originalData: t.je, barColor: t.ue };
    }
    class tL extends ty {
      constructor() {
        super(...arguments),
          (this.Ws = new (class t extends M {
            constructor() {
              super(...arguments), (this.Et = null), (this.$e = []);
            }
            J(t) {
              (this.Et = t), (this.$e = []);
            }
            K({ context: t, horizontalPixelRatio: i, verticalPixelRatio: e }) {
              if (
                null === this.Et ||
                0 === this.Et.it.length ||
                null === this.Et.tt
              )
                return;
              this.$e.length || this.Ue(i);
              let s = Math.max(1, Math.floor(e)),
                h = Math.round(this.Et.qe * e) - Math.floor(s / 2),
                l = h + s;
              for (let n = this.Et.tt.from; n < this.Et.tt.to; n++) {
                let r = this.Et.it[n],
                  o = this.$e[n - this.Et.tt.from],
                  u = Math.round(r.st * e),
                  a,
                  c;
                (t.fillStyle = r.ue),
                  u <= h
                    ? ((a = u), (c = l))
                    : ((a = h), (c = u - Math.floor(s / 2) + s)),
                  t.fillRect(o.Os, a, o.ui - o.Os + 1, c - a);
              }
            }
            Ue(t) {
              if (
                null === this.Et ||
                0 === this.Et.it.length ||
                null === this.Et.tt
              )
                return void (this.$e = []);
              let i =
                  1 >= Math.ceil(this.Et.he * t)
                    ? 0
                    : Math.max(1, Math.floor(t)),
                e = Math.round(this.Et.he * t) - i;
              this.$e = Array(this.Et.tt.to - this.Et.tt.from);
              for (let s = this.Et.tt.from; s < this.Et.tt.to; s++) {
                let h = this.Et.it[s],
                  l = Math.round(h.nt * t),
                  n,
                  r;
                if (e % 2) {
                  let o = (e - 1) / 2;
                  (n = l - o), (r = l + o);
                } else {
                  let u = e / 2;
                  (n = l - u), (r = l + u - 1);
                }
                this.$e[s - this.Et.tt.from] = {
                  Os: n,
                  ui: r,
                  Ye: l,
                  Ze: h.nt * t,
                  ot: h.ot,
                };
              }
              for (let a = this.Et.tt.from + 1; a < this.Et.tt.to; a++) {
                let c = this.$e[a - this.Et.tt.from],
                  d = this.$e[a - this.Et.tt.from - 1];
                c.ot === d.ot + 1 &&
                  c.Os - d.ui !== i + 1 &&
                  (d.Ye > d.Ze ? (d.ui = c.Os - i - 1) : (c.Os = d.ui + i + 1));
              }
              let f = Math.ceil(this.Et.he * t);
              for (let $ = this.Et.tt.from; $ < this.Et.tt.to; $++) {
                let v = this.$e[$ - this.Et.tt.from];
                v.ui < v.Os && (v.ui = v.Os);
                let p = v.ui - v.Os + 1;
                f = Math.min(p, f);
              }
              if (i > 0 && f < 4)
                for (let m = this.Et.tt.from; m < this.Et.tt.to; m++) {
                  let b = this.$e[m - this.Et.tt.from];
                  b.ui - b.Os + 1 > f &&
                    (b.Ye > b.Ze ? (b.ui -= 1) : (b.Os += 1));
                }
            }
          })());
      }
      ne(t, i, e) {
        return Object.assign(Object.assign({}, this.te(t, i)), e.Hs(t));
      }
      Gs() {
        let t = {
          it: this.zs,
          he: this.Ls.St().he(),
          tt: this.Es,
          qe: this.Is.Dt().Rt(this.Is.W().base, d(this.Is.Ct()).Ot),
        };
        this.Ws.J(t);
      }
    }
    class tO extends ty {
      constructor() {
        super(...arguments), (this.Ws = new tv());
      }
      ne(t, i, e) {
        return Object.assign(Object.assign({}, this.te(t, i)), e.Hs(t));
      }
      Gs() {
        let t = this.Is.W(),
          i = {
            it: this.zs,
            Nt: t.lineStyle,
            ds: t.lineVisible ? t.lineType : void 0,
            et: t.lineWidth,
            Rs: t.pointMarkersVisible
              ? t.pointMarkersRadius || t.lineWidth / 2 + 2
              : void 0,
            tt: this.Es,
            cs: this.Ls.St().he(),
          };
        this.Ws.J(i);
      }
    }
    let t0 = /[2-9]/g;
    class tP {
      constructor(t = 50) {
        (this.Xe = 0),
          (this.Ke = 1),
          (this.Ge = 1),
          (this.Je = {}),
          (this.Qe = new Map()),
          (this.tr = t);
      }
      ir() {
        (this.Xe = 0),
          this.Qe.clear(),
          (this.Ke = 1),
          (this.Ge = 1),
          (this.Je = {});
      }
      xi(t, i, e) {
        return this.nr(t, i, e).width;
      }
      Mi(t, i, e) {
        let s = this.nr(t, i, e);
        return (
          ((s.actualBoundingBoxAscent || 0) -
            (s.actualBoundingBoxDescent || 0)) /
          2
        );
      }
      nr(t, i, e) {
        let s = String(i).replace(e || t0, '0');
        if (this.Qe.has(s)) return c(this.Qe.get(s)).sr;
        if (this.Xe === this.tr) {
          let h = this.Je[this.Ge];
          delete this.Je[this.Ge], this.Qe.delete(h), this.Ge++, this.Xe--;
        }
        t.save(), (t.textBaseline = 'middle');
        let l = t.measureText(s);
        return (
          t.restore(),
          (0 === l.width && i.length) ||
            (this.Qe.set(s, { sr: l, er: this.Ke }),
            (this.Je[this.Ke] = s),
            this.Xe++,
            this.Ke++),
          l
        );
      }
    }
    class tW {
      constructor(t, i, e) {
        (this._r = t),
          (this.lr = new tP(50)),
          (this.ur = i),
          (this.F = e),
          (this.j = -1),
          (this.Wt = new (class t {
            constructor(t) {
              (this.rr = null),
                (this.k = null),
                (this.hr = 'right'),
                (this.lr = t);
            }
            ar(t, i, e) {
              (this.rr = t), (this.k = i), (this.hr = e);
            }
            X(t) {
              null !== this.k &&
                null !== this.rr &&
                this.rr.X(t, this.k, this.lr, this.hr);
            }
          })(this.lr));
      }
      gt() {
        let t = this.F.cr(this.ur);
        if (null === t) return null;
        let i = t.dr(this.ur) ? t.vr() : this.ur.Dt();
        if (null === i) return null;
        let e = t.pr(i);
        if ('overlay' === e) return null;
        let s = this.F.mr();
        return (
          s.P !== this.j && ((this.j = s.P), this.lr.ir()),
          this.Wt.ar(this._r.zi(), s, e),
          this.Wt
        );
      }
    }
    class tT {
      constructor(t) {
        (this.Mr = { st: 0, O: 'rgba(0, 0, 0, 0)', et: 1, Nt: 0, yt: !1 }),
          (this.Sr = new (class t extends M {
            constructor() {
              super(...arguments), (this.Et = null);
            }
            J(t) {
              this.Et = t;
            }
            br(t, i) {
              var e;
              if (!(null === (e = this.Et) || void 0 === e ? void 0 : e.yt))
                return null;
              let { st: s, et: h, wr: l } = this.Et;
              return i >= s - h - 7 && i <= s + h + 7
                ? { gr: this.Et, wr: l }
                : null;
            }
            K({
              context: t,
              bitmapSize: i,
              horizontalPixelRatio: e,
              verticalPixelRatio: s,
            }) {
              if (null === this.Et || !1 === this.Et.yt) return;
              let h = Math.round(this.Et.st * s);
              h < 0 ||
                h > i.height ||
                ((t.lineCap = 'butt'),
                (t.strokeStyle = this.Et.O),
                (t.lineWidth = Math.floor(this.Et.et * e)),
                o(t, this.Et.Nt),
                u(t, h, 0, i.width));
            }
          })()),
          (this.ft = !0),
          (this.Is = t),
          (this.Ls = t.$t()),
          this.Sr.J(this.Mr);
      }
      bt() {
        this.ft = !0;
      }
      gt() {
        return this.Is.yt()
          ? (this.ft && (this.kr(), (this.ft = !1)), this.Sr)
          : null;
      }
    }
    let t9 = [
      { Dr: 0, Or: 0.25, Br: 4, Vr: 10, Ar: 0.25, zr: 0, Er: 0.4, Ir: 0.8 },
      { Dr: 0.25, Or: 0.525, Br: 10, Vr: 14, Ar: 0, zr: 0, Er: 0.8, Ir: 0 },
      { Dr: 0.525, Or: 1, Br: 14, Vr: 14, Ar: 0, zr: 0, Er: 0, Ir: 0 },
    ];
    function tR(t, i, e, s) {
      return (function (t, i) {
        if ('transparent' === t) return t;
        let e = _(t),
          s = e[3];
        return `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${i * s})`;
      })(t, e + (s - e) * i);
    }
    function tM(t, i) {
      var e, s, h;
      let l = (t % 2600) / 2600,
        n;
      for (let r of t9)
        if (l >= r.Dr && l <= r.Or) {
          n = r;
          break;
        }
      a(void 0 !== n, 'Last price animation internal logic error');
      let o = (l - n.Dr) / (n.Or - n.Dr);
      return {
        Pr: tR(i, o, n.Ar, n.zr),
        Rr: tR(i, o, n.Er, n.Ir),
        ht: ((e = o), (s = n.Br) + ((h = n.Vr) - s) * e),
      };
    }
    function tB(t, i) {
      return tc(Math.min(Math.max(t, 12), 30) * i);
    }
    function tD(t, i) {
      switch (t) {
        case 'arrowDown':
        case 'arrowUp':
          return tB(i, 1);
        case 'circle':
          return tB(i, 0.8);
        case 'square':
          return tB(i, 0.7);
      }
    }
    function tF(t) {
      return (function (t) {
        let i = Math.ceil(t);
        return i % 2 != 0 ? i - 1 : i;
      })(tB(t, 1));
    }
    function tA(t) {
      return Math.max(tB(t, 0.1), 3);
    }
    function tK(t, i, e) {
      return i ? t : e ? Math.ceil(t / 2) : 0;
    }
    function tU(t, i, e, s, h) {
      let l = tD('square', e),
        n = (l - 1) / 2,
        r = t - n,
        o = i - n;
      return s >= r && s <= r + l && h >= o && h <= o + l;
    }
    function tV(t, i, e, s) {
      let h = ((tD('arrowUp', s) - 1) / 2) * e.Gr,
        l = ((tc(s / 2) - 1) / 2) * e.Gr;
      i.beginPath(),
        t
          ? (i.moveTo(e.nt - h, e.st),
            i.lineTo(e.nt, e.st - h),
            i.lineTo(e.nt + h, e.st),
            i.lineTo(e.nt + l, e.st),
            i.lineTo(e.nt + l, e.st + h),
            i.lineTo(e.nt - l, e.st + h),
            i.lineTo(e.nt - l, e.st))
          : (i.moveTo(e.nt - h, e.st),
            i.lineTo(e.nt, e.st + h),
            i.lineTo(e.nt + h, e.st),
            i.lineTo(e.nt + l, e.st),
            i.lineTo(e.nt + l, e.st - h),
            i.lineTo(e.nt - l, e.st - h),
            i.lineTo(e.nt - l, e.st)),
        i.fill();
    }
    function tX(t, i, e, s, h, l) {
      return tU(i, e, s, h, l);
    }
    function tN(t, i, e, s) {
      var h, l, n, r, o, u, a, c, d;
      (i.fillStyle = t.O),
        void 0 !== t.Kt &&
          ((h = i),
          (l = t.Kt.th),
          (n = t.Kt.nt),
          (r = t.Kt.st),
          (o = e),
          (u = s),
          h.save(),
          h.scale(o, u),
          h.fillText(l, n, r),
          h.restore()),
        (function (t, i, e) {
          if (0 !== t.Xs) {
            switch (t.ih) {
              case 'arrowDown':
                return void tV(!1, i, e, t.Xs);
              case 'arrowUp':
                return void tV(!0, i, e, t.Xs);
              case 'circle':
                return void (function (t, i, e) {
                  let s = (tD('circle', e) - 1) / 2;
                  t.beginPath(),
                    t.arc(i.nt, i.st, s * i.Gr, 0, 2 * Math.PI, !1),
                    t.fill();
                })(i, e, t.Xs);
              case 'square':
                return void (function (t, i, e) {
                  let s = tD('square', e),
                    h = ((s - 1) * i.Gr) / 2,
                    l = i.nt - h,
                    n = i.st - h;
                  t.fillRect(l, n, s * i.Gr, s * i.Gr);
                })(i, e, t.Xs);
            }
            t.ih;
          }
        })(
          t,
          i,
          ((a = t),
          (c = e),
          (d = s),
          {
            nt: Math.round(a.nt * c) + (Math.max(1, Math.floor(c)) % 2) / 2,
            st: a.st * d,
            Gr: c,
          })
        );
    }
    function tj(t, i, e) {
      return (
        !(
          void 0 === t.Kt ||
          !(function (t, i, e, s, h, l) {
            let n = s / 2;
            return h >= t && h <= t + e && l >= i - n && l <= i + n;
          })(t.Kt.nt, t.Kt.st, t.Kt.Hi, t.Kt.At, i, e)
        ) ||
        (function (t, i, e) {
          if (0 === t.Xs) return !1;
          switch (t.ih) {
            case 'arrowDown':
            case 'arrowUp':
              var s, h, l, n, r;
              return (
                (s = t.nt),
                (h = t.st),
                (l = t.Xs),
                (n = i),
                tU(s, h, l, n, (r = e))
              );
            case 'circle':
              return (function (t, i, e, s, h) {
                let l = 2 + tD('circle', e) / 2,
                  n = t - s,
                  r = i - h;
                return Math.sqrt(n * n + r * r) <= l;
              })(t.nt, t.st, t.Xs, i, e);
            case 'square':
              return tU(t.nt, t.st, t.Xs, i, e);
          }
        })(t, i, e)
      );
    }
    function tJ(t, i, e, s, h, l, n, r, o) {
      let u = E(e) ? e : e.xe,
        a = E(e) ? e : e.ge,
        c = E(e) ? e : e.Me,
        d = E(i.size) ? Math.max(i.size, 0) : 1,
        f = tF(r.he()) * d,
        $ = f / 2;
      switch (((t.Xs = f), i.position)) {
        case 'inBar':
          return (
            (t.st = n.Rt(u, o)),
            void (void 0 !== t.Kt && (t.Kt.st = t.st + $ + l + 0.6 * h))
          );
        case 'aboveBar':
          return (
            (t.st = n.Rt(a, o) - $ - s.nh),
            void 0 !== t.Kt &&
              ((t.Kt.st = t.st - $ - 0.6 * h), (s.nh += 1.2 * h)),
            void (s.nh += f + l)
          );
        case 'belowBar':
          return (
            (t.st = n.Rt(c, o) + $ + s.sh),
            void 0 !== t.Kt &&
              ((t.Kt.st = t.st + $ + l + 0.6 * h), (s.sh += 1.2 * h)),
            void (s.sh += f + l)
          );
      }
      i.position;
    }
    class t1 {
      constructor(t, i) {
        (this.ft = !0),
          (this.eh = !0),
          (this.rh = !0),
          (this.hh = null),
          (this.ah = null),
          (this.Wt = new (class t extends M {
            constructor() {
              super(...arguments),
                (this.Et = null),
                (this.lr = new tP()),
                (this.j = -1),
                (this.H = ''),
                (this.Jr = '');
            }
            J(t) {
              this.Et = t;
            }
            ar(t, i) {
              (this.j === t && this.H === i) ||
                ((this.j = t), (this.H = i), (this.Jr = T(t, i)), this.lr.ir());
            }
            br(t, i) {
              if (null === this.Et || null === this.Et.tt) return null;
              for (let e = this.Et.tt.from; e < this.Et.tt.to; e++) {
                let s = this.Et.it[e];
                if (tj(s, t, i)) return { gr: s.Qr, wr: s.wr };
              }
              return null;
            }
            K(
              { context: t, horizontalPixelRatio: i, verticalPixelRatio: e },
              s,
              h
            ) {
              if (null !== this.Et && null !== this.Et.tt) {
                (t.textBaseline = 'middle'), (t.font = this.Jr);
                for (let l = this.Et.tt.from; l < this.Et.tt.to; l++) {
                  let n = this.Et.it[l];
                  void 0 !== n.Kt &&
                    ((n.Kt.Hi = this.lr.xi(t, n.Kt.th)),
                    (n.Kt.At = this.j),
                    (n.Kt.nt = n.nt - n.Kt.Hi / 2)),
                    tN(n, t, i, e);
                }
              }
            }
          })()),
          (this.Wr = t),
          (this.$i = i),
          (this.Et = { it: [], tt: null });
      }
      bt(t) {
        (this.ft = !0),
          (this.rh = !0),
          'data' === t && ((this.eh = !0), (this.ah = null));
      }
      gt(t) {
        if (!this.Wr.yt()) return null;
        this.ft && this.oh();
        let i = this.$i.W().layout;
        return (
          this.Wt.ar(i.fontSize, i.fontFamily), this.Wt.J(this.Et), this.Wt
        );
      }
      _h() {
        if (this.rh) {
          if (this.Wr.uh().length > 0) {
            let t = this.$i.St().he(),
              i = tA(t),
              e = 1.5 * tF(t) + 2 * i,
              s = this.dh();
            this.hh = {
              above: tK(e, s.aboveBar, s.inBar),
              below: tK(e, s.belowBar, s.inBar),
            };
          } else this.hh = null;
          this.rh = !1;
        }
        return this.hh;
      }
      dh() {
        return (
          null === this.ah &&
            (this.ah = this.Wr.uh().reduce(
              (t, i) => (t[i.position] || (t[i.position] = !0), t),
              { inBar: !1, aboveBar: !1, belowBar: !1 }
            )),
          this.ah
        );
      }
      oh() {
        let t = this.Wr.Dt(),
          i = this.$i.St(),
          e = this.Wr.uh();
        this.eh &&
          ((this.Et.it = e.map((t) => ({
            ot: t.time,
            nt: 0,
            st: 0,
            Xs: 0,
            ih: t.shape,
            O: t.color,
            Qr: t.Qr,
            wr: t.id,
            Kt: void 0,
          }))),
          (this.eh = !1));
        let s = this.$i.W().layout;
        this.Et.tt = null;
        let h = i.Zs();
        if (null === h) return;
        let l = this.Wr.Ct();
        if (null === l || 0 === this.Et.it.length) return;
        let n = NaN,
          r = tA(i.he()),
          o = { nh: r, sh: r };
        this.Et.tt = t_(this.Et.it, h, !0);
        for (let u = this.Et.tt.from; u < this.Et.tt.to; u++) {
          let a = e[u];
          a.time !== n && ((o.nh = r), (o.sh = r), (n = a.time));
          let c = this.Et.it[u];
          (c.nt = i.zt(a.time)),
            void 0 !== a.text &&
              a.text.length > 0 &&
              (c.Kt = { th: a.text, nt: 0, st: 0, Hi: 0, At: 0 });
          let d = this.Wr.fh(a.time);
          null !== d && tJ(c, a, d, o, s.fontSize, r, t, i, l.Ot);
        }
        this.ft = !1;
      }
    }
    function tH(t, i, e, s) {
      let h = Number.isFinite(i),
        l = Number.isFinite(e);
      return h && l ? t(i, e) : h || l ? (h ? i : e) : s;
    }
    class t3 {
      constructor(t, i) {
        (this.Sh = t), (this.kh = i);
      }
      yh(t) {
        return null !== t && this.Sh === t.Sh && this.kh === t.kh;
      }
      Ch() {
        return new t3(this.Sh, this.kh);
      }
      Th() {
        return this.Sh;
      }
      Ph() {
        return this.kh;
      }
      Rh() {
        return this.kh - this.Sh;
      }
      Ni() {
        return (
          this.kh === this.Sh || Number.isNaN(this.kh) || Number.isNaN(this.Sh)
        );
      }
      ts(t) {
        return null === t
          ? this
          : new t3(
              tH(Math.min, this.Th(), t.Th(), -1 / 0),
              tH(Math.max, this.Ph(), t.Ph(), 1 / 0)
            );
      }
      Dh(t) {
        if (!E(t) || 0 == this.kh - this.Sh) return;
        let i = 0.5 * (this.kh + this.Sh),
          e = this.kh - i,
          s = this.Sh - i;
        (e *= t), (s *= t), (this.kh = i + e), (this.Sh = i + s);
      }
      Oh(t) {
        E(t) && ((this.kh += t), (this.Sh += t));
      }
      Bh() {
        return { minValue: this.Sh, maxValue: this.kh };
      }
      static Vh(t) {
        return null === t ? null : new t3(t.minValue, t.maxValue);
      }
    }
    class tZ {
      constructor(t, i) {
        (this.Ah = t), (this.zh = i || null);
      }
      Eh() {
        return this.Ah;
      }
      Ih() {
        return this.zh;
      }
      Bh() {
        return null === this.Ah
          ? null
          : { priceRange: this.Ah.Bh(), margins: this.zh || void 0 };
      }
      static Vh(t) {
        return null === t ? null : new tZ(t3.Vh(t.priceRange), t.margins);
      }
    }
    class tG {
      constructor(t, i) {
        (this.Wr = t),
          (this.cn = i),
          (this.Wh = new (class t extends tT {
            constructor(t, i) {
              super(t), (this.Lh = i);
            }
            kr() {
              let t = this.Mr;
              t.yt = !1;
              let i = this.Lh.W();
              if (!this.Is.yt() || !i.lineVisible) return;
              let e = this.Lh.Nh();
              null !== e &&
                ((t.yt = !0),
                (t.st = e),
                (t.O = i.color),
                (t.et = i.lineWidth),
                (t.Nt = i.lineStyle),
                (t.wr = this.Lh.W().id));
            }
          })(t, this)),
          (this._r = new (class t extends j {
            constructor(t, i) {
              super(), (this.Wr = t), (this.Lh = i);
            }
            Ei(t, i, e) {
              (t.yt = !1), (i.yt = !1);
              let s = this.Lh.W(),
                h = s.axisLabelVisible,
                l = '' !== s.title,
                n = this.Wr;
              if (!h || !n.yt()) return;
              let r = this.Lh.Nh();
              if (null === r) return;
              l && ((i.Kt = s.title), (i.yt = !0)),
                (i.Bt = n.$t().Vt(r / n.Dt().At())),
                (t.Kt = this.Fh(s.price)),
                (t.yt = !0);
              let o = y(s.axisLabelColor || s.color);
              e.t = o.t;
              let u = s.axisLabelTextColor || o.i;
              (t.O = u), (i.O = u), (e.ki = r);
            }
            Fh(t) {
              let i = this.Wr.Ct();
              return null === i ? '' : this.Wr.Dt().Fi(t, i.Ot);
            }
          })(t, this)),
          (this.jh = new tW(this._r, t, t.$t()));
      }
      Hh(t) {
        C(this.cn, t), this.bt(), this.Wr.$t().$h();
      }
      W() {
        return this.cn;
      }
      Uh() {
        return this.Wh;
      }
      qh() {
        return this.jh;
      }
      Yh() {
        return this._r;
      }
      bt() {
        this.Wh.bt(), this._r.bt();
      }
      Nh() {
        let t = this.Wr,
          i = t.Dt();
        if (t.$t().St().Ni() || i.Ni()) return null;
        let e = t.Ct();
        return null === e ? null : i.Rt(this.cn.price, e.Ot);
      }
    }
    class tY extends G {
      constructor(t) {
        super(), (this.$i = t);
      }
      $t() {
        return this.$i;
      }
    }
    class t4 {
      constructor(t) {
        (this.Xh = (t, i) => (void 0 !== i ? i.Ot : this.Wr.zn().Kh(t))),
          (this.Wr = t),
          (this.Gh = {
            Bar(t, i, e, s) {
              var h;
              let l = i.upColor,
                n = i.downColor,
                r = d(t(e, s)),
                o = f(r.Ot[0]) <= f(r.Ot[3]);
              return { ue: null !== (h = r.O) && void 0 !== h ? h : o ? l : n };
            },
            Candlestick(t, i, e, s) {
              var h, l, n;
              let r = i.upColor,
                o = i.downColor,
                u = i.borderUpColor,
                a = i.borderDownColor,
                c = i.wickUpColor,
                $ = i.wickDownColor,
                v = d(t(e, s)),
                p = f(v.Ot[0]) <= f(v.Ot[3]);
              return {
                ue: null !== (h = v.O) && void 0 !== h ? h : p ? r : o,
                Le: null !== (l = v.Bt) && void 0 !== l ? l : p ? u : a,
                Ie: null !== (n = v.Zh) && void 0 !== n ? n : p ? c : $,
              };
            },
            Custom(t, i, e, s) {
              var h;
              return {
                ue: null !== (h = d(t(e, s)).O) && void 0 !== h ? h : i.color,
              };
            },
            Area(t, i, e, s) {
              var h, l, n, r;
              let o = d(t(e, s));
              return {
                ue: null !== (h = o.lt) && void 0 !== h ? h : i.lineColor,
                lt: null !== (l = o.lt) && void 0 !== l ? l : i.lineColor,
                Ts: null !== (n = o.Ts) && void 0 !== n ? n : i.topColor,
                Ps: null !== (r = o.Ps) && void 0 !== r ? r : i.bottomColor,
              };
            },
            Baseline(t, i, e, s) {
              var h, l, n, r, o, u;
              let a = d(t(e, s));
              return {
                ue:
                  a.Ot[3] >= i.baseValue.price
                    ? i.topLineColor
                    : i.bottomLineColor,
                Pe: null !== (h = a.Pe) && void 0 !== h ? h : i.topLineColor,
                Re: null !== (l = a.Re) && void 0 !== l ? l : i.bottomLineColor,
                Se: null !== (n = a.Se) && void 0 !== n ? n : i.topFillColor1,
                ke: null !== (r = a.ke) && void 0 !== r ? r : i.topFillColor2,
                ye:
                  null !== (o = a.ye) && void 0 !== o ? o : i.bottomFillColor1,
                Ce:
                  null !== (u = a.Ce) && void 0 !== u ? u : i.bottomFillColor2,
              };
            },
            Line(t, i, e, s) {
              var h, l;
              let n = d(t(e, s));
              return {
                ue: null !== (h = n.O) && void 0 !== h ? h : i.color,
                lt: null !== (l = n.O) && void 0 !== l ? l : i.color,
              };
            },
            Histogram(t, i, e, s) {
              var h;
              return {
                ue: null !== (h = d(t(e, s)).O) && void 0 !== h ? h : i.color,
              };
            },
          }[t.Jh()]);
      }
      Hs(t, i) {
        return this.Gh(this.Xh, this.Wr.W(), t, i);
      }
    }
    function tq(t, i) {
      return null === t
        ? i
        : null === i
        ? t
        : { pl: Math.min(t.pl, i.pl), ml: Math.max(t.ml, i.ml) };
    }
    ((iJ = i7 || (i7 = {}))[(iJ.NearestLeft = -1)] = 'NearestLeft'),
      (iJ[(iJ.None = 0)] = 'None'),
      (iJ[(iJ.NearestRight = 1)] = 'NearestRight');
    class tQ {
      constructor(t) {
        this.bl = t;
      }
      X(t, i, e) {
        this.bl.draw(t);
      }
      wl(t, i, e) {
        var s, h;
        null === (h = (s = this.bl).drawBackground) ||
          void 0 === h ||
          h.call(s, t);
      }
    }
    class t7 {
      constructor(t) {
        (this.Qe = null), (this.wn = t);
      }
      gt() {
        var t;
        let i = this.wn.renderer();
        if (null === i) return null;
        if ((null === (t = this.Qe) || void 0 === t ? void 0 : t.gl) === i)
          return this.Qe.Ml;
        let e = new tQ(i);
        return (this.Qe = { gl: i, Ml: e }), e;
      }
      xl() {
        var t, i, e;
        return null !==
          (e =
            null === (i = (t = this.wn).zOrder) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== e
          ? e
          : 'normal';
      }
    }
    function t6(t) {
      var i, e, s, h, l;
      return {
        Kt: t.text(),
        ki: t.coordinate(),
        Si:
          null === (i = t.fixedCoordinate) || void 0 === i ? void 0 : i.call(t),
        O: t.textColor(),
        t: t.backColor(),
        yt:
          null ===
            (s =
              null === (e = t.visible) || void 0 === e ? void 0 : e.call(t)) ||
          void 0 === s ||
          s,
        hi:
          null ===
            (l =
              null === (h = t.tickVisible) || void 0 === h
                ? void 0
                : h.call(t)) ||
          void 0 === l ||
          l,
      };
    }
    class t2 {
      constructor(t, i) {
        (this.Wt = new Z()), (this.Sl = t), (this.kl = i);
      }
      gt() {
        return (
          this.Wt.J(Object.assign({ Hi: this.kl.Hi() }, t6(this.Sl))), this.Wt
        );
      }
    }
    class t5 extends j {
      constructor(t, i) {
        super(), (this.Sl = t), (this.Ii = i);
      }
      Ei(t, i, e) {
        let s = t6(this.Sl);
        (e.t = s.t), (t.O = s.O);
        let h = (2 / 12) * this.Ii.P();
        (e.wi = h),
          (e.gi = h),
          (e.ki = s.ki),
          (e.Si = s.Si),
          (t.Kt = s.Kt),
          (t.yt = s.yt),
          (t.hi = s.hi);
      }
    }
    class it {
      constructor(t, i) {
        (this.yl = null),
          (this.Cl = null),
          (this.Tl = null),
          (this.Pl = null),
          (this.Rl = null),
          (this.Dl = t),
          (this.Wr = i);
      }
      Ol() {
        return this.Dl;
      }
      On() {
        var t, i;
        null === (i = (t = this.Dl).updateAllViews) ||
          void 0 === i ||
          i.call(t);
      }
      Pn() {
        var t, i, e, s;
        let h =
          null !==
            (e =
              null === (i = (t = this.Dl).paneViews) || void 0 === i
                ? void 0
                : i.call(t)) && void 0 !== e
            ? e
            : [];
        if ((null === (s = this.yl) || void 0 === s ? void 0 : s.gl) === h)
          return this.yl.Ml;
        let l = h.map((t) => new t7(t));
        return (this.yl = { gl: h, Ml: l }), l;
      }
      Qi() {
        var t, i, e, s;
        let h =
          null !==
            (e =
              null === (i = (t = this.Dl).timeAxisViews) || void 0 === i
                ? void 0
                : i.call(t)) && void 0 !== e
            ? e
            : [];
        if ((null === (s = this.Cl) || void 0 === s ? void 0 : s.gl) === h)
          return this.Cl.Ml;
        let l = this.Wr.$t().St(),
          n = h.map((t) => new t2(t, l));
        return (this.Cl = { gl: h, Ml: n }), n;
      }
      Rn() {
        var t, i, e, s;
        let h =
          null !==
            (e =
              null === (i = (t = this.Dl).priceAxisViews) || void 0 === i
                ? void 0
                : i.call(t)) && void 0 !== e
            ? e
            : [];
        if ((null === (s = this.Tl) || void 0 === s ? void 0 : s.gl) === h)
          return this.Tl.Ml;
        let l = this.Wr.Dt(),
          n = h.map((t) => new t5(t, l));
        return (this.Tl = { gl: h, Ml: n }), n;
      }
      Bl() {
        var t, i, e, s;
        let h =
          null !==
            (e =
              null === (i = (t = this.Dl).priceAxisPaneViews) || void 0 === i
                ? void 0
                : i.call(t)) && void 0 !== e
            ? e
            : [];
        if ((null === (s = this.Pl) || void 0 === s ? void 0 : s.gl) === h)
          return this.Pl.Ml;
        let l = h.map((t) => new t7(t));
        return (this.Pl = { gl: h, Ml: l }), l;
      }
      Vl() {
        var t, i, e, s;
        let h =
          null !==
            (e =
              null === (i = (t = this.Dl).timeAxisPaneViews) || void 0 === i
                ? void 0
                : i.call(t)) && void 0 !== e
            ? e
            : [];
        if ((null === (s = this.Rl) || void 0 === s ? void 0 : s.gl) === h)
          return this.Rl.Ml;
        let l = h.map((t) => new t7(t));
        return (this.Rl = { gl: h, Ml: l }), l;
      }
      Al(t, i) {
        var e, s, h;
        return null !==
          (h =
            null === (s = (e = this.Dl).autoscaleInfo) || void 0 === s
              ? void 0
              : s.call(e, t, i)) && void 0 !== h
          ? h
          : null;
      }
      br(t, i) {
        var e, s, h;
        return null !==
          (h =
            null === (s = (e = this.Dl).hitTest) || void 0 === s
              ? void 0
              : s.call(e, t, i)) && void 0 !== h
          ? h
          : null;
      }
    }
    function ii(t, i, e, s) {
      t.forEach((t) => {
        i(t).forEach((t) => {
          t.xl() === e && s.push(t);
        });
      });
    }
    function ie(t) {
      return t.Pn();
    }
    function is(t) {
      return t.Bl();
    }
    function ih(t) {
      return t.Vl();
    }
    class il extends tY {
      constructor(t, i, e, s, h) {
        super(t),
          (this.Et = new (class t {
            constructor() {
              (this.Qh = []), (this.tl = new Map()), (this.il = new Map());
            }
            nl() {
              return this.Xs() > 0 ? this.Qh[this.Qh.length - 1] : null;
            }
            sl() {
              return this.Xs() > 0 ? this.el(0) : null;
            }
            An() {
              return this.Xs() > 0 ? this.el(this.Qh.length - 1) : null;
            }
            Xs() {
              return this.Qh.length;
            }
            Ni() {
              return 0 === this.Xs();
            }
            Xr(t) {
              return null !== this.rl(t, 0);
            }
            Kh(t) {
              return this.hl(t);
            }
            hl(t, i = 0) {
              let e = this.rl(t, i);
              return null === e
                ? null
                : Object.assign(Object.assign({}, this.ll(e)), {
                    se: this.el(e),
                  });
            }
            ie() {
              return this.Qh;
            }
            al(t, i, e) {
              if (this.Ni()) return null;
              let s = null;
              for (let h of e) s = tq(s, this.ol(t, i, h));
              return s;
            }
            J(t) {
              this.il.clear(), this.tl.clear(), (this.Qh = t);
            }
            el(t) {
              return this.Qh[t].se;
            }
            ll(t) {
              return this.Qh[t];
            }
            rl(t, i) {
              let e = this._l(t);
              if (null === e && 0 !== i)
                switch (i) {
                  case -1:
                    return this.ul(t);
                  case 1:
                    return this.cl(t);
                  default:
                    throw TypeError('Unknown search mode');
                }
              return e;
            }
            ul(t) {
              let i = this.dl(t);
              return (
                i > 0 && (i -= 1),
                i !== this.Qh.length && this.el(i) < t ? i : null
              );
            }
            cl(t) {
              let i = this.fl(t);
              return i !== this.Qh.length && t < this.el(i) ? i : null;
            }
            _l(t) {
              let i = this.dl(t);
              return i === this.Qh.length || t < this.Qh[i].se ? null : i;
            }
            dl(t) {
              return tm(this.Qh, t, (t, i) => t.se < i);
            }
            fl(t) {
              return tb(this.Qh, t, (t, i) => t.se > i);
            }
            vl(t, i, e) {
              let s = null;
              for (let h = t; h < i; h++) {
                let l = this.Qh[h].Ot[e];
                Number.isNaN(l) ||
                  (null === s
                    ? (s = { pl: l, ml: l })
                    : (l < s.pl && (s.pl = l), l > s.ml && (s.ml = l)));
              }
              return s;
            }
            ol(t, i, e) {
              if (this.Ni()) return null;
              let s = null,
                h = d(this.sl()),
                l = d(this.An()),
                n = Math.max(t, h),
                r = Math.min(i, l),
                o = 30 * Math.ceil(n / 30),
                u = Math.max(o, 30 * Math.floor(r / 30));
              {
                let a = this.dl(n),
                  c = this.fl(Math.min(r, o, i));
                s = tq(s, this.vl(a, c, e));
              }
              let f = this.tl.get(e);
              void 0 === f && ((f = new Map()), this.tl.set(e, f));
              for (let $ = Math.max(o + 1, n); $ < u; $ += 30) {
                let v = Math.floor($ / 30),
                  p = f.get(v);
                if (void 0 === p) {
                  let m = this.dl(30 * v),
                    b = this.fl((v + 1) * 30 - 1);
                  (p = this.vl(m, b, e)), f.set(v, p);
                }
                s = tq(s, p);
              }
              {
                let g = this.dl(u),
                  w = this.fl(r);
                s = tq(s, this.vl(g, w, e));
              }
              return s;
            }
          })()),
          (this.Wh = new (class t extends tT {
            constructor(t) {
              super(t);
            }
            kr() {
              let t = this.Mr;
              t.yt = !1;
              let i = this.Is.W();
              if (!i.priceLineVisible || !this.Is.yt()) return;
              let e = this.Is.Yr(0 === i.priceLineSource);
              e.Zr ||
                ((t.yt = !0),
                (t.st = e.ki),
                (t.O = this.Is.ph(e.O)),
                (t.et = i.priceLineWidth),
                (t.Nt = i.priceLineStyle));
            }
          })(this)),
          (this.zl = []),
          (this.El = new (class t extends tT {
            constructor(t) {
              super(t);
            }
            kr() {
              this.Mr.yt = !1;
              let t = this.Is.Dt(),
                i = t.yr().yr;
              if (2 !== i && 3 !== i) return;
              let e = this.Is.W();
              if (!e.baseLineVisible || !this.Is.yt()) return;
              let s = this.Is.Ct();
              null !== s &&
                ((this.Mr.yt = !0),
                (this.Mr.st = t.Rt(s.Ot, s.Ot)),
                (this.Mr.O = e.baseLineColor),
                (this.Mr.et = e.baseLineWidth),
                (this.Mr.Nt = e.baseLineStyle));
            }
          })(this)),
          (this.Il = null),
          (this.Ll = null),
          (this.Nl = []),
          (this.Fl = []),
          (this.Wl = null),
          (this.jl = []),
          (this.cn = i),
          (this.Hl = e);
        let l = new (class t extends j {
          constructor(t) {
            super(), (this.jt = t);
          }
          Ei(t, i, e) {
            (t.yt = !1), (i.yt = !1);
            let s = this.jt;
            if (!s.yt()) return;
            let h = s.W(),
              l = h.lastValueVisible,
              n = '' !== s.mh(),
              r = 0 === h.seriesLastValueMode,
              o = s.Yr(!1);
            if (o.Zr) return;
            l && ((t.Kt = this.bh(o, l, r)), (t.yt = 0 !== t.Kt.length)),
              (n || r) &&
                ((i.Kt = this.wh(o, l, n, r)), (i.yt = i.Kt.length > 0));
            let u = s.ph(o.O),
              a = y(u);
            (e.t = a.t),
              (e.ki = o.ki),
              (i.Bt = s.$t().Vt(o.ki / s.Dt().At())),
              (t.Bt = u),
              (t.O = a.i),
              (i.O = a.i);
          }
          wh(t, i, e, s) {
            let h = '',
              l = this.jt.mh();
            return (
              e && 0 !== l.length && (h += `${l} `),
              i && s && (h += this.jt.Dt().gh() ? t.Mh : t.xh),
              h.trim()
            );
          }
          bh(t, i, e) {
            return i ? (e ? (this.jt.Dt().gh() ? t.xh : t.Mh) : t.Kt) : '';
          }
        })(this);
        (this.rn = [l]),
          (this.jh = new tW(l, this, t)),
          ('Area' !== e && 'Line' !== e && 'Baseline' !== e) ||
            (this.Il = new (class t {
              constructor(t) {
                (this.Wt = new (class t extends M {
                  constructor() {
                    super(...arguments), (this.Et = null);
                  }
                  J(t) {
                    this.Et = t;
                  }
                  He() {
                    return this.Et;
                  }
                  K({
                    context: t,
                    horizontalPixelRatio: i,
                    verticalPixelRatio: e,
                  }) {
                    let s = this.Et;
                    if (null === s) return;
                    let h = Math.max(1, Math.floor(i)),
                      l = Math.round(s.Ze.x * i) + (h % 2) / 2,
                      n = s.Ze.y * e;
                    (t.fillStyle = s.Cr), t.beginPath();
                    let r = Math.max(2, 1.5 * s.Tr) * i;
                    t.arc(l, n, r, 0, 2 * Math.PI, !1),
                      t.fill(),
                      (t.fillStyle = s.Pr),
                      t.beginPath(),
                      t.arc(l, n, s.ht * i, 0, 2 * Math.PI, !1),
                      t.fill(),
                      (t.lineWidth = h),
                      (t.strokeStyle = s.Rr),
                      t.beginPath(),
                      t.arc(l, n, s.ht * i + h / 2, 0, 2 * Math.PI, !1),
                      t.stroke();
                  }
                })()),
                  (this.ft = !0),
                  (this.Lr = !0),
                  (this.Nr = performance.now()),
                  (this.Fr = this.Nr - 1),
                  (this.Wr = t);
              }
              jr() {
                (this.Fr = this.Nr - 1), this.bt();
              }
              Hr() {
                if ((this.bt(), 2 === this.Wr.W().lastPriceAnimation)) {
                  let t = performance.now(),
                    i = this.Fr - t;
                  if (i > 0) return void (i < 650 && (this.Fr += 2600));
                  (this.Nr = t), (this.Fr = t + 2600);
                }
              }
              bt() {
                this.ft = !0;
              }
              $r() {
                this.Lr = !0;
              }
              yt() {
                return 0 !== this.Wr.W().lastPriceAnimation;
              }
              Ur() {
                switch (this.Wr.W().lastPriceAnimation) {
                  case 0:
                    return !1;
                  case 1:
                    return !0;
                  case 2:
                    return performance.now() <= this.Fr;
                }
              }
              gt() {
                return (
                  this.ft
                    ? (this.Mt(), (this.ft = !1), (this.Lr = !1))
                    : this.Lr && (this.qr(), (this.Lr = !1)),
                  this.Wt
                );
              }
              Mt() {
                this.Wt.J(null);
                let t = this.Wr.$t().St(),
                  i = t.Zs(),
                  e = this.Wr.Ct();
                if (null === i || null === e) return;
                let s = this.Wr.Yr(!0);
                if (s.Zr || !i.Xr(s.se)) return;
                let h = { x: t.zt(s.se), y: this.Wr.Dt().Rt(s._t, e.Ot) },
                  l = s.O,
                  n = this.Wr.W().lineWidth,
                  r = tM(this.Kr(), l);
                this.Wt.J({
                  Cr: l,
                  Tr: n,
                  Pr: r.Pr,
                  Rr: r.Rr,
                  ht: r.ht,
                  Ze: h,
                });
              }
              qr() {
                let t = this.Wt.He();
                if (null !== t) {
                  let i = tM(this.Kr(), t.Cr);
                  (t.Pr = i.Pr), (t.Rr = i.Rr), (t.ht = i.ht);
                }
              }
              Kr() {
                return this.Ur() ? performance.now() - this.Nr : 2599;
              }
            })(this)),
          this.$l(),
          this.Ul(h);
      }
      S() {
        null !== this.Wl && clearTimeout(this.Wl);
      }
      ph(t) {
        return this.cn.priceLineColor || t;
      }
      Yr(t) {
        let i = { Zr: !0 },
          e = this.Dt();
        if (this.$t().St().Ni() || e.Ni() || this.Et.Ni()) return i;
        let s = this.$t().St().Zs(),
          h = this.Ct();
        if (null === s || null === h) return i;
        let l, n;
        if (t) {
          let r = this.Et.nl();
          if (null === r) return i;
          (l = r), (n = r.se);
        } else {
          let o = this.Et.hl(s.ui(), -1);
          if (null === o || null === (l = this.Et.Kh(o.se))) return i;
          n = o.se;
        }
        let u = l.Ot[3],
          a = this.$s().Hs(n, { Ot: l }),
          c = e.Rt(u, h.Ot);
        return {
          Zr: !1,
          _t: u,
          Kt: e.Fi(u, h.Ot),
          Mh: e.ql(u),
          xh: e.Yl(u, h.Ot),
          O: a.ue,
          ki: c,
          se: n,
        };
      }
      $s() {
        return null !== this.Ll || (this.Ll = new t4(this)), this.Ll;
      }
      W() {
        return this.cn;
      }
      Hh(t) {
        let i = t.priceScaleId;
        void 0 !== i && i !== this.cn.priceScaleId && this.$t().Zl(this, i),
          C(this.cn, t),
          void 0 !== t.priceFormat && (this.$l(), this.$t().Xl()),
          this.$t().Kl(this),
          this.$t().Gl(),
          this.wn.bt('options');
      }
      J(t, i) {
        this.Et.J(t),
          this.Jl(),
          this.wn.bt('data'),
          this.dn.bt('data'),
          null !== this.Il &&
            (i && i.Ql ? this.Il.Hr() : 0 === t.length && this.Il.jr());
        let e = this.$t().cr(this);
        this.$t().ta(e), this.$t().Kl(this), this.$t().Gl(), this.$t().$h();
      }
      ia(t) {
        (this.Nl = t), this.Jl();
        let i = this.$t().cr(this);
        this.dn.bt('data'),
          this.$t().ta(i),
          this.$t().Kl(this),
          this.$t().Gl(),
          this.$t().$h();
      }
      na() {
        return this.Nl;
      }
      uh() {
        return this.Fl;
      }
      sa(t) {
        let i = new tG(this, t);
        return this.zl.push(i), this.$t().Kl(this), i;
      }
      ea(t) {
        let i = this.zl.indexOf(t);
        -1 !== i && this.zl.splice(i, 1), this.$t().Kl(this);
      }
      Jh() {
        return this.Hl;
      }
      Ct() {
        let t = this.ra();
        return null === t ? null : { Ot: t.Ot[3], ha: t.ot };
      }
      ra() {
        let t = this.$t().St().Zs();
        if (null === t) return null;
        let i = t.Os();
        return this.Et.hl(i, 1);
      }
      zn() {
        return this.Et;
      }
      fh(t) {
        let i = this.Et.Kh(t);
        return null === i
          ? null
          : 'Bar' === this.Hl ||
            'Candlestick' === this.Hl ||
            'Custom' === this.Hl
          ? { we: i.Ot[0], ge: i.Ot[1], Me: i.Ot[2], xe: i.Ot[3] }
          : i.Ot[3];
      }
      la(t) {
        let i = [];
        ii(this.jl, ie, 'top', i);
        let e = this.Il;
        return (
          null !== e &&
            e.yt() &&
            (null === this.Wl &&
              e.Ur() &&
              (this.Wl = setTimeout(() => {
                (this.Wl = null), this.$t().aa();
              }, 0)),
            e.$r(),
            i.unshift(e)),
          i
        );
      }
      Pn() {
        let t = [];
        this.oa() || t.push(this.El), t.push(this.wn, this.Wh, this.dn);
        let i = this.zl.map((t) => t.Uh());
        return t.push(...i), ii(this.jl, ie, 'normal', t), t;
      }
      _a() {
        return this.ua(ie, 'bottom');
      }
      ca(t) {
        return this.ua(is, t);
      }
      da(t) {
        return this.ua(ih, t);
      }
      fa(t, i) {
        return this.jl.map((e) => e.br(t, i)).filter((t) => null !== t);
      }
      Ji(t) {
        return [this.jh, ...this.zl.map((t) => t.qh())];
      }
      Rn(t, i) {
        if (i !== this.Yi && !this.oa()) return [];
        let e = [...this.rn];
        for (let s of this.zl) e.push(s.Yh());
        return (
          this.jl.forEach((t) => {
            e.push(...t.Rn());
          }),
          e
        );
      }
      Qi() {
        let t = [];
        return (
          this.jl.forEach((i) => {
            t.push(...i.Qi());
          }),
          t
        );
      }
      Al(t, i) {
        if (void 0 !== this.cn.autoscaleInfoProvider) {
          let e = this.cn.autoscaleInfoProvider(() => {
            let e = this.va(t, i);
            return null === e ? null : e.Bh();
          });
          return tZ.Vh(e);
        }
        return this.va(t, i);
      }
      pa() {
        return this.cn.priceFormat.minMove;
      }
      ma() {
        return this.ba;
      }
      On() {
        var t;
        for (let i of (this.wn.bt(), this.dn.bt(), this.rn)) i.bt();
        for (let e of this.zl) e.bt();
        this.Wh.bt(),
          this.El.bt(),
          null === (t = this.Il) || void 0 === t || t.bt(),
          this.jl.forEach((t) => t.On());
      }
      Dt() {
        return d(super.Dt());
      }
      kt(t) {
        if (
          !(
            ('Line' === this.Hl ||
              'Area' === this.Hl ||
              'Baseline' === this.Hl) &&
            this.cn.crosshairMarkerVisible
          )
        )
          return null;
        let i = this.Et.Kh(t);
        return null === i
          ? null
          : {
              _t: i.Ot[3],
              ht: this.wa(),
              Bt: this.ga(),
              Pt: this.Ma(),
              Tt: this.xa(t),
            };
      }
      mh() {
        return this.cn.title;
      }
      yt() {
        return this.cn.visible;
      }
      Sa(t) {
        this.jl.push(new it(t, this));
      }
      ka(t) {
        this.jl = this.jl.filter((i) => i.Ol() !== t);
      }
      ya() {
        if (this.wn instanceof tz != !1) return (t) => this.wn.Fe(t);
      }
      Ca() {
        if (this.wn instanceof tz != !1) return (t) => this.wn.We(t);
      }
      oa() {
        return !Y(this.Dt().Ta());
      }
      va(t, i) {
        if (!k(t) || !k(i) || this.Et.Ni()) return null;
        let e =
            'Line' === this.Hl ||
            'Area' === this.Hl ||
            'Baseline' === this.Hl ||
            'Histogram' === this.Hl
              ? [3]
              : [2, 1],
          s = this.Et.al(t, i, e),
          h = null !== s ? new t3(s.pl, s.ml) : null;
        if ('Histogram' === this.Jh()) {
          let l = this.cn.base,
            n = new t3(l, l);
          h = null !== h ? h.ts(n) : n;
        }
        let r = this.dn._h();
        return (
          this.jl.forEach((e) => {
            var s, l, n, o;
            let u = e.Al(t, i);
            if (null == u ? void 0 : u.priceRange) {
              let a = new t3(u.priceRange.minValue, u.priceRange.maxValue);
              h = null !== h ? h.ts(a) : a;
            }
            (null == u ? void 0 : u.margins) &&
              ((s = r),
              (l = u.margins),
              (r = {
                above: Math.max(
                  null !== (n = null == s ? void 0 : s.above) && void 0 !== n
                    ? n
                    : 0,
                  l.above
                ),
                below: Math.max(
                  null !== (o = null == s ? void 0 : s.below) && void 0 !== o
                    ? o
                    : 0,
                  l.below
                ),
              }));
          }),
          new tZ(h, r)
        );
      }
      wa() {
        switch (this.Hl) {
          case 'Line':
          case 'Area':
          case 'Baseline':
            return this.cn.crosshairMarkerRadius;
        }
        return 0;
      }
      ga() {
        switch (this.Hl) {
          case 'Line':
          case 'Area':
          case 'Baseline': {
            let t = this.cn.crosshairMarkerBorderColor;
            if (0 !== t.length) return t;
          }
        }
        return null;
      }
      Ma() {
        switch (this.Hl) {
          case 'Line':
          case 'Area':
          case 'Baseline':
            return this.cn.crosshairMarkerBorderWidth;
        }
        return 0;
      }
      xa(t) {
        switch (this.Hl) {
          case 'Line':
          case 'Area':
          case 'Baseline': {
            let i = this.cn.crosshairMarkerBackgroundColor;
            if (0 !== i.length) return i;
          }
        }
        return this.$s().Hs(t).ue;
      }
      $l() {
        switch (this.cn.priceFormat.type) {
          case 'custom':
            this.ba = { format: this.cn.priceFormat.formatter };
            break;
          case 'volume':
            this.ba = new te(this.cn.priceFormat.precision);
            break;
          case 'percent':
            this.ba = new ti(this.cn.priceFormat.precision);
            break;
          default: {
            let t = Math.pow(10, this.cn.priceFormat.precision);
            this.ba = new tt(t, this.cn.priceFormat.minMove * t);
          }
        }
        null !== this.Yi && this.Yi.Pa();
      }
      Jl() {
        let t = this.$t().St();
        if (!t.Ra() || this.Et.Ni()) return void (this.Fl = []);
        let i = d(this.Et.sl());
        this.Fl = this.Nl.map((e, s) => {
          let h = d(t.Da(e.time, !0));
          return {
            time: d(this.Et.hl(h, h < i ? 1 : -1)).se,
            position: e.position,
            shape: e.shape,
            color: e.color,
            id: e.id,
            Qr: s,
            text: e.text,
            size: e.size,
            originalTime: e.originalTime,
          };
        });
      }
      Ul(t) {
        switch (((this.dn = new t1(this, this.$t())), this.Hl)) {
          case 'Bar':
            this.wn = new tC(this, this.$t());
            break;
          case 'Candlestick':
            this.wn = new tk(this, this.$t());
            break;
          case 'Line':
            this.wn = new tO(this, this.$t());
            break;
          case 'Custom':
            this.wn = new tz(this, this.$t(), c(t));
            break;
          case 'Area':
            this.wn = new t8(this, this.$t());
            break;
          case 'Baseline':
            this.wn = new tE(this, this.$t());
            break;
          case 'Histogram':
            this.wn = new tL(this, this.$t());
            break;
          default:
            throw Error('Unknown chart style assigned: ' + this.Hl);
        }
      }
      ua(t, i) {
        let e = [];
        return ii(this.jl, t, i, e), e;
      }
    }
    let ir = { Ha: 4, $a: 1e-4 };
    function io(t, i) {
      let e = (100 * (t - i)) / i;
      return i < 0 ? -e : e;
    }
    function iu(t, i) {
      let e = io(t.Th(), i),
        s = io(t.Ph(), i);
      return new t3(e, s);
    }
    function ia(t, i) {
      let e = (100 * (t - i)) / i + 100;
      return i < 0 ? -e : e;
    }
    function ic(t, i) {
      let e = ia(t.Th(), i),
        s = ia(t.Ph(), i);
      return new t3(e, s);
    }
    function id(t, i) {
      let e = Math.abs(t);
      if (e < 1e-15) return 0;
      let s = Math.log10(e + i.$a) + i.Ha;
      return t < 0 ? -s : s;
    }
    function i$(t, i) {
      let e = Math.abs(t);
      if (e < 1e-15) return 0;
      let s = Math.pow(10, e - i.Ha) - i.$a;
      return t < 0 ? -s : s;
    }
    function iv(t, i) {
      if (null === t) return null;
      let e = id(t.Th(), i),
        s = id(t.Ph(), i);
      return new t3(e, s);
    }
    function ip(t, i) {
      if (null === t) return null;
      let e = i$(t.Th(), i),
        s = i$(t.Ph(), i);
      return new t3(e, s);
    }
    function im(t) {
      if (null === t) return ir;
      let i = Math.abs(t.Ph() - t.Th());
      if (i >= 1 || i < 1e-15) return ir;
      let e = ir.Ha + Math.ceil(Math.abs(Math.log10(i)));
      return { Ha: e, $a: 1 / Math.pow(10, e) };
    }
    class ib {
      constructor(t, i) {
        if (
          ((this.Ua = t),
          (this.qa = i),
          (function (t) {
            if (t < 0) return !1;
            for (let i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
            return !0;
          })(this.Ua))
        )
          this.Ya = [2, 2.5, 2];
        else {
          this.Ya = [];
          for (let e = this.Ua; 1 !== e; ) {
            if (e % 2 == 0) this.Ya.push(2), (e /= 2);
            else {
              if (e % 5 != 0) throw Error('unexpected base');
              this.Ya.push(2, 2.5), (e /= 5);
            }
            if (this.Ya.length > 100) throw Error('something wrong with base');
          }
        }
      }
      Za(t, i, e) {
        var s, h, l, n, r, o, u, a, c, d;
        let f = 0 === this.Ua ? 0 : 1 / this.Ua,
          $ = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))),
          v = 0,
          p = this.qa[0];
        for (;;) {
          let m = ((n = $), (r = f) - n <= 1e-14 && $ > f + 1e-14),
            b = ((o = $), (u = e * p) - o <= 1e-14),
            g = 1 - (a = $) <= 1e-14;
          if (!(m && b && g)) break;
          ($ /= p), (p = this.qa[++v % this.qa.length]);
        }
        if (
          ($ <= f + 1e-14 && ($ = f),
          ($ = Math.max(1, $)),
          this.Ya.length > 0 &&
            ((h = 1), (l = 1e-14), Math.abs((s = $) - h) < l))
        ) {
          for (
            v = 0, p = this.Ya[0];
            (c = $), (d = e * p) - c <= 1e-14 && $ > f + 1e-14;

          )
            ($ /= p), (p = this.Ya[++v % this.Ya.length]);
        }
        return $;
      }
    }
    class ig {
      constructor(t, i, e, s) {
        (this.Xa = []),
          (this.Ii = t),
          (this.Ua = i),
          (this.Ka = e),
          (this.Ga = s);
      }
      Za(t, i) {
        if (t < i) throw Error('high < low');
        let e = this.Ii.At(),
          s = ((t - i) * this.Ja()) / e,
          h = new ib(this.Ua, [2, 2.5, 2]),
          l = new ib(this.Ua, [2, 2, 2.5]),
          n = new ib(this.Ua, [2.5, 2, 2]),
          r = [];
        return (
          r.push(h.Za(t, i, s), l.Za(t, i, s), n.Za(t, i, s)),
          (function (t) {
            if (t.length < 1) throw Error('array is empty');
            let i = t[0];
            for (let e = 1; e < t.length; ++e) t[e] < i && (i = t[e]);
            return i;
          })(r)
        );
      }
      Qa() {
        let t = this.Ii,
          i = t.Ct();
        if (null === i) return void (this.Xa = []);
        let e = t.At(),
          s = this.Ka(e - 1, i),
          h = this.Ka(0, i),
          l = this.Ii.W().entireTextOnly ? this.io() / 2 : 0,
          n = l,
          r = e - 1 - l,
          o = Math.max(s, h),
          u = Math.min(s, h);
        if (o === u) return void (this.Xa = []);
        let a = this.Za(o, u),
          c = o % a;
        c += c < 0 ? a : 0;
        let d = o >= u ? 1 : -1,
          f = null,
          $ = 0;
        for (let v = o - c; v > u; v -= a) {
          let p = this.Ga(v, i, !0);
          (null !== f && Math.abs(p - f) < this.Ja()) ||
            p < n ||
            p > r ||
            ($ < this.Xa.length
              ? ((this.Xa[$].Ia = p), (this.Xa[$].no = t.so(v)))
              : this.Xa.push({ Ia: p, no: t.so(v) }),
            $++,
            (f = p),
            t.eo() && (a = this.Za(v * d, u)));
        }
        this.Xa.length = $;
      }
      ja() {
        return this.Xa;
      }
      io() {
        return this.Ii.P();
      }
      Ja() {
        return Math.ceil(2.5 * this.io());
      }
    }
    function iw(t) {
      return t.slice().sort((t, i) => d(t.Xi()) - d(i.Xi()));
    }
    ((i1 = i6 || (i6 = {}))[(i1.Normal = 0)] = 'Normal'),
      (i1[(i1.Logarithmic = 1)] = 'Logarithmic'),
      (i1[(i1.Percentage = 2)] = 'Percentage'),
      (i1[(i1.IndexedTo100 = 3)] = 'IndexedTo100');
    let i_ = new ti(),
      iS = new tt(100, 1);
    class iy {
      constructor(t, i, e, s) {
        (this.ro = 0),
          (this.ho = null),
          (this.Ah = null),
          (this.lo = null),
          (this.ao = { oo: !1, _o: null }),
          (this.uo = 0),
          (this.co = 0),
          (this.do = new x()),
          (this.fo = new x()),
          (this.vo = []),
          (this.po = null),
          (this.mo = null),
          (this.bo = null),
          (this.wo = null),
          (this.ba = iS),
          (this.Mo = im(null)),
          (this.xo = t),
          (this.cn = i),
          (this.So = e),
          (this.ko = s),
          (this.yo = new ig(this, 100, this.Co.bind(this), this.To.bind(this)));
      }
      Ta() {
        return this.xo;
      }
      W() {
        return this.cn;
      }
      Hh(t) {
        if (
          (C(this.cn, t),
          this.Pa(),
          void 0 !== t.mode && this.Po({ yr: t.mode }),
          void 0 !== t.scaleMargins)
        ) {
          let i = c(t.scaleMargins.top),
            e = c(t.scaleMargins.bottom);
          if (i < 0 || i > 1)
            throw Error(
              `Invalid top margin - expect value between 0 and 1, given=${i}`
            );
          if (e < 0 || e > 1)
            throw Error(
              `Invalid bottom margin - expect value between 0 and 1, given=${e}`
            );
          if (i + e > 1)
            throw Error(
              `Invalid margins - sum of margins must be less than 1, given=${
                i + e
              }`
            );
          this.Ro(), (this.mo = null);
        }
      }
      Do() {
        return this.cn.autoScale;
      }
      eo() {
        return 1 === this.cn.mode;
      }
      gh() {
        return 2 === this.cn.mode;
      }
      Oo() {
        return 3 === this.cn.mode;
      }
      yr() {
        return {
          Wn: this.cn.autoScale,
          Bo: this.cn.invertScale,
          yr: this.cn.mode,
        };
      }
      Po(t) {
        let i = this.yr(),
          e = null;
        void 0 !== t.Wn && (this.cn.autoScale = t.Wn),
          void 0 !== t.yr &&
            ((this.cn.mode = t.yr),
            (2 !== t.yr && 3 !== t.yr) || (this.cn.autoScale = !0),
            (this.ao.oo = !1)),
          1 === i.yr &&
            t.yr !== i.yr &&
            ((function (t, i) {
              if (null === t) return !1;
              let e = i$(t.Th(), i),
                s = i$(t.Ph(), i);
              return isFinite(e) && isFinite(s);
            })(this.Ah, this.Mo)
              ? null !== (e = ip(this.Ah, this.Mo)) && this.Vo(e)
              : (this.cn.autoScale = !0)),
          1 === t.yr &&
            t.yr !== i.yr &&
            null !== (e = iv(this.Ah, this.Mo)) &&
            this.Vo(e);
        let s = i.yr !== this.cn.mode;
        s && (2 === i.yr || this.gh()) && this.Pa(),
          s && (3 === i.yr || this.Oo()) && this.Pa(),
          void 0 !== t.Bo &&
            i.Bo !== t.Bo &&
            ((this.cn.invertScale = t.Bo), this.Ao()),
          this.fo.m(i, this.yr());
      }
      zo() {
        return this.fo;
      }
      P() {
        return this.So.fontSize;
      }
      At() {
        return this.ro;
      }
      Eo(t) {
        this.ro !== t && ((this.ro = t), this.Ro(), (this.mo = null));
      }
      Io() {
        if (this.ho) return this.ho;
        let t = this.At() - this.Lo() - this.No();
        return (this.ho = t), t;
      }
      Eh() {
        return this.Fo(), this.Ah;
      }
      Vo(t, i) {
        let e = this.Ah;
        (i || (null === e && null !== t) || (null !== e && !e.yh(t))) &&
          ((this.mo = null), (this.Ah = t));
      }
      Ni() {
        return this.Fo(), 0 === this.ro || !this.Ah || this.Ah.Ni();
      }
      Wo(t) {
        return this.Bo() ? t : this.At() - 1 - t;
      }
      Rt(t, i) {
        return (
          this.gh() ? (t = io(t, i)) : this.Oo() && (t = ia(t, i)),
          this.To(t, i)
        );
      }
      Qs(t, i, e) {
        this.Fo();
        let s = this.No(),
          h = d(this.Eh()),
          l = h.Th(),
          n = h.Ph(),
          r = this.Io() - 1,
          o = this.Bo(),
          u = r / (n - l),
          a = void 0 === e ? 0 : e.from,
          c = void 0 === e ? t.length : e.to,
          f = this.jo();
        for (let $ = a; $ < c; $++) {
          let v = t[$],
            p = v._t;
          if (isNaN(p)) continue;
          let m = p;
          null !== f && (m = f(v._t, i));
          let b = s + u * (m - l),
            g = o ? b : this.ro - 1 - b;
          v.st = g;
        }
      }
      me(t, i, e) {
        this.Fo();
        let s = this.No(),
          h = d(this.Eh()),
          l = h.Th(),
          n = h.Ph(),
          r = this.Io() - 1,
          o = this.Bo(),
          u = r / (n - l),
          a = void 0 === e ? 0 : e.from,
          c = void 0 === e ? t.length : e.to,
          f = this.jo();
        for (let $ = a; $ < c; $++) {
          let v = t[$],
            p = v.we,
            m = v.ge,
            b = v.Me,
            g = v.xe;
          null !== f &&
            ((p = f(v.we, i)),
            (m = f(v.ge, i)),
            (b = f(v.Me, i)),
            (g = f(v.xe, i)));
          let w = s + u * (p - l),
            _ = o ? w : this.ro - 1 - w;
          (v.ve = _),
            (w = s + u * (m - l)),
            (_ = o ? w : this.ro - 1 - w),
            (v.ce = _),
            (w = s + u * (b - l)),
            (_ = o ? w : this.ro - 1 - w),
            (v.de = _),
            (w = s + u * (g - l)),
            (_ = o ? w : this.ro - 1 - w),
            (v.pe = _);
        }
      }
      pn(t, i) {
        let e = this.Co(t, i);
        return this.Ho(e, i);
      }
      Ho(t, i) {
        var e, s, h, l;
        let n = t;
        return (
          this.gh()
            ? (n = ((e = n), (s = i) < 0 && (e = -e), (e / 100) * s + s))
            : this.Oo() &&
              (n =
                ((h = n),
                (h -= 100),
                (l = i) < 0 && (h = -h),
                (h / 100) * l + l)),
          n
        );
      }
      Ba() {
        return this.vo;
      }
      $o() {
        if (this.po) return this.po;
        let t = [];
        for (let i = 0; i < this.vo.length; i++) {
          let e = this.vo[i];
          null === e.Xi() && e.Ki(i + 1), t.push(e);
        }
        return (t = iw(t)), (this.po = t), this.po;
      }
      Uo(t) {
        -1 === this.vo.indexOf(t) && (this.vo.push(t), this.Pa(), this.qo());
      }
      Yo(t) {
        let i = this.vo.indexOf(t);
        if (-1 === i) throw Error('source is not attached to scale');
        this.vo.splice(i, 1),
          0 === this.vo.length && (this.Po({ Wn: !0 }), this.Vo(null)),
          this.Pa(),
          this.qo();
      }
      Ct() {
        let t = null;
        for (let i of this.vo) {
          let e = i.Ct();
          null !== e && (null === t || e.ha < t.ha) && (t = e);
        }
        return null === t ? null : t.Ot;
      }
      Bo() {
        return this.cn.invertScale;
      }
      ja() {
        let t = null === this.Ct();
        if (null !== this.mo && (t || this.mo.Zo === t)) return this.mo.ja;
        this.yo.Qa();
        let i = this.yo.ja();
        return (this.mo = { ja: i, Zo: t }), this.do.m(), i;
      }
      Xo() {
        return this.do;
      }
      Ko(t) {
        this.gh() ||
          this.Oo() ||
          (null === this.bo &&
            null === this.lo &&
            (this.Ni() ||
              ((this.bo = this.ro - t), (this.lo = d(this.Eh()).Ch()))));
      }
      Go(t) {
        if (this.gh() || this.Oo() || null === this.bo) return;
        this.Po({ Wn: !1 }), (t = this.ro - t) < 0 && (t = 0);
        let i = (this.bo + 0.2 * (this.ro - 1)) / (t + 0.2 * (this.ro - 1)),
          e = d(this.lo).Ch();
        (i = Math.max(i, 0.1)), e.Dh(i), this.Vo(e);
      }
      Jo() {
        this.gh() || this.Oo() || ((this.bo = null), (this.lo = null));
      }
      Qo(t) {
        this.Do() ||
          (null === this.wo &&
            null === this.lo &&
            (this.Ni() || ((this.wo = t), (this.lo = d(this.Eh()).Ch()))));
      }
      t_(t) {
        if (this.Do() || null === this.wo) return;
        let i = d(this.Eh()).Rh() / (this.Io() - 1),
          e = t - this.wo;
        this.Bo() && (e *= -1);
        let s = e * i,
          h = d(this.lo).Ch();
        h.Oh(s), this.Vo(h, !0), (this.mo = null);
      }
      i_() {
        this.Do() || (null !== this.wo && ((this.wo = null), (this.lo = null)));
      }
      ma() {
        return this.ba || this.Pa(), this.ba;
      }
      Fi(t, i) {
        switch (this.cn.mode) {
          case 2:
            return this.n_(io(t, i));
          case 3:
            return this.ma().format(ia(t, i));
          default:
            return this.Fh(t);
        }
      }
      so(t) {
        switch (this.cn.mode) {
          case 2:
            return this.n_(t);
          case 3:
            return this.ma().format(t);
          default:
            return this.Fh(t);
        }
      }
      ql(t) {
        return this.Fh(t, d(this.s_()).ma());
      }
      Yl(t, i) {
        return (t = io(t, i)), this.n_(t, i_);
      }
      e_() {
        return this.vo;
      }
      r_(t) {
        this.ao = { _o: t, oo: !1 };
      }
      On() {
        this.vo.forEach((t) => t.On());
      }
      Pa() {
        this.mo = null;
        let t = this.s_(),
          i = 100;
        null !== t && (i = Math.round(1 / t.pa())),
          (this.ba = iS),
          this.gh()
            ? ((this.ba = i_), (i = 100))
            : this.Oo()
            ? ((this.ba = new tt(100, 1)), (i = 100))
            : null !== t && (this.ba = t.ma()),
          (this.yo = new ig(this, i, this.Co.bind(this), this.To.bind(this))),
          this.yo.Qa();
      }
      qo() {
        this.po = null;
      }
      s_() {
        return this.vo[0] || null;
      }
      Lo() {
        return this.Bo()
          ? this.cn.scaleMargins.bottom * this.At() + this.co
          : this.cn.scaleMargins.top * this.At() + this.uo;
      }
      No() {
        return this.Bo()
          ? this.cn.scaleMargins.top * this.At() + this.uo
          : this.cn.scaleMargins.bottom * this.At() + this.co;
      }
      Fo() {
        this.ao.oo || ((this.ao.oo = !0), this.h_());
      }
      Ro() {
        this.ho = null;
      }
      To(t, i) {
        if ((this.Fo(), this.Ni())) return 0;
        t = this.eo() && t ? id(t, this.Mo) : t;
        let e = d(this.Eh()),
          s = this.No() + ((this.Io() - 1) * (t - e.Th())) / e.Rh();
        return this.Wo(s);
      }
      Co(t, i) {
        if ((this.Fo(), this.Ni())) return 0;
        let e = this.Wo(t),
          s = d(this.Eh()),
          h = s.Th() + s.Rh() * ((e - this.No()) / (this.Io() - 1));
        return this.eo() ? i$(h, this.Mo) : h;
      }
      Ao() {
        (this.mo = null), this.yo.Qa();
      }
      h_() {
        var t, i;
        let e = this.ao._o;
        if (null === e) return;
        let s = null,
          h = this.e_(),
          l = 0,
          n = 0;
        for (let r of h) {
          if (!r.yt()) continue;
          let o = r.Ct();
          if (null === o) continue;
          let u = r.Al(e.Os(), e.ui()),
            a = u && u.Eh();
          if (null !== a) {
            switch (this.cn.mode) {
              case 1:
                a = iv(a, this.Mo);
                break;
              case 2:
                a = iu(a, o.Ot);
                break;
              case 3:
                a = ic(a, o.Ot);
            }
            if (((s = null === s ? a : s.ts(d(a))), null !== u)) {
              let c = u.Ih();
              null !== c &&
                ((l = Math.max(l, c.above)), (n = Math.max(n, c.below)));
            }
          }
        }
        if (
          ((l === this.uo && n === this.co) ||
            ((this.uo = l), (this.co = n), (this.mo = null), this.Ro()),
          null !== s)
        ) {
          if (s.Th() === s.Ph()) {
            let f = this.s_(),
              $ = 5 * (null === f || this.gh() || this.Oo() ? 1 : f.pa());
            this.eo() && (s = ip(s, this.Mo)),
              (s = new t3(s.Th() - $, s.Ph() + $)),
              this.eo() && (s = iv(s, this.Mo));
          }
          if (this.eo()) {
            let v = ip(s, this.Mo),
              p = im(v);
            if (((t = p), (i = this.Mo), t.Ha !== i.Ha || t.$a !== i.$a)) {
              let m = null !== this.lo ? ip(this.lo, this.Mo) : null;
              (this.Mo = p), (s = iv(v, p)), null !== m && (this.lo = iv(m, p));
            }
          }
          this.Vo(s);
        } else
          null === this.Ah &&
            (this.Vo(new t3(-0.5, 0.5)), (this.Mo = im(null)));
        this.ao.oo = !0;
      }
      jo() {
        return this.gh()
          ? io
          : this.Oo()
          ? ia
          : this.eo()
          ? (t) => id(t, this.Mo)
          : null;
      }
      l_(t, i, e) {
        return void 0 === i
          ? (void 0 === e && (e = this.ma()), e.format(t))
          : i(t);
      }
      Fh(t, i) {
        return this.l_(t, this.ko.priceFormatter, i);
      }
      n_(t, i) {
        return this.l_(t, this.ko.percentageFormatter, i);
      }
    }
    class i8 {
      constructor(t, i) {
        (this.vo = []),
          (this.a_ = new Map()),
          (this.ro = 0),
          (this.o_ = 0),
          (this.__ = 1e3),
          (this.po = null),
          (this.u_ = new x()),
          (this.kl = t),
          (this.$i = i),
          (this.c_ = new (class t {
            constructor(t) {
              this.wn = new (class t {
                constructor(t) {
                  (this.Wt = new (class t extends M {
                    constructor() {
                      super(...arguments), (this.Et = null);
                    }
                    J(t) {
                      this.Et = t;
                    }
                    K({
                      context: t,
                      bitmapSize: i,
                      horizontalPixelRatio: e,
                      verticalPixelRatio: s,
                    }) {
                      var h, l;
                      if (null === this.Et) return;
                      let n = Math.max(1, Math.floor(e));
                      (t.lineWidth = n),
                        (h = t),
                        (l = () => {
                          let h = d(this.Et);
                          if (h.Va) {
                            for (let l of ((t.strokeStyle = h.Aa),
                            o(t, h.za),
                            t.beginPath(),
                            h.Ea)) {
                              let r = Math.round(l.Ia * e);
                              t.moveTo(r, -n), t.lineTo(r, i.height + n);
                            }
                            t.stroke();
                          }
                          if (h.La) {
                            for (let u of ((t.strokeStyle = h.Na),
                            o(t, h.Fa),
                            t.beginPath(),
                            h.Wa)) {
                              let a = Math.round(u.Ia * s);
                              t.moveTo(-n, a), t.lineTo(i.width + n, a);
                            }
                            t.stroke();
                          }
                        }),
                        h.save(),
                        h.lineWidth % 2 && h.translate(0.5, 0.5),
                        l(),
                        h.restore();
                    }
                  })()),
                    (this.ft = !0),
                    (this.tn = t);
                }
                bt() {
                  this.ft = !0;
                }
                gt() {
                  if (this.ft) {
                    let t = this.tn.$t().W().grid,
                      i = {
                        La: t.horzLines.visible,
                        Va: t.vertLines.visible,
                        Na: t.horzLines.color,
                        Aa: t.vertLines.color,
                        Fa: t.horzLines.style,
                        za: t.vertLines.style,
                        Wa: this.tn.vn().ja(),
                        Ea: (this.tn.$t().St().ja() || []).map((t) => ({
                          Ia: t.coord,
                        })),
                      };
                    this.Wt.J(i), (this.ft = !1);
                  }
                  return this.Wt;
                }
              })(t);
            }
            Uh() {
              return this.wn;
            }
          })(this));
        let e = i.W();
        (this.d_ = this.f_('left', e.leftPriceScale)),
          (this.v_ = this.f_('right', e.rightPriceScale)),
          this.d_.zo().l(this.p_.bind(this, this.d_), this),
          this.v_.zo().l(this.p_.bind(this, this.v_), this),
          this.m_(e);
      }
      m_(t) {
        if (
          (t.leftPriceScale && this.d_.Hh(t.leftPriceScale),
          t.rightPriceScale && this.v_.Hh(t.rightPriceScale),
          t.localization && (this.d_.Pa(), this.v_.Pa()),
          t.overlayPriceScales)
        ) {
          let i = Array.from(this.a_.values());
          for (let e of i) {
            let s = d(e[0].Dt());
            s.Hh(t.overlayPriceScales), t.localization && s.Pa();
          }
        }
      }
      b_(t) {
        switch (t) {
          case 'left':
            return this.d_;
          case 'right':
            return this.v_;
        }
        return this.a_.has(t) ? c(this.a_.get(t))[0].Dt() : null;
      }
      S() {
        this.$t().w_().p(this),
          this.d_.zo().p(this),
          this.v_.zo().p(this),
          this.vo.forEach((t) => {
            t.S && t.S();
          }),
          this.u_.m();
      }
      g_() {
        return this.__;
      }
      M_(t) {
        this.__ = t;
      }
      $t() {
        return this.$i;
      }
      Hi() {
        return this.o_;
      }
      At() {
        return this.ro;
      }
      x_(t) {
        (this.o_ = t), this.S_();
      }
      Eo(t) {
        (this.ro = t),
          this.d_.Eo(t),
          this.v_.Eo(t),
          this.vo.forEach((i) => {
            if (this.dr(i)) {
              let e = i.Dt();
              null !== e && e.Eo(t);
            }
          }),
          this.S_();
      }
      Ba() {
        return this.vo;
      }
      dr(t) {
        let i = t.Dt();
        return null === i || (this.d_ !== i && this.v_ !== i);
      }
      Uo(t, i, e) {
        let s = void 0 !== e ? e : this.y_().k_ + 1;
        this.C_(t, i, s);
      }
      Yo(t) {
        let i = this.vo.indexOf(t);
        a(-1 !== i, 'removeDataSource: invalid data source'),
          this.vo.splice(i, 1);
        let e = d(t.Dt()).Ta();
        if (this.a_.has(e)) {
          let s = c(this.a_.get(e)),
            h = s.indexOf(t);
          -1 !== h && (s.splice(h, 1), 0 === s.length && this.a_.delete(e));
        }
        let l = t.Dt();
        l && l.Ba().indexOf(t) >= 0 && l.Yo(t),
          null !== l && (l.qo(), this.T_(l)),
          (this.po = null);
      }
      pr(t) {
        return t === this.d_ ? 'left' : t === this.v_ ? 'right' : 'overlay';
      }
      P_() {
        return this.d_;
      }
      R_() {
        return this.v_;
      }
      D_(t, i) {
        t.Ko(i);
      }
      O_(t, i) {
        t.Go(i), this.S_();
      }
      B_(t) {
        t.Jo();
      }
      V_(t, i) {
        t.Qo(i);
      }
      A_(t, i) {
        t.t_(i), this.S_();
      }
      z_(t) {
        t.i_();
      }
      S_() {
        this.vo.forEach((t) => {
          t.On();
        });
      }
      vn() {
        let t = null;
        return (
          this.$i.W().rightPriceScale.visible && 0 !== this.v_.Ba().length
            ? (t = this.v_)
            : this.$i.W().leftPriceScale.visible && 0 !== this.d_.Ba().length
            ? (t = this.d_)
            : 0 !== this.vo.length && (t = this.vo[0].Dt()),
          null === t && (t = this.v_),
          t
        );
      }
      vr() {
        let t = null;
        return (
          this.$i.W().rightPriceScale.visible
            ? (t = this.v_)
            : this.$i.W().leftPriceScale.visible && (t = this.d_),
          t
        );
      }
      T_(t) {
        null !== t && t.Do() && this.E_(t);
      }
      I_(t) {
        let i = this.kl.Zs();
        t.Po({ Wn: !0 }), null !== i && t.r_(i), this.S_();
      }
      L_() {
        this.E_(this.d_), this.E_(this.v_);
      }
      N_() {
        this.T_(this.d_),
          this.T_(this.v_),
          this.vo.forEach((t) => {
            this.dr(t) && this.T_(t.Dt());
          }),
          this.S_(),
          this.$i.$h();
      }
      $o() {
        return null === this.po && (this.po = iw(this.vo)), this.po;
      }
      F_() {
        return this.u_;
      }
      W_() {
        return this.c_;
      }
      E_(t) {
        let i = t.e_();
        if (i && i.length > 0 && !this.kl.Ni()) {
          let e = this.kl.Zs();
          null !== e && t.r_(e);
        }
        t.On();
      }
      y_() {
        let t = this.$o();
        if (0 === t.length) return { j_: 0, k_: 0 };
        let i = 0,
          e = 0;
        for (let s = 0; s < t.length; s++) {
          let h = t[s].Xi();
          null !== h && (h < i && (i = h), h > e && (e = h));
        }
        return { j_: i, k_: e };
      }
      C_(t, i, e) {
        let s = this.b_(i);
        if (
          (null === s && (s = this.f_(i, this.$i.W().overlayPriceScales)),
          this.vo.push(t),
          !Y(i))
        ) {
          let h = this.a_.get(i) || [];
          h.push(t), this.a_.set(i, h);
        }
        s.Uo(t), t.Gi(s), t.Ki(e), this.T_(s), (this.po = null);
      }
      p_(t, i, e) {
        i.yr !== e.yr && this.E_(t);
      }
      f_(t, i) {
        let e = Object.assign({ visible: !0, autoScale: !0 }, L(i)),
          s = new iy(t, e, this.$i.W().layout, this.$i.W().localization);
        return s.Eo(this.At()), s;
      }
    }
    class ix {
      constructor(t, i, e = 50) {
        (this.Xe = 0),
          (this.Ke = 1),
          (this.Ge = 1),
          (this.Qe = new Map()),
          (this.Je = new Map()),
          (this.H_ = t),
          (this.U_ = i),
          (this.tr = e);
      }
      q_(t) {
        let i = t.time,
          e = this.U_.cacheKey(i),
          s = this.Qe.get(e);
        if (void 0 !== s) return s.Y_;
        if (this.Xe === this.tr) {
          let h = this.Je.get(this.Ge);
          this.Je.delete(this.Ge), this.Qe.delete(c(h)), this.Ge++, this.Xe--;
        }
        let l = this.H_(t);
        return (
          this.Qe.set(e, { Y_: l, er: this.Ke }),
          this.Je.set(this.Ke, e),
          this.Xe++,
          this.Ke++,
          l
        );
      }
    }
    class iC {
      constructor(t, i) {
        a(t <= i, 'right should be >= left'), (this.Z_ = t), (this.X_ = i);
      }
      Os() {
        return this.Z_;
      }
      ui() {
        return this.X_;
      }
      K_() {
        return this.X_ - this.Z_ + 1;
      }
      Xr(t) {
        return this.Z_ <= t && t <= this.X_;
      }
      yh(t) {
        return this.Z_ === t.Os() && this.X_ === t.ui();
      }
    }
    function iE(t, i) {
      return null === t || null === i ? t === i : t.yh(i);
    }
    class ik {
      constructor(t) {
        this.ru = t;
      }
      hu() {
        return null === this.ru
          ? null
          : new iC(Math.floor(this.ru.Os()), Math.ceil(this.ru.ui()));
      }
      lu() {
        return this.ru;
      }
      static au() {
        return new ik(null);
      }
    }
    function iz(t, i) {
      return t.weight > i.weight ? t : i;
    }
    class iI {
      X(t, i, e) {
        t.useMediaCoordinateSpace((t) => this.K(t, i, e));
      }
      wl(t, i, e) {
        t.useMediaCoordinateSpace((t) => this.fc(t, i, e));
      }
      fc(t, i, e) {}
    }
    function iL(t) {
      return !E(t) && !z(t);
    }
    function iO(t) {
      return E(t);
    }
    ((iH = i2 || (i2 = {}))[(iH.OnTouchEnd = 0)] = 'OnTouchEnd'),
      (iH[(iH.OnNextTap = 1)] = 'OnNextTap'),
      ((i3 = i5 || (i5 = {}))[(i3.Disabled = 0)] = 'Disabled'),
      (i3[(i3.Continuous = 1)] = 'Continuous'),
      (i3[(i3.OnDataUpdate = 2)] = 'OnDataUpdate'),
      ((iZ = et || (et = {}))[(iZ.LastBar = 0)] = 'LastBar'),
      (iZ[(iZ.LastVisible = 1)] = 'LastVisible'),
      ((iG = ei || (ei = {})).Solid = 'solid'),
      (iG.VerticalGradient = 'gradient'),
      ((iY = ee || (ee = {}))[(iY.Year = 0)] = 'Year'),
      (iY[(iY.Month = 1)] = 'Month'),
      (iY[(iY.DayOfMonth = 2)] = 'DayOfMonth'),
      (iY[(iY.Time = 3)] = 'Time'),
      (iY[(iY.TimeWithSeconds = 4)] = 'TimeWithSeconds');
    let i0 = (t) => t.getUTCFullYear();
    class iP {
      constructor(t = 'yyyy-MM-dd', i = 'default') {
        (this.wd = t), (this.gd = i);
      }
      q_(t) {
        var i, e, s, h, l, n, r, o, u, a, c, d, f;
        return (
          (i = t),
          (e = this.wd),
          (s = this.gd),
          e
            .replace(/yyyy/g, Q(i0(i), 4))
            .replace(/yy/g, Q(i0(i) % 100, 2))
            .replace(
              /MMMM/g,
              ((n = i),
              (r = s),
              new Date(n.getUTCFullYear(), n.getUTCMonth(), 1).toLocaleString(
                r,
                { month: 'long' }
              ))
            )
            .replace(
              /MMM/g,
              ((o = i),
              (u = s),
              new Date(o.getUTCFullYear(), o.getUTCMonth(), 1).toLocaleString(
                u,
                { month: 'short' }
              ))
            )
            .replace(/MM/g, Q((a = i).getUTCMonth() + 1, 2))
            .replace(/dd/g, Q((d = i).getUTCDate(), 2))
        );
      }
    }
    class iW {
      constructor(t = {}) {
        let i = Object.assign(
          Object.assign(
            {},
            { xd: 'yyyy-MM-dd', Sd: '%h:%m:%s', kd: ' ', yd: 'default' }
          ),
          t
        );
        (this.Cd = new iP(i.xd, i.yd)),
          (this.Td = new (class t {
            constructor(t) {
              this.Md = t || '%h:%m:%s';
            }
            q_(t) {
              return this.Md.replace('%h', Q(t.getUTCHours(), 2))
                .replace('%m', Q(t.getUTCMinutes(), 2))
                .replace('%s', Q(t.getUTCSeconds(), 2));
            }
          })(i.Sd)),
          (this.Pd = i.kd);
      }
      q_(t) {
        return `${this.Cd.q_(t)}${this.Pd}${this.Td.q_(t)}`;
      }
    }
    function iT(t) {
      return 60 * t * 6e4;
    }
    function i9(t) {
      return 60 * t * 1e3;
    }
    let iR = [
      { Rd: 1e3 * (es = 1), Dd: 10 },
      { Rd: i9(1), Dd: 20 },
      { Rd: i9(5), Dd: 21 },
      { Rd: i9(30), Dd: 22 },
      { Rd: iT(1), Dd: 30 },
      { Rd: iT(3), Dd: 31 },
      { Rd: iT(6), Dd: 32 },
      { Rd: iT(12), Dd: 33 },
    ];
    function iM(t, i) {
      if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
      if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
      if (t.getUTCDate() !== i.getUTCDate()) return 50;
      for (let e = iR.length - 1; e >= 0; --e)
        if (
          Math.floor(i.getTime() / iR[e].Rd) !==
          Math.floor(t.getTime() / iR[e].Rd)
        )
          return iR[e].Dd;
      return 0;
    }
    function iB(t) {
      let i = t;
      if ((z(t) && (i = iF(t)), !iL(i)))
        throw Error('time must be of type BusinessDay');
      let e = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, 0, 0, 0));
      return { Od: Math.round(e.getTime() / 1e3), Bd: i };
    }
    function iD(t) {
      var i;
      if (!E((i = t))) throw Error('time must be of type isUTCTimestamp');
      return { Od: t };
    }
    function iF(t) {
      let i = new Date(t);
      if (isNaN(i.getTime()))
        throw Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
      return {
        day: i.getUTCDate(),
        month: i.getUTCMonth() + 1,
        year: i.getUTCFullYear(),
      };
    }
    function iA(t) {
      z(t.time) && (t.time = iF(t.time));
    }
    class iK {
      options() {
        return this.cn;
      }
      setOptions(t) {
        (this.cn = t), this.updateFormatter(t.localization);
      }
      preprocessData(t) {
        Array.isArray(t)
          ? (function (t) {
              t.forEach(iA);
            })(t)
          : iA(t);
      }
      createConverterToInternalObj(t) {
        var i;
        return d(
          0 === (i = t).length ? null : iL(i[0].time) || z(i[0].time) ? iB : iD
        );
      }
      key(t) {
        return 'object' == typeof t && 'Od' in t
          ? t.Od
          : this.key(this.convertHorzItemToInternal(t));
      }
      cacheKey(t) {
        let i = t;
        return void 0 === i.Bd
          ? new Date(1e3 * i.Od).getTime()
          : new Date(Date.UTC(i.Bd.year, i.Bd.month - 1, i.Bd.day)).getTime();
      }
      convertHorzItemToInternal(t) {
        var i, e;
        return E((e = i = t)) ? iD(i) : iL(i) ? iB(i) : iB(iF(i));
      }
      updateFormatter(t) {
        if (!this.cn) return;
        let i = t.dateFormat;
        this.cn.timeScale.timeVisible
          ? (this.Vd = new iW({
              xd: i,
              Sd: this.cn.timeScale.secondsVisible ? '%h:%m:%s' : '%h:%m',
              kd: '   ',
              yd: t.locale,
            }))
          : (this.Vd = new iP(i, t.locale));
      }
      formatHorzItem(t) {
        return this.Vd.q_(new Date(1e3 * t.Od));
      }
      formatTickmark(t, i) {
        let e = (function (t, i, e) {
            switch (t) {
              case 0:
              case 10:
                return i ? (e ? 4 : 3) : 2;
              case 20:
              case 21:
              case 22:
              case 30:
              case 31:
              case 32:
              case 33:
                return i ? 3 : 2;
              case 50:
                return 2;
              case 60:
                return 1;
              case 70:
                return 0;
            }
          })(
            t.weight,
            this.cn.timeScale.timeVisible,
            this.cn.timeScale.secondsVisible
          ),
          s = this.cn.timeScale;
        if (void 0 !== s.tickMarkFormatter) {
          let h = s.tickMarkFormatter(t.originalTime, e, i.locale);
          if (null !== h) return h;
        }
        return (function (t, i, e) {
          let s = {};
          switch (i) {
            case 0:
              s.year = 'numeric';
              break;
            case 1:
              s.month = 'short';
              break;
            case 2:
              s.day = 'numeric';
              break;
            case 3:
              (s.hour12 = !1), (s.hour = '2-digit'), (s.minute = '2-digit');
              break;
            case 4:
              (s.hour12 = !1),
                (s.hour = '2-digit'),
                (s.minute = '2-digit'),
                (s.second = '2-digit');
          }
          let h = new Date(
            void 0 === t.Bd
              ? 1e3 * t.Od
              : Date.UTC(t.Bd.year, t.Bd.month - 1, t.Bd.day)
          );
          return new Date(
            h.getUTCFullYear(),
            h.getUTCMonth(),
            h.getUTCDate(),
            h.getUTCHours(),
            h.getUTCMinutes(),
            h.getUTCSeconds(),
            h.getUTCMilliseconds()
          ).toLocaleString(e, s);
        })(t.time, e, i.locale);
      }
      maxTickMarkWeight(t) {
        let i = t.reduce(iz, t[0]).weight;
        return i > 30 && i < 50 && (i = 30), i;
      }
      fillWeightsForPoints(t, i) {
        !(function (t, i = 0) {
          if (0 === t.length) return;
          let e = 0 === i ? null : t[i - 1].time.Od,
            s = null !== e ? new Date(1e3 * e) : null,
            h = 0;
          for (let l = i; l < t.length; ++l) {
            let n = t[l],
              r = new Date(1e3 * n.time.Od);
            null !== s && (n.timeWeight = iM(r, s)),
              (h += n.time.Od - (e || n.time.Od)),
              (e = n.time.Od),
              (s = r);
          }
          if (0 === i && t.length > 1) {
            let o = Math.ceil(h / (t.length - 1)),
              u = new Date(1e3 * (t[0].time.Od - o));
            t[0].timeWeight = iM(new Date(1e3 * t[0].time.Od), u);
          }
        })(t, i);
      }
      static Ad(t) {
        return C(
          { localization: { dateFormat: "dd MMM 'yy" } },
          null != t ? t : {}
        );
      }
    }
    function iU(t) {
      var i = t.width,
        e = t.height;
      if (i < 0) throw Error('Negative width is not allowed for Size');
      if (e < 0) throw Error('Negative height is not allowed for Size');
      return { width: i, height: e };
    }
    function iV(t, i) {
      return t.width === i.width && t.height === i.height;
    }
    var iX,
      iN,
      ij,
      iJ,
      i1,
      iH,
      i3,
      iZ,
      iG,
      iY,
      i4,
      iq,
      iQ,
      i7,
      i6,
      i2,
      i5,
      et,
      ei,
      ee,
      es,
      eh,
      el = (function () {
        function t(t) {
          var i = this;
          (this._resolutionListener = function () {
            return i._onResolutionChanged();
          }),
            (this._resolutionMediaQueryList = null),
            (this._observers = []),
            (this._window = t),
            this._installResolutionListener();
        }
        return (
          (t.prototype.dispose = function () {
            this._uninstallResolutionListener(), (this._window = null);
          }),
          Object.defineProperty(t.prototype, 'value', {
            get: function () {
              return this._window.devicePixelRatio;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.subscribe = function (t) {
            var i = this,
              e = { next: t };
            return (
              this._observers.push(e),
              {
                unsubscribe: function () {
                  i._observers = i._observers.filter(function (t) {
                    return t !== e;
                  });
                },
              }
            );
          }),
          (t.prototype._installResolutionListener = function () {
            if (null !== this._resolutionMediaQueryList)
              throw Error('Resolution listener is already installed');
            var t = this._window.devicePixelRatio;
            (this._resolutionMediaQueryList = this._window.matchMedia(
              'all and (resolution: '.concat(t, 'dppx)')
            )),
              this._resolutionMediaQueryList.addListener(
                this._resolutionListener
              );
          }),
          (t.prototype._uninstallResolutionListener = function () {
            null !== this._resolutionMediaQueryList &&
              (this._resolutionMediaQueryList.removeListener(
                this._resolutionListener
              ),
              (this._resolutionMediaQueryList = null));
          }),
          (t.prototype._reinstallResolutionListener = function () {
            this._uninstallResolutionListener(),
              this._installResolutionListener();
          }),
          (t.prototype._onResolutionChanged = function () {
            var t = this;
            this._observers.forEach(function (i) {
              return i.next(t._window.devicePixelRatio);
            }),
              this._reinstallResolutionListener();
          }),
          t
        );
      })(),
      en = (function () {
        function t(t, i, e) {
          var s;
          (this._canvasElement = null),
            (this._bitmapSizeChangedListeners = []),
            (this._suggestedBitmapSize = null),
            (this._suggestedBitmapSizeChangedListeners = []),
            (this._devicePixelRatioObservable = null),
            (this._canvasElementResizeObserver = null),
            (this._canvasElement = t),
            (this._canvasElementClientSize = iU({
              width: this._canvasElement.clientWidth,
              height: this._canvasElement.clientHeight,
            })),
            (this._transformBitmapSize =
              null != i
                ? i
                : function (t) {
                    return t;
                  }),
            (this._allowResizeObserver =
              null === (s = null == e ? void 0 : e.allowResizeObserver) ||
              void 0 === s ||
              s),
            this._chooseAndInitObserver();
        }
        return (
          (t.prototype.dispose = function () {
            var t, i;
            if (null === this._canvasElement) throw Error('Object is disposed');
            null === (t = this._canvasElementResizeObserver) ||
              void 0 === t ||
              t.disconnect(),
              (this._canvasElementResizeObserver = null),
              null === (i = this._devicePixelRatioObservable) ||
                void 0 === i ||
                i.dispose(),
              (this._devicePixelRatioObservable = null),
              (this._suggestedBitmapSizeChangedListeners.length = 0),
              (this._bitmapSizeChangedListeners.length = 0),
              (this._canvasElement = null);
          }),
          Object.defineProperty(t.prototype, 'canvasElement', {
            get: function () {
              if (null === this._canvasElement)
                throw Error('Object is disposed');
              return this._canvasElement;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'canvasElementClientSize', {
            get: function () {
              return this._canvasElementClientSize;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'bitmapSize', {
            get: function () {
              return iU({
                width: this.canvasElement.width,
                height: this.canvasElement.height,
              });
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.resizeCanvasElement = function (t) {
            (this._canvasElementClientSize = iU(t)),
              (this.canvasElement.style.width = ''.concat(
                this._canvasElementClientSize.width,
                'px'
              )),
              (this.canvasElement.style.height = ''.concat(
                this._canvasElementClientSize.height,
                'px'
              )),
              this._invalidateBitmapSize();
          }),
          (t.prototype.subscribeBitmapSizeChanged = function (t) {
            this._bitmapSizeChangedListeners.push(t);
          }),
          (t.prototype.unsubscribeBitmapSizeChanged = function (t) {
            this._bitmapSizeChangedListeners =
              this._bitmapSizeChangedListeners.filter(function (i) {
                return i !== t;
              });
          }),
          Object.defineProperty(t.prototype, 'suggestedBitmapSize', {
            get: function () {
              return this._suggestedBitmapSize;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.subscribeSuggestedBitmapSizeChanged = function (t) {
            this._suggestedBitmapSizeChangedListeners.push(t);
          }),
          (t.prototype.unsubscribeSuggestedBitmapSizeChanged = function (t) {
            this._suggestedBitmapSizeChangedListeners =
              this._suggestedBitmapSizeChangedListeners.filter(function (i) {
                return i !== t;
              });
          }),
          (t.prototype.applySuggestedBitmapSize = function () {
            if (null !== this._suggestedBitmapSize) {
              var t = this._suggestedBitmapSize;
              (this._suggestedBitmapSize = null),
                this._resizeBitmap(t),
                this._emitSuggestedBitmapSizeChanged(
                  t,
                  this._suggestedBitmapSize
                );
            }
          }),
          (t.prototype._resizeBitmap = function (t) {
            var i = this.bitmapSize;
            iV(i, t) ||
              ((this.canvasElement.width = t.width),
              (this.canvasElement.height = t.height),
              this._emitBitmapSizeChanged(i, t));
          }),
          (t.prototype._emitBitmapSizeChanged = function (t, i) {
            var e = this;
            this._bitmapSizeChangedListeners.forEach(function (s) {
              return s.call(e, t, i);
            });
          }),
          (t.prototype._suggestNewBitmapSize = function (t) {
            var i = this._suggestedBitmapSize,
              e = iU(
                this._transformBitmapSize(t, this._canvasElementClientSize)
              ),
              s = iV(this.bitmapSize, e) ? null : e;
            (null === i && null === s) ||
              (null !== i && null !== s && iV(i, s)) ||
              ((this._suggestedBitmapSize = s),
              this._emitSuggestedBitmapSizeChanged(i, s));
          }),
          (t.prototype._emitSuggestedBitmapSizeChanged = function (t, i) {
            var e = this;
            this._suggestedBitmapSizeChangedListeners.forEach(function (s) {
              return s.call(e, t, i);
            });
          }),
          (t.prototype._chooseAndInitObserver = function () {
            var t = this;
            this._allowResizeObserver
              ? new Promise(function (t) {
                  var i = new ResizeObserver(function (e) {
                    t(
                      e.every(function (t) {
                        return 'devicePixelContentBoxSize' in t;
                      })
                    ),
                      i.disconnect();
                  });
                  i.observe(document.body, { box: 'device-pixel-content-box' });
                })
                  .catch(function () {
                    return !1;
                  })
                  .then(function (i) {
                    return i
                      ? t._initResizeObserver()
                      : t._initDevicePixelRatioObservable();
                  })
              : this._initDevicePixelRatioObservable();
          }),
          (t.prototype._initDevicePixelRatioObservable = function () {
            var t = this;
            if (null !== this._canvasElement) {
              var i,
                e = er(this._canvasElement);
              if (null === e)
                throw Error('No window is associated with the canvas');
              (this._devicePixelRatioObservable = ((i = e), new el(i))),
                this._devicePixelRatioObservable.subscribe(function () {
                  return t._invalidateBitmapSize();
                }),
                this._invalidateBitmapSize();
            }
          }),
          (t.prototype._invalidateBitmapSize = function () {
            var t, i;
            if (null !== this._canvasElement) {
              var e = er(this._canvasElement);
              if (null !== e) {
                var s,
                  h,
                  l =
                    null !==
                      (i =
                        null === (t = this._devicePixelRatioObservable) ||
                        void 0 === t
                          ? void 0
                          : t.value) && void 0 !== i
                      ? i
                      : e.devicePixelRatio,
                  n = this._canvasElement.getClientRects(),
                  r =
                    void 0 !== n[0]
                      ? ((s = n[0]),
                        (h = l),
                        iU({
                          width:
                            Math.round(s.left * h + s.width * h) -
                            Math.round(s.left * h),
                          height:
                            Math.round(s.top * h + s.height * h) -
                            Math.round(s.top * h),
                        }))
                      : iU({
                          width: this._canvasElementClientSize.width * l,
                          height: this._canvasElementClientSize.height * l,
                        });
                this._suggestNewBitmapSize(r);
              }
            }
          }),
          (t.prototype._initResizeObserver = function () {
            var t = this;
            null !== this._canvasElement &&
              ((this._canvasElementResizeObserver = new ResizeObserver(
                function (i) {
                  var e = i.find(function (i) {
                    return i.target === t._canvasElement;
                  });
                  if (
                    e &&
                    e.devicePixelContentBoxSize &&
                    e.devicePixelContentBoxSize[0]
                  ) {
                    var s = e.devicePixelContentBoxSize[0],
                      h = iU({ width: s.inlineSize, height: s.blockSize });
                    t._suggestNewBitmapSize(h);
                  }
                }
              )),
              this._canvasElementResizeObserver.observe(this._canvasElement, {
                box: 'device-pixel-content-box',
              }));
          }),
          t
        );
      })();
    function er(t) {
      return t.ownerDocument.defaultView;
    }
    var eo = (function () {
      function t(t, i, e) {
        if (0 === i.width || 0 === i.height)
          throw TypeError(
            'Rendering target could only be created on a media with positive width and height'
          );
        if (((this._mediaSize = i), 0 === e.width || 0 === e.height))
          throw TypeError(
            'Rendering target could only be created using a bitmap with positive integer width and height'
          );
        (this._bitmapSize = e), (this._context = t);
      }
      return (
        (t.prototype.useMediaCoordinateSpace = function (t) {
          try {
            return (
              this._context.save(),
              this._context.setTransform(1, 0, 0, 1, 0, 0),
              this._context.scale(
                this._horizontalPixelRatio,
                this._verticalPixelRatio
              ),
              t({ context: this._context, mediaSize: this._mediaSize })
            );
          } finally {
            this._context.restore();
          }
        }),
        (t.prototype.useBitmapCoordinateSpace = function (t) {
          try {
            return (
              this._context.save(),
              this._context.setTransform(1, 0, 0, 1, 0, 0),
              t({
                context: this._context,
                mediaSize: this._mediaSize,
                bitmapSize: this._bitmapSize,
                horizontalPixelRatio: this._horizontalPixelRatio,
                verticalPixelRatio: this._verticalPixelRatio,
              })
            );
          } finally {
            this._context.restore();
          }
        }),
        Object.defineProperty(t.prototype, '_horizontalPixelRatio', {
          get: function () {
            return this._bitmapSize.width / this._mediaSize.width;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, '_verticalPixelRatio', {
          get: function () {
            return this._bitmapSize.height / this._mediaSize.height;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })();
    function eu(t, i) {
      var e = t.canvasElementClientSize;
      if (0 === e.width || 0 === e.height) return null;
      var s = t.bitmapSize;
      if (0 === s.width || 0 === s.height) return null;
      var h = t.canvasElement.getContext('2d', i);
      return null === h ? null : new eo(h, e, s);
    }
    let ea = 'undefined' != typeof window;
    function ec() {
      return (
        !!ea && window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      );
    }
    function ed() {
      return !!ea && /iPhone|iPad|iPod/.test(window.navigator.platform);
    }
    function ef(t) {
      return t + (t % 2);
    }
    function e$(t, i) {
      return t.zd - i.zd;
    }
    function ev(t, i, e) {
      let s = (t.zd - i.zd) / (t.ot - i.ot);
      return Math.sign(s) * Math.min(Math.abs(s), e);
    }
    class ep {
      constructor(t, i, e, s) {
        (this.Ed = null),
          (this.Id = null),
          (this.Ld = null),
          (this.Nd = null),
          (this.Fd = null),
          (this.Wd = 0),
          (this.jd = 0),
          (this.Hd = t),
          (this.$d = i),
          (this.Ud = e),
          (this.rs = s);
      }
      qd(t, i) {
        if (null !== this.Ed) {
          if (this.Ed.ot === i) return void (this.Ed.zd = t);
          if (Math.abs(this.Ed.zd - t) < this.rs) return;
        }
        (this.Nd = this.Ld),
          (this.Ld = this.Id),
          (this.Id = this.Ed),
          (this.Ed = { ot: i, zd: t });
      }
      Dr(t, i) {
        if (null === this.Ed || null === this.Id || i - this.Ed.ot > 50) return;
        let e = 0,
          s = ev(this.Ed, this.Id, this.$d),
          h = e$(this.Ed, this.Id),
          l = [s],
          n = [h];
        if (((e += h), null !== this.Ld)) {
          let r = ev(this.Id, this.Ld, this.$d);
          if (Math.sign(r) === Math.sign(s)) {
            let o = e$(this.Id, this.Ld);
            if ((l.push(r), n.push(o), (e += o), null !== this.Nd)) {
              let u = ev(this.Ld, this.Nd, this.$d);
              if (Math.sign(u) === Math.sign(s)) {
                let a = e$(this.Ld, this.Nd);
                l.push(u), n.push(a), (e += a);
              }
            }
          }
        }
        let c = 0;
        for (let d = 0; d < l.length; ++d) c += (n[d] / e) * l[d];
        Math.abs(c) < this.Hd ||
          ((this.Fd = { zd: t, ot: i }),
          (this.jd = c),
          (this.Wd = (function (t, i) {
            let e = Math.log(i);
            return Math.log(-((1 * e) / t)) / e;
          })(Math.abs(c), this.Ud)));
      }
      Qu(t) {
        let i = d(this.Fd),
          e = t - i.ot;
        return (
          i.zd + (this.jd * (Math.pow(this.Ud, e) - 1)) / Math.log(this.Ud)
        );
      }
      Ju(t) {
        return null === this.Fd || this.Yd(t) === this.Wd;
      }
      Yd(t) {
        let i = t - d(this.Fd).ot;
        return Math.min(i, this.Wd);
      }
    }
    class em {
      constructor(t, i) {
        (this.Zd = void 0),
          (this.Xd = void 0),
          (this.Kd = void 0),
          (this.en = !1),
          (this.Gd = t),
          (this.Jd = i),
          this.Qd();
      }
      bt() {
        this.Qd();
      }
      tf() {
        this.Zd && this.Gd.removeChild(this.Zd),
          this.Xd && this.Gd.removeChild(this.Xd),
          (this.Zd = void 0),
          (this.Xd = void 0);
      }
      if() {
        return this.en !== this.nf() || this.Kd !== this.sf();
      }
      sf() {
        return S(_(this.Jd.W().layout.textColor)) > 160 ? 'dark' : 'light';
      }
      nf() {
        return this.Jd.W().layout.attributionLogo;
      }
      ef() {
        let t = new URL(location.href);
        return t.hostname ? '&utm_source=' + t.hostname + t.pathname : '';
      }
      Qd() {
        this.if() &&
          (this.tf(),
          (this.en = this.nf()),
          this.en &&
            ((this.Kd = this.sf()),
            (this.Xd = document.createElement('style')),
            (this.Xd.innerText =
              'a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}'),
            (this.Zd = document.createElement('a')),
            (this.Zd.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.ef()}`),
            (this.Zd.title = 'Charting by TradingView'),
            (this.Zd.id = 'tv-attr-logo'),
            (this.Zd.target = '_blank'),
            (this.Zd.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 19" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>'),
            this.Zd.toggleAttribute('data-dark', 'dark' === this.Kd),
            this.Gd.appendChild(this.Xd),
            this.Gd.appendChild(this.Zd)));
      }
    }
    function eb(t, i) {
      let e = d(t.ownerDocument).createElement('canvas');
      t.appendChild(e);
      let s = (function (t, i) {
        if ('device-pixel-content-box' === i.type)
          return new en(t, i.transform, i.options);
        throw Error('Unsupported binding target');
      })(e, {
        type: 'device-pixel-content-box',
        options: { allowResizeObserver: !1 },
        transform: (t, i) => ({
          width: Math.max(t.width, i.width),
          height: Math.max(t.height, i.height),
        }),
      });
      return s.resizeCanvasElement(i), s;
    }
    function eg(t) {
      var i;
      (t.width = 1),
        (t.height = 1),
        null === (i = t.getContext('2d')) ||
          void 0 === i ||
          i.clearRect(0, 0, 1, 1);
    }
    function ew(t, i, e, s) {
      t.wl && t.wl(i, e, s);
    }
    function e_(t, i, e, s) {
      t.X(i, e, s);
    }
    function eS(t, i, e, s) {
      let h = t(e, s);
      for (let l of h) {
        let n = l.gt();
        null !== n && i(n);
      }
    }
    class ey {
      constructor(t, i, e) {
        (this.rf = 0),
          (this.hf = null),
          (this.lf = {
            nt: Number.NEGATIVE_INFINITY,
            st: Number.POSITIVE_INFINITY,
          }),
          (this.af = 0),
          (this._f = null),
          (this.uf = {
            nt: Number.NEGATIVE_INFINITY,
            st: Number.POSITIVE_INFINITY,
          }),
          (this.cf = null),
          (this.df = !1),
          (this.ff = null),
          (this.vf = null),
          (this.pf = !1),
          (this.mf = !1),
          (this.bf = !1),
          (this.wf = null),
          (this.gf = null),
          (this.Mf = null),
          (this.xf = null),
          (this.Sf = null),
          (this.kf = null),
          (this.yf = null),
          (this.Cf = 0),
          (this.Tf = !1),
          (this.Pf = !1),
          (this.Rf = !1),
          (this.Df = 0),
          (this.Of = null),
          (this.Bf = !ed()),
          (this.Vf = (t) => {
            this.Af(t);
          }),
          (this.zf = (t) => {
            if (this.Ef(t)) {
              let i = this.If(t);
              if ((++this.af, this._f && this.af > 1)) {
                let { Lf: e } = this.Nf(eC(t), this.uf);
                e < 30 && !this.bf && this.Ff(i, this.jf.Wf), this.Hf();
              }
            } else {
              let s = this.If(t);
              if ((++this.rf, this.hf && this.rf > 1)) {
                let { Lf: h } = this.Nf(eC(t), this.lf);
                h < 5 && !this.mf && this.$f(s, this.jf.Uf), this.qf();
              }
            }
          }),
          (this.Yf = t),
          (this.jf = i),
          (this.cn = e),
          this.Zf();
      }
      S() {
        null !== this.wf && (this.wf(), (this.wf = null)),
          null !== this.gf && (this.gf(), (this.gf = null)),
          null !== this.xf && (this.xf(), (this.xf = null)),
          null !== this.Sf && (this.Sf(), (this.Sf = null)),
          null !== this.kf && (this.kf(), (this.kf = null)),
          null !== this.Mf && (this.Mf(), (this.Mf = null)),
          this.Xf(),
          this.qf();
      }
      Kf(t) {
        this.xf && this.xf();
        let i = this.Gf.bind(this);
        if (
          ((this.xf = () => {
            this.Yf.removeEventListener('mousemove', i);
          }),
          this.Yf.addEventListener('mousemove', i),
          this.Ef(t))
        )
          return;
        let e = this.If(t);
        this.$f(e, this.jf.Jf), (this.Bf = !0);
      }
      qf() {
        null !== this.hf && clearTimeout(this.hf),
          (this.rf = 0),
          (this.hf = null),
          (this.lf = {
            nt: Number.NEGATIVE_INFINITY,
            st: Number.POSITIVE_INFINITY,
          });
      }
      Hf() {
        null !== this._f && clearTimeout(this._f),
          (this.af = 0),
          (this._f = null),
          (this.uf = {
            nt: Number.NEGATIVE_INFINITY,
            st: Number.POSITIVE_INFINITY,
          });
      }
      Gf(t) {
        if (this.Rf || null !== this.vf || this.Ef(t)) return;
        let i = this.If(t);
        this.$f(i, this.jf.Qf), (this.Bf = !0);
      }
      tv(t) {
        let i = ek(t.changedTouches, d(this.Of));
        if (null === i || ((this.Df = eE(t)), null !== this.yf) || this.Pf)
          return;
        this.Tf = !0;
        let e = this.Nf(eC(i), d(this.vf)),
          { iv: s, nv: h, Lf: l } = e;
        if (this.pf || !(l < 5)) {
          if (!this.pf) {
            let n = 0.5 * s,
              r = h >= n && !this.cn.sv(),
              o = n > h && !this.cn.ev();
            r || o || (this.Pf = !0),
              (this.pf = !0),
              (this.bf = !0),
              this.Xf(),
              this.Hf();
          }
          if (!this.Pf) {
            let u = this.If(t, i);
            this.Ff(u, this.jf.rv), ex(t);
          }
        }
      }
      hv(t) {
        if (0 !== t.button) return;
        let i = this.Nf(eC(t), d(this.ff)),
          { Lf: e } = i;
        if ((e >= 5 && ((this.mf = !0), this.qf()), this.mf)) {
          let s = this.If(t);
          this.$f(s, this.jf.lv);
        }
      }
      Nf(t, i) {
        let e = Math.abs(i.nt - t.nt),
          s = Math.abs(i.st - t.st);
        return { iv: e, nv: s, Lf: e + s };
      }
      av(t) {
        let i = ek(t.changedTouches, d(this.Of));
        if (
          (null === i && 0 === t.touches.length && (i = t.changedTouches[0]),
          null === i)
        )
          return;
        (this.Of = null),
          (this.Df = eE(t)),
          this.Xf(),
          (this.vf = null),
          this.kf && (this.kf(), (this.kf = null));
        let e = this.If(t, i);
        if ((this.Ff(e, this.jf.ov), ++this.af, this._f && this.af > 1)) {
          let { Lf: s } = this.Nf(eC(i), this.uf);
          s < 30 && !this.bf && this.Ff(e, this.jf.Wf), this.Hf();
        } else this.bf || (this.Ff(e, this.jf._v), this.jf._v && ex(t));
        0 === this.af && ex(t),
          0 === t.touches.length && this.df && ((this.df = !1), ex(t));
      }
      Af(t) {
        if (0 !== t.button) return;
        let i = this.If(t);
        if (
          ((this.ff = null),
          (this.Rf = !1),
          this.Sf && (this.Sf(), (this.Sf = null)),
          ec() &&
            this.Yf.ownerDocument.documentElement.removeEventListener(
              'mouseleave',
              this.Vf
            ),
          !this.Ef(t))
        ) {
          if ((this.$f(i, this.jf.uv), ++this.rf, this.hf && this.rf > 1)) {
            let { Lf: e } = this.Nf(eC(t), this.lf);
            e < 5 && !this.mf && this.$f(i, this.jf.Uf), this.qf();
          } else this.mf || this.$f(i, this.jf.cv);
        }
      }
      Xf() {
        null !== this.cf && (clearTimeout(this.cf), (this.cf = null));
      }
      dv(t) {
        if (null !== this.Of) return;
        let i = t.changedTouches[0];
        (this.Of = i.identifier), (this.Df = eE(t));
        let e = this.Yf.ownerDocument.documentElement;
        (this.bf = !1),
          (this.pf = !1),
          (this.Pf = !1),
          (this.vf = eC(i)),
          this.kf && (this.kf(), (this.kf = null));
        {
          let s = this.tv.bind(this),
            h = this.av.bind(this);
          (this.kf = () => {
            e.removeEventListener('touchmove', s),
              e.removeEventListener('touchend', h);
          }),
            e.addEventListener('touchmove', s, { passive: !1 }),
            e.addEventListener('touchend', h, { passive: !1 }),
            this.Xf(),
            (this.cf = setTimeout(this.fv.bind(this, t), 240));
        }
        let l = this.If(t, i);
        this.Ff(l, this.jf.vv),
          this._f ||
            ((this.af = 0),
            (this._f = setTimeout(this.Hf.bind(this), 500)),
            (this.uf = eC(i)));
      }
      pv(t) {
        if (0 !== t.button) return;
        let i = this.Yf.ownerDocument.documentElement;
        ec() && i.addEventListener('mouseleave', this.Vf),
          (this.mf = !1),
          (this.ff = eC(t)),
          this.Sf && (this.Sf(), (this.Sf = null));
        {
          let e = this.hv.bind(this),
            s = this.Af.bind(this);
          (this.Sf = () => {
            i.removeEventListener('mousemove', e),
              i.removeEventListener('mouseup', s);
          }),
            i.addEventListener('mousemove', e),
            i.addEventListener('mouseup', s);
        }
        if (((this.Rf = !0), this.Ef(t))) return;
        let h = this.If(t);
        this.$f(h, this.jf.mv),
          this.hf ||
            ((this.rf = 0),
            (this.hf = setTimeout(this.qf.bind(this), 500)),
            (this.lf = eC(t)));
      }
      Zf() {
        var t;
        this.Yf.addEventListener('mouseenter', this.Kf.bind(this)),
          this.Yf.addEventListener('touchcancel', this.Xf.bind(this));
        {
          let i = this.Yf.ownerDocument,
            e = (t) => {
              this.jf.bv &&
                ((t.composed && this.Yf.contains(t.composedPath()[0])) ||
                  (t.target && this.Yf.contains(t.target)) ||
                  this.jf.bv());
            };
          (this.gf = () => {
            i.removeEventListener('touchstart', e);
          }),
            (this.wf = () => {
              i.removeEventListener('mousedown', e);
            }),
            i.addEventListener('mousedown', e),
            i.addEventListener('touchstart', e, { passive: !0 });
        }
        ed() &&
          ((this.Mf = () => {
            this.Yf.removeEventListener('dblclick', this.zf);
          }),
          this.Yf.addEventListener('dblclick', this.zf)),
          this.Yf.addEventListener('mouseleave', this.wv.bind(this)),
          this.Yf.addEventListener('touchstart', this.dv.bind(this), {
            passive: !0,
          }),
          (t = this.Yf),
          ea &&
            void 0 !== window.chrome &&
            t.addEventListener('mousedown', (t) => {
              if (1 === t.button) return t.preventDefault(), !1;
            }),
          this.Yf.addEventListener('mousedown', this.pv.bind(this)),
          this.gv(),
          this.Yf.addEventListener('touchmove', () => {}, { passive: !1 });
      }
      gv() {
        (void 0 === this.jf.Mv &&
          void 0 === this.jf.xv &&
          void 0 === this.jf.Sv) ||
          (this.Yf.addEventListener('touchstart', (t) => this.kv(t.touches), {
            passive: !0,
          }),
          this.Yf.addEventListener(
            'touchmove',
            (t) => {
              if (
                2 === t.touches.length &&
                null !== this.yf &&
                void 0 !== this.jf.xv
              ) {
                let i = e8(t.touches[0], t.touches[1]) / this.Cf;
                this.jf.xv(this.yf, i), ex(t);
              }
            },
            { passive: !1 }
          ),
          this.Yf.addEventListener('touchend', (t) => {
            this.kv(t.touches);
          }));
      }
      kv(t) {
        1 === t.length && (this.Tf = !1),
          2 !== t.length || this.Tf || this.df ? this.yv() : this.Cv(t);
      }
      Cv(t) {
        let i = this.Yf.getBoundingClientRect() || { left: 0, top: 0 };
        (this.yf = {
          nt: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
          st: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
        }),
          (this.Cf = e8(t[0], t[1])),
          void 0 !== this.jf.Mv && this.jf.Mv(),
          this.Xf();
      }
      yv() {
        null !== this.yf &&
          ((this.yf = null), void 0 !== this.jf.Sv && this.jf.Sv());
      }
      wv(t) {
        if ((this.xf && this.xf(), this.Ef(t) || !this.Bf)) return;
        let i = this.If(t);
        this.$f(i, this.jf.Tv), (this.Bf = !ed());
      }
      fv(t) {
        let i = ek(t.touches, d(this.Of));
        if (null === i) return;
        let e = this.If(t, i);
        this.Ff(e, this.jf.Pv), (this.bf = !0), (this.df = !0);
      }
      Ef(t) {
        return t.sourceCapabilities &&
          void 0 !== t.sourceCapabilities.firesTouchEvents
          ? t.sourceCapabilities.firesTouchEvents
          : eE(t) < this.Df + 500;
      }
      Ff(t, i) {
        i && i.call(this.jf, t);
      }
      $f(t, i) {
        i && i.call(this.jf, t);
      }
      If(t, i) {
        let e = i || t,
          s = this.Yf.getBoundingClientRect() || { left: 0, top: 0 };
        return {
          clientX: e.clientX,
          clientY: e.clientY,
          pageX: e.pageX,
          pageY: e.pageY,
          screenX: e.screenX,
          screenY: e.screenY,
          localX: e.clientX - s.left,
          localY: e.clientY - s.top,
          ctrlKey: t.ctrlKey,
          altKey: t.altKey,
          shiftKey: t.shiftKey,
          metaKey: t.metaKey,
          Rv:
            !t.type.startsWith('mouse') &&
            'contextmenu' !== t.type &&
            'click' !== t.type,
          Dv: t.type,
          Ov: e.target,
          Bv: t.view,
          Vv() {
            'touchstart' !== t.type && ex(t);
          },
        };
      }
    }
    function e8(t, i) {
      let e = t.clientX - i.clientX,
        s = t.clientY - i.clientY;
      return Math.sqrt(e * e + s * s);
    }
    function ex(t) {
      t.cancelable && t.preventDefault();
    }
    function eC(t) {
      return { nt: t.pageX, st: t.pageY };
    }
    function eE(t) {
      return t.timeStamp || performance.now();
    }
    function ek(t, i) {
      for (let e = 0; e < t.length; ++e) if (t[e].identifier === i) return t[e];
      return null;
    }
    function ez(t) {
      return { jc: t.jc, Av: { wr: t.zv.externalId }, Ev: t.zv.cursorStyle };
    }
    function eI(t, i, e) {
      for (let s of t) {
        let h = s.gt();
        if (null !== h && h.br) {
          let l = h.br(i, e);
          if (null !== l) return { Bv: s, Av: l };
        }
      }
      return null;
    }
    function eL(t, i) {
      return (e) => {
        var s, h, l, n;
        return (null !==
          (h = null === (s = e.Dt()) || void 0 === s ? void 0 : s.Ta()) &&
        void 0 !== h
          ? h
          : '') !== i
          ? []
          : null !==
              (n =
                null === (l = e.ca) || void 0 === l ? void 0 : l.call(e, t)) &&
            void 0 !== n
          ? n
          : [];
      };
    }
    function eO(t, i, e, s) {
      if (!t.length) return;
      let h = 0,
        l = e / 2,
        n = t[0].At(s, !0),
        r = 1 === i ? l - (t[0].Oi() - n / 2) : t[0].Oi() - n / 2 - l;
      r = Math.max(0, r);
      for (let o = 1; o < t.length; o++) {
        let u = t[o],
          a = t[o - 1],
          c = a.At(s, !1),
          d = u.Oi(),
          f = a.Oi();
        if (1 === i ? d > f - c : d < f + c) {
          let $ = f - c * i;
          u.Bi($);
          let v = $ - (i * c) / 2;
          if ((1 === i ? v < 0 : v > e) && r > 0) {
            let p = 1 === i ? -1 - v : v - e,
              m = Math.min(p, r);
            for (let b = h; b < t.length; b++) t[b].Bi(t[b].Oi() + i * m);
            r -= m;
          }
        } else (h = o), (r = 1 === i ? f - c - d : d - (f + c));
      }
    }
    class e0 {
      constructor(t, i, e, s) {
        (this.Ii = null),
          (this.Iv = null),
          (this.Lv = !1),
          (this.Nv = new tP(200)),
          (this.Jr = null),
          (this.Fv = 0),
          (this.Wv = !1),
          (this.jv = () => {
            this.Wv || this.tn.Hv().$t().$h();
          }),
          (this.$v = () => {
            this.Wv || this.tn.Hv().$t().$h();
          }),
          (this.tn = t),
          (this.cn = i),
          (this.So = i.layout),
          (this.Oc = e),
          (this.Uv = 'left' === s),
          (this.qv = eL('normal', s)),
          (this.Yv = eL('top', s)),
          (this.Zv = eL('bottom', s)),
          (this.Xv = document.createElement('div')),
          (this.Xv.style.height = '100%'),
          (this.Xv.style.overflow = 'hidden'),
          (this.Xv.style.width = '25px'),
          (this.Xv.style.left = '0'),
          (this.Xv.style.position = 'relative'),
          (this.Kv = eb(this.Xv, iU({ width: 16, height: 16 }))),
          this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
        let h = this.Kv.canvasElement;
        (h.style.position = 'absolute'),
          (h.style.zIndex = '1'),
          (h.style.left = '0'),
          (h.style.top = '0'),
          (this.Gv = eb(this.Xv, iU({ width: 16, height: 16 }))),
          this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
        let l = this.Gv.canvasElement;
        (l.style.position = 'absolute'),
          (l.style.zIndex = '2'),
          (l.style.left = '0'),
          (l.style.top = '0');
        let n = {
          mv: this.Jv.bind(this),
          vv: this.Jv.bind(this),
          lv: this.Qv.bind(this),
          rv: this.Qv.bind(this),
          bv: this.tp.bind(this),
          uv: this.ip.bind(this),
          ov: this.ip.bind(this),
          Uf: this.np.bind(this),
          Wf: this.np.bind(this),
          Jf: this.sp.bind(this),
          Tv: this.ep.bind(this),
        };
        this.rp = new ey(this.Gv.canvasElement, n, {
          sv: () => !this.cn.handleScroll.vertTouchDrag,
          ev: () => !0,
        });
      }
      S() {
        this.rp.S(),
          this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v),
          eg(this.Gv.canvasElement),
          this.Gv.dispose(),
          this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv),
          eg(this.Kv.canvasElement),
          this.Kv.dispose(),
          null !== this.Ii && this.Ii.Xo().p(this),
          (this.Ii = null);
      }
      hp() {
        return this.Xv;
      }
      P() {
        return this.So.fontSize;
      }
      lp() {
        let t = this.Oc.W();
        return this.Jr !== t.R && (this.Nv.ir(), (this.Jr = t.R)), t;
      }
      ap() {
        if (null === this.Ii) return 0;
        let t = 0,
          i = this.lp(),
          e = d(this.Kv.canvasElement.getContext('2d'));
        e.save();
        let s = this.Ii.ja();
        (e.font = this.op()),
          s.length > 0 &&
            (t = Math.max(
              this.Nv.xi(e, s[0].no),
              this.Nv.xi(e, s[s.length - 1].no)
            ));
        let h = this._p();
        for (let l = h.length; l--; ) {
          let n = this.Nv.xi(e, h[l].Kt());
          n > t && (t = n);
        }
        let r = this.Ii.Ct();
        if (null !== r && null !== this.Iv) {
          let o = this.Ii.pn(1, r),
            u = this.Ii.pn(this.Iv.height - 2, r);
          t = Math.max(
            t,
            this.Nv.xi(
              e,
              this.Ii.Fi(Math.floor(Math.min(o, u)) + 0.11111111111111, r)
            ),
            this.Nv.xi(
              e,
              this.Ii.Fi(Math.ceil(Math.max(o, u)) - 0.11111111111111, r)
            )
          );
        }
        e.restore();
        let a = t || 34;
        return ef(Math.ceil(i.C + i.T + i.A + i.I + 5 + a));
      }
      up(t) {
        (null !== this.Iv && iV(this.Iv, t)) ||
          ((this.Iv = t),
          (this.Wv = !0),
          this.Kv.resizeCanvasElement(t),
          this.Gv.resizeCanvasElement(t),
          (this.Wv = !1),
          (this.Xv.style.width = `${t.width}px`),
          (this.Xv.style.height = `${t.height}px`));
      }
      cp() {
        return d(this.Iv).width;
      }
      Gi(t) {
        this.Ii !== t &&
          (null !== this.Ii && this.Ii.Xo().p(this),
          (this.Ii = t),
          t.Xo().l(this.do.bind(this), this));
      }
      Dt() {
        return this.Ii;
      }
      ir() {
        let t = this.tn.dp();
        this.tn.Hv().$t().I_(t, d(this.Dt()));
      }
      fp(t) {
        if (null === this.Iv) return;
        if (1 !== t) {
          this.vp(), this.Kv.applySuggestedBitmapSize();
          let i = eu(this.Kv);
          null !== i &&
            (i.useBitmapCoordinateSpace((t) => {
              this.pp(t), this.Ae(t);
            }),
            this.tn.mp(i, this.Zv),
            this.bp(i),
            this.tn.mp(i, this.qv),
            this.wp(i));
        }
        this.Gv.applySuggestedBitmapSize();
        let e = eu(this.Gv);
        null !== e &&
          (e.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
            t.clearRect(0, 0, i.width, i.height);
          }),
          this.gp(e),
          this.tn.mp(e, this.Yv));
      }
      Mp() {
        return this.Kv.bitmapSize;
      }
      xp(t, i, e) {
        let s = this.Mp();
        s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, i, e);
      }
      bt() {
        var t;
        null === (t = this.Ii) || void 0 === t || t.ja();
      }
      Jv(t) {
        if (
          null === this.Ii ||
          this.Ii.Ni() ||
          !this.cn.handleScale.axisPressedMouseMove.price
        )
          return;
        let i = this.tn.Hv().$t(),
          e = this.tn.dp();
        (this.Lv = !0), i.D_(e, this.Ii, t.localY);
      }
      Qv(t) {
        if (null === this.Ii || !this.cn.handleScale.axisPressedMouseMove.price)
          return;
        let i = this.tn.Hv().$t(),
          e = this.tn.dp(),
          s = this.Ii;
        i.O_(e, s, t.localY);
      }
      tp() {
        if (null === this.Ii || !this.cn.handleScale.axisPressedMouseMove.price)
          return;
        let t = this.tn.Hv().$t(),
          i = this.tn.dp(),
          e = this.Ii;
        this.Lv && ((this.Lv = !1), t.B_(i, e));
      }
      ip(t) {
        if (null === this.Ii || !this.cn.handleScale.axisPressedMouseMove.price)
          return;
        let i = this.tn.Hv().$t(),
          e = this.tn.dp();
        (this.Lv = !1), i.B_(e, this.Ii);
      }
      np(t) {
        this.cn.handleScale.axisDoubleClickReset.price && this.ir();
      }
      sp(t) {
        null !== this.Ii &&
          (!this.tn.Hv().$t().W().handleScale.axisPressedMouseMove.price ||
            this.Ii.gh() ||
            this.Ii.Oo() ||
            this.Sp(1));
      }
      ep(t) {
        this.Sp(0);
      }
      _p() {
        let t = [],
          i = null === this.Ii ? void 0 : this.Ii;
        return (
          ((e) => {
            for (let s = 0; s < e.length; ++s) {
              let h = e[s].Rn(this.tn.dp(), i);
              for (let l = 0; l < h.length; l++) t.push(h[l]);
            }
          })(this.tn.dp().$o()),
          t
        );
      }
      pp({ context: t, bitmapSize: i }) {
        let { width: e, height: s } = i,
          h = this.tn.dp().$t(),
          l = h.q(),
          n = h.md();
        l === n ? K(t, 0, 0, e, s, l) : X(t, 0, 0, e, s, l, n);
      }
      Ae({ context: t, bitmapSize: i, horizontalPixelRatio: e }) {
        if (null === this.Iv || null === this.Ii || !this.Ii.W().borderVisible)
          return;
        t.fillStyle = this.Ii.W().borderColor;
        let s = Math.max(1, Math.floor(this.lp().C * e)),
          h;
        (h = this.Uv ? i.width - s : 0), t.fillRect(h, 0, s, i.height);
      }
      bp(t) {
        if (null === this.Iv || null === this.Ii) return;
        let i = this.Ii.ja(),
          e = this.Ii.W(),
          s = this.lp(),
          h = this.Uv ? this.Iv.width - s.T : 0;
        e.borderVisible &&
          e.ticksVisible &&
          t.useBitmapCoordinateSpace(
            ({
              context: t,
              horizontalPixelRatio: l,
              verticalPixelRatio: n,
            }) => {
              t.fillStyle = e.borderColor;
              let r = Math.max(1, Math.floor(n)),
                o = Math.floor(0.5 * n),
                u = Math.round(s.T * l);
              for (let a of (t.beginPath(), i))
                t.rect(Math.floor(h * l), Math.round(a.Ia * n) - o, u, r);
              t.fill();
            }
          ),
          t.useMediaCoordinateSpace(({ context: t }) => {
            var l;
            (t.font = this.op()),
              (t.fillStyle =
                null !== (l = e.textColor) && void 0 !== l
                  ? l
                  : this.So.textColor),
              (t.textAlign = this.Uv ? 'right' : 'left'),
              (t.textBaseline = 'middle');
            let n = this.Uv ? Math.round(h - s.A) : Math.round(h + s.T + s.A),
              r = i.map((i) => this.Nv.Mi(t, i.no));
            for (let o = i.length; o--; ) {
              let u = i[o];
              t.fillText(u.no, n, u.Ia + r[o]);
            }
          });
      }
      vp() {
        if (null === this.Iv || null === this.Ii) return;
        let t = [],
          i = this.Ii.$o().slice(),
          e = this.tn.dp(),
          s = this.lp();
        this.Ii === e.vr() &&
          this.tn
            .dp()
            .$o()
            .forEach((t) => {
              e.dr(t) && i.push(t);
            });
        let h = this.Ii;
        i.forEach((i) => {
          i.Rn(e, h).forEach((i) => {
            i.Bi(null), i.Vi() && t.push(i);
          });
        }),
          t.forEach((t) => t.Bi(t.ki())),
          this.Ii.W().alignLabels && this.kp(t, s);
      }
      kp(t, i) {
        if (null === this.Iv) return;
        let e = this.Iv.height / 2,
          s = t.filter((t) => t.ki() <= e),
          h = t.filter((t) => t.ki() > e);
        for (let l of (s.sort((t, i) => i.ki() - t.ki()),
        h.sort((t, i) => t.ki() - i.ki()),
        t)) {
          let n = Math.floor(l.At(i) / 2),
            r = l.ki();
          r > -n && r < n && l.Bi(n),
            r > this.Iv.height - n &&
              r < this.Iv.height + n &&
              l.Bi(this.Iv.height - n);
        }
        eO(s, 1, this.Iv.height, i), eO(h, -1, this.Iv.height, i);
      }
      wp(t) {
        if (null === this.Iv) return;
        let i = this._p(),
          e = this.lp(),
          s = this.Uv ? 'right' : 'left';
        i.forEach((i) => {
          i.Ai() && i.gt(d(this.Ii)).X(t, e, this.Nv, s);
        });
      }
      gp(t) {
        if (null === this.Iv || null === this.Ii) return;
        let i = this.tn.Hv().$t(),
          e = [],
          s = this.tn.dp(),
          h = i.Yc().Rn(s, this.Ii);
        h.length && e.push(h);
        let l = this.lp(),
          n = this.Uv ? 'right' : 'left';
        e.forEach((i) => {
          i.forEach((i) => {
            i.gt(d(this.Ii)).X(t, l, this.Nv, n);
          });
        });
      }
      Sp(t) {
        this.Xv.style.cursor = 1 === t ? 'ns-resize' : 'default';
      }
      do() {
        let t = this.ap();
        this.Fv < t && this.tn.Hv().$t().Xl(), (this.Fv = t);
      }
      op() {
        return T(this.So.fontSize, this.So.fontFamily);
      }
    }
    function eP(t, i) {
      var e, s;
      return null !==
        (s = null === (e = t._a) || void 0 === e ? void 0 : e.call(t, i)) &&
        void 0 !== s
        ? s
        : [];
    }
    function eW(t, i) {
      var e, s;
      return null !==
        (s = null === (e = t.Pn) || void 0 === e ? void 0 : e.call(t, i)) &&
        void 0 !== s
        ? s
        : [];
    }
    function eT(t, i) {
      var e, s;
      return null !==
        (s = null === (e = t.Ji) || void 0 === e ? void 0 : e.call(t, i)) &&
        void 0 !== s
        ? s
        : [];
    }
    function e9(t, i) {
      var e, s;
      return null !==
        (s = null === (e = t.la) || void 0 === e ? void 0 : e.call(t, i)) &&
        void 0 !== s
        ? s
        : [];
    }
    class eR {
      constructor(t, i) {
        (this.Iv = iU({ width: 0, height: 0 })),
          (this.yp = null),
          (this.Cp = null),
          (this.Tp = null),
          (this.Pp = null),
          (this.Rp = !1),
          (this.Dp = new x()),
          (this.Op = new x()),
          (this.Bp = 0),
          (this.Vp = !1),
          (this.Ap = null),
          (this.zp = !1),
          (this.Ep = null),
          (this.Ip = null),
          (this.Wv = !1),
          (this.jv = () => {
            this.Wv || null === this.Lp || this.$i().$h();
          }),
          (this.$v = () => {
            this.Wv || null === this.Lp || this.$i().$h();
          }),
          (this.Jd = t),
          (this.Lp = i),
          this.Lp.F_().l(this.Np.bind(this), this, !0),
          (this.Fp = document.createElement('td')),
          (this.Fp.style.padding = '0'),
          (this.Fp.style.position = 'relative');
        let e = document.createElement('div');
        (e.style.width = '100%'),
          (e.style.height = '100%'),
          (e.style.position = 'relative'),
          (e.style.overflow = 'hidden'),
          (this.Wp = document.createElement('td')),
          (this.Wp.style.padding = '0'),
          (this.jp = document.createElement('td')),
          (this.jp.style.padding = '0'),
          this.Fp.appendChild(e),
          (this.Kv = eb(e, iU({ width: 16, height: 16 }))),
          this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
        let s = this.Kv.canvasElement;
        (s.style.position = 'absolute'),
          (s.style.zIndex = '1'),
          (s.style.left = '0'),
          (s.style.top = '0'),
          (this.Gv = eb(e, iU({ width: 16, height: 16 }))),
          this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
        let h = this.Gv.canvasElement;
        (h.style.position = 'absolute'),
          (h.style.zIndex = '2'),
          (h.style.left = '0'),
          (h.style.top = '0'),
          (this.Hp = document.createElement('tr')),
          this.Hp.appendChild(this.Wp),
          this.Hp.appendChild(this.Fp),
          this.Hp.appendChild(this.jp),
          this.$p(),
          (this.rp = new ey(this.Gv.canvasElement, this, {
            sv: () =>
              null === this.Ap && !this.Jd.W().handleScroll.vertTouchDrag,
            ev: () =>
              null === this.Ap && !this.Jd.W().handleScroll.horzTouchDrag,
          }));
      }
      S() {
        null !== this.yp && this.yp.S(),
          null !== this.Cp && this.Cp.S(),
          (this.Tp = null),
          this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v),
          eg(this.Gv.canvasElement),
          this.Gv.dispose(),
          this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv),
          eg(this.Kv.canvasElement),
          this.Kv.dispose(),
          null !== this.Lp && this.Lp.F_().p(this),
          this.rp.S();
      }
      dp() {
        return d(this.Lp);
      }
      Up(t) {
        var i, e;
        null !== this.Lp && this.Lp.F_().p(this),
          (this.Lp = t),
          null !== this.Lp &&
            this.Lp.F_().l(eR.prototype.Np.bind(this), this, !0),
          this.$p(),
          this.Jd.qp().indexOf(this) === this.Jd.qp().length - 1
            ? ((this.Tp =
                null !== (i = this.Tp) && void 0 !== i
                  ? i
                  : new em(this.Fp, this.Jd)),
              this.Tp.bt())
            : (null === (e = this.Tp) || void 0 === e || e.tf(),
              (this.Tp = null));
      }
      Hv() {
        return this.Jd;
      }
      hp() {
        return this.Hp;
      }
      $p() {
        if (null !== this.Lp && (this.Yp(), 0 !== this.$i().wt().length)) {
          if (null !== this.yp) {
            let t = this.Lp.P_();
            this.yp.Gi(d(t));
          }
          if (null !== this.Cp) {
            let i = this.Lp.R_();
            this.Cp.Gi(d(i));
          }
        }
      }
      Zp() {
        null !== this.yp && this.yp.bt(), null !== this.Cp && this.Cp.bt();
      }
      g_() {
        return null !== this.Lp ? this.Lp.g_() : 0;
      }
      M_(t) {
        this.Lp && this.Lp.M_(t);
      }
      Jf(t) {
        if (!this.Lp) return;
        this.Xp();
        let i = t.localX,
          e = t.localY;
        this.Kp(i, e, t);
      }
      mv(t) {
        this.Xp(), this.Gp(), this.Kp(t.localX, t.localY, t);
      }
      Qf(t) {
        var i;
        if (!this.Lp) return;
        this.Xp();
        let e = t.localX,
          s = t.localY;
        this.Kp(e, s, t);
        let h = this.br(e, s);
        this.Jd.Jp(
          null !== (i = null == h ? void 0 : h.Ev) && void 0 !== i ? i : null
        ),
          this.$i().Wc(h && { jc: h.jc, Av: h.Av });
      }
      cv(t) {
        null !== this.Lp && (this.Xp(), this.Qp(t));
      }
      Uf(t) {
        null !== this.Lp && this.tm(this.Op, t);
      }
      Wf(t) {
        this.Uf(t);
      }
      lv(t) {
        this.Xp(), this.im(t), this.Kp(t.localX, t.localY, t);
      }
      uv(t) {
        null !== this.Lp && (this.Xp(), (this.Vp = !1), this.nm(t));
      }
      _v(t) {
        null !== this.Lp && this.Qp(t);
      }
      Pv(t) {
        if (((this.Vp = !0), null === this.Ap)) {
          let i = { x: t.localX, y: t.localY };
          this.sm(i, i, t);
        }
      }
      Tv(t) {
        null !== this.Lp && (this.Xp(), this.Lp.$t().Wc(null), this.rm());
      }
      hm() {
        return this.Dp;
      }
      lm() {
        return this.Op;
      }
      Mv() {
        (this.Bp = 1), this.$i().Un();
      }
      xv(t, i) {
        if (!this.Jd.W().handleScale.pinch) return;
        let e = 5 * (i - this.Bp);
        (this.Bp = i), this.$i().Jc(t.nt, e);
      }
      vv(t) {
        (this.Vp = !1), (this.zp = null !== this.Ap), this.Gp();
        let i = this.$i().Yc();
        null !== this.Ap &&
          i.yt() &&
          ((this.Ep = { x: i.Yt(), y: i.Zt() }),
          (this.Ap = { x: t.localX, y: t.localY }));
      }
      rv(t) {
        if (null === this.Lp) return;
        let i = t.localX,
          e = t.localY;
        if (null === this.Ap) this.im(t);
        else {
          this.zp = !1;
          let s = d(this.Ep),
            h = s.x + (i - this.Ap.x),
            l = s.y + (e - this.Ap.y);
          this.Kp(h, l, t);
        }
      }
      ov(t) {
        0 === this.Hv().W().trackingMode.exitMode && (this.zp = !0),
          this.am(),
          this.nm(t);
      }
      br(t, i) {
        let e = this.Lp;
        return null === e
          ? null
          : (function (t, i, e) {
              let s = t.$o(),
                h = (function (t, i, e) {
                  var s, h, l, n;
                  let r, o;
                  for (let u of t) {
                    let a =
                      null !==
                        (h =
                          null === (s = u.fa) || void 0 === s
                            ? void 0
                            : s.call(u, i, e)) && void 0 !== h
                        ? h
                        : [];
                    for (let c of a)
                      (l = c.zOrder),
                        ((n = null == r ? void 0 : r.zOrder) &&
                          ('top' !== l || 'top' === n) &&
                          ('normal' !== l || 'bottom' !== n)) ||
                          ((r = c), (o = u));
                  }
                  return r && o ? { zv: r, jc: o } : null;
                })(s, i, e);
              if ('top' === (null == h ? void 0 : h.zv.zOrder)) return ez(h);
              for (let l of s) {
                if (
                  h &&
                  h.jc === l &&
                  'bottom' !== h.zv.zOrder &&
                  !h.zv.isBackground
                )
                  return ez(h);
                let n = eI(l.Pn(t), i, e);
                if (null !== n) return { jc: l, Bv: n.Bv, Av: n.Av };
                if (
                  h &&
                  h.jc === l &&
                  'bottom' !== h.zv.zOrder &&
                  h.zv.isBackground
                )
                  return ez(h);
              }
              return (null == h ? void 0 : h.zv) ? ez(h) : null;
            })(e, t, i);
      }
      om(t, i) {
        d('left' === i ? this.yp : this.Cp).up(
          iU({ width: t, height: this.Iv.height })
        );
      }
      _m() {
        return this.Iv;
      }
      up(t) {
        iV(this.Iv, t) ||
          ((this.Iv = t),
          (this.Wv = !0),
          this.Kv.resizeCanvasElement(t),
          this.Gv.resizeCanvasElement(t),
          (this.Wv = !1),
          (this.Fp.style.width = t.width + 'px'),
          (this.Fp.style.height = t.height + 'px'));
      }
      um() {
        let t = d(this.Lp);
        for (let i of (t.T_(t.P_()), t.T_(t.R_()), t.Ba()))
          if (t.dr(i)) {
            let e = i.Dt();
            null !== e && t.T_(e), i.On();
          }
      }
      Mp() {
        return this.Kv.bitmapSize;
      }
      xp(t, i, e) {
        let s = this.Mp();
        s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, i, e);
      }
      fp(t) {
        if (0 === t || null === this.Lp) return;
        if (
          (t > 1 && this.um(),
          null !== this.yp && this.yp.fp(t),
          null !== this.Cp && this.Cp.fp(t),
          1 !== t)
        ) {
          this.Kv.applySuggestedBitmapSize();
          let i = eu(this.Kv);
          null !== i &&
            (i.useBitmapCoordinateSpace((t) => {
              this.pp(t);
            }),
            this.Lp &&
              (this.dm(i, eP),
              this.fm(i),
              this.vm(i),
              this.dm(i, eW),
              this.dm(i, eT)));
        }
        this.Gv.applySuggestedBitmapSize();
        let e = eu(this.Gv);
        null !== e &&
          (e.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
            t.clearRect(0, 0, i.width, i.height);
          }),
          this.pm(e),
          this.dm(e, e9));
      }
      bm() {
        return this.yp;
      }
      wm() {
        return this.Cp;
      }
      mp(t, i) {
        this.dm(t, i);
      }
      Np() {
        null !== this.Lp && this.Lp.F_().p(this), (this.Lp = null);
      }
      Qp(t) {
        this.tm(this.Dp, t);
      }
      tm(t, i) {
        let e = i.localX,
          s = i.localY;
        t.M() && t.m(this.$i().St().Lu(e), { x: e, y: s }, i);
      }
      pp({ context: t, bitmapSize: i }) {
        let { width: e, height: s } = i,
          h = this.$i(),
          l = h.q(),
          n = h.md();
        l === n ? K(t, 0, 0, e, s, n) : X(t, 0, 0, e, s, l, n);
      }
      fm(t) {
        let i = d(this.Lp).W_().Uh().gt();
        null !== i && i.X(t, !1);
      }
      vm(t) {
        let i = this.$i().qc();
        this.gm(t, eW, ew, i), this.gm(t, eW, e_, i);
      }
      pm(t) {
        this.gm(t, eW, e_, this.$i().Yc());
      }
      dm(t, i) {
        let e = d(this.Lp).$o();
        for (let s of e) this.gm(t, i, ew, s);
        for (let h of e) this.gm(t, i, e_, h);
      }
      gm(t, i, e, s) {
        let h = d(this.Lp),
          l = h.$t().Fc(),
          n = null !== l && l.jc === s,
          r = null !== l && n && void 0 !== l.Av ? l.Av.gr : void 0;
        eS(i, (i) => e(i, t, n, r), s, h);
      }
      Yp() {
        if (null === this.Lp) return;
        let t = this.Jd,
          i = this.Lp.P_().W().visible,
          e = this.Lp.R_().W().visible;
        i ||
          null === this.yp ||
          (this.Wp.removeChild(this.yp.hp()), this.yp.S(), (this.yp = null)),
          e ||
            null === this.Cp ||
            (this.jp.removeChild(this.Cp.hp()), this.Cp.S(), (this.Cp = null));
        let s = t.$t()._d();
        i &&
          null === this.yp &&
          ((this.yp = new e0(this, t.W(), s, 'left')),
          this.Wp.appendChild(this.yp.hp())),
          e &&
            null === this.Cp &&
            ((this.Cp = new e0(this, t.W(), s, 'right')),
            this.jp.appendChild(this.Cp.hp()));
      }
      Mm(t) {
        return (t.Rv && this.Vp) || null !== this.Ap;
      }
      xm(t) {
        return Math.max(0, Math.min(t, this.Iv.width - 1));
      }
      Sm(t) {
        return Math.max(0, Math.min(t, this.Iv.height - 1));
      }
      Kp(t, i, e) {
        this.$i().hd(this.xm(t), this.Sm(i), e, d(this.Lp));
      }
      rm() {
        this.$i().ad();
      }
      am() {
        this.zp && ((this.Ap = null), this.rm());
      }
      sm(t, i, e) {
        (this.Ap = t), (this.zp = !1), this.Kp(i.x, i.y, e);
        let s = this.$i().Yc();
        this.Ep = { x: s.Yt(), y: s.Zt() };
      }
      $i() {
        return this.Jd.$t();
      }
      nm(t) {
        if (!this.Rp) return;
        let i = this.$i(),
          e = this.dp();
        if (
          (i.z_(e, e.vn()),
          (this.Pp = null),
          (this.Rp = !1),
          i.sd(),
          null !== this.Ip)
        ) {
          let s = performance.now(),
            h = i.St();
          this.Ip.Dr(h.ju(), s), this.Ip.Ju(s) || i.Zn(this.Ip);
        }
      }
      Xp() {
        this.Ap = null;
      }
      Gp() {
        if (this.Lp) {
          if (
            (this.$i().Un(),
            document.activeElement !== document.body &&
              document.activeElement !== document.documentElement)
          )
            d(document.activeElement).blur();
          else {
            let t = document.getSelection();
            null !== t && t.removeAllRanges();
          }
          this.Lp.vn().Ni() || this.$i().St().Ni();
        }
      }
      im(t) {
        if (null === this.Lp) return;
        let i = this.$i(),
          e = i.St();
        if (e.Ni()) return;
        let s = this.Jd.W(),
          h = s.handleScroll,
          l = s.kineticScroll;
        if (
          (!h.pressedMouseMove || t.Rv) &&
          ((!h.horzTouchDrag && !h.vertTouchDrag) || !t.Rv)
        )
          return;
        let n = this.Lp.vn(),
          r = performance.now();
        if (
          (null !== this.Pp ||
            this.Mm(t) ||
            (this.Pp = {
              x: t.clientX,
              y: t.clientY,
              Od: r,
              km: t.localX,
              ym: t.localY,
            }),
          null !== this.Pp &&
            !this.Rp &&
            (this.Pp.x !== t.clientX || this.Pp.y !== t.clientY))
        ) {
          if ((t.Rv && l.touch) || (!t.Rv && l.mouse)) {
            let o = e.he();
            (this.Ip = new ep(0.2 / o, 7 / o, 0.997, 15 / o)),
              this.Ip.qd(e.ju(), this.Pp.Od);
          } else this.Ip = null;
          n.Ni() || i.V_(this.Lp, n, t.localY), i.td(t.localX), (this.Rp = !0);
        }
        this.Rp &&
          (n.Ni() || i.A_(this.Lp, n, t.localY),
          i.nd(t.localX),
          null !== this.Ip && this.Ip.qd(e.ju(), r));
      }
    }
    class eM {
      constructor(t, i, e, s, h) {
        (this.ft = !0),
          (this.Iv = iU({ width: 0, height: 0 })),
          (this.jv = () => this.fp(3)),
          (this.Uv = 'left' === t),
          (this.Oc = e._d),
          (this.cn = i),
          (this.Cm = s),
          (this.Tm = h),
          (this.Xv = document.createElement('div')),
          (this.Xv.style.width = '25px'),
          (this.Xv.style.height = '100%'),
          (this.Xv.style.overflow = 'hidden'),
          (this.Kv = eb(this.Xv, iU({ width: 16, height: 16 }))),
          this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
      }
      S() {
        this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv),
          eg(this.Kv.canvasElement),
          this.Kv.dispose();
      }
      hp() {
        return this.Xv;
      }
      _m() {
        return this.Iv;
      }
      up(t) {
        iV(this.Iv, t) ||
          ((this.Iv = t),
          this.Kv.resizeCanvasElement(t),
          (this.Xv.style.width = `${t.width}px`),
          (this.Xv.style.height = `${t.height}px`),
          (this.ft = !0));
      }
      fp(t) {
        if ((t < 3 && !this.ft) || 0 === this.Iv.width || 0 === this.Iv.height)
          return;
        (this.ft = !1), this.Kv.applySuggestedBitmapSize();
        let i = eu(this.Kv);
        null !== i &&
          i.useBitmapCoordinateSpace((t) => {
            this.pp(t), this.Ae(t);
          });
      }
      Mp() {
        return this.Kv.bitmapSize;
      }
      xp(t, i, e) {
        let s = this.Mp();
        s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, i, e);
      }
      Ae({
        context: t,
        bitmapSize: i,
        horizontalPixelRatio: e,
        verticalPixelRatio: s,
      }) {
        if (!this.Cm()) return;
        t.fillStyle = this.cn.timeScale.borderColor;
        let h = Math.floor(this.Oc.W().C * e),
          l = Math.floor(this.Oc.W().C * s),
          n = this.Uv ? i.width - h : 0;
        t.fillRect(n, 0, h, l);
      }
      pp({ context: t, bitmapSize: i }) {
        K(t, 0, 0, i.width, i.height, this.Tm());
      }
    }
    function eB(t) {
      return (i) => {
        var e, s;
        return null !==
          (s = null === (e = i.da) || void 0 === e ? void 0 : e.call(i, t)) &&
          void 0 !== s
          ? s
          : [];
      };
    }
    let eD = eB('normal'),
      eF = eB('top'),
      eA = eB('bottom'),
      eK =
        !!ea &&
        !!navigator.userAgentData &&
        navigator.userAgentData.brands.some((t) =>
          t.brand.includes('Chromium')
        ) &&
        !!ea &&
        ((
          null ===
            (eh = null == navigator ? void 0 : navigator.userAgentData) ||
          void 0 === eh
            ? void 0
            : eh.platform
        )
          ? 'Windows' === navigator.userAgentData.platform
          : navigator.userAgent.toLowerCase().indexOf('win') >= 0);
    function eU(t) {
      return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
    }
    function eV(t, i) {
      var e = {};
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) &&
          0 > i.indexOf(s) &&
          (e[s] = t[s]);
      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var h = 0;
        for (s = Object.getOwnPropertySymbols(t); h < s.length; h++)
          0 > i.indexOf(s[h]) &&
            Object.prototype.propertyIsEnumerable.call(t, s[h]) &&
            (e[s[h]] = t[s[h]]);
      }
      return e;
    }
    function eX(t, i, e, s) {
      let h = e.value,
        l = { se: i, ot: t, Ot: [h, h, h, h], zb: s };
      return void 0 !== e.color && (l.O = e.color), l;
    }
    function eN(t, i, e, s) {
      let h = e.value,
        l = { se: i, ot: t, Ot: [h, h, h, h], zb: s };
      return (
        void 0 !== e.lineColor && (l.lt = e.lineColor),
        void 0 !== e.topColor && (l.Ts = e.topColor),
        void 0 !== e.bottomColor && (l.Ps = e.bottomColor),
        l
      );
    }
    function ej(t, i, e, s) {
      let h = e.value,
        l = { se: i, ot: t, Ot: [h, h, h, h], zb: s };
      return (
        void 0 !== e.topLineColor && (l.Pe = e.topLineColor),
        void 0 !== e.bottomLineColor && (l.Re = e.bottomLineColor),
        void 0 !== e.topFillColor1 && (l.Se = e.topFillColor1),
        void 0 !== e.topFillColor2 && (l.ke = e.topFillColor2),
        void 0 !== e.bottomFillColor1 && (l.ye = e.bottomFillColor1),
        void 0 !== e.bottomFillColor2 && (l.Ce = e.bottomFillColor2),
        l
      );
    }
    function eJ(t, i, e, s) {
      let h = { se: i, ot: t, Ot: [e.open, e.high, e.low, e.close], zb: s };
      return void 0 !== e.color && (h.O = e.color), h;
    }
    function e1(t, i, e, s) {
      let h = { se: i, ot: t, Ot: [e.open, e.high, e.low, e.close], zb: s };
      return (
        void 0 !== e.color && (h.O = e.color),
        void 0 !== e.borderColor && (h.Bt = e.borderColor),
        void 0 !== e.wickColor && (h.Zh = e.wickColor),
        h
      );
    }
    function eH(t, i, e, s, h) {
      let l = c(h)(e),
        n = l[l.length - 1],
        r = e,
        { time: o, color: u } = r;
      return {
        se: i,
        ot: t,
        Ot: [n, Math.max(...l), Math.min(...l), n],
        zb: s,
        He: eV(r, ['time', 'color']),
        O: u,
      };
    }
    function e3(t) {
      return void 0 !== t.Ot;
    }
    function eZ(t, i) {
      return void 0 !== i.customValues && (t.Wb = i.customValues), t;
    }
    function eG(t) {
      return (i, e, s, h, l, n) => {
        var r, o, u;
        return ((r = s),
        (o = n) ? o(r) : void 0 === (u = r).open && void 0 === u.value)
          ? eZ({ ot: i, se: e, zb: h }, s)
          : eZ(t(i, e, s, h, l), s);
      };
    }
    function eY(t) {
      return {
        Candlestick: eG(e1),
        Bar: eG(eJ),
        Area: eG(eN),
        Baseline: eG(ej),
        Histogram: eG(eX),
        Line: eG(eX),
        Custom: eG(eH),
      }[t];
    }
    function e4(t) {
      return { se: 0, jb: new Map(), ha: t };
    }
    function eq(t, i) {
      if (void 0 !== t && 0 !== t.length)
        return { Hb: i.key(t[0].ot), $b: i.key(t[t.length - 1].ot) };
    }
    function eQ(t) {
      let i;
      return (
        t.forEach((t) => {
          void 0 === i && (i = t.zb);
        }),
        c(i)
      );
    }
    function e7(t, i) {
      (t.se = i),
        t.jb.forEach((t) => {
          t.se = i;
        });
    }
    function e6(t) {
      let i = { value: t.Ot[3], time: t.zb };
      return void 0 !== t.Wb && (i.customValues = t.Wb), i;
    }
    function e2(t) {
      let i = e6(t);
      return void 0 !== t.O && (i.color = t.O), i;
    }
    function e5(t) {
      let i = e6(t);
      return (
        void 0 !== t.lt && (i.lineColor = t.lt),
        void 0 !== t.Ts && (i.topColor = t.Ts),
        void 0 !== t.Ps && (i.bottomColor = t.Ps),
        i
      );
    }
    function st(t) {
      let i = e6(t);
      return (
        void 0 !== t.Pe && (i.topLineColor = t.Pe),
        void 0 !== t.Re && (i.bottomLineColor = t.Re),
        void 0 !== t.Se && (i.topFillColor1 = t.Se),
        void 0 !== t.ke && (i.topFillColor2 = t.ke),
        void 0 !== t.ye && (i.bottomFillColor1 = t.ye),
        void 0 !== t.Ce && (i.bottomFillColor2 = t.Ce),
        i
      );
    }
    function si(t) {
      let i = {
        open: t.Ot[0],
        high: t.Ot[1],
        low: t.Ot[2],
        close: t.Ot[3],
        time: t.zb,
      };
      return void 0 !== t.Wb && (i.customValues = t.Wb), i;
    }
    function se(t) {
      let i = si(t);
      return void 0 !== t.O && (i.color = t.O), i;
    }
    function ss(t) {
      let i = si(t),
        { O: e, Bt: s, Zh: h } = t;
      return (
        void 0 !== e && (i.color = e),
        void 0 !== s && (i.borderColor = s),
        void 0 !== h && (i.wickColor = h),
        i
      );
    }
    function sh(t) {
      return {
        Area: e5,
        Line: e2,
        Baseline: st,
        Histogram: e2,
        Bar: se,
        Candlestick: ss,
        Custom: sl,
      }[t];
    }
    function sl(t) {
      let i = t.zb;
      return Object.assign(Object.assign({}, t.He), { time: i });
    }
    let sn = {
        vertLine: {
          color: '#9598A1',
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: '#131722',
        },
        horzLine: {
          color: '#9598A1',
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: '#131722',
        },
        mode: 1,
      },
      sr = {
        vertLines: { color: '#D6DCDE', style: 0, visible: !0 },
        horzLines: { color: '#D6DCDE', style: 0, visible: !0 },
      },
      so = {
        background: { type: 'solid', color: '#FFFFFF' },
        textColor: '#191919',
        fontSize: 12,
        fontFamily: W,
        attributionLogo: !0,
      },
      su = {
        autoScale: !0,
        mode: 0,
        invertScale: !1,
        alignLabels: !0,
        borderVisible: !0,
        borderColor: '#2B2B43',
        entireTextOnly: !1,
        visible: !1,
        ticksVisible: !1,
        scaleMargins: { bottom: 0.1, top: 0.2 },
        minimumWidth: 0,
      },
      sa = {
        rightOffset: 0,
        barSpacing: 6,
        minBarSpacing: 0.5,
        fixLeftEdge: !1,
        fixRightEdge: !1,
        lockVisibleTimeRangeOnResize: !1,
        rightBarStaysOnScroll: !1,
        borderVisible: !0,
        borderColor: '#2B2B43',
        visible: !0,
        timeVisible: !1,
        secondsVisible: !0,
        shiftVisibleRangeOnNewBar: !0,
        allowShiftVisibleRangeOnWhitespaceReplacement: !1,
        ticksVisible: !1,
        uniformDistribution: !1,
        minimumHeight: 0,
        allowBoldLabels: !0,
      },
      sc = {
        color: 'rgba(0, 0, 0, 0)',
        visible: !1,
        fontSize: 48,
        fontFamily: W,
        fontStyle: '',
        text: '',
        horzAlign: 'center',
        vertAlign: 'center',
      };
    function sd() {
      return {
        width: 0,
        height: 0,
        autoSize: !1,
        layout: so,
        crosshair: sn,
        grid: sr,
        overlayPriceScales: Object.assign({}, su),
        leftPriceScale: Object.assign(Object.assign({}, su), { visible: !1 }),
        rightPriceScale: Object.assign(Object.assign({}, su), { visible: !0 }),
        timeScale: sa,
        watermark: sc,
        localization: {
          locale: ea ? navigator.language : '',
          dateFormat: "dd MMM 'yy",
        },
        handleScroll: {
          mouseWheel: !0,
          pressedMouseMove: !0,
          horzTouchDrag: !0,
          vertTouchDrag: !0,
        },
        handleScale: {
          axisPressedMouseMove: { time: !0, price: !0 },
          axisDoubleClickReset: { time: !0, price: !0 },
          mouseWheel: !0,
          pinch: !0,
        },
        kineticScroll: { mouse: !1, touch: !0 },
        trackingMode: { exitMode: 1 },
      };
    }
    class sf {
      constructor(t, i) {
        (this.lw = t), (this.aw = i);
      }
      applyOptions(t) {
        this.lw.$t().Hc(this.aw, t);
      }
      options() {
        return this.Ii().W();
      }
      width() {
        return Y(this.aw) ? this.lw.gb(this.aw) : 0;
      }
      Ii() {
        return d(this.lw.$t().$c(this.aw)).Dt;
      }
    }
    function s$(t, i, e) {
      let s = eV(t, ['time', 'originalTime']),
        h = Object.assign({ time: i }, s);
      return void 0 !== e && (h.originalTime = e), h;
    }
    let sv = {
      color: '#FF0000',
      price: 0,
      lineStyle: 2,
      lineWidth: 1,
      lineVisible: !0,
      axisLabelVisible: !0,
      title: '',
      axisLabelColor: '',
      axisLabelTextColor: '',
    };
    class sp {
      constructor(t) {
        this.Lh = t;
      }
      applyOptions(t) {
        this.Lh.Hh(t);
      }
      options() {
        return this.Lh.W();
      }
      ow() {
        return this.Lh;
      }
    }
    class sm {
      constructor(t, i, e, s, h) {
        (this._w = new x()),
          (this.Is = t),
          (this.uw = i),
          (this.cw = e),
          (this.U_ = h),
          (this.dw = s);
      }
      S() {
        this._w.S();
      }
      priceFormatter() {
        return this.Is.ma();
      }
      priceToCoordinate(t) {
        let i = this.Is.Ct();
        return null === i ? null : this.Is.Dt().Rt(t, i.Ot);
      }
      coordinateToPrice(t) {
        let i = this.Is.Ct();
        return null === i ? null : this.Is.Dt().pn(t, i.Ot);
      }
      barsInLogicalRange(t) {
        if (null === t) return null;
        let i = new ik(new iC(t.from, t.to)).hu(),
          e = this.Is.zn();
        if (e.Ni()) return null;
        let s = e.hl(i.Os(), 1),
          h = e.hl(i.ui(), -1),
          l = d(e.sl()),
          n = d(e.An());
        if (null !== s && null !== h && s.se > h.se)
          return { barsBefore: t.from - l, barsAfter: n - t.to };
        let r = {
          barsBefore: null === s || s.se === l ? t.from - l : s.se - l,
          barsAfter: null === h || h.se === n ? n - t.to : n - h.se,
        };
        return null !== s && null !== h && ((r.from = s.zb), (r.to = h.zb)), r;
      }
      setData(t) {
        this.U_, this.Is.Jh(), this.uw.fw(this.Is, t), this.pw('full');
      }
      update(t) {
        this.Is.Jh(), this.uw.mw(this.Is, t), this.pw('update');
      }
      dataByIndex(t, i) {
        let e = this.Is.zn().hl(t, i);
        return null === e ? null : sh(this.seriesType())(e);
      }
      data() {
        let t = sh(this.seriesType());
        return this.Is.zn()
          .ie()
          .map((i) => t(i));
      }
      subscribeDataChanged(t) {
        this._w.l(t);
      }
      unsubscribeDataChanged(t) {
        this._w.v(t);
      }
      setMarkers(t) {
        this.U_;
        let i = t.map((t) =>
          s$(t, this.U_.convertHorzItemToInternal(t.time), t.time)
        );
        this.Is.ia(i);
      }
      markers() {
        return this.Is.na().map((t) => s$(t, t.originalTime, void 0));
      }
      applyOptions(t) {
        this.Is.Hh(t);
      }
      options() {
        return L(this.Is.W());
      }
      priceScale() {
        return this.cw.priceScale(this.Is.Dt().Ta());
      }
      createPriceLine(t) {
        let i = C(L(sv), t),
          e = this.Is.sa(i);
        return new sp(e);
      }
      removePriceLine(t) {
        this.Is.ea(t.ow());
      }
      seriesType() {
        return this.Is.Jh();
      }
      attachPrimitive(t) {
        this.Is.Sa(t),
          t.attached &&
            t.attached({
              chart: this.dw,
              series: this,
              requestUpdate: () => this.Is.$t().Xl(),
            });
      }
      detachPrimitive(t) {
        this.Is.ka(t), t.detached && t.detached();
      }
      pw(t) {
        this._w.M() && this._w.m(t);
      }
    }
    function sb(t) {
      return (
        (function (t) {
          if (I(t.handleScale)) {
            let i = t.handleScale;
            t.handleScale = {
              axisDoubleClickReset: { time: i, price: i },
              axisPressedMouseMove: { time: i, price: i },
              mouseWheel: i,
              pinch: i,
            };
          } else if (void 0 !== t.handleScale) {
            let { axisPressedMouseMove: e, axisDoubleClickReset: s } =
              t.handleScale;
            I(e) &&
              (t.handleScale.axisPressedMouseMove = { time: e, price: e }),
              I(s) &&
                (t.handleScale.axisDoubleClickReset = { time: s, price: s });
          }
          let h = t.handleScroll;
          I(h) &&
            (t.handleScroll = {
              horzTouchDrag: h,
              vertTouchDrag: h,
              mouseWheel: h,
              pressedMouseMove: h,
            });
        })(t),
        t
      );
    }
    class sg {
      constructor(t, i, e) {
        (this.xw = new Map()),
          (this.Sw = new Map()),
          (this.kw = new x()),
          (this.yw = new x()),
          (this.Cw = new x()),
          (this.Tw = new (class t {
            constructor(t) {
              (this.Ub = new Map()),
                (this.qb = new Map()),
                (this.Yb = new Map()),
                (this.Zb = []),
                (this.U_ = t);
            }
            S() {
              this.Ub.clear(), this.qb.clear(), this.Yb.clear(), (this.Zb = []);
            }
            Xb(t, i) {
              let e = 0 !== this.Ub.size,
                s = !1,
                h = this.qb.get(t);
              if (void 0 !== h) {
                if (1 === this.qb.size) (e = !1), (s = !0), this.Ub.clear();
                else
                  for (let l of this.Zb) l.pointData.jb.delete(t) && (s = !0);
              }
              let n = [];
              if (0 !== i.length) {
                let r = i.map((t) => t.time),
                  o = this.U_.createConverterToInternalObj(i),
                  u = eY(t.Jh()),
                  a = t.ya(),
                  c = t.Ca();
                n = i.map((i, e) => {
                  let h = o(i.time),
                    l = this.U_.key(h),
                    n = this.Ub.get(l);
                  void 0 === n && ((n = e4(h)), this.Ub.set(l, n), (s = !0));
                  let d = u(h, n.se, i, r[e], a, c);
                  return n.jb.set(t, d), d;
                });
              }
              e && this.Kb(), this.Gb(t, n);
              let d = -1;
              if (s) {
                let f = [];
                this.Ub.forEach((t) => {
                  f.push({
                    timeWeight: 0,
                    time: t.ha,
                    pointData: t,
                    originalTime: eQ(t.jb),
                  });
                }),
                  f.sort((t, i) => this.U_.key(t.time) - this.U_.key(i.time)),
                  (d = this.Jb(f));
              }
              return this.Qb(
                t,
                d,
                (function (t, i, e) {
                  let s = eq(t, e),
                    h = eq(i, e);
                  if (void 0 !== s && void 0 !== h)
                    return { Ql: s.$b >= h.$b && s.Hb >= h.Hb };
                })(this.qb.get(t), h, this.U_)
              );
            }
            fd(t) {
              return this.Xb(t, []);
            }
            tw(t, i) {
              var e;
              let s = i;
              void 0 === (e = s).zb && (e.zb = e.time),
                this.U_.preprocessData(i);
              let h = this.U_.createConverterToInternalObj([i])(i.time),
                l = this.Yb.get(t);
              if (void 0 !== l && this.U_.key(h) < this.U_.key(l))
                throw Error(
                  `Cannot update oldest data, last time=${l}, new time=${h}`
                );
              let n = this.Ub.get(this.U_.key(h)),
                r = void 0 === n;
              void 0 === n && ((n = e4(h)), this.Ub.set(this.U_.key(h), n));
              let o = eY(t.Jh()),
                u = t.ya(),
                a = t.Ca(),
                c = o(h, n.se, i, s.zb, u, a);
              n.jb.set(t, c), this.iw(t, c);
              let d = { Ql: e3(c) };
              if (!r) return this.Qb(t, -1, d);
              let f = {
                  timeWeight: 0,
                  time: n.ha,
                  pointData: n,
                  originalTime: eQ(n.jb),
                },
                $ = tm(
                  this.Zb,
                  this.U_.key(f.time),
                  (t, i) => this.U_.key(t.time) < i
                );
              this.Zb.splice($, 0, f);
              for (let v = $; v < this.Zb.length; ++v)
                e7(this.Zb[v].pointData, v);
              return this.U_.fillWeightsForPoints(this.Zb, $), this.Qb(t, $, d);
            }
            iw(t, i) {
              let e = this.qb.get(t);
              void 0 === e && ((e = []), this.qb.set(t, e));
              let s = 0 !== e.length ? e[e.length - 1] : null;
              null === s || this.U_.key(i.ot) > this.U_.key(s.ot)
                ? e3(i) && e.push(i)
                : e3(i)
                ? (e[e.length - 1] = i)
                : e.splice(-1, 1),
                this.Yb.set(t, i.ot);
            }
            Gb(t, i) {
              0 !== i.length
                ? (this.qb.set(t, i.filter(e3)),
                  this.Yb.set(t, i[i.length - 1].ot))
                : (this.qb.delete(t), this.Yb.delete(t));
            }
            Kb() {
              for (let t of this.Zb)
                0 === t.pointData.jb.size &&
                  this.Ub.delete(this.U_.key(t.time));
            }
            Jb(t) {
              let i = -1;
              for (let e = 0; e < this.Zb.length && e < t.length; ++e) {
                let s = this.Zb[e],
                  h = t[e];
                if (this.U_.key(s.time) !== this.U_.key(h.time)) {
                  i = e;
                  break;
                }
                (h.timeWeight = s.timeWeight), e7(h.pointData, e);
              }
              if (
                (-1 === i &&
                  this.Zb.length !== t.length &&
                  (i = Math.min(this.Zb.length, t.length)),
                -1 === i)
              )
                return -1;
              for (let l = i; l < t.length; ++l) e7(t[l].pointData, l);
              return this.U_.fillWeightsForPoints(t, i), (this.Zb = t), i;
            }
            nw() {
              if (0 === this.qb.size) return null;
              let t = 0;
              return (
                this.qb.forEach((i) => {
                  0 !== i.length && (t = Math.max(t, i[i.length - 1].se));
                }),
                t
              );
            }
            Qb(t, i, e) {
              let s = { sw: new Map(), St: { Iu: this.nw() } };
              if (-1 !== i)
                this.qb.forEach((i, h) => {
                  s.sw.set(h, { He: i, ew: h === t ? e : void 0 });
                }),
                  this.qb.has(t) || s.sw.set(t, { He: [], ew: e }),
                  (s.St.rw = this.Zb),
                  (s.St.hw = i);
              else {
                let h = this.qb.get(t);
                s.sw.set(t, { He: h || [], ew: e });
              }
              return s;
            }
          })(i));
        let s = void 0 === e ? L(sd()) : C(L(sd()), sb(e));
        (this.U_ = i),
          (this.lw = new (class t {
            constructor(t, i, e) {
              var s;
              (this.Zm = []),
                (this.Xm = 0),
                (this.ro = 0),
                (this.o_ = 0),
                (this.Km = 0),
                (this.Gm = 0),
                (this.Jm = null),
                (this.Qm = !1),
                (this.Dp = new x()),
                (this.Op = new x()),
                (this.Pc = new x()),
                (this.tb = null),
                (this.ib = null),
                (this.Gd = t),
                (this.cn = i),
                (this.U_ = e),
                (this.Zd = document.createElement('div')),
                this.Zd.classList.add('tv-lightweight-charts'),
                (this.Zd.style.overflow = 'hidden'),
                (this.Zd.style.direction = 'ltr'),
                (this.Zd.style.width = '100%'),
                (this.Zd.style.height = '100%'),
                ((s = this.Zd).style.userSelect = 'none'),
                (s.style.webkitUserSelect = 'none'),
                (s.style.msUserSelect = 'none'),
                (s.style.MozUserSelect = 'none'),
                (s.style.webkitTapHighlightColor = 'transparent'),
                (this.nb = document.createElement('table')),
                this.nb.setAttribute('cellspacing', '0'),
                this.Zd.appendChild(this.nb),
                (this.sb = this.eb.bind(this)),
                eU(this.cn) && this.rb(!0),
                (this.$i = new (class t {
                  constructor(t, i, e) {
                    (this.kc = []),
                      (this.yc = []),
                      (this.o_ = 0),
                      (this.Cc = null),
                      (this.Tc = new x()),
                      (this.Pc = new x()),
                      (this.Rc = null),
                      (this.Dc = t),
                      (this.cn = i),
                      (this.U_ = e),
                      (this.Oc = new (class t {
                        constructor(t) {
                          (this.k = {
                            C: 1,
                            T: 5,
                            P: NaN,
                            R: '',
                            D: '',
                            O: '',
                            B: '',
                            V: 0,
                            A: 0,
                            I: 0,
                            L: 0,
                            N: 0,
                          }),
                            (this.F = t);
                        }
                        W() {
                          let t = this.k,
                            i = this.j(),
                            e = this.H();
                          return (
                            (t.P === i && t.D === e) ||
                              ((t.P = i),
                              (t.D = e),
                              (t.R = T(i, e)),
                              (t.L = (2.5 / 12) * i),
                              (t.V = t.L),
                              (t.A = (i / 12) * t.T),
                              (t.I = (i / 12) * t.T),
                              (t.N = 0)),
                            (t.O = this.$()),
                            (t.B = this.U()),
                            this.k
                          );
                        }
                        $() {
                          return this.F.W().layout.textColor;
                        }
                        U() {
                          return this.F.q();
                        }
                        j() {
                          return this.F.W().layout.fontSize;
                        }
                        H() {
                          return this.F.W().layout.fontFamily;
                        }
                      })(this)),
                      (this.kl = new (class t {
                        constructor(t, i, e, s) {
                          (this.o_ = 0),
                            (this.ou = null),
                            (this._u = []),
                            (this.wo = null),
                            (this.bo = null),
                            (this.uu = new (class t {
                              constructor() {
                                (this.G_ = new Map()),
                                  (this.Qe = null),
                                  (this.J_ = !1);
                              }
                              Q_(t) {
                                (this.J_ = t), (this.Qe = null);
                              }
                              tu(t, i) {
                                this.iu(i), (this.Qe = null);
                                for (let e = i; e < t.length; ++e) {
                                  let s = t[e],
                                    h = this.G_.get(s.timeWeight);
                                  void 0 === h &&
                                    ((h = []), this.G_.set(s.timeWeight, h)),
                                    h.push({
                                      index: e,
                                      time: s.time,
                                      weight: s.timeWeight,
                                      originalTime: s.originalTime,
                                    });
                                }
                              }
                              nu(t, i) {
                                let e = Math.ceil(i / t);
                                return (
                                  (null !== this.Qe && this.Qe.su === e) ||
                                    (this.Qe = { ja: this.eu(e), su: e }),
                                  this.Qe.ja
                                );
                              }
                              iu(t) {
                                if (0 === t) return void this.G_.clear();
                                let i = [];
                                for (let e of (this.G_.forEach((e, s) => {
                                  t <= e[0].index
                                    ? i.push(s)
                                    : e.splice(
                                        tm(e, t, (i) => i.index < t),
                                        1 / 0
                                      );
                                }),
                                i))
                                  this.G_.delete(e);
                              }
                              eu(t) {
                                let i = [];
                                for (let e of Array.from(this.G_.keys()).sort(
                                  (t, i) => i - t
                                )) {
                                  if (!this.G_.get(e)) continue;
                                  let s = i;
                                  i = [];
                                  let h = s.length,
                                    l = 0,
                                    n = c(this.G_.get(e)),
                                    r = n.length,
                                    o = 1 / 0,
                                    u = -1 / 0;
                                  for (let a = 0; a < r; a++) {
                                    let d = n[a],
                                      f = d.index;
                                    for (; l < h; ) {
                                      let $ = s[l],
                                        v = $.index;
                                      if (!(v < f)) {
                                        o = v;
                                        break;
                                      }
                                      l++, i.push($), (u = v), (o = 1 / 0);
                                    }
                                    if (o - f >= t && f - u >= t)
                                      i.push(d), (u = f);
                                    else if (this.J_) return s;
                                  }
                                  for (; l < h; l++) i.push(s[l]);
                                }
                                return i;
                              }
                            })()),
                            (this.cu = new Map()),
                            (this.du = ik.au()),
                            (this.fu = !0),
                            (this.vu = new x()),
                            (this.pu = new x()),
                            (this.mu = new x()),
                            (this.bu = null),
                            (this.wu = null),
                            (this.gu = []),
                            (this.cn = i),
                            (this.ko = e),
                            (this.Mu = i.rightOffset),
                            (this.xu = i.barSpacing),
                            (this.$i = t),
                            (this.U_ = s),
                            this.Su(),
                            this.uu.Q_(i.uniformDistribution);
                        }
                        W() {
                          return this.cn;
                        }
                        ku(t) {
                          C(this.ko, t), this.yu(), this.Su();
                        }
                        Hh(t, i) {
                          var e;
                          C(this.cn, t),
                            this.cn.fixLeftEdge && this.Cu(),
                            this.cn.fixRightEdge && this.Tu(),
                            void 0 !== t.barSpacing && this.$i.Gn(t.barSpacing),
                            void 0 !== t.rightOffset &&
                              this.$i.Jn(t.rightOffset),
                            void 0 !== t.minBarSpacing &&
                              this.$i.Gn(
                                null !== (e = t.barSpacing) && void 0 !== e
                                  ? e
                                  : this.xu
                              ),
                            this.yu(),
                            this.Su(),
                            this.mu.m();
                        }
                        mn(t) {
                          var i, e;
                          return null !==
                            (e =
                              null === (i = this._u[t]) || void 0 === i
                                ? void 0
                                : i.time) && void 0 !== e
                            ? e
                            : null;
                        }
                        Ui(t) {
                          var i;
                          return null !== (i = this._u[t]) && void 0 !== i
                            ? i
                            : null;
                        }
                        Da(t, i) {
                          if (this._u.length < 1) return null;
                          if (
                            this.U_.key(t) >
                            this.U_.key(this._u[this._u.length - 1].time)
                          )
                            return i ? this._u.length - 1 : null;
                          let e = tm(
                            this._u,
                            this.U_.key(t),
                            (t, i) => this.U_.key(t.time) < i
                          );
                          return this.U_.key(t) < this.U_.key(this._u[e].time)
                            ? i
                              ? e
                              : null
                            : e;
                        }
                        Ni() {
                          return (
                            0 === this.o_ ||
                            0 === this._u.length ||
                            null === this.ou
                          );
                        }
                        Ra() {
                          return this._u.length > 0;
                        }
                        Zs() {
                          return this.Pu(), this.du.hu();
                        }
                        Ru() {
                          return this.Pu(), this.du.lu();
                        }
                        Du() {
                          let t = this.Zs();
                          if (null === t) return null;
                          let i = { from: t.Os(), to: t.ui() };
                          return this.Ou(i);
                        }
                        Ou(t) {
                          let i = Math.round(t.from),
                            e = Math.round(t.to),
                            s = d(this.Bu()),
                            h = d(this.Vu());
                          return {
                            from: d(this.Ui(Math.max(s, i))),
                            to: d(this.Ui(Math.min(h, e))),
                          };
                        }
                        Au(t) {
                          return {
                            from: d(this.Da(t.from, !0)),
                            to: d(this.Da(t.to, !0)),
                          };
                        }
                        Hi() {
                          return this.o_;
                        }
                        x_(t) {
                          if (!isFinite(t) || t <= 0 || this.o_ === t) return;
                          let i = this.Ru(),
                            e = this.o_;
                          if (
                            ((this.o_ = t),
                            (this.fu = !0),
                            this.cn.lockVisibleTimeRangeOnResize && 0 !== e)
                          ) {
                            let s = (this.xu * t) / e;
                            this.xu = s;
                          }
                          this.cn.fixLeftEdge &&
                            null !== i &&
                            0 >= i.Os() &&
                            ((this.Mu -= Math.round((e - t) / this.xu) + 1),
                            (this.fu = !0)),
                            this.zu(),
                            this.Eu();
                        }
                        zt(t) {
                          if (this.Ni() || !k(t)) return 0;
                          let i = this.Iu() + this.Mu - t;
                          return this.o_ - (i + 0.5) * this.xu - 1;
                        }
                        Js(t, i) {
                          let e = this.Iu(),
                            s = void 0 === i ? 0 : i.from,
                            h = void 0 === i ? t.length : i.to;
                          for (let l = s; l < h; l++) {
                            let n = t[l].ot,
                              r = e + this.Mu - n,
                              o = this.o_ - (r + 0.5) * this.xu - 1;
                            t[l].nt = o;
                          }
                        }
                        Lu(t) {
                          return Math.ceil(this.Nu(t));
                        }
                        Jn(t) {
                          (this.fu = !0),
                            (this.Mu = t),
                            this.Eu(),
                            this.$i.Fu(),
                            this.$i.$h();
                        }
                        he() {
                          return this.xu;
                        }
                        Gn(t) {
                          this.Wu(t), this.Eu(), this.$i.Fu(), this.$i.$h();
                        }
                        ju() {
                          return this.Mu;
                        }
                        ja() {
                          if (this.Ni()) return null;
                          if (null !== this.wu) return this.wu;
                          let t = this.xu,
                            i =
                              ((5 * (this.$i.W().layout.fontSize + 4)) / 8) *
                              (this.cn.tickMarkMaxCharacterLength || 8),
                            e = Math.round(i / t),
                            s = d(this.Zs()),
                            h = Math.max(s.Os(), s.Os() - e),
                            l = Math.max(s.ui(), s.ui() - e),
                            n = this.uu.nu(t, i),
                            r = this.Bu() + e,
                            o = this.Vu() - e,
                            u = this.Hu(),
                            a = this.cn.fixLeftEdge || u,
                            c = this.cn.fixRightEdge || u,
                            f = 0;
                          for (let $ of n) {
                            if (!(h <= $.index && $.index <= l)) continue;
                            let v;
                            f < this.gu.length
                              ? (((v = this.gu[f]).coord = this.zt($.index)),
                                (v.label = this.$u($)),
                                (v.weight = $.weight))
                              : ((v = {
                                  needAlignCoordinate: !1,
                                  coord: this.zt($.index),
                                  label: this.$u($),
                                  weight: $.weight,
                                }),
                                this.gu.push(v)),
                              this.xu > i / 2 && !u
                                ? (v.needAlignCoordinate = !1)
                                : (v.needAlignCoordinate =
                                    (a && $.index <= r) || (c && $.index >= o)),
                              f++;
                          }
                          return (
                            (this.gu.length = f), (this.wu = this.gu), this.gu
                          );
                        }
                        Uu() {
                          (this.fu = !0),
                            this.Gn(this.cn.barSpacing),
                            this.Jn(this.cn.rightOffset);
                        }
                        qu(t) {
                          (this.fu = !0), (this.ou = t), this.Eu(), this.Cu();
                        }
                        Yu(t, i) {
                          let e = this.Nu(t),
                            s = this.he();
                          this.Gn(s + i * (s / 10)),
                            this.cn.rightBarStaysOnScroll ||
                              this.Jn(this.ju() + (e - this.Nu(t)));
                        }
                        Ko(t) {
                          this.wo && this.i_(),
                            null === this.bo &&
                              null === this.bu &&
                              (this.Ni() || ((this.bo = t), this.Zu()));
                        }
                        Go(t) {
                          if (null === this.bu) return;
                          let i = tu(this.o_ - t, 0, this.o_),
                            e = tu(this.o_ - d(this.bo), 0, this.o_);
                          0 !== i && 0 !== e && this.Gn((this.bu.he * i) / e);
                        }
                        Jo() {
                          null !== this.bo && ((this.bo = null), this.Xu());
                        }
                        Qo(t) {
                          null === this.wo &&
                            null === this.bu &&
                            (this.Ni() || ((this.wo = t), this.Zu()));
                        }
                        t_(t) {
                          if (null === this.wo) return;
                          let i = (this.wo - t) / this.he();
                          (this.Mu = d(this.bu).ju + i),
                            (this.fu = !0),
                            this.Eu();
                        }
                        i_() {
                          null !== this.wo && ((this.wo = null), this.Xu());
                        }
                        Ku() {
                          this.Gu(this.cn.rightOffset);
                        }
                        Gu(t, i = 400) {
                          if (!isFinite(t))
                            throw RangeError(
                              'offset is required and must be finite number'
                            );
                          if (!isFinite(i) || i <= 0)
                            throw RangeError(
                              'animationDuration (optional) must be finite positive number'
                            );
                          let e = this.Mu,
                            s = performance.now();
                          this.$i.Zn({
                            Ju: (t) => (t - s) / i >= 1,
                            Qu(h) {
                              let l = (h - s) / i;
                              return l >= 1 ? t : e + (t - e) * l;
                            },
                          });
                        }
                        bt(t, i) {
                          (this.fu = !0),
                            (this._u = t),
                            this.uu.tu(t, i),
                            this.Eu();
                        }
                        tc() {
                          return this.vu;
                        }
                        nc() {
                          return this.pu;
                        }
                        sc() {
                          return this.mu;
                        }
                        Iu() {
                          return this.ou || 0;
                        }
                        ec(t) {
                          let i = t.K_();
                          this.Wu(this.o_ / i),
                            (this.Mu = t.ui() - this.Iu()),
                            this.Eu(),
                            (this.fu = !0),
                            this.$i.Fu(),
                            this.$i.$h();
                        }
                        rc() {
                          let t = this.Bu(),
                            i = this.Vu();
                          null !== t &&
                            null !== i &&
                            this.ec(new iC(t, i + this.cn.rightOffset));
                        }
                        hc(t) {
                          let i = new iC(t.from, t.to);
                          this.ec(i);
                        }
                        qi(t) {
                          return void 0 !== this.ko.timeFormatter
                            ? this.ko.timeFormatter(t.originalTime)
                            : this.U_.formatHorzItem(t.time);
                        }
                        Hu() {
                          let { handleScroll: t, handleScale: i } = this.$i.W();
                          return !(
                            t.horzTouchDrag ||
                            t.mouseWheel ||
                            t.pressedMouseMove ||
                            t.vertTouchDrag ||
                            i.axisDoubleClickReset.time ||
                            i.axisPressedMouseMove.time ||
                            i.mouseWheel ||
                            i.pinch
                          );
                        }
                        Bu() {
                          return 0 === this._u.length ? null : 0;
                        }
                        Vu() {
                          return 0 === this._u.length
                            ? null
                            : this._u.length - 1;
                        }
                        lc(t) {
                          return (this.o_ - 1 - t) / this.xu;
                        }
                        Nu(t) {
                          let i = this.lc(t),
                            e = this.Iu() + this.Mu - i;
                          return Math.round(1e6 * e) / 1e6;
                        }
                        Wu(t) {
                          let i = this.xu;
                          (this.xu = t),
                            this.zu(),
                            i !== this.xu && ((this.fu = !0), this.ac());
                        }
                        Pu() {
                          if (!this.fu) return;
                          if (((this.fu = !1), this.Ni()))
                            return void this.oc(ik.au());
                          let t = this.Iu(),
                            i = this.o_ / this.xu,
                            e = this.Mu + t,
                            s = new iC(e - i + 1, e);
                          this.oc(new ik(s));
                        }
                        zu() {
                          let t = this._c();
                          if (
                            (this.xu < t && ((this.xu = t), (this.fu = !0)),
                            0 !== this.o_)
                          ) {
                            let i = 0.5 * this.o_;
                            this.xu > i && ((this.xu = i), (this.fu = !0));
                          }
                        }
                        _c() {
                          return this.cn.fixLeftEdge &&
                            this.cn.fixRightEdge &&
                            0 !== this._u.length
                            ? this.o_ / this._u.length
                            : this.cn.minBarSpacing;
                        }
                        Eu() {
                          let t = this.uc();
                          this.Mu > t && ((this.Mu = t), (this.fu = !0));
                          let i = this.cc();
                          null !== i &&
                            this.Mu < i &&
                            ((this.Mu = i), (this.fu = !0));
                        }
                        cc() {
                          let t = this.Bu(),
                            i = this.ou;
                          return null === t || null === i
                            ? null
                            : t -
                                i -
                                1 +
                                (this.cn.fixLeftEdge
                                  ? this.o_ / this.xu
                                  : Math.min(2, this._u.length));
                        }
                        uc() {
                          return this.cn.fixRightEdge
                            ? 0
                            : this.o_ / this.xu - Math.min(2, this._u.length);
                        }
                        Zu() {
                          this.bu = { he: this.he(), ju: this.ju() };
                        }
                        Xu() {
                          this.bu = null;
                        }
                        $u(t) {
                          let i = this.cu.get(t.weight);
                          return (
                            void 0 === i &&
                              ((i = new ix((t) => this.dc(t), this.U_)),
                              this.cu.set(t.weight, i)),
                            i.q_(t)
                          );
                        }
                        dc(t) {
                          return this.U_.formatTickmark(t, this.ko);
                        }
                        oc(t) {
                          let i = this.du;
                          (this.du = t),
                            iE(i.hu(), this.du.hu()) || this.vu.m(),
                            iE(i.lu(), this.du.lu()) || this.pu.m(),
                            this.ac();
                        }
                        ac() {
                          this.wu = null;
                        }
                        yu() {
                          this.ac(), this.cu.clear();
                        }
                        Su() {
                          this.U_.updateFormatter(this.ko);
                        }
                        Cu() {
                          if (!this.cn.fixLeftEdge) return;
                          let t = this.Bu();
                          if (null === t) return;
                          let i = this.Zs();
                          if (null === i) return;
                          let e = i.Os() - t;
                          if (e < 0) {
                            let s = this.Mu - e - 1;
                            this.Jn(s);
                          }
                          this.zu();
                        }
                        Tu() {
                          this.Eu(), this.zu();
                        }
                      })(this, i.timeScale, this.cn.localization, e)),
                      (this.vt = new (class t extends G {
                        constructor(t, i) {
                          var e, s, h, l;
                          super(),
                            (this.tn = null),
                            (this.nn = NaN),
                            (this.sn = 0),
                            (this.en = !0),
                            (this.rn = new Map()),
                            (this.hn = !1),
                            (this.ln = NaN),
                            (this.an = NaN),
                            (this._n = NaN),
                            (this.un = NaN),
                            (this.$i = t),
                            (this.cn = i),
                            (this.dn = new (class t {
                              constructor(t, i) {
                                (this.ut = new R()),
                                  (this.ct = []),
                                  (this.dt = []),
                                  (this.ft = !0),
                                  (this.F = t),
                                  (this.vt = i),
                                  this.ut.Z(this.ct);
                              }
                              bt(t) {
                                let i = this.F.wt();
                                i.length !== this.ct.length &&
                                  ((this.dt = i.map(D)),
                                  (this.ct = this.dt.map((t) => {
                                    let i = new B();
                                    return i.J(t), i;
                                  })),
                                  this.ut.Z(this.ct)),
                                  (this.ft = !0);
                              }
                              gt() {
                                return (
                                  this.ft && (this.Mt(), (this.ft = !1)),
                                  this.ut
                                );
                              }
                              Mt() {
                                let t = 2 === this.vt.W().mode,
                                  i = this.F.wt(),
                                  e = this.vt.xt(),
                                  s = this.F.St();
                                i.forEach((i, h) => {
                                  var l;
                                  let n = this.dt[h],
                                    r = i.kt(e);
                                  if (t || null === r || !i.yt())
                                    return void (n.tt = null);
                                  let o = d(i.Ct());
                                  (n.lt = r.Tt),
                                    (n.ht = r.ht),
                                    (n.et = r.Pt),
                                    (n.it[0]._t = r._t),
                                    (n.it[0].st = i.Dt().Rt(r._t, o.Ot)),
                                    (n.rt =
                                      null !== (l = r.Bt) && void 0 !== l
                                        ? l
                                        : this.F.Vt(n.it[0].st / i.Dt().At())),
                                    (n.it[0].ot = e),
                                    (n.it[0].nt = s.zt(e)),
                                    (n.tt = F);
                                });
                              }
                            })(t, this)),
                            (this.fn =
                              ((e = () => this.nn),
                              (s = () => this.an),
                              (t) => {
                                let i = s(),
                                  h = e();
                                if (t === d(this.tn).vn())
                                  return { _t: h, ki: i };
                                {
                                  let l = d(t.Ct());
                                  return { _t: t.pn(i, l), ki: i };
                                }
                              }));
                          let n =
                            ((h = () => this.sn),
                            (l = () => this.Yt()),
                            () => {
                              let t = this.$i.St().mn(h()),
                                i = l();
                              return t && Number.isFinite(i)
                                ? { ot: t, ki: i }
                                : null;
                            });
                          (this.bn = new (class t {
                            constructor(t, i, e) {
                              (this.ft = !0),
                                (this.Wt = new Z()),
                                (this.Ft = {
                                  yt: !1,
                                  t: '#4c525e',
                                  O: 'white',
                                  Kt: '',
                                  Hi: 0,
                                  ki: NaN,
                                  hi: !0,
                                }),
                                (this.vt = t),
                                (this.$i = i),
                                (this.Li = e);
                            }
                            bt() {
                              this.ft = !0;
                            }
                            gt() {
                              return (
                                this.ft && (this.Mt(), (this.ft = !1)),
                                this.Wt.J(this.Ft),
                                this.Wt
                              );
                            }
                            Mt() {
                              let t = this.Ft;
                              if (((t.yt = !1), 2 === this.vt.W().mode)) return;
                              let i = this.vt.W().vertLine;
                              if (!i.labelVisible) return;
                              let e = this.$i.St();
                              if (e.Ni()) return;
                              t.Hi = e.Hi();
                              let s = this.Li();
                              if (null === s) return;
                              t.ki = s.ki;
                              let h = e.Ui(this.vt.xt());
                              (t.Kt = e.qi(d(h))), (t.yt = !0);
                              let l = y(i.labelBackgroundColor);
                              (t.t = l.t),
                                (t.O = l.i),
                                (t.hi = e.W().ticksVisible);
                            }
                          })(this, t, n)),
                            (this.wn = new (class t {
                              constructor(t) {
                                (this.ft = !0),
                                  (this.Ft = {
                                    It: { et: 1, Nt: 0, O: '', yt: !1 },
                                    Lt: { et: 1, Nt: 0, O: '', yt: !1 },
                                    nt: 0,
                                    st: 0,
                                  }),
                                  (this.Wt = new (class t extends M {
                                    constructor(t) {
                                      super(), (this.Et = t);
                                    }
                                    K({
                                      context: t,
                                      bitmapSize: i,
                                      horizontalPixelRatio: e,
                                      verticalPixelRatio: s,
                                    }) {
                                      if (null === this.Et) return;
                                      let h = this.Et.It.yt,
                                        l = this.Et.Lt.yt;
                                      if (!h && !l) return;
                                      let n = Math.round(this.Et.nt * e),
                                        r = Math.round(this.Et.st * s);
                                      (t.lineCap = 'butt'),
                                        h &&
                                          n >= 0 &&
                                          ((t.lineWidth = Math.floor(
                                            this.Et.It.et * e
                                          )),
                                          (t.strokeStyle = this.Et.It.O),
                                          (t.fillStyle = this.Et.It.O),
                                          o(t, this.Et.It.Nt),
                                          (function (t, i, e, s) {
                                            t.beginPath();
                                            let h = t.lineWidth % 2 ? 0.5 : 0;
                                            t.moveTo(i + h, 0),
                                              t.lineTo(i + h, s),
                                              t.stroke();
                                          })(t, n, 0, i.height)),
                                        l &&
                                          r >= 0 &&
                                          ((t.lineWidth = Math.floor(
                                            this.Et.Lt.et * s
                                          )),
                                          (t.strokeStyle = this.Et.Lt.O),
                                          (t.fillStyle = this.Et.Lt.O),
                                          o(t, this.Et.Lt.Nt),
                                          u(t, r, 0, i.width));
                                    }
                                  })(this.Ft)),
                                  (this.jt = t);
                              }
                              bt() {
                                this.ft = !0;
                              }
                              gt() {
                                return (
                                  this.ft && (this.Mt(), (this.ft = !1)),
                                  this.Wt
                                );
                              }
                              Mt() {
                                let t = this.jt.yt(),
                                  i = d(this.jt.Ht()),
                                  e = i.$t().W().crosshair,
                                  s = this.Ft;
                                if (2 === e.mode)
                                  return (s.Lt.yt = !1), void (s.It.yt = !1);
                                (s.Lt.yt = t && this.jt.Ut(i)),
                                  (s.It.yt = t && this.jt.qt()),
                                  (s.Lt.et = e.horzLine.width),
                                  (s.Lt.Nt = e.horzLine.style),
                                  (s.Lt.O = e.horzLine.color),
                                  (s.It.et = e.vertLine.width),
                                  (s.It.Nt = e.vertLine.style),
                                  (s.It.O = e.vertLine.color),
                                  (s.nt = this.jt.Yt()),
                                  (s.st = this.jt.Zt());
                              }
                            })(this));
                        }
                        W() {
                          return this.cn;
                        }
                        gn(t, i) {
                          (this._n = t), (this.un = i);
                        }
                        Mn() {
                          (this._n = NaN), (this.un = NaN);
                        }
                        xn() {
                          return this._n;
                        }
                        Sn() {
                          return this.un;
                        }
                        kn(t, i, e) {
                          this.hn || (this.hn = !0),
                            (this.en = !0),
                            this.yn(t, i, e);
                        }
                        xt() {
                          return this.sn;
                        }
                        Yt() {
                          return this.ln;
                        }
                        Zt() {
                          return this.an;
                        }
                        yt() {
                          return this.en;
                        }
                        Cn() {
                          (this.en = !1),
                            this.Tn(),
                            (this.nn = NaN),
                            (this.ln = NaN),
                            (this.an = NaN),
                            (this.tn = null),
                            this.Mn();
                        }
                        Pn(t) {
                          return null !== this.tn ? [this.wn, this.dn] : [];
                        }
                        Ut(t) {
                          return t === this.tn && this.cn.horzLine.visible;
                        }
                        qt() {
                          return this.cn.vertLine.visible;
                        }
                        Rn(t, i) {
                          (this.en && this.tn === t) || this.rn.clear();
                          let e = [];
                          return (
                            this.tn === t &&
                              e.push(this.Dn(this.rn, i, this.fn)),
                            e
                          );
                        }
                        Qi() {
                          return this.en ? [this.bn] : [];
                        }
                        Ht() {
                          return this.tn;
                        }
                        On() {
                          this.wn.bt(),
                            this.rn.forEach((t) => t.bt()),
                            this.bn.bt(),
                            this.dn.bt();
                        }
                        Bn(t) {
                          return t && !t.vn().Ni() ? t.vn() : null;
                        }
                        yn(t, i, e) {
                          this.Vn(t, i, e) && this.On();
                        }
                        Vn(t, i, e) {
                          let s = this.ln,
                            h = this.an,
                            l = this.nn,
                            n = this.sn,
                            r = this.tn,
                            o = this.Bn(e);
                          (this.sn = t),
                            (this.ln = isNaN(t) ? NaN : this.$i.St().zt(t)),
                            (this.tn = e);
                          let u = null !== o ? o.Ct() : null;
                          return (
                            null !== o && null !== u
                              ? ((this.nn = i), (this.an = o.Rt(i, u)))
                              : ((this.nn = NaN), (this.an = NaN)),
                            s !== this.ln ||
                              h !== this.an ||
                              n !== this.sn ||
                              l !== this.nn ||
                              r !== this.tn
                          );
                        }
                        Tn() {
                          let t = this.$i
                              .wt()
                              .map((t) => t.zn().An())
                              .filter(O),
                            i = 0 === t.length ? null : Math.max(...t);
                          this.sn = null !== i ? i : NaN;
                        }
                        Dn(t, i, e) {
                          let s = t.get(i);
                          return (
                            void 0 === s &&
                              ((s = new J(this, i, e)), t.set(i, s)),
                            s
                          );
                        }
                      })(this, i.crosshair)),
                      (this.Bc = new (class t {
                        constructor(t) {
                          this.cn = t;
                        }
                        Oa(t, i, e) {
                          let s = t;
                          if (0 === this.cn.mode) return s;
                          let h = e.vn(),
                            l = h.Ct();
                          if (null === l) return s;
                          let n = h.Rt(t, l),
                            r = e
                              .Ba()
                              .filter((t) => t instanceof il)
                              .reduce((t, s) => {
                                if (e.dr(s) || !s.yt()) return t;
                                let h = s.Dt(),
                                  l = s.zn();
                                if (h.Ni() || !l.Xr(i)) return t;
                                let n = l.Kh(i);
                                if (null === n) return t;
                                let r = f(s.Ct());
                                return t.concat([h.Rt(n.Ot[3], r.Ot)]);
                              }, []);
                          if (0 === r.length) return s;
                          r.sort((t, i) => Math.abs(t - n) - Math.abs(i - n));
                          let o = r[0];
                          return h.pn(o, l);
                        }
                      })(i.crosshair)),
                      (this.Vc = new (class t extends G {
                        constructor(t, i) {
                          super(),
                            (this.cn = i),
                            (this.wn = new (class t {
                              constructor(t) {
                                (this.ft = !0),
                                  (this.Ft = {
                                    yt: !1,
                                    O: '',
                                    mc: [],
                                    gc: 'center',
                                    Mc: 'center',
                                  }),
                                  (this.Wt = new (class t extends iI {
                                    constructor(t) {
                                      super(),
                                        (this.vc = new Map()),
                                        (this.Et = t);
                                    }
                                    K(t) {}
                                    fc(t) {
                                      if (!this.Et.yt) return;
                                      let { context: i, mediaSize: e } = t,
                                        s = 0;
                                      for (let h of this.Et.mc) {
                                        if (0 === h.Kt.length) continue;
                                        i.font = h.R;
                                        let l = this.bc(i, h.Kt);
                                        l > e.width
                                          ? (h.Yu = e.width / l)
                                          : (h.Yu = 1),
                                          (s += h.wc * h.Yu);
                                      }
                                      let n = 0;
                                      switch (this.Et.gc) {
                                        case 'top':
                                          n = 0;
                                          break;
                                        case 'center':
                                          n = Math.max((e.height - s) / 2, 0);
                                          break;
                                        case 'bottom':
                                          n = Math.max(e.height - s, 0);
                                      }
                                      for (let r of ((i.fillStyle = this.Et.O),
                                      this.Et.mc)) {
                                        i.save();
                                        let o = 0;
                                        switch (this.Et.Mc) {
                                          case 'left':
                                            (i.textAlign = 'left'),
                                              (o = r.wc / 2);
                                            break;
                                          case 'center':
                                            (i.textAlign = 'center'),
                                              (o = e.width / 2);
                                            break;
                                          case 'right':
                                            (i.textAlign = 'right'),
                                              (o = e.width - 1 - r.wc / 2);
                                        }
                                        i.translate(o, n),
                                          (i.textBaseline = 'top'),
                                          (i.font = r.R),
                                          i.scale(r.Yu, r.Yu),
                                          i.fillText(r.Kt, 0, r.xc),
                                          i.restore(),
                                          (n += r.wc * r.Yu);
                                      }
                                    }
                                    bc(t, i) {
                                      let e = this.Sc(t.font),
                                        s = e.get(i);
                                      return (
                                        void 0 === s &&
                                          ((s = t.measureText(i).width),
                                          e.set(i, s)),
                                        s
                                      );
                                    }
                                    Sc(t) {
                                      let i = this.vc.get(t);
                                      return (
                                        void 0 === i &&
                                          ((i = new Map()), this.vc.set(t, i)),
                                        i
                                      );
                                    }
                                  })(this.Ft)),
                                  (this.jt = t);
                              }
                              bt() {
                                this.ft = !0;
                              }
                              gt() {
                                return (
                                  this.ft && (this.Mt(), (this.ft = !1)),
                                  this.Wt
                                );
                              }
                              Mt() {
                                let t = this.jt.W(),
                                  i = this.Ft;
                                (i.yt = t.visible),
                                  i.yt &&
                                    ((i.O = t.color),
                                    (i.Mc = t.horzAlign),
                                    (i.gc = t.vertAlign),
                                    (i.mc = [
                                      {
                                        Kt: t.text,
                                        R: T(
                                          t.fontSize,
                                          t.fontFamily,
                                          t.fontStyle
                                        ),
                                        wc: 1.2 * t.fontSize,
                                        xc: 0,
                                        Yu: 0,
                                      },
                                    ]));
                              }
                            })(this));
                        }
                        Rn() {
                          return [];
                        }
                        Pn() {
                          return [this.wn];
                        }
                        W() {
                          return this.cn;
                        }
                        On() {
                          this.wn.bt();
                        }
                      })(this, i.watermark)),
                      this.Ac(),
                      this.kc[0].M_(2e3),
                      (this.zc = this.Ec(0)),
                      (this.Ic = this.Ec(1));
                  }
                  Xl() {
                    this.Lc(q.es());
                  }
                  $h() {
                    this.Lc(q.ss());
                  }
                  aa() {
                    this.Lc(new q(1));
                  }
                  Kl(t) {
                    let i = this.Nc(t);
                    this.Lc(i);
                  }
                  Fc() {
                    return this.Cc;
                  }
                  Wc(t) {
                    let i = this.Cc;
                    (this.Cc = t),
                      null !== i && this.Kl(i.jc),
                      null !== t && this.Kl(t.jc);
                  }
                  W() {
                    return this.cn;
                  }
                  Hh(t) {
                    C(this.cn, t),
                      this.kc.forEach((i) => i.m_(t)),
                      void 0 !== t.timeScale && this.kl.Hh(t.timeScale),
                      void 0 !== t.localization && this.kl.ku(t.localization),
                      (t.leftPriceScale || t.rightPriceScale) && this.Tc.m(),
                      (this.zc = this.Ec(0)),
                      (this.Ic = this.Ec(1)),
                      this.Xl();
                  }
                  Hc(t, i) {
                    if ('left' === t)
                      return void this.Hh({ leftPriceScale: i });
                    if ('right' === t)
                      return void this.Hh({ rightPriceScale: i });
                    let e = this.$c(t);
                    null !== e && (e.Dt.Hh(i), this.Tc.m());
                  }
                  $c(t) {
                    for (let i of this.kc) {
                      let e = i.b_(t);
                      if (null !== e) return { Ht: i, Dt: e };
                    }
                    return null;
                  }
                  St() {
                    return this.kl;
                  }
                  Uc() {
                    return this.kc;
                  }
                  qc() {
                    return this.Vc;
                  }
                  Yc() {
                    return this.vt;
                  }
                  Zc() {
                    return this.Pc;
                  }
                  Xc(t, i) {
                    t.Eo(i), this.Fu();
                  }
                  x_(t) {
                    (this.o_ = t),
                      this.kl.x_(this.o_),
                      this.kc.forEach((i) => i.x_(t)),
                      this.Fu();
                  }
                  Ac(t) {
                    let i = new i8(this.kl, this);
                    void 0 !== t ? this.kc.splice(t, 0, i) : this.kc.push(i);
                    let e = void 0 === t ? this.kc.length - 1 : t,
                      s = q.es();
                    return s.Nn(e, { Fn: 0, Wn: !0 }), this.Lc(s), i;
                  }
                  D_(t, i, e) {
                    t.D_(i, e);
                  }
                  O_(t, i, e) {
                    t.O_(i, e), this.Gl(), this.Lc(this.Kc(t, 2));
                  }
                  B_(t, i) {
                    t.B_(i), this.Lc(this.Kc(t, 2));
                  }
                  V_(t, i, e) {
                    i.Do() || t.V_(i, e);
                  }
                  A_(t, i, e) {
                    i.Do() || (t.A_(i, e), this.Gl(), this.Lc(this.Kc(t, 2)));
                  }
                  z_(t, i) {
                    i.Do() || (t.z_(i), this.Lc(this.Kc(t, 2)));
                  }
                  I_(t, i) {
                    t.I_(i), this.Lc(this.Kc(t, 2));
                  }
                  Gc(t) {
                    this.kl.Ko(t);
                  }
                  Jc(t, i) {
                    let e = this.St();
                    if (e.Ni() || 0 === i) return;
                    let s = e.Hi();
                    (t = Math.max(1, Math.min(t, s))), e.Yu(t, i), this.Fu();
                  }
                  Qc(t) {
                    this.td(0), this.nd(t), this.sd();
                  }
                  ed(t) {
                    this.kl.Go(t), this.Fu();
                  }
                  rd() {
                    this.kl.Jo(), this.$h();
                  }
                  td(t) {
                    this.kl.Qo(t);
                  }
                  nd(t) {
                    this.kl.t_(t), this.Fu();
                  }
                  sd() {
                    this.kl.i_(), this.$h();
                  }
                  wt() {
                    return this.yc;
                  }
                  hd(t, i, e, s, h) {
                    this.vt.gn(t, i);
                    let l = NaN,
                      n = this.kl.Lu(t),
                      r = this.kl.Zs();
                    null !== r && (n = Math.min(Math.max(r.Os(), n), r.ui()));
                    let o = s.vn(),
                      u = o.Ct();
                    null !== u && (l = o.pn(i, u)),
                      (l = this.Bc.Oa(l, n, s)),
                      this.vt.kn(n, l, s),
                      this.aa(),
                      h || this.Pc.m(this.vt.xt(), { x: t, y: i }, e);
                  }
                  ld(t, i, e) {
                    let s = e.vn(),
                      h = s.Ct(),
                      l = s.Rt(t, d(h)),
                      n = this.kl.Da(i, !0),
                      r = this.kl.zt(d(n));
                    this.hd(r, l, null, e, !0);
                  }
                  ad(t) {
                    this.Yc().Cn(), this.aa(), t || this.Pc.m(null, null, null);
                  }
                  Gl() {
                    let t = this.vt.Ht();
                    if (null !== t) {
                      let i = this.vt.xn(),
                        e = this.vt.Sn();
                      this.hd(i, e, null, t);
                    }
                    this.vt.On();
                  }
                  od(t, i, e) {
                    let s = this.kl.mn(0);
                    void 0 !== i && void 0 !== e && this.kl.bt(i, e);
                    let h = this.kl.mn(0),
                      l = this.kl.Iu(),
                      n = this.kl.Zs();
                    if (null !== n && null !== s && null !== h) {
                      let r = n.Xr(l),
                        o = this.U_.key(s) > this.U_.key(h),
                        u =
                          this.kl.W()
                            .allowShiftVisibleRangeOnWhitespaceReplacement,
                        a =
                          r &&
                          (void 0 !== e || u) &&
                          this.kl.W().shiftVisibleRangeOnNewBar;
                      null === t ||
                        !(t > l) ||
                        o ||
                        a ||
                        this.kl.Jn(this.kl.ju() - (t - l));
                    }
                    this.kl.qu(t);
                  }
                  ta(t) {
                    null !== t && t.N_();
                  }
                  cr(t) {
                    let i = this.kc.find((i) => i.$o().includes(t));
                    return void 0 === i ? null : i;
                  }
                  Fu() {
                    this.Vc.On(), this.kc.forEach((t) => t.N_()), this.Gl();
                  }
                  S() {
                    this.kc.forEach((t) => t.S()),
                      (this.kc.length = 0),
                      (this.cn.localization.priceFormatter = void 0),
                      (this.cn.localization.percentageFormatter = void 0),
                      (this.cn.localization.timeFormatter = void 0);
                  }
                  _d() {
                    return this.Oc;
                  }
                  mr() {
                    return this.Oc.W();
                  }
                  w_() {
                    return this.Tc;
                  }
                  ud(t, i, e) {
                    let s = this.kc[0],
                      h = this.dd(i, t, s, e);
                    return (
                      this.yc.push(h),
                      1 === this.yc.length ? this.Xl() : this.$h(),
                      h
                    );
                  }
                  fd(t) {
                    let i = this.cr(t),
                      e = this.yc.indexOf(t);
                    a(-1 !== e, 'Series not found'),
                      this.yc.splice(e, 1),
                      d(i).Yo(t),
                      t.S && t.S();
                  }
                  Zl(t, i) {
                    let e = d(this.cr(t));
                    e.Yo(t);
                    let s = this.$c(i);
                    if (null === s) {
                      let h = t.Xi();
                      e.Uo(t, i, h);
                    } else {
                      let l = s.Ht === e ? t.Xi() : void 0;
                      s.Ht.Uo(t, i, l);
                    }
                  }
                  rc() {
                    let t = q.ss();
                    t.$n(), this.Lc(t);
                  }
                  vd(t) {
                    let i = q.ss();
                    i.Yn(t), this.Lc(i);
                  }
                  Kn() {
                    let t = q.ss();
                    t.Kn(), this.Lc(t);
                  }
                  Gn(t) {
                    let i = q.ss();
                    i.Gn(t), this.Lc(i);
                  }
                  Jn(t) {
                    let i = q.ss();
                    i.Jn(t), this.Lc(i);
                  }
                  Zn(t) {
                    let i = q.ss();
                    i.Zn(t), this.Lc(i);
                  }
                  Un() {
                    let t = q.ss();
                    t.Un(), this.Lc(t);
                  }
                  pd() {
                    return this.cn.rightPriceScale.visible ? 'right' : 'left';
                  }
                  md() {
                    return this.Ic;
                  }
                  q() {
                    return this.zc;
                  }
                  Vt(t) {
                    let i = this.Ic,
                      e = this.zc;
                    if (i === e) return i;
                    if (
                      ((t = Math.max(0, Math.min(100, Math.round(100 * t)))),
                      null === this.Rc || this.Rc.Ts !== e || this.Rc.Ps !== i)
                    )
                      this.Rc = { Ts: e, Ps: i, bd: new Map() };
                    else {
                      let s = this.Rc.bd.get(t);
                      if (void 0 !== s) return s;
                    }
                    let h = (function (t, i, e) {
                      let [s, h, l, n] = _(t),
                        [r, o, u, a] = _(i),
                        c = [
                          v(s + e * (r - s)),
                          v(h + e * (o - h)),
                          v(l + e * (u - l)),
                          p(n + e * (a - n)),
                        ];
                      return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${c[3]})`;
                    })(e, i, t / 100);
                    return this.Rc.bd.set(t, h), h;
                  }
                  Kc(t, i) {
                    let e = new q(i);
                    if (null !== t) {
                      let s = this.kc.indexOf(t);
                      e.Nn(s, { Fn: i });
                    }
                    return e;
                  }
                  Nc(t, i) {
                    return void 0 === i && (i = 2), this.Kc(this.cr(t), i);
                  }
                  Lc(t) {
                    this.Dc && this.Dc(t),
                      this.kc.forEach((t) => t.W_().Uh().bt());
                  }
                  dd(t, i, e, s) {
                    let h = new il(this, t, i, e, s),
                      l =
                        void 0 !== t.priceScaleId ? t.priceScaleId : this.pd();
                    return e.Uo(h, l), Y(l) || h.Hh(t), h;
                  }
                  Ec(t) {
                    let i = this.cn.layout;
                    return 'gradient' === i.background.type
                      ? 0 === t
                        ? i.background.topColor
                        : i.background.bottomColor
                      : i.background.color;
                  }
                })(this.Dc.bind(this), this.cn, e)),
                this.$t().Zc().l(this.hb.bind(this), this),
                (this.lb = new (class t {
                  constructor(t, i) {
                    (this.Pm = null),
                      (this.Rm = null),
                      (this.k = null),
                      (this.Dm = !1),
                      (this.Iv = iU({ width: 0, height: 0 })),
                      (this.Om = new x()),
                      (this.Nv = new tP(5)),
                      (this.Wv = !1),
                      (this.jv = () => {
                        this.Wv || this.Jd.$t().$h();
                      }),
                      (this.$v = () => {
                        this.Wv || this.Jd.$t().$h();
                      }),
                      (this.Jd = t),
                      (this.U_ = i),
                      (this.cn = t.W().layout),
                      (this.Zd = document.createElement('tr')),
                      (this.Bm = document.createElement('td')),
                      (this.Bm.style.padding = '0'),
                      (this.Vm = document.createElement('td')),
                      (this.Vm.style.padding = '0'),
                      (this.Xv = document.createElement('td')),
                      (this.Xv.style.height = '25px'),
                      (this.Xv.style.padding = '0'),
                      (this.Am = document.createElement('div')),
                      (this.Am.style.width = '100%'),
                      (this.Am.style.height = '100%'),
                      (this.Am.style.position = 'relative'),
                      (this.Am.style.overflow = 'hidden'),
                      this.Xv.appendChild(this.Am),
                      (this.Kv = eb(this.Am, iU({ width: 16, height: 16 }))),
                      this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
                    let e = this.Kv.canvasElement;
                    (e.style.position = 'absolute'),
                      (e.style.zIndex = '1'),
                      (e.style.left = '0'),
                      (e.style.top = '0'),
                      (this.Gv = eb(this.Am, iU({ width: 16, height: 16 }))),
                      this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
                    let s = this.Gv.canvasElement;
                    (s.style.position = 'absolute'),
                      (s.style.zIndex = '2'),
                      (s.style.left = '0'),
                      (s.style.top = '0'),
                      this.Zd.appendChild(this.Bm),
                      this.Zd.appendChild(this.Xv),
                      this.Zd.appendChild(this.Vm),
                      this.zm(),
                      this.Jd.$t().w_().l(this.zm.bind(this), this),
                      (this.rp = new ey(this.Gv.canvasElement, this, {
                        sv: () => !0,
                        ev: () => !this.Jd.W().handleScroll.horzTouchDrag,
                      }));
                  }
                  S() {
                    this.rp.S(),
                      null !== this.Pm && this.Pm.S(),
                      null !== this.Rm && this.Rm.S(),
                      this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v),
                      eg(this.Gv.canvasElement),
                      this.Gv.dispose(),
                      this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv),
                      eg(this.Kv.canvasElement),
                      this.Kv.dispose();
                  }
                  hp() {
                    return this.Zd;
                  }
                  Em() {
                    return this.Pm;
                  }
                  Im() {
                    return this.Rm;
                  }
                  mv(t) {
                    if (this.Dm) return;
                    this.Dm = !0;
                    let i = this.Jd.$t();
                    !i.St().Ni() &&
                      this.Jd.W().handleScale.axisPressedMouseMove.time &&
                      i.Gc(t.localX);
                  }
                  vv(t) {
                    this.mv(t);
                  }
                  bv() {
                    let t = this.Jd.$t();
                    !t.St().Ni() &&
                      this.Dm &&
                      ((this.Dm = !1),
                      this.Jd.W().handleScale.axisPressedMouseMove.time &&
                        t.rd());
                  }
                  lv(t) {
                    let i = this.Jd.$t();
                    !i.St().Ni() &&
                      this.Jd.W().handleScale.axisPressedMouseMove.time &&
                      i.ed(t.localX);
                  }
                  rv(t) {
                    this.lv(t);
                  }
                  uv() {
                    this.Dm = !1;
                    let t = this.Jd.$t();
                    (t.St().Ni() &&
                      !this.Jd.W().handleScale.axisPressedMouseMove.time) ||
                      t.rd();
                  }
                  ov() {
                    this.uv();
                  }
                  Uf() {
                    this.Jd.W().handleScale.axisDoubleClickReset.time &&
                      this.Jd.$t().Kn();
                  }
                  Wf() {
                    this.Uf();
                  }
                  Jf() {
                    this.Jd.$t().W().handleScale.axisPressedMouseMove.time &&
                      this.Sp(1);
                  }
                  Tv() {
                    this.Sp(0);
                  }
                  _m() {
                    return this.Iv;
                  }
                  Lm() {
                    return this.Om;
                  }
                  Nm(t, i, e) {
                    iV(this.Iv, t) ||
                      ((this.Iv = t),
                      (this.Wv = !0),
                      this.Kv.resizeCanvasElement(t),
                      this.Gv.resizeCanvasElement(t),
                      (this.Wv = !1),
                      (this.Xv.style.width = `${t.width}px`),
                      (this.Xv.style.height = `${t.height}px`),
                      this.Om.m(t)),
                      null !== this.Pm &&
                        this.Pm.up(iU({ width: i, height: t.height })),
                      null !== this.Rm &&
                        this.Rm.up(iU({ width: e, height: t.height }));
                  }
                  Fm() {
                    let t = this.Wm();
                    return Math.ceil(t.C + t.T + t.P + t.L + t.V + t.jm);
                  }
                  bt() {
                    this.Jd.$t().St().ja();
                  }
                  Mp() {
                    return this.Kv.bitmapSize;
                  }
                  xp(t, i, e) {
                    let s = this.Mp();
                    s.width > 0 &&
                      s.height > 0 &&
                      t.drawImage(this.Kv.canvasElement, i, e);
                  }
                  fp(t) {
                    if (0 === t) return;
                    if (1 !== t) {
                      this.Kv.applySuggestedBitmapSize();
                      let i = eu(this.Kv);
                      null !== i &&
                        (i.useBitmapCoordinateSpace((t) => {
                          this.pp(t), this.Ae(t), this.Hm(i, eA);
                        }),
                        this.bp(i),
                        this.Hm(i, eD)),
                        null !== this.Pm && this.Pm.fp(t),
                        null !== this.Rm && this.Rm.fp(t);
                    }
                    this.Gv.applySuggestedBitmapSize();
                    let e = eu(this.Gv);
                    null !== e &&
                      (e.useBitmapCoordinateSpace(
                        ({ context: t, bitmapSize: i }) => {
                          t.clearRect(0, 0, i.width, i.height);
                        }
                      ),
                      this.$m([...this.Jd.$t().wt(), this.Jd.$t().Yc()], e),
                      this.Hm(e, eF));
                  }
                  Hm(t, i) {
                    let e = this.Jd.$t().wt();
                    for (let s of e)
                      eS(i, (i) => ew(i, t, !1, void 0), s, void 0);
                    for (let h of e)
                      eS(i, (i) => e_(i, t, !1, void 0), h, void 0);
                  }
                  pp({ context: t, bitmapSize: i }) {
                    K(t, 0, 0, i.width, i.height, this.Jd.$t().md());
                  }
                  Ae({ context: t, bitmapSize: i, verticalPixelRatio: e }) {
                    if (this.Jd.W().timeScale.borderVisible) {
                      t.fillStyle = this.Um();
                      let s = Math.max(1, Math.floor(this.Wm().C * e));
                      t.fillRect(0, 0, i.width, s);
                    }
                  }
                  bp(t) {
                    let i = this.Jd.$t().St(),
                      e = i.ja();
                    if (!e || 0 === e.length) return;
                    let s = this.U_.maxTickMarkWeight(e),
                      h = this.Wm(),
                      l = i.W();
                    l.borderVisible &&
                      l.ticksVisible &&
                      t.useBitmapCoordinateSpace(
                        ({
                          context: t,
                          horizontalPixelRatio: i,
                          verticalPixelRatio: s,
                        }) => {
                          (t.strokeStyle = this.Um()),
                            (t.fillStyle = this.Um());
                          let l = Math.max(1, Math.floor(i)),
                            n = Math.floor(0.5 * i);
                          t.beginPath();
                          let r = Math.round(h.T * s);
                          for (let o = e.length; o--; ) {
                            let u = Math.round(e[o].coord * i);
                            t.rect(u - n, 0, l, r);
                          }
                          t.fill();
                        }
                      ),
                      t.useMediaCoordinateSpace(({ context: t }) => {
                        let i = h.C + h.T + h.L + h.P / 2;
                        for (let l of ((t.textAlign = 'center'),
                        (t.textBaseline = 'middle'),
                        (t.fillStyle = this.$()),
                        (t.font = this.op()),
                        e))
                          if (l.weight < s) {
                            let n = l.needAlignCoordinate
                              ? this.qm(t, l.coord, l.label)
                              : l.coord;
                            t.fillText(l.label, n, i);
                          }
                        for (let r of (this.Jd.W().timeScale.allowBoldLabels &&
                          (t.font = this.Ym()),
                        e))
                          if (r.weight >= s) {
                            let o = r.needAlignCoordinate
                              ? this.qm(t, r.coord, r.label)
                              : r.coord;
                            t.fillText(r.label, o, i);
                          }
                      });
                  }
                  qm(t, i, e) {
                    let s = this.Nv.xi(t, e),
                      h = Math.floor(i - s / 2) + 0.5;
                    return (
                      h < 0
                        ? (i += Math.abs(0 - h))
                        : h + s > this.Iv.width &&
                          (i -= Math.abs(this.Iv.width - (h + s))),
                      i
                    );
                  }
                  $m(t, i) {
                    let e = this.Wm();
                    for (let s of t) for (let h of s.Qi()) h.gt().X(i, e);
                  }
                  Um() {
                    return this.Jd.W().timeScale.borderColor;
                  }
                  $() {
                    return this.cn.textColor;
                  }
                  j() {
                    return this.cn.fontSize;
                  }
                  op() {
                    return T(this.j(), this.cn.fontFamily);
                  }
                  Ym() {
                    return T(this.j(), this.cn.fontFamily, 'bold');
                  }
                  Wm() {
                    null === this.k &&
                      (this.k = {
                        C: 1,
                        N: NaN,
                        L: NaN,
                        V: NaN,
                        ji: NaN,
                        T: 5,
                        P: NaN,
                        R: '',
                        Wi: new tP(),
                        jm: 0,
                      });
                    let t = this.k,
                      i = this.op();
                    if (t.R !== i) {
                      let e = this.j();
                      (t.P = e),
                        (t.R = i),
                        (t.L = (3 * e) / 12),
                        (t.V = (3 * e) / 12),
                        (t.ji = (9 * e) / 12),
                        (t.N = 0),
                        (t.jm = (4 * e) / 12),
                        t.Wi.ir();
                    }
                    return this.k;
                  }
                  Sp(t) {
                    this.Xv.style.cursor = 1 === t ? 'ew-resize' : 'default';
                  }
                  zm() {
                    let t = this.Jd.$t(),
                      i = t.W();
                    i.leftPriceScale.visible ||
                      null === this.Pm ||
                      (this.Bm.removeChild(this.Pm.hp()),
                      this.Pm.S(),
                      (this.Pm = null)),
                      i.rightPriceScale.visible ||
                        null === this.Rm ||
                        (this.Vm.removeChild(this.Rm.hp()),
                        this.Rm.S(),
                        (this.Rm = null));
                    let e = { _d: this.Jd.$t()._d() },
                      s = () => t.md();
                    i.leftPriceScale.visible &&
                      null === this.Pm &&
                      ((this.Pm = new eM(
                        'left',
                        i,
                        e,
                        () =>
                          i.leftPriceScale.borderVisible &&
                          t.St().W().borderVisible,
                        s
                      )),
                      this.Bm.appendChild(this.Pm.hp())),
                      i.rightPriceScale.visible &&
                        null === this.Rm &&
                        ((this.Rm = new eM(
                          'right',
                          i,
                          e,
                          () =>
                            i.leftPriceScale.borderVisible &&
                            t.St().W().borderVisible,
                          s
                        )),
                        this.Vm.appendChild(this.Rm.hp()));
                  }
                })(this, this.U_)),
                this.nb.appendChild(this.lb.hp());
              let h = i.autoSize && this.ab(),
                l = this.cn.width,
                n = this.cn.height;
              if (h || 0 === l || 0 === n) {
                let r = t.getBoundingClientRect();
                (l = l || r.width), (n = n || r.height);
              }
              this.ob(l, n),
                this._b(),
                t.appendChild(this.Zd),
                this.ub(),
                this.$i.St().sc().l(this.$i.Xl.bind(this.$i), this),
                this.$i.w_().l(this.$i.Xl.bind(this.$i), this);
            }
            $t() {
              return this.$i;
            }
            W() {
              return this.cn;
            }
            qp() {
              return this.Zm;
            }
            cb() {
              return this.lb;
            }
            S() {
              for (let t of (this.rb(!1),
              0 !== this.Xm && window.cancelAnimationFrame(this.Xm),
              this.$i.Zc().p(this),
              this.$i.St().sc().p(this),
              this.$i.w_().p(this),
              this.$i.S(),
              this.Zm))
                this.nb.removeChild(t.hp()),
                  t.hm().p(this),
                  t.lm().p(this),
                  t.S();
              (this.Zm = []),
                d(this.lb).S(),
                null !== this.Zd.parentElement &&
                  this.Zd.parentElement.removeChild(this.Zd),
                this.Pc.S(),
                this.Dp.S(),
                this.Op.S(),
                this.fb();
            }
            ob(t, i, e = !1) {
              if (this.ro === i && this.o_ === t) return;
              let s = (function (t) {
                let i = Math.floor(t.width),
                  e = Math.floor(t.height);
                return iU({ width: i - (i % 2), height: e - (e % 2) });
              })(iU({ width: t, height: i }));
              (this.ro = s.height), (this.o_ = s.width);
              let h = this.ro + 'px',
                l = this.o_ + 'px';
              (d(this.Zd).style.height = h),
                (d(this.Zd).style.width = l),
                (this.nb.style.height = h),
                (this.nb.style.width = l),
                e ? this.pb(q.es(), performance.now()) : this.$i.Xl();
            }
            fp(t) {
              void 0 === t && (t = q.es());
              for (let i = 0; i < this.Zm.length; i++)
                this.Zm[i].fp(t.Hn(i).Fn);
              this.cn.timeScale.visible && this.lb.fp(t.jn());
            }
            Hh(t) {
              let i = eU(this.cn);
              this.$i.Hh(t);
              let e = eU(this.cn);
              e !== i && this.rb(e), this.ub(), this.mb(t);
            }
            hm() {
              return this.Dp;
            }
            lm() {
              return this.Op;
            }
            Zc() {
              return this.Pc;
            }
            bb() {
              null !== this.Jm &&
                (this.pb(this.Jm, performance.now()), (this.Jm = null));
              let t = this.wb(null),
                i = document.createElement('canvas');
              (i.width = t.width), (i.height = t.height);
              let e = d(i.getContext('2d'));
              return this.wb(e), i;
            }
            gb(t) {
              return ('left' !== t || this.Mb()) &&
                ('right' !== t || this.xb()) &&
                0 !== this.Zm.length
                ? d('left' === t ? this.Zm[0].bm() : this.Zm[0].wm()).cp()
                : 0;
            }
            Sb() {
              return this.cn.autoSize && null !== this.tb;
            }
            kb() {
              return this.Zd;
            }
            Jp(t) {
              (this.ib = t),
                this.ib
                  ? this.kb().style.setProperty('cursor', t)
                  : this.kb().style.removeProperty('cursor');
            }
            yb() {
              return this.ib;
            }
            Cb() {
              return c(this.Zm[0])._m();
            }
            mb(t) {
              (void 0 !== t.autoSize ||
                !this.tb ||
                (void 0 === t.width && void 0 === t.height)) &&
                (t.autoSize && !this.tb && this.ab(),
                !1 === t.autoSize && null !== this.tb && this.fb(),
                t.autoSize ||
                  (void 0 === t.width && void 0 === t.height) ||
                  this.ob(t.width || this.o_, t.height || this.ro));
            }
            wb(t) {
              let i = 0,
                e = 0,
                s = this.Zm[0],
                h = (i, e) => {
                  let s = 0;
                  for (let h = 0; h < this.Zm.length; h++) {
                    let l = this.Zm[h],
                      n = d('left' === i ? l.bm() : l.wm()),
                      r = n.Mp();
                    null !== t && n.xp(t, e, s), (s += r.height);
                  }
                };
              this.Mb() && (h('left', 0), (i += d(s.bm()).Mp().width));
              for (let l = 0; l < this.Zm.length; l++) {
                let n = this.Zm[l],
                  r = n.Mp();
                null !== t && n.xp(t, i, e), (e += r.height);
              }
              (i += s.Mp().width),
                this.xb() && (h('right', i), (i += d(s.wm()).Mp().width));
              let o = (i, e, s) => {
                d('left' === i ? this.lb.Em() : this.lb.Im()).xp(d(t), e, s);
              };
              if (this.cn.timeScale.visible) {
                let u = this.lb.Mp();
                if (null !== t) {
                  let a = 0;
                  this.Mb() && (o('left', a, e), (a = d(s.bm()).Mp().width)),
                    this.lb.xp(t, a, e),
                    (a += u.width),
                    this.xb() && o('right', a, e);
                }
                e += u.height;
              }
              return iU({ width: i, height: e });
            }
            Tb() {
              var t;
              let i = 0,
                e = 0,
                s = 0;
              for (let h of this.Zm)
                this.Mb() &&
                  (e = Math.max(
                    e,
                    d(h.bm()).ap(),
                    this.cn.leftPriceScale.minimumWidth
                  )),
                  this.xb() &&
                    (s = Math.max(
                      s,
                      d(h.wm()).ap(),
                      this.cn.rightPriceScale.minimumWidth
                    )),
                  (i += h.g_());
              (e = ef(e)), (s = ef(s));
              let l = this.o_,
                n = this.ro,
                r = Math.max(l - e - s, 0),
                o = this.cn.timeScale.visible,
                u = o
                  ? Math.max(this.lb.Fm(), this.cn.timeScale.minimumHeight)
                  : 0;
              u = (t = u) + (t % 2);
              let a = 0 + u,
                c = n < a ? 0 : n - a,
                f = c / i,
                $ = 0;
              for (let v = 0; v < this.Zm.length; ++v) {
                let p = this.Zm[v];
                p.Up(this.$i.Uc()[v]);
                let m = 0,
                  b = 0;
                (m = Math.max(
                  (b =
                    v === this.Zm.length - 1 ? c - $ : Math.round(p.g_() * f)),
                  2
                )),
                  ($ += m),
                  p.up(iU({ width: r, height: m })),
                  this.Mb() && p.om(e, 'left'),
                  this.xb() && p.om(s, 'right'),
                  p.dp() && this.$i.Xc(p.dp(), m);
              }
              this.lb.Nm(
                iU({ width: o ? r : 0, height: u }),
                o ? e : 0,
                o ? s : 0
              ),
                this.$i.x_(r),
                this.Km !== e && (this.Km = e),
                this.Gm !== s && (this.Gm = s);
            }
            rb(t) {
              t
                ? this.Zd.addEventListener('wheel', this.sb, { passive: !1 })
                : this.Zd.removeEventListener('wheel', this.sb);
            }
            Pb(t) {
              switch (t.deltaMode) {
                case t.DOM_DELTA_PAGE:
                  return 120;
                case t.DOM_DELTA_LINE:
                  return 32;
              }
              return eK ? 1 / window.devicePixelRatio : 1;
            }
            eb(t) {
              if (
                !(
                  (0 !== t.deltaX && this.cn.handleScroll.mouseWheel) ||
                  (0 !== t.deltaY && this.cn.handleScale.mouseWheel)
                )
              )
                return;
              let i = this.Pb(t),
                e = (i * t.deltaX) / 100,
                s = (-i * t.deltaY) / 100;
              if (
                (t.cancelable && t.preventDefault(),
                0 !== s && this.cn.handleScale.mouseWheel)
              ) {
                let h = t.clientX - this.Zd.getBoundingClientRect().left;
                this.$t().Jc(h, Math.sign(s) * Math.min(1, Math.abs(s)));
              }
              0 !== e &&
                this.cn.handleScroll.mouseWheel &&
                this.$t().Qc(-80 * e);
            }
            pb(t, i) {
              var e;
              let s = t.jn();
              3 === s && this.Rb(),
                (3 !== s && 2 !== s) ||
                  (this.Db(t),
                  this.Ob(t, i),
                  this.lb.bt(),
                  this.Zm.forEach((t) => {
                    t.Zp();
                  }),
                  3 ===
                    (null === (e = this.Jm) || void 0 === e
                      ? void 0
                      : e.jn()) &&
                    (this.Jm.ts(t),
                    this.Rb(),
                    this.Db(this.Jm),
                    this.Ob(this.Jm, i),
                    (t = this.Jm),
                    (this.Jm = null))),
                this.fp(t);
            }
            Ob(t, i) {
              for (let e of t.Qn()) this.ns(e, i);
            }
            Db(t) {
              let i = this.$i.Uc();
              for (let e = 0; e < i.length; e++) t.Hn(e).Wn && i[e].L_();
            }
            ns(t, i) {
              let e = this.$i.St();
              switch (t.qn) {
                case 0:
                  e.rc();
                  break;
                case 1:
                  e.hc(t.Ot);
                  break;
                case 2:
                  e.Gn(t.Ot);
                  break;
                case 3:
                  e.Jn(t.Ot);
                  break;
                case 4:
                  e.Uu();
                  break;
                case 5:
                  t.Ot.Ju(i) || e.Jn(t.Ot.Qu(i));
              }
            }
            Dc(t) {
              null !== this.Jm ? this.Jm.ts(t) : (this.Jm = t),
                this.Qm ||
                  ((this.Qm = !0),
                  (this.Xm = window.requestAnimationFrame((t) => {
                    if (((this.Qm = !1), (this.Xm = 0), null !== this.Jm)) {
                      let i = this.Jm;
                      for (let e of ((this.Jm = null), this.pb(i, t), i.Qn()))
                        if (5 === e.qn && !e.Ot.Ju(t)) {
                          this.$t().Zn(e.Ot);
                          break;
                        }
                    }
                  })));
            }
            Rb() {
              this._b();
            }
            _b() {
              let t = this.$i.Uc(),
                i = t.length,
                e = this.Zm.length;
              for (let s = i; s < e; s++) {
                let h = c(this.Zm.pop());
                this.nb.removeChild(h.hp()),
                  h.hm().p(this),
                  h.lm().p(this),
                  h.S();
              }
              for (let l = e; l < i; l++) {
                let n = new eR(this, t[l]);
                n.hm().l(this.Bb.bind(this), this),
                  n.lm().l(this.Vb.bind(this), this),
                  this.Zm.push(n),
                  this.nb.insertBefore(n.hp(), this.lb.hp());
              }
              for (let r = 0; r < i; r++) {
                let o = t[r],
                  u = this.Zm[r];
                u.dp() !== o ? u.Up(o) : u.$p();
              }
              this.ub(), this.Tb();
            }
            Ab(t, i, e) {
              var s;
              let h = new Map();
              null !== t &&
                this.$i.wt().forEach((i) => {
                  let e = i.zn().hl(t);
                  null !== e && h.set(i, e);
                });
              let l;
              if (null !== t) {
                let n =
                  null === (s = this.$i.St().Ui(t)) || void 0 === s
                    ? void 0
                    : s.originalTime;
                void 0 !== n && (l = n);
              }
              let r = this.$t().Fc(),
                o = null !== r && r.jc instanceof il ? r.jc : void 0,
                u = null !== r && void 0 !== r.Av ? r.Av.wr : void 0;
              return {
                zb: l,
                se: null != t ? t : void 0,
                Eb: null != i ? i : void 0,
                Ib: o,
                Lb: h,
                Nb: u,
                Fb: null != e ? e : void 0,
              };
            }
            Bb(t, i, e) {
              this.Dp.m(() => this.Ab(t, i, e));
            }
            Vb(t, i, e) {
              this.Op.m(() => this.Ab(t, i, e));
            }
            hb(t, i, e) {
              this.Pc.m(() => this.Ab(t, i, e));
            }
            ub() {
              let t = this.cn.timeScale.visible ? '' : 'none';
              this.lb.hp().style.display = t;
            }
            Mb() {
              return this.Zm[0].dp().P_().W().visible;
            }
            xb() {
              return this.Zm[0].dp().R_().W().visible;
            }
            ab() {
              return (
                'ResizeObserver' in window &&
                ((this.tb = new ResizeObserver((t) => {
                  let i = t.find((t) => t.target === this.Gd);
                  i && this.ob(i.contentRect.width, i.contentRect.height);
                })),
                this.tb.observe(this.Gd, { box: 'border-box' }),
                !0)
              );
            }
            fb() {
              null !== this.tb && this.tb.disconnect(), (this.tb = null);
            }
          })(t, s, i)),
          this.lw.hm().l((t) => {
            this.kw.M() && this.kw.m(this.Pw(t()));
          }, this),
          this.lw.lm().l((t) => {
            this.yw.M() && this.yw.m(this.Pw(t()));
          }, this),
          this.lw.Zc().l((t) => {
            this.Cw.M() && this.Cw.m(this.Pw(t()));
          }, this);
        let h = this.lw.$t();
        this.Rw = new (class t {
          constructor(t, i, e) {
            (this.bw = new x()),
              (this.pu = new x()),
              (this.Om = new x()),
              (this.$i = t),
              (this.kl = t.St()),
              (this.lb = i),
              this.kl.tc().l(this.ww.bind(this)),
              this.kl.nc().l(this.gw.bind(this)),
              this.lb.Lm().l(this.Mw.bind(this)),
              (this.U_ = e);
          }
          S() {
            this.kl.tc().p(this),
              this.kl.nc().p(this),
              this.lb.Lm().p(this),
              this.bw.S(),
              this.pu.S(),
              this.Om.S();
          }
          scrollPosition() {
            return this.kl.ju();
          }
          scrollToPosition(t, i) {
            i ? this.kl.Gu(t, 1e3) : this.$i.Jn(t);
          }
          scrollToRealTime() {
            this.kl.Ku();
          }
          getVisibleRange() {
            let t = this.kl.Du();
            return null === t
              ? null
              : { from: t.from.originalTime, to: t.to.originalTime };
          }
          setVisibleRange(t) {
            let i = {
                from: this.U_.convertHorzItemToInternal(t.from),
                to: this.U_.convertHorzItemToInternal(t.to),
              },
              e = this.kl.Au(i);
            this.$i.vd(e);
          }
          getVisibleLogicalRange() {
            let t = this.kl.Ru();
            return null === t ? null : { from: t.Os(), to: t.ui() };
          }
          setVisibleLogicalRange(t) {
            a(t.from <= t.to, 'The from index cannot be after the to index.'),
              this.$i.vd(t);
          }
          resetTimeScale() {
            this.$i.Kn();
          }
          fitContent() {
            this.$i.rc();
          }
          logicalToCoordinate(t) {
            let i = this.$i.St();
            return i.Ni() ? null : i.zt(t);
          }
          coordinateToLogical(t) {
            return this.kl.Ni() ? null : this.kl.Lu(t);
          }
          timeToCoordinate(t) {
            let i = this.U_.convertHorzItemToInternal(t),
              e = this.kl.Da(i, !1);
            return null === e ? null : this.kl.zt(e);
          }
          coordinateToTime(t) {
            let i = this.$i.St(),
              e = i.Lu(t),
              s = i.Ui(e);
            return null === s ? null : s.originalTime;
          }
          width() {
            return this.lb._m().width;
          }
          height() {
            return this.lb._m().height;
          }
          subscribeVisibleTimeRangeChange(t) {
            this.bw.l(t);
          }
          unsubscribeVisibleTimeRangeChange(t) {
            this.bw.v(t);
          }
          subscribeVisibleLogicalRangeChange(t) {
            this.pu.l(t);
          }
          unsubscribeVisibleLogicalRangeChange(t) {
            this.pu.v(t);
          }
          subscribeSizeChange(t) {
            this.Om.l(t);
          }
          unsubscribeSizeChange(t) {
            this.Om.v(t);
          }
          applyOptions(t) {
            this.kl.Hh(t);
          }
          options() {
            return Object.assign(Object.assign({}, L(this.kl.W())), {
              barSpacing: this.kl.he(),
            });
          }
          ww() {
            this.bw.M() && this.bw.m(this.getVisibleRange());
          }
          gw() {
            this.pu.M() && this.pu.m(this.getVisibleLogicalRange());
          }
          Mw(t) {
            this.Om.m(t.width, t.height);
          }
        })(h, this.lw.cb(), this.U_);
      }
      remove() {
        this.lw.hm().p(this),
          this.lw.lm().p(this),
          this.lw.Zc().p(this),
          this.Rw.S(),
          this.lw.S(),
          this.xw.clear(),
          this.Sw.clear(),
          this.kw.S(),
          this.yw.S(),
          this.Cw.S(),
          this.Tw.S();
      }
      resize(t, i, e) {
        this.autoSizeActive() || this.lw.ob(t, i, e);
      }
      addCustomSeries(t, i) {
        let e = f(t),
          s = Object.assign(Object.assign({}, n), e.defaultOptions());
        return this.Dw('Custom', s, i, e);
      }
      addAreaSeries(t) {
        return this.Dw('Area', s, t);
      }
      addBaselineSeries(t) {
        return this.Dw('Baseline', h, t);
      }
      addBarSeries(t) {
        return this.Dw('Bar', i, t);
      }
      addCandlestickSeries(i = {}) {
        var e;
        return (
          void 0 !== (e = i).borderColor &&
            ((e.borderUpColor = e.borderColor),
            (e.borderDownColor = e.borderColor)),
          void 0 !== e.wickColor &&
            ((e.wickUpColor = e.wickColor), (e.wickDownColor = e.wickColor)),
          this.Dw('Candlestick', t, i)
        );
      }
      addHistogramSeries(t) {
        return this.Dw('Histogram', l, t);
      }
      addLineSeries(t) {
        return this.Dw('Line', e, t);
      }
      removeSeries(t) {
        let i = c(this.xw.get(t)),
          e = this.Tw.fd(i);
        this.lw.$t().fd(i), this.Ow(e), this.xw.delete(t), this.Sw.delete(i);
      }
      fw(t, i) {
        this.Ow(this.Tw.Xb(t, i));
      }
      mw(t, i) {
        this.Ow(this.Tw.tw(t, i));
      }
      subscribeClick(t) {
        this.kw.l(t);
      }
      unsubscribeClick(t) {
        this.kw.v(t);
      }
      subscribeCrosshairMove(t) {
        this.Cw.l(t);
      }
      unsubscribeCrosshairMove(t) {
        this.Cw.v(t);
      }
      subscribeDblClick(t) {
        this.yw.l(t);
      }
      unsubscribeDblClick(t) {
        this.yw.v(t);
      }
      priceScale(t) {
        return new sf(this.lw, t);
      }
      timeScale() {
        return this.Rw;
      }
      applyOptions(t) {
        this.lw.Hh(sb(t));
      }
      options() {
        return this.lw.W();
      }
      takeScreenshot() {
        return this.lw.bb();
      }
      autoSizeActive() {
        return this.lw.Sb();
      }
      chartElement() {
        return this.lw.kb();
      }
      paneSize() {
        let t = this.lw.Cb();
        return { height: t.height, width: t.width };
      }
      setCrosshairPosition(t, i, e) {
        let s = this.xw.get(e);
        if (void 0 === s) return;
        let h = this.lw.$t().cr(s);
        null !== h && this.lw.$t().ld(t, i, h);
      }
      clearCrosshairPosition() {
        this.lw.$t().ad(!0);
      }
      Dw(t, i, e = {}, s) {
        !(function t(i) {
          if (void 0 === i || 'custom' === i.type) return;
          let e = i;
          void 0 !== e.minMove &&
            void 0 === e.precision &&
            (e.precision = (function (t) {
              if (t >= 1) return 0;
              let i = 0;
              for (; i < 8; i++) {
                let e = Math.round(t);
                if (1e-8 > Math.abs(e - t)) break;
                t *= 10;
              }
              return i;
            })(e.minMove));
        })(e.priceFormat);
        let h = C(L(r), L(i), e),
          l = this.lw.$t().ud(t, h, s),
          n = new sm(l, this, this, this, this.U_);
        return this.xw.set(n, l), this.Sw.set(l, n), n;
      }
      Ow(t) {
        let i = this.lw.$t();
        i.od(t.St.Iu, t.St.rw, t.St.hw),
          t.sw.forEach((t, i) => i.J(t.He, t.ew)),
          i.Fu();
      }
      Bw(t) {
        return c(this.Sw.get(t));
      }
      Pw(t) {
        let i = new Map();
        t.Lb.forEach((t, e) => {
          let s = e.Jh(),
            h = sh(s)(t);
          if ('Custom' !== s) {
            var l, n, r;
            a(void 0 !== (n = l = h).open || void 0 !== (r = l).value);
          } else {
            let o = e.Ca();
            a(!o || !1 === o(h));
          }
          i.set(this.Bw(e), h);
        });
        let e = void 0 !== t.Ib && this.Sw.has(t.Ib) ? this.Bw(t.Ib) : void 0;
        return {
          time: t.zb,
          logical: t.se,
          point: t.Eb,
          hoveredSeries: e,
          hoveredObjectId: t.Nb,
          seriesData: i,
          sourceEvent: t.Fb,
        };
      }
    }
    function sw(t, i, e) {
      let s;
      if (z(t)) {
        let h = document.getElementById(t);
        a(null !== h, `Cannot find element in DOM with id=${t}`), (s = h);
      } else s = t;
      let l = new sg(s, i, e);
      return i.setOptions(l.options()), l;
    }
    let s_ = Object.assign(Object.assign({}, r), n);
    var sS = Object.freeze({
      __proto__: null,
      get ColorType() {
        return ei;
      },
      get CrosshairMode() {
        return iQ;
      },
      get LastPriceAnimationMode() {
        return i5;
      },
      get LineStyle() {
        return iq;
      },
      get LineType() {
        return i4;
      },
      get MismatchDirection() {
        return i7;
      },
      get PriceLineSource() {
        return et;
      },
      get PriceScaleMode() {
        return i6;
      },
      get TickMarkType() {
        return ee;
      },
      get TrackingModeExitMode() {
        return i2;
      },
      createChart: function (t, i) {
        return sw(t, new iK(), iK.Ad(i));
      },
      createChartEx: sw,
      customSeriesDefaultOptions: s_,
      defaultHorzScaleBehavior: function () {
        return iK;
      },
      isBusinessDay: iL,
      isUTCTimestamp: iO,
      version: function () {
        return '4.2.1';
      },
    });
    window.LightweightCharts = sS;
  })();
