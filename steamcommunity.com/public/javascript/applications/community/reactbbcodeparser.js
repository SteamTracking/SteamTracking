/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t } from "./chunk~01cfc309bf.js";
import { i as n } from "./chunk~727db9c01f.js";
import { $h as r, Zm as i } from "./main.js";
var a = e(t(), 1),
  o = class {
    reactNodes = [];
    AppendText(e, t = !1) {
      e.length &&
        (t
          ? this.reactNodes.push(
              a.createElement(
                `span`,
                {
                  "data-copytext": ``,
                  "data-copystyle": `merge-adjacent`,
                  "bbcode-text": e,
                },
                e,
              ),
            )
          : this.reactNodes.push(e));
    }
    AppendNode(e) {
      this.reactNodes.push(e);
    }
    GetElements() {
      return this.reactNodes;
    }
  },
  s = class {
    m_decoratedAccumulator;
    constructor(e) {
      (r(e, `decorated accumulator cannot be null`),
        (this.m_decoratedAccumulator = e));
    }
    AppendText(e, t = !1) {
      this.m_decoratedAccumulator.AppendText(e, t);
    }
    AppendNode(e) {
      this.m_decoratedAccumulator.AppendNode(e);
    }
    GetElements() {
      return this.m_decoratedAccumulator.GetElements();
    }
  },
  c = class extends s {
    constructor(e) {
      super(e);
    }
    AppendText(e) {
      let t = e,
        n = [];
      for (
        let e = t.indexOf(`
`);
        e !== -1;
        e = t.indexOf(`
`)
      )
        (n.push(t.substr(0, e)),
          n.push(a.createElement(`br`)),
          (t = t.substr(e + 1)));
      (t.length && n.push(t),
        n.forEach((e) => {
          super.AppendNode(e);
        }));
    }
  },
  l = class extends n {
    m_renderingLanguage;
    constructor(e, t, n) {
      (super(e, t ?? (() => new o())),
        (this.m_renderingLanguage = typeof n == `string` ? i(n) : n));
    }
    UpdateOverrideLanguage(e) {
      this.m_renderingLanguage = e;
    }
    ParseBBCode(e, t, n = !0) {
      let r = 0,
        i = this.Parse(
          e,
          (e, n, ...i) =>
            a.createElement(
              e,
              {
                ...n,
                context: t,
                language: this.m_renderingLanguage,
                key: `bbnode_${r++}`,
              },
              ...i,
            ),
          n,
        );
      return i.length > 1
        ? a.createElement(a.Fragment, null, ...i)
        : i.length == 1
          ? i[0]
          : null;
    }
  };
export { c as i, s as n, o as r, l as t };
