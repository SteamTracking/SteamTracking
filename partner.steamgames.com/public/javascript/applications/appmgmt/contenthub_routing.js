/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, rt as t, sn as n, vt as r } from "./chunk~de7f2df91c.js";
import { I as i } from "./chunk~25a6634263.js";
import {
  $t as a,
  Gt as o,
  Pt as s,
  Ut as c,
  Vt as l,
  Wt as u,
  Yt as d,
  an as f,
  f as p,
  h as m,
  hr as h,
  l as g,
  rn as _,
  tn as v,
  ua as y,
  zt as b,
} from "./chunk~1fa4b8f2ff.js";
import { a as x, r as S, t as ee } from "./chunk~44f252525d.js";
import { r as te, t as ne } from "./chunk~9fc22a4638.js";
import { t as re } from "./chunk~c12081e677.js";
import { r as ie } from "./chunk~8681f5c764.js";
import { t as ae } from "./chunk~f4e4ed5c17.js";
import { r as oe } from "./chunk~af36c62e9f.js";
import { t as C } from "./chunk~eefd71512b.js";
import { t as w } from "./chunk~58c6c52d52.js";
import { A as T, k as E, r as D } from "./chunk~6110f63e8e.js";
import { t as O } from "./chunk~f8f9713b0c.js";
import {
  _ as k,
  b as A,
  d as j,
  f as M,
  h as N,
  l as P,
  m as F,
  n as I,
  p as L,
  r as R,
  t as z,
  u as B,
  v as V,
  x as H,
  y as U,
} from "./chunk~209a3e6c2e.js";
import { t as W } from "./chunk~fb7b5d9c48.js";
import { t as G } from "./chunk~ea4856d3e2.js";
var K = n(e()),
  q = r();
ae();
var J = new Map();
(J.set(2, 5), J.set(1, 5), J.set(4, 1), J.set(3, 4));
function se(e) {
  let t = null;
  switch (e) {
    case 5:
      t = `#ContentDescriptor_GeneralMatureContent`;
      break;
    case 2:
      t = `#ContentDescriptor_FrequentViolenceOrGore`;
      break;
    case 1:
      t = `#ContentDescriptor_NudityOrSexualContent`;
      break;
    case 4:
      t = `#ContentDescriptor_GratuitousNudityOrSexualContent`;
      break;
    case 3:
      t = `#ContentDescriptor_AdultOnlySexualContent`;
      break;
    default:
      throw `Invalid content descriptor.`;
  }
  return y(t);
}
function ce(e) {
  return (0, q.jsx)(ee, {
    message: (e) => !k() || y(`#Generel_Discard_Warning`),
  });
}
var le = `ZPIxJReBVKs-`,
  ue = `BHEB4gSf2iA-`,
  de = `uJqFsR6AGKY-`,
  Y = `_1XxT1huIGzw-`,
  fe = `_0HQOfj-VTpw-`,
  pe = `ype73CNOWgo-`,
  me = `nBNHjmf1xx4-`,
  he = `AplRfMZt19E-`,
  ge = `TFTDRxyqyHM-`,
  _e = `vjWRJVdEwSo-`,
  X = `uILl-W5VJqw-`,
  ve = K.memo(function () {
    let [e, n] = K.useState(),
      [r, i] = K.useState(!1),
      [a, o] = K.useState(!1),
      [s, c] = K.useState(!1);
    K.useEffect(() => {
      V().then((e) => {
        (n(e.rgCategories), c(e.bHasUnpublishedChanges), i(!0));
      });
    }, []);
    let l = K.useCallback((e) => {
      (n(e), o(!0));
    }, []);
    return r
      ? (0, q.jsxs)(`div`, {
          className: D,
          children: [
            (0, q.jsx)(`div`, {
              className: T,
              children: `Content Hub Categories`,
            }),
            (0, q.jsx)(`hr`, { className: le }),
            (0, q.jsxs)(`p`, {
              children: [
                `This page lets you review and edit existing categories. Click on their titles.  At the bottom there is controls to create a new category. To see the hubs performance related to making a theme sale `,
                (0, q.jsx)(`a`, {
                  href: `${t.PARTNER_BASE_URL}promotion/planning/themes`,
                  children: `here.`,
                }),
              ],
            }),
            (0, q.jsx)(`a`, {
              href: `https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m`,
              target: `_blank`,
              children: `Content Hub Graphana Stats Page`,
            }),
            (0, q.jsx)(`div`, { className: E, children: `Categories` }),
            s &&
              (0, q.jsx)(`div`, {
                className: `JRkGXgv8PKM-`,
                children: `You have unpublished changes. Click Publish below to publish and make them available to users.`,
              }),
            (0, q.jsx)(ye, { categories: e, onUpdate: l }),
            (0, q.jsxs)(`div`, {
              className: ue,
              children: [
                (0, q.jsx)(f, {
                  onClick: () =>
                    m(
                      (0, q.jsx)(Ee, {
                        categories: e,
                        onSave: () => {
                          (o(!1), c(!0));
                        },
                      }),
                      window,
                    ),
                  children: a
                    ? (0, q.jsx)(q.Fragment, { children: `Save` })
                    : (0, q.jsxs)(q.Fragment, {
                        children: [(0, q.jsx)(h, {}), `Saved`],
                      }),
                }),
                (0, q.jsx)(u, {
                  onClick: () =>
                    m((0, q.jsx)(De, { onPublish: () => c(!1) }), window),
                  children: `Publish`,
                }),
              ],
            }),
          ],
        })
      : (0, q.jsx)(C, { size: `medium`, position: `center` });
  });
