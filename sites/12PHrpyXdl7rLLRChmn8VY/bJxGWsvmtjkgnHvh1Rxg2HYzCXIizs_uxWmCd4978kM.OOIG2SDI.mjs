import { a as ve, b as Se, c as oa, d as sa } from "./chunk-OFFORG57.mjs";
import { a as na } from "./chunk-CXKDPR6P.mjs";
import { a as zr } from "./chunk-U5K3L5IS.mjs";
import { a as ie } from "./chunk-23RJAGB7.mjs";
import "./chunk-X5NG7RQ5.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as ee,
  Aa as he,
  B as Be,
  Ba as ia,
  C as Ge,
  Ca as re,
  D as Ze,
  Da as p,
  E as Xe,
  F as qa,
  Fa as I,
  G as _e,
  H as Wa,
  Ha as de,
  Ia as q,
  P as Mr,
  Q as me,
  S as $e,
  T as aa,
  W as f,
  Z as Y,
  aa as ae,
  b as ea,
  ba as Sr,
  c as s,
  ca as we,
  d as Na,
  da as b,
  ea as R,
  f as Ta,
  g as $,
  ga as ce,
  ha as Ha,
  ia as Za,
  j as Ya,
  k as pe,
  l as se,
  la as xe,
  m as le,
  n as Ka,
  na as te,
  o as ra,
  oa as ke,
  p as fe,
  q as z,
  r as Me,
  ra as ta,
  t as e,
  u as o,
  wa as ye,
  xa as Xa,
  y as T,
  z as c,
  za as Qr,
} from "./chunk-LROUDDNW.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as F } from "./chunk-Y5FTINFI.mjs";
function fi({ startingNumber: r, endingNumber: a, direction: i, style: t }) {
  let n = z(null),
    d = Be(i === "down" ? a : r),
    m = Ze(d, { damping: 200, stiffness: 1e3, from: { x: r }, to: { x: a } }),
    k = _e(n, { once: !0, margin: "-100px" });
  return (
    se(() => {
      k && d.set(i === "down" ? r : a);
    }, [d, k]),
    se(() => {
      m.onChange((h) => {
        n.current && (n.current.textContent = Math.round(h));
      });
    }, [m]),
    e("span", { ref: n, style: { ...t, whiteSpace: "nowrap" } })
  );
}
function fr({ startingNumber: r, endingNumber: a, direction: i, font: t }) {
  return e(fi, {
    startingNumber: r,
    endingNumber: a,
    direction: i,
    style: {
      fontSize: t.size,
      fontWeight: t.weight,
      color: t.color,
      fontFamily: `'${t.fontFace}'`,
    },
  });
}
Y(fr, {
  startingNumber: { type: f.Number, defaultValue: 0, title: "Start from" },
  endingNumber: { type: f.Number, defaultValue: 60, title: "End at" },
  direction: {
    type: f.Enum,
    options: ["down", "up"],
    optionTitles: ["Down", "Up"],
    defaultValue: "up",
  },
  font: {
    type: f.Object,
    controls: {
      fontFace: { type: f.String, defaultValue: "Roboto Mono" },
      size: { type: f.Number, defaultValue: 30 },
      color: { type: f.Color, defaultValue: "#000" },
      weight: {
        type: f.Enum,
        defaultValue: "bold",
        options: ["normal", "bold", "bolder", "lighter"],
      },
    },
  },
});
var mi = ["sHeJH7oXp", "jcOPNlXf4"],
  ci = "framer-7g9za",
  di = { jcOPNlXf4: "framer-v-paqhkn", sHeJH7oXp: "framer-v-1xhc8wl" };
function pi(r, ...a) {
  let i = {};
  return a?.forEach((t) => t && Object.assign(i, r[t])), i;
}
var hi = {
    default: {
      delay: 0,
      duration: 1.5,
      ease: [0.44, 0, 0.56, 1],
      type: "tween",
    },
  },
  gi = ({ value: r, children: a }) => {
    let i = pe(T),
      t = r ?? i.transition,
      n = fe(() => ({ ...i, transition: t }), [JSON.stringify(t)]);
    return e(T.Provider, { value: n, children: a });
  },
  ui = c(s),
  xi = { "Variant 1": "sHeJH7oXp", "Variant 2": "jcOPNlXf4" },
  wi = ({ height: r, id: a, width: i, ...t }) => {
    var n, d;
    return {
      ...t,
      variant:
        (d = (n = xi[t.variant]) !== null && n !== void 0 ? n : t.variant) !==
          null && d !== void 0
          ? d
          : "sHeJH7oXp",
    };
  },
  ki = (r, a) => a.join("-") + r.layoutDependency,
  yi = $(function (r, a) {
    let { activeLocale: i, setLocale: t } = me(),
      { style: n, className: d, layoutId: m, variant: k, ...h } = wi(r),
      {
        baseVariant: l,
        classNames: x,
        gestureVariant: u,
        setGestureState: y,
        setVariant: A,
        transition: v,
        variants: g,
      } = he({
        cycleOrder: mi,
        defaultVariant: "sHeJH7oXp",
        transitions: hi,
        variant: k,
        variantClassNames: di,
      }),
      C = ki(r, g),
      { activeVariantCallback: S, delay: w } = ye(l),
      M = S(async (...G) => {
        await w(() => A("jcOPNlXf4"), 1500);
      }),
      J = S(async (...G) => {
        await w(() => A("sHeJH7oXp"), 1500);
      });
    Qr(l, { default: M, jcOPNlXf4: J });
    let B = z(null),
      j = le(),
      E = [];
    return e(ee, {
      id: m ?? j,
      children: e(ui, {
        animate: g,
        initial: !1,
        children: e(gi, {
          value: v,
          children: e(c.div, {
            ...h,
            className: ae(ci, ...E, "framer-1xhc8wl", d, x),
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: C,
            layoutId: "sHeJH7oXp",
            onHoverEnd: () => y({ isHovered: !1 }),
            onHoverStart: () => y({ isHovered: !0 }),
            onTap: () => y({ isPressed: !1 }),
            onTapCancel: () => y({ isPressed: !1 }),
            onTapStart: () => y({ isPressed: !0 }),
            ref: a ?? B,
            style: { ...n },
            ...pi({ jcOPNlXf4: { "data-framer-name": "Variant 2" } }, l, u),
            children: e(re, {
              background: {
                alt: "",
                fit: "fill",
                intrinsicHeight: 312.5,
                intrinsicWidth: 312.5,
                pixelHeight: 625,
                pixelWidth: 625,
                sizes: "242px",
                src: "https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png?scale-down-to=512",
                srcSet:
                  "https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png?scale-down-to=512 512w, https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png 625w",
              },
              className: "framer-80u98w",
              "data-framer-name": "image",
              layoutDependency: C,
              layoutId: "tzBnBjemV",
            }),
          }),
        }),
      }),
    });
  }),
  vi = [
    '.framer-7g9za[data-border="true"]::after, .framer-7g9za [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-7g9za.framer-z3xy3f, .framer-7g9za .framer-z3xy3f { display: block; }",
    ".framer-7g9za.framer-1xhc8wl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 400px; justify-content: flex-end; overflow: hidden; padding: 0px 0px 50px 0px; position: relative; width: 400px; }",
    ".framer-7g9za .framer-80u98w { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 242px); overflow: visible; position: relative; width: 242px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7g9za.framer-1xhc8wl { gap: 0px; } .framer-7g9za.framer-1xhc8wl > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-7g9za.framer-1xhc8wl > :first-child { margin-top: 0px; } .framer-7g9za.framer-1xhc8wl > :last-child { margin-bottom: 0px; } }",
    ".framer-7g9za.framer-v-paqhkn.framer-1xhc8wl { padding: 0px 0px 100px 0px; }",
  ],
  mr = ce(yi, vi, "framer-7g9za"),
  la = mr;
mr.displayName = "log";
mr.defaultProps = { height: 400, width: 400 };
Y(mr, {
  variant: {
    options: ["sHeJH7oXp", "jcOPNlXf4"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: f.Enum,
  },
});
de(mr, []);
var bi = ["LKL254Znz", "R51GYkCrP"],
  Ai = "framer-UnV1V",
  Ci = { LKL254Znz: "framer-v-ot8atp", R51GYkCrP: "framer-v-20vs86" };
function Li(r, ...a) {
  let i = {};
  return a?.forEach((t) => t && Object.assign(i, r[t])), i;
}
var Ei = { delay: 0, duration: 2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Vi = ({ value: r, children: a }) => {
    let i = pe(T),
      t = r ?? i.transition,
      n = fe(() => ({ ...i, transition: t }), [JSON.stringify(t)]);
    return e(T.Provider, { value: n, children: a });
  },
  Ri = c(s),
  Ii = { "Variant 1": "LKL254Znz", "Variant 2": "R51GYkCrP" },
  Mi = ({ height: r, id: a, width: i, ...t }) => {
    var n, d;
    return {
      ...t,
      variant:
        (d = (n = Ii[t.variant]) !== null && n !== void 0 ? n : t.variant) !==
          null && d !== void 0
          ? d
          : "LKL254Znz",
    };
  },
  Si = (r, a) => a.join("-") + r.layoutDependency,
  Qi = $(function (r, a) {
    let { activeLocale: i, setLocale: t } = me(),
      { style: n, className: d, layoutId: m, variant: k, ...h } = Mi(r),
      {
        baseVariant: l,
        classNames: x,
        gestureVariant: u,
        setGestureState: y,
        setVariant: A,
        variants: v,
      } = he({
        cycleOrder: bi,
        defaultVariant: "LKL254Znz",
        variant: k,
        variantClassNames: Ci,
      }),
      g = Si(r, v),
      C = z(null),
      S = le(),
      w = [],
      M = we();
    return e(ee, {
      id: m ?? S,
      children: e(Ri, {
        animate: v,
        initial: !1,
        children: e(Vi, {
          value: Ei,
          children: e(c.div, {
            ...h,
            className: ae(Ai, ...w, "framer-ot8atp", d, x),
            "data-framer-name": "Variant 1",
            layoutDependency: g,
            layoutId: "LKL254Znz",
            onHoverEnd: () => y({ isHovered: !1 }),
            onHoverStart: () => y({ isHovered: !0 }),
            onTap: () => y({ isPressed: !1 }),
            onTapCancel: () => y({ isPressed: !1 }),
            onTapStart: () => y({ isPressed: !0 }),
            ref: a ?? C,
            style: { backgroundColor: "rgba(255, 255, 255, 0.51)", ...n },
            ...Li({ R51GYkCrP: { "data-framer-name": "Variant 2" } }, l, u),
            children: e(c.div, {
              className: "framer-15fhvyw",
              layoutDependency: g,
              layoutId: "gWUH_jE0_",
              style: { backgroundColor: "rgb(255, 255, 255)" },
            }),
          }),
        }),
      }),
    });
  }),
  zi = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-UnV1V.framer-1goo04h, .framer-UnV1V .framer-1goo04h { display: block; }",
    ".framer-UnV1V.framer-ot8atp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 4px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 137px; }",
    ".framer-UnV1V .framer-15fhvyw { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 1%; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-UnV1V.framer-ot8atp { gap: 0px; } .framer-UnV1V.framer-ot8atp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-UnV1V.framer-ot8atp > :first-child { margin-left: 0px; } .framer-UnV1V.framer-ot8atp > :last-child { margin-right: 0px; } }",
    ".framer-UnV1V.framer-v-20vs86 .framer-15fhvyw { width: 85%; }",
  ],
  cr = ce(Qi, zi, "framer-UnV1V"),
  fa = cr;
cr.displayName = "Bar";
cr.defaultProps = { height: 4, width: 137 };
Y(cr, {
  variant: {
    options: ["LKL254Znz", "R51GYkCrP"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: f.Enum,
  },
});
de(cr, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
function Ji({ startingNumber: r, endingNumber: a, direction: i, style: t }) {
  let n = z(null),
    d = Be(i === "down" ? a : r),
    m = Ze(d, { damping: 200, stiffness: 1e3, from: { x: r }, to: { x: a } }),
    k = _e(n, { once: !0, margin: "-100px" });
  return (
    se(() => {
      k && d.set(i === "down" ? r : a);
    }, [d, k]),
    se(() => {
      m.onChange((h) => {
        n.current && (n.current.textContent = `${Math.round(h)}%`);
      });
    }, [m]),
    e("span", { ref: n, style: { ...t, whiteSpace: "nowrap" } })
  );
}
function er({ startingNumber: r, endingNumber: a, direction: i, font: t }) {
  return e(Ji, {
    startingNumber: r,
    endingNumber: a,
    direction: i,
    style: {
      fontSize: t.size,
      fontWeight: t.weight,
      color: t.color,
      fontFamily: `'${t.fontFace}'`,
    },
  });
}
Y(er, {
  startingNumber: { type: f.Number, defaultValue: 0, title: "Start from" },
  endingNumber: { type: f.Number, defaultValue: 1e3, title: "End at" },
  direction: {
    type: f.Enum,
    options: ["down", "up"],
    optionTitles: ["Down", "Up"],
    defaultValue: "up",
  },
  font: {
    type: f.Object,
    controls: {
      fontFace: { type: f.String, defaultValue: "Roboto Mono" },
      size: { type: f.Number, defaultValue: 30 },
      color: { type: f.Color, defaultValue: "#000" },
      weight: {
        type: f.Enum,
        defaultValue: "bold",
        options: ["normal", "bold", "bolder", "lighter"],
      },
    },
  },
});
var ji = { NYbW2vIeC: { hover: !0 } },
  Fi = [
    "wflaRPvwy",
    "NYbW2vIeC",
    "tJolGkNy4",
    "pPUp6pmE0",
    "I4nzMF_E3",
    "KgvzoJXie",
  ],
  Bi = "framer-LUaed",
  Gi = {
    I4nzMF_E3: "framer-v-1o5s0by",
    KgvzoJXie: "framer-v-mqiu0a",
    NYbW2vIeC: "framer-v-1a6vo0b",
    pPUp6pmE0: "framer-v-13q1pcc",
    tJolGkNy4: "framer-v-qy6mym",
    wflaRPvwy: "framer-v-89njw5",
  };
function _a(r, ...a) {
  let i = {};
  return a?.forEach((t) => t && Object.assign(i, r[t])), i;
}
var Ui = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Oi = ({ value: r, children: a }) => {
    let i = pe(T),
      t = r ?? i.transition,
      n = fe(() => ({ ...i, transition: t }), [JSON.stringify(t)]);
    return e(T.Provider, { value: n, children: a });
  },
  Di = c(s),
  Pi = {
    "mobile-inactiveFeature": "KgvzoJXie",
    "tablet-inactiveFeature": "pPUp6pmE0",
    activeFeature: "wflaRPvwy",
    inactiveFeature: "NYbW2vIeC",
    mobile: "I4nzMF_E3",
    tablet: "tJolGkNy4",
  },
  Ni = ({ body: r, height: a, id: i, tap2: t, title: n, width: d, ...m }) => {
    var k, h, l, x;
    return {
      ...m,
      bmhrlakRu:
        (k = r ?? m.bmhrlakRu) !== null && k !== void 0
          ? k
          : "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
      KRT9l5CDd:
        (h = n ?? m.KRT9l5CDd) !== null && h !== void 0
          ? h
          : "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
      variant:
        (x = (l = Pi[m.variant]) !== null && l !== void 0 ? l : m.variant) !==
          null && x !== void 0
          ? x
          : "wflaRPvwy",
      wfo4J1lFz: t ?? m.wfo4J1lFz,
    };
  },
  Ti = (r, a) => a.join("-") + r.layoutDependency,
  Yi = $(function (r, a) {
    let { activeLocale: i, setLocale: t } = me(),
      {
        style: n,
        className: d,
        layoutId: m,
        variant: k,
        KRT9l5CDd: h,
        bmhrlakRu: l,
        wfo4J1lFz: x,
        ...u
      } = Ni(r),
      {
        baseVariant: y,
        classNames: A,
        gestureVariant: v,
        setGestureState: g,
        setVariant: C,
        variants: S,
      } = he({
        cycleOrder: Fi,
        defaultVariant: "wflaRPvwy",
        enabledGestures: ji,
        variant: k,
        variantClassNames: Gi,
      }),
      w = Ti(r, S),
      { activeVariantCallback: M, delay: J } = ye(y),
      B = M(async (...L) => {
        if ((g({ isPressed: !1 }), x && (await x(...L)) === !1)) return !1;
      }),
      j = M(async (...L) => {
        C("tJolGkNy4");
      }),
      E = M(async (...L) => {
        C("I4nzMF_E3");
      }),
      G = z(null),
      U = () =>
        !!(
          v === "NYbW2vIeC-hover" ||
          ["NYbW2vIeC", "pPUp6pmE0", "KgvzoJXie"].includes(y)
        ),
      D = () =>
        !(
          v === "NYbW2vIeC-hover" ||
          ["NYbW2vIeC", "pPUp6pmE0", "KgvzoJXie"].includes(y)
        ),
      Z = le(),
      V = [],
      O = we();
    return e(ee, {
      id: m ?? Z,
      children: e(Di, {
        animate: S,
        initial: !1,
        children: e(Oi, {
          value: Ui,
          children: e(c.div, {
            ...u,
            className: ae(Bi, ...V, "framer-89njw5", d, A),
            "data-border": !0,
            "data-framer-name": "activeFeature",
            "data-highlight": !0,
            layoutDependency: w,
            layoutId: "wflaRPvwy",
            onHoverEnd: () => g({ isHovered: !1 }),
            onHoverStart: () => g({ isHovered: !0 }),
            onTap: B,
            onTapCancel: () => g({ isPressed: !1 }),
            onTapStart: () => g({ isPressed: !0 }),
            ref: a ?? G,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(255, 255, 255, 0.2)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              ...n,
            },
            ..._a(
              {
                "NYbW2vIeC-hover": { "data-framer-name": void 0 },
                I4nzMF_E3: { "data-framer-name": "mobile" },
                KgvzoJXie: { "data-framer-name": "mobile-inactiveFeature" },
                NYbW2vIeC: { "data-framer-name": "inactiveFeature" },
                pPUp6pmE0: { "data-framer-name": "tablet-inactiveFeature" },
                tJolGkNy4: { "data-framer-name": "tablet" },
              },
              y,
              v
            ),
            children: o(c.div, {
              className: "framer-kwt7dj",
              "data-framer-name": "Text and supporting text",
              layoutDependency: w,
              layoutId: "Htjc3YsCg",
              children: [
                o(c.div, {
                  className: "framer-90vzj",
                  "data-framer-name": "Heading",
                  layoutDependency: w,
                  layoutId: "MSsOdOhEJ",
                  children: [
                    e(p, {
                      __fromCanvasComponent: !0,
                      children: e(s, {
                        children: e(c.p, {
                          style: {
                            "--font-selector":
                              "R0Y7UGx1cyBKYWthcnRhIFNhbnMtNTAw",
                            "--framer-font-family":
                              '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "500",
                            "--framer-line-height": "28px",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children:
                            "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
                        }),
                      }),
                      className: "framer-91n27e",
                      "data-framer-name":
                        "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
                      fonts: ["GF;Plus Jakarta Sans-500"],
                      layoutDependency: w,
                      layoutId: "Rjh9J1hWD",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "28px",
                      },
                      text: h,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    U() &&
                      e(c.div, {
                        className: "framer-1hgunw0",
                        "data-framer-name": "Icon wrap",
                        layoutDependency: w,
                        layoutId: "TK75BqmxS",
                        children: e(c.div, {
                          className: "framer-1hby7tz",
                          "data-framer-name": "plus",
                          layoutDependency: w,
                          layoutId: "BVSUiSqxr",
                          children: e(I, {
                            className: "framer-1x5wol3",
                            "data-framer-name": "Icon",
                            fill: "rgba(0,0,0,1)",
                            intrinsicHeight: 16,
                            intrinsicWidth: 17,
                            layoutDependency: w,
                            layoutId: "c29euKmfE",
                            svg: `<svg width="17" height="16" viewBox="-1 -1 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 0V14M0.5 7H14.5" stroke="#B1B3B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                  ],
                }),
                D() &&
                  e(c.div, {
                    className: "framer-1x90djv",
                    "data-framer-name": "Body",
                    layoutDependency: w,
                    layoutId: "zguSfASbX",
                    ..._a(
                      {
                        I4nzMF_E3: { "data-highlight": !0, onTap: E },
                        tJolGkNy4: { "data-highlight": !0, onTap: j },
                      },
                      y,
                      v
                    ),
                    children: e(p, {
                      __fromCanvasComponent: !0,
                      children: e(s, {
                        children: e(c.p, {
                          style: {
                            "--font-selector":
                              "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                            "--framer-font-family":
                              '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                            "--framer-line-height": "24px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children:
                            "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
                        }),
                      }),
                      className: "framer-pwsnu5",
                      "data-framer-name": "Supporting Text",
                      fonts: ["GF;Plus Jakarta Sans-regular"],
                      layoutDependency: w,
                      layoutId: "YjgBbL2Ns",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "16px",
                      },
                      text: l,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Ki = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-LUaed.framer-plq0en, .framer-LUaed .framer-plq0en { display: block; }",
    ".framer-LUaed.framer-89njw5 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 24px 24px 24px; position: relative; width: min-content; }",
    ".framer-LUaed .framer-kwt7dj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 929px; }",
    ".framer-LUaed .framer-90vzj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-LUaed .framer-91n27e { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-LUaed .framer-1hgunw0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-LUaed .framer-1hby7tz { flex: none; height: 24px; overflow: hidden; position: relative; width: 24px; }",
    ".framer-LUaed .framer-1x5wol3 { bottom: 6px; flex: none; left: 4px; position: absolute; right: 7px; top: 4px; }",
    ".framer-LUaed .framer-1x90djv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 938px; }",
    ".framer-LUaed .framer-pwsnu5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 938px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-LUaed.framer-89njw5, .framer-LUaed .framer-kwt7dj, .framer-LUaed .framer-90vzj, .framer-LUaed .framer-1hgunw0, .framer-LUaed .framer-1x90djv { gap: 0px; } .framer-LUaed.framer-89njw5 > *, .framer-LUaed .framer-1hgunw0 > *, .framer-LUaed .framer-1x90djv > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-LUaed.framer-89njw5 > :first-child, .framer-LUaed .framer-90vzj > :first-child, .framer-LUaed .framer-1hgunw0 > :first-child, .framer-LUaed .framer-1x90djv > :first-child { margin-left: 0px; } .framer-LUaed.framer-89njw5 > :last-child, .framer-LUaed .framer-90vzj > :last-child, .framer-LUaed .framer-1hgunw0 > :last-child, .framer-LUaed .framer-1x90djv > :last-child { margin-right: 0px; } .framer-LUaed .framer-kwt7dj > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-LUaed .framer-kwt7dj > :first-child { margin-top: 0px; } .framer-LUaed .framer-kwt7dj > :last-child { margin-bottom: 0px; } .framer-LUaed .framer-90vzj > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-LUaed.framer-v-qy6mym .framer-kwt7dj, .framer-LUaed.framer-v-13q1pcc .framer-kwt7dj { width: 559px; }",
    ".framer-LUaed.framer-v-qy6mym .framer-91n27e, .framer-LUaed.framer-v-1o5s0by .framer-91n27e { flex: 3 0 0px; }",
    ".framer-LUaed.framer-v-qy6mym .framer-1x90djv { cursor: pointer; width: 559px; }",
    ".framer-LUaed.framer-v-qy6mym .framer-pwsnu5 { width: 536px; }",
    ".framer-LUaed.framer-v-1o5s0by .framer-kwt7dj, .framer-LUaed.framer-v-mqiu0a .framer-kwt7dj { width: 303px; }",
    ".framer-LUaed.framer-v-1o5s0by .framer-1x90djv { cursor: pointer; width: 303px; }",
    ".framer-LUaed.framer-v-1o5s0by .framer-pwsnu5 { width: 298px; }",
    '.framer-LUaed[data-border="true"]::after, .framer-LUaed [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  dr = ce(Yi, Ki, "framer-LUaed"),
  rr = dr;
dr.displayName = "baseFAQ Copy 2";
dr.defaultProps = { height: 172, width: 977 };
Y(dr, {
  variant: {
    options: [
      "wflaRPvwy",
      "NYbW2vIeC",
      "tJolGkNy4",
      "pPUp6pmE0",
      "I4nzMF_E3",
      "KgvzoJXie",
    ],
    optionTitles: [
      "activeFeature",
      "inactiveFeature",
      "tablet",
      "tablet-inactiveFeature",
      "mobile",
      "mobile-inactiveFeature",
    ],
    title: "Variant",
    type: f.Enum,
  },
  KRT9l5CDd: {
    defaultValue: "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
    displayTextArea: !1,
    title: "Title",
    type: f.String,
  },
  bmhrlakRu: {
    defaultValue:
      "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
    displayTextArea: !1,
    title: "Body",
    type: f.String,
  },
  wfo4J1lFz: { title: "Tap 2", type: f.EventHandler },
});
de(
  dr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Plus Jakarta Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_m07NTxXUEKi4Rw.woff2",
          weight: "500",
        },
        {
          family: "Plus Jakarta Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var qi = { XVXapjm4c: { hover: !0 } },
  Wi = [
    "JSgohUAK5",
    "XVXapjm4c",
    "YNhHhZH3v",
    "h9X3GLAhA",
    "Wl869cJOQ",
    "L0LTGVr5O",
  ],
  Hi = "framer-H9AQb",
  Zi = {
    h9X3GLAhA: "framer-v-1935qq5",
    JSgohUAK5: "framer-v-1mw6gtf",
    L0LTGVr5O: "framer-v-1xymki0",
    Wl869cJOQ: "framer-v-h7kgjh",
    XVXapjm4c: "framer-v-978163",
    YNhHhZH3v: "framer-v-k4sf09",
  };
function $a(r, ...a) {
  let i = {};
  return a?.forEach((t) => t && Object.assign(i, r[t])), i;
}
var Xi = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  _i = ({ value: r, children: a }) => {
    let i = pe(T),
      t = r ?? i.transition,
      n = fe(() => ({ ...i, transition: t }), [JSON.stringify(t)]);
    return e(T.Provider, { value: n, children: a });
  },
  $i = c(s),
  en = {
    "mobile-inactiveFeature": "L0LTGVr5O",
    "tablet-inactiveFeature": "h9X3GLAhA",
    activeFeature: "JSgohUAK5",
    inactiveFeature: "XVXapjm4c",
    mobile: "Wl869cJOQ",
    tablet: "YNhHhZH3v",
  },
  rn = ({ body: r, height: a, id: i, tap: t, title: n, width: d, ...m }) => {
    var k, h, l, x;
    return {
      ...m,
      bmhrlakRu:
        (k = r ?? m.bmhrlakRu) !== null && k !== void 0
          ? k
          : "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
      KRT9l5CDd:
        (h = n ?? m.KRT9l5CDd) !== null && h !== void 0
          ? h
          : "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
      MDep1szmv: t ?? m.MDep1szmv,
      variant:
        (x = (l = en[m.variant]) !== null && l !== void 0 ? l : m.variant) !==
          null && x !== void 0
          ? x
          : "JSgohUAK5",
    };
  },
  an = (r, a) => a.join("-") + r.layoutDependency,
  tn = $(function (r, a) {
    let { activeLocale: i, setLocale: t } = me(),
      {
        style: n,
        className: d,
        layoutId: m,
        variant: k,
        MDep1szmv: h,
        KRT9l5CDd: l,
        bmhrlakRu: x,
        ...u
      } = rn(r),
      {
        baseVariant: y,
        classNames: A,
        gestureVariant: v,
        setGestureState: g,
        setVariant: C,
        variants: S,
      } = he({
        cycleOrder: Wi,
        defaultVariant: "JSgohUAK5",
        enabledGestures: qi,
        variant: k,
        variantClassNames: Zi,
      }),
      w = an(r, S),
      { activeVariantCallback: M, delay: J } = ye(y),
      B = M(async (...L) => {
        if ((g({ isPressed: !1 }), h && (await h(...L)) === !1)) return !1;
      }),
      j = M(async (...L) => {
        C("YNhHhZH3v");
      }),
      E = M(async (...L) => {
        C("Wl869cJOQ");
      }),
      G = z(null),
      U = () =>
        !!(
          v === "XVXapjm4c-hover" ||
          ["XVXapjm4c", "h9X3GLAhA", "L0LTGVr5O"].includes(y)
        ),
      D = () =>
        !(
          v === "XVXapjm4c-hover" ||
          ["XVXapjm4c", "h9X3GLAhA", "L0LTGVr5O"].includes(y)
        ),
      Z = le(),
      V = [],
      O = we();
    return e(ee, {
      id: m ?? Z,
      children: e($i, {
        animate: S,
        initial: !1,
        children: e(_i, {
          value: Xi,
          children: e(c.div, {
            ...u,
            className: ae(Hi, ...V, "framer-1mw6gtf", d, A),
            "data-border": !0,
            "data-framer-name": "activeFeature",
            "data-highlight": !0,
            layoutDependency: w,
            layoutId: "JSgohUAK5",
            onHoverEnd: () => g({ isHovered: !1 }),
            onHoverStart: () => g({ isHovered: !0 }),
            onTap: B,
            onTapCancel: () => g({ isPressed: !1 }),
            onTapStart: () => g({ isPressed: !0 }),
            ref: a ?? G,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(255, 255, 255, 0.2)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              ...n,
            },
            ...$a(
              {
                "XVXapjm4c-hover": { "data-framer-name": void 0 },
                h9X3GLAhA: { "data-framer-name": "tablet-inactiveFeature" },
                L0LTGVr5O: { "data-framer-name": "mobile-inactiveFeature" },
                Wl869cJOQ: { "data-framer-name": "mobile" },
                XVXapjm4c: { "data-framer-name": "inactiveFeature" },
                YNhHhZH3v: {
                  "data-framer-name": "tablet",
                  "data-highlight": void 0,
                  onTap: () => g({ isPressed: !1 }),
                },
              },
              y,
              v
            ),
            children: o(c.div, {
              className: "framer-fq3tfs",
              "data-framer-name": "Text and supporting text",
              layoutDependency: w,
              layoutId: "Nq7RAiuUl",
              children: [
                o(c.div, {
                  className: "framer-87o86t",
                  "data-framer-name": "Heading",
                  layoutDependency: w,
                  layoutId: "XLgz3lSer",
                  children: [
                    e(p, {
                      __fromCanvasComponent: !0,
                      children: e(s, {
                        children: e(c.p, {
                          style: {
                            "--font-selector":
                              "R0Y7UGx1cyBKYWthcnRhIFNhbnMtNTAw",
                            "--framer-font-family":
                              '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "500",
                            "--framer-line-height": "28px",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children:
                            "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
                        }),
                      }),
                      className: "framer-ygxaq3",
                      "data-framer-name":
                        "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
                      fonts: ["GF;Plus Jakarta Sans-500"],
                      layoutDependency: w,
                      layoutId: "AEryHaw5w",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "28px",
                      },
                      text: l,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    U() &&
                      e(c.div, {
                        className: "framer-mo80eb",
                        "data-framer-name": "Icon wrap",
                        layoutDependency: w,
                        layoutId: "kPDAm1KjW",
                        children: e(c.div, {
                          className: "framer-hld1dr",
                          "data-framer-name": "plus",
                          layoutDependency: w,
                          layoutId: "aiBKdvJsV",
                          children: e(I, {
                            className: "framer-rhesze",
                            "data-framer-name": "Icon",
                            fill: "rgba(0,0,0,1)",
                            intrinsicHeight: 16,
                            intrinsicWidth: 17,
                            layoutDependency: w,
                            layoutId: "z77Cq9X4F",
                            svg: `<svg width="17" height="16" viewBox="-1 -1 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 0V14M0.5 7H14.5" stroke="#B1B3B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                  ],
                }),
                D() &&
                  e(c.div, {
                    className: "framer-3jso6y",
                    "data-framer-name": "Body",
                    layoutDependency: w,
                    layoutId: "yNK1Dlfz7",
                    ...$a(
                      {
                        Wl869cJOQ: { "data-highlight": !0, onTap: E },
                        YNhHhZH3v: { "data-highlight": !0, onTap: j },
                      },
                      y,
                      v
                    ),
                    children: e(p, {
                      __fromCanvasComponent: !0,
                      children: e(s, {
                        children: e(c.p, {
                          style: {
                            "--font-selector":
                              "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                            "--framer-font-family":
                              '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                            "--framer-line-height": "24px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children:
                            "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
                        }),
                      }),
                      className: "framer-1h6kws8",
                      "data-framer-name": "Supporting Text",
                      fonts: ["GF;Plus Jakarta Sans-regular"],
                      layoutDependency: w,
                      layoutId: "zPTsa1kIK",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "16px",
                      },
                      text: x,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  nn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-H9AQb.framer-1kyq8cw, .framer-H9AQb .framer-1kyq8cw { display: block; }",
    ".framer-H9AQb.framer-1mw6gtf { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 24px 24px 24px; position: relative; width: min-content; }",
    ".framer-H9AQb .framer-fq3tfs { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 929px; }",
    ".framer-H9AQb .framer-87o86t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-H9AQb .framer-ygxaq3 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-H9AQb .framer-mo80eb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-H9AQb .framer-hld1dr { flex: none; height: 24px; overflow: hidden; position: relative; width: 24px; }",
    ".framer-H9AQb .framer-rhesze { bottom: 6px; flex: none; left: 4px; position: absolute; right: 7px; top: 4px; }",
    ".framer-H9AQb .framer-3jso6y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 938px; }",
    ".framer-H9AQb .framer-1h6kws8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 938px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-H9AQb.framer-1mw6gtf, .framer-H9AQb .framer-fq3tfs, .framer-H9AQb .framer-87o86t, .framer-H9AQb .framer-mo80eb, .framer-H9AQb .framer-3jso6y { gap: 0px; } .framer-H9AQb.framer-1mw6gtf > *, .framer-H9AQb .framer-mo80eb > *, .framer-H9AQb .framer-3jso6y > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-H9AQb.framer-1mw6gtf > :first-child, .framer-H9AQb .framer-87o86t > :first-child, .framer-H9AQb .framer-mo80eb > :first-child, .framer-H9AQb .framer-3jso6y > :first-child { margin-left: 0px; } .framer-H9AQb.framer-1mw6gtf > :last-child, .framer-H9AQb .framer-87o86t > :last-child, .framer-H9AQb .framer-mo80eb > :last-child, .framer-H9AQb .framer-3jso6y > :last-child { margin-right: 0px; } .framer-H9AQb .framer-fq3tfs > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-H9AQb .framer-fq3tfs > :first-child { margin-top: 0px; } .framer-H9AQb .framer-fq3tfs > :last-child { margin-bottom: 0px; } .framer-H9AQb .framer-87o86t > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-H9AQb.framer-v-k4sf09.framer-1mw6gtf { cursor: unset; }",
    ".framer-H9AQb.framer-v-k4sf09 .framer-fq3tfs, .framer-H9AQb.framer-v-1935qq5 .framer-fq3tfs { width: 559px; }",
    ".framer-H9AQb.framer-v-k4sf09 .framer-ygxaq3, .framer-H9AQb.framer-v-h7kgjh .framer-ygxaq3 { flex: 3 0 0px; }",
    ".framer-H9AQb.framer-v-k4sf09 .framer-3jso6y { cursor: pointer; width: 559px; }",
    ".framer-H9AQb.framer-v-k4sf09 .framer-1h6kws8 { width: 536px; }",
    ".framer-H9AQb.framer-v-h7kgjh .framer-fq3tfs, .framer-H9AQb.framer-v-1xymki0 .framer-fq3tfs { width: 303px; }",
    ".framer-H9AQb.framer-v-h7kgjh .framer-3jso6y { cursor: pointer; width: 303px; }",
    ".framer-H9AQb.framer-v-h7kgjh .framer-1h6kws8 { width: 298px; }",
    '.framer-H9AQb[data-border="true"]::after, .framer-H9AQb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  pr = ce(tn, nn, "framer-H9AQb"),
  ma = pr;
pr.displayName = "baseFAQ Copy";
pr.defaultProps = { height: 172, width: 977 };
Y(pr, {
  variant: {
    options: [
      "JSgohUAK5",
      "XVXapjm4c",
      "YNhHhZH3v",
      "h9X3GLAhA",
      "Wl869cJOQ",
      "L0LTGVr5O",
    ],
    optionTitles: [
      "activeFeature",
      "inactiveFeature",
      "tablet",
      "tablet-inactiveFeature",
      "mobile",
      "mobile-inactiveFeature",
    ],
    title: "Variant",
    type: f.Enum,
  },
  MDep1szmv: { title: "Tap", type: f.EventHandler },
  KRT9l5CDd: {
    defaultValue: "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
    displayTextArea: !1,
    title: "Title",
    type: f.String,
  },
  bmhrlakRu: {
    defaultValue:
      "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
    displayTextArea: !1,
    title: "Body",
    type: f.String,
  },
});
de(
  pr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Plus Jakarta Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_m07NTxXUEKi4Rw.woff2",
          weight: "500",
        },
        {
          family: "Plus Jakarta Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var on = { KVXOcBhTx: { hover: !0 } },
  sn = [
    "LIXiX_zla",
    "KVXOcBhTx",
    "qcXuZWUji",
    "qAUueyqQe",
    "lNefugKbJ",
    "hX0QrcWUk",
  ],
  ln = "framer-Gboup",
  fn = {
    hX0QrcWUk: "framer-v-aj20h7",
    KVXOcBhTx: "framer-v-nlypnt",
    LIXiX_zla: "framer-v-p4nykz",
    lNefugKbJ: "framer-v-1hw73d5",
    qAUueyqQe: "framer-v-p69hbh",
    qcXuZWUji: "framer-v-10bwtt",
  };
function et(r, ...a) {
  let i = {};
  return a?.forEach((t) => t && Object.assign(i, r[t])), i;
}
var mn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  cn = ({ value: r, children: a }) => {
    let i = pe(T),
      t = r ?? i.transition,
      n = fe(() => ({ ...i, transition: t }), [JSON.stringify(t)]);
    return e(T.Provider, { value: n, children: a });
  },
  dn = c(s),
  pn = {
    "mobile-inactiveFeature": "hX0QrcWUk",
    "tablet-inactiveFeature": "qAUueyqQe",
    activeFeature: "LIXiX_zla",
    inactiveFeature: "KVXOcBhTx",
    mobile: "lNefugKbJ",
    tablet: "qcXuZWUji",
  },
  hn = ({ body: r, height: a, id: i, tap: t, title: n, width: d, ...m }) => {
    var k, h, l, x;
    return {
      ...m,
      bmhrlakRu:
        (k = r ?? m.bmhrlakRu) !== null && k !== void 0
          ? k
          : "AeroAI in its most basic form is a platform that facilitates the sharing of GPU components between renters and lenders. The way we do this is through our seamless and highly intuitive user DApp.",
      KRT9l5CDd:
        (h = n ?? m.KRT9l5CDd) !== null && h !== void 0
          ? h
          : "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
      MDep1szmv: t ?? m.MDep1szmv,
      variant:
        (x = (l = pn[m.variant]) !== null && l !== void 0 ? l : m.variant) !==
          null && x !== void 0
          ? x
          : "LIXiX_zla",
    };
  },
  gn = (r, a) => a.join("-") + r.layoutDependency,
  un = $(function (r, a) {
    let { activeLocale: i, setLocale: t } = me(),
      {
        style: n,
        className: d,
        layoutId: m,
        variant: k,
        MDep1szmv: h,
        KRT9l5CDd: l,
        bmhrlakRu: x,
        ...u
      } = hn(r),
      {
        baseVariant: y,
        classNames: A,
        gestureVariant: v,
        setGestureState: g,
        setVariant: C,
        variants: S,
      } = he({
        cycleOrder: sn,
        defaultVariant: "LIXiX_zla",
        enabledGestures: on,
        variant: k,
        variantClassNames: fn,
      }),
      w = gn(r, S),
      { activeVariantCallback: M, delay: J } = ye(y),
      B = M(async (...L) => {
        if ((g({ isPressed: !1 }), h && (await h(...L)) === !1)) return !1;
      }),
      j = M(async (...L) => {
        C("qcXuZWUji");
      }),
      E = M(async (...L) => {
        C("lNefugKbJ");
      }),
      G = z(null),
      U = () =>
        !!(
          v === "KVXOcBhTx-hover" ||
          ["KVXOcBhTx", "qAUueyqQe", "hX0QrcWUk"].includes(y)
        ),
      D = () =>
        !(
          v === "KVXOcBhTx-hover" ||
          ["KVXOcBhTx", "qAUueyqQe", "hX0QrcWUk"].includes(y)
        ),
      Z = le(),
      V = [],
      O = we();
    return e(ee, {
      id: m ?? Z,
      children: e(dn, {
        animate: S,
        initial: !1,
        children: e(cn, {
          value: mn,
          children: e(c.div, {
            ...u,
            className: ae(ln, ...V, "framer-p4nykz", d, A),
            "data-border": !0,
            "data-framer-name": "activeFeature",
            "data-highlight": !0,
            layoutDependency: w,
            layoutId: "LIXiX_zla",
            onHoverEnd: () => g({ isHovered: !1 }),
            onHoverStart: () => g({ isHovered: !0 }),
            onTap: B,
            onTapCancel: () => g({ isPressed: !1 }),
            onTapStart: () => g({ isPressed: !0 }),
            ref: a ?? G,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(255, 255, 255, 0.2)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              ...n,
            },
            ...et(
              {
                "KVXOcBhTx-hover": { "data-framer-name": void 0 },
                hX0QrcWUk: { "data-framer-name": "mobile-inactiveFeature" },
                KVXOcBhTx: { "data-framer-name": "inactiveFeature" },
                lNefugKbJ: { "data-framer-name": "mobile" },
                qAUueyqQe: { "data-framer-name": "tablet-inactiveFeature" },
                qcXuZWUji: { "data-framer-name": "tablet" },
              },
              y,
              v
            ),
            children: o(c.div, {
              className: "framer-1iyqu7s",
              "data-framer-name": "Text and supporting text",
              layoutDependency: w,
              layoutId: "ioBiPia8S",
              children: [
                o(c.div, {
                  className: "framer-w2mk2z",
                  "data-framer-name": "Heading",
                  layoutDependency: w,
                  layoutId: "cZJg0ZRBw",
                  children: [
                    e(p, {
                      __fromCanvasComponent: !0,
                      children: e(s, {
                        children: e(c.p, {
                          style: {
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "500",
                            "--framer-line-height": "28px",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children:
                            "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
                        }),
                      }),
                      className: "framer-pfbv4u",
                      "data-framer-name":
                        "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
                      fonts: ["Inter-Medium"],
                      layoutDependency: w,
                      layoutId: "OBp9zro1b",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "28px",
                      },
                      text: l,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    U() &&
                      e(c.div, {
                        className: "framer-1j0myk9",
                        "data-framer-name": "Icon wrap",
                        layoutDependency: w,
                        layoutId: "rbAEuCQhI",
                        children: e(c.div, {
                          className: "framer-1566xeg",
                          "data-framer-name": "plus",
                          layoutDependency: w,
                          layoutId: "S7JSVTbnJ",
                          children: e(I, {
                            className: "framer-19jya1q",
                            "data-framer-name": "Icon",
                            fill: "rgba(0,0,0,1)",
                            intrinsicHeight: 16,
                            intrinsicWidth: 17,
                            layoutDependency: w,
                            layoutId: "jMSLj_pVF",
                            svg: `<svg width="17" height="16" viewBox="-1 -1 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 0V14M0.5 7H14.5" stroke="#B1B3B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                  ],
                }),
                D() &&
                  e(c.div, {
                    className: "framer-1jjsb8u",
                    "data-framer-name": "Body",
                    layoutDependency: w,
                    layoutId: "JF07S2DeL",
                    ...et(
                      {
                        lNefugKbJ: { "data-highlight": !0, onTap: E },
                        qcXuZWUji: { "data-highlight": !0, onTap: j },
                      },
                      y,
                      v
                    ),
                    children: e(p, {
                      __fromCanvasComponent: !0,
                      children: e(s, {
                        children: e(c.p, {
                          style: {
                            "--framer-line-height": "24px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children:
                            "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
                        }),
                      }),
                      className: "framer-d3kjme",
                      "data-framer-name": "Supporting Text",
                      fonts: ["Inter"],
                      layoutDependency: w,
                      layoutId: "DtFb5IrdA",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "16px",
                      },
                      text: x,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  xn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Gboup.framer-qc9vcc, .framer-Gboup .framer-qc9vcc { display: block; }",
    ".framer-Gboup.framer-p4nykz { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px; position: relative; width: min-content; }",
    ".framer-Gboup .framer-1iyqu7s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 929px; }",
    ".framer-Gboup .framer-w2mk2z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Gboup .framer-pfbv4u { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-Gboup .framer-1j0myk9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Gboup .framer-1566xeg { flex: none; height: 24px; overflow: hidden; position: relative; width: 24px; }",
    ".framer-Gboup .framer-19jya1q { bottom: 6px; flex: none; left: 4px; position: absolute; right: 7px; top: 4px; }",
    ".framer-Gboup .framer-1jjsb8u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 938px; }",
    ".framer-Gboup .framer-d3kjme { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 938px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Gboup.framer-p4nykz, .framer-Gboup .framer-1iyqu7s, .framer-Gboup .framer-w2mk2z, .framer-Gboup .framer-1j0myk9, .framer-Gboup .framer-1jjsb8u { gap: 0px; } .framer-Gboup.framer-p4nykz > *, .framer-Gboup .framer-1j0myk9 > *, .framer-Gboup .framer-1jjsb8u > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Gboup.framer-p4nykz > :first-child, .framer-Gboup .framer-w2mk2z > :first-child, .framer-Gboup .framer-1j0myk9 > :first-child, .framer-Gboup .framer-1jjsb8u > :first-child { margin-left: 0px; } .framer-Gboup.framer-p4nykz > :last-child, .framer-Gboup .framer-w2mk2z > :last-child, .framer-Gboup .framer-1j0myk9 > :last-child, .framer-Gboup .framer-1jjsb8u > :last-child { margin-right: 0px; } .framer-Gboup .framer-1iyqu7s > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-Gboup .framer-1iyqu7s > :first-child { margin-top: 0px; } .framer-Gboup .framer-1iyqu7s > :last-child { margin-bottom: 0px; } .framer-Gboup .framer-w2mk2z > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-Gboup.framer-v-10bwtt .framer-1iyqu7s, .framer-Gboup.framer-v-p69hbh .framer-1iyqu7s { width: 559px; }",
    ".framer-Gboup.framer-v-10bwtt .framer-pfbv4u, .framer-Gboup.framer-v-1hw73d5 .framer-pfbv4u { flex: 3 0 0px; }",
    ".framer-Gboup.framer-v-10bwtt .framer-1jjsb8u { cursor: pointer; width: 559px; }",
    ".framer-Gboup.framer-v-10bwtt .framer-d3kjme { width: 536px; }",
    ".framer-Gboup.framer-v-1hw73d5 .framer-1iyqu7s, .framer-Gboup.framer-v-aj20h7 .framer-1iyqu7s { width: 303px; }",
    ".framer-Gboup.framer-v-1hw73d5 .framer-1jjsb8u { cursor: pointer; width: 303px; }",
    ".framer-Gboup.framer-v-1hw73d5 .framer-d3kjme { width: 298px; }",
    '.framer-Gboup[data-border="true"]::after, .framer-Gboup [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  hr = ce(un, xn, "framer-Gboup"),
  ca = hr;
hr.displayName = "baseFAQ Copy 3";
hr.defaultProps = { height: 148, width: 977 };
Y(hr, {
  variant: {
    options: [
      "LIXiX_zla",
      "KVXOcBhTx",
      "qcXuZWUji",
      "qAUueyqQe",
      "lNefugKbJ",
      "hX0QrcWUk",
    ],
    optionTitles: [
      "activeFeature",
      "inactiveFeature",
      "tablet",
      "tablet-inactiveFeature",
      "mobile",
      "mobile-inactiveFeature",
    ],
    title: "Variant",
    type: f.Enum,
  },
  MDep1szmv: { title: "Tap", type: f.EventHandler },
  KRT9l5CDd: {
    defaultValue: "Jak dzia\u0142a mobilna wie\u017Ca monitoruj\u0105ca?",
    displayTextArea: !1,
    title: "Title",
    type: f.String,
  },
  bmhrlakRu: {
    defaultValue:
      "AeroAI in its most basic form is a platform that facilitates the sharing of GPU components between renters and lenders. The way we do this is through our seamless and highly intuitive user DApp.",
    displayTextArea: !1,
    title: "Body",
    type: f.String,
  },
});
de(
  hr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Medium.cyrillic-ext-M4WHNGTS.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Medium.cyrillic-JVU2PANX.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Medium.greek-ext-4KCQBEIZ.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Medium.greek-DPOQGN7L.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Medium.latin-ext-J4DBSW7F.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Medium.latin-Y3IVPL46.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Medium.vietnamese-PJV76O4P.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var wn = q(ca),
  kn = q(ma),
  yn = q(rr),
  vn = [
    "dP8O4s60H",
    "GkaH7Tjo8",
    "nGc4vwwNQ",
    "EyXRhy4yB",
    "i3IlA4mnO",
    "DBtRjKGB8",
    "kPujQare7",
    "u2xUEWEuY",
    "hRvGv_JZ8",
    "GqobkDdMH",
    "XG2hxaA7g",
    "hiffRbGKl",
    "Xj6ckSw1G",
    "v1O6VbFnj",
    "D1yF86Wfs",
    "UOsl7KkRw",
    "ab1OKy8CC",
    "mF2VFqtdR",
    "RoBbNzv4a",
    "QfF_rHfQZ",
    "Mg4mr28mZ",
  ],
  bn = "framer-zpBXK",
  An = {
    ab1OKy8CC: "framer-v-c7cq9o",
    D1yF86Wfs: "framer-v-efr5hn",
    DBtRjKGB8: "framer-v-1v9opf8",
    dP8O4s60H: "framer-v-5m5gwa",
    EyXRhy4yB: "framer-v-tdcb2r",
    GkaH7Tjo8: "framer-v-wtqzfu",
    GqobkDdMH: "framer-v-11kcj6h",
    hiffRbGKl: "framer-v-1n7p29z",
    hRvGv_JZ8: "framer-v-1sd9pp3",
    i3IlA4mnO: "framer-v-1uk0hkx",
    kPujQare7: "framer-v-1s0pq90",
    mF2VFqtdR: "framer-v-napkfw",
    Mg4mr28mZ: "framer-v-11e6obl",
    nGc4vwwNQ: "framer-v-1y3mpfb",
    QfF_rHfQZ: "framer-v-l4irw4",
    RoBbNzv4a: "framer-v-1i8qxaq",
    u2xUEWEuY: "framer-v-115l6xx",
    UOsl7KkRw: "framer-v-z4cw2c",
    v1O6VbFnj: "framer-v-19lpf6s",
    XG2hxaA7g: "framer-v-zqdtbj",
    Xj6ckSw1G: "framer-v-1dla98h",
  };
function Qe(r, ...a) {
  let i = {};
  return a?.forEach((t) => t && Object.assign(i, r[t])), i;
}
var Cn = { damping: 15, delay: 0, mass: 1.1, stiffness: 174, type: "spring" },
  Ln = ({ value: r, children: a }) => {
    let i = pe(T),
      t = r ?? i.transition,
      n = fe(() => ({ ...i, transition: t }), [JSON.stringify(t)]);
    return e(T.Provider, { value: n, children: a });
  },
  En = c(s),
  Vn = {
    "Variant 12": "u2xUEWEuY",
    "Variant 13": "hRvGv_JZ8",
    "Variant 14": "GqobkDdMH",
    "Variant 15": "XG2hxaA7g",
    "Variant 16": "hiffRbGKl",
    "Variant 17": "Xj6ckSw1G",
    "Variant 18": "v1O6VbFnj",
    "Variant 19": "D1yF86Wfs",
    "Variant 20": "UOsl7KkRw",
    "Variant 21": "ab1OKy8CC",
    "Variant 22": "mF2VFqtdR",
    "Variant 23": "RoBbNzv4a",
    "Variant 24": "QfF_rHfQZ",
    "Variant 25": "Mg4mr28mZ",
    mobile: "kPujQare7",
    Q1: "dP8O4s60H",
    Q2: "GkaH7Tjo8",
    Q3: "nGc4vwwNQ",
    Q4: "EyXRhy4yB",
    Q5: "i3IlA4mnO",
    tablet: "DBtRjKGB8",
  },
  Rn = ({ height: r, id: a, width: i, ...t }) => {
    var n, d;
    return {
      ...t,
      variant:
        (d = (n = Vn[t.variant]) !== null && n !== void 0 ? n : t.variant) !==
          null && d !== void 0
          ? d
          : "dP8O4s60H",
    };
  },
  In = (r, a) => a.join("-") + r.layoutDependency,
  Mn = $(function (r, a) {
    let { activeLocale: i, setLocale: t } = me(),
      { style: n, className: d, layoutId: m, variant: k, ...h } = Rn(r),
      {
        baseVariant: l,
        classNames: x,
        gestureVariant: u,
        setGestureState: y,
        setVariant: A,
        variants: v,
      } = he({
        cycleOrder: vn,
        defaultVariant: "dP8O4s60H",
        variant: k,
        variantClassNames: An,
      }),
      g = In(r, v),
      { activeVariantCallback: C, delay: S } = ye(l),
      w = C(async (..._) => {
        A("dP8O4s60H");
      }),
      M = C(async (..._) => {
        A("DBtRjKGB8");
      }),
      J = C(async (..._) => {
        A("kPujQare7");
      }),
      B = C(async (..._) => {
        A("GkaH7Tjo8");
      }),
      j = C(async (..._) => {
        A("u2xUEWEuY");
      }),
      E = C(async (..._) => {
        A("hiffRbGKl");
      }),
      G = C(async (..._) => {
        A("nGc4vwwNQ");
      }),
      U = C(async (..._) => {
        A("hRvGv_JZ8");
      }),
      D = C(async (..._) => {
        A("Xj6ckSw1G");
      }),
      Z = C(async (..._) => {
        A("EyXRhy4yB");
      }),
      V = C(async (..._) => {
        A("GqobkDdMH");
      }),
      O = C(async (..._) => {
        A("v1O6VbFnj");
      }),
      L = C(async (..._) => {
        A("UOsl7KkRw");
      }),
      X = C(async (..._) => {
        A("ab1OKy8CC");
      }),
      Le = C(async (..._) => {
        A("mF2VFqtdR");
      }),
      Ar = C(async (..._) => {
        A("RoBbNzv4a");
      }),
      ue = C(async (..._) => {
        A("QfF_rHfQZ");
      }),
      Je = C(async (..._) => {
        A("Mg4mr28mZ");
      }),
      Cr = z(null),
      Pr = le(),
      Nr = [],
      Ne = we();
    return e(ee, {
      id: m ?? Pr,
      children: e(En, {
        animate: v,
        initial: !1,
        children: e(Ln, {
          value: Cn,
          children: e(c.div, {
            ...h,
            className: ae(bn, ...Nr, "framer-5m5gwa", d, x),
            "data-framer-name": "Q1",
            layoutDependency: g,
            layoutId: "dP8O4s60H",
            onHoverEnd: () => y({ isHovered: !1 }),
            onHoverStart: () => y({ isHovered: !0 }),
            onTap: () => y({ isPressed: !1 }),
            onTapCancel: () => y({ isPressed: !1 }),
            onTapStart: () => y({ isPressed: !0 }),
            ref: a ?? Cr,
            style: { ...n },
            ...Qe(
              {
                ab1OKy8CC: { "data-framer-name": "Variant 21" },
                D1yF86Wfs: { "data-framer-name": "Variant 19" },
                DBtRjKGB8: { "data-framer-name": "tablet" },
                EyXRhy4yB: { "data-framer-name": "Q4" },
                GkaH7Tjo8: { "data-framer-name": "Q2" },
                GqobkDdMH: { "data-framer-name": "Variant 14" },
                hiffRbGKl: { "data-framer-name": "Variant 16" },
                hRvGv_JZ8: { "data-framer-name": "Variant 13" },
                i3IlA4mnO: { "data-framer-name": "Q5" },
                kPujQare7: { "data-framer-name": "mobile" },
                mF2VFqtdR: { "data-framer-name": "Variant 22" },
                Mg4mr28mZ: { "data-framer-name": "Variant 25" },
                nGc4vwwNQ: { "data-framer-name": "Q3" },
                QfF_rHfQZ: { "data-framer-name": "Variant 24" },
                RoBbNzv4a: { "data-framer-name": "Variant 23" },
                u2xUEWEuY: { "data-framer-name": "Variant 12" },
                UOsl7KkRw: { "data-framer-name": "Variant 20" },
                v1O6VbFnj: { "data-framer-name": "Variant 18" },
                XG2hxaA7g: { "data-framer-name": "Variant 15" },
                Xj6ckSw1G: { "data-framer-name": "Variant 17" },
              },
              l,
              u
            ),
            children: o(c.div, {
              className: "framer-xlc7a1",
              layoutDependency: g,
              layoutId: "Tu_wVm0dl",
              children: [
                e(b, {
                  children: e(c.div, {
                    className: "framer-1n18phk-container",
                    layoutDependency: g,
                    layoutId: "HZk_a1XZl-container",
                    children: e(ca, {
                      bmhrlakRu:
                        "AeroAI in its most basic form is a platform that facilitates the sharing of GPU components between renters and lenders. The way we do this is through our seamless and highly intuitive user DApp.",
                      height: "100%",
                      id: "HZk_a1XZl",
                      KRT9l5CDd: "What is AeroAI?",
                      layoutId: "HZk_a1XZl",
                      variant: "LIXiX_zla",
                      width: "100%",
                      ...Qe(
                        {
                          ab1OKy8CC: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: M,
                            variant: "qAUueyqQe",
                          },
                          D1yF86Wfs: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: J,
                            variant: "hX0QrcWUk",
                          },
                          DBtRjKGB8: { MDep1szmv: M, variant: "qcXuZWUji" },
                          EyXRhy4yB: { MDep1szmv: w, variant: "KVXOcBhTx" },
                          GkaH7Tjo8: { MDep1szmv: w, variant: "KVXOcBhTx" },
                          GqobkDdMH: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: M,
                            variant: "qAUueyqQe",
                          },
                          hiffRbGKl: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: J,
                            variant: "hX0QrcWUk",
                          },
                          hRvGv_JZ8: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: M,
                            variant: "qAUueyqQe",
                          },
                          i3IlA4mnO: { MDep1szmv: w, variant: "KVXOcBhTx" },
                          kPujQare7: { MDep1szmv: J, variant: "lNefugKbJ" },
                          mF2VFqtdR: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: J,
                            variant: "hX0QrcWUk",
                          },
                          Mg4mr28mZ: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: J,
                            variant: "hX0QrcWUk",
                          },
                          nGc4vwwNQ: { MDep1szmv: w, variant: "KVXOcBhTx" },
                          QfF_rHfQZ: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: M,
                            variant: "qAUueyqQe",
                          },
                          RoBbNzv4a: { MDep1szmv: w, variant: "KVXOcBhTx" },
                          u2xUEWEuY: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: M,
                            variant: "qAUueyqQe",
                          },
                          UOsl7KkRw: { MDep1szmv: w, variant: "KVXOcBhTx" },
                          v1O6VbFnj: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: J,
                            variant: "hX0QrcWUk",
                          },
                          XG2hxaA7g: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: M,
                            variant: "qAUueyqQe",
                          },
                          Xj6ckSw1G: {
                            bmhrlakRu:
                              "AeroAI is your gateway to accessing, participating and contributing to technology derived from the evolving landscape of artificial intelligence. Alongside AI Resources we also offer cost-effective GPU solutions, allowing you to access powerful hardware without expensive upfront investments. Accurately track and forecast costs with our transparent and competitive pricing structure.",
                            MDep1szmv: J,
                            variant: "hX0QrcWUk",
                          },
                        },
                        l,
                        u
                      ),
                    }),
                  }),
                }),
                e(b, {
                  children: e(c.div, {
                    className: "framer-1tn9g98-container",
                    layoutDependency: g,
                    layoutId: "cvCTJFB8v-container",
                    children: e(ma, {
                      bmhrlakRu:
                        "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
                      height: "100%",
                      id: "cvCTJFB8v",
                      KRT9l5CDd: "How do I use the AeroAI Platform?",
                      layoutId: "cvCTJFB8v",
                      MDep1szmv: B,
                      variant: "XVXapjm4c",
                      width: "100%",
                      ...Qe(
                        {
                          ab1OKy8CC: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: j,
                            variant: "h9X3GLAhA",
                          },
                          D1yF86Wfs: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: E,
                            variant: "L0LTGVr5O",
                          },
                          DBtRjKGB8: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: j,
                            variant: "h9X3GLAhA",
                          },
                          GkaH7Tjo8: {
                            bmhrlakRu:
                              "You can use the AeroAI DApp by visiting dapp.AeroAI.network. Once here connect your wallet to begin browsing our easy-to-use and intuitive platform.",
                            MDep1szmv: void 0,
                            variant: "JSgohUAK5",
                          },
                          GqobkDdMH: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: j,
                            variant: "h9X3GLAhA",
                          },
                          hiffRbGKl: {
                            bmhrlakRu:
                              "You can use the AeroAI DApp by visiting dapp.AeroAI.network. Once here connect your wallet to begin browsing our easy-to-use and intuitive platform.",
                            MDep1szmv: void 0,
                            variant: "Wl869cJOQ",
                          },
                          hRvGv_JZ8: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: j,
                            variant: "h9X3GLAhA",
                          },
                          kPujQare7: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: E,
                            variant: "L0LTGVr5O",
                          },
                          mF2VFqtdR: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: E,
                            variant: "L0LTGVr5O",
                          },
                          Mg4mr28mZ: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: E,
                            variant: "L0LTGVr5O",
                          },
                          QfF_rHfQZ: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: j,
                            variant: "h9X3GLAhA",
                          },
                          u2xUEWEuY: {
                            bmhrlakRu:
                              "You can use the AeroAI DApp by visiting dapp.AeroAI.network. Once here connect your wallet to begin browsing our easy-to-use and intuitive platform.",
                            MDep1szmv: void 0,
                            variant: "YNhHhZH3v",
                          },
                          v1O6VbFnj: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: E,
                            variant: "L0LTGVr5O",
                          },
                          XG2hxaA7g: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: j,
                            variant: "h9X3GLAhA",
                          },
                          Xj6ckSw1G: {
                            bmhrlakRu:
                              "The way in which AeroAI operates can be broken down into 3 main stages: 1: Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes. 2: Your request is processed, leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation. 3: Once verified, your results are encrypted and returned to you ensuring security and confidentiality.",
                            MDep1szmv: E,
                            variant: "L0LTGVr5O",
                          },
                        },
                        l,
                        u
                      ),
                    }),
                  }),
                }),
                e(b, {
                  children: e(c.div, {
                    className: "framer-1hb5pdl-container",
                    layoutDependency: g,
                    layoutId: "mlQDabrVc-container",
                    children: e(rr, {
                      bmhrlakRu:
                        "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
                      height: "100%",
                      id: "mlQDabrVc",
                      KRT9l5CDd: "What can I do on the DApp?",
                      layoutId: "mlQDabrVc",
                      variant: "NYbW2vIeC",
                      wfo4J1lFz: G,
                      width: "100%",
                      ...Qe(
                        {
                          ab1OKy8CC: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: U,
                          },
                          D1yF86Wfs: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: D,
                          },
                          DBtRjKGB8: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: U,
                          },
                          GqobkDdMH: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: U,
                          },
                          hiffRbGKl: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: D,
                          },
                          hRvGv_JZ8: {
                            bmhrlakRu:
                              "Within our DApp there are multiple interfaces that facilitate the following utility: -Renting/Lending of GPU assets through our Node Network Interface -Overview of Applications/Active Jobs -$AERO Staking -Overview of individual Profile metrics ",
                            variant: "tJolGkNy4",
                            wfo4J1lFz: void 0,
                          },
                          kPujQare7: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: D,
                          },
                          mF2VFqtdR: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: D,
                          },
                          Mg4mr28mZ: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: D,
                          },
                          nGc4vwwNQ: {
                            bmhrlakRu:
                              "Within our DApp there are multiple interfaces that facilitate the following utility: -Renting/Lending of GPU assets through our Node Network Interface -Overview of Applications/Active Jobs -$AERO Staking -Overview of individual Profile metrics ",
                            variant: "wflaRPvwy",
                          },
                          QfF_rHfQZ: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: U,
                          },
                          u2xUEWEuY: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: U,
                          },
                          v1O6VbFnj: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: D,
                          },
                          XG2hxaA7g: {
                            bmhrlakRu:
                              "Users will be rewarded monthly for their participation in the $AeroAI staking pool.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: U,
                          },
                          Xj6ckSw1G: {
                            bmhrlakRu:
                              "Within our DApp there are multiple interfaces that facilitate the following utility: -Renting/Lending of GPU assets through our Node Network Interface -Overview of Applications/Active Jobs -$AERO Staking -Overview of individual Profile metrics ",
                            variant: "I4nzMF_E3",
                            wfo4J1lFz: void 0,
                          },
                        },
                        l,
                        u
                      ),
                    }),
                  }),
                }),
                e(b, {
                  ...Qe({ EyXRhy4yB: { width: "978px" } }, l, u),
                  children: e(c.div, {
                    className: "framer-sprik-container",
                    layoutDependency: g,
                    layoutId: "gBe3oh25L-container",
                    children: e(rr, {
                      bmhrlakRu:
                        "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
                      height: "100%",
                      id: "gBe3oh25L",
                      KRT9l5CDd: "When will the DApp be completed?",
                      layoutId: "gBe3oh25L",
                      variant: "NYbW2vIeC",
                      wfo4J1lFz: Z,
                      width: "100%",
                      ...Qe(
                        {
                          ab1OKy8CC: { variant: "pPUp6pmE0", wfo4J1lFz: V },
                          D1yF86Wfs: { variant: "KgvzoJXie", wfo4J1lFz: O },
                          DBtRjKGB8: { variant: "pPUp6pmE0", wfo4J1lFz: V },
                          EyXRhy4yB: {
                            bmhrlakRu:
                              "Our DApp is now officially released in its stage 1 Beta Format. You can find the DApp here: dapp.AeroAI.network",
                            style: { width: "100%" },
                            variant: "wflaRPvwy",
                          },
                          GqobkDdMH: {
                            bmhrlakRu:
                              "Our DApp is now officially released in its stage 1 Beta Format. You can find the DApp here: dapp.AeroAI.network",
                            variant: "tJolGkNy4",
                            wfo4J1lFz: void 0,
                          },
                          hiffRbGKl: { variant: "KgvzoJXie", wfo4J1lFz: O },
                          hRvGv_JZ8: { variant: "pPUp6pmE0", wfo4J1lFz: V },
                          kPujQare7: { variant: "KgvzoJXie", wfo4J1lFz: O },
                          mF2VFqtdR: { variant: "KgvzoJXie", wfo4J1lFz: O },
                          Mg4mr28mZ: { variant: "KgvzoJXie", wfo4J1lFz: O },
                          QfF_rHfQZ: { variant: "pPUp6pmE0", wfo4J1lFz: V },
                          u2xUEWEuY: { variant: "pPUp6pmE0", wfo4J1lFz: V },
                          v1O6VbFnj: {
                            bmhrlakRu:
                              "Our DApp is now officially released in its stage 1 Beta Format. You can find the DApp here: dapp.AeroAI.network",
                            variant: "I4nzMF_E3",
                            wfo4J1lFz: void 0,
                          },
                          XG2hxaA7g: { variant: "pPUp6pmE0", wfo4J1lFz: V },
                          Xj6ckSw1G: { variant: "KgvzoJXie", wfo4J1lFz: O },
                        },
                        l,
                        u
                      ),
                    }),
                  }),
                }),
                e(b, {
                  ...Qe(
                    {
                      i3IlA4mnO: { width: "978px" },
                      RoBbNzv4a: { width: "978px" },
                      UOsl7KkRw: { width: "978px" },
                    },
                    l,
                    u
                  ),
                  children: e(c.div, {
                    className: "framer-2r5ef3-container",
                    layoutDependency: g,
                    layoutId: "MFQhe8jN5-container",
                    children: e(rr, {
                      bmhrlakRu:
                        "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
                      height: "100%",
                      id: "MFQhe8jN5",
                      KRT9l5CDd: "What is the AeroVerse?",
                      layoutId: "MFQhe8jN5",
                      variant: "NYbW2vIeC",
                      wfo4J1lFz: L,
                      width: "100%",
                      ...Qe(
                        {
                          ab1OKy8CC: {
                            bmhrlakRu:
                              "The AeroVerse is a tool used to display the intricacies of our ecosystem, allowing for unique interpretation and exceedingly special marketing opportunities. You can visit the AeroVerse here:",
                            variant: "tJolGkNy4",
                            wfo4J1lFz: void 0,
                          },
                          D1yF86Wfs: {
                            bmhrlakRu:
                              "CODEN is an ERC-20 token and can be purchased on Uniswap. To buy CODEN, connect your Ethereum wallet to Uniswap, search for the CODEN token using its contract address, and swap ETH or any other available ERC-20 token for CODEN. Make sure to have enough ETH in your wallet to cover the transaction fees.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: Le,
                          },
                          DBtRjKGB8: { variant: "pPUp6pmE0", wfo4J1lFz: X },
                          GqobkDdMH: { variant: "pPUp6pmE0", wfo4J1lFz: X },
                          hiffRbGKl: { variant: "KgvzoJXie", wfo4J1lFz: Le },
                          hRvGv_JZ8: { variant: "pPUp6pmE0", wfo4J1lFz: X },
                          i3IlA4mnO: {
                            bmhrlakRu:
                              "CODEN is an ERC-20 token and can be purchased on Uniswap. To buy CODEN, connect your Ethereum wallet to Uniswap, search for the CODEN token using its contract address, and swap ETH or any other available ERC-20 token for CODEN. Make sure to have enough ETH in your wallet to cover the transaction fees.",
                            style: { width: "100%" },
                          },
                          kPujQare7: { variant: "KgvzoJXie", wfo4J1lFz: Le },
                          mF2VFqtdR: {
                            bmhrlakRu:
                              "The AeroVerse is a tool used to display the intricacies of our ecosystem, allowing for unique interpretation and exceedingly special marketing opportunities. You can visit the AeroVerse here:",
                            variant: "I4nzMF_E3",
                            wfo4J1lFz: void 0,
                          },
                          Mg4mr28mZ: {
                            bmhrlakRu:
                              "Lite nodes are a lightweight version of CODEN nodes designed for individuals who wish to participate in the CODEN network without the need for significant computational power or storage. Lite nodes allow users to contribute to the network's efficiency and earn rewards with minimal hardware requirements.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: Le,
                          },
                          QfF_rHfQZ: {
                            bmhrlakRu:
                              "Lite nodes are a lightweight version of CODEN nodes designed for individuals who wish to participate in the CODEN network without the need for significant computational power or storage. Lite nodes allow users to contribute to the network's efficiency and earn rewards with minimal hardware requirements.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: X,
                          },
                          RoBbNzv4a: {
                            bmhrlakRu:
                              "Lite nodes are a lightweight version of CODEN nodes designed for individuals who wish to participate in the CODEN network without the need for significant computational power or storage. Lite nodes allow users to contribute to the network's efficiency and earn rewards with minimal hardware requirements.",
                            style: { width: "100%" },
                          },
                          u2xUEWEuY: { variant: "pPUp6pmE0", wfo4J1lFz: X },
                          UOsl7KkRw: {
                            bmhrlakRu:
                              "The AeroVerse is a tool used to display the intricacies of our ecosystem, allowing for unique interpretation and exceedingly special marketing opportunities. You can visit the AeroVerse here:",
                            style: { width: "100%" },
                            variant: "wflaRPvwy",
                          },
                          v1O6VbFnj: { variant: "KgvzoJXie", wfo4J1lFz: Le },
                          XG2hxaA7g: {
                            bmhrlakRu:
                              "CODEN is an ERC-20 token and can be purchased on Uniswap. To buy CODEN, connect your Ethereum wallet to Uniswap, search for the CODEN token using its contract address, and swap ETH or any other available ERC-20 token for CODEN. Make sure to have enough ETH in your wallet to cover the transaction fees.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: X,
                          },
                          Xj6ckSw1G: { variant: "KgvzoJXie", wfo4J1lFz: Le },
                        },
                        l,
                        u
                      ),
                    }),
                  }),
                }),
                e(b, {
                  ...Qe(
                    {
                      i3IlA4mnO: { width: "978px" },
                      RoBbNzv4a: { width: "978px" },
                      UOsl7KkRw: { width: "978px" },
                    },
                    l,
                    u
                  ),
                  children: e(c.div, {
                    className: "framer-mgth74-container",
                    layoutDependency: g,
                    layoutId: "OXA_LNtH7-container",
                    children: e(rr, {
                      bmhrlakRu:
                        "L\xF6rem ipsum teravision lonande gigavis sor inklusive laddstolpe vinar. Nem\xF6sat Gustaf Lindstr\xF6m langen, tehidiktig: din proktig. Ulla Ek diadut\xE4gon h\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6 mh\xF6nen och h\xF6lorade. Nem\xF6sat Gustaf Lindstr\xF6m",
                      height: "100%",
                      id: "OXA_LNtH7",
                      KRT9l5CDd: "When is staking live?",
                      layoutId: "OXA_LNtH7",
                      variant: "NYbW2vIeC",
                      wfo4J1lFz: Ar,
                      width: "100%",
                      ...Qe(
                        {
                          ab1OKy8CC: {
                            bmhrlakRu:
                              "Lite nodes are a lightweight version of CODEN nodes designed for individuals who wish to participate in the CODEN network without the need for significant computational power or storage. Lite nodes allow users to contribute to the network's efficiency and earn rewards with minimal hardware requirements.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: ue,
                          },
                          D1yF86Wfs: {
                            bmhrlakRu:
                              "CODEN is an ERC-20 token and can be purchased on Uniswap. To buy CODEN, connect your Ethereum wallet to Uniswap, search for the CODEN token using its contract address, and swap ETH or any other available ERC-20 token for CODEN. Make sure to have enough ETH in your wallet to cover the transaction fees.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: Je,
                          },
                          DBtRjKGB8: { variant: "pPUp6pmE0", wfo4J1lFz: ue },
                          GqobkDdMH: { variant: "pPUp6pmE0", wfo4J1lFz: ue },
                          hiffRbGKl: { variant: "KgvzoJXie", wfo4J1lFz: Je },
                          hRvGv_JZ8: { variant: "pPUp6pmE0", wfo4J1lFz: ue },
                          i3IlA4mnO: {
                            bmhrlakRu:
                              "CODEN is an ERC-20 token and can be purchased on Uniswap. To buy CODEN, connect your Ethereum wallet to Uniswap, search for the CODEN token using its contract address, and swap ETH or any other available ERC-20 token for CODEN. Make sure to have enough ETH in your wallet to cover the transaction fees.",
                            style: { width: "100%" },
                          },
                          kPujQare7: { variant: "KgvzoJXie", wfo4J1lFz: Je },
                          mF2VFqtdR: {
                            bmhrlakRu:
                              "Lite nodes are a lightweight version of CODEN nodes designed for individuals who wish to participate in the CODEN network without the need for significant computational power or storage. Lite nodes allow users to contribute to the network's efficiency and earn rewards with minimal hardware requirements.",
                            variant: "KgvzoJXie",
                            wfo4J1lFz: Je,
                          },
                          Mg4mr28mZ: {
                            bmhrlakRu:
                              "Staking will be live within the next 2/3 Weeks. We will release a detailed description of our staking protocol and all metrics relating to your staking profile in the coming weeks.",
                            variant: "I4nzMF_E3",
                            wfo4J1lFz: void 0,
                          },
                          QfF_rHfQZ: {
                            bmhrlakRu:
                              "Staking will be live within the next 2/3 Weeks. We will release a detailed description of our staking protocol and all metrics relating to your staking profile in the coming weeks.",
                            variant: "tJolGkNy4",
                            wfo4J1lFz: void 0,
                          },
                          RoBbNzv4a: {
                            bmhrlakRu:
                              "Staking will be live within the next 2/3 Weeks. We will release a detailed description of our staking protocol and all metrics relating to your staking profile in the coming weeks.",
                            style: { width: "100%" },
                            variant: "wflaRPvwy",
                          },
                          u2xUEWEuY: { variant: "pPUp6pmE0", wfo4J1lFz: ue },
                          UOsl7KkRw: {
                            bmhrlakRu:
                              "Lite nodes are a lightweight version of CODEN nodes designed for individuals who wish to participate in the CODEN network without the need for significant computational power or storage. Lite nodes allow users to contribute to the network's efficiency and earn rewards with minimal hardware requirements.",
                            style: { width: "100%" },
                          },
                          v1O6VbFnj: { variant: "KgvzoJXie", wfo4J1lFz: Je },
                          XG2hxaA7g: {
                            bmhrlakRu:
                              "CODEN is an ERC-20 token and can be purchased on Uniswap. To buy CODEN, connect your Ethereum wallet to Uniswap, search for the CODEN token using its contract address, and swap ETH or any other available ERC-20 token for CODEN. Make sure to have enough ETH in your wallet to cover the transaction fees.",
                            variant: "pPUp6pmE0",
                            wfo4J1lFz: ue,
                          },
                          Xj6ckSw1G: { variant: "KgvzoJXie", wfo4J1lFz: Je },
                        },
                        l,
                        u
                      ),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Sn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-zpBXK.framer-9x0ntw, .framer-zpBXK .framer-9x0ntw { display: block; }",
    ".framer-zpBXK.framer-5m5gwa { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }",
    ".framer-zpBXK .framer-xlc7a1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 978px; }",
    ".framer-zpBXK .framer-1n18phk-container, .framer-zpBXK .framer-1tn9g98-container, .framer-zpBXK .framer-1hb5pdl-container, .framer-zpBXK .framer-sprik-container, .framer-zpBXK .framer-2r5ef3-container, .framer-zpBXK .framer-mgth74-container { flex: none; height: auto; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zpBXK.framer-5m5gwa, .framer-zpBXK .framer-xlc7a1 { gap: 0px; } .framer-zpBXK.framer-5m5gwa > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-zpBXK.framer-5m5gwa > :first-child, .framer-zpBXK .framer-xlc7a1 > :first-child { margin-top: 0px; } .framer-zpBXK.framer-5m5gwa > :last-child, .framer-zpBXK .framer-xlc7a1 > :last-child { margin-bottom: 0px; } .framer-zpBXK .framer-xlc7a1 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }",
    ".framer-zpBXK.framer-v-tdcb2r .framer-sprik-container, .framer-zpBXK.framer-v-1uk0hkx .framer-2r5ef3-container, .framer-zpBXK.framer-v-1uk0hkx .framer-mgth74-container, .framer-zpBXK.framer-v-z4cw2c .framer-2r5ef3-container, .framer-zpBXK.framer-v-z4cw2c .framer-mgth74-container, .framer-zpBXK.framer-v-1i8qxaq .framer-2r5ef3-container, .framer-zpBXK.framer-v-1i8qxaq .framer-mgth74-container { width: 100%; }",
    ".framer-zpBXK.framer-v-1v9opf8 .framer-xlc7a1, .framer-zpBXK.framer-v-115l6xx .framer-xlc7a1, .framer-zpBXK.framer-v-1sd9pp3 .framer-xlc7a1, .framer-zpBXK.framer-v-11kcj6h .framer-xlc7a1, .framer-zpBXK.framer-v-zqdtbj .framer-xlc7a1, .framer-zpBXK.framer-v-c7cq9o .framer-xlc7a1, .framer-zpBXK.framer-v-l4irw4 .framer-xlc7a1 { order: 0; width: min-content; }",
    ".framer-zpBXK.framer-v-1s0pq90 .framer-xlc7a1, .framer-zpBXK.framer-v-1n7p29z .framer-xlc7a1, .framer-zpBXK.framer-v-1dla98h .framer-xlc7a1, .framer-zpBXK.framer-v-19lpf6s .framer-xlc7a1, .framer-zpBXK.framer-v-efr5hn .framer-xlc7a1, .framer-zpBXK.framer-v-napkfw .framer-xlc7a1, .framer-zpBXK.framer-v-11e6obl .framer-xlc7a1 { width: min-content; }",
  ],
  gr = ce(Mn, Sn, "framer-zpBXK"),
  da = gr;
gr.displayName = "FAQ Copy";
gr.defaultProps = { height: 608, width: 978 };
Y(gr, {
  variant: {
    options: [
      "dP8O4s60H",
      "GkaH7Tjo8",
      "nGc4vwwNQ",
      "EyXRhy4yB",
      "i3IlA4mnO",
      "DBtRjKGB8",
      "kPujQare7",
      "u2xUEWEuY",
      "hRvGv_JZ8",
      "GqobkDdMH",
      "XG2hxaA7g",
      "hiffRbGKl",
      "Xj6ckSw1G",
      "v1O6VbFnj",
      "D1yF86Wfs",
      "UOsl7KkRw",
      "ab1OKy8CC",
      "mF2VFqtdR",
      "RoBbNzv4a",
      "QfF_rHfQZ",
      "Mg4mr28mZ",
    ],
    optionTitles: [
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q5",
      "tablet",
      "mobile",
      "Variant 12",
      "Variant 13",
      "Variant 14",
      "Variant 15",
      "Variant 16",
      "Variant 17",
      "Variant 18",
      "Variant 19",
      "Variant 20",
      "Variant 21",
      "Variant 22",
      "Variant 23",
      "Variant 24",
      "Variant 25",
    ],
    title: "Variant",
    type: f.Enum,
  },
});
de(gr, [{ explicitInter: !0, fonts: [] }, ...wn, ...kn, ...yn], {
  supportsExplicitInterCodegen: !0,
});
function Qn({ startingNumber: r, endingNumber: a, direction: i, style: t }) {
  let n = z(null),
    d = Be(i === "down" ? a : r),
    m = Ze(d, { damping: 200, stiffness: 1e3, from: { x: r }, to: { x: a } }),
    k = _e(n, { once: !0, margin: "-100px" });
  return (
    se(() => {
      k && d.set(i === "down" ? r : a);
    }, [d, k]),
    se(() => {
      m.onChange((h) => {
        n.current && (n.current.textContent = `${Math.round(h)}+`);
      });
    }, [m]),
    e("span", { ref: n, style: { ...t, whiteSpace: "nowrap" } })
  );
}
function ur({ startingNumber: r, endingNumber: a, direction: i, font: t }) {
  return e(Qn, {
    startingNumber: r,
    endingNumber: a,
    direction: i,
    style: {
      fontSize: t.size,
      fontWeight: t.weight,
      color: t.color,
      fontFamily: `'${t.fontFace}'`,
    },
  });
}
Y(ur, {
  startingNumber: { type: f.Number, defaultValue: 0, title: "Start from" },
  endingNumber: { type: f.Number, defaultValue: 60, title: "End at (seconds)" },
  direction: {
    type: f.Enum,
    options: ["down", "up"],
    optionTitles: ["Down", "Up"],
    defaultValue: "up",
  },
  font: {
    type: f.Object,
    controls: {
      fontFace: { type: f.String, defaultValue: "Roboto Mono" },
      size: { type: f.Number, defaultValue: 30 },
      color: { type: f.Color, defaultValue: "#000" },
      weight: {
        type: f.Enum,
        defaultValue: "bold",
        options: ["normal", "bold", "bolder", "lighter"],
      },
    },
  },
});
var xr = (r) => r;
var Jr = { ms: (r) => 1e3 * r, s: (r) => r / 1e3 };
function pa(r, a) {
  return a ? r * (1e3 / a) : 0;
}
var rt = (r, a, i) =>
    (((1 - 3 * i + 3 * a) * r + (3 * i - 6 * a)) * r + 3 * a) * r,
  zn = 1e-7,
  Jn = 12;
function jn(r, a, i, t, n) {
  let d,
    m,
    k = 0;
  do (m = a + (i - a) / 2), (d = rt(m, t, n) - r), d > 0 ? (i = m) : (a = m);
  while (Math.abs(d) > zn && ++k < Jn);
  return m;
}
function wr(r, a, i, t) {
  if (r === a && i === t) return xr;
  let n = (d) => jn(d, 0, 1, r, i);
  return (d) => (d === 0 || d === 1 ? d : rt(n(d), a, t));
}
var jl = {
  ease: wr(0.25, 0.1, 0.25, 1),
  "ease-in": wr(0.42, 0, 1, 1),
  "ease-in-out": wr(0.42, 0, 0.58, 1),
  "ease-out": wr(0, 0, 0.58, 1),
};
function at(r, a) {
  var i = {};
  for (var t in r)
    Object.prototype.hasOwnProperty.call(r, t) &&
      a.indexOf(t) < 0 &&
      (i[t] = r[t]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") {
    var n = 0;
    for (t = Object.getOwnPropertySymbols(r); n < t.length; n++)
      a.indexOf(t[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, t[n]) &&
        (i[t[n]] = r[t[n]]);
  }
  return i;
}
var ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.warning = function () {};
ar.invariant = function () {};
var Ol = ar.__esModule,
  Dl = ar.warning,
  On = ar.invariant;
var Dn = 5;
function jr(r, a, i) {
  let t = Math.max(a - Dn, 0);
  return pa(i - r(t), a - t);
}
var tr = { stiffness: 100, damping: 10, mass: 1 },
  Pn = (r = tr.stiffness, a = tr.damping, i = tr.mass) =>
    a / (2 * Math.sqrt(r * i));
function Nn(r, a, i) {
  return (r < a && i >= a) || (r > a && i <= a);
}
var ga = ({
    stiffness: r = tr.stiffness,
    damping: a = tr.damping,
    mass: i = tr.mass,
    from: t = 0,
    to: n = 1,
    velocity: d = 0,
    restSpeed: m = 2,
    restDistance: k = 0.5,
  } = {}) => {
    d = d ? Jr.s(d) : 0;
    let h = { done: !1, hasReachedTarget: !1, current: t, target: n },
      l = n - t,
      x = Math.sqrt(r / i) / 1e3,
      u = Pn(r, a, i),
      y;
    if (u < 1) {
      let A = x * Math.sqrt(1 - u * u);
      y = (v) =>
        n -
        Math.exp(-u * x * v) *
          (((u * x * l - d) / A) * Math.sin(A * v) + l * Math.cos(A * v));
    } else y = (A) => n - Math.exp(-x * A) * (l + (x * l - d) * A);
    return (A) => {
      h.current = y(A);
      let v = A === 0 ? d : jr(y, A, h.current),
        g = Math.abs(v) <= m,
        C = Math.abs(n - h.current) <= k;
      return (h.done = g && C), (h.hasReachedTarget = Nn(t, n, h.current)), h;
    };
  },
  tt = ({
    from: r = 0,
    velocity: a = 0,
    power: i = 0.8,
    decay: t = 0.325,
    bounceDamping: n,
    bounceStiffness: d,
    changeTarget: m,
    min: k,
    max: h,
    restDistance: l = 0.5,
    restSpeed: x,
  }) => {
    t = Jr.ms(t);
    let u = { hasReachedTarget: !1, done: !1, current: r, target: r },
      y = (E) => (k !== void 0 && E < k) || (h !== void 0 && E > h),
      A = (E) =>
        k === void 0
          ? h
          : h === void 0 || Math.abs(k - E) < Math.abs(h - E)
          ? k
          : h,
      v = i * a,
      g = r + v,
      C = m === void 0 ? g : m(g);
    (u.target = C), C !== g && (v = C - r);
    let S = (E) => -v * Math.exp(-E / t),
      w = (E) => C + S(E),
      M = (E) => {
        let G = S(E),
          U = w(E);
        (u.done = Math.abs(G) <= l), (u.current = u.done ? C : U);
      },
      J,
      B,
      j = (E) => {
        y(u.current) &&
          ((J = E),
          (B = ga({
            from: u.current,
            to: A(u.current),
            velocity: jr(w, E, u.current),
            damping: n,
            stiffness: d,
            restDistance: l,
            restSpeed: x,
          })));
      };
    return (
      j(0),
      (E) => {
        let G = !1;
        return (
          !B && J === void 0 && ((G = !0), M(E), j(E)),
          J !== void 0 && E > J
            ? ((u.hasReachedTarget = !0), B(E - J))
            : ((u.hasReachedTarget = !1), !G && M(E), u)
        );
      }
    );
  },
  ha = 10,
  Tn = 1e4;
function it(r) {
  let a,
    i = ha,
    t = r(0),
    n = [t.current];
  for (; !t.done && i < Tn; )
    (t = r(i)),
      n.push(t.done ? t.target : t.current),
      a === void 0 && t.hasReachedTarget && (a = i),
      (i += ha);
  let d = i - ha;
  return (
    n.length === 1 && n.push(t.current),
    { keyframes: n, duration: d / 1e3, overshootDuration: (a ?? d) / 1e3 }
  );
}
var Yn = ["", "X", "Y", "Z"],
  Kn = ["translate", "scale", "rotate", "skew"];
var nt = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (r) => r + "deg",
  },
  qn = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (r) => r + "px",
    },
    rotate: nt,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: xr },
    skew: nt,
  },
  Wn = new Map(),
  Hn = (r) => `--motion-${r}`,
  mt = ["x", "y", "z"];
Kn.forEach((r) => {
  Yn.forEach((a) => {
    mt.push(r + a), Wn.set(Hn(r + a), qn[r]);
  });
});
var hf = new Set(mt);
var ot = (r) => document.createElement("div").animate(r, { duration: 0.001 }),
  st = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        ot({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!ot({ opacity: [0, 1] }).finished,
  },
  ua = {},
  Zn = {};
for (let r in st) Zn[r] = () => (ua[r] === void 0 && (ua[r] = st[r]()), ua[r]);
function ct(r, a) {
  var i;
  return (
    typeof r == "string"
      ? a
        ? (((i = a[r]) !== null && i !== void 0) ||
            (a[r] = document.querySelectorAll(r)),
          (r = a[r]))
        : (r = document.querySelectorAll(r))
      : r instanceof Element && (r = [r]),
    Array.from(r || [])
  );
}
function dt(r) {
  let a = new WeakMap();
  return (i = {}) => {
    let t = new Map(),
      n = (m = 0, k = 100, h = 0, l = !1) => {
        let x = `${m}-${k}-${h}-${l}`;
        return (
          t.has(x) ||
            t.set(
              x,
              r(
                Object.assign(
                  {
                    from: m,
                    to: k,
                    velocity: h,
                    restSpeed: l ? 0.05 : 2,
                    restDistance: l ? 0.01 : 0.5,
                  },
                  i
                )
              )
            ),
          t.get(x)
        );
      },
      d = (m) => (a.has(m) || a.set(m, it(m)), a.get(m));
    return {
      createAnimation: (m, k, h, l, x) => {
        var u, y;
        let A,
          v = m.length;
        if (h && v <= 2 && m.every(Xn)) {
          let C = m[v - 1],
            S = v === 1 ? null : m[0],
            w = 0,
            M = 0,
            J = x?.generator;
          if (J) {
            let { animation: E, generatorStartTime: G } = x,
              U = E?.startTime || G || 0,
              D = E?.currentTime || performance.now() - U,
              Z = J(D).current;
            (M = (u = S) !== null && u !== void 0 ? u : Z),
              (v === 1 || (v === 2 && m[0] === null)) &&
                (w = jr((V) => J(V).current, D, Z));
          } else M = (y = S) !== null && y !== void 0 ? y : parseFloat(k());
          let B = n(M, C, w, l?.includes("scale")),
            j = d(B);
          (A = Object.assign(Object.assign({}, j), { easing: "linear" })),
            x &&
              ((x.generator = B), (x.generatorStartTime = performance.now()));
        } else A = { easing: "ease", duration: d(n(0, 100)).overshootDuration };
        return A;
      },
    };
  };
}
var Xn = (r) => typeof r != "string",
  gf = dt(ga),
  uf = dt(tt),
  _n = { any: 0, all: 1 };
function $n(r, a, { root: i, margin: t, amount: n = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let d = ct(r),
    m = new WeakMap(),
    k = (l) => {
      l.forEach((x) => {
        let u = m.get(x.target);
        if (x.isIntersecting !== !!u)
          if (x.isIntersecting) {
            let y = a(x);
            typeof y == "function" ? m.set(x.target, y) : h.unobserve(x.target);
          } else u && (u(x), m.delete(x.target));
      });
    },
    h = new IntersectionObserver(k, {
      root: i,
      rootMargin: t,
      threshold: typeof n == "number" ? n : _n[n],
    });
  return d.forEach((l) => h.observe(l)), () => h.disconnect();
}
var Fr = new WeakMap(),
  Oe;
function eo(r, a) {
  if (a) {
    let { inlineSize: i, blockSize: t } = a[0];
    return { width: i, height: t };
  }
  return r instanceof SVGElement && "getBBox" in r
    ? r.getBBox()
    : { width: r.offsetWidth, height: r.offsetHeight };
}
function ro({ target: r, contentRect: a, borderBoxSize: i }) {
  var t;
  (t = Fr.get(r)) === null ||
    t === void 0 ||
    t.forEach((n) => {
      n({
        target: r,
        contentSize: a,
        get size() {
          return eo(r, i);
        },
      });
    });
}
function ao(r) {
  r.forEach(ro);
}
function to() {
  typeof ResizeObserver < "u" && (Oe = new ResizeObserver(ao));
}
function io(r, a) {
  Oe || to();
  let i = ct(r);
  return (
    i.forEach((t) => {
      let n = Fr.get(t);
      n || ((n = new Set()), Fr.set(t, n)), n.add(a), Oe?.observe(t);
    }),
    () => {
      i.forEach((t) => {
        let n = Fr.get(t);
        n?.delete(a), n?.size || Oe?.unobserve(t);
      });
    }
  );
}
var Br = new Set(),
  kr;
function no() {
  (kr = () => {
    let r = { width: F.innerWidth, height: F.innerHeight },
      a = { target: F, size: r, contentSize: r };
    Br.forEach((i) => i(a));
  }),
    F.addEventListener("resize", kr);
}
function oo(r) {
  return (
    Br.add(r),
    kr || no(),
    () => {
      Br.delete(r), !Br.size && kr && (kr = void 0);
    }
  );
}
function pt(r, a) {
  return typeof r == "function" ? oo(r) : io(r, a);
}
function xa(r, a, i) {
  r.dispatchEvent(new CustomEvent(a, { detail: { originalEvent: i } }));
}
function lt(r, a, i) {
  r.dispatchEvent(new CustomEvent(a, { detail: { originalEntry: i } }));
}
var so = {
    isActive: (r) => !!r.inView,
    subscribe: (r, { enable: a, disable: i }, { inViewOptions: t = {} }) => {
      let { once: n } = t,
        d = at(t, ["once"]);
      return $n(
        r,
        (m) => {
          if ((a(), lt(r, "viewenter", m), !n))
            return (k) => {
              i(), lt(r, "viewleave", k);
            };
        },
        d
      );
    },
  },
  ft = (r, a, i) => (t) => {
    (!t.pointerType || t.pointerType === "mouse") && (i(), xa(r, a, t));
  },
  lo = {
    isActive: (r) => !!r.hover,
    subscribe: (r, { enable: a, disable: i }) => {
      let t = ft(r, "hoverstart", a),
        n = ft(r, "hoverend", i);
      return (
        r.addEventListener("pointerenter", t),
        r.addEventListener("pointerleave", n),
        () => {
          r.removeEventListener("pointerenter", t),
            r.removeEventListener("pointerleave", n);
        }
      );
    },
  },
  fo = {
    isActive: (r) => !!r.press,
    subscribe: (r, { enable: a, disable: i }) => {
      let t = (d) => {
          i(), xa(r, "pressend", d), F.removeEventListener("pointerup", t);
        },
        n = (d) => {
          a(), xa(r, "pressstart", d), F.addEventListener("pointerup", t);
        };
      return (
        r.addEventListener("pointerdown", n),
        () => {
          r.removeEventListener("pointerdown", n),
            F.removeEventListener("pointerup", t);
        }
      );
    },
  },
  mo = { inView: so, hover: lo, press: fo },
  xf = ["initial", "animate", ...Object.keys(mo), "exit"];
var Gr = () => typeof document == "object";
function co() {
  if (Gr()) {
    if (typeof document.hidden < "u") return "visibilitychange";
    if (typeof document.msHidden < "u") return "msvisibilitychange";
    if (typeof document.webkitHidden < "u") return "webkitvisibilitychange";
  }
}
function po() {
  if (Gr()) {
    if (typeof document.hidden < "u") return "hidden";
    if (typeof document.msHidden < "u") return "msHidden";
    if (typeof document.webkitHidden < "u") return "webkitHidden";
  }
}
function ht() {
  if (Gr()) return !document[po()];
}
function gt() {
  if (!Gr()) return;
  let [r, a] = Me(ht()),
    i = () => a(ht());
  return (
    se(() => {
      let t = co();
      return (
        document.addEventListener(t, i, !1),
        () => {
          document.removeEventListener(t, i);
        }
      );
    }),
    r
  );
}
function ne(r) {
  let {
      slots: a,
      startFrom: i,
      direction: t,
      effectsOptions: n,
      autoPlayControl: d,
      dragControl: m,
      alignment: k,
      gap: h,
      padding: l,
      paddingPerSide: x,
      paddingTop: u,
      paddingRight: y,
      paddingBottom: A,
      paddingLeft: v,
      itemAmount: g,
      fadeOptions: C,
      intervalControl: S,
      transitionControl: w,
      arrowOptions: M,
      borderRadius: J,
      progressOptions: B,
      style: j,
    } = r,
    {
      effectsOpacity: E,
      effectsScale: G,
      effectsRotate: U,
      effectsPerspective: D,
      effectsHover: Z,
    } = n,
    {
      fadeContent: V,
      overflow: O,
      fadeWidth: L,
      fadeInset: X,
      fadeAlpha: Le,
    } = C,
    {
      showMouseControls: Ar,
      arrowSize: ue,
      arrowRadius: Je,
      arrowFill: Cr,
      leftArrow: Pr,
      rightArrow: Nr,
      arrowShouldSpace: Ne = !0,
      arrowShouldFadeIn: _ = !1,
      arrowPosition: be,
      arrowPadding: or,
      arrowGap: Vt,
      arrowPaddingTop: Rt,
      arrowPaddingRight: It,
      arrowPaddingBottom: Mt,
      arrowPaddingLeft: St,
    } = M,
    {
      showProgressDots: Qt,
      dotSize: La,
      dotsInset: Ea,
      dotsRadius: zt,
      dotsPadding: Jt,
      dotsGap: jt,
      dotsFill: Ft,
      dotsBackground: Bt,
      dotsActiveOpacity: Gt,
      dotsOpacity: Ut,
      dotsBlur: Va,
    } = B,
    Ot = x ? `${u}px ${y}px ${A}px ${v}px` : `${l}px`,
    je = aa.current() === aa.canvas,
    Te = ea.count(a) > 0,
    P = t === "left" || t === "right",
    Lr = t === "right" || t === "bottom";
  if (!Te)
    return o("section", {
      style: ho,
      children: [
        e("div", { style: go, children: "\u2B50\uFE0F" }),
        e("p", { style: uo, children: "Connect to Content" }),
        e("p", {
          style: xo,
          children:
            "Add layers or components to make infinite auto-playing slideshows.",
        }),
      ],
    });
  let sr = z(null),
    oe = fe(() => a.map((Q) => Ta()), [a]),
    Tr = z(void 0),
    [N, Dt] = Me({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
    }),
    [Pt, Ra] = Me(!1),
    [Nt, Ia] = Me(d),
    [Tt, Ma] = Me(!1),
    [Ye, Sa] = Me(!1),
    Yr = [],
    Qa = 4;
  je && (Qa = 1);
  let za = Ya(() => {
    Wa.read(() => {
      if (Te && sr.current) {
        let Q = a.length - 1,
          Ve = P ? sr.current.offsetWidth : sr.current.offsetHeight,
          Ae = oe[0].current
            ? P
              ? oe[0].current.offsetLeft
              : oe[0].current.offsetTop
            : 0,
          He =
            (oe[Q].current
              ? P
                ? oe[Q].current.offsetLeft + oe[Q].current.offsetWidth
                : oe[Q].current.offsetTop + oe[Q].current.offsetHeight
              : 0) -
            Ae +
            h,
          Rr = oe[0].current
            ? P
              ? oe[0].current.offsetWidth
              : oe[0].current.offsetHeight
            : 0,
          _r = oe[0].current ? oe[0].current.offsetWidth : 0,
          $r = oe[0].current ? oe[0].current.offsetHeight : 0;
        Dt({
          parent: Ve,
          children: He,
          item: Rr,
          itemWidth: _r,
          itemHeight: $r,
        });
      }
    });
  }, [Te]);
  ra(() => {
    Te && za();
  }, [Te, g]);
  let Kr = z(!0);
  se(
    () =>
      pt(sr.current, ({ contentSize: Q }) => {
        !Kr.current && (Q.width || Q.height) && (za(), Sa(!0)),
          (Kr.current = !1);
      }),
    []
  ),
    se(() => {
      if (Ye) {
        let Q = setTimeout(() => Sa(!1), 500);
        return () => clearTimeout(Q);
      }
    }, [Ye]);
  let Ke = a?.length,
    Er = je ? 0 : N?.children,
    qr = N?.item + h,
    Yt = i * qr,
    [Ee, lr] = Me(i + Ke),
    [Kt, Ja] = Me(!1),
    ja = gt(),
    Fa = Lr ? 1 : -1,
    qe = Be(Er),
    Ba = P ? -i * (N?.itemWidth + h) : -i * (N?.itemHeight + h),
    Wr = () => Fa * Ee * qr,
    Hr = je
      ? 0
      : Ge(qe, (Q) => {
          let Ve = Xe(-Er, -Er * 2, Q);
          return isNaN(Ve) ? 0 : Ve;
        }),
    qt = Xe(0, Ke, Ee),
    Wt = Xe(0, -Ke, Ee);
  ra(() => {
    N?.children !== null && !Kr.current && Ye && qe.set(Wr());
  }, [N, Er, Fa, Yt, Ee, qr, Ye]);
  let Ga = () => {
      je ||
        !Te ||
        !N.parent ||
        Kt ||
        (qe.get() !== Wr() && qa(qe, Wr(), w),
        d &&
          Nt &&
          (Tr.current = setTimeout(() => {
            lr(Ee + 1), Ga();
          }, S * 1e3)));
    },
    We = (Q) => {
      lr(Lr ? Ee - Q : Ee + Q);
    },
    Ht = (Q) => {
      let Ve = Xe(0, Ke, Ee),
        Ae = Xe(0, -Ke, Ee),
        Fe = Q - Ve,
        He = Q - Math.abs(Ae);
      lr(Lr ? Ee - He : Ee + Fe);
    },
    Zt = () => {
      Ja(!0);
    },
    Xt = (Q, { offset: Ve, velocity: Ae }) => {
      Ja(!1);
      let Fe = P ? Ve.x : Ve.y,
        He = 200,
        Rr = P ? Ae.x : Ae.y,
        _r = Fe < -N.item / 2,
        $r = Fe > N.item / 2,
        li = Math.abs(Fe),
        Ir = Math.round(li / N.item),
        Pa = Ir === 0 ? 1 : Ir;
      Rr > He ? We(-Pa) : Rr < -He ? We(Pa) : (_r && We(Ir), $r && We(-Ir));
    };
  se(() => {
    if (!(!ja || Ye)) return Ga(), () => Tr.current && clearTimeout(Tr.current);
  }, [Yr, ja, Ye]);
  let _t = 0,
    Ua = `calc(${100 / g}% - ${h}px + ${h / g}px)`;
  for (let Q = 0; Q < Qa; Q++)
    Yr.push(
      ...ea.map(a, (Ve, Ae) => {
        let Fe;
        return (
          Ae === 0 && (Fe = oe[0]),
          Ae === a.length - 1 && (Fe = oe[1]),
          e(
            yo,
            {
              ref: oe[Ae],
              slideKey: Q + Ae + "lg",
              index: Q,
              width: P && g > 1 ? Ua : "100%",
              height: P ? "100%" : g > 1 ? Ua : "100%",
              size: N,
              child: Ve,
              numChildren: a?.length,
              wrappedValue: Hr,
              childCounter: _t++,
              gap: h,
              isCanvas: je,
              isHorizontal: P,
              effectsOpacity: E,
              effectsScale: G,
              effectsRotate: U,
              children: Q + Ae,
            },
            Q + Ae + "lg"
          )
        );
      })
    );
  let $t = P ? "to right" : "to bottom",
    Oa = L / 2,
    ei = 100 - L / 2,
    ri = ko(X, 0, Oa),
    ai = 100 - X,
    Zr = `linear-gradient(${$t}, rgba(0, 0, 0, ${Le}) ${ri}%, rgba(0, 0, 0, 1) ${Oa}%, rgba(0, 0, 0, 1) ${ei}%, rgba(0, 0, 0, ${Le}) ${ai}%)`,
    Xr = [],
    Vr = {};
  if (Qt) {
    for (let Q = 0; Q < a?.length; Q++)
      Xr.push(
        e(
          vo,
          {
            dotStyle: { ...Ao, width: La, height: La, backgroundColor: Ft },
            buttonStyle: wa,
            selectedOpacity: Gt,
            opacity: Ut,
            onClick: () => Ht(Q),
            wrappedIndex: qt,
            wrappedIndexInverted: Wt,
            total: Ke,
            index: Q,
            gap: jt,
            padding: Jt,
            isHorizontal: P,
            isInverted: Lr,
          },
          Q
        )
      );
    Va > 0 &&
      (Vr.backdropFilter =
        Vr.WebkitBackdropFilter =
        Vr.MozBackdropFilter =
          `blur(${Va}px)`);
  }
  let ti = m
      ? {
          drag: P ? "x" : "y",
          onDragStart: Zt,
          onDragEnd: Xt,
          dragDirectionLock: !0,
          values: { x: qe, y: qe },
          dragMomentum: !1,
        }
      : {},
    ii = be === "top-left" || be === "top-mid" || be === "top-right",
    ni = be === "bottom-left" || be === "bottom-mid" || be === "bottom-right",
    oi = be === "top-left" || be === "bottom-left",
    si = be === "top-right" || be === "bottom-right",
    Da = be === "top-mid" || be === "bottom-mid" || be === "auto";
  return o("section", {
    style: {
      ...ut,
      padding: Ot,
      WebkitMaskImage: V ? Zr : void 0,
      MozMaskImage: V ? Zr : void 0,
      maskImage: V ? Zr : void 0,
      opacity: N?.item !== null ? 1 : 0,
      userSelect: "none",
    },
    onMouseEnter: () => {
      Ra(!0), Z || Ia(!1);
    },
    onMouseLeave: () => {
      Ra(!1), Z || Ia(!0);
    },
    onMouseDown: (Q) => {
      Q.preventDefault(), Ma(!0);
    },
    onMouseUp: () => Ma(!1),
    children: [
      e("div", {
        style: {
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "inherit",
          position: "absolute",
          inset: 0,
          overflow: O ? "visible" : "hidden",
          borderRadius: J,
          userSelect: "none",
          perspective: je ? "none" : D,
        },
        children: e(c.ul, {
          ref: sr,
          ...ti,
          style: {
            ...ut,
            gap: h,
            placeItems: k,
            x: P ? (je ? Ba : Hr) : 0,
            y: P ? 0 : je ? Ba : Hr,
            flexDirection: P ? "row" : "column",
            transformStyle: U !== 0 && !je ? "preserve-3d" : void 0,
            cursor: m ? (Tt ? "grabbing" : "grab") : "auto",
            userSelect: "none",
            ...j,
          },
          children: Yr,
        }),
      }),
      o("fieldset", {
        style: { ...wo },
        "aria-label": "Slideshow pagination controls",
        className: "framer--slideshow-controls",
        children: [
          o(c.div, {
            style: {
              position: "absolute",
              display: "flex",
              flexDirection: P ? "row" : "column",
              justifyContent: Ne ? "space-between" : "center",
              gap: Ne ? "unset" : Vt,
              opacity: _ ? 0 : 1,
              alignItems: "center",
              inset: or,
              top: Ne ? or : ii ? Rt : "unset",
              left: Ne ? or : oi ? St : Da ? 0 : "unset",
              right: Ne ? or : si ? It : Da ? 0 : "unset",
              bottom: Ne ? or : ni ? Mt : "unset",
            },
            animate: _ && { opacity: Pt ? 1 : 0 },
            transition: w,
            children: [
              e(c.button, {
                type: "button",
                style: {
                  ...wa,
                  backgroundColor: Cr,
                  width: ue,
                  height: ue,
                  borderRadius: Je,
                  rotate: P ? 0 : 90,
                  display: Ar ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => We(-1),
                "aria-label": "Previous",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: e("img", {
                  width: ue,
                  height: ue,
                  src:
                    Pr ||
                    "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                  alt: "Back Arrow",
                }),
              }),
              e(c.button, {
                type: "button",
                style: {
                  ...wa,
                  backgroundColor: Cr,
                  width: ue,
                  height: ue,
                  borderRadius: Je,
                  rotate: P ? 0 : 90,
                  display: Ar ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => We(1),
                "aria-label": "Next",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: e("img", {
                  width: ue,
                  height: ue,
                  src:
                    Nr ||
                    "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                  alt: "Next Arrow",
                }),
              }),
            ],
          }),
          Xr.length > 1
            ? e("div", {
                style: {
                  ...bo,
                  left: P ? "50%" : Ea,
                  top: P ? "unset" : "50%",
                  transform: P ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: P ? "row" : "column",
                  bottom: P ? Ea : "unset",
                  borderRadius: zt,
                  backgroundColor: Bt,
                  userSelect: "none",
                  ...Vr,
                },
                children: Xr,
              })
            : null,
        ],
      }),
    ],
  });
}
ne.defaultProps = {
  direction: "left",
  dragControl: !1,
  startFrom: 0,
  itemAmount: 1,
  infinity: !0,
  gap: 10,
  padding: 10,
  autoPlayControl: !0,
  effectsOptions: {
    effectsOpacity: 1,
    effectsScale: 1,
    effectsRotate: 0,
    effectsPerspective: 1200,
    effectsHover: !0,
  },
  transitionControl: { type: "spring", stiffness: 200, damping: 40 },
  fadeOptions: {
    fadeContent: !1,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  arrowOptions: {
    showMouseControls: !0,
    arrowShouldFadeIn: !1,
    arrowShouldSpace: !0,
    arrowFill: "rgba(0,0,0,0.2)",
    arrowSize: 40,
  },
  progressOptions: { showProgressDots: !0 },
};
Y(ne, {
  slots: {
    type: f.Array,
    title: "Content",
    control: { type: f.ComponentInstance },
  },
  direction: {
    type: f.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    displaySegmentedControl: !0,
    defaultValue: ne.defaultProps.direction,
  },
  autoPlayControl: { type: f.Boolean, title: "Auto Play", defaultValue: !0 },
  intervalControl: {
    type: f.Number,
    title: "Interval",
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: !0,
    unit: "s",
    hidden: (r) => !r.autoPlayControl,
  },
  dragControl: { type: f.Boolean, title: "Draggable", defaultValue: !1 },
  startFrom: {
    type: f.Number,
    title: "Current",
    min: 0,
    max: 10,
    displayStepper: !0,
    defaultValue: ne.defaultProps.startFrom,
  },
  effectsOptions: {
    type: f.Object,
    title: "Effects",
    controls: {
      effectsOpacity: {
        type: f.Number,
        title: "Opacity",
        defaultValue: ne.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: f.Number,
        title: "Scale",
        defaultValue: ne.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: f.Number,
        title: "Perspective",
        defaultValue: ne.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: f.Number,
        title: "Rotate",
        defaultValue: ne.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: f.Boolean,
        title: "On Hover",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        defaultValue: ne.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: f.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  itemAmount: {
    type: f.Number,
    title: "Items",
    min: 1,
    max: 10,
    displayStepper: !0,
    defaultValue: ne.defaultProps.itemAmount,
  },
  gap: { type: f.Number, title: "Gap", min: 0 },
  padding: {
    title: "Padding",
    type: f.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    defaultValue: 0,
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  borderRadius: {
    type: f.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
  transitionControl: {
    type: f.Transition,
    defaultValue: ne.defaultProps.transitionControl,
    title: "Transition",
  },
  fadeOptions: {
    type: f.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: f.Boolean, title: "Fade", defaultValue: !1 },
      overflow: {
        type: f.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: f.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: f.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: f.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  arrowOptions: {
    type: f.Object,
    title: "Arrows",
    controls: {
      showMouseControls: {
        type: f.Boolean,
        title: "Show",
        defaultValue: ne.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: f.Color,
        title: "Fill",
        hidden: (r) => !r.showMouseControls,
        defaultValue: ne.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: {
        type: f.Image,
        title: "Previous",
        hidden: (r) => !r.showMouseControls,
      },
      rightArrow: {
        type: f.Image,
        title: "Next",
        hidden: (r) => !r.showMouseControls,
      },
      arrowSize: {
        type: f.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: ne.defaultProps.arrowOptions.arrowSize,
        hidden: (r) => !r.showMouseControls,
      },
      arrowRadius: {
        type: f.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (r) => !r.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: f.Boolean,
        title: "Fade In",
        defaultValue: !1,
        hidden: (r) => !r.showMouseControls,
      },
      arrowShouldSpace: {
        type: f.Boolean,
        title: "Distance",
        enabledTitle: "Space",
        disabledTitle: "Group",
        defaultValue: ne.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (r) => !r.showMouseControls,
      },
      arrowPosition: {
        type: f.Enum,
        title: "Position",
        options: [
          "auto",
          "top-left",
          "top-mid",
          "top-right",
          "bottom-left",
          "bottom-mid",
          "bottom-right",
        ],
        optionTitles: [
          "Center",
          "Top Left",
          "Top Middle",
          "Top Right",
          "Bottom Left",
          "Bottom Middle",
          "Bottom Right",
        ],
        hidden: (r) => !r.showMouseControls || r.arrowShouldSpace,
      },
      arrowPadding: {
        type: f.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (r) => !r.showMouseControls || !r.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: f.Number,
        title: "Top",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "bottom-mid" ||
          r.arrowPosition === "bottom-left" ||
          r.arrowPosition === "bottom-right",
      },
      arrowPaddingBottom: {
        type: f.Number,
        title: "Bottom",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "top-mid" ||
          r.arrowPosition === "top-left" ||
          r.arrowPosition === "top-right",
      },
      arrowPaddingRight: {
        type: f.Number,
        title: "Right",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "top-left" ||
          r.arrowPosition === "top-mid" ||
          r.arrowPosition === "bottom-left" ||
          r.arrowPosition === "bottom-mid",
      },
      arrowPaddingLeft: {
        type: f.Number,
        title: "Left",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "top-right" ||
          r.arrowPosition === "top-mid" ||
          r.arrowPosition === "bottom-right" ||
          r.arrowPosition === "bottom-mid",
      },
      arrowGap: {
        type: f.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showMouseControls || r.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: f.Object,
    title: "Dots",
    controls: {
      showProgressDots: { type: f.Boolean, title: "Show", defaultValue: !1 },
      dotSize: {
        type: f.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsInset: {
        type: f.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsGap: {
        type: f.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsPadding: {
        type: f.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsFill: {
        type: f.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBackground: {
        type: f.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsRadius: {
        type: f.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsOpacity: {
        type: f.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsActiveOpacity: {
        type: f.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBlur: {
        type: f.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
    },
  },
});
var ut = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  ho = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  go = { fontSize: 32, marginBottom: 10 },
  uo = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  xo = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: "center",
  },
  wa = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  wo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    pointerEvents: "none",
    userSelect: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  ko = (r, a, i) => Math.min(Math.max(r, a), i),
  yo = $(function (a, i) {
    var t, n;
    let {
        slideKey: d,
        width: m,
        height: k,
        child: h,
        size: l,
        gap: x,
        wrappedValue: u,
        numChildren: y,
        childCounter: A,
        isCanvas: v,
        effects: g,
        effectsOpacity: C,
        effectsScale: S,
        effectsRotate: w,
        isHorizontal: M,
        isLast: J,
        index: B,
      } = a,
      j = (l?.item + x) * A,
      E = [-l?.item, 0, l?.parent - l?.item + x, l?.parent].map((L) => L - j),
      G = !v && Ge(u, E, [-w, 0, 0, w]),
      U = !v && Ge(u, E, [w, 0, 0, -w]),
      D = !v && Ge(u, E, [C, 1, 1, C]),
      Z = !v && Ge(u, E, [S, 1, 1, S]),
      V = !v && Ge(u, E, [1, 1, 0, 0]),
      O = !v && Ge(u, (L) => L >= E[1] && L <= E[2]);
    return (
      se(() => {
        if (O)
          return O.onChange((L) => {
            var X;
            (X = i.current) === null ||
              X === void 0 ||
              X.setAttribute("aria-hidden", !L);
          });
      }, []),
      e(ee, {
        inherit: "id",
        children: e("li", {
          style: { display: "contents" },
          "aria-hidden": B !== 0,
          children: Na(
            h,
            {
              ref: i,
              key: d + "child",
              style: {
                ...((t = h.props) === null || t === void 0 ? void 0 : t.style),
                flexShrink: 0,
                userSelect: "none",
                width: m,
                height: k,
                opacity: D,
                scale: Z,
                originX: M ? V : 0.5,
                originY: M ? 0.5 : V,
                rotateY: M ? G : 0,
                rotateX: M ? 0 : U,
              },
              layoutId: h.props.layoutId
                ? h.props.layoutId + "-original-" + B
                : void 0,
            },
            (n = h.props) === null || n === void 0 ? void 0 : n.children
          ),
        }),
      })
    );
  });
function vo({
  selectedOpacity: r,
  opacity: a,
  total: i,
  index: t,
  wrappedIndex: n,
  wrappedIndexInverted: d,
  dotStyle: m,
  buttonStyle: k,
  gap: h,
  padding: l,
  isHorizontal: x,
  isInverted: u,
  ...y
}) {
  let A = n === t;
  u && (A = Math.abs(d) === t);
  let v = h / 2,
    g = !x && t > 0 ? v : l,
    C = !x && t !== i - 1 ? v : l,
    S = x && t !== i - 1 ? v : l,
    w = x && t > 0 ? v : l;
  return e("button", {
    "aria-label": `Scroll to page ${t + 1}`,
    type: "button",
    ...y,
    style: { ...k, padding: `${g}px ${S}px ${C}px ${w}px` },
    children: e(c.div, {
      style: { ...m },
      initial: !1,
      animate: { opacity: A ? r : a },
      transition: { duration: 0.3 },
    }),
  });
}
var bo = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  Ao = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
var Co = ["glH1e7neN", "BeFY_1sJw"],
  Lo = "framer-WQnVc",
  Eo = { BeFY_1sJw: "framer-v-nknf9a", glH1e7neN: "framer-v-ppdbe9" };
function xt(r, ...a) {
  let i = {};
  return a?.forEach((t) => t && Object.assign(i, r[t])), i;
}
var Vo = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ro = ({ value: r, children: a }) => {
    let i = pe(T),
      t = r ?? i.transition,
      n = fe(() => ({ ...i, transition: t }), [JSON.stringify(t)]);
    return e(T.Provider, { value: n, children: a });
  },
  Io = c(s),
  Mo = { "Variant 1": "glH1e7neN", "Variant 2": "BeFY_1sJw" },
  So = ({ height: r, id: a, link: i, title: t, width: n, ...d }) => {
    var m, k, h;
    return {
      ...d,
      b7KjVooU6: i ?? d.b7KjVooU6,
      GEEqX3ypi:
        (m = t ?? d.GEEqX3ypi) !== null && m !== void 0 ? m : "AeroAI | DApp",
      variant:
        (h = (k = Mo[d.variant]) !== null && k !== void 0 ? k : d.variant) !==
          null && h !== void 0
          ? h
          : "glH1e7neN",
    };
  },
  Qo = (r, a) => a.join("-") + r.layoutDependency,
  zo = $(function (r, a) {
    let { activeLocale: i, setLocale: t } = me(),
      {
        style: n,
        className: d,
        layoutId: m,
        variant: k,
        GEEqX3ypi: h,
        b7KjVooU6: l,
        ...x
      } = So(r),
      {
        baseVariant: u,
        classNames: y,
        gestureVariant: A,
        setGestureState: v,
        setVariant: g,
        variants: C,
      } = he({
        cycleOrder: Co,
        defaultVariant: "glH1e7neN",
        variant: k,
        variantClassNames: Eo,
      }),
      S = Qo(r, C),
      { activeVariantCallback: w, delay: M } = ye(u),
      J = w(async (...D) => {
        g("BeFY_1sJw");
      }),
      B = w(async (...D) => {
        g("glH1e7neN");
      }),
      j = z(null),
      E = le(),
      G = [],
      U = we();
    return e(ee, {
      id: m ?? E,
      children: e(Io, {
        animate: C,
        initial: !1,
        children: e(Ro, {
          value: Vo,
          children: e(xe, {
            href: l,
            openInNewTab: !0,
            children: e(c.a, {
              ...x,
              className: `${ae(Lo, ...G, "framer-ppdbe9", d, y)} framer-exhjh3`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              "data-highlight": !0,
              layoutDependency: S,
              layoutId: "glH1e7neN",
              onHoverEnd: () => v({ isHovered: !1 }),
              onHoverStart: () => v({ isHovered: !0 }),
              onMouseEnter: J,
              onTap: () => v({ isPressed: !1 }),
              onTapCancel: () => v({ isPressed: !1 }),
              onTapStart: () => v({ isPressed: !0 }),
              ref: a ?? j,
              style: {
                "--border-bottom-width": "1px",
                "--border-color": "rgba(255, 255, 255, 0.4)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.25)",
                ...n,
              },
              variants: {
                BeFY_1sJw: {
                  "--border-color": "rgb(255, 255, 255)",
                  backgroundColor: "rgb(255, 255, 255)",
                },
              },
              ...xt(
                {
                  BeFY_1sJw: {
                    "data-framer-name": "Variant 2",
                    onMouseLeave: B,
                  },
                },
                u,
                A
              ),
              children: e(p, {
                __fromCanvasComponent: !0,
                children: e(s, {
                  children: o(c.p, {
                    style: {
                      "--font-selector": "R0Y7Um9ib3RvLTUwMA==",
                      "--framer-font-family":
                        '"Roboto", "Roboto Placeholder", sans-serif',
                      "--framer-font-size": "18px",
                      "--framer-font-weight": "500",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: [
                      "AeroAI",
                      e(c.span, {
                        style: {
                          "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                          "--framer-font-weight": "300",
                        },
                        children: " | ",
                      }),
                      e(c.span, {
                        style: {
                          "--font-selector": "R0Y7Um9ib3RvLTEwMA==",
                          "--framer-font-family": '"Roboto", sans-serif',
                          "--framer-font-weight": "100",
                        },
                        children: "DApp",
                      }),
                    ],
                  }),
                }),
                className: "framer-1d90xrz",
                fonts: ["GF;Roboto-500", "GF;Roboto-300", "GF;Roboto-100"],
                layoutDependency: S,
                layoutId: "FJG6gl7Mz",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: h,
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...xt(
                  {
                    BeFY_1sJw: {
                      children: e(s, {
                        children: o(c.p, {
                          style: {
                            "--font-selector": "R0Y7Um9ib3RvLTUwMA==",
                            "--framer-font-family":
                              '"Roboto", "Roboto Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "500",
                          },
                          children: [
                            "AeroAI",
                            e(c.span, {
                              style: {
                                "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                                "--framer-font-weight": "300",
                              },
                              children: " | ",
                            }),
                            e(c.span, {
                              style: {
                                "--font-selector": "R0Y7Um9ib3RvLTEwMA==",
                                "--framer-font-family": '"Roboto", sans-serif',
                                "--framer-font-weight": "100",
                              },
                              children: "DApp",
                            }),
                          ],
                        }),
                      }),
                    },
                  },
                  u,
                  A
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Jo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-WQnVc.framer-exhjh3, .framer-WQnVc .framer-exhjh3 { display: block; }",
    ".framer-WQnVc.framer-ppdbe9 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-WQnVc .framer-1d90xrz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WQnVc.framer-ppdbe9 { gap: 0px; } .framer-WQnVc.framer-ppdbe9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-WQnVc.framer-ppdbe9 > :first-child { margin-left: 0px; } .framer-WQnVc.framer-ppdbe9 > :last-child { margin-right: 0px; } }",
    '.framer-WQnVc[data-border="true"]::after, .framer-WQnVc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  yr = ce(zo, Jo, "framer-WQnVc"),
  De = yr;
yr.displayName = "Button 1";
yr.defaultProps = { height: 41.5, width: 145.5 };
Y(yr, {
  variant: {
    options: ["glH1e7neN", "BeFY_1sJw"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: f.Enum,
  },
  GEEqX3ypi: {
    defaultValue: "AeroAI | DApp",
    displayTextArea: !1,
    title: "Title",
    type: f.String,
  },
  b7KjVooU6: { title: "Link", type: f.Link },
});
de(
  yr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vBh05IsDqlA.woff2",
          weight: "500",
        },
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5vBh05IsDqlA.woff2",
          weight: "300",
        },
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1MmgWxKKTM1K9nz.woff2",
          weight: "100",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var jo = q(oa),
  Fo = q(ve),
  Bo = ["edKwKQZUQ", "Hp1R1LjB5", "XBRAyLPcC", "aPykv3mrB", "ZYxMTVCZt"],
  Go = "framer-1kfG1",
  Uo = {
    aPykv3mrB: "framer-v-12c4zdu",
    edKwKQZUQ: "framer-v-15xsyon",
    Hp1R1LjB5: "framer-v-9lgb48",
    XBRAyLPcC: "framer-v-19qn5hm",
    ZYxMTVCZt: "framer-v-50rytg",
  };
function Pe(r, ...a) {
  let i = {};
  return a?.forEach((t) => t && Object.assign(i, r[t])), i;
}
var Oo = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Do = (r, a) => `translate(-50%, -50%) ${a}`,
  Po = ({ value: r, children: a }) => {
    let i = pe(T),
      t = r ?? i.transition,
      n = fe(() => ({ ...i, transition: t }), [JSON.stringify(t)]);
    return e(T.Provider, { value: n, children: a });
  },
  No = c(s),
  To = {
    "Variant 1": "edKwKQZUQ",
    "Variant 2": "Hp1R1LjB5",
    "Variant 3": "XBRAyLPcC",
    "Variant 4": "aPykv3mrB",
    "Variant 5": "ZYxMTVCZt",
  },
  Yo = ({ height: r, id: a, width: i, ...t }) => {
    var n, d;
    return {
      ...t,
      variant:
        (d = (n = To[t.variant]) !== null && n !== void 0 ? n : t.variant) !==
          null && d !== void 0
          ? d
          : "edKwKQZUQ",
    };
  },
  Ko = (r, a) => a.join("-") + r.layoutDependency,
  qo = $(function (r, a) {
    let { activeLocale: i, setLocale: t } = me(),
      { style: n, className: d, layoutId: m, variant: k, ...h } = Yo(r),
      {
        baseVariant: l,
        classNames: x,
        gestureVariant: u,
        setGestureState: y,
        setVariant: A,
        variants: v,
      } = he({
        cycleOrder: Bo,
        defaultVariant: "edKwKQZUQ",
        variant: k,
        variantClassNames: Uo,
      }),
      g = Ko(r, v),
      { activeVariantCallback: C, delay: S } = ye(l),
      w = C(async (...L) => {
        await S(() => A("XBRAyLPcC"), 300);
      }),
      M = C(async (...L) => {
        A("aPykv3mrB");
      }),
      J = C(async (...L) => {
        A("XBRAyLPcC");
      });
    Qr(l, { ZYxMTVCZt: w });
    let B = z(null),
      j = () => !!["XBRAyLPcC", "aPykv3mrB", "ZYxMTVCZt"].includes(l),
      E = Mr(),
      G = () => l === "XBRAyLPcC",
      U = () => l === "ZYxMTVCZt",
      D = () => l === "aPykv3mrB",
      Z = le(),
      V = [],
      O = we();
    return e(ee, {
      id: m ?? Z,
      children: e(No, {
        animate: v,
        initial: !1,
        children: e(Po, {
          value: Oo,
          children: e(c.div, {
            ...h,
            className: ae(Go, ...V, "framer-15xsyon", d, x),
            "data-framer-name": "Variant 1",
            layoutDependency: g,
            layoutId: "edKwKQZUQ",
            onHoverEnd: () => y({ isHovered: !1 }),
            onHoverStart: () => y({ isHovered: !0 }),
            onTap: () => y({ isPressed: !1 }),
            onTapCancel: () => y({ isPressed: !1 }),
            onTapStart: () => y({ isPressed: !0 }),
            ref: a ?? B,
            style: {
              backgroundColor: "rgba(0, 0, 0, 0)",
              boxShadow: "none",
              ...n,
            },
            variants: {
              aPykv3mrB: {
                background:
                  "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
              },
              Hp1R1LjB5: {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                boxShadow: "0px 2px 2px 0px rgba(255, 255, 255, 0.1)",
              },
              XBRAyLPcC: {
                background:
                  "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
              },
              ZYxMTVCZt: {
                background:
                  "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
              },
            },
            ...Pe(
              {
                aPykv3mrB: { "data-framer-name": "Variant 4" },
                Hp1R1LjB5: { "data-framer-name": "Variant 2" },
                XBRAyLPcC: { "data-framer-name": "Variant 3" },
                ZYxMTVCZt: {
                  "data-framer-name": "Variant 5",
                  "data-highlight": !0,
                },
              },
              l,
              u
            ),
            children: o(c.div, {
              className: "framer-11d4tkf",
              layoutDependency: g,
              layoutId: "DlGiSWrLo",
              children: [
                o(c.div, {
                  className: "framer-1btkyyh",
                  layoutDependency: g,
                  layoutId: "IAOKYlFjq",
                  children: [
                    o(c.div, {
                      className: "framer-1152bgi",
                      layoutDependency: g,
                      layoutId: "b4rmzZz19",
                      children: [
                        e(re, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 312.5,
                            intrinsicWidth: 312.5,
                            pixelHeight: 625,
                            pixelWidth: 625,
                            sizes: "30px",
                            src: "https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png?scale-down-to=512",
                            srcSet:
                              "https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png?scale-down-to=512 512w,https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png 625w",
                          },
                          className: "framer-diaxg3",
                          "data-framer-name": "image",
                          layoutDependency: g,
                          layoutId: "lN1vQ4fxW",
                        }),
                        e(p, {
                          __fromCanvasComponent: !0,
                          children: e(s, {
                            children: e(c.p, {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                "--framer-font-family":
                                  '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-line-height": "0.8em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                              },
                              children: "AeroAI",
                            }),
                          }),
                          className: "framer-hbt5sw",
                          fonts: ["CUSTOM;Square Pixel7 Regular"],
                          layoutDependency: g,
                          layoutId: "Rb_imvJRd",
                          style: {
                            "--extracted-r6o4lv": "rgb(255, 255, 255)",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(p, {
                          __fromCanvasComponent: !0,
                          children: e(s, {
                            children: e(c.p, {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                "--framer-font-family":
                                  '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-line-height": "0.8em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))",
                              },
                              children: "Network",
                            }),
                          }),
                          className: "framer-s7fw3e",
                          fonts: ["CUSTOM;Square Pixel7 Regular"],
                          layoutDependency: g,
                          layoutId: "cmEoiGYCT",
                          style: {
                            "--extracted-r6o4lv": "rgba(255, 255, 255, 0.7)",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    j() &&
                      e(b, {
                        children: e(c.div, {
                          className: "framer-5mo9ld-container",
                          layoutDependency: g,
                          layoutId: "KhWth4YOD-container",
                          children: e(oa, {
                            color: "rgb(255, 255, 255)",
                            height: "100%",
                            iconSearch: "Home",
                            iconSelection: "Menu",
                            id: "KhWth4YOD",
                            layoutId: "KhWth4YOD",
                            mirrored: !1,
                            selectByList: !0,
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                            ...Pe(
                              {
                                aPykv3mrB: {
                                  iconSelection: "MenuScale",
                                  onClick: J,
                                },
                                XBRAyLPcC: { onClick: M },
                                ZYxMTVCZt: { onClick: void 0 },
                              },
                              l,
                              u
                            ),
                          }),
                        }),
                      }),
                  ],
                }),
                o(c.div, {
                  className: "framer-c1scwn",
                  layoutDependency: g,
                  layoutId: "damrSfHMB",
                  style: {
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  },
                  transformTemplate: Do,
                  ...Pe(
                    {
                      aPykv3mrB: { transformTemplate: void 0 },
                      XBRAyLPcC: { transformTemplate: void 0 },
                      ZYxMTVCZt: { transformTemplate: void 0 },
                    },
                    l,
                    u
                  ),
                  children: [
                    e(ke, {
                      links: [
                        {
                          href: { hash: ":fc82TyoDm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":fc82TyoDm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":fc82TyoDm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":fc82TyoDm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":fc82TyoDm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (L) =>
                        e(b, {
                          children: e(c.div, {
                            className: "framer-18r3ksp-container",
                            layoutDependency: g,
                            layoutId: "VyrOMnXic-container",
                            children: e(ve, {
                              eFwAMUY6Q: 16,
                              EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                              height: "100%",
                              hF2LFP6Lw: L[0],
                              id: "VyrOMnXic",
                              layoutId: "VyrOMnXic",
                              UOnHvg9Us: "Ecosystem",
                              variant: "QaXuD7I3S",
                              width: "100%",
                              ...Pe(
                                {
                                  aPykv3mrB: {
                                    EiHfMDUbH: "rgb(255, 255, 255)",
                                    hF2LFP6Lw: L[3],
                                  },
                                  Hp1R1LjB5: { hF2LFP6Lw: L[1] },
                                  XBRAyLPcC: { hF2LFP6Lw: L[2] },
                                  ZYxMTVCZt: { hF2LFP6Lw: L[4] },
                                },
                                l,
                                u
                              ),
                            }),
                          }),
                        }),
                    }),
                    e(c.div, {
                      className: "framer-100wpnl",
                      layoutDependency: g,
                      layoutId: "KUmpxQPKc",
                      style: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                    }),
                    e(ke, {
                      links: [
                        {
                          href: { hash: ":gkm8Wl_5r", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":gkm8Wl_5r", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":gkm8Wl_5r", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":gkm8Wl_5r", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":gkm8Wl_5r", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (L) =>
                        e(b, {
                          children: e(c.div, {
                            className: "framer-12meg3c-container",
                            layoutDependency: g,
                            layoutId: "Z8fptbUSu-container",
                            children: e(ve, {
                              eFwAMUY6Q: 16,
                              EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                              height: "100%",
                              hF2LFP6Lw: L[0],
                              id: "Z8fptbUSu",
                              layoutId: "Z8fptbUSu",
                              UOnHvg9Us: "Utility",
                              variant: "QaXuD7I3S",
                              width: "100%",
                              ...Pe(
                                {
                                  aPykv3mrB: {
                                    EiHfMDUbH: "rgb(255, 255, 255)",
                                    hF2LFP6Lw: L[3],
                                  },
                                  Hp1R1LjB5: { hF2LFP6Lw: L[1] },
                                  XBRAyLPcC: { hF2LFP6Lw: L[2] },
                                  ZYxMTVCZt: { hF2LFP6Lw: L[4] },
                                },
                                l,
                                u
                              ),
                            }),
                          }),
                        }),
                    }),
                    e(c.div, {
                      className: "framer-2gazac",
                      layoutDependency: g,
                      layoutId: "z2bY041Zp",
                      style: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                    }),
                    G() &&
                      e(c.div, {
                        className: "framer-14hjifq",
                        layoutDependency: g,
                        layoutId: "UFmjgmfo7",
                        style: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                      }),
                    e(ke, {
                      links: [
                        {
                          href: { hash: ":R7c8lrMDK", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":R7c8lrMDK", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":R7c8lrMDK", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":R7c8lrMDK", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":R7c8lrMDK", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (L) =>
                        e(b, {
                          children: e(c.div, {
                            className: "framer-vxjf0e-container",
                            layoutDependency: g,
                            layoutId: "kmQpaqlmd-container",
                            children: e(ve, {
                              eFwAMUY6Q: 16,
                              EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                              height: "100%",
                              hF2LFP6Lw: L[0],
                              id: "kmQpaqlmd",
                              layoutId: "kmQpaqlmd",
                              style: { height: "100%" },
                              UOnHvg9Us: "Nodes",
                              variant: "QaXuD7I3S",
                              width: "100%",
                              ...Pe(
                                {
                                  aPykv3mrB: {
                                    EiHfMDUbH: "rgb(255, 255, 255)",
                                    hF2LFP6Lw: L[3],
                                  },
                                  Hp1R1LjB5: { hF2LFP6Lw: L[1] },
                                  XBRAyLPcC: { hF2LFP6Lw: L[2] },
                                  ZYxMTVCZt: { hF2LFP6Lw: L[4] },
                                },
                                l,
                                u
                              ),
                            }),
                          }),
                        }),
                    }),
                    U() &&
                      e(c.div, {
                        className: "framer-cxb99x",
                        layoutDependency: g,
                        layoutId: "mpzelJulK",
                        style: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                      }),
                    e(ke, {
                      links: [
                        {
                          href: { hash: ":Njp9BPuNm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":Njp9BPuNm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":Njp9BPuNm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":Njp9BPuNm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":Njp9BPuNm", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (L) =>
                        e(b, {
                          children: e(c.div, {
                            className: "framer-6q1emg-container",
                            layoutDependency: g,
                            layoutId: "pUxyMvLWz-container",
                            children: e(ve, {
                              eFwAMUY6Q: 16,
                              EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                              height: "100%",
                              hF2LFP6Lw: L[0],
                              id: "pUxyMvLWz",
                              layoutId: "pUxyMvLWz",
                              style: { height: "100%" },
                              UOnHvg9Us: "Roadmap",
                              variant: "QaXuD7I3S",
                              width: "100%",
                              ...Pe(
                                {
                                  aPykv3mrB: { hF2LFP6Lw: L[3] },
                                  Hp1R1LjB5: { hF2LFP6Lw: L[1] },
                                  XBRAyLPcC: { hF2LFP6Lw: L[2] },
                                  ZYxMTVCZt: { hF2LFP6Lw: L[4] },
                                },
                                l,
                                u
                              ),
                            }),
                          }),
                        }),
                    }),
                    e(c.div, {
                      className: "framer-96s89q",
                      layoutDependency: g,
                      layoutId: "tVTiYcESo",
                      style: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                    }),
                    e(ke, {
                      links: [
                        {
                          href: { hash: ":CnEn2_p1q", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":CnEn2_p1q", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":CnEn2_p1q", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":CnEn2_p1q", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: ":CnEn2_p1q", webPageId: "mU9wW70pd" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (L) =>
                        e(b, {
                          children: e(c.div, {
                            className: "framer-4wftrx-container",
                            layoutDependency: g,
                            layoutId: "v4bTaOHuM-container",
                            children: e(ve, {
                              eFwAMUY6Q: 16,
                              EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                              height: "100%",
                              hF2LFP6Lw: L[0],
                              id: "v4bTaOHuM",
                              layoutId: "v4bTaOHuM",
                              UOnHvg9Us: "FAQ",
                              variant: "QaXuD7I3S",
                              width: "100%",
                              ...Pe(
                                {
                                  aPykv3mrB: {
                                    EiHfMDUbH: "rgb(255, 255, 255)",
                                    hF2LFP6Lw: L[3],
                                  },
                                  Hp1R1LjB5: { hF2LFP6Lw: L[1] },
                                  XBRAyLPcC: { hF2LFP6Lw: L[2] },
                                  ZYxMTVCZt: { hF2LFP6Lw: L[4] },
                                },
                                l,
                                u
                              ),
                            }),
                          }),
                        }),
                    }),
                    D() &&
                      e(c.div, {
                        className: "framer-f5q1i7",
                        layoutDependency: g,
                        layoutId: "QCPJlV0T3",
                        style: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                      }),
                  ],
                }),
                o(c.div, {
                  className: "framer-1a0osu4",
                  layoutDependency: g,
                  layoutId: "txZDVibEb",
                  children: [
                    o(c.div, {
                      className: "framer-1sj2u41",
                      layoutDependency: g,
                      layoutId: "c8xP7B5VV",
                      children: [
                        e(xe, {
                          href: "https://t.me/",
                          children: e(I, {
                            as: "a",
                            className: "framer-1vb7akj framer-ooxz8l",
                            "data-framer-name": "graphic",
                            fill: "rgb(255, 255, 255)",
                            intrinsicHeight: 24,
                            intrinsicWidth: 24,
                            layoutDependency: g,
                            layoutId: "ShUHUqiY_",
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.114 9.291c.552-.552 1.1-1.84-1.2-.276a395.806 395.806 0 0 1-6.489 4.372 2.7 2.7 0 0 1-2.117.046c-1.38-.414-2.991-.966-2.991-.966s-1.1-.691.783-1.427c0 0 7.961-3.267 10.722-4.418 1.058-.46 4.647-1.932 4.647-1.932s1.657-.645 1.519.92c-.046.644-.414 2.9-.782 5.338-.553 3.451-1.151 7.225-1.151 7.225s-.092 1.058-.874 1.242a3.787 3.787 0 0 1-2.3-.828c-.184-.138-3.451-2.209-4.648-3.221a.872.872 0 0 1 .046-1.473 169.31 169.31 0 0 0 4.835-4.602Z"/></svg>',
                            withExternalLayout: !0,
                          }),
                        }),
                        e(xe, {
                          href: "https://twitter.com/",
                          children: e(I, {
                            as: "a",
                            className: "framer-hqjtvk framer-ooxz8l",
                            "data-framer-name": "graphic",
                            layout: "position",
                            layoutDependency: g,
                            layoutId: "spB0Jgr1m",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 6.887 5 L 7.88 5 C 8.918 5 9.437 5 9.877 5.233 C 10.316 5.466 10.607 5.895 11.19 6.754 L 11.19 6.754 L 18.44 17.439 C 18.906 18.125 19.14 18.469 18.998 18.734 C 18.858 19 18.443 19 17.613 19 L 16.62 19 C 15.582 19 15.063 19 14.623 18.767 C 14.184 18.534 13.893 18.105 13.31 17.246 L 6.06 6.562 C 5.594 5.875 5.36 5.532 5.502 5.266 C 5.642 5 6.057 5 6.887 5 Z M 16.75 5.5 L 14.5 8.2 M 6 18.4 L 9.114 14.663" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                            svgContentId: 11067205176,
                            withExternalLayout: !0,
                          }),
                        }),
                        e(xe, {
                          href: "https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000",
                          children: e(I, {
                            as: "a",
                            className: "framer-lf72k framer-ooxz8l",
                            "data-framer-name": "graphic",
                            fill: "black",
                            intrinsicHeight: 445,
                            intrinsicWidth: 388,
                            layoutDependency: g,
                            layoutId: "OHjDFTocf",
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="388" height="445"><image width="388" height="445" xlink:href="data:img/png;base64,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"/></svg>',
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    e(c.div, {
                      className: "framer-fjyap5",
                      layoutDependency: g,
                      layoutId: "GfLL8xw4g",
                      style: {
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                      },
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Wo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-1kfG1.framer-ooxz8l, .framer-1kfG1 .framer-ooxz8l { display: block; }",
    ".framer-1kfG1.framer-15xsyon { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 1200px; }",
    ".framer-1kfG1 .framer-11d4tkf { flex: 1 0 0px; height: 100%; max-width: 1200px; overflow: visible; position: relative; width: 1px; }",
    ".framer-1kfG1 .framer-1btkyyh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: calc(50.00000000000002% - 60px / 2); width: 250px; }",
    ".framer-1kfG1 .framer-1152bgi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 250px; }",
    ".framer-1kfG1 .framer-diaxg3 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: visible; position: relative; width: 30px; }",
    ".framer-1kfG1 .framer-hbt5sw, .framer-1kfG1 .framer-s7fw3e { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-1kfG1 .framer-5mo9ld-container { flex: none; height: 60px; position: relative; width: 40px; }",
    ".framer-1kfG1 .framer-c1scwn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; left: 50%; overflow: hidden; padding: 10px 20px 10px 20px; position: absolute; top: 50%; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-1kfG1 .framer-18r3ksp-container, .framer-1kfG1 .framer-12meg3c-container, .framer-1kfG1 .framer-4wftrx-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-1kfG1 .framer-100wpnl, .framer-1kfG1 .framer-2gazac, .framer-1kfG1 .framer-96s89q { flex: none; height: 20px; overflow: hidden; position: relative; width: 1px; }",
    ".framer-1kfG1 .framer-14hjifq, .framer-1kfG1 .framer-cxb99x, .framer-1kfG1 .framer-f5q1i7 { flex: none; height: 1px; overflow: hidden; position: relative; width: 100px; }",
    ".framer-1kfG1 .framer-vxjf0e-container, .framer-1kfG1 .framer-6q1emg-container { flex: none; height: 29px; position: relative; width: auto; }",
    ".framer-1kfG1 .framer-1a0osu4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: calc(50.00000000000002% - 60px / 2); width: 250px; }",
    ".framer-1kfG1 .framer-1sj2u41 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-1kfG1 .framer-1vb7akj { aspect-ratio: 1 / 1; flex: none; height: 24px; position: relative; text-decoration: none; width: var(--framer-aspect-ratio-supported, 24px); }",
    ".framer-1kfG1 .framer-hqjtvk { flex: none; height: 24px; position: relative; text-decoration: none; width: 24px; }",
    ".framer-1kfG1 .framer-lf72k { aspect-ratio: 0.8719101123595505 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; text-decoration: none; width: 16px; }",
    ".framer-1kfG1 .framer-fjyap5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1kfG1.framer-15xsyon, .framer-1kfG1 .framer-1btkyyh, .framer-1kfG1 .framer-1152bgi, .framer-1kfG1 .framer-c1scwn, .framer-1kfG1 .framer-1a0osu4, .framer-1kfG1 .framer-1sj2u41, .framer-1kfG1 .framer-fjyap5 { gap: 0px; } .framer-1kfG1.framer-15xsyon > *, .framer-1kfG1 .framer-1btkyyh > *, .framer-1kfG1 .framer-1152bgi > *, .framer-1kfG1 .framer-1a0osu4 > *, .framer-1kfG1 .framer-1sj2u41 > *, .framer-1kfG1 .framer-fjyap5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1kfG1.framer-15xsyon > :first-child, .framer-1kfG1 .framer-1btkyyh > :first-child, .framer-1kfG1 .framer-1152bgi > :first-child, .framer-1kfG1 .framer-c1scwn > :first-child, .framer-1kfG1 .framer-1a0osu4 > :first-child, .framer-1kfG1 .framer-1sj2u41 > :first-child, .framer-1kfG1 .framer-fjyap5 > :first-child { margin-left: 0px; } .framer-1kfG1.framer-15xsyon > :last-child, .framer-1kfG1 .framer-1btkyyh > :last-child, .framer-1kfG1 .framer-1152bgi > :last-child, .framer-1kfG1 .framer-c1scwn > :last-child, .framer-1kfG1 .framer-1a0osu4 > :last-child, .framer-1kfG1 .framer-1sj2u41 > :last-child, .framer-1kfG1 .framer-fjyap5 > :last-child { margin-right: 0px; } .framer-1kfG1 .framer-c1scwn > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }",
    ".framer-1kfG1.framer-v-9lgb48.framer-15xsyon { height: 70px; }",
    ".framer-1kfG1.framer-v-19qn5hm.framer-15xsyon, .framer-1kfG1.framer-v-50rytg.framer-15xsyon { flex-direction: column; height: 90px; justify-content: flex-start; padding: 20px 20px 70px 20px; width: 390px; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-11d4tkf, .framer-1kfG1.framer-v-12c4zdu .framer-11d4tkf, .framer-1kfG1.framer-v-50rytg .framer-11d4tkf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; width: 100%; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-1btkyyh, .framer-1kfG1.framer-v-12c4zdu .framer-1btkyyh, .framer-1kfG1.framer-v-50rytg .framer-1btkyyh { gap: unset; justify-content: space-between; left: unset; position: relative; top: unset; width: 100%; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-c1scwn, .framer-1kfG1.framer-v-12c4zdu .framer-c1scwn, .framer-1kfG1.framer-v-50rytg .framer-c1scwn { flex-direction: column; gap: 10px; left: unset; position: relative; top: unset; width: 100%; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-18r3ksp-container, .framer-1kfG1.framer-v-12c4zdu .framer-18r3ksp-container { order: 0; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-100wpnl, .framer-1kfG1.framer-v-12c4zdu .framer-100wpnl { height: 1px; order: 1; width: 100px; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-12meg3c-container, .framer-1kfG1.framer-v-12c4zdu .framer-12meg3c-container { order: 2; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-2gazac, .framer-1kfG1.framer-v-12c4zdu .framer-2gazac { height: 1px; order: 3; width: 100px; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-14hjifq, .framer-1kfG1.framer-v-12c4zdu .framer-vxjf0e-container { order: 5; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-vxjf0e-container { order: 4; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-6q1emg-container, .framer-1kfG1.framer-v-12c4zdu .framer-f5q1i7 { order: 7; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-96s89q { height: 1px; order: 8; width: 100px; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-4wftrx-container { order: 9; }",
    ".framer-1kfG1.framer-v-19qn5hm .framer-1a0osu4, .framer-1kfG1.framer-v-12c4zdu .framer-1a0osu4, .framer-1kfG1.framer-v-50rytg .framer-1a0osu4 { height: auto; position: relative; right: unset; top: unset; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1kfG1.framer-v-19qn5hm.framer-15xsyon, .framer-1kfG1.framer-v-19qn5hm .framer-11d4tkf, .framer-1kfG1.framer-v-19qn5hm .framer-1btkyyh, .framer-1kfG1.framer-v-19qn5hm .framer-c1scwn { gap: 0px; } .framer-1kfG1.framer-v-19qn5hm.framer-15xsyon > *, .framer-1kfG1.framer-v-19qn5hm .framer-11d4tkf > *, .framer-1kfG1.framer-v-19qn5hm .framer-c1scwn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-1kfG1.framer-v-19qn5hm.framer-15xsyon > :first-child, .framer-1kfG1.framer-v-19qn5hm .framer-11d4tkf > :first-child, .framer-1kfG1.framer-v-19qn5hm .framer-c1scwn > :first-child { margin-top: 0px; } .framer-1kfG1.framer-v-19qn5hm.framer-15xsyon > :last-child, .framer-1kfG1.framer-v-19qn5hm .framer-11d4tkf > :last-child, .framer-1kfG1.framer-v-19qn5hm .framer-c1scwn > :last-child { margin-bottom: 0px; } .framer-1kfG1.framer-v-19qn5hm .framer-1btkyyh > *, .framer-1kfG1.framer-v-19qn5hm .framer-1btkyyh > :first-child, .framer-1kfG1.framer-v-19qn5hm .framer-1btkyyh > :last-child { margin: 0px; } }",
    ".framer-1kfG1.framer-v-12c4zdu.framer-15xsyon { flex-direction: column; height: auto; justify-content: flex-start; padding: 20px 20px 70px 20px; width: 390px; }",
    ".framer-1kfG1.framer-v-12c4zdu .framer-6q1emg-container { order: 8; }",
    ".framer-1kfG1.framer-v-12c4zdu .framer-96s89q { height: 1px; order: 9; width: 100px; }",
    ".framer-1kfG1.framer-v-12c4zdu .framer-4wftrx-container { order: 10; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1kfG1.framer-v-12c4zdu.framer-15xsyon, .framer-1kfG1.framer-v-12c4zdu .framer-11d4tkf, .framer-1kfG1.framer-v-12c4zdu .framer-1btkyyh, .framer-1kfG1.framer-v-12c4zdu .framer-c1scwn { gap: 0px; } .framer-1kfG1.framer-v-12c4zdu.framer-15xsyon > *, .framer-1kfG1.framer-v-12c4zdu .framer-11d4tkf > *, .framer-1kfG1.framer-v-12c4zdu .framer-c1scwn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-1kfG1.framer-v-12c4zdu.framer-15xsyon > :first-child, .framer-1kfG1.framer-v-12c4zdu .framer-11d4tkf > :first-child, .framer-1kfG1.framer-v-12c4zdu .framer-c1scwn > :first-child { margin-top: 0px; } .framer-1kfG1.framer-v-12c4zdu.framer-15xsyon > :last-child, .framer-1kfG1.framer-v-12c4zdu .framer-11d4tkf > :last-child, .framer-1kfG1.framer-v-12c4zdu .framer-c1scwn > :last-child { margin-bottom: 0px; } .framer-1kfG1.framer-v-12c4zdu .framer-1btkyyh > *, .framer-1kfG1.framer-v-12c4zdu .framer-1btkyyh > :first-child, .framer-1kfG1.framer-v-12c4zdu .framer-1btkyyh > :last-child { margin: 0px; } }",
    ".framer-1kfG1.framer-v-50rytg .framer-100wpnl, .framer-1kfG1.framer-v-50rytg .framer-2gazac, .framer-1kfG1.framer-v-50rytg .framer-96s89q { height: 1px; width: 100px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1kfG1.framer-v-50rytg.framer-15xsyon, .framer-1kfG1.framer-v-50rytg .framer-11d4tkf, .framer-1kfG1.framer-v-50rytg .framer-1btkyyh, .framer-1kfG1.framer-v-50rytg .framer-c1scwn { gap: 0px; } .framer-1kfG1.framer-v-50rytg.framer-15xsyon > *, .framer-1kfG1.framer-v-50rytg .framer-11d4tkf > *, .framer-1kfG1.framer-v-50rytg .framer-c1scwn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-1kfG1.framer-v-50rytg.framer-15xsyon > :first-child, .framer-1kfG1.framer-v-50rytg .framer-11d4tkf > :first-child, .framer-1kfG1.framer-v-50rytg .framer-c1scwn > :first-child { margin-top: 0px; } .framer-1kfG1.framer-v-50rytg.framer-15xsyon > :last-child, .framer-1kfG1.framer-v-50rytg .framer-11d4tkf > :last-child, .framer-1kfG1.framer-v-50rytg .framer-c1scwn > :last-child { margin-bottom: 0px; } .framer-1kfG1.framer-v-50rytg .framer-1btkyyh > *, .framer-1kfG1.framer-v-50rytg .framer-1btkyyh > :first-child, .framer-1kfG1.framer-v-50rytg .framer-1btkyyh > :last-child { margin: 0px; } }",
  ],
  vr = ce(qo, Wo, "framer-1kfG1"),
  ka = vr;
vr.displayName = "Header";
vr.defaultProps = { height: 100, width: 1200 };
Y(vr, {
  variant: {
    options: ["edKwKQZUQ", "Hp1R1LjB5", "XBRAyLPcC", "aPykv3mrB", "ZYxMTVCZt"],
    optionTitles: [
      "Variant 1",
      "Variant 2",
      "Variant 3",
      "Variant 4",
      "Variant 5",
    ],
    title: "Variant",
    type: f.Enum,
  },
});
de(vr, [{ explicitInter: !0, fonts: [] }, ...jo, ...Fo], {
  supportsExplicitInterCodegen: !0,
});
var Ho = q(sa),
  Zo = q(ka),
  Xo = ia(ka),
  _o = q(na),
  Re = ta(p),
  $o = q(De),
  K = Sr(c.div),
  ya = Sr(p),
  es = q(ie),
  Ur = Sr(re),
  rs = q(la),
  as = q(ne),
  ts = q(Se),
  is = q(fa),
  wt = ia(fa),
  ns = q(er),
  kt = ta(R),
  os = q(ur),
  ss = q(fr),
  ls = q(da),
  fs = q(ve),
  ms = {
    ifpCxQDk0: "(max-width: 809px)",
    mU1l1Nn8k: "(min-width: 810px) and (max-width: 1199px)",
    VKZSTltEN: "(min-width: 1200px)",
  },
  yt = () => typeof document < "u",
  vt = "framer-L56kV",
  cs = {
    ifpCxQDk0: "framer-v-hb2orr",
    mU1l1Nn8k: "framer-v-irwjdu",
    VKZSTltEN: "framer-v-10h8fyi",
  },
  bt = (r, a) => `translateX(-50%) ${a}`,
  Ca = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ze = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ca,
    x: 0,
    y: 0,
  },
  Ie = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 0,
  },
  Ce = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  ge = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ir = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ge,
    x: 0,
    y: 0,
  },
  br = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 50,
  },
  nr = { delay: 0.1, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Or = { delay: 0.2, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ds = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 100,
    y: 0,
  },
  At = (r, a) => `translate(-50%, -50%) ${a}`,
  ps = { delay: 0, duration: 2, ease: [0, 0, 1, 1], type: "tween" },
  Ct = {
    opacity: 1,
    rotate: -360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  hs = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  gs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: hs,
    x: 0,
    y: 0,
  },
  us = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  xs = {
    opacity: 0,
    rotate: 7,
    rotateX: 0,
    rotateY: 0,
    scale: 0.8,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Lt = { delay: 0, duration: 20, ease: [0, 0, 1, 1], type: "tween" },
  Et = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  va = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.7,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  ws = {
    opacity: 0.15,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ca,
    x: 0,
    y: 0,
  },
  ba = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 20,
  },
  ks = { delay: 0, duration: 1.1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ys = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: ks,
    x: 0,
    y: 0,
  },
  vs = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 60,
  },
  bs = { delay: 0, duration: 10, ease: [0, 0, 1, 1], type: "tween" },
  Aa = zr(),
  As = { Desktop: "VKZSTltEN", Phone: "ifpCxQDk0", Tablet: "mU1l1Nn8k" },
  Cs = ({ height: r, id: a, width: i, ...t }) => {
    var n, d;
    return {
      ...t,
      variant:
        (d = (n = As[t.variant]) !== null && n !== void 0 ? n : t.variant) !==
          null && d !== void 0
          ? d
          : "VKZSTltEN",
    };
  },
  Ls = $(function (r, a) {
    let { activeLocale: i, setLocale: t } = me(),
      { style: n, className: d, layoutId: m, variant: k, ...h } = Cs(r);
    se(() => {
      let V = zr(void 0, i);
      if (V.robots) {
        let O = document.querySelector('meta[name="robots"]');
        O
          ? O.setAttribute("content", V.robots)
          : ((O = document.createElement("meta")),
            O.setAttribute("name", "robots"),
            O.setAttribute("content", V.robots),
            document.head.appendChild(O));
      }
    }, [void 0, i]),
      Ka(() => {
        let V = zr(void 0, i);
        if (((document.title = V.title || ""), V.viewport)) {
          var O;
          (O = document.querySelector('meta[name="viewport"]')) === null ||
            O === void 0 ||
            O.setAttribute("content", V.viewport);
        }
        let L = V.bodyClassName;
        if (L) {
          let X = document.body;
          X.classList.forEach(
            (Le) => Le.startsWith("framer-body-") && X.classList.remove(Le)
          ),
            X.classList.add(`${V.bodyClassName}-framer-L56kV`);
        }
        return () => {
          L &&
            document.body.classList.remove(`${V.bodyClassName}-framer-L56kV`);
        };
      }, [void 0, i]);
    let [l, x] = Xa(k, ms, !1),
      u = void 0,
      y = z(null),
      A = $e("fc82TyoDm"),
      v = z(null),
      g = $e("gkm8Wl_5r"),
      C = z(null),
      S = () => !!(!yt() || ["ifpCxQDk0", "mU1l1Nn8k"].includes(l)),
      w = () => (yt() ? !["ifpCxQDk0", "mU1l1Nn8k"].includes(l) : !0),
      M = Mr(),
      J = $e("R7c8lrMDK"),
      B = z(null),
      j = $e("Njp9BPuNm"),
      E = z(null),
      G = $e("CnEn2_p1q"),
      U = z(null),
      D = le(),
      Z = [];
    return (
      Ha({}),
      e(Za.Provider, {
        value: { primaryVariantId: "VKZSTltEN", variantClassNames: cs },
        children: o(ee, {
          id: m ?? D,
          children: [
            o(c.div, {
              ...h,
              className: ae(vt, ...Z, "framer-10h8fyi", d),
              ref: a ?? y,
              style: { ...n },
              children: [
                e(b, {
                  height: 1e3,
                  width: "100vw",
                  y: 0,
                  children: e(R, {
                    className: "framer-qc61v8-container",
                    layoutScroll: !0,
                    children: e(sa, {
                      height: "100%",
                      id: "pb9EJ_kZ0",
                      layoutId: "pb9EJ_kZ0",
                      style: { height: "100%", width: "100%" },
                      variant: "Mo9pmoGnF",
                      width: "100%",
                    }),
                  }),
                }),
                e(b, {
                  height: 100,
                  width: "100vw",
                  y: 0,
                  children: e(R, {
                    className: "framer-1omwwuu-container",
                    layoutScroll: !0,
                    transformTemplate: bt,
                    children: e(te, {
                      breakpoint: l,
                      overrides: {
                        ifpCxQDk0: {
                          __framer__obscuredVariantId: void 0,
                          __framer__scrollDirection: {
                            direction: "down",
                            target: "tML007VdC",
                          },
                          __framer__visibleVariantId: void 0,
                          variant: "XBRAyLPcC",
                        },
                        mU1l1Nn8k: {
                          __framer__obscuredVariantId: void 0,
                          __framer__scrollDirection: {
                            direction: "down",
                            target: "tML007VdC",
                          },
                          __framer__visibleVariantId: void 0,
                          variant: "XBRAyLPcC",
                        },
                      },
                      children: e(Xo, {
                        __framer__animateOnce: !1,
                        __framer__obscuredVariantId: "edKwKQZUQ",
                        __framer__scrollDirection: {
                          direction: "down",
                          target: "JXeTOVE7f",
                        },
                        __framer__threshold: 0.5,
                        __framer__variantAppearEffectEnabled: !0,
                        __framer__visibleVariantId: "Hp1R1LjB5",
                        height: "100%",
                        id: "OrRTsv1cT",
                        layoutId: "OrRTsv1cT",
                        style: { width: "100%" },
                        variant: "edKwKQZUQ",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                o("div", {
                  className: "framer-1att3x4",
                  "data-framer-name": "Section 1",
                  name: "Section 1",
                  children: [
                    e("div", {
                      className: "framer-1vimedr",
                      children: e(b, {
                        children: e(R, {
                          className: "framer-rtjsba-container",
                          children: e(na, {
                            height: "100%",
                            html: "<iframe src='https://my.spline.design/rrworld-1d527ceaeb78fdc90274c0814f3d2301/' frameborder='0' width='100%' height='100%'></iframe>",
                            id: "XZjXQmvKf",
                            layoutId: "XZjXQmvKf",
                            style: { height: "100%", width: "100%" },
                            type: "html",
                            url: "",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-1u4s5cl",
                      "data-framer-name": "Overlay",
                      name: "Overlay",
                    }),
                    o("div", {
                      className: "framer-1yf5x1i",
                      "data-framer-name": "Main Box",
                      name: "Main Box",
                      children: [
                        e("div", { className: "framer-1ixv49r" }),
                        e(Re, {
                          __fromCanvasComponent: !0,
                          animate: ze,
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                "--framer-font-family":
                                  '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                "--framer-font-size": "89px",
                                "--framer-line-height": "0.8em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "AeroAI",
                            }),
                          }),
                          className: "framer-1dyvsic",
                          "data-framer-appear-id": "1dyvsic",
                          fonts: ["CUSTOM;Square Pixel7 Regular"],
                          initial: Ie,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e("div", {
                          className: "framer-1wges49",
                          "data-border": !0,
                          children: e(p, {
                            __fromCanvasComponent: !0,
                            children: e(s, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                                  "--framer-font-family":
                                    '"Roboto", "Roboto Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children:
                                  "Empowering AI Evolution with Unrivaled GPU Nodes",
                              }),
                            }),
                            className: "framer-hvaq05",
                            fonts: ["GF;Roboto-300"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(p, {
                          __fromCanvasComponent: !0,
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "Distributing power through the facilitation of GPU and AI Resources",
                            }),
                          }),
                          className: "framer-iafr93",
                          fonts: ["GF;Roboto-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(b, {
                          height: 41,
                          children: e(R, {
                            className: "framer-1l8lg67-container",
                            children: e(De, {
                              b7KjVooU6: "https://aero-ai-app.vercel.app/",
                              GEEqX3ypi: "AeroAI | DApp",
                              height: "100%",
                              id: "QR4rwNAZx",
                              layoutId: "QR4rwNAZx",
                              variant: "glH1e7neN",
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o("header", {
                  className: "framer-1u3lkl9",
                  "data-framer-name": "Ecosystem",
                  name: "Ecosystem",
                  children: [
                    o("div", {
                      className: "framer-h7lh5j",
                      id: A,
                      ref: v,
                      children: [
                        e("div", {
                          className: "framer-kw2k6c",
                          children: e("div", {
                            className: "framer-mmnzm8",
                            "data-border": !0,
                          }),
                        }),
                        o(K, {
                          __framer__animate: { transition: ge },
                          __framer__animateOnce: !0,
                          __framer__enter: Ce,
                          __framer__exit: ir,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-f7tzbg",
                          children: [
                            e(Re, {
                              __fromCanvasComponent: !0,
                              animate: ze,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                    "--framer-font-size": "21px",
                                    "--framer-line-height": "0.8em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "AeroAI",
                                }),
                              }),
                              className: "framer-14w0vna",
                              "data-framer-appear-id": "14w0vna",
                              fonts: ["CUSTOM;Square Pixel7 Regular"],
                              initial: Ie,
                              optimized: !0,
                              style: { transformPerspective: 1200 },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector": "R0Y7Um9ib3RvLTUwMA==",
                                    "--framer-font-family":
                                      '"Roboto", "Roboto Placeholder", sans-serif',
                                    "--framer-font-size": "34px",
                                    "--framer-font-weight": "500",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "rgba(255, 255, 255, 0.7)",
                                  },
                                  children: "Ecosystem",
                                }),
                              }),
                              className: "framer-1h90xqb",
                              fonts: ["GF;Roboto-500"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        e(te, {
                          breakpoint: l,
                          overrides: {
                            ifpCxQDk0: {
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                                    "--framer-font-family":
                                      '"Roboto", "Roboto Placeholder", sans-serif',
                                    "--framer-font-size": "18px",
                                    "--framer-font-weight": "300",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "Through the facilitation of AI and GPU resources AeroAI aims to decentralize the space, enabling diverse and flexible application across various industries within the space.",
                                }),
                              }),
                            },
                            mU1l1Nn8k: {
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                                    "--framer-font-family":
                                      '"Roboto", "Roboto Placeholder", sans-serif',
                                    "--framer-font-size": "18px",
                                    "--framer-font-weight": "300",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "Through the facilitation of AI and GPU resources AeroAI aims to decentralize the space, enabling diverse and flexible application across various industries within the space.",
                                }),
                              }),
                            },
                          },
                          children: e(ya, {
                            __framer__animate: { transition: nr },
                            __framer__animateOnce: !0,
                            __framer__enter: br,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(s, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                                  "--framer-font-family":
                                    '"Roboto", "Roboto Placeholder", sans-serif',
                                  "--framer-font-size": "18px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "rgba(255, 255, 255, 0.9)",
                                },
                                children:
                                  "Through the facilitation of AI and GPU resources AeroAI aims to decentralize the space, enabling diverse and flexible application across various industries within the space.",
                              }),
                            }),
                            className: "framer-1f4gvou",
                            fonts: ["GF;Roboto-300"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        o(K, {
                          __framer__animate: { transition: Or },
                          __framer__animateOnce: !0,
                          __framer__enter: Ce,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-tk3rnv",
                          children: [
                            e(xe, {}),
                            e(xe, {
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                              nodeId: "UW3ZygSoc",
                              openInNewTab: !0,
                              children: o("a", {
                                className: "framer-5rvh6h framer-1uk29yy",
                                "data-border": !0,
                                children: [
                                  e(I, {
                                    className: "framer-djkxts",
                                    "data-framer-name": "graphic",
                                    fill: "rgb(255, 255, 255)",
                                    intrinsicHeight: 128,
                                    intrinsicWidth: 128,
                                    name: "graphic",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M99.3 111.18a16.71 16.71 0 0 0 9-9.36c2.49-6.92 1.46-14.63-3.06-18.53s-15.33-9.64-15.33-9.64-2.71 5.19 2 12.46c4.5 7 6.94 10.63 8.45 14.55 1.94 5.04-1.06 10.52-1.06 10.52Z"/><path d="M110.9 87.18s1.07-7.43-10.63-12C91.4 71.7 84 68.74 80.4 64.38a12 12 0 0 1-2.68-9.78s2.86 3.45 14.21 4.64c10.44 1.1 17 4.83 19.74 10.83a18 18 0 0 1-.77 17.11zM84.69 71.19s2.45 7.58-1.94 12.07c-3.83 3.91-9.5 3.92-14 4.79a24.54 24.54 0 0 0-8.71 3.52 58.66 58.66 0 0 1 13-1.85c6.14 0 11.35-2.51 13.26-6.84 3.23-7.25-1.61-11.69-1.61-11.69zM62.9 102.41c3.57-1.53 7.29.21 9.64 3.36s3.32 9.78 8.4 12.77 10.51-1.77 10.51-1.77-5.08 2.15-8.14.66c-3.29-1.6-3.79-4.4-4.37-9.22-1-7.87-5.13-11-8.76-12.32A20.76 20.76 0 0 0 54.62 97a48.3 48.3 0 0 0-9.62 6.37s6 1 8.4 2.43 5.46 6.29 8.5 7.24c2.79.88 5.68.44 7.24-1.82s.88-6.22-1.66-7.07c-3.11-1.05-5.33.43-5.2 2.35a2 2 0 0 0 1.81 2.09s-2-1-1.16-2.7c1-1.87 3.3-1.6 4.55-.72 1.53 1.08 1.76 4.8-.85 5.86s-5.91-.67-6.41-2.74-.31-4.59 2.68-5.88zm-7.71-52.04L12.72 3.29s36.07 44.48 37.36 46 2 2.86.88 3.89a6.58 6.58 0 0 1-3.26 1.44 4.34 4.34 0 0 1-4.49-1.72C41.39 50.71 28.1 29.68 28.1 29.68S40 51.22 40.61 52.49s1 2.39.4 3.19a15.08 15.08 0 0 0-2.47 3.46c-.66 1.62-1.2 6.36-1.75 8.41a33.18 33.18 0 0 1-7 11.86c-2.86 3-5.07 6.9-4.2 12.41.83 5.27 4.22 9.45 4.79 10.35a5.3 5.3 0 0 1 1 2.75s8.5-1 13.35-5.45c4.36-4 2-8.48.72-9.61-.91-.81-6.74-4.72-7.32-6.78s-1.52-3.51 1.26-9.08 2.07-6.16 2.44-8.08.29-5.88 2.5-6.68 5-.43 7.66-2c3.88-2.36 3.2-6.87 3.2-6.87zm-24 41.88A1.18 1.18 0 0 1 30 91c0-.67.7-1.15.58-1.57s-.73-.44-.86-1c-.07-.3.19-.87 1.29-.91A2.45 2.45 0 0 1 33.32 90a2.33 2.33 0 0 1-2.14 2.25zm27.55-32.92a5.25 5.25 0 0 0-4.87 6c.33 2.54 3.67 2.35 5.74 1.71s4.28-1 4.09-3.59-3.29-4.21-4.96-4.12zm.07 4.11c-1.3 0-2.35-.72-2.35-1.61s1-1.61 2.35-1.61 2.35.72 2.35 1.61-1.05 1.61-2.35 1.61zm-8.04-31.35s4.67.44 6.93 4 2 8.33 3.23 10.44a33.52 33.52 0 0 0 2 3.35c.35.44.62 1.1-.22 1.25-2.06.38-6.7-1.5-9.24-6.52-3.8-7.47-2.7-12.52-2.7-12.52zm47.59-.88s-1.32 2.7-.31 7.45a6.41 6.41 0 0 0 2 3.41 64.49 64.49 0 0 1 5.38 6l-4.7-3.81c-1-.8-1.6-.77-1.66.08s-.42 4.56-.55 5.37a19.15 19.15 0 0 1-1.17 3.06s.49-2.31.54-2.94c.11-1.54.09-6.24-1.08-7.73-2-2.54-8-4.82-8-4.82a25 25 0 0 1 6.75 2c.9.42 1.1.11 1.1-.52a39.41 39.41 0 0 1 .52-5 6 6 0 0 1 1.18-2.55z"/><path d="M100.67 48.39c-.78 4.42-2.29 6-2.78 6.38a1.81 1.81 0 0 1-2.3.09 1.83 1.83 0 0 1-.36-2.26 8.45 8.45 0 0 0 .9-2.51 22.06 22.06 0 0 0-.44-6 28 28 0 0 0-5.28-2.81c-11.21-4.58-19.87-1.72-19.87-1.72s-4.63-5.58-9.17-8a20 20 0 0 0-10.3-2s6.4 1 10 3.9c6.46 5.27 13.15 16.25 17.87 18.81 9.67 5.25 18.12 2.12 23.31 4.72 3.92 2 5 4.41 5 4.41a27.54 27.54 0 0 0-6.58-13.01Z"/></svg>',
                                    withExternalLayout: !0,
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "18px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Uniswap",
                                      }),
                                    }),
                                    className: "framer-phvbdn",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            e(xe, {
                              href: "https://etherscan.io/token/0x00000000000000000000000000000000000000",
                              nodeId: "sdkIMGRF6",
                              openInNewTab: !0,
                              children: o("a", {
                                className: "framer-ftt1vx framer-1uk29yy",
                                "data-border": !0,
                                children: [
                                  e("div", {
                                    className: "framer-1dkl3g1",
                                    children: e(I, {
                                      className: "framer-1u07ksi",
                                      "data-framer-name": "graphic",
                                      fill: "black",
                                      intrinsicHeight: 280,
                                      intrinsicWidth: 280,
                                      name: "graphic",
                                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="280" height="280"><image width="280" height="280" xlink:href="data:img/png;base64,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"/></svg>',
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "18px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Etherscan",
                                      }),
                                    }),
                                    className: "framer-11jnq71",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e(c.div, {
                      className: "framer-10ktbhe",
                      "data-framer-name": "Overlay",
                      name: "Overlay",
                      style: { rotate: 180 },
                    }),
                  ],
                }),
                e("div", { className: "framer-1kvu5yj" }),
                e("header", {
                  className: "framer-19eq6tb",
                  "data-framer-name": "How To Buy",
                  id: g,
                  name: "How To Buy",
                  ref: C,
                  children: o("div", {
                    className: "framer-13329jz",
                    children: [
                      o("div", {
                        className: "framer-19mzy0m",
                        children: [
                          o(K, {
                            __framer__animate: { transition: ge },
                            __framer__animateOnce: !0,
                            __framer__enter: Ce,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-ffz21j",
                            children: [
                              o("div", {
                                className: "framer-d19w5o",
                                children: [
                                  e(b, {
                                    children: e(R, {
                                      className: "framer-11yxrhk-container",
                                      children: e(ie, {
                                        height: "100%",
                                        id: "tgsSMPFVr",
                                        isForwardsDirection: !0,
                                        layoutId: "tgsSMPFVr",
                                        loop: !0,
                                        playing: !0,
                                        poster: "Auto",
                                        posterProgress: 0,
                                        progress: 10,
                                        speed: 1,
                                        srcFile:
                                          "https://framerusercontent.com/assets/OG3Fea14ahU340S2FDzynpepw.json",
                                        srcType: "Upload",
                                        srcUrl:
                                          "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Submission and Distribution",
                                      }),
                                    }),
                                    className: "framer-1d1rvqu",
                                    fonts: ["GF;Roboto-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "framer-1s0nv6d",
                                "data-border": !0,
                                children: e(te, {
                                  breakpoint: l,
                                  overrides: {
                                    ifpCxQDk0: {
                                      children: e(s, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children:
                                            "Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes.",
                                        }),
                                      }),
                                    },
                                    mU1l1Nn8k: {
                                      children: e(s, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children:
                                            "Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Prospective users submit their requests on our platform where they are instantly distributed across our secure network of AI Nodes.",
                                      }),
                                    }),
                                    className: "framer-11qnij2",
                                    fonts: ["GF;Roboto-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          o(K, {
                            __framer__animate: { transition: ge },
                            __framer__animateOnce: !0,
                            __framer__enter: Ce,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-kvso3i",
                            children: [
                              o("div", {
                                className: "framer-10l4rg2",
                                children: [
                                  e(b, {
                                    children: e(R, {
                                      className: "framer-11q7df1-container",
                                      children: e(ie, {
                                        height: "100%",
                                        id: "z8kg6advG",
                                        isForwardsDirection: !0,
                                        layoutId: "z8kg6advG",
                                        loop: !0,
                                        playing: !0,
                                        poster: "Auto",
                                        posterProgress: 0,
                                        progress: 5,
                                        speed: 1,
                                        srcFile:
                                          "https://framerusercontent.com/assets/pJuxH9bZX28WEf6Ib0B4MGGBo.json",
                                        srcType: "Upload",
                                        srcUrl:
                                          "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Processing and Verification",
                                      }),
                                    }),
                                    className: "framer-1jdkq78",
                                    fonts: ["GF;Roboto-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "framer-q6fkhf",
                                "data-border": !0,
                                children: e(te, {
                                  breakpoint: l,
                                  overrides: {
                                    ifpCxQDk0: {
                                      children: e(s, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "Each request is processed leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation.",
                                        }),
                                      }),
                                    },
                                    mU1l1Nn8k: {
                                      children: e(s, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "Each request is processed leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.8)",
                                        },
                                        children:
                                          "Each request is processed leveraging the power of the L1 Blockchain. Enabling secure and verifiable computation.",
                                      }),
                                    }),
                                    className: "framer-a6fr1o",
                                    fonts: ["GF;Roboto-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          o(K, {
                            __framer__animate: { transition: ge },
                            __framer__animateOnce: !0,
                            __framer__enter: Ce,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-1q1zmku",
                            children: [
                              o("div", {
                                className: "framer-kvpvri",
                                children: [
                                  e(b, {
                                    children: e(R, {
                                      className: "framer-12l1hhc-container",
                                      children: e(ie, {
                                        height: "100%",
                                        id: "EiMo7C3RZ",
                                        isForwardsDirection: !0,
                                        layoutId: "EiMo7C3RZ",
                                        loop: !0,
                                        playing: !0,
                                        poster: "Auto",
                                        posterProgress: 0,
                                        progress: 0,
                                        speed: 1,
                                        srcFile:
                                          "https://framerusercontent.com/assets/TyzscOkRk50thqBmsC7Z2DKnkk8.json",
                                        srcType: "Upload",
                                        srcUrl:
                                          "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Secure Delivery",
                                      }),
                                    }),
                                    className: "framer-17e6beb",
                                    fonts: ["GF;Roboto-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "framer-583vns",
                                "data-border": !0,
                                children: e(te, {
                                  breakpoint: l,
                                  overrides: {
                                    ifpCxQDk0: {
                                      children: e(s, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "Once verified the results are encrypted and returned to the user ensuring security and confidentiality.",
                                        }),
                                      }),
                                    },
                                    mU1l1Nn8k: {
                                      children: e(s, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "Once verified the results are encrypted and returned to the user ensuring security and confidentiality.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.8)",
                                        },
                                        children:
                                          "Once verified the results are encrypted and returned to the user ensuring security and confidentiality.",
                                      }),
                                    }),
                                    className: "framer-19u8667",
                                    fonts: ["GF;Roboto-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          e("div", {}),
                        ],
                      }),
                      o("div", {
                        className: "framer-1wke98p",
                        children: [
                          o(K, {
                            __framer__animate: { transition: ge },
                            __framer__animateOnce: !1,
                            __framer__enter: ds,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-1sxw5i0",
                            children: [
                              e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "R0Y7Um9ib3RvLTUwMA==",
                                      "--framer-font-family":
                                        '"Roboto", "Roboto Placeholder", sans-serif',
                                      "--framer-font-size": "30px",
                                      "--framer-font-weight": "500",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgba(255, 255, 255, 0.5)",
                                    },
                                    children: "HOW IT WORKS",
                                  }),
                                }),
                                className: "framer-1yqyh6u",
                                fonts: ["GF;Roboto-500"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(te, {
                                breakpoint: l,
                                overrides: {
                                  ifpCxQDk0: {
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "14px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "AeroAI makes the complex simple. We provide a seamless and intuitive interface allowing prospective users the ability to access our global network of AI Nodes.",
                                      }),
                                    }),
                                  },
                                  mU1l1Nn8k: {
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "14px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "AeroAI makes the complex simple. We provide a seamless and intuitive interface allowing prospective users the ability to access our global network of AI Nodes.",
                                      }),
                                    }),
                                  },
                                },
                                children: e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Um9ib3RvLTMwMA==",
                                        "--framer-font-family":
                                          '"Roboto", "Roboto Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "300",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgba(255, 255, 255, 0.9)",
                                      },
                                      children:
                                        "AeroAI makes the complex simple. We provide a seamless and intuitive interface allowing prospective users the ability to access our global network of AI Nodes.",
                                    }),
                                  }),
                                  className: "framer-qhuikp",
                                  fonts: ["GF;Roboto-300"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          e("div", {
                            className: "framer-7act3i",
                            children: e("div", {
                              className: "framer-1xe810i",
                              "data-border": !0,
                            }),
                          }),
                          o("div", {
                            className: "framer-1n2a7xh",
                            children: [
                              o("div", {
                                className: "framer-zwm4xk",
                                children: [
                                  e(re, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 499,
                                      intrinsicWidth: 499.5,
                                      pixelHeight: 998,
                                      pixelWidth: 999,
                                      sizes: "277px",
                                      src: "https://framerusercontent.com/images/y2k5mJI1A1anAQE1CTf5xzaxwE.svg?scale-down-to=512",
                                      srcSet:
                                        "https://framerusercontent.com/images/y2k5mJI1A1anAQE1CTf5xzaxwE.svg?scale-down-to=512 512w,https://framerusercontent.com/images/y2k5mJI1A1anAQE1CTf5xzaxwE.svg 999w",
                                    },
                                    className: "framer-1qohudj",
                                    "data-framer-name": "Cover",
                                    name: "Cover",
                                    transformTemplate: At,
                                  }),
                                  e(I, {
                                    className: "framer-6pajwk",
                                    "data-framer-name": "graphic",
                                    fill: "black",
                                    intrinsicHeight: 625,
                                    intrinsicWidth: 625,
                                    name: "graphic",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="625" height="625"><image width="625" height="625" xlink:href="data:img/png;base64,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"/></svg>',
                                    withExternalLayout: !0,
                                  }),
                                  e(Ur, {
                                    __framer__loop: Ct,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "loop",
                                    __framer__loopTransition: ps,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 1456,
                                      intrinsicWidth: 1451,
                                      pixelHeight: 2912,
                                      pixelWidth: 2902,
                                      sizes: "260px",
                                      src: "https://framerusercontent.com/images/JzUGfljEyKJ9TgSChniIAMXr1oQ.svg?scale-down-to=2048",
                                      srcSet:
                                        "https://framerusercontent.com/images/JzUGfljEyKJ9TgSChniIAMXr1oQ.svg?scale-down-to=1024 1020w,https://framerusercontent.com/images/JzUGfljEyKJ9TgSChniIAMXr1oQ.svg?scale-down-to=2048 2040w,https://framerusercontent.com/images/JzUGfljEyKJ9TgSChniIAMXr1oQ.svg 2902w",
                                    },
                                    className: "framer-11njqcz",
                                    "data-framer-name": "Fan",
                                    name: "Fan",
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "framer-116290b",
                                children: e("div", {
                                  className: "framer-lwupfh",
                                  "data-border": !0,
                                }),
                              }),
                              e(te, {
                                breakpoint: l,
                                overrides: {
                                  ifpCxQDk0: { style: { rotate: 360 } },
                                  mU1l1Nn8k: { style: { rotate: 360 } },
                                },
                                children: o(c.div, {
                                  className: "framer-1k98nqy",
                                  style: { rotate: 180 },
                                  children: [
                                    e(re, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 231.5,
                                        intrinsicWidth: 1061,
                                        pixelHeight: 463,
                                        pixelWidth: 2122,
                                        sizes: "168px",
                                        src: "https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=2048",
                                        srcSet:
                                          "https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=512 512w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png 2122w",
                                      },
                                      className: "framer-3eessr",
                                      "data-framer-name": "wire_2",
                                      name: "wire_2",
                                    }),
                                    e(re, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 231.5,
                                        intrinsicWidth: 1061,
                                        pixelHeight: 463,
                                        pixelWidth: 2122,
                                        sizes: "168px",
                                        src: "https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=2048",
                                        srcSet:
                                          "https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=512 512w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png 2122w",
                                      },
                                      className: "framer-1twgiqm",
                                      "data-framer-name": "wire_2",
                                      name: "wire_2",
                                    }),
                                  ],
                                }),
                              }),
                              S() &&
                                o(c.div, {
                                  className: "framer-7icdfx hidden-10h8fyi",
                                  style: { rotate: 180 },
                                  children: [
                                    e(re, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 231.5,
                                        intrinsicWidth: 1061,
                                        pixelHeight: 463,
                                        pixelWidth: 2122,
                                        sizes: "168px",
                                        src: "https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=2048",
                                        srcSet:
                                          "https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=512 512w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png 2122w",
                                      },
                                      className: "framer-1u9vd9v",
                                      "data-framer-name": "wire_2",
                                      name: "wire_2",
                                    }),
                                    e(re, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 231.5,
                                        intrinsicWidth: 1061,
                                        pixelHeight: 463,
                                        pixelWidth: 2122,
                                        sizes: "168px",
                                        src: "https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=2048",
                                        srcSet:
                                          "https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=512 512w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/6KtcDbU9QeptC7fo6XlaD1ipIrw.png 2122w",
                                      },
                                      className: "framer-1s5wh9t",
                                      "data-framer-name": "wire_2",
                                      name: "wire_2",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e("div", { className: "framer-11mh6f5" }),
                o("header", {
                  className: "framer-zoimib",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    o(K, {
                      __framer__animate: { transition: ge },
                      __framer__animateOnce: !0,
                      __framer__enter: Ce,
                      __framer__exit: ir,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-1dzruyh",
                      children: [
                        e(Re, {
                          __fromCanvasComponent: !0,
                          animate: ze,
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                "--framer-font-family":
                                  '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                "--framer-font-size": "21px",
                                "--framer-line-height": "0.8em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "Aero-AI",
                            }),
                          }),
                          className: "framer-35c9gz",
                          "data-framer-appear-id": "35c9gz",
                          fonts: ["CUSTOM;Square Pixel7 Regular"],
                          initial: Ie,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(p, {
                          __fromCanvasComponent: !0,
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7Um9ib3RvLTUwMA==",
                                "--framer-font-family":
                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-font-weight": "500",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "rgba(255, 255, 255, 0.7)",
                              },
                              children: "Use Cases",
                            }),
                          }),
                          className: "framer-1650pcq",
                          fonts: ["GF;Roboto-500"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    e(te, {
                      breakpoint: l,
                      overrides: {
                        ifpCxQDk0: {
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                                "--framer-font-family":
                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                "--framer-font-size": "18px",
                                "--framer-font-weight": "300",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "Through the facilitation of AI and GPU resources AeroAI aims to decentralize the space, enabling diverse and flexible application across various industries within the space. AeroAI's unique platform is soon to become an invaluable tool for all those wishing to maximize their impact within an emerging market. Below we will delve deeper into potential use-cases, exploring the ways in which AI will benefit different industry sectors.",
                            }),
                          }),
                        },
                        mU1l1Nn8k: {
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                                "--framer-font-family":
                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                "--framer-font-size": "18px",
                                "--framer-font-weight": "300",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "Through the facilitation of AI and GPU resources AeroAI aims to decentralize the space, enabling diverse and flexible application across various industries within the space. AeroAI's unique platform is soon to become an invaluable tool for all those wishing to maximize their impact within an emerging market. Below we will delve deeper into potential use-cases, exploring the ways in which AI will benefit different industry sectors.",
                            }),
                          }),
                        },
                      },
                      children: e(ya, {
                        __framer__animate: { transition: nr },
                        __framer__animateOnce: !0,
                        __framer__enter: br,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __fromCanvasComponent: !0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        children: e(s, {
                          children: e("p", {
                            style: {
                              "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                              "--framer-font-family":
                                '"Roboto", "Roboto Placeholder", sans-serif',
                              "--framer-font-size": "18px",
                              "--framer-font-weight": "300",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgba(255, 255, 255, 0.9)",
                            },
                            children:
                              "Through the facilitation of AI and GPU resources AeroAI aims to decentralize the space, enabling diverse and flexible application across various industries within the space. AeroAI's unique platform is soon to become an invaluable tool for all those wishing to maximize their impact within an emerging market. Below we will delve deeper into potential use-cases, exploring the ways in which AI will benefit different industry sectors.",
                          }),
                        }),
                        className: "framer-15gjjqy",
                        fonts: ["GF;Roboto-300"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    e(K, {}),
                  ],
                }),
                o("header", {
                  className: "framer-31c4dg",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    w() &&
                      e("div", {
                        className: "framer-xiqmmp hidden-hb2orr hidden-irwjdu",
                        children: e("div", {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                          },
                          className: "framer-1iutg3z",
                          "data-framer-name": "solana_tree_growing",
                          name: "solana_tree_growing",
                          children: e(b, {
                            children: e(R, {
                              className: "framer-eeuzgc-container",
                              children: e(la, {
                                height: "100%",
                                id: "d2JWn502q",
                                layoutId: "d2JWn502q",
                                style: { height: "100%", width: "100%" },
                                variant: "sHeJH7oXp",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      }),
                    e("div", {
                      className: "framer-o66rxo",
                      children: e(b, {
                        children: e(R, {
                          className: "framer-15fbxw8-container",
                          children: e(ne, {
                            alignment: "center",
                            arrowOptions: {
                              arrowFill: "rgba(0, 0, 0, 0.2)",
                              arrowGap: 10,
                              arrowPadding: -70,
                              arrowPaddingBottom: 0,
                              arrowPaddingLeft: 0,
                              arrowPaddingRight: 0,
                              arrowPaddingTop: 0,
                              arrowPosition: "auto",
                              arrowRadius: 0,
                              arrowShouldFadeIn: !1,
                              arrowShouldSpace: !0,
                              arrowSize: 50,
                              showMouseControls: !0,
                            },
                            autoPlayControl: !0,
                            borderRadius: 0,
                            direction: "left",
                            dragControl: !0,
                            effectsOptions: {
                              effectsHover: !0,
                              effectsOpacity: 0.5,
                              effectsPerspective: 1200,
                              effectsRotate: 0,
                              effectsScale: 0.8,
                            },
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !0,
                            },
                            gap: 130,
                            height: "100%",
                            id: "ZM7ie0EDK",
                            intervalControl: 3,
                            itemAmount: 1,
                            layoutId: "ZM7ie0EDK",
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            progressOptions: {
                              dotsActiveOpacity: 1,
                              dotsBackground: "rgba(0, 0, 0, 0.2)",
                              dotsBlur: 0,
                              dotsFill: "rgb(255, 255, 255)",
                              dotsGap: 10,
                              dotsInset: -38,
                              dotSize: 10,
                              dotsOpacity: 0.5,
                              dotsPadding: 10,
                              dotsRadius: 50,
                              showProgressDots: !0,
                            },
                            slots: [
                              o(c.div, {
                                className: "framer-jnj6r6",
                                children: [
                                  o(c.div, {
                                    className: "framer-1mcbdaq",
                                    children: [
                                      e(b, {
                                        children: e(R, {
                                          className: "framer-nnfpyp-container",
                                          children: e(ie, {
                                            height: "100%",
                                            id: "WZ_bhoXqd",
                                            isForwardsDirection: !0,
                                            layoutId: "WZ_bhoXqd",
                                            loop: !0,
                                            playing: !0,
                                            poster: "Auto",
                                            posterProgress: 0,
                                            progress: 0,
                                            speed: 1,
                                            srcFile:
                                              "https://framerusercontent.com/assets/Bf7ee2MeUZNRyNdPPb2Hq7CF0eI.json",
                                            srcType: "Upload",
                                            srcUrl:
                                              "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(b, {
                                        children: e(R, {
                                          className: "framer-163v3tm-container",
                                          children: e(ie, {
                                            height: "100%",
                                            id: "xtCIi9jD_",
                                            isForwardsDirection: !0,
                                            layoutId: "xtCIi9jD_",
                                            loop: !0,
                                            playing: !0,
                                            poster: "Auto",
                                            posterProgress: 0,
                                            progress: 0,
                                            speed: 1,
                                            srcFile:
                                              "https://framerusercontent.com/assets/yH2pvQtZ6T261YGRtfa4D27xsy8.json",
                                            srcType: "Upload",
                                            srcUrl:
                                              "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTcwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "18px",
                                          "--framer-font-weight": "700",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Graphics Rendering & Animation",
                                      }),
                                    }),
                                    className: "framer-1h0oltq",
                                    fonts: ["GF;Roboto-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(c.div, {
                                className: "framer-byilcb",
                                children: [
                                  o(c.div, {
                                    className: "framer-nse08o",
                                    children: [
                                      e(b, {
                                        children: e(R, {
                                          className: "framer-znhe00-container",
                                          children: e(ie, {
                                            height: "100%",
                                            id: "EMvAyoJX2",
                                            isForwardsDirection: !0,
                                            layoutId: "EMvAyoJX2",
                                            loop: !0,
                                            playing: !0,
                                            poster: "Auto",
                                            posterProgress: 0,
                                            progress: 0,
                                            speed: 1,
                                            srcFile:
                                              "https://framerusercontent.com/assets/DSBiofzb8rkhlIhAUKcITZaiM.json",
                                            srcType: "Upload",
                                            srcUrl:
                                              "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(b, {
                                        children: e(R, {
                                          className: "framer-tllfol-container",
                                          children: e(ie, {
                                            height: "100%",
                                            id: "Hz42ujnAp",
                                            isForwardsDirection: !0,
                                            layoutId: "Hz42ujnAp",
                                            loop: !0,
                                            playing: !0,
                                            poster: "Auto",
                                            posterProgress: 0,
                                            progress: 0,
                                            speed: 1,
                                            srcFile:
                                              "https://framerusercontent.com/assets/uoetEVnSV30JoWxDxLqOmPjaUTI.json",
                                            srcType: "Upload",
                                            srcUrl:
                                              "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTcwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "19px",
                                          "--framer-font-weight": "700",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "VR and Gaming",
                                      }),
                                    }),
                                    className: "framer-foie8v",
                                    fonts: ["GF;Roboto-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(c.div, {
                                className: "framer-1fi426n",
                                children: [
                                  o(c.div, {
                                    className: "framer-1z037h2",
                                    children: [
                                      e(b, {
                                        children: e(R, {
                                          className: "framer-w4uc46-container",
                                          children: e(ie, {
                                            height: "100%",
                                            id: "sJ46W6ftX",
                                            isForwardsDirection: !0,
                                            layoutId: "sJ46W6ftX",
                                            loop: !0,
                                            playing: !0,
                                            poster: "Auto",
                                            posterProgress: 0,
                                            progress: 0,
                                            speed: 1,
                                            srcFile:
                                              "https://framerusercontent.com/assets/fNszwFxIl8jAYDkB1N8WoJo5BM.json",
                                            srcType: "Upload",
                                            srcUrl:
                                              "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(b, {
                                        children: e(R, {
                                          className: "framer-1z5mah-container",
                                          children: e(ie, {
                                            height: "100%",
                                            id: "kOhRYhOBw",
                                            isForwardsDirection: !0,
                                            layoutId: "kOhRYhOBw",
                                            loop: !0,
                                            playing: !0,
                                            poster: "Auto",
                                            posterProgress: 0,
                                            progress: 0,
                                            speed: 1,
                                            srcFile:
                                              "https://framerusercontent.com/assets/GKuQGG2rnY8Phr6MkmAykJ9Z2E.json",
                                            srcType: "Upload",
                                            srcUrl:
                                              "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTcwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "19px",
                                          "--framer-font-weight": "700",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Content Creation & Media",
                                      }),
                                    }),
                                    className: "framer-epsrg2",
                                    fonts: ["GF;Roboto-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(c.div, {
                                className: "framer-6z5u2p",
                                children: [
                                  o(c.div, {
                                    className: "framer-l6elfo",
                                    children: [
                                      e(b, {
                                        children: e(R, {
                                          className: "framer-1rnxcrj-container",
                                          children: e(ie, {
                                            height: "100%",
                                            id: "re1O2z6x6",
                                            isForwardsDirection: !0,
                                            layoutId: "re1O2z6x6",
                                            loop: !0,
                                            playing: !0,
                                            poster: "Auto",
                                            posterProgress: 0,
                                            progress: 0,
                                            speed: 1,
                                            srcFile:
                                              "https://framerusercontent.com/assets/9DMCq8ocF2cONXYtHZvsv8gYPA.json",
                                            srcType: "Upload",
                                            srcUrl:
                                              "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(b, {
                                        children: e(R, {
                                          className: "framer-18k90tr-container",
                                          children: e(ie, {
                                            height: "100%",
                                            id: "cQnms94wV",
                                            isForwardsDirection: !0,
                                            layoutId: "cQnms94wV",
                                            loop: !0,
                                            playing: !0,
                                            poster: "Auto",
                                            posterProgress: 0,
                                            progress: 0,
                                            speed: 1,
                                            srcFile:
                                              "https://framerusercontent.com/assets/NbzxazftdIxqG8czG5RBMuRxviA.json",
                                            srcType: "Upload",
                                            srcUrl:
                                              "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTcwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "19px",
                                          "--framer-font-weight": "700",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Pre-Configured or Custom VM",
                                      }),
                                    }),
                                    className: "framer-dripfl",
                                    fonts: ["GF;Roboto-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                            startFrom: 0,
                            style: { height: "100%", width: "100%" },
                            transitionControl: {
                              damping: 40,
                              delay: 0,
                              mass: 1,
                              stiffness: 200,
                              type: "spring",
                            },
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                S() &&
                  o("div", {
                    className: "framer-17d0kez hidden-10h8fyi",
                    children: [
                      w() &&
                        e("div", {
                          className:
                            "framer-112dejk hidden-hb2orr hidden-irwjdu",
                          "data-border": !0,
                          children: e(b, {
                            children: e(R, {
                              className: "framer-9v82iu-container",
                              children: e(Se, {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderRadius: 0,
                                bottomLeftRadius: 0,
                                bottomRightRadius: 0,
                                controls: !1,
                                height: "100%",
                                id: "YaTA7ue_a",
                                isMixedBorderRadius: !1,
                                layoutId: "YaTA7ue_a",
                                loop: !0,
                                muted: !0,
                                objectFit: "cover",
                                playing: !0,
                                posterEnabled: !1,
                                srcFile:
                                  "https://framerusercontent.com/assets/s5ZkvdYAaBRgORGfec5c7oq9sU.mp4",
                                srcType: "Upload",
                                srcUrl:
                                  "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                startTime: 0,
                                style: { height: "100%", width: "100%" },
                                topLeftRadius: 0,
                                topRightRadius: 0,
                                volume: 25,
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      e(b, {
                        height: 41,
                        children: e(R, {
                          className: "framer-3ljazk-container",
                          children: e(De, {
                            GEEqX3ypi: "AeroAI | DApp",
                            height: "100%",
                            id: "AiUlMadud",
                            layoutId: "AiUlMadud",
                            variant: "glH1e7neN",
                            width: "100%",
                          }),
                        }),
                      }),
                      o("div", {
                        className: "framer-xarliq",
                        "data-framer-name": "Overlay",
                        name: "Overlay",
                        children: [
                          e(Re, {
                            __fromCanvasComponent: !0,
                            animate: ze,
                            children: e(s, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                  "--framer-font-size": "21px",
                                  "--framer-line-height": "0.8em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: e("strong", {
                                  children: "Completed",
                                }),
                              }),
                            }),
                            className: "framer-36oicc",
                            "data-framer-appear-id": "36oicc",
                            fonts: ["CUSTOM;Square Pixel7 Regular"],
                            initial: Ie,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          o("div", {
                            className: "framer-3vy2bn",
                            children: [
                              e(b, {
                                height: 10,
                                children: e(R, {
                                  className: "framer-ggiwtr-container",
                                  children: e(wt, {
                                    __framer__animateOnce: !1,
                                    __framer__obscuredVariantId: "LKL254Znz",
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    __framer__visibleVariantId: "R51GYkCrP",
                                    height: "100%",
                                    id: "GyA43SD_F",
                                    layoutId: "GyA43SD_F",
                                    style: { height: "100%", width: "100%" },
                                    variant: "LKL254Znz",
                                    width: "100%",
                                  }),
                                }),
                              }),
                              o("div", {
                                className: "framer-j4qpvd",
                                children: [
                                  e("div", { className: "framer-ax2tqe" }),
                                  e("div", { className: "framer-yonhrj" }),
                                ],
                              }),
                              e("div", {
                                className: "framer-3mq4ap",
                                children: e(b, {
                                  children: e(kt, {
                                    animate: gs,
                                    className: "framer-1r2zrgt-container",
                                    "data-framer-appear-id": "1r2zrgt",
                                    initial: us,
                                    optimized: !0,
                                    children: e(er, {
                                      direction: "up",
                                      endingNumber: 85,
                                      font: {
                                        color: "rgb(255, 255, 255)",
                                        fontFace: "roboto",
                                        size: 21,
                                        weight: "normal",
                                      },
                                      height: "100%",
                                      id: "UIKhEUmqC",
                                      layoutId: "UIKhEUmqC",
                                      startingNumber: 0,
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                e("div", {
                  className: "framer-vmw4bz",
                  "data-framer-name": "General Numbers",
                  name: "General Numbers",
                  children: o(K, {
                    __framer__animate: { transition: Ca },
                    __framer__animateOnce: !1,
                    __framer__enter: xs,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0.5,
                    __perspectiveFX: !1,
                    __targetOpacity: 1,
                    className: "framer-15x2ht9",
                    "data-border": !0,
                    "data-framer-name": "DApp Video",
                    name: "DApp Video",
                    children: [
                      w() &&
                        o("div", {
                          className:
                            "framer-d4ddox hidden-hb2orr hidden-irwjdu",
                          children: [
                            e("div", {
                              className: "framer-1upbzd5",
                              "data-border": !0,
                              children: e(b, {
                                children: e(R, {
                                  className: "framer-qn66fi-container",
                                  children: e(Se, {
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: "100%",
                                    id: "kEsJCADQo",
                                    isMixedBorderRadius: !1,
                                    layoutId: "kEsJCADQo",
                                    loop: !0,
                                    muted: !0,
                                    objectFit: "cover",
                                    playing: !0,
                                    posterEnabled: !1,
                                    srcFile:
                                      "https://framerusercontent.com/assets/s5ZkvdYAaBRgORGfec5c7oq9sU.mp4",
                                    srcType: "Upload",
                                    srcUrl:
                                      "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                    startTime: 0,
                                    style: { height: "100%", width: "100%" },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            e(b, {
                              height: 41,
                              children: e(R, {
                                className: "framer-96oel1-container",
                                children: e(De, {
                                  b7KjVooU6: "https://aero-ai-app.vercel.app/",
                                  GEEqX3ypi: "AeroAI | DApp",
                                  height: "100%",
                                  id: "GXA2eb8ZP",
                                  layoutId: "GXA2eb8ZP",
                                  variant: "glH1e7neN",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(ke, {
                              links: [
                                {
                                  href: { webPageId: "TMT07nkee" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (V) =>
                                e(b, {
                                  height: 41,
                                  children: e(R, {
                                    className: "framer-lytiq2-container",
                                    children: e(De, {
                                      b7KjVooU6: V[0],
                                      GEEqX3ypi: "Release Schedule",
                                      height: "100%",
                                      id: "VLx2Na8DQ",
                                      layoutId: "VLx2Na8DQ",
                                      variant: "glH1e7neN",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                            }),
                            e(ke, {
                              links: [
                                {
                                  href: { webPageId: "TMT07nkee" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (V) =>
                                e(b, {
                                  height: 41,
                                  children: e(R, {
                                    className: "framer-1ylba2i-container",
                                    children: e(De, {
                                      b7KjVooU6: V[0],
                                      GEEqX3ypi: "Docs",
                                      height: "100%",
                                      id: "v_sMuZuPb",
                                      layoutId: "v_sMuZuPb",
                                      variant: "glH1e7neN",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      e(b, {
                        children: e(R, {
                          className: "framer-dvlwe6-container",
                          children: e(Se, {
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: "100%",
                            id: "oQ2mMfQGw",
                            isMixedBorderRadius: !1,
                            layoutId: "oQ2mMfQGw",
                            loop: !0,
                            muted: !0,
                            objectFit: "cover",
                            playing: !0,
                            posterEnabled: !1,
                            srcFile:
                              "https://framerusercontent.com/assets/YFMq6AYuPzjwZ0qlZr88DRDAzh0.mp4",
                            srcType: "Upload",
                            srcUrl:
                              "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                            startTime: 0,
                            style: { height: "100%", width: "100%" },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: "100%",
                          }),
                        }),
                      }),
                      w() &&
                        o("div", {
                          className:
                            "framer-1gz33fx hidden-hb2orr hidden-irwjdu",
                          "data-framer-name": "Overlay",
                          name: "Overlay",
                          children: [
                            e(Re, {
                              __fromCanvasComponent: !0,
                              animate: ze,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                    "--framer-font-size": "21px",
                                    "--framer-line-height": "0.8em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: e("strong", {
                                    children: "Completed",
                                  }),
                                }),
                              }),
                              className: "framer-87p0eo",
                              "data-framer-appear-id": "87p0eo",
                              fonts: ["CUSTOM;Square Pixel7 Regular"],
                              initial: Ie,
                              optimized: !0,
                              style: { transformPerspective: 1200 },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            o("div", {
                              className: "framer-1ucpsya",
                              children: [
                                e(b, {
                                  height: 10,
                                  children: e(R, {
                                    className: "framer-aue7ht-container",
                                    children: e(wt, {
                                      __framer__animateOnce: !1,
                                      __framer__obscuredVariantId: "LKL254Znz",
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      __framer__visibleVariantId: "R51GYkCrP",
                                      height: "100%",
                                      id: "b6cUx5W5X",
                                      layoutId: "b6cUx5W5X",
                                      style: { height: "100%", width: "100%" },
                                      variant: "LKL254Znz",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                o("div", {
                                  className: "framer-1oqkujr",
                                  children: [
                                    e("div", { className: "framer-1rdhdxf" }),
                                    e("div", { className: "framer-1lf50w1" }),
                                  ],
                                }),
                                e("div", {
                                  className: "framer-smk7sx",
                                  children: e(b, {
                                    children: e(R, {
                                      className: "framer-ij772n-container",
                                      children: e(er, {
                                        direction: "up",
                                        endingNumber: 85,
                                        font: {
                                          color: "rgb(255, 255, 255)",
                                          fontFace: "roboto",
                                          size: 21,
                                          weight: "normal",
                                        },
                                        height: "100%",
                                        id: "HAhZGRzU3",
                                        layoutId: "HAhZGRzU3",
                                        startingNumber: 0,
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                o("div", {
                  className: "framer-adzj48",
                  "data-framer-name": "General Numbers",
                  name: "General Numbers",
                  children: [
                    o("div", {
                      className: "framer-1xcus7k",
                      "data-border": !0,
                      children: [
                        e(Re, {
                          __fromCanvasComponent: !0,
                          animate: ze,
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                "--framer-font-family":
                                  '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                "--framer-font-size": "89px",
                                "--framer-line-height": "0.8em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "AeroAI",
                            }),
                          }),
                          className: "framer-wew7t1",
                          "data-framer-appear-id": "wew7t1",
                          fonts: ["CUSTOM;Square Pixel7 Regular"],
                          initial: Ie,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(p, {
                          __fromCanvasComponent: !0,
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                "--framer-font-family":
                                  '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                "--framer-font-size": "71px",
                                "--framer-line-height": "0.8em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "rgba(255, 255, 255, 0.7)",
                              },
                              children: "Network",
                            }),
                          }),
                          className: "framer-mjps1h",
                          fonts: ["CUSTOM;Square Pixel7 Regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    e("div", {
                      className: "framer-jy4eem",
                      "data-border": !0,
                      children: o("div", {
                        className: "framer-99r80i",
                        children: [
                          e(b, {
                            children: e(R, {
                              className: "framer-qzkrg4-container",
                              children: e(ur, {
                                direction: "up",
                                endingNumber: 3500,
                                font: {
                                  color: "rgb(255, 255, 255)",
                                  fontFace: "Roboto",
                                  size: 55,
                                  weight: "lighter",
                                },
                                height: "100%",
                                id: "GxoAXfKAY",
                                layoutId: "GxoAXfKAY",
                                startingNumber: 500,
                                width: "100%",
                              }),
                            }),
                          }),
                          e(p, {
                            __fromCanvasComponent: !0,
                            children: e(s, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Roboto", "Roboto Placeholder", sans-serif',
                                  "--framer-font-size": "34px",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Holders",
                              }),
                            }),
                            className: "framer-5d0qj6",
                            fonts: ["GF;Roboto-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    }),
                    e("div", {
                      className: "framer-19cyrs2",
                      "data-border": !0,
                      children: o("div", {
                        className: "framer-15q8w1z",
                        children: [
                          e(b, {
                            children: e(R, {
                              className: "framer-voc85f-container",
                              children: e(fr, {
                                direction: "up",
                                endingNumber: 4,
                                font: {
                                  color: "rgb(255, 255, 255)",
                                  fontFace: "Roboto",
                                  size: 55,
                                  weight: "lighter",
                                },
                                height: "100%",
                                id: "X_uOtGlIY",
                                layoutId: "X_uOtGlIY",
                                startingNumber: 0,
                                width: "100%",
                              }),
                            }),
                          }),
                          e(p, {
                            __fromCanvasComponent: !0,
                            children: e(s, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Roboto", "Roboto Placeholder", sans-serif',
                                  "--framer-font-size": "34px",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Nodes",
                              }),
                            }),
                            className: "framer-17eddfj",
                            fonts: ["GF;Roboto-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                o("div", {
                  className: "framer-1mvcmbf",
                  "data-framer-name": "General Numbers",
                  id: J,
                  name: "General Numbers",
                  ref: B,
                  children: [
                    o(K, {
                      __framer__animate: { transition: ge },
                      __framer__animateOnce: !0,
                      __framer__enter: Ce,
                      __framer__exit: ir,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-16svfos",
                      children: [
                        e(Re, {
                          __fromCanvasComponent: !0,
                          animate: ze,
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                "--framer-font-family":
                                  '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                "--framer-font-size": "21px",
                                "--framer-line-height": "0.8em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "AeroAI",
                            }),
                          }),
                          className: "framer-ft58rl",
                          "data-framer-appear-id": "ft58rl",
                          fonts: ["CUSTOM;Square Pixel7 Regular"],
                          initial: Ie,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(p, {
                          __fromCanvasComponent: !0,
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7Um9ib3RvLTUwMA==",
                                "--framer-font-family":
                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-font-weight": "500",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "rgba(255, 255, 255, 0.7)",
                              },
                              children: "Pay-As-You-Go Nodes",
                            }),
                          }),
                          className: "framer-sjm2te",
                          fonts: ["GF;Roboto-500"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    w() &&
                      e(Ur, {
                        __framer__loop: Et,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: Lt,
                        __perspectiveFX: !1,
                        __targetOpacity: 0.2,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 342,
                          intrinsicWidth: 345,
                          pixelHeight: 684,
                          pixelWidth: 690,
                          sizes: "892.5px",
                          src: "https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg?scale-down-to=512",
                          srcSet:
                            "https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg?scale-down-to=512 512w,https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg 690w",
                        },
                        className: "framer-1yqbavw hidden-hb2orr hidden-irwjdu",
                        "data-framer-name": "graphic",
                        name: "graphic",
                        children: e(re, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 312.5,
                            intrinsicWidth: 312.5,
                            pixelHeight: 625,
                            pixelWidth: 625,
                            sizes: "107px",
                            src: "https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png?scale-down-to=512",
                            srcSet:
                              "https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png?scale-down-to=512 512w,https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png 625w",
                          },
                          className: "framer-1e180kc",
                          "data-framer-name": "image",
                          name: "image",
                        }),
                      }),
                    e(te, {
                      breakpoint: l,
                      overrides: {
                        ifpCxQDk0: {
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                                "--framer-font-family":
                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                "--framer-font-size": "18px",
                                "--framer-font-weight": "300",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "Through the facilitation of AI and GPU resources AeroAI aims to decentralize the space, enabling diverse and flexible application across various industries within the space.",
                            }),
                          }),
                        },
                        mU1l1Nn8k: {
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                                "--framer-font-family":
                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                "--framer-font-size": "18px",
                                "--framer-font-weight": "300",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "Through the facilitation of AI and GPU resources AeroAI aims to decentralize the space, enabling diverse and flexible application across various industries within the space.",
                            }),
                          }),
                        },
                      },
                      children: e(ya, {
                        __framer__animate: { transition: nr },
                        __framer__animateOnce: !0,
                        __framer__enter: br,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __fromCanvasComponent: !0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        children: e(s, {
                          children: e("p", {
                            style: {
                              "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                              "--framer-font-family":
                                '"Roboto", "Roboto Placeholder", sans-serif',
                              "--framer-font-size": "18px",
                              "--framer-font-weight": "300",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgba(255, 255, 255, 0.9)",
                            },
                            children:
                              "Through the facilitation of AI and GPU resources AeroAI aims to decentralize the space, enabling diverse and flexible application across various industries within the space.",
                          }),
                        }),
                        className: "framer-kcp6pq",
                        fonts: ["GF;Roboto-300"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    e(te, {
                      breakpoint: l,
                      overrides: {
                        ifpCxQDk0: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 342,
                            intrinsicWidth: 345,
                            pixelHeight: 684,
                            pixelWidth: 690,
                            sizes: "calc(100vw + 471.5px)",
                            src: "https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg?scale-down-to=512",
                            srcSet:
                              "https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg?scale-down-to=512 512w,https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg 690w",
                          },
                        },
                        mU1l1Nn8k: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 342,
                            intrinsicWidth: 345,
                            pixelHeight: 684,
                            pixelWidth: 690,
                            sizes: "calc(100vw + 471.5px)",
                            src: "https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg?scale-down-to=512",
                            srcSet:
                              "https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg?scale-down-to=512 512w,https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg 690w",
                          },
                        },
                      },
                      children: e(Ur, {
                        __framer__loop: Et,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: Lt,
                        __perspectiveFX: !1,
                        __targetOpacity: 0.2,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 342,
                          intrinsicWidth: 345,
                          pixelHeight: 684,
                          pixelWidth: 690,
                          sizes: "892.5px",
                          src: "https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg?scale-down-to=512",
                          srcSet:
                            "https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg?scale-down-to=512 512w,https://framerusercontent.com/images/pj7ViibN8BCFuKQMEk9asP3YSUo.svg 690w",
                        },
                        className: "framer-46c8d2",
                        "data-framer-name": "graphic",
                        name: "graphic",
                        children: e(re, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 312.5,
                            intrinsicWidth: 312.5,
                            pixelHeight: 625,
                            pixelWidth: 625,
                            sizes: "107px",
                            src: "https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png?scale-down-to=512",
                            srcSet:
                              "https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png?scale-down-to=512 512w,https://framerusercontent.com/images/n6NJ3waIv08wSZ9xn01QSKrcUW0.png 625w",
                          },
                          className: "framer-kfk8mv",
                          "data-framer-name": "image",
                          name: "image",
                        }),
                      }),
                    }),
                    o("div", {
                      className: "framer-1ks8qs5",
                      children: [
                        o("div", {
                          className: "framer-1x6beln",
                          children: [
                            e(K, {
                              __framer__animate: { transition: ge },
                              __framer__animateOnce: !0,
                              __framer__enter: Ce,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-cvnmvh",
                              "data-border": !0,
                              children: e(b, {
                                children: e(R, {
                                  className: "framer-11z4c64-container",
                                  children: e(Se, {
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: "100%",
                                    id: "l3qTnxvPA",
                                    isMixedBorderRadius: !1,
                                    layoutId: "l3qTnxvPA",
                                    loop: !0,
                                    muted: !0,
                                    objectFit: "cover",
                                    playing: !0,
                                    posterEnabled: !1,
                                    srcFile:
                                      "https://framerusercontent.com/assets/yb4UBTS6DTFCqhZhnThJJ9qMiz0.mp4",
                                    srcType: "Upload",
                                    srcUrl:
                                      "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                    startTime: 0,
                                    style: { height: "100%", width: "100%" },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            o(K, {
                              __framer__animate: { transition: ge },
                              __framer__animateOnce: !0,
                              __framer__enter: br,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-9ovcln",
                              children: [
                                e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                        "--framer-font-size": "34px",
                                        "--framer-line-height": "0.8em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: e("strong", {
                                        children: "A100 Tensor Core",
                                      }),
                                    }),
                                  }),
                                  className: "framer-1ehxcjn",
                                  fonts: ["CUSTOM;Square Pixel7 Regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Um9ib3RvLTMwMA==",
                                        "--framer-font-family":
                                          '"Roboto", "Roboto Placeholder", sans-serif',
                                        "--framer-font-size": "21px",
                                        "--framer-font-weight": "300",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "Designed to power the worlds most advanced AI workloads.",
                                    }),
                                  }),
                                  className: "framer-46zllt",
                                  fonts: ["GF;Roboto-300"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o("div", {
                          className: "framer-1tywh60",
                          children: [
                            e(K, {
                              __framer__animate: { transition: ge },
                              __framer__animateOnce: !0,
                              __framer__enter: Ce,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-jhv71z",
                              "data-border": !0,
                              children: e(b, {
                                children: e(R, {
                                  className: "framer-1ra0jvb-container",
                                  children: e(Se, {
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: "100%",
                                    id: "my75q4fsh",
                                    isMixedBorderRadius: !1,
                                    layoutId: "my75q4fsh",
                                    loop: !0,
                                    muted: !0,
                                    objectFit: "cover",
                                    playing: !0,
                                    posterEnabled: !1,
                                    srcFile:
                                      "https://framerusercontent.com/assets/oi4MGeG9IJh36WSu7C5k2ABof2g.mp4",
                                    srcType: "Upload",
                                    srcUrl:
                                      "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                    startTime: 0,
                                    style: { height: "100%", width: "100%" },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            o(K, {
                              __framer__animate: { transition: nr },
                              __framer__animateOnce: !0,
                              __framer__enter: br,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-1nvcnbd",
                              children: [
                                e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                        "--framer-font-size": "34px",
                                        "--framer-line-height": "0.8em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: e("strong", {
                                        children: "Quadro FX 4800",
                                      }),
                                    }),
                                  }),
                                  className: "framer-3s2zp6",
                                  fonts: ["CUSTOM;Square Pixel7 Regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Um9ib3RvLTMwMA==",
                                        "--framer-font-family":
                                          '"Roboto", "Roboto Placeholder", sans-serif',
                                        "--framer-font-size": "21px",
                                        "--framer-font-weight": "300",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "An unrivalled graphic solution catering to all your videography needs.",
                                    }),
                                  }),
                                  className: "framer-1pji8sr",
                                  fonts: ["GF;Roboto-300"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e("header", {
                  className: "framer-1hmm7xv",
                  "data-framer-name": "Liquidity Program",
                  name: "Liquidity Program",
                  children: e("div", {
                    className: "framer-1etly8h",
                    children: o("div", {}),
                  }),
                }),
                o("header", {
                  className: "framer-1027vn",
                  "data-framer-name": "Liquidity Program",
                  name: "Liquidity Program",
                  children: [
                    e(b, {
                      children: e(R, {
                        className: "framer-gs4xnr-container",
                        children: e(Se, {
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: "100%",
                          id: "zXfcRlRN3",
                          isMixedBorderRadius: !1,
                          layoutId: "zXfcRlRN3",
                          loop: !0,
                          muted: !0,
                          objectFit: "cover",
                          playing: !0,
                          posterEnabled: !1,
                          srcFile:
                            "https://framerusercontent.com/assets/MsCGD9QFxUHPDphiuBb0hdHUvQ.webm",
                          srcType: "Upload",
                          srcUrl:
                            "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                          startTime: 0,
                          style: { height: "100%", width: "100%" },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: "100%",
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-gz84v8",
                      "data-framer-name": "Overlay",
                      name: "Overlay",
                      children: e(te, {
                        breakpoint: l,
                        overrides: {
                          ifpCxQDk0: {
                            children: e(s, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                  "--framer-font-size": "43px",
                                  "--framer-line-height": "0.8em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Aero AI",
                              }),
                            }),
                          },
                          mU1l1Nn8k: {
                            children: e(s, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                  "--framer-font-size": "43px",
                                  "--framer-line-height": "0.8em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Aero AI",
                              }),
                            }),
                          },
                        },
                        children: e(Re, {
                          __fromCanvasComponent: !0,
                          animate: ws,
                          children: e(s, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                "--framer-font-family":
                                  '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                "--framer-font-size": "125px",
                                "--framer-line-height": "0.8em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "Aero AI",
                            }),
                          }),
                          className: "framer-1d7lnlq",
                          "data-framer-appear-id": "1d7lnlq",
                          fonts: ["CUSTOM;Square Pixel7 Regular"],
                          initial: Ie,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                  ],
                }),
                o("div", {
                  className: "framer-1fwxyvy",
                  "data-framer-name": "General Numbers",
                  name: "General Numbers",
                  children: [
                    o("section", {
                      className: "framer-1udslm7",
                      "data-framer-name": "Pricing",
                      id: j,
                      name: "Pricing",
                      ref: E,
                      children: [
                        o(K, {
                          __framer__animate: { transition: ge },
                          __framer__animateOnce: !0,
                          __framer__enter: Ce,
                          __framer__exit: ir,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-mkm164",
                          children: [
                            e(Re, {
                              __fromCanvasComponent: !0,
                              animate: ze,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                    "--framer-font-size": "21px",
                                    "--framer-line-height": "0.8em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "AeroAI",
                                }),
                              }),
                              className: "framer-d9pzr0",
                              "data-framer-appear-id": "d9pzr0",
                              fonts: ["CUSTOM;Square Pixel7 Regular"],
                              initial: Ie,
                              optimized: !0,
                              style: { transformPerspective: 1200 },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector": "R0Y7Um9ib3RvLTUwMA==",
                                    "--framer-font-family":
                                      '"Roboto", "Roboto Placeholder", sans-serif',
                                    "--framer-font-size": "34px",
                                    "--framer-font-weight": "500",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "rgba(255, 255, 255, 0.7)",
                                  },
                                  children: "Roadmap",
                                }),
                              }),
                              className: "framer-1gdl41x",
                              fonts: ["GF;Roboto-500"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        o("div", {
                          className: "framer-1clqavn",
                          "data-framer-name": "Container",
                          name: "Container",
                          children: [
                            o(K, {
                              __framer__animate: { transition: ge },
                              __framer__animateOnce: !1,
                              __framer__enter: ba,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-4n5it4",
                              "data-border": !0,
                              "data-framer-name": "Card",
                              name: "Card",
                              children: [
                                e("div", {
                                  className: "framer-1r7bxn9",
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7UGx1cyBKYWthcnRhIFNhbnMtNjAw",
                                          "--framer-font-family":
                                            '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                          "--framer-font-size": "34px",
                                          "--framer-font-weight": "600",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-line-height": "1em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Phase 1",
                                      }),
                                    }),
                                    className: "framer-sewnhf",
                                    fonts: ["GF;Plus Jakarta Sans-600"],
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o("div", {
                                  className: "framer-1ai3fpc",
                                  children: [
                                    o("div", {
                                      className: "framer-5fqzbs",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-ajqtjb",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11821022450,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "$AERO Token Generation Event",
                                            }),
                                          }),
                                          className: "framer-9ge15t",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-acwpb6",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-qo34qf",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 9000941750,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Website Launch",
                                            }),
                                          }),
                                          className: "framer-jjgn78",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-2uyrro",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-141vz0l",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11821022450,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "Social channels established and solidified",
                                            }),
                                          }),
                                          className: "framer-wk01mi",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-y5i0jy",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-1hc6nlb",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 12190387234,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Gitbook Release",
                                            }),
                                          }),
                                          className: "framer-tjqkd3",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-1n2wff",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-137c8ry",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 10530552813,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "AMA Schedule established",
                                            }),
                                          }),
                                          className: "framer-1ienq62",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-1vxjaw9",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-97vq4d",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 10530552813,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "DApp Demo Release",
                                            }),
                                          }),
                                          className: "framer-ts95gx",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-azz5a3",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-7dap1z",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 10530552813,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "Completion of numerous node tasks",
                                            }),
                                          }),
                                          className: "framer-t6m3e7",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e("button", {
                                  className: "framer-1caij0t",
                                  "data-framer-name": "Button",
                                  "data-reset": "button",
                                  name: "Button",
                                  children: e(b, {
                                    children: e(R, {
                                      className: "framer-1d7sf54-container",
                                      children: e(ie, {
                                        height: "100%",
                                        id: "n1Ngeinfk",
                                        isForwardsDirection: !0,
                                        layoutId: "n1Ngeinfk",
                                        loop: !0,
                                        playing: !0,
                                        poster: "Auto",
                                        posterProgress: 0,
                                        progress: 0,
                                        speed: 0.5,
                                        srcFile:
                                          "https://framerusercontent.com/assets/Y0R3ukskIo4KNF6k4vh0aoXa8wY.json",
                                        srcType: "Upload",
                                        srcUrl:
                                          "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            o(K, {
                              __framer__animate: { transition: nr },
                              __framer__animateOnce: !1,
                              __framer__enter: ba,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-1lg6nyp",
                              "data-border": !0,
                              "data-framer-name": "Card",
                              name: "Card",
                              children: [
                                e("div", {
                                  className: "framer-1oe33u8",
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7UGx1cyBKYWthcnRhIFNhbnMtNjAw",
                                          "--framer-font-family":
                                            '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                          "--framer-font-size": "34px",
                                          "--framer-font-weight": "600",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-line-height": "1em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Phase 2",
                                      }),
                                    }),
                                    className: "framer-1rjopix",
                                    fonts: ["GF;Plus Jakarta Sans-600"],
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o("div", {
                                  className: "framer-1b6t955",
                                  children: [
                                    o("div", {
                                      className: "framer-17kzhy3",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-9a4425",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11821022450,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "V2 Website Release",
                                            }),
                                          }),
                                          className: "framer-8nrs5i",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-ggg0w2",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-wvm7s",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 9000941750,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "Full DApp Platform DEMO BETA Release",
                                            }),
                                          }),
                                          className: "framer-nolgt8",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-cc0hua",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-1r0ktyv",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11821022450,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "DApp Roll-out Schedule Release",
                                            }),
                                          }),
                                          className: "framer-ytnlq3",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-14869ba",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-p1u81e",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 12190387234,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "Node Operator acquisition increasing GPU facilities",
                                            }),
                                          }),
                                          className: "framer-1j2qgk6",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-pwuasq",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-izce9y",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 10530552813,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Staking Integration",
                                            }),
                                          }),
                                          className: "framer-amlxvk",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-fz8d4b",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-1g1xxce",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 1,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11821022450,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "First Jobs successfully completed",
                                            }),
                                          }),
                                          className: "framer-cnuwp3",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-ucbu9s",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-14a4dqk",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 0.5,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11358387596,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "First Lenders successfully compensated",
                                            }),
                                          }),
                                          className: "framer-afphl2",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e("button", {
                                  className: "framer-qkx8um",
                                  "data-framer-name": "Button",
                                  "data-reset": "button",
                                  name: "Button",
                                  children: e(b, {
                                    children: e(R, {
                                      className: "framer-mgjnza-container",
                                      children: e(ie, {
                                        height: "100%",
                                        id: "RudWEIzx1",
                                        isForwardsDirection: !0,
                                        layoutId: "RudWEIzx1",
                                        loop: !0,
                                        playing: !0,
                                        poster: "Auto",
                                        posterProgress: 0,
                                        progress: 0,
                                        speed: 0.5,
                                        srcFile:
                                          "https://framerusercontent.com/assets/Y0R3ukskIo4KNF6k4vh0aoXa8wY.json",
                                        srcType: "Upload",
                                        srcUrl:
                                          "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            o(K, {
                              __framer__animate: { transition: Or },
                              __framer__animateOnce: !1,
                              __framer__enter: ba,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-v9qv0i",
                              "data-border": !0,
                              "data-framer-name": "Card",
                              name: "Card",
                              children: [
                                e("div", {
                                  className: "framer-aghp2z",
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7UGx1cyBKYWthcnRhIFNhbnMtNjAw",
                                          "--framer-font-family":
                                            '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                          "--framer-font-size": "34px",
                                          "--framer-font-weight": "600",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-line-height": "1em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Phase 3",
                                      }),
                                    }),
                                    className: "framer-14l7mz5",
                                    fonts: ["GF;Plus Jakarta Sans-600"],
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o("div", {
                                  className: "framer-w04wxw",
                                  children: [
                                    o("div", {
                                      className: "framer-p9j0pq",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-1stswp2",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 0.5,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11358387596,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Team Expansion",
                                            }),
                                          }),
                                          className: "framer-of9hvk",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-1t5mwvr",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-wq1wh3",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 0.5,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 12067111631,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "DApp Alpha Release",
                                            }),
                                          }),
                                          className: "framer-pe28m9",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-64whhf",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-lw7i3u",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 0.5,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11358387596,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "Feedback/user reports incentivised",
                                            }),
                                          }),
                                          className: "framer-lispcf",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-x2pqta",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-11uby83",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 0.5,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 10434841055,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "Marketing Campaign initiated",
                                            }),
                                          }),
                                          className: "framer-1l1ubx0",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-1gkbuud",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-1hrg1ks",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 0.5,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 9795791857,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "Data Driven analytics used to initiate targeted Marketing campaign",
                                            }),
                                          }),
                                          className: "framer-1v3qopm",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-tq6i0y",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-5wiyug",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 0.5,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11358387596,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "Platform Userbase expansion prioritised",
                                            }),
                                          }),
                                          className: "framer-40tate",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o("div", {
                                      className: "framer-1bnz9cq",
                                      "data-framer-name": "Row",
                                      name: "Row",
                                      children: [
                                        e(I, {
                                          className: "framer-so7rwg",
                                          "data-framer-name": "Check",
                                          layout: "position",
                                          name: "Check",
                                          opacity: 0.5,
                                          radius: 0,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 22"><path d="M 12 2.25 C 6.615 2.25 2.25 6.615 2.25 12 C 2.25 17.385 6.615 21.75 12 21.75 C 17.385 21.75 21.75 17.385 21.75 12 C 21.74 6.62 17.38 2.26 12 2.25 Z M 16.641 10.294 L 11.147 15.544 C 11.005 15.677 10.817 15.751 10.622 15.75 C 10.429 15.753 10.244 15.679 10.106 15.544 L 7.359 12.919 C 7.152 12.738 7.06 12.458 7.121 12.189 C 7.181 11.92 7.384 11.706 7.649 11.632 C 7.914 11.557 8.199 11.634 8.391 11.831 L 10.622 13.959 L 15.609 9.206 C 15.912 8.942 16.37 8.964 16.647 9.255 C 16.923 9.547 16.921 10.005 16.641 10.294 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                          svgContentId: 11358387596,
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children:
                                                "Partnerships/Acquisitions focused",
                                            }),
                                          }),
                                          className: "framer-1wci5y8",
                                          fonts: [
                                            "GF;Plus Jakarta Sans-regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e("button", {
                                  className: "framer-ieuct9",
                                  "data-framer-name": "Button",
                                  "data-reset": "button",
                                  name: "Button",
                                  children: e(b, {
                                    children: e(R, {
                                      className: "framer-k0fwm4-container",
                                      children: e(ie, {
                                        height: "100%",
                                        id: "HcqRUXGbV",
                                        isForwardsDirection: !0,
                                        layoutId: "HcqRUXGbV",
                                        loop: !0,
                                        playing: !0,
                                        poster: "Auto",
                                        posterProgress: 0,
                                        progress: 0,
                                        speed: 0.5,
                                        srcFile:
                                          "https://framerusercontent.com/assets/Y0R3ukskIo4KNF6k4vh0aoXa8wY.json",
                                        srcType: "Upload",
                                        srcUrl:
                                          "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o("section", {
                      className: "framer-17g1z2q",
                      "data-framer-name": "Pricing",
                      id: G,
                      name: "Pricing",
                      ref: U,
                      children: [
                        o(K, {
                          __framer__animate: { transition: ge },
                          __framer__animateOnce: !0,
                          __framer__enter: Ce,
                          __framer__exit: ir,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1aya719",
                          children: [
                            e(Re, {
                              __fromCanvasComponent: !0,
                              animate: ze,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                    "--framer-font-size": "21px",
                                    "--framer-line-height": "0.8em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "AeroAI",
                                }),
                              }),
                              className: "framer-g1o5m6",
                              "data-framer-appear-id": "g1o5m6",
                              fonts: ["CUSTOM;Square Pixel7 Regular"],
                              initial: Ie,
                              optimized: !0,
                              style: { transformPerspective: 1200 },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector": "R0Y7Um9ib3RvLTUwMA==",
                                    "--framer-font-family":
                                      '"Roboto", "Roboto Placeholder", sans-serif',
                                    "--framer-font-size": "34px",
                                    "--framer-font-weight": "500",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "rgba(255, 255, 255, 0.7)",
                                  },
                                  children: "FAQ",
                                }),
                              }),
                              className: "framer-1mvbwvc",
                              fonts: ["GF;Roboto-500"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        e(te, {
                          breakpoint: l,
                          overrides: {
                            ifpCxQDk0: { width: "calc(100vw - 80px)" },
                            mU1l1Nn8k: { width: "calc(100vw - 80px)" },
                          },
                          children: e(b, {
                            height: 608,
                            width: "1120px",
                            children: e(kt, {
                              animate: ys,
                              className: "framer-1w16on9-container",
                              "data-framer-appear-id": "1w16on9",
                              initial: vs,
                              optimized: !0,
                              style: { transformPerspective: 1200 },
                              children: e(te, {
                                breakpoint: l,
                                overrides: {
                                  ifpCxQDk0: { variant: "kPujQare7" },
                                  mU1l1Nn8k: { variant: "DBtRjKGB8" },
                                },
                                children: e(da, {
                                  height: "100%",
                                  id: "vCKJtlmRS",
                                  layoutId: "vCKJtlmRS",
                                  style: { width: "100%" },
                                  variant: "dP8O4s60H",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o("header", {
                  className: "framer-14f87m",
                  "data-framer-name": "How To Buy",
                  name: "How To Buy",
                  children: [
                    o("div", {
                      className: "framer-1mlu5pa",
                      children: [
                        e(re, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 499,
                            intrinsicWidth: 499.5,
                            pixelHeight: 998,
                            pixelWidth: 999,
                            sizes: "855.7321px",
                            src: "https://framerusercontent.com/images/y2k5mJI1A1anAQE1CTf5xzaxwE.svg?scale-down-to=512",
                            srcSet:
                              "https://framerusercontent.com/images/y2k5mJI1A1anAQE1CTf5xzaxwE.svg?scale-down-to=512 512w,https://framerusercontent.com/images/y2k5mJI1A1anAQE1CTf5xzaxwE.svg 999w",
                          },
                          className: "framer-1d5ocpg",
                          "data-framer-name": "Cover",
                          name: "Cover",
                          transformTemplate: At,
                        }),
                        e(I, {
                          className: "framer-1fnuqvc",
                          "data-framer-name": "graphic",
                          fill: "black",
                          intrinsicHeight: 625,
                          intrinsicWidth: 625,
                          name: "graphic",
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="625" height="625"><image width="625" height="625" xlink:href="data:img/png;base64,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"/></svg>',
                          withExternalLayout: !0,
                        }),
                        e(Ur, {
                          __framer__loop: Ct,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "loop",
                          __framer__loopTransition: bs,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1456,
                            intrinsicWidth: 1451,
                            pixelHeight: 2912,
                            pixelWidth: 2902,
                            sizes: "735px",
                            src: "https://framerusercontent.com/images/JzUGfljEyKJ9TgSChniIAMXr1oQ.svg?scale-down-to=2048",
                            srcSet:
                              "https://framerusercontent.com/images/JzUGfljEyKJ9TgSChniIAMXr1oQ.svg?scale-down-to=1024 1020w,https://framerusercontent.com/images/JzUGfljEyKJ9TgSChniIAMXr1oQ.svg?scale-down-to=2048 2040w,https://framerusercontent.com/images/JzUGfljEyKJ9TgSChniIAMXr1oQ.svg 2902w",
                          },
                          className: "framer-1y2u8eq",
                          "data-framer-name": "Fan",
                          name: "Fan",
                          style: { rotate: 22 },
                        }),
                        e("div", {
                          className: "framer-12mlma6",
                          "data-framer-name": "Overlay",
                          name: "Overlay",
                        }),
                      ],
                    }),
                    e(p, {
                      __fromCanvasComponent: !0,
                      children: e(s, {
                        children: e("p", {
                          style: {
                            "--font-selector": "R0Y7Um9ib3RvLTUwMA==",
                            "--framer-font-family":
                              '"Roboto", "Roboto Placeholder", sans-serif',
                            "--framer-font-size": "34px",
                            "--framer-font-weight": "500",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "rgba(255, 255, 255, 0.7)",
                          },
                          children: "Partners & Resources",
                        }),
                      }),
                      className: "framer-1xai8z",
                      fonts: ["GF;Roboto-500"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e("div", {
                      className: "framer-11gc35f",
                      children: o("div", {
                        className: "framer-1bpjf4r",
                        children: [
                          e(re, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1546.5,
                              intrinsicWidth: 1546.5,
                              pixelHeight: 3093,
                              pixelWidth: 3093,
                              sizes: "70px",
                              src: "https://framerusercontent.com/images/Oe1Jvy8pTofw5FgNDwbnf2qcEWU.svg?scale-down-to=2048",
                              srcSet:
                                "https://framerusercontent.com/images/Oe1Jvy8pTofw5FgNDwbnf2qcEWU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/Oe1Jvy8pTofw5FgNDwbnf2qcEWU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Oe1Jvy8pTofw5FgNDwbnf2qcEWU.svg?scale-down-to=2048 2048w,https://framerusercontent.com/images/Oe1Jvy8pTofw5FgNDwbnf2qcEWU.svg 3093w",
                            },
                            className: "framer-km57x1",
                            "data-framer-name": "graphic",
                            name: "graphic",
                            style: { rotate: 1 },
                          }),
                          e(I, {
                            className: "framer-1nwc9by",
                            "data-framer-name": "graphic",
                            fill: "black",
                            intrinsicHeight: 1065,
                            intrinsicWidth: 1042,
                            name: "graphic",
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1042" height="1065"><image width="1042" height="1065" xlink:href="data:img/png;base64,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"/></svg>',
                            withExternalLayout: !0,
                          }),
                          e(re, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 282,
                              intrinsicWidth: 281.5,
                              pixelHeight: 564,
                              pixelWidth: 563,
                              sizes: "64.8848px",
                              src: "https://framerusercontent.com/images/T31Y5t8FbujgZVzaQlmUdoZ98.png?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/T31Y5t8FbujgZVzaQlmUdoZ98.png 563w",
                            },
                            className: "framer-xs0d3x",
                            "data-framer-name": "Image",
                            name: "Image",
                          }),
                          e(I, {
                            className: "framer-hwvn1v",
                            "data-framer-name": "Logo Stacked_Dark",
                            layout: "position",
                            name: "Logo Stacked_Dark",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 105 60"><g id="ss10458296086_1"><g id="ss10458296086_2"><path d="M 9.847 28.621 L 0 28.718 L 1.597 0.484 L 10.065 0.653 L 14.444 11.806 C 14.903 11.153 19.597 1.645 20.153 0.556 L 27.968 0.508 L 29.153 28.863 L 19.379 29.032 L 19.306 16.935 C 18 19.815 14.976 23.976 14.661 24.774 L 10.089 16.935 Z M 30.532 0.242 L 53.806 0 L 53.298 28.718 L 32.879 28.524 Z M 38.758 19.984 L 45.363 19.79 L 45.774 8.613 L 39.363 8.202 Z M 79.306 0 L 78.798 28.718 L 56.54 28.621 L 56.032 0.242 Z M 71.25 8.613 L 63.823 8.685 L 64.234 20.008 L 70.839 19.984 Z M 91.403 28.911 L 81.411 28.839 L 82.234 0.532 L 90.581 0.605 L 95.661 11.298 L 95.323 0.556 L 103.597 0.484 L 105.024 28.96 L 95.903 28.887 C 95.153 27.556 91.742 19.282 89.903 15.556 Z M 0.169 38.927 L 0.895 35.613 L 14.565 35.613 L 15.29 38.927 C 15.29 38.927 15.145 38.903 15.121 38.855 C 14.927 38.468 13.645 36.169 11.613 36.169 L 8.734 36.169 L 8.734 50.952 C 8.734 52.379 10.04 52.5 10.427 52.621 C 10.5 52.645 10.5 52.815 10.5 52.815 L 4.984 52.815 C 4.984 52.815 4.984 52.645 5.056 52.621 C 5.444 52.5 6.75 52.379 6.75 50.952 L 6.75 36.169 L 3.871 36.169 C 1.815 36.169 0.508 38.444 0.363 38.855 C 0.339 38.903 0.169 38.927 0.169 38.927 Z M 16.113 35.589 L 21.992 35.589 C 29.927 35.589 30.194 44.202 22.766 44.758 C 28.597 47.444 32.081 59.347 38.71 59.347 C 42.048 59.347 42.556 56.468 41.202 55.669 C 41.202 55.185 41.758 54.847 42.339 54.847 C 42.968 54.847 43.645 55.258 43.645 56.371 C 43.645 57.992 41.637 59.927 38.589 59.927 C 27.653 59.927 25.306 44.782 20.419 44.782 L 19.839 44.782 L 19.839 50.927 C 19.839 52.355 21.169 52.476 21.556 52.597 C 21.629 52.621 21.629 52.79 21.629 52.79 L 16.113 52.79 C 16.113 52.79 16.113 52.621 16.185 52.597 C 16.573 52.476 17.879 52.355 17.879 50.927 L 17.879 37.427 C 17.879 36 16.573 35.903 16.185 35.758 C 16.113 35.734 16.113 35.589 16.113 35.589 Z M 19.863 36.169 L 19.863 44.226 L 21.363 44.226 C 27.605 44.226 27.605 36.169 21.363 36.169 Z" fill="rgb(0, 0, 0)"></path><path d="M 39.339 35.226 C 45.266 35.226 48.218 39.702 48.218 44.202 C 48.218 48.702 45.266 53.177 39.339 53.177 C 33.411 53.177 30.484 48.677 30.484 44.202 C 30.484 39.726 33.435 35.226 39.339 35.226 Z M 32.613 44.202 C 32.613 48.411 34.839 52.597 39.339 52.597 C 43.839 52.597 46.089 48.387 46.089 44.202 C 46.089 40.016 43.815 35.806 39.339 35.806 C 34.863 35.806 32.613 39.992 32.613 44.202 Z M 39.315 40.5 C 39.315 41.952 40.476 43.573 41.71 43.573 C 40.452 43.573 39.315 45.218 39.315 46.645 C 39.315 45.218 38.177 43.573 36.895 43.573 C 38.177 43.573 39.315 41.952 39.315 40.5 Z M 49.96 52.597 C 50.347 52.476 51.653 52.355 51.653 50.927 L 51.653 37.427 C 51.653 36 50.347 35.879 49.96 35.758 C 49.887 35.734 49.887 35.565 49.887 35.565 L 51.653 35.565 L 51.653 35.589 L 56.613 35.589 C 64.669 35.589 64.669 46.427 56.613 46.427 L 53.613 46.427 L 53.613 50.927 C 53.613 52.355 54.919 52.476 55.306 52.597 C 55.379 52.621 55.379 52.79 55.379 52.79 L 49.863 52.79 C 49.887 52.79 49.887 52.621 49.96 52.597 Z M 53.613 36.169 L 53.613 45.871 L 55.984 45.871 C 62.032 45.871 62.032 36.169 55.984 36.169 Z" fill="rgb(0, 0, 0)"></path><path d="M 64.282 52.597 C 64.669 52.476 65.976 52.355 65.976 50.927 L 65.976 37.427 C 65.976 36 64.669 35.879 64.282 35.758 C 64.21 35.734 64.21 35.589 64.21 35.589 L 69.726 35.589 C 69.726 35.589 69.726 35.734 69.653 35.758 C 69.266 35.879 67.96 36 67.96 37.427 L 67.96 50.927 C 67.96 52.355 69.266 52.476 69.653 52.597 C 69.726 52.621 69.726 52.79 69.726 52.79 L 64.21 52.79 C 64.21 52.79 64.21 52.621 64.282 52.597 Z" fill="rgb(0, 0, 0)"></path><path d="M 80.274 35.226 C 82.065 35.226 83.758 35.758 85.161 36.677 L 85.452 36.895 L 85.234 39.823 C 85.234 39.823 84.968 39.871 84.968 39.581 C 84.968 37.524 82.234 35.806 80.274 35.806 C 71.274 35.806 71.274 52.621 80.274 52.621 C 83.105 52.621 84.847 50.202 85.04 49.04 C 85.089 48.75 85.306 48.798 85.306 48.798 L 85.452 51.532 C 84 52.597 82.21 53.202 80.274 53.202 C 68.444 53.177 68.444 35.226 80.274 35.226 Z M 79.863 40.669 C 79.863 42.121 81.024 43.742 82.282 43.742 C 81.024 43.742 79.863 45.387 79.863 46.815 C 79.863 45.387 78.726 43.742 77.444 43.742 C 78.75 43.742 79.863 42.121 79.863 40.669 Z M 86.419 52.597 C 86.806 52.476 87.774 52.137 88.258 51.097 L 94.573 36.919 C 94.089 36.145 93.29 35.855 92.976 35.758 C 92.903 35.734 92.903 35.589 92.903 35.589 L 96 35.589 L 102.895 51.097 C 103.379 52.137 104.371 52.476 104.734 52.597 C 104.806 52.621 104.831 52.79 104.831 52.79 L 99.677 52.79 C 99.677 52.79 99.677 52.621 99.75 52.597 C 100.137 52.476 101.129 52.331 100.718 51.121 L 99.484 48.339 L 90.097 48.339 L 88.863 51.121 C 88.427 52.331 89.444 52.476 89.831 52.597 C 89.903 52.621 89.903 52.79 89.903 52.79 L 86.347 52.79 C 86.347 52.79 86.347 52.621 86.419 52.597 Z M 90.387 47.782 L 99.242 47.782 L 94.815 37.815 Z" fill="rgb(0, 0, 0)"></path></g></g></svg>',
                            svgContentId: 10458296086,
                            withExternalLayout: !0,
                          }),
                          e(re, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1136.5,
                              intrinsicWidth: 1134,
                              pixelHeight: 2273,
                              pixelWidth: 2268,
                              sizes: "69.846px",
                              src: "https://framerusercontent.com/images/VBFfxj9i6Tvj3hvtATuGudZg3Q.png?scale-down-to=2048",
                              srcSet:
                                "https://framerusercontent.com/images/VBFfxj9i6Tvj3hvtATuGudZg3Q.png?scale-down-to=1024 1021w,https://framerusercontent.com/images/VBFfxj9i6Tvj3hvtATuGudZg3Q.png?scale-down-to=2048 2043w,https://framerusercontent.com/images/VBFfxj9i6Tvj3hvtATuGudZg3Q.png 2268w",
                            },
                            className: "framer-164nol4",
                            "data-framer-name": "ZMKL",
                            name: "ZMKL",
                          }),
                          e(re, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 295,
                              intrinsicWidth: 295,
                              pixelHeight: 590,
                              pixelWidth: 590,
                              sizes: "70px",
                              src: "https://framerusercontent.com/images/kOJsf1lz0eL4Kj3vClV6mnK2xDw.svg?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/kOJsf1lz0eL4Kj3vClV6mnK2xDw.svg?scale-down-to=512 512w,https://framerusercontent.com/images/kOJsf1lz0eL4Kj3vClV6mnK2xDw.svg 590w",
                            },
                            className: "framer-pxxxh0",
                            "data-framer-name": "graphic",
                            name: "graphic",
                          }),
                        ],
                      }),
                    }),
                    e("div", { className: "framer-1yfzvm3" }),
                    e("div", {
                      className: "framer-1ryouah",
                      children: e("div", {
                        className: "framer-uqez3r",
                        children: o("div", {
                          className: "framer-cnc6pu",
                          children: [
                            o("div", {
                              className: "framer-eb3ulv",
                              children: [
                                e(I, {
                                  className: "framer-nzh8av",
                                  "data-framer-name": "graphic",
                                  fill: "black",
                                  intrinsicHeight: 24,
                                  intrinsicWidth: 24,
                                  name: "graphic",
                                  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#77B900" d="m8.948 14.408.001.001zm0 3.713v-1.247c-4.84-.605-6.492-5.983-6.492-5.983s2.164-3.222 6.5-3.561V6.155C4.153 6.547 0 10.642 0 10.642s2.35 6.856 8.948 7.479z"/><path fill="#77B900" d="M4.275 11.053s1.016 3.836 4.673 4.495v-1.14c-2.058-.704-2.738-3.134-2.738-3.134s1.202-1.442 2.73-1.255h.008V8.773a6.035 6.035 0 0 1 .796-.036c2.508 0 4 1.968 4 1.968l-2.04 1.728c-.91-1.54-1.219-2.217-2.747-2.404v4.38c.371.124.76.187 1.158.187 2.976 0 5.75-3.882 5.75-3.882s-2.571-3.526-6.493-3.401h-.004a6.489 6.489 0 0 0-.42.018v1.441l-.027.003.023-.001c-2.913.321-4.669 2.279-4.669 2.279z"/><path fill="#77B900" d="M24 4H8.948v2.155l.424-.027c5.45-.186 9.01 4.506 9.01 4.506s-4.08 5.003-8.33 5.003a6.36 6.36 0 0 1-1.095-.098v1.335c.3.035.61.063.91.063 3.957 0 6.82-2.039 9.593-4.443.459.374 2.34 1.273 2.73 1.665-2.633 2.226-8.772 4.016-12.253 4.016-.335 0-.653-.018-.971-.053V20H24V4z"/></svg>',
                                  withExternalLayout: !0,
                                }),
                                e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Um9ib3RvLTMwMA==",
                                        "--framer-font-family":
                                          '"Roboto", "Roboto Placeholder", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-font-weight": "300",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "NVIDIA",
                                    }),
                                  }),
                                  className: "framer-whkaf1",
                                  fonts: ["GF;Roboto-300"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            o("div", {
                              className: "framer-13y2rzn",
                              children: [
                                e(I, {
                                  className: "framer-iory3a",
                                  "data-framer-name": "graphic",
                                  fill: "black",
                                  intrinsicHeight: 105,
                                  intrinsicWidth: 131,
                                  name: "graphic",
                                  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="131.211" height="105.479"><g data-name="google cloud"><path fill="#ea4335" d="m87.26 29.12 11.405-11.406.758-4.8c-20.781-18.9-53.818-16.755-72.557 4.471a52.674 52.674 0 0 0-11.122 20.839l4.083-.578 22.811-3.755 1.758-1.8a28.573 28.573 0 0 1 39.017-3.164Z" data-name="Path 215"/><path fill="#4285f4" d="M114.917 37.883a51.382 51.382 0 0 0-15.489-24.974L83.419 28.918a28.452 28.452 0 0 1 10.445 22.568v2.84a14.167 14.167 0 1 1 0 28.334h-28.53l-2.8 3.042v17.091l2.8 2.684h28.531a36.956 36.956 0 0 0 21.053-67.594" data-name="Path 216"/><path fill="#34a853" d="M36.836 105.477h28.5V82.666h-28.5a14.04 14.04 0 0 1-5.842-1.278l-4.043 1.238-11.486 11.405-1 3.881a36.987 36.987 0 0 0 22.371 7.565" data-name="Path 217"/><path fill="#fbbc05" d="M36.837 31.484a37.062 37.062 0 0 0-22.371 66.438l16.53-16.53a14.247 14.247 0 1 1 18.849-18.849l16.53-16.53a37.023 37.023 0 0 0-29.538-14.529" data-name="Path 218"/></g></svg>',
                                  withExternalLayout: !0,
                                }),
                                e("div", {
                                  className: "framer-1jebbtr",
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "13px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Google Cloud",
                                      }),
                                    }),
                                    className: "framer-h0naa2",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            o("div", {
                              className: "framer-1e9uwp3",
                              children: [
                                e(re, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1080,
                                    intrinsicWidth: 1920,
                                    pixelHeight: 2160,
                                    pixelWidth: 3840,
                                    sizes: "71px",
                                    src: "https://framerusercontent.com/images/2YyB7Kp57Bk6YWwTiSxy59ExQ4.png?scale-down-to=2048",
                                    srcSet:
                                      "https://framerusercontent.com/images/2YyB7Kp57Bk6YWwTiSxy59ExQ4.png?scale-down-to=512 512w,https://framerusercontent.com/images/2YyB7Kp57Bk6YWwTiSxy59ExQ4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/2YyB7Kp57Bk6YWwTiSxy59ExQ4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/2YyB7Kp57Bk6YWwTiSxy59ExQ4.png 3840w",
                                  },
                                  className: "framer-yah5z0",
                                  "data-framer-name": "image",
                                  name: "image",
                                }),
                                e("div", {
                                  className: "framer-l4ensq",
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "13px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Amazon Web",
                                      }),
                                    }),
                                    className: "framer-1c7sb0q",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                o("header", {
                  className: "framer-dxsxai",
                  "data-framer-name": "How To Buy",
                  name: "How To Buy",
                  children: [
                    o("div", {
                      className: "framer-1hsl5jl",
                      children: [
                        e("div", {
                          className: "framer-56xeg4",
                          children: e(b, {
                            children: e(R, {
                              className: "framer-1r4x8n6-container",
                              children: e(Se, {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderRadius: 0,
                                bottomLeftRadius: 0,
                                bottomRightRadius: 0,
                                controls: !1,
                                height: "100%",
                                id: "lXlaqVFmX",
                                isMixedBorderRadius: !1,
                                layoutId: "lXlaqVFmX",
                                loop: !0,
                                muted: !0,
                                objectFit: "cover",
                                playing: !0,
                                posterEnabled: !1,
                                srcFile:
                                  "https://framerusercontent.com/assets/s5ZkvdYAaBRgORGfec5c7oq9sU.mp4",
                                srcType: "Upload",
                                srcUrl:
                                  "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                startTime: 0,
                                style: { height: "100%", width: "100%" },
                                topLeftRadius: 0,
                                topRightRadius: 0,
                                volume: 25,
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        o("div", {
                          className: "framer-rd0g0c",
                          children: [
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                    "--framer-font-size": "24px",
                                    "--framer-line-height": "0.8em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "AeroAI",
                                }),
                              }),
                              className: "framer-9an0rz",
                              fonts: ["CUSTOM;Square Pixel7 Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NxdWFyZSBQaXhlbDcgUmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Square Pixel7 Regular", "Square Pixel7 Regular Placeholder", sans-serif',
                                    "--framer-font-size": "24px",
                                    "--framer-line-height": "0.8em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "rgba(255, 255, 255, 0.7)",
                                  },
                                  children: "Network",
                                }),
                              }),
                              className: "framer-4guerp",
                              fonts: ["CUSTOM;Square Pixel7 Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e(b, {
                      height: 41,
                      children: e(R, {
                        className: "framer-1rl4ciz-container",
                        children: e(De, {
                          b7KjVooU6: "https://aero-ai-app.vercel.app/",
                          GEEqX3ypi: "AeroAI | DApp",
                          height: "100%",
                          id: "e2koohhiv",
                          layoutId: "e2koohhiv",
                          variant: "glH1e7neN",
                          width: "100%",
                        }),
                      }),
                    }),
                    o("div", {
                      className: "framer-1ajhap7",
                      children: [
                        o("div", {
                          className: "framer-q14lok",
                          children: [
                            o("div", {
                              className: "framer-1lidq1z",
                              children: [
                                e(xe, {
                                  href: "https://t.me/",
                                  nodeId: "zRtAaVNRU",
                                  children: e(I, {
                                    as: "a",
                                    className: "framer-oabw2j framer-1uk29yy",
                                    "data-framer-name": "graphic",
                                    fill: "rgb(255, 255, 255)",
                                    intrinsicHeight: 24,
                                    intrinsicWidth: 24,
                                    name: "graphic",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.114 9.291c.552-.552 1.1-1.84-1.2-.276a395.806 395.806 0 0 1-6.489 4.372 2.7 2.7 0 0 1-2.117.046c-1.38-.414-2.991-.966-2.991-.966s-1.1-.691.783-1.427c0 0 7.961-3.267 10.722-4.418 1.058-.46 4.647-1.932 4.647-1.932s1.657-.645 1.519.92c-.046.644-.414 2.9-.782 5.338-.553 3.451-1.151 7.225-1.151 7.225s-.092 1.058-.874 1.242a3.787 3.787 0 0 1-2.3-.828c-.184-.138-3.451-2.209-4.648-3.221a.872.872 0 0 1 .046-1.473 169.31 169.31 0 0 0 4.835-4.602Z"/></svg>',
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(xe, {
                                  href: "https://twitter.com/",
                                  nodeId: "FIc5ukXQl",
                                  children: e(I, {
                                    as: "a",
                                    className: "framer-1ha2nc5 framer-1uk29yy",
                                    "data-framer-name": "graphic",
                                    layout: "position",
                                    name: "graphic",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 6.887 5 L 7.88 5 C 8.918 5 9.437 5 9.877 5.233 C 10.316 5.466 10.607 5.895 11.19 6.754 L 11.19 6.754 L 18.44 17.439 C 18.906 18.125 19.14 18.469 18.998 18.734 C 18.858 19 18.443 19 17.613 19 L 16.62 19 C 15.582 19 15.063 19 14.623 18.767 C 14.184 18.534 13.893 18.105 13.31 17.246 L 6.06 6.562 C 5.594 5.875 5.36 5.532 5.502 5.266 C 5.642 5 6.057 5 6.887 5 Z M 16.75 5.5 L 14.5 8.2 M 6 18.4 L 9.114 14.663" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                                    svgContentId: 11067205176,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(xe, {
                                  href: "https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000",
                                  nodeId: "FEzeb35Td",
                                  children: e(I, {
                                    as: "a",
                                    className: "framer-u0lb0u framer-1uk29yy",
                                    "data-framer-name": "graphic",
                                    fill: "black",
                                    intrinsicHeight: 445,
                                    intrinsicWidth: 388,
                                    name: "graphic",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="388" height="445"><image width="388" height="445" xlink:href="data:img/png;base64,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"/></svg>',
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            e("div", { className: "framer-1mhvqcl" }),
                          ],
                        }),
                        o("div", {
                          className: "framer-12aq4lz",
                          children: [
                            e(ke, {
                              links: [
                                {
                                  href: {
                                    hash: ":fc82TyoDm",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":fc82TyoDm",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":fc82TyoDm",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (V) =>
                                e(b, {
                                  height: 29,
                                  children: e(R, {
                                    className: "framer-os3s1a-container",
                                    children: e(te, {
                                      breakpoint: l,
                                      overrides: {
                                        ifpCxQDk0: { hF2LFP6Lw: V[1] },
                                        mU1l1Nn8k: { hF2LFP6Lw: V[2] },
                                      },
                                      children: e(ve, {
                                        eFwAMUY6Q: 16,
                                        EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                                        height: "100%",
                                        hF2LFP6Lw: V[0],
                                        id: "wLNPmpLko",
                                        layoutId: "wLNPmpLko",
                                        UOnHvg9Us: "Ecosystem",
                                        variant: "QaXuD7I3S",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            e("div", { className: "framer-1f5qdfs" }),
                            e(ke, {
                              links: [
                                {
                                  href: {
                                    hash: ":gkm8Wl_5r",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":gkm8Wl_5r",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":gkm8Wl_5r",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (V) =>
                                e(b, {
                                  height: 29,
                                  children: e(R, {
                                    className: "framer-lt7bzw-container",
                                    children: e(te, {
                                      breakpoint: l,
                                      overrides: {
                                        ifpCxQDk0: { hF2LFP6Lw: V[1] },
                                        mU1l1Nn8k: { hF2LFP6Lw: V[2] },
                                      },
                                      children: e(ve, {
                                        eFwAMUY6Q: 16,
                                        EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                                        height: "100%",
                                        hF2LFP6Lw: V[0],
                                        id: "CMDwWRD56",
                                        layoutId: "CMDwWRD56",
                                        UOnHvg9Us: "Utility",
                                        variant: "QaXuD7I3S",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            e("div", { className: "framer-1hbakz0" }),
                            e(ke, {
                              links: [
                                {
                                  href: {
                                    hash: ":R7c8lrMDK",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":R7c8lrMDK",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":R7c8lrMDK",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (V) =>
                                e(b, {
                                  height: 29,
                                  children: e(R, {
                                    className: "framer-7zlmov-container",
                                    children: e(te, {
                                      breakpoint: l,
                                      overrides: {
                                        ifpCxQDk0: { hF2LFP6Lw: V[1] },
                                        mU1l1Nn8k: { hF2LFP6Lw: V[2] },
                                      },
                                      children: e(ve, {
                                        eFwAMUY6Q: 16,
                                        EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                                        height: "100%",
                                        hF2LFP6Lw: V[0],
                                        id: "sZOZy9yqu",
                                        layoutId: "sZOZy9yqu",
                                        style: { height: "100%" },
                                        UOnHvg9Us: "Nodes",
                                        variant: "QaXuD7I3S",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            e(ke, {
                              links: [
                                {
                                  href: {
                                    hash: ":Njp9BPuNm",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":Njp9BPuNm",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":Njp9BPuNm",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (V) =>
                                e(b, {
                                  height: 29,
                                  children: e(R, {
                                    className: "framer-1pyul7p-container",
                                    children: e(te, {
                                      breakpoint: l,
                                      overrides: {
                                        ifpCxQDk0: { hF2LFP6Lw: V[1] },
                                        mU1l1Nn8k: { hF2LFP6Lw: V[2] },
                                      },
                                      children: e(ve, {
                                        eFwAMUY6Q: 16,
                                        EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                                        height: "100%",
                                        hF2LFP6Lw: V[0],
                                        id: "V40reege4",
                                        layoutId: "V40reege4",
                                        style: { height: "100%" },
                                        UOnHvg9Us: "Roadmap",
                                        variant: "QaXuD7I3S",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            e("div", { className: "framer-6wr3tn" }),
                            e(ke, {
                              links: [
                                {
                                  href: {
                                    hash: ":CnEn2_p1q",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":CnEn2_p1q",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":CnEn2_p1q",
                                    webPageId: "mU9wW70pd",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (V) =>
                                e(b, {
                                  height: 29,
                                  children: e(R, {
                                    className: "framer-fzdzcg-container",
                                    children: e(te, {
                                      breakpoint: l,
                                      overrides: {
                                        ifpCxQDk0: { hF2LFP6Lw: V[1] },
                                        mU1l1Nn8k: { hF2LFP6Lw: V[2] },
                                      },
                                      children: e(ve, {
                                        eFwAMUY6Q: 16,
                                        EiHfMDUbH: "rgba(255, 255, 255, 0.7)",
                                        height: "100%",
                                        hF2LFP6Lw: V[0],
                                        id: "Ed_MUuA_j",
                                        layoutId: "Ed_MUuA_j",
                                        UOnHvg9Us: "FAQ",
                                        variant: "QaXuD7I3S",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                        o("div", {
                          className: "framer-1by9ay1",
                          children: [
                            e("div", { className: "framer-1ngw5oe" }),
                            e(xe, {
                              href: { webPageId: "mU9wW70pd" },
                              nodeId: "CtTvat4fG",
                              openInNewTab: !1,
                              smoothScroll: !0,
                              children: o("a", {
                                className: "framer-cjlp8o framer-1uk29yy",
                                children: [
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "13px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Scroll up",
                                      }),
                                    }),
                                    className: "framer-1altxpt",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(b, {
                                    children: e(R, {
                                      className: "framer-anpl9y-container",
                                      children: e(ie, {
                                        height: "100%",
                                        id: "QNtq7HwU2",
                                        isForwardsDirection: !0,
                                        layoutId: "QNtq7HwU2",
                                        loop: !0,
                                        playing: !0,
                                        poster: "Auto",
                                        posterProgress: 0,
                                        progress: 64,
                                        speed: 1,
                                        srcFile:
                                          "https://framerusercontent.com/assets/xpivgnKT0WwECSf57VaZ5n3CGMo.json",
                                        srcType: "Upload",
                                        srcUrl:
                                          "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e("div", {
                      className: "framer-1a8rcpd",
                      children: e(p, {
                        __fromCanvasComponent: !0,
                        children: e(s, {
                          children: e("p", {
                            style: {
                              "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                              "--framer-font-family":
                                '"Roboto", "Roboto Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-weight": "300",
                              "--framer-text-color": "rgba(255, 255, 255, 0.7)",
                            },
                            children: "\xA9 2024, Aero AI",
                          }),
                        }),
                        className: "framer-1et9zun",
                        fonts: ["GF;Roboto-300"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e("div", { className: ae(vt, ...Z), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Es = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Aa.bodyClassName}-framer-L56kV { background: rgb(8, 8, 8); }`,
    ".framer-L56kV.framer-1uk29yy, .framer-L56kV .framer-1uk29yy { display: block; }",
    ".framer-L56kV.framer-10h8fyi { align-content: center; align-items: center; background-color: #080808; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-L56kV .framer-qc61v8-container { flex: none; height: 100vh; left: calc(50.00000000000002% - 100% / 2); pointer-events: none; position: fixed; top: 0px; width: 100%; z-index: 8; }",
    ".framer-L56kV .framer-1omwwuu-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 5; }",
    ".framer-L56kV .framer-1att3x4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-1vimedr { align-content: flex-start; align-items: flex-start; bottom: -233px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 129%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; position: absolute; width: 100%; }",
    ".framer-L56kV .framer-rtjsba-container { flex: none; height: 100%; pointer-events: none; position: relative; width: 100%; z-index: 0; }",
    ".framer-L56kV .framer-1u4s5cl, .framer-L56kV .framer-10ktbhe { align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; pointer-events: none; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }",
    ".framer-L56kV .framer-1yf5x1i, .framer-L56kV .framer-99r80i, .framer-L56kV .framer-15q8w1z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-1ixv49r { flex: none; height: 200px; overflow: hidden; position: relative; width: 602px; }",
    ".framer-L56kV .framer-1dyvsic, .framer-L56kV .framer-hvaq05, .framer-L56kV .framer-14w0vna, .framer-L56kV .framer-1h90xqb, .framer-L56kV .framer-siw04m, .framer-L56kV .framer-phvbdn, .framer-L56kV .framer-11jnq71, .framer-L56kV .framer-1d1rvqu, .framer-L56kV .framer-1jdkq78, .framer-L56kV .framer-17e6beb, .framer-L56kV .framer-1yqyh6u, .framer-L56kV .framer-35c9gz, .framer-L56kV .framer-1650pcq, .framer-L56kV .framer-1mct9vu, .framer-L56kV .framer-1h0oltq, .framer-L56kV .framer-foie8v, .framer-L56kV .framer-epsrg2, .framer-L56kV .framer-dripfl, .framer-L56kV .framer-36oicc, .framer-L56kV .framer-87p0eo, .framer-L56kV .framer-wew7t1, .framer-L56kV .framer-mjps1h, .framer-L56kV .framer-5d0qj6, .framer-L56kV .framer-17eddfj, .framer-L56kV .framer-ft58rl, .framer-L56kV .framer-sjm2te, .framer-L56kV .framer-1ehxcjn, .framer-L56kV .framer-3s2zp6, .framer-L56kV .framer-1i437q, .framer-L56kV .framer-krox52, .framer-L56kV .framer-19o8f9j, .framer-L56kV .framer-1ea46cz, .framer-L56kV .framer-173qdl2, .framer-L56kV .framer-2ucmge, .framer-L56kV .framer-d9pzr0, .framer-L56kV .framer-1gdl41x, .framer-L56kV .framer-9ge15t, .framer-L56kV .framer-jjgn78, .framer-L56kV .framer-wk01mi, .framer-L56kV .framer-tjqkd3, .framer-L56kV .framer-1ienq62, .framer-L56kV .framer-ts95gx, .framer-L56kV .framer-t6m3e7, .framer-L56kV .framer-8nrs5i, .framer-L56kV .framer-nolgt8, .framer-L56kV .framer-ytnlq3, .framer-L56kV .framer-amlxvk, .framer-L56kV .framer-cnuwp3, .framer-L56kV .framer-afphl2, .framer-L56kV .framer-of9hvk, .framer-L56kV .framer-pe28m9, .framer-L56kV .framer-lispcf, .framer-L56kV .framer-1l1ubx0, .framer-L56kV .framer-40tate, .framer-L56kV .framer-1wci5y8, .framer-L56kV .framer-g1o5m6, .framer-L56kV .framer-1mvbwvc, .framer-L56kV .framer-1xai8z, .framer-L56kV .framer-9an0rz, .framer-L56kV .framer-4guerp, .framer-L56kV .framer-1altxpt, .framer-L56kV .framer-1et9zun { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-L56kV .framer-1wges49 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 10px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-iafr93 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 699px; word-break: break-word; word-wrap: break-word; }",
    ".framer-L56kV .framer-1l8lg67-container, .framer-L56kV .framer-3ljazk-container, .framer-L56kV .framer-1r2zrgt-container, .framer-L56kV .framer-96oel1-container, .framer-L56kV .framer-lytiq2-container, .framer-L56kV .framer-1ylba2i-container, .framer-L56kV .framer-ij772n-container, .framer-L56kV .framer-qzkrg4-container, .framer-L56kV .framer-voc85f-container, .framer-L56kV .framer-1rl4ciz-container, .framer-L56kV .framer-os3s1a-container, .framer-L56kV .framer-lt7bzw-container, .framer-L56kV .framer-fzdzcg-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-L56kV .framer-1u3lkl9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-h7lh5j { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 100px; position: relative; width: 1px; z-index: 1; }",
    ".framer-L56kV .framer-kw2k6c, .framer-L56kV .framer-e8s6sl, .framer-L56kV .framer-7act3i, .framer-L56kV .framer-116290b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-mmnzm8, .framer-L56kV .framer-lwupfh { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-f7tzbg, .framer-L56kV .framer-1dzruyh, .framer-L56kV .framer-16svfos, .framer-L56kV .framer-1kcoyu2, .framer-L56kV .framer-mkm164, .framer-L56kV .framer-1aya719, .framer-L56kV .framer-eb3ulv, .framer-L56kV .framer-1hsl5jl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-1f4gvou { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 732px; word-break: break-word; word-wrap: break-word; }",
    ".framer-L56kV .framer-tk3rnv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-ic5mlg { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.4); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-cycdoh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 26px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-1sy3zy3 { -webkit-filter: invert(1); aspect-ratio: 1 / 1; filter: invert(1); flex: none; height: var(--framer-aspect-ratio-supported, 25px); position: relative; width: 25px; }",
    ".framer-L56kV .framer-5rvh6h { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.4); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-djkxts { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 26px); position: relative; width: 26px; }",
    ".framer-L56kV .framer-ftt1vx, .framer-L56kV .framer-dwqq99 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.4); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: 180px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-1dkl3g1 { border-bottom-left-radius: 13px; border-bottom-right-radius: 13px; border-top-left-radius: 13px; border-top-right-radius: 13px; flex: none; height: 25px; overflow: hidden; position: relative; width: 26px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-1u07ksi { aspect-ratio: 1 / 1; bottom: 0px; flex: none; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: var(--framer-aspect-ratio-supported, 25px); }",
    ".framer-L56kV .framer-1kvu5yj, .framer-L56kV .framer-11mh6f5, .framer-L56kV .framer-1yfzvm3 { background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 47.74774774774775%, rgba(255, 255, 255, 0) 100%); flex: none; height: 2px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-L56kV .framer-19eq6tb { align-content: center; align-items: center; background-color: rgba(23, 23, 23, 0.5); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 100px; position: relative; width: 100%; z-index: 2; }",
    ".framer-L56kV .framer-13329jz, .framer-L56kV .framer-d19w5o, .framer-L56kV .framer-10l4rg2, .framer-L56kV .framer-kvpvri, .framer-L56kV .framer-14vsjue, .framer-L56kV .framer-1jebbtr, .framer-L56kV .framer-l4ensq, .framer-L56kV .framer-1lidq1z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-19mzy0m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 550px; }",
    ".framer-L56kV .framer-ffz21j, .framer-L56kV .framer-kvso3i, .framer-L56kV .framer-1q1zmku { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-11yxrhk-container, .framer-L56kV .framer-11q7df1-container, .framer-L56kV .framer-12l1hhc-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 50px); position: relative; width: 50px; }",
    ".framer-L56kV .framer-1s0nv6d, .framer-L56kV .framer-q6fkhf, .framer-L56kV .framer-583vns { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-11qnij2, .framer-L56kV .framer-a6fr1o, .framer-L56kV .framer-19u8667 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25); white-space: pre-wrap; width: 503px; word-break: break-word; word-wrap: break-word; }",
    ".framer-L56kV .framer-1xs0i2p, .framer-L56kV .framer-1xe810i { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 40px; min-width: 115px; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-1wke98p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 550px; }",
    ".framer-L56kV .framer-1sxw5i0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 107px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 470px; }",
    ".framer-L56kV .framer-qhuikp, .framer-L56kV .framer-46zllt, .framer-L56kV .framer-1pji8sr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-L56kV .framer-1n2a7xh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-zwm4xk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 280px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 280px; }",
    ".framer-L56kV .framer-1qohudj { aspect-ratio: 1.001002004008016 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 277px); left: 50%; overflow: visible; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 99%; z-index: 3; }",
    ".framer-L56kV .framer-6pajwk { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 50px); left: 50%; opacity: 0.8; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 50px; z-index: 2; }",
    ".framer-L56kV .framer-11njqcz { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 260px); overflow: visible; position: relative; width: 260px; }",
    ".framer-L56kV .framer-1k98nqy, .framer-L56kV .framer-7icdfx, .framer-L56kV .framer-8bxjjv, .framer-L56kV .framer-169nj6o, .framer-L56kV .framer-5pwtu5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-3eessr, .framer-L56kV .framer-1twgiqm, .framer-L56kV .framer-1u9vd9v, .framer-L56kV .framer-1s5wh9t { aspect-ratio: 4.583153347732181 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 37px); overflow: visible; position: relative; width: 168px; }",
    ".framer-L56kV .framer-zoimib { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 100px 40px 0px 40px; position: relative; width: 1200px; }",
    ".framer-L56kV .framer-15gjjqy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 858px; word-break: break-word; word-wrap: break-word; }",
    ".framer-L56kV .framer-1py9rin { aspect-ratio: 1.3840830449826989 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; width: 25px; }",
    ".framer-L56kV .framer-31c4dg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px 40px 100px 40px; position: relative; width: 1200px; }",
    ".framer-L56kV .framer-xiqmmp { align-content: center; align-items: center; background: linear-gradient(270deg, rgba(8, 8, 8, 0) 0%, rgb(8, 8, 8) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; pointer-events: none; position: relative; width: 501px; z-index: 2; }",
    ".framer-L56kV .framer-1iutg3z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 500px; z-index: 2; }",
    ".framer-L56kV .framer-eeuzgc-container { flex: none; height: 372px; position: relative; width: 277px; }",
    ".framer-L56kV .framer-o66rxo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 300px; justify-content: flex-start; overflow: visible; padding: 0px; pointer-events: auto; position: relative; width: 689px; z-index: 0; }",
    ".framer-L56kV .framer-15fbxw8-container { flex: none; height: 280px; position: relative; width: 360px; }",
    ".framer-L56kV .framer-jnj6r6, .framer-L56kV .framer-byilcb, .framer-L56kV .framer-1fi426n, .framer-L56kV .framer-6z5u2p { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 280px; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 360px; }",
    ".framer-L56kV .framer-1mcbdaq, .framer-L56kV .framer-nse08o, .framer-L56kV .framer-1z037h2, .framer-L56kV .framer-l6elfo { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 187px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-nnfpyp-container, .framer-L56kV .framer-163v3tm-container, .framer-L56kV .framer-znhe00-container, .framer-L56kV .framer-tllfol-container { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 200px); position: relative; width: 1px; }",
    ".framer-L56kV .framer-w4uc46-container, .framer-L56kV .framer-1z5mah-container, .framer-L56kV .framer-1rnxcrj-container, .framer-L56kV .framer-18k90tr-container { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 155px); position: relative; width: 1px; }",
    ".framer-L56kV .framer-17d0kez { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 20px 20px; position: relative; width: 100%; z-index: 1; }",
    ".framer-L56kV .framer-112dejk, .framer-L56kV .framer-1upbzd5 { --border-bottom-width: 1px; --border-color: rgba(34, 34, 34, 0.4); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; aspect-ratio: 1 / 1; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 50px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 50px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-9v82iu-container, .framer-L56kV .framer-qn66fi-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 75px); position: relative; width: 75px; }",
    ".framer-L56kV .framer-xarliq { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 20px; pointer-events: none; position: relative; width: 401px; }",
    ".framer-L56kV .framer-3vy2bn, .framer-L56kV .framer-1ucpsya { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-L56kV .framer-ggiwtr-container, .framer-L56kV .framer-aue7ht-container { flex: 1 0 0px; height: 10px; position: relative; width: 1px; }",
    ".framer-L56kV .framer-j4qpvd, .framer-L56kV .framer-1oqkujr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 2px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-L56kV .framer-ax2tqe, .framer-L56kV .framer-1rdhdxf { background-color: #bbddff; flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-yonhrj, .framer-L56kV .framer-1lf50w1 { background-color: #cceeff; flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-3mq4ap, .framer-L56kV .framer-smk7sx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 26px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 52px; }",
    ".framer-L56kV .framer-vmw4bz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 100px; position: relative; width: 1200px; z-index: 2; }",
    ".framer-L56kV .framer-15x2ht9 { --border-bottom-width: 2px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; aspect-ratio: 1.7745740498034075 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 2px 2px 4px 0px rgba(255, 255, 255, 0.2); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 564px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-d4ddox { align-content: center; align-items: center; bottom: 90px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; left: 20px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }",
    ".framer-L56kV .framer-dvlwe6-container { aspect-ratio: 1.7730496453900708 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 564px); position: relative; width: 1px; }",
    ".framer-L56kV .framer-1gz33fx { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 16%; justify-content: center; left: calc(49.926144756277715% - 100% / 2); overflow: hidden; padding: 20px; pointer-events: none; position: absolute; top: calc(92.2673656618611% - 15.98951507208388% / 2); width: 100%; }",
    ".framer-L56kV .framer-adzj48 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 100px 0px 100px 0px; position: relative; width: 1200px; z-index: 2; }",
    ".framer-L56kV .framer-1xcus7k { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 2px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px 40px 20px 20px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-jy4eem { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 0px; --border-right-width: 2px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; align-self: stretch; background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 46.3963963963964%, rgba(255, 255, 255, 0) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: auto; justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 242px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-19cyrs2 { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 0px; --border-right-width: 2px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; align-self: stretch; background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 46.3963963963964%, rgba(255, 255, 255, 0) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: auto; justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-1mvcmbf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 100px 0px 100px 0px; position: relative; width: 1200px; z-index: 0; }",
    ".framer-L56kV .framer-1yqbavw { align-content: center; align-items: center; aspect-ratio: 1.0087719298245614 / 1; bottom: -443px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 885px); justify-content: center; opacity: 0.2; overflow: visible; padding: 0px; position: absolute; right: -446px; width: 893px; z-index: 1; }",
    ".framer-L56kV .framer-1e180kc, .framer-L56kV .framer-kfk8mv { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 107px); opacity: 0.5; overflow: visible; position: relative; width: 107px; }",
    ".framer-L56kV .framer-kcp6pq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 702px; word-break: break-word; word-wrap: break-word; }",
    ".framer-L56kV .framer-46c8d2 { align-content: center; align-items: center; aspect-ratio: 1.0087719298245614 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 885px); justify-content: center; left: -446px; opacity: 0.2; overflow: visible; padding: 0px; position: absolute; top: -442px; width: 893px; z-index: 1; }",
    ".framer-L56kV .framer-1ks8qs5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }",
    ".framer-L56kV .framer-1x6beln { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-cvnmvh, .framer-L56kV .framer-jhv71z { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.4); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 253px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 380px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-11z4c64-container, .framer-L56kV .framer-1ra0jvb-container { aspect-ratio: 1.5 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 254px); position: relative; width: 380px; }",
    ".framer-L56kV .framer-9ovcln { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: auto; }",
    ".framer-L56kV .framer-1tywh60 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-1nvcnbd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 380px; }",
    ".framer-L56kV .framer-1hmm7xv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-1etly8h { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 3; }",
    ".framer-L56kV .framer-5czh7b { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-L56kV .framer-bcehvi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1120px; overflow: hidden; padding: 0px 100px 0px 100px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-7mzz3m, .framer-L56kV .framer-hukc0o { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.25); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; align-self: stretch; background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-vlkq83, .framer-L56kV .framer-1biyh94 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-L56kV .framer-1j955gc-container, .framer-L56kV .framer-zu6vr2-container { flex: none; height: 100px; position: relative; width: 100px; }",
    ".framer-L56kV .framer-190suqv { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.25); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-12vldwb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-1fvckj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 196px); opacity: 0.9; position: relative; width: 196px; }",
    ".framer-L56kV .framer-1d24b1o { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: #000000; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 67px); justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 67px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-L56kV .framer-4uro2w-container, .framer-L56kV .framer-1r4x8n6-container { flex: none; height: 78px; position: relative; width: 82px; }",
    ".framer-L56kV .framer-1p5js0l { aspect-ratio: 1 / 1; bottom: -422px; flex: none; height: var(--framer-aspect-ratio-supported, 229px); left: 50%; overflow: visible; position: absolute; transform: translateX(-50%); width: 229px; z-index: 1; }",
    ".framer-L56kV .framer-i4pup4 { align-content: center; align-items: center; bottom: -386px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 501px; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: -2057px; width: 502px; z-index: 1; }",
    ".framer-L56kV .framer-1dfhkm3 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-L56kV .framer-18ne1kb { aspect-ratio: 1 / 1; bottom: 0px; flex: none; left: 50%; opacity: 0.1; position: absolute; top: 0px; transform: translateX(-50%); width: var(--framer-aspect-ratio-supported, 501px); }",
    ".framer-L56kV .framer-1027vn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 474px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-gs4xnr-container { aspect-ratio: 1.8694158075601375 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 642px); position: relative; width: 1px; }",
    ".framer-L56kV .framer-gz84v8 { align-content: center; align-items: center; background: radial-gradient(50% 50% at 50% 50%, rgba(8, 8, 8, 0.2) 0%, rgb(8, 8, 8) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; pointer-events: none; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }",
    ".framer-L56kV .framer-1d7lnlq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.15; position: relative; white-space: pre; width: auto; }",
    ".framer-L56kV .framer-1fwxyvy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 50px 0px 0px 0px; position: relative; width: 1200px; z-index: 0; }",
    ".framer-L56kV .framer-1udslm7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 40px 200px 40px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-1clqavn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 40px; height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-L56kV .framer-4n5it4, .framer-L56kV .framer-1lg6nyp, .framer-L56kV .framer-v9qv0i { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(255, 255, 255, 0.02); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 419px; justify-content: space-between; overflow: hidden; padding: 30px; position: relative; width: 340px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-1r7bxn9, .framer-L56kV .framer-1oe33u8, .framer-L56kV .framer-aghp2z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-sewnhf, .framer-L56kV .framer-1rjopix, .framer-L56kV .framer-14l7mz5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 48px; position: relative; white-space: pre; width: auto; }",
    ".framer-L56kV .framer-1ai3fpc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 0px 20px 0px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-5fqzbs, .framer-L56kV .framer-acwpb6, .framer-L56kV .framer-2uyrro, .framer-L56kV .framer-y5i0jy, .framer-L56kV .framer-1n2wff, .framer-L56kV .framer-1vxjaw9, .framer-L56kV .framer-azz5a3, .framer-L56kV .framer-17kzhy3, .framer-L56kV .framer-ggg0w2, .framer-L56kV .framer-cc0hua, .framer-L56kV .framer-14869ba, .framer-L56kV .framer-pwuasq, .framer-L56kV .framer-fz8d4b, .framer-L56kV .framer-ucbu9s, .framer-L56kV .framer-p9j0pq, .framer-L56kV .framer-1t5mwvr, .framer-L56kV .framer-64whhf, .framer-L56kV .framer-x2pqta, .framer-L56kV .framer-1gkbuud, .framer-L56kV .framer-tq6i0y, .framer-L56kV .framer-1bnz9cq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-ajqtjb, .framer-L56kV .framer-qo34qf, .framer-L56kV .framer-141vz0l, .framer-L56kV .framer-1hc6nlb, .framer-L56kV .framer-137c8ry, .framer-L56kV .framer-97vq4d, .framer-L56kV .framer-7dap1z, .framer-L56kV .framer-9a4425, .framer-L56kV .framer-wvm7s, .framer-L56kV .framer-1r0ktyv, .framer-L56kV .framer-p1u81e, .framer-L56kV .framer-izce9y, .framer-L56kV .framer-1g1xxce { flex: none; height: 22px; position: relative; width: 24px; }",
    ".framer-L56kV .framer-1caij0t, .framer-L56kV .framer-qkx8um, .framer-L56kV .framer-ieuct9 { align-content: center; align-items: center; background-color: rgba(255, 255, 255, 0.04); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.15), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14398), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.12711), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.10451), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-1d7sf54-container, .framer-L56kV .framer-mgjnza-container, .framer-L56kV .framer-k0fwm4-container { flex: none; height: 23px; position: relative; width: 123px; }",
    ".framer-L56kV .framer-1b6t955, .framer-L56kV .framer-w04wxw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 0px 20px 0px; position: relative; width: 280px; }",
    ".framer-L56kV .framer-1j2qgk6, .framer-L56kV .framer-1v3qopm { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-L56kV .framer-14a4dqk, .framer-L56kV .framer-1stswp2, .framer-L56kV .framer-wq1wh3, .framer-L56kV .framer-lw7i3u, .framer-L56kV .framer-11uby83, .framer-L56kV .framer-1hrg1ks, .framer-L56kV .framer-5wiyug, .framer-L56kV .framer-so7rwg { flex: none; height: 22px; opacity: 0.5; position: relative; width: 24px; }",
    ".framer-L56kV .framer-17g1z2q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 40px 100px 40px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-1w16on9-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-L56kV .framer-14f87m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 200px 100px 100px 100px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-1mlu5pa { align-content: center; align-items: center; aspect-ratio: 1 / 1; bottom: -372px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 865px); justify-content: center; left: 50%; opacity: 0.5; overflow: hidden; padding: 0px; position: absolute; transform: translateX(-50%); width: 865px; z-index: 0; }",
    ".framer-L56kV .framer-1d5ocpg { aspect-ratio: 1.001002004008016 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 855px); left: 50%; overflow: visible; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 99%; z-index: 3; }",
    ".framer-L56kV .framer-1fnuqvc { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 154px); left: 50%; opacity: 0.8; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 154px; z-index: 2; }",
    ".framer-L56kV .framer-1y2u8eq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 735px); overflow: visible; position: relative; width: 735px; }",
    ".framer-L56kV .framer-12mlma6 { align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(8, 8, 8, 0) -42%, rgb(0, 0, 0) 55.21889076576577%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; pointer-events: none; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 4; }",
    ".framer-L56kV .framer-11gc35f { align-content: center; align-items: center; background-color: rgba(255, 255, 255, 0.9); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 907px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-L56kV .framer-1bpjf4r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-km57x1, .framer-L56kV .framer-pxxxh0 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); overflow: visible; position: relative; width: 70px; }",
    ".framer-L56kV .framer-1nwc9by { aspect-ratio: 0.9784037558685446 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 65px); position: relative; width: 64px; }",
    ".framer-L56kV .framer-xs0d3x { -webkit-filter: invert(1); aspect-ratio: 0.99822695035461 / 1; filter: invert(1); flex: none; height: var(--framer-aspect-ratio-supported, 65px); overflow: visible; position: relative; width: 65px; }",
    ".framer-L56kV .framer-hwvn1v { flex: none; height: 60px; position: relative; width: 105px; }",
    ".framer-L56kV .framer-164nol4 { aspect-ratio: 0.9978002639683238 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); overflow: visible; position: relative; width: 70px; z-index: 1; }",
    ".framer-L56kV .framer-1ryouah { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-uqez3r { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: 80px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-cnc6pu { -webkit-filter: grayscale(1); align-content: center; align-items: center; display: flex; filter: grayscale(1); flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-nzh8av { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 55px); position: relative; width: 55px; }",
    ".framer-L56kV .framer-whkaf1, .framer-L56kV .framer-h0naa2, .framer-L56kV .framer-1c7sb0q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-L56kV .framer-13y2rzn, .framer-L56kV .framer-1e9uwp3 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-L56kV .framer-iory3a { aspect-ratio: 1.2476190476190476 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 50px; }",
    ".framer-L56kV .framer-yah5z0 { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: visible; position: relative; width: 71px; }",
    ".framer-L56kV .framer-dxsxai { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 50px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-56xeg4 { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: #000000; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 67px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 67px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-L56kV .framer-rd0g0c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 250px; }",
    ".framer-L56kV .framer-1ajhap7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-L56kV .framer-q14lok, .framer-L56kV .framer-1by9ay1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 250px; }",
    ".framer-L56kV .framer-oabw2j { aspect-ratio: 1 / 1; flex: none; height: 24px; position: relative; text-decoration: none; width: var(--framer-aspect-ratio-supported, 24px); }",
    ".framer-L56kV .framer-1ha2nc5 { flex: none; height: 24px; position: relative; text-decoration: none; width: 24px; }",
    ".framer-L56kV .framer-u0lb0u { aspect-ratio: 0.8719101123595505 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; text-decoration: none; width: 16px; }",
    ".framer-L56kV .framer-1mhvqcl, .framer-L56kV .framer-1ngw5oe { align-content: center; align-items: center; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; min-width: 40px; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-12aq4lz { align-content: center; align-items: center; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-L56kV .framer-1f5qdfs, .framer-L56kV .framer-1hbakz0, .framer-L56kV .framer-6wr3tn { background-color: rgba(255, 255, 255, 0.2); flex: none; height: 20px; overflow: hidden; position: relative; width: 1px; }",
    ".framer-L56kV .framer-7zlmov-container, .framer-L56kV .framer-1pyul7p-container { flex: none; height: 29px; position: relative; width: auto; }",
    ".framer-L56kV .framer-cjlp8o { -webkit-filter: grayscale(1); align-content: center; align-items: center; display: flex; filter: grayscale(1); flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 50px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 150px; }",
    ".framer-L56kV .framer-anpl9y-container { flex: none; height: 50px; position: relative; width: 50px; }",
    ".framer-L56kV .framer-1a8rcpd { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 50px; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-L56kV.framer-10h8fyi, .framer-L56kV .framer-1att3x4, .framer-L56kV .framer-1vimedr, .framer-L56kV .framer-1u4s5cl, .framer-L56kV .framer-1yf5x1i, .framer-L56kV .framer-1wges49, .framer-L56kV .framer-1u3lkl9, .framer-L56kV .framer-h7lh5j, .framer-L56kV .framer-kw2k6c, .framer-L56kV .framer-mmnzm8, .framer-L56kV .framer-f7tzbg, .framer-L56kV .framer-tk3rnv, .framer-L56kV .framer-ic5mlg, .framer-L56kV .framer-cycdoh, .framer-L56kV .framer-5rvh6h, .framer-L56kV .framer-ftt1vx, .framer-L56kV .framer-10ktbhe, .framer-L56kV .framer-19eq6tb, .framer-L56kV .framer-13329jz, .framer-L56kV .framer-19mzy0m, .framer-L56kV .framer-ffz21j, .framer-L56kV .framer-d19w5o, .framer-L56kV .framer-1s0nv6d, .framer-L56kV .framer-kvso3i, .framer-L56kV .framer-10l4rg2, .framer-L56kV .framer-q6fkhf, .framer-L56kV .framer-1q1zmku, .framer-L56kV .framer-kvpvri, .framer-L56kV .framer-583vns, .framer-L56kV .framer-e8s6sl, .framer-L56kV .framer-1xs0i2p, .framer-L56kV .framer-1wke98p, .framer-L56kV .framer-1sxw5i0, .framer-L56kV .framer-7act3i, .framer-L56kV .framer-1xe810i, .framer-L56kV .framer-1n2a7xh, .framer-L56kV .framer-zwm4xk, .framer-L56kV .framer-116290b, .framer-L56kV .framer-lwupfh, .framer-L56kV .framer-1k98nqy, .framer-L56kV .framer-7icdfx, .framer-L56kV .framer-zoimib, .framer-L56kV .framer-1dzruyh, .framer-L56kV .framer-14vsjue, .framer-L56kV .framer-dwqq99, .framer-L56kV .framer-31c4dg, .framer-L56kV .framer-xiqmmp, .framer-L56kV .framer-1iutg3z, .framer-L56kV .framer-o66rxo, .framer-L56kV .framer-jnj6r6, .framer-L56kV .framer-1mcbdaq, .framer-L56kV .framer-byilcb, .framer-L56kV .framer-nse08o, .framer-L56kV .framer-1fi426n, .framer-L56kV .framer-1z037h2, .framer-L56kV .framer-6z5u2p, .framer-L56kV .framer-l6elfo, .framer-L56kV .framer-17d0kez, .framer-L56kV .framer-112dejk, .framer-L56kV .framer-xarliq, .framer-L56kV .framer-3vy2bn, .framer-L56kV .framer-j4qpvd, .framer-L56kV .framer-3mq4ap, .framer-L56kV .framer-vmw4bz, .framer-L56kV .framer-15x2ht9, .framer-L56kV .framer-d4ddox, .framer-L56kV .framer-1upbzd5, .framer-L56kV .framer-1gz33fx, .framer-L56kV .framer-1ucpsya, .framer-L56kV .framer-1oqkujr, .framer-L56kV .framer-smk7sx, .framer-L56kV .framer-adzj48, .framer-L56kV .framer-1xcus7k, .framer-L56kV .framer-jy4eem, .framer-L56kV .framer-99r80i, .framer-L56kV .framer-19cyrs2, .framer-L56kV .framer-15q8w1z, .framer-L56kV .framer-1mvcmbf, .framer-L56kV .framer-16svfos, .framer-L56kV .framer-1yqbavw, .framer-L56kV .framer-46c8d2, .framer-L56kV .framer-1ks8qs5, .framer-L56kV .framer-1x6beln, .framer-L56kV .framer-cvnmvh, .framer-L56kV .framer-9ovcln, .framer-L56kV .framer-1tywh60, .framer-L56kV .framer-jhv71z, .framer-L56kV .framer-1nvcnbd, .framer-L56kV .framer-1hmm7xv, .framer-L56kV .framer-1etly8h, .framer-L56kV .framer-5czh7b, .framer-L56kV .framer-1kcoyu2, .framer-L56kV .framer-bcehvi, .framer-L56kV .framer-7mzz3m, .framer-L56kV .framer-vlkq83, .framer-L56kV .framer-8bxjjv, .framer-L56kV .framer-190suqv, .framer-L56kV .framer-169nj6o, .framer-L56kV .framer-12vldwb, .framer-L56kV .framer-1d24b1o, .framer-L56kV .framer-i4pup4, .framer-L56kV .framer-hukc0o, .framer-L56kV .framer-1biyh94, .framer-L56kV .framer-5pwtu5, .framer-L56kV .framer-1027vn, .framer-L56kV .framer-gz84v8, .framer-L56kV .framer-1fwxyvy, .framer-L56kV .framer-1udslm7, .framer-L56kV .framer-mkm164, .framer-L56kV .framer-1clqavn, .framer-L56kV .framer-1r7bxn9, .framer-L56kV .framer-1ai3fpc, .framer-L56kV .framer-5fqzbs, .framer-L56kV .framer-acwpb6, .framer-L56kV .framer-2uyrro, .framer-L56kV .framer-y5i0jy, .framer-L56kV .framer-1n2wff, .framer-L56kV .framer-1vxjaw9, .framer-L56kV .framer-azz5a3, .framer-L56kV .framer-1caij0t, .framer-L56kV .framer-1oe33u8, .framer-L56kV .framer-1b6t955, .framer-L56kV .framer-17kzhy3, .framer-L56kV .framer-ggg0w2, .framer-L56kV .framer-cc0hua, .framer-L56kV .framer-14869ba, .framer-L56kV .framer-pwuasq, .framer-L56kV .framer-fz8d4b, .framer-L56kV .framer-ucbu9s, .framer-L56kV .framer-qkx8um, .framer-L56kV .framer-aghp2z, .framer-L56kV .framer-w04wxw, .framer-L56kV .framer-p9j0pq, .framer-L56kV .framer-1t5mwvr, .framer-L56kV .framer-64whhf, .framer-L56kV .framer-x2pqta, .framer-L56kV .framer-1gkbuud, .framer-L56kV .framer-tq6i0y, .framer-L56kV .framer-1bnz9cq, .framer-L56kV .framer-ieuct9, .framer-L56kV .framer-17g1z2q, .framer-L56kV .framer-1aya719, .framer-L56kV .framer-14f87m, .framer-L56kV .framer-1mlu5pa, .framer-L56kV .framer-12mlma6, .framer-L56kV .framer-11gc35f, .framer-L56kV .framer-1bpjf4r, .framer-L56kV .framer-1ryouah, .framer-L56kV .framer-uqez3r, .framer-L56kV .framer-cnc6pu, .framer-L56kV .framer-eb3ulv, .framer-L56kV .framer-13y2rzn, .framer-L56kV .framer-1jebbtr, .framer-L56kV .framer-1e9uwp3, .framer-L56kV .framer-l4ensq, .framer-L56kV .framer-dxsxai, .framer-L56kV .framer-1hsl5jl, .framer-L56kV .framer-56xeg4, .framer-L56kV .framer-rd0g0c, .framer-L56kV .framer-q14lok, .framer-L56kV .framer-1lidq1z, .framer-L56kV .framer-1mhvqcl, .framer-L56kV .framer-12aq4lz, .framer-L56kV .framer-1by9ay1, .framer-L56kV .framer-1ngw5oe, .framer-L56kV .framer-cjlp8o, .framer-L56kV .framer-1a8rcpd { gap: 0px; } .framer-L56kV.framer-10h8fyi > *, .framer-L56kV .framer-f7tzbg > *, .framer-L56kV .framer-ffz21j > *, .framer-L56kV .framer-kvso3i > *, .framer-L56kV .framer-1q1zmku > *, .framer-L56kV .framer-1dzruyh > *, .framer-L56kV .framer-16svfos > *, .framer-L56kV .framer-1kcoyu2 > *, .framer-L56kV .framer-1fwxyvy > *, .framer-L56kV .framer-mkm164 > *, .framer-L56kV .framer-1aya719 > *, .framer-L56kV .framer-eb3ulv > *, .framer-L56kV .framer-1hsl5jl > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-L56kV.framer-10h8fyi > :first-child, .framer-L56kV .framer-1att3x4 > :first-child, .framer-L56kV .framer-1yf5x1i > :first-child, .framer-L56kV .framer-h7lh5j > :first-child, .framer-L56kV .framer-kw2k6c > :first-child, .framer-L56kV .framer-mmnzm8 > :first-child, .framer-L56kV .framer-f7tzbg > :first-child, .framer-L56kV .framer-cycdoh > :first-child, .framer-L56kV .framer-19mzy0m > :first-child, .framer-L56kV .framer-ffz21j > :first-child, .framer-L56kV .framer-kvso3i > :first-child, .framer-L56kV .framer-1q1zmku > :first-child, .framer-L56kV .framer-e8s6sl > :first-child, .framer-L56kV .framer-1xs0i2p > :first-child, .framer-L56kV .framer-1wke98p > :first-child, .framer-L56kV .framer-1sxw5i0 > :first-child, .framer-L56kV .framer-7act3i > :first-child, .framer-L56kV .framer-1xe810i > :first-child, .framer-L56kV .framer-zwm4xk > :first-child, .framer-L56kV .framer-116290b > :first-child, .framer-L56kV .framer-lwupfh > :first-child, .framer-L56kV .framer-1k98nqy > :first-child, .framer-L56kV .framer-7icdfx > :first-child, .framer-L56kV .framer-zoimib > :first-child, .framer-L56kV .framer-1dzruyh > :first-child, .framer-L56kV .framer-jnj6r6 > :first-child, .framer-L56kV .framer-byilcb > :first-child, .framer-L56kV .framer-1fi426n > :first-child, .framer-L56kV .framer-6z5u2p > :first-child, .framer-L56kV .framer-17d0kez > :first-child, .framer-L56kV .framer-112dejk > :first-child, .framer-L56kV .framer-j4qpvd > :first-child, .framer-L56kV .framer-3mq4ap > :first-child, .framer-L56kV .framer-1upbzd5 > :first-child, .framer-L56kV .framer-1oqkujr > :first-child, .framer-L56kV .framer-smk7sx > :first-child, .framer-L56kV .framer-1xcus7k > :first-child, .framer-L56kV .framer-99r80i > :first-child, .framer-L56kV .framer-15q8w1z > :first-child, .framer-L56kV .framer-1mvcmbf > :first-child, .framer-L56kV .framer-16svfos > :first-child, .framer-L56kV .framer-1x6beln > :first-child, .framer-L56kV .framer-9ovcln > :first-child, .framer-L56kV .framer-1tywh60 > :first-child, .framer-L56kV .framer-1nvcnbd > :first-child, .framer-L56kV .framer-5czh7b > :first-child, .framer-L56kV .framer-1kcoyu2 > :first-child, .framer-L56kV .framer-vlkq83 > :first-child, .framer-L56kV .framer-8bxjjv > :first-child, .framer-L56kV .framer-169nj6o > :first-child, .framer-L56kV .framer-12vldwb > :first-child, .framer-L56kV .framer-1biyh94 > :first-child, .framer-L56kV .framer-5pwtu5 > :first-child, .framer-L56kV .framer-1fwxyvy > :first-child, .framer-L56kV .framer-1udslm7 > :first-child, .framer-L56kV .framer-mkm164 > :first-child, .framer-L56kV .framer-1r7bxn9 > :first-child, .framer-L56kV .framer-1ai3fpc > :first-child, .framer-L56kV .framer-1oe33u8 > :first-child, .framer-L56kV .framer-1b6t955 > :first-child, .framer-L56kV .framer-aghp2z > :first-child, .framer-L56kV .framer-w04wxw > :first-child, .framer-L56kV .framer-17g1z2q > :first-child, .framer-L56kV .framer-1aya719 > :first-child, .framer-L56kV .framer-14f87m > :first-child, .framer-L56kV .framer-1mlu5pa > :first-child, .framer-L56kV .framer-11gc35f > :first-child, .framer-L56kV .framer-1ryouah > :first-child, .framer-L56kV .framer-eb3ulv > :first-child, .framer-L56kV .framer-13y2rzn > :first-child, .framer-L56kV .framer-1e9uwp3 > :first-child, .framer-L56kV .framer-dxsxai > :first-child, .framer-L56kV .framer-1hsl5jl > :first-child { margin-top: 0px; } .framer-L56kV.framer-10h8fyi > :last-child, .framer-L56kV .framer-1att3x4 > :last-child, .framer-L56kV .framer-1yf5x1i > :last-child, .framer-L56kV .framer-h7lh5j > :last-child, .framer-L56kV .framer-kw2k6c > :last-child, .framer-L56kV .framer-mmnzm8 > :last-child, .framer-L56kV .framer-f7tzbg > :last-child, .framer-L56kV .framer-cycdoh > :last-child, .framer-L56kV .framer-19mzy0m > :last-child, .framer-L56kV .framer-ffz21j > :last-child, .framer-L56kV .framer-kvso3i > :last-child, .framer-L56kV .framer-1q1zmku > :last-child, .framer-L56kV .framer-e8s6sl > :last-child, .framer-L56kV .framer-1xs0i2p > :last-child, .framer-L56kV .framer-1wke98p > :last-child, .framer-L56kV .framer-1sxw5i0 > :last-child, .framer-L56kV .framer-7act3i > :last-child, .framer-L56kV .framer-1xe810i > :last-child, .framer-L56kV .framer-zwm4xk > :last-child, .framer-L56kV .framer-116290b > :last-child, .framer-L56kV .framer-lwupfh > :last-child, .framer-L56kV .framer-1k98nqy > :last-child, .framer-L56kV .framer-7icdfx > :last-child, .framer-L56kV .framer-zoimib > :last-child, .framer-L56kV .framer-1dzruyh > :last-child, .framer-L56kV .framer-jnj6r6 > :last-child, .framer-L56kV .framer-byilcb > :last-child, .framer-L56kV .framer-1fi426n > :last-child, .framer-L56kV .framer-6z5u2p > :last-child, .framer-L56kV .framer-17d0kez > :last-child, .framer-L56kV .framer-112dejk > :last-child, .framer-L56kV .framer-j4qpvd > :last-child, .framer-L56kV .framer-3mq4ap > :last-child, .framer-L56kV .framer-1upbzd5 > :last-child, .framer-L56kV .framer-1oqkujr > :last-child, .framer-L56kV .framer-smk7sx > :last-child, .framer-L56kV .framer-1xcus7k > :last-child, .framer-L56kV .framer-99r80i > :last-child, .framer-L56kV .framer-15q8w1z > :last-child, .framer-L56kV .framer-1mvcmbf > :last-child, .framer-L56kV .framer-16svfos > :last-child, .framer-L56kV .framer-1x6beln > :last-child, .framer-L56kV .framer-9ovcln > :last-child, .framer-L56kV .framer-1tywh60 > :last-child, .framer-L56kV .framer-1nvcnbd > :last-child, .framer-L56kV .framer-5czh7b > :last-child, .framer-L56kV .framer-1kcoyu2 > :last-child, .framer-L56kV .framer-vlkq83 > :last-child, .framer-L56kV .framer-8bxjjv > :last-child, .framer-L56kV .framer-169nj6o > :last-child, .framer-L56kV .framer-12vldwb > :last-child, .framer-L56kV .framer-1biyh94 > :last-child, .framer-L56kV .framer-5pwtu5 > :last-child, .framer-L56kV .framer-1fwxyvy > :last-child, .framer-L56kV .framer-1udslm7 > :last-child, .framer-L56kV .framer-mkm164 > :last-child, .framer-L56kV .framer-1r7bxn9 > :last-child, .framer-L56kV .framer-1ai3fpc > :last-child, .framer-L56kV .framer-1oe33u8 > :last-child, .framer-L56kV .framer-1b6t955 > :last-child, .framer-L56kV .framer-aghp2z > :last-child, .framer-L56kV .framer-w04wxw > :last-child, .framer-L56kV .framer-17g1z2q > :last-child, .framer-L56kV .framer-1aya719 > :last-child, .framer-L56kV .framer-14f87m > :last-child, .framer-L56kV .framer-1mlu5pa > :last-child, .framer-L56kV .framer-11gc35f > :last-child, .framer-L56kV .framer-1ryouah > :last-child, .framer-L56kV .framer-eb3ulv > :last-child, .framer-L56kV .framer-13y2rzn > :last-child, .framer-L56kV .framer-1e9uwp3 > :last-child, .framer-L56kV .framer-dxsxai > :last-child, .framer-L56kV .framer-1hsl5jl > :last-child { margin-bottom: 0px; } .framer-L56kV .framer-1att3x4 > *, .framer-L56kV .framer-mmnzm8 > *, .framer-L56kV .framer-cycdoh > *, .framer-L56kV .framer-1xs0i2p > *, .framer-L56kV .framer-1wke98p > *, .framer-L56kV .framer-1sxw5i0 > *, .framer-L56kV .framer-1xe810i > *, .framer-L56kV .framer-zwm4xk > *, .framer-L56kV .framer-lwupfh > *, .framer-L56kV .framer-1k98nqy > *, .framer-L56kV .framer-7icdfx > *, .framer-L56kV .framer-112dejk > *, .framer-L56kV .framer-j4qpvd > *, .framer-L56kV .framer-3mq4ap > *, .framer-L56kV .framer-1upbzd5 > *, .framer-L56kV .framer-1oqkujr > *, .framer-L56kV .framer-smk7sx > *, .framer-L56kV .framer-1xcus7k > *, .framer-L56kV .framer-9ovcln > *, .framer-L56kV .framer-1nvcnbd > *, .framer-L56kV .framer-vlkq83 > *, .framer-L56kV .framer-8bxjjv > *, .framer-L56kV .framer-169nj6o > *, .framer-L56kV .framer-1biyh94 > *, .framer-L56kV .framer-5pwtu5 > *, .framer-L56kV .framer-1ai3fpc > *, .framer-L56kV .framer-1b6t955 > *, .framer-L56kV .framer-w04wxw > *, .framer-L56kV .framer-1mlu5pa > *, .framer-L56kV .framer-11gc35f > *, .framer-L56kV .framer-1ryouah > *, .framer-L56kV .framer-13y2rzn > *, .framer-L56kV .framer-1e9uwp3 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-L56kV .framer-1vimedr > *, .framer-L56kV .framer-1u4s5cl > *, .framer-L56kV .framer-ic5mlg > *, .framer-L56kV .framer-5rvh6h > *, .framer-L56kV .framer-ftt1vx > *, .framer-L56kV .framer-10ktbhe > *, .framer-L56kV .framer-13329jz > *, .framer-L56kV .framer-d19w5o > *, .framer-L56kV .framer-1s0nv6d > *, .framer-L56kV .framer-10l4rg2 > *, .framer-L56kV .framer-q6fkhf > *, .framer-L56kV .framer-kvpvri > *, .framer-L56kV .framer-583vns > *, .framer-L56kV .framer-14vsjue > *, .framer-L56kV .framer-dwqq99 > *, .framer-L56kV .framer-xiqmmp > *, .framer-L56kV .framer-1iutg3z > *, .framer-L56kV .framer-o66rxo > *, .framer-L56kV .framer-1mcbdaq > *, .framer-L56kV .framer-nse08o > *, .framer-L56kV .framer-1z037h2 > *, .framer-L56kV .framer-l6elfo > *, .framer-L56kV .framer-xarliq > *, .framer-L56kV .framer-15x2ht9 > *, .framer-L56kV .framer-1gz33fx > *, .framer-L56kV .framer-1yqbavw > *, .framer-L56kV .framer-46c8d2 > *, .framer-L56kV .framer-cvnmvh > *, .framer-L56kV .framer-jhv71z > *, .framer-L56kV .framer-7mzz3m > *, .framer-L56kV .framer-190suqv > *, .framer-L56kV .framer-1d24b1o > *, .framer-L56kV .framer-i4pup4 > *, .framer-L56kV .framer-hukc0o > *, .framer-L56kV .framer-gz84v8 > *, .framer-L56kV .framer-5fqzbs > *, .framer-L56kV .framer-acwpb6 > *, .framer-L56kV .framer-2uyrro > *, .framer-L56kV .framer-y5i0jy > *, .framer-L56kV .framer-1n2wff > *, .framer-L56kV .framer-1vxjaw9 > *, .framer-L56kV .framer-azz5a3 > *, .framer-L56kV .framer-1caij0t > *, .framer-L56kV .framer-17kzhy3 > *, .framer-L56kV .framer-ggg0w2 > *, .framer-L56kV .framer-cc0hua > *, .framer-L56kV .framer-14869ba > *, .framer-L56kV .framer-pwuasq > *, .framer-L56kV .framer-fz8d4b > *, .framer-L56kV .framer-ucbu9s > *, .framer-L56kV .framer-qkx8um > *, .framer-L56kV .framer-p9j0pq > *, .framer-L56kV .framer-1t5mwvr > *, .framer-L56kV .framer-64whhf > *, .framer-L56kV .framer-x2pqta > *, .framer-L56kV .framer-1gkbuud > *, .framer-L56kV .framer-tq6i0y > *, .framer-L56kV .framer-1bnz9cq > *, .framer-L56kV .framer-ieuct9 > *, .framer-L56kV .framer-12mlma6 > *, .framer-L56kV .framer-1jebbtr > *, .framer-L56kV .framer-l4ensq > *, .framer-L56kV .framer-56xeg4 > *, .framer-L56kV .framer-rd0g0c > *, .framer-L56kV .framer-q14lok > *, .framer-L56kV .framer-1lidq1z > *, .framer-L56kV .framer-1mhvqcl > *, .framer-L56kV .framer-1by9ay1 > *, .framer-L56kV .framer-1ngw5oe > *, .framer-L56kV .framer-cjlp8o > *, .framer-L56kV .framer-1a8rcpd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-L56kV .framer-1vimedr > :first-child, .framer-L56kV .framer-1u4s5cl > :first-child, .framer-L56kV .framer-1wges49 > :first-child, .framer-L56kV .framer-1u3lkl9 > :first-child, .framer-L56kV .framer-tk3rnv > :first-child, .framer-L56kV .framer-ic5mlg > :first-child, .framer-L56kV .framer-5rvh6h > :first-child, .framer-L56kV .framer-ftt1vx > :first-child, .framer-L56kV .framer-10ktbhe > :first-child, .framer-L56kV .framer-19eq6tb > :first-child, .framer-L56kV .framer-13329jz > :first-child, .framer-L56kV .framer-d19w5o > :first-child, .framer-L56kV .framer-1s0nv6d > :first-child, .framer-L56kV .framer-10l4rg2 > :first-child, .framer-L56kV .framer-q6fkhf > :first-child, .framer-L56kV .framer-kvpvri > :first-child, .framer-L56kV .framer-583vns > :first-child, .framer-L56kV .framer-1n2a7xh > :first-child, .framer-L56kV .framer-14vsjue > :first-child, .framer-L56kV .framer-dwqq99 > :first-child, .framer-L56kV .framer-31c4dg > :first-child, .framer-L56kV .framer-xiqmmp > :first-child, .framer-L56kV .framer-1iutg3z > :first-child, .framer-L56kV .framer-o66rxo > :first-child, .framer-L56kV .framer-1mcbdaq > :first-child, .framer-L56kV .framer-nse08o > :first-child, .framer-L56kV .framer-1z037h2 > :first-child, .framer-L56kV .framer-l6elfo > :first-child, .framer-L56kV .framer-xarliq > :first-child, .framer-L56kV .framer-3vy2bn > :first-child, .framer-L56kV .framer-vmw4bz > :first-child, .framer-L56kV .framer-15x2ht9 > :first-child, .framer-L56kV .framer-d4ddox > :first-child, .framer-L56kV .framer-1gz33fx > :first-child, .framer-L56kV .framer-1ucpsya > :first-child, .framer-L56kV .framer-adzj48 > :first-child, .framer-L56kV .framer-jy4eem > :first-child, .framer-L56kV .framer-19cyrs2 > :first-child, .framer-L56kV .framer-1yqbavw > :first-child, .framer-L56kV .framer-46c8d2 > :first-child, .framer-L56kV .framer-1ks8qs5 > :first-child, .framer-L56kV .framer-cvnmvh > :first-child, .framer-L56kV .framer-jhv71z > :first-child, .framer-L56kV .framer-1hmm7xv > :first-child, .framer-L56kV .framer-1etly8h > :first-child, .framer-L56kV .framer-bcehvi > :first-child, .framer-L56kV .framer-7mzz3m > :first-child, .framer-L56kV .framer-190suqv > :first-child, .framer-L56kV .framer-1d24b1o > :first-child, .framer-L56kV .framer-i4pup4 > :first-child, .framer-L56kV .framer-hukc0o > :first-child, .framer-L56kV .framer-1027vn > :first-child, .framer-L56kV .framer-gz84v8 > :first-child, .framer-L56kV .framer-1clqavn > :first-child, .framer-L56kV .framer-5fqzbs > :first-child, .framer-L56kV .framer-acwpb6 > :first-child, .framer-L56kV .framer-2uyrro > :first-child, .framer-L56kV .framer-y5i0jy > :first-child, .framer-L56kV .framer-1n2wff > :first-child, .framer-L56kV .framer-1vxjaw9 > :first-child, .framer-L56kV .framer-azz5a3 > :first-child, .framer-L56kV .framer-1caij0t > :first-child, .framer-L56kV .framer-17kzhy3 > :first-child, .framer-L56kV .framer-ggg0w2 > :first-child, .framer-L56kV .framer-cc0hua > :first-child, .framer-L56kV .framer-14869ba > :first-child, .framer-L56kV .framer-pwuasq > :first-child, .framer-L56kV .framer-fz8d4b > :first-child, .framer-L56kV .framer-ucbu9s > :first-child, .framer-L56kV .framer-qkx8um > :first-child, .framer-L56kV .framer-p9j0pq > :first-child, .framer-L56kV .framer-1t5mwvr > :first-child, .framer-L56kV .framer-64whhf > :first-child, .framer-L56kV .framer-x2pqta > :first-child, .framer-L56kV .framer-1gkbuud > :first-child, .framer-L56kV .framer-tq6i0y > :first-child, .framer-L56kV .framer-1bnz9cq > :first-child, .framer-L56kV .framer-ieuct9 > :first-child, .framer-L56kV .framer-12mlma6 > :first-child, .framer-L56kV .framer-1bpjf4r > :first-child, .framer-L56kV .framer-uqez3r > :first-child, .framer-L56kV .framer-cnc6pu > :first-child, .framer-L56kV .framer-1jebbtr > :first-child, .framer-L56kV .framer-l4ensq > :first-child, .framer-L56kV .framer-56xeg4 > :first-child, .framer-L56kV .framer-rd0g0c > :first-child, .framer-L56kV .framer-q14lok > :first-child, .framer-L56kV .framer-1lidq1z > :first-child, .framer-L56kV .framer-1mhvqcl > :first-child, .framer-L56kV .framer-12aq4lz > :first-child, .framer-L56kV .framer-1by9ay1 > :first-child, .framer-L56kV .framer-1ngw5oe > :first-child, .framer-L56kV .framer-cjlp8o > :first-child, .framer-L56kV .framer-1a8rcpd > :first-child { margin-left: 0px; } .framer-L56kV .framer-1vimedr > :last-child, .framer-L56kV .framer-1u4s5cl > :last-child, .framer-L56kV .framer-1wges49 > :last-child, .framer-L56kV .framer-1u3lkl9 > :last-child, .framer-L56kV .framer-tk3rnv > :last-child, .framer-L56kV .framer-ic5mlg > :last-child, .framer-L56kV .framer-5rvh6h > :last-child, .framer-L56kV .framer-ftt1vx > :last-child, .framer-L56kV .framer-10ktbhe > :last-child, .framer-L56kV .framer-19eq6tb > :last-child, .framer-L56kV .framer-13329jz > :last-child, .framer-L56kV .framer-d19w5o > :last-child, .framer-L56kV .framer-1s0nv6d > :last-child, .framer-L56kV .framer-10l4rg2 > :last-child, .framer-L56kV .framer-q6fkhf > :last-child, .framer-L56kV .framer-kvpvri > :last-child, .framer-L56kV .framer-583vns > :last-child, .framer-L56kV .framer-1n2a7xh > :last-child, .framer-L56kV .framer-14vsjue > :last-child, .framer-L56kV .framer-dwqq99 > :last-child, .framer-L56kV .framer-31c4dg > :last-child, .framer-L56kV .framer-xiqmmp > :last-child, .framer-L56kV .framer-1iutg3z > :last-child, .framer-L56kV .framer-o66rxo > :last-child, .framer-L56kV .framer-1mcbdaq > :last-child, .framer-L56kV .framer-nse08o > :last-child, .framer-L56kV .framer-1z037h2 > :last-child, .framer-L56kV .framer-l6elfo > :last-child, .framer-L56kV .framer-xarliq > :last-child, .framer-L56kV .framer-3vy2bn > :last-child, .framer-L56kV .framer-vmw4bz > :last-child, .framer-L56kV .framer-15x2ht9 > :last-child, .framer-L56kV .framer-d4ddox > :last-child, .framer-L56kV .framer-1gz33fx > :last-child, .framer-L56kV .framer-1ucpsya > :last-child, .framer-L56kV .framer-adzj48 > :last-child, .framer-L56kV .framer-jy4eem > :last-child, .framer-L56kV .framer-19cyrs2 > :last-child, .framer-L56kV .framer-1yqbavw > :last-child, .framer-L56kV .framer-46c8d2 > :last-child, .framer-L56kV .framer-1ks8qs5 > :last-child, .framer-L56kV .framer-cvnmvh > :last-child, .framer-L56kV .framer-jhv71z > :last-child, .framer-L56kV .framer-1hmm7xv > :last-child, .framer-L56kV .framer-1etly8h > :last-child, .framer-L56kV .framer-bcehvi > :last-child, .framer-L56kV .framer-7mzz3m > :last-child, .framer-L56kV .framer-190suqv > :last-child, .framer-L56kV .framer-1d24b1o > :last-child, .framer-L56kV .framer-i4pup4 > :last-child, .framer-L56kV .framer-hukc0o > :last-child, .framer-L56kV .framer-1027vn > :last-child, .framer-L56kV .framer-gz84v8 > :last-child, .framer-L56kV .framer-1clqavn > :last-child, .framer-L56kV .framer-5fqzbs > :last-child, .framer-L56kV .framer-acwpb6 > :last-child, .framer-L56kV .framer-2uyrro > :last-child, .framer-L56kV .framer-y5i0jy > :last-child, .framer-L56kV .framer-1n2wff > :last-child, .framer-L56kV .framer-1vxjaw9 > :last-child, .framer-L56kV .framer-azz5a3 > :last-child, .framer-L56kV .framer-1caij0t > :last-child, .framer-L56kV .framer-17kzhy3 > :last-child, .framer-L56kV .framer-ggg0w2 > :last-child, .framer-L56kV .framer-cc0hua > :last-child, .framer-L56kV .framer-14869ba > :last-child, .framer-L56kV .framer-pwuasq > :last-child, .framer-L56kV .framer-fz8d4b > :last-child, .framer-L56kV .framer-ucbu9s > :last-child, .framer-L56kV .framer-qkx8um > :last-child, .framer-L56kV .framer-p9j0pq > :last-child, .framer-L56kV .framer-1t5mwvr > :last-child, .framer-L56kV .framer-64whhf > :last-child, .framer-L56kV .framer-x2pqta > :last-child, .framer-L56kV .framer-1gkbuud > :last-child, .framer-L56kV .framer-tq6i0y > :last-child, .framer-L56kV .framer-1bnz9cq > :last-child, .framer-L56kV .framer-ieuct9 > :last-child, .framer-L56kV .framer-12mlma6 > :last-child, .framer-L56kV .framer-1bpjf4r > :last-child, .framer-L56kV .framer-uqez3r > :last-child, .framer-L56kV .framer-cnc6pu > :last-child, .framer-L56kV .framer-1jebbtr > :last-child, .framer-L56kV .framer-l4ensq > :last-child, .framer-L56kV .framer-56xeg4 > :last-child, .framer-L56kV .framer-rd0g0c > :last-child, .framer-L56kV .framer-q14lok > :last-child, .framer-L56kV .framer-1lidq1z > :last-child, .framer-L56kV .framer-1mhvqcl > :last-child, .framer-L56kV .framer-12aq4lz > :last-child, .framer-L56kV .framer-1by9ay1 > :last-child, .framer-L56kV .framer-1ngw5oe > :last-child, .framer-L56kV .framer-cjlp8o > :last-child, .framer-L56kV .framer-1a8rcpd > :last-child { margin-right: 0px; } .framer-L56kV .framer-1yf5x1i > *, .framer-L56kV .framer-h7lh5j > *, .framer-L56kV .framer-19mzy0m > *, .framer-L56kV .framer-zoimib > *, .framer-L56kV .framer-jnj6r6 > *, .framer-L56kV .framer-byilcb > *, .framer-L56kV .framer-1fi426n > *, .framer-L56kV .framer-6z5u2p > *, .framer-L56kV .framer-17d0kez > *, .framer-L56kV .framer-99r80i > *, .framer-L56kV .framer-15q8w1z > *, .framer-L56kV .framer-1x6beln > *, .framer-L56kV .framer-1tywh60 > *, .framer-L56kV .framer-14f87m > *, .framer-L56kV .framer-dxsxai > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-L56kV .framer-1wges49 > *, .framer-L56kV .framer-1n2a7xh > *, .framer-L56kV .framer-vmw4bz > *, .framer-L56kV .framer-adzj48 > *, .framer-L56kV .framer-1etly8h > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-L56kV .framer-1u3lkl9 > *, .framer-L56kV .framer-tk3rnv > *, .framer-L56kV .framer-19eq6tb > *, .framer-L56kV .framer-31c4dg > *, .framer-L56kV .framer-d4ddox > *, .framer-L56kV .framer-1hmm7xv > *, .framer-L56kV .framer-1027vn > *, .framer-L56kV .framer-12aq4lz > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-L56kV .framer-kw2k6c > *, .framer-L56kV .framer-e8s6sl > *, .framer-L56kV .framer-7act3i > *, .framer-L56kV .framer-116290b > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-L56kV .framer-3vy2bn > *, .framer-L56kV .framer-1ucpsya > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-L56kV .framer-jy4eem > *, .framer-L56kV .framer-19cyrs2 > *, .framer-L56kV .framer-1clqavn > *, .framer-L56kV .framer-1bpjf4r > *, .framer-L56kV .framer-uqez3r > *, .framer-L56kV .framer-cnc6pu > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-L56kV .framer-1mvcmbf > *, .framer-L56kV .framer-5czh7b > *, .framer-L56kV .framer-12vldwb > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-L56kV .framer-1ks8qs5 > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-L56kV .framer-bcehvi > * { margin: 0px; margin-left: calc(50px / 2); margin-right: calc(50px / 2); } .framer-L56kV .framer-1udslm7 > *, .framer-L56kV .framer-17g1z2q > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-L56kV .framer-1r7bxn9 > *, .framer-L56kV .framer-1oe33u8 > *, .framer-L56kV .framer-aghp2z > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }",
    `@media (max-width: 809px) { .${Aa.bodyClassName}-framer-L56kV { background: rgb(8, 8, 8); } .framer-L56kV.framer-10h8fyi { width: 421px; } .framer-L56kV .framer-qc61v8-container, .framer-L56kV .framer-1k98nqy, .framer-L56kV .framer-12aq4lz { order: 0; } .framer-L56kV .framer-1omwwuu-container, .framer-L56kV .framer-zwm4xk, .framer-L56kV .framer-3ljazk-container, .framer-L56kV .framer-q14lok { order: 1; } .framer-L56kV .framer-1att3x4 { order: 2; padding: 10px; } .framer-L56kV .framer-1vimedr { bottom: unset; height: 67%; justify-content: flex-start; left: calc(49.88123515439432% - 100% / 2); top: calc(66.70616113744077% - 66.58767772511848% / 2); } .framer-L56kV .framer-rtjsba-container { height: 154%; } .framer-L56kV .framer-1u4s5cl { left: calc(49.88123515439432% - 100% / 2); } .framer-L56kV .framer-1yf5x1i, .framer-L56kV .framer-1ixv49r, .framer-L56kV .framer-iafr93, .framer-L56kV .framer-1f4gvou, .framer-L56kV .framer-1s0nv6d, .framer-L56kV .framer-q6fkhf, .framer-L56kV .framer-583vns, .framer-L56kV .framer-1n2a7xh, .framer-L56kV .framer-15gjjqy, .framer-L56kV .framer-kcp6pq, .framer-L56kV .framer-11gc35f { width: 100%; } .framer-L56kV .framer-1u3lkl9 { order: 3; padding: 10px; } .framer-L56kV .framer-h7lh5j { padding: 50px 0px 100px 0px; } .framer-L56kV .framer-tk3rnv, .framer-L56kV .framer-1ks8qs5, .framer-L56kV .framer-1ajhap7 { flex-direction: column; } .framer-L56kV .framer-1kvu5yj { order: 4; } .framer-L56kV .framer-19eq6tb { order: 5; padding: 0px; } .framer-L56kV .framer-13329jz { flex: 1 0 0px; flex-direction: column; gap: 40px; padding: 20px; width: 1px; } .framer-L56kV .framer-19mzy0m { order: 1; padding: 10px; width: 100%; } .framer-L56kV .framer-ffz21j, .framer-L56kV .framer-kvso3i, .framer-L56kV .framer-1q1zmku { align-content: center; align-items: center; width: 100%; } .framer-L56kV .framer-11qnij2, .framer-L56kV .framer-a6fr1o, .framer-L56kV .framer-19u8667, .framer-L56kV .framer-o66rxo { flex: 1 0 0px; width: 1px; } .framer-L56kV .framer-1wke98p { order: 0; padding: 0px; width: 100%; } .framer-L56kV .framer-1sxw5i0 { align-content: center; align-items: center; padding: 10px; width: 100%; } .framer-L56kV .framer-116290b, .framer-L56kV .framer-xarliq, .framer-L56kV .framer-1by9ay1 { order: 2; } .framer-L56kV .framer-7icdfx { order: 3; } .framer-L56kV .framer-11mh6f5 { order: 6; } .framer-L56kV .framer-zoimib { order: 7; width: 100%; } .framer-L56kV .framer-31c4dg { order: 8; width: 100%; } .framer-L56kV .framer-17d0kez { order: 10; } .framer-L56kV .framer-vmw4bz { order: 9; padding: 10px; width: 100%; } .framer-L56kV .framer-15x2ht9, .framer-L56kV .framer-dvlwe6-container { height: var(--framer-aspect-ratio-supported, 226px); } .framer-L56kV .framer-adzj48 { flex-direction: column; order: 11; padding: 100px 20px 100px 20px; width: 100%; } .framer-L56kV .framer-1xcus7k { --border-bottom-width: 2px; --border-right-width: 0px; width: 100%; } .framer-L56kV .framer-jy4eem, .framer-L56kV .framer-19cyrs2 { --border-bottom-width: 2px; --border-right-width: 0px; align-self: unset; height: 178px; width: 100%; } .framer-L56kV .framer-1mvcmbf { order: 12; width: 100%; } .framer-L56kV .framer-46c8d2 { left: -235px; right: -236px; width: unset; } .framer-L56kV .framer-1hmm7xv { order: 14; padding: 10px; } .framer-L56kV .framer-5czh7b { padding: 20px; } .framer-L56kV .framer-1kcoyu2 { order: 0; width: 100%; } .framer-L56kV .framer-krox52 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-L56kV .framer-bcehvi { flex-direction: column; order: 1; padding: 0px; } .framer-L56kV .framer-7mzz3m, .framer-L56kV .framer-hukc0o { align-self: unset; flex: none; height: 277px; width: 100%; } .framer-L56kV .framer-190suqv { flex: none; width: 100%; } .framer-L56kV .framer-1027vn { height: min-content; order: 15; } .framer-L56kV .framer-gs4xnr-container { height: var(--framer-aspect-ratio-supported, 225px); } .framer-L56kV .framer-1d7lnlq { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-L56kV .framer-1fwxyvy { order: 16; width: 100%; } .framer-L56kV .framer-14f87m { order: 17; padding: 20px; } .framer-L56kV .framer-dxsxai { order: 18; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-L56kV .framer-tk3rnv, .framer-L56kV .framer-13329jz, .framer-L56kV .framer-adzj48, .framer-L56kV .framer-1ks8qs5, .framer-L56kV .framer-bcehvi, .framer-L56kV .framer-1ajhap7 { gap: 0px; } .framer-L56kV .framer-tk3rnv > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-L56kV .framer-tk3rnv > :first-child, .framer-L56kV .framer-13329jz > :first-child, .framer-L56kV .framer-adzj48 > :first-child, .framer-L56kV .framer-1ks8qs5 > :first-child, .framer-L56kV .framer-bcehvi > :first-child { margin-top: 0px; } .framer-L56kV .framer-tk3rnv > :last-child, .framer-L56kV .framer-13329jz > :last-child, .framer-L56kV .framer-adzj48 > :last-child, .framer-L56kV .framer-1ks8qs5 > :last-child, .framer-L56kV .framer-bcehvi > :last-child { margin-bottom: 0px; } .framer-L56kV .framer-13329jz > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-L56kV .framer-adzj48 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-L56kV .framer-1ks8qs5 > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-L56kV .framer-bcehvi > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-L56kV .framer-1ajhap7 > *, .framer-L56kV .framer-1ajhap7 > :first-child, .framer-L56kV .framer-1ajhap7 > :last-child { margin: 0px; } }}`,
    `@media (min-width: 810px) and (max-width: 1199px) { .${Aa.bodyClassName}-framer-L56kV { background: rgb(8, 8, 8); } .framer-L56kV.framer-10h8fyi { width: 810px; } .framer-L56kV .framer-qc61v8-container, .framer-L56kV .framer-1k98nqy, .framer-L56kV .framer-12aq4lz { order: 0; } .framer-L56kV .framer-1omwwuu-container, .framer-L56kV .framer-zwm4xk, .framer-L56kV .framer-3ljazk-container, .framer-L56kV .framer-q14lok { order: 1; } .framer-L56kV .framer-1att3x4 { order: 2; padding: 10px; } .framer-L56kV .framer-1vimedr { bottom: unset; height: 67%; justify-content: flex-start; left: calc(49.88123515439432% - 100% / 2); top: calc(66.70616113744077% - 66.58767772511848% / 2); } .framer-L56kV .framer-rtjsba-container { height: 154%; } .framer-L56kV .framer-1u4s5cl { left: calc(49.88123515439432% - 100% / 2); } .framer-L56kV .framer-1yf5x1i, .framer-L56kV .framer-1ixv49r, .framer-L56kV .framer-iafr93, .framer-L56kV .framer-1f4gvou, .framer-L56kV .framer-1s0nv6d, .framer-L56kV .framer-q6fkhf, .framer-L56kV .framer-583vns, .framer-L56kV .framer-1n2a7xh, .framer-L56kV .framer-15gjjqy, .framer-L56kV .framer-kcp6pq, .framer-L56kV .framer-11gc35f { width: 100%; } .framer-L56kV .framer-1u3lkl9 { order: 3; padding: 10px; } .framer-L56kV .framer-h7lh5j { padding: 50px 0px 100px 0px; } .framer-L56kV .framer-1kvu5yj { order: 4; } .framer-L56kV .framer-19eq6tb { order: 5; padding: 0px; } .framer-L56kV .framer-13329jz { flex: 1 0 0px; flex-direction: column; gap: 40px; padding: 20px; width: 1px; } .framer-L56kV .framer-19mzy0m { order: 1; padding: 10px; width: 100%; } .framer-L56kV .framer-ffz21j, .framer-L56kV .framer-kvso3i, .framer-L56kV .framer-1q1zmku { align-content: center; align-items: center; width: 100%; } .framer-L56kV .framer-11qnij2, .framer-L56kV .framer-a6fr1o, .framer-L56kV .framer-19u8667, .framer-L56kV .framer-o66rxo { flex: 1 0 0px; width: 1px; } .framer-L56kV .framer-1wke98p { order: 0; padding: 0px; width: 100%; } .framer-L56kV .framer-1sxw5i0 { align-content: center; align-items: center; padding: 10px; width: 100%; } .framer-L56kV .framer-116290b, .framer-L56kV .framer-xarliq, .framer-L56kV .framer-1by9ay1 { order: 2; } .framer-L56kV .framer-7icdfx { order: 3; } .framer-L56kV .framer-11mh6f5 { order: 6; } .framer-L56kV .framer-zoimib { order: 7; width: 100%; } .framer-L56kV .framer-1py9rin { height: var(--framer-aspect-ratio-supported, 19px); } .framer-L56kV .framer-31c4dg { order: 8; width: 100%; } .framer-L56kV .framer-17d0kez { order: 10; } .framer-L56kV .framer-vmw4bz { order: 9; padding: 10px; width: 100%; } .framer-L56kV .framer-15x2ht9 { height: var(--framer-aspect-ratio-supported, 445px); } .framer-L56kV .framer-dvlwe6-container { height: var(--framer-aspect-ratio-supported, 446px); } .framer-L56kV .framer-adzj48 { flex-direction: column; order: 11; padding: 100px 20px 100px 20px; width: 100%; } .framer-L56kV .framer-1xcus7k { --border-bottom-width: 2px; --border-right-width: 0px; width: 100%; } .framer-L56kV .framer-jy4eem, .framer-L56kV .framer-19cyrs2 { --border-bottom-width: 2px; --border-right-width: 0px; align-self: unset; height: 178px; width: 100%; } .framer-L56kV .framer-1mvcmbf { order: 12; padding: 100px 40px 100px 40px; width: 100%; } .framer-L56kV .framer-46c8d2 { height: var(--framer-aspect-ratio-supported, 1270px); left: -235px; right: -236px; width: unset; } .framer-L56kV .framer-1ks8qs5, .framer-L56kV .framer-1ajhap7 { flex-direction: column; } .framer-L56kV .framer-1hmm7xv { order: 14; padding: 10px; } .framer-L56kV .framer-5czh7b { padding: 20px; } .framer-L56kV .framer-1kcoyu2 { order: 0; width: 100%; } .framer-L56kV .framer-krox52 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-L56kV .framer-bcehvi { flex-direction: column; order: 1; padding: 0px; } .framer-L56kV .framer-7mzz3m, .framer-L56kV .framer-hukc0o { align-self: unset; flex: none; height: 277px; width: 100%; } .framer-L56kV .framer-190suqv { flex: none; width: 100%; } .framer-L56kV .framer-1027vn { height: min-content; order: 15; } .framer-L56kV .framer-gs4xnr-container { height: var(--framer-aspect-ratio-supported, 433px); } .framer-L56kV .framer-1d7lnlq { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-L56kV .framer-1fwxyvy { order: 16; width: 100%; } .framer-L56kV .framer-14f87m { order: 17; padding: 20px; } .framer-L56kV .framer-dxsxai { order: 18; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-L56kV .framer-13329jz, .framer-L56kV .framer-adzj48, .framer-L56kV .framer-1ks8qs5, .framer-L56kV .framer-bcehvi, .framer-L56kV .framer-1ajhap7 { gap: 0px; } .framer-L56kV .framer-13329jz > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-L56kV .framer-13329jz > :first-child, .framer-L56kV .framer-adzj48 > :first-child, .framer-L56kV .framer-1ks8qs5 > :first-child, .framer-L56kV .framer-bcehvi > :first-child { margin-top: 0px; } .framer-L56kV .framer-13329jz > :last-child, .framer-L56kV .framer-adzj48 > :last-child, .framer-L56kV .framer-1ks8qs5 > :last-child, .framer-L56kV .framer-bcehvi > :last-child { margin-bottom: 0px; } .framer-L56kV .framer-adzj48 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-L56kV .framer-1ks8qs5 > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-L56kV .framer-bcehvi > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-L56kV .framer-1ajhap7 > *, .framer-L56kV .framer-1ajhap7 > :first-child, .framer-L56kV .framer-1ajhap7 > :last-child { margin: 0px; } }}`,
    '.framer-L56kV[data-border="true"]::after, .framer-L56kV [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Dr = ce(Ls, Es, "framer-L56kV"),
  sm = Dr;
Dr.displayName = "Page";
Dr.defaultProps = { height: 8228.5, width: 1200 };
de(
  Dr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Square Pixel7 Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/hvIVU1vPumZf2XmevYRZJVzkL28.woff2",
        },
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5vBh05IsDqlA.woff2",
          weight: "300",
        },
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Me4GZLCzYlKw.woff2",
          weight: "400",
        },
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9vBh05IsDqlA.woff2",
          weight: "500",
        },
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlvBh05IsDqlA.woff2",
          weight: "700",
        },
        {
          family: "Plus Jakarta Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
          weight: "600",
        },
        {
          family: "Plus Jakarta Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
          weight: "400",
        },
      ],
    },
    ...Ho,
    ...Zo,
    ..._o,
    ...$o,
    ...es,
    ...rs,
    ...as,
    ...ts,
    ...is,
    ...ns,
    ...os,
    ...ss,
    ...ls,
    ...fs,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var lm = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramermU9wW70pd",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "8228.5",
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "1200",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ifpCxQDk0":{"layout":["fixed","auto"]},"mU1l1Nn8k":{"layout":["fixed","auto"]}}}',
        framerContractVersion: "1",
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { lm as __FramerMetadata__, sm as default };
//# sourceMappingURL=bJxGWsvmtjkgnHvh1Rxg2HYzCXIizs_uxWmCd4978kM.OOIG2SDI.mjs.map
