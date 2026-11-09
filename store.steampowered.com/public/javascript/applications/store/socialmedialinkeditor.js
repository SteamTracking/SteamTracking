/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, st as r, tt as i } from "./libraries.js";
import { t as a } from "./throbber.js";
import {
  c as o,
  f as s,
  h as c,
  m as l,
  o as u,
  p as d,
  s as f,
  u as p,
} from "./reorderablelist.module.js";
import {
  Ex as m,
  Kn as h,
  Ml as g,
  Rr as _,
  Sc as v,
  Uy as y,
  Wx as b,
  _o as x,
  al as S,
  rx as C,
} from "./main.js";
import "./cross.js";
var w = e(t()),
  T = e(i());
function E() {
  let e = r({
    queryKey: [`useSocialMediaSupports`],
    queryFn: async () => {
      let e = `${C.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
        t = { origin: self.origin },
        n = await T.default.get(e, { params: t });
      return n?.status == 200 && n.data?.success == 1
        ? n.data
        : (console.error(`useSocialMediaSupports:`, n?.status), { success: 2 });
    },
  });
  return e.isLoading ? null : e.data;
}
var D = `ZlgE-RXiZVA-`,
  O = `YLQlq21lYYY-`,
  k = `UuWHe0byT9Y-`,
  A = `ksCbmUv2cR4-`,
  j = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
  M = n();
function N(e) {
  let {
      items: t,
      render: n,
      onDelete: r,
      onEdit: i,
      onReorder: a,
      onMove: o,
      bDisabled: f,
      rowClassName: h,
    } = e,
    [_, y] = w.useState(!1),
    [S, C] = w.useState(void 0),
    [E, D] = w.useState(void 0),
    [O, k] = w.useState(-1),
    [A, N] = w.useState(void 0),
    [F, I] = w.useState(0),
    [L, R] = w.useState(0),
    [z, B] = w.useState(void 0),
    [V, H] = w.useState(``),
    U = w.useRef(void 0),
    W = w.useRef([]),
    G = w.useRef([]),
    K = w.useMemo(() => T.default.CancelToken.source(), []),
    q = () => {
      U.current?.firstElementChild &&
        (I(U.current.firstElementChild.getBoundingClientRect().height),
        R(U.current.firstElementChild.getBoundingClientRect().width));
    };
  w.useEffect(() => {
    q();
  }, []),
    w.useEffect(() => () => K.cancel(`ReorderableList unmounting`), [K]);
  let J = (e, t) => {
      let n = W.current[e]?.current;
      if (!n) {
        console.error(`start element grab missing element at index ` + e);
        return;
      }
      y(!0), k(e), B(void 0), N(e);
      let r = t.clientX - n.getBoundingClientRect().left;
      C(r);
      let i = t.clientY - n.getBoundingClientRect().top;
      D(i),
        (n.style.position = `fixed`),
        (n.style.left = t.clientX - r + `px`),
        (n.style.top = t.clientY - i + `px`),
        (n.style.zIndex = `1`);
    },
    Y = w.useCallback(
      (e) => {
        let t = W.current[O]?.current;
        t
          ? ((t.style.left = e.clientX - S + `px`),
            (t.style.top = e.clientY - E + `px`))
          : console.error(`update grab element missing element`);
      },
      [O, S, E],
    ),
    X = w.useCallback(() => {
      let e = W.current[O]?.current;
      e
        ? ((e.style.position = ``), (e.style.zIndex = ``))
        : console.error(`end element drag missing element`),
        y(!1),
        k(-1),
        B(void 0),
        N(void 0);
    }, [O]),
    ee = (e, t) => {
      K.token.reason ||
        (U.current.firstElementChild?.getBoundingClientRect().height > 0 &&
          F != U.current.firstElementChild.getBoundingClientRect().height &&
          q(),
        J(t, e),
        e.preventDefault());
    },
    Z = (e, n) => {
      let r = m(n > e ? n - 1 : n, 0, t.length - 1);
      e != r && (o ? o(e, r) : b(t, e, r), $(r), a && a(t));
    },
    te = (e) => {
      _ && !K.token.reason && (X(), Z(O, A));
    },
    ne = w.useCallback(
      (e) => {
        if (!_ || K.token.reason) return;
        let t = e.clientY,
          n;
        for (let e = 0; e < G.current.length; e++)
          if (
            t <
            (G.current[e].current.getBoundingClientRect().top +
              G.current[e].current.getBoundingClientRect().bottom * 2) /
              3
          ) {
            n = e;
            break;
          }
        N(n ?? G.current.length), Y(e);
      },
      [_, K, Y],
    );
  g(window, `mousemove`, _ ? ne : void 0),
    g(window, `mouseup`, _ ? te : void 0),
    w.useEffect(() => {
      for (let e = W.current.length; e < t.length; e++)
        W.current.push(w.createRef()), G.current.push(w.createRef());
    }, [t.length]);
  let Q = (e) => {
      B(void 0);
      let t = V?.trim(),
        n = Number.parseInt(t);
      if (t.length == 0 || isNaN(n)) return;
      let r = n - 1;
      e != r && Z(e, r);
    },
    re = (e, t) => {
      e.key === `Enter` && (Q(t), e.currentTarget.blur());
    },
    [ie, $] = w.useState(void 0);
  return (0, M.jsx)(`div`, {
    className: d,
    ref: U,
    children: t.map((e, a) =>
      (0, M.jsxs)(
        `div`,
        {
          ref: G.current[a],
          children: [
            a == A && (0, M.jsx)(P, { width: L }),
            (0, M.jsx)(`div`, {
              ref: W.current[a],
              className: u,
              children:
                a == O &&
                (0, M.jsxs)(`div`, {
                  className: v(`OfpXVyFy5Fo-`, h),
                  children: [
                    (0, M.jsx)(`img`, {
                      className: v(`SZCLgazwykY-`, `g3MCfqYh-Wk-`),
                      src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
                    }),
                    (0, M.jsx)(`input`, {
                      className: v(
                        `Z2hFr9c9Bx8-`,
                        `F7c1qF6I3Vk-`,
                        `g3MCfqYh-Wk-`,
                      ),
                      type: `text`,
                      value: (A > a ? A - 1 : A) + 1,
                      disabled: !0,
                    }),
                    n(e, a),
                  ],
                }),
            }),
            (0, M.jsxs)(`div`, {
              className: v(
                c,
                h,
                _ && `hJ8eUERcJ1g-`,
                a == O && `RSxJyqlJePw-`,
                ie == a && `CSyJhiym-Wc-`,
              ),
              onAnimationEnd: () => $(void 0),
              children: [
                (0, M.jsx)(`img`, {
                  className: v(s, p, f && `CdaHiMxsOyE-`),
                  src: j,
                  onMouseDown: f ? void 0 : (e) => ee(e, a),
                }),
                (0, M.jsx)(`input`, {
                  className: v(l, f && `F7c1qF6I3Vk-`),
                  type: `text`,
                  value: z == a ? V : a + 1,
                  disabled: f || a == O,
                  onChange: (e) => H(e.target.value),
                  onKeyDown: (e) => re(e, a),
                  onFocus: (e) => {
                    B(a), H(e.target.value);
                  },
                  onBlur: () => Q(a),
                }),
                n(e, a),
                a != O &&
                  !!(i || r) &&
                  (0, M.jsxs)(`div`, {
                    className: `PZ2dh9brop4-`,
                    children: [
                      !!i &&
                        (0, M.jsx)(`div`, {
                          className: `EJE6Uh9cQZA-`,
                          onClick: (e) => i(a, e),
                          children: (0, M.jsx)(x, {}),
                        }),
                      !!r &&
                        (0, M.jsx)(`img`, {
                          className: `EJE6Uh9cQZA-`,
                          src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==`,
                          onClick: (e) => r(a, e),
                        }),
                    ],
                  }),
              ],
            }),
            A == t.length && a == t.length - 1 && (0, M.jsx)(P, { width: L }),
          ],
        },
        a,
      ),
    ),
  });
}
function P(e) {
  let { width: t } = e;
  return (0, M.jsx)(`div`, {
    className: o,
    children: (0, M.jsx)(`div`, { className: f, style: { width: t } }),
  });
}
function F(e) {
  let {
      rgSocialMediaItems: t,
      fnSetItems: n,
      rgSupportedSocialMediaTypes: r,
      rgValidationData: i,
    } = e,
    a = w.useMemo(
      () =>
        r
          .filter(
            (e) =>
              t.findIndex((t) => t.type === e.type) === -1 ||
              e.type === `qq` ||
              e.type === `qqlink`,
          )
          .map((e) => ({
            label: y(`#StoreAdmin_SocialMedia_Type_${e.type}`),
            data: e.type,
          }))
          .sort((e, t) => (e.label < t.label ? -1 : 1)),
      [r, t],
    ),
    o = (e) => {
      let r = t.slice();
      r.splice(e, 1), n(r);
    },
    s = (e, r) => {
      let i = t.slice();
      b(i, e, r), n(i);
    },
    c = (e, r) => {
      let i = t.map((t, n) => (n === e ? { ...t, link: r } : t));
      n(i);
    };
  return (0, M.jsxs)(M.Fragment, {
    children: [
      (0, M.jsx)(I, {
        options: a,
        onAddLink: (e) => {
          let r = t.slice();
          r.push({ type: e, link: `` }), n(r);
        },
      }),
      (0, M.jsx)(N, {
        items: t,
        onDelete: o,
        onMove: s,
        render: (e, t) =>
          (0, M.jsx)(
            R,
            {
              item: e,
              onUpdateLink: (e) => c(t, e),
              validationData: i[e.type],
            },
            e.type,
          ),
      }),
    ],
  });
}
function I(e) {
  let { options: t, onAddLink: n } = e;
  return (0, M.jsx)(`div`, {
    className: A,
    children: (0, M.jsx)(h, {
      strDefaultLabel: y(`#StoreAdmin_SocialMedia_Add`),
      controlled: !0,
      rgOptions: t,
      onChange: (e) => {
        let t = e.data;
        t && n(t);
      },
      selectedOption: null,
    }),
  });
}
function L(e, t) {
  let n = !0,
    r = ``;
  return (
    t.prefix
      ? ((r =
          e.type === `mastodon`
            ? y(
                `#StoreAdmin_SocialMedia_ValidationMastodon`,
                t.prefix.join(`, `),
              )
            : y(
                `#StoreAdmin_SocialMedia_ValidationPrefix`,
                t.prefix.join(`, `),
              )),
        e.link &&
          ((n = !1),
          t.prefix.forEach((t) => {
            e.link.startsWith(t) && (n = !0);
          })))
      : t.number
        ? ((r = y(`#StoreAdmin_SocialMedia_ValidationNumber`)),
          e.link && (n = /^\d+$/.test(e.link)))
        : t.text
          ? (r = y(`#StoreAdmin_SocialMedia_ValidationText`))
          : t.regex &&
            e.type === `tumblr` &&
            (r = y(`#StoreAdmin_SocialMedia_ValidationTumblr`)),
    { bValid: n, strTooltip: r }
  );
}
function R(e) {
  let { item: t, onUpdateLink: n, validationData: r } = e,
    i;
  i = r.number
    ? y(`#StoreAdmin_SocialMedia_EnterNumber`)
    : r.text
      ? y(`#StoreAdmin_SocialMedia_EnterName`)
      : y(`#StoreAdmin_SocialMedia_EnterLink`);
  let { bValid: a, strTooltip: o } = L(t, r);
  return (0, M.jsxs)(`div`, {
    className: D,
    children: [
      (0, M.jsx)(`div`, {
        className: O,
        children: y(`#StoreAdmin_SocialMedia_Type_${t.type}`),
      }),
      (0, M.jsx)(S, {
        className: k,
        type: `text`,
        value: t.link,
        placeholder: i,
        onChange: (e) => n(e.target.value),
      }),
      o &&
        (0, M.jsx)(_, {
          className: `vIGgULQ6INU-`,
          toolTipContent: o,
          children: `(?)`,
        }),
      !a && (0, M.jsx)(`div`, { className: `TDokO-aV6BA-`, children: o }),
    ],
  });
}
function z(e) {
  let { clanAccountID: t, page_config: n } = e,
    r = E(),
    [i, o] = (0, w.useState)(() => n?.social_media ?? []),
    [s, c] = (0, w.useState)(() => n?.social_media ?? []);
  return r
    ? (0, M.jsxs)(M.Fragment, {
        children: [
          (0, M.jsx)(`br`, {}),
          (0, M.jsx)(`h4`, { children: y(`#CreatorHome_SocialMedia_Title`) }),
          (0, M.jsx)(`p`, { children: y(`#CreatorHome_SocialMedia_Desc`) }),
          (0, M.jsxs)(`blockquote`, {
            children: [
              (0, M.jsx)(F, {
                rgValidationData: r.rgValidationData,
                rgSupportedSocialMediaTypes: r.rgSupportedSocialMediaTypes,
                rgSocialMediaItems: i,
                fnSetItems: (e) => {
                  o(e);
                  let t = r.rgValidationData,
                    n = e
                      .filter((e) => !!e.link)
                      .filter((e) => L(e, t[e.type]).bValid);
                  c(n);
                },
              }),
              s?.length > 0 &&
                (0, M.jsx)(`input`, {
                  type: `hidden`,
                  name: `social_media`,
                  value: JSON.stringify(s),
                }),
              (0, M.jsx)(`a`, {
                className: `btnv6_blue_hoverfade btn_medium`,
                href: `#`,
                onClick: (e) => {
                  e.preventDefault(),
                    window.g_StoreLocHelper?.SaveFields([`tagline`]),
                    window.UpdateCuratorFromForm?.(
                      document.getElementById(`listform`),
                    );
                },
                children: (0, M.jsx)(`span`, { children: y(`#Button_Save`) }),
              }),
            ],
          }),
        ],
      })
    : (0, M.jsx)(a, { string: y(`#Loading`), position: `center` });
}
export { z as default };