function ye(e) {
  let { categories: t, onUpdate: n } = e,
    { rgTags: r } = H(),
    [i] = oe(`edit`);
  if (!t) return (0, q.jsx)(`div`, { children: `No categories defined.` });
  let a = () => {
      n((e) => {
        let n = 0;
        for (let t of e) t.id && Number(t.id) > n && (n = Number(t.id));
        return [...e, { handle: `new_category_` + t.length, id: ++n }];
      });
    },
    o = (e) => {
      n((t) => t.filter((t, n) => n != e));
    },
    s = (e) => {
      n((t) => t.map((t) => (t.id === e.id ? e : t)));
    };
  return (0, q.jsxs)(`div`, {
    className: de,
    children: [
      (0, q.jsx)(G, {
        bDisabled: !0,
        items: t,
        onDelete: o,
        render: (e) =>
          (0, q.jsx)(
            xe,
            {
              item: e,
              rgTags: r,
              fnSaveCategory: s,
              bOpenEditor: i?.toLowerCase() == e.handle,
            },
            e.id,
          ),
      }),
      (0, q.jsx)(u, { onClick: a, children: `Add Category` }),
    ],
  });
}
function be(e) {
  let { rgTags: t, replacesTags: n } = e,
    r = (0, K.useMemo)(
      () =>
        n
          ?.map(
            (e) =>
              (t?.find((t) => t.tagid === e.id)?.name || `Unknown tag`) +
              ` (` +
              String(e.id) +
              `)`,
          )
          .join(`, `),
      [n, t],
    );
  return r
    ? (0, q.jsx)(`span`, { children: `Replaces tags: ` + r })
    : (0, q.jsx)(`span`, {});
}
function xe(e) {
  let { item: t, rgTags: n, fnSaveCategory: r, bOpenEditor: a } = e,
    [o, s, c] = i(a),
    l = (e, t) => {
      (e.preventDefault(), e.stopPropagation(), s());
    };
  return (0, q.jsx)(`div`, {
    className: Y,
    children: (0, q.jsxs)(`div`, {
      className: fe,
      children: [
        (0, q.jsxs)(`a`, {
          onClick: (e) => l(e, t),
          children: [
            (0, q.jsx)(`b`, { children: t.loc_token ? y(t.loc_token) : `` }),
            t.loc_token ? ` (` + t.handle + `)` : t.handle,
          ],
        }),
        (0, q.jsx)(`div`, {
          className: pe,
          children:
            t.type === `tagids`
              ? `Tags`
              : t.type === `category`
                ? `Category`
                : t.type === `contenthub`
                  ? `Hardcoded Filter`
                  : `Special`,
        }),
        (0, q.jsx)(`div`, {
          className: me,
          children: t.exclude_from_search === !0 ? `Excluded from search` : ``,
        }),
        (0, q.jsx)(`div`, {
          className: he,
          children: (0, q.jsx)(be, {
            rgTags: n,
            replacesTags: t.replaces_tags,
          }),
        }),
        (0, q.jsx)(ie, {
          active: o,
          children: (0, q.jsx)(Se, {
            category: t,
            fnSaveCategory: r,
            closeModal: c,
          }),
        }),
      ],
    }),
  });
}
function Se(e) {
  let { fnSaveCategory: t, closeModal: n } = e,
    [r, i] = K.useState(e.category),
    u = K.useMemo(
      () => [
        { data: `tagids`, label: `Tag Hub` },
        { data: `category`, label: `Categories` },
        { data: `contenthub`, label: `Hardcoded Filter Hub` },
      ],
      [],
    ),
    d = K.useCallback((e) => i((t) => ({ ...t, content_descriptors: e })), [i]);
  return (0, q.jsxs)(p, {
    title: `Edit Category (ID ${r.id})`,
    bAllowFullSize: !0,
    onCancel: n,
    closeModal: n,
    children: [
      (0, q.jsx)(l, {
        children: (0, q.jsxs)(`div`, {
          className: ge,
          children: [
            (0, q.jsx)(b, {
              label: `Handle`,
              tooltip: `This forms the end of the URL. It must be unique`,
              value: r.handle,
              onChange: (e) => i((t) => ({ ...t, handle: e.target.value })),
            }),
            (0, q.jsxs)(`div`, {
              className: Y,
              children: [
                (0, q.jsx)(b, {
                  label: `Loc Token`,
                  tooltip: `Token only needed if we wish to expose this hub to customers`,
                  value: r.loc_token,
                  onChange: (e) =>
                    i((t) => ({ ...t, loc_token: e.target.value })),
                }),
                r.loc_token && (0, q.jsx)(c, { children: y(r.loc_token) }),
                (0, q.jsx)(b, {
                  label: `Description Loc Token`,
                  tooltip: `A localized token explaining this content hub to customers`,
                  value: r.description_loc_token,
                  onChange: (e) =>
                    i((t) => ({ ...t, description_loc_token: e.target.value })),
                }),
                r.description_loc_token &&
                  (0, q.jsx)(c, { children: y(r.description_loc_token) }),
              ],
            }),
            (0, q.jsx)(o, {
              label: `Use As A Heading `,
              tooltip: `Only used for establishing headings used on the main store drop-down menu`,
              checked: r.heading,
              onChange: (e) => i((t) => ({ ...t, heading: e })),
            }),
            (0, q.jsx)(o, {
              label: `Exclude from search `,
              tooltip: `Do not show this category in store search`,
              checked: r.exclude_from_search,
              onChange: (e) => i((t) => ({ ...t, exclude_from_search: e })),
            }),
            (0, q.jsx)(b, {
              label: `Search aliases`,
              tooltip: `Comma separated search aliases`,
              value: r.search_alias,
              onChange: (e) =>
                i((t) => ({ ...t, search_alias: e.target.value })),
            }),
            (0, q.jsx)(s, {
              label: `Type`,
              rgOptions: u,
              selectedOption: r.type,
              onChange: (e) => i((t) => ({ ...t, type: e.data })),
            }),
            (0, q.jsx)(Z, {
              rgContentDescriptors: r.content_descriptors ?? [],
              setContentDescriptors: d,
            }),
            (r.type === `tagids` ||
              r.type === `category` ||
              r.type == `contenthub`) &&
              (0, q.jsx)(Ce, { category: r, setCategory: i }),
          ],
        }),
      }),
      (0, q.jsx)(a, {
        children: (0, q.jsx)(_, {
          onCancel: n,
          onOK: () => {
            (t(r), n());
          },
          strOKText: `Save`,
        }),
      }),
    ],
  });
}
var Z = K.memo(function (e) {
  let { rgContentDescriptors: t, setContentDescriptors: n } = e,
    r = K.useMemo(() => [2, 1, 4, 3], []);
  return (0, q.jsx)(d, {
    label: `Content Descriptors`,
    children: (0, q.jsx)(re, {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      getOptionLabel: (e) => se(e),
    }),
  });
});
function Ce(e) {
  let { category: t, setCategory: n } = e,
    [r, i] = (0, K.useState)(!1),
    [a, s] = (0, K.useState)(0);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (t.type == `tagids` || t.type == `category`) &&
        (0, q.jsx)(`div`, {
          className: `_1XxT1huIGzw-`,
          children: (0, q.jsxs)(`div`, {
            className: `_0HQOfj-VTpw-`,
            children: [
              (0, q.jsx)(Q, {
                category: t,
                setCategory: n,
                list: `must`,
                title: `Must have all of these tags`,
              }),
              (0, q.jsx)(Q, {
                category: t,
                setCategory: n,
                list: `any`,
                title: `Must have one of these tags`,
              }),
              (0, q.jsx)(Q, {
                category: t,
                setCategory: n,
                list: `mustnot`,
                title: `Must not have any of these tags`,
              }),
            ],
          }),
        }),
      (t.type == `tagids` || t.type == `category` || t.type == `contenthub`) &&
        (0, q.jsxs)(`div`, {
          className: `_1XxT1huIGzw-`,
          children: [
            (0, q.jsx)(Q, {
              category: t,
              setCategory: n,
              list: `replaces_tags`,
              title: `The following Tags should redirect to this category page`,
            }),
            (0, q.jsx)(`p`, {
              children: `This is only needed if this category is similar in name to an existing tag, such as "Sports" where the category is better than the individual tag.`,
            }),
          ],
        }),
      r
        ? (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(u, {
                onClick: () => s(a + 1),
                children: `Refresh Stats`,
              }),
              (0, q.jsx)(we, { category: t }),
            ],
          })
        : (0, q.jsx)(
            o,
            {
              checked: r,
              onChange: (e) => i(e),
              label: `Show Category Sale Stats`,
            },
            `info` + a,
          ),
    ],
  });
}
function we(e) {
  let { category: t } = e,
    n = L(t.must, t.any, t.mustnot);
  if (!n)
    return (0, q.jsx)(C, {
      string: y(`#Loading`),
      position: `center`,
      size: `medium`,
    });
  let r = n.total_games > 500 && n.total_games <= 5e3;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(u, {
        onClick: () => {
          let e = [];
          (e.push([`AppID`, `Sale Rank`]),
            n.top_games.forEach((t) => {
              e.push([`` + t.appid, `` + t.long_term_sale_rank]);
            }));
          let r = (t.handle || `top100`).replace(` `, `_`) + `.csv`;
          O.WriteCSVToFile(e, r);
        },
        children: `Download Top 100 Games`,
      }),
      (0, q.jsx)(u, {
        onClick: () => {
          let e = [];
          (e.push([`AppID`]),
            n.all_appid.forEach((t) => {
              e.push([`` + t]);
            }));
          let r = (t.handle || `allgames`).replace(` `, `_`) + `.csv`;
          O.WriteCSVToFile(e, r);
        },
        children: `Download All Games`,
      }),
      (0, q.jsxs)(`div`, {
        className: j,
        children: [
          (0, q.jsxs)(`div`, {
            className: B,
            children: [
              `Summary: `,
              (0, q.jsx)(I, { nTotalGames: n.total_games }),
              !!r && (0, q.jsx)(Te, { category: t }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            className: M,
            children: [
              (0, q.jsx)(`div`, { children: `Top 10 Games non-F2P:` }),
              (0, q.jsx)(`div`, {
                className: P,
                children: n.top_games
                  ?.slice(0, 10)
                  .map((e) =>
                    (0, q.jsx)(
                      R,
                      { info: e, category: t, bSaleSummary: r },
                      e.appid,
                    ),
                  ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Te(e) {
  let { category: t } = e,
    n = F(t.must, t.any, t.mustnot),
    r = N(t.must, t.any, t.mustnot);
  return (0, q.jsx)(z, { saleSummary: n, topAppSummary: r });
}
var Q = K.memo(function (e) {
  let { category: t, setCategory: n, list: r, title: i } = e,
    { rgTags: a, rgCategories: o } = H(),
    s = (e) => {
      n((t) => ({ ...t, [r]: e(t[r]) }));
    },
    c =
      a?.map((e) => ({ value: e.tagid, label: `${e.name} (${e.tagid})` })) ||
      [],
    l =
      o?.map((e) => ({
        value: e.categoryid,
        label: `${e.name} (${e.categoryid})`,
      })) || [];
  return (0, q.jsxs)(`div`, {
    className: _e,
    children: [
      (0, q.jsx)(v, { children: i }),
      (0, q.jsx)(G, {
        bDisabled: !0,
        items: t[r] ?? [],
        onDelete: (e) => s((t) => t.filter((t, n) => n != e)),
        render: (e, n) =>
          t.type === `tagids` || r === `replaces_tags`
            ? (0, q.jsxs)(`div`, {
                className: X,
                children: [
                  (0, q.jsx)(b, {
                    value: e.id,
                    onChange: (e) =>
                      s((t) =>
                        t.map((t, r) =>
                          r == n ? { ...t, id: parseInt(e.target.value) } : t,
                        ),
                      ),
                  }),
                  (0, q.jsx)(W._default, {
                    className: `react-select-container`,
                    classNamePrefix: `react-select`,
                    isSearchable: !0,
                    options: c,
                    value: c.find((t) => t.value === e.id),
                    onChange: (e) =>
                      s((t) =>
                        t.map((t, r) => (r == n ? { ...t, id: e.value } : t)),
                      ),
                  }),
                ],
              })
            : t.type === `category`
              ? (0, q.jsx)(`div`, {
                  className: X,
                  children: (0, q.jsx)(W._default, {
                    className: `react-select-container`,
                    classNamePrefix: `react-select`,
                    isSearchable: !0,
                    options: l,
                    value: l.find((t) => t.value === e.id),
                    onChange: (e) =>
                      s((t) =>
                        t.map((t, r) => (r == n ? { ...t, id: e.value } : t)),
                      ),
                  }),
                })
              : null,
      }),
      (0, q.jsx)(u, {
        onClick: () => s((e) => (e ? [...e, { id: 0 }] : [{ id: 0 }])),
        children: `Add`,
      }),
    ],
  });
});
function Ee(e) {
  let { categories: t, onSave: n, closeModal: r } = e,
    [i, a] = K.useState();
  return (
    K.useEffect(() => {
      A(t).then((e) => {
        e ? a(e.strErrorMsg) : (n(), r && r());
      });
    }, [t, r, n]),
    (0, q.jsx)(g, {
      strTitle: `Saving`,
      bAlertDialog: !0,
      bDisableBackgroundDismiss: !0,
      bHideCloseIcon: !0,
      closeModal: r,
      children: i
        ? (0, q.jsxs)(`div`, { children: [`Error: `, i] })
        : (0, q.jsx)(C, { size: `medium`, position: `center` }),
    })
  );
}
function De(e) {
  let { onPublish: t, closeModal: n } = e,
    [r, i] = K.useState(!1),
    [a, o] = K.useState();
  return (
    K.useEffect(() => {
      r &&
        U().then((e) => {
          e ? o(e.strErrorMsg) : (t(), i(!1), n && n());
        });
    }, [r, n, t]),
    (0, q.jsx)(g, {
      strTitle: r ? `Publishing` : `Really Publish?`,
      strDescription:
        !r && `Publishing will make your changes immediately visible to users.`,
      bAlertDialog: r,
      bDisableBackgroundDismiss: r,
      bHideCloseIcon: r,
      onOK: () => {
        r ? n && n() : i(!0);
      },
      onCancel: () => {
        n && n();
      },
      children:
        r &&
        (0, q.jsx)(q.Fragment, {
          children: a
            ? (0, q.jsxs)(`div`, { children: [`Error: `, a] })
            : (0, q.jsx)(C, { size: `medium`, position: `center` }),
        }),
    })
  );
}
var $ = { ContentHubCategories: () => `/categories/` };
function Oe(e) {
  return (0, q.jsxs)(ne, {
    basename: te() + `admin/store/contenthub/`,
    children: [
      (0, q.jsx)(ce, {}),
      (0, q.jsxs)(x, {
        children: [
          (0, q.jsx)(S, { path: $.ContentHubCategories(), component: ve }),
          (0, q.jsx)(S, { component: w }),
        ],
      }),
    ],
  });
}
export { $ as ContentHubRoutes, Oe as default };
