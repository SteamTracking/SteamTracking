/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  W as t,
  X as n,
  j as r,
  rt as i,
  sn as a,
  vt as o,
} from "./chunk~de7f2df91c.js";
import { r as s } from "./chunk~25a6634263.js";
import {
  Ea as c,
  Gt as l,
  Nt as u,
  ka as d,
  pn as f,
  wn as p,
  zt as m,
} from "./chunk~1fa4b8f2ff.js";
import { t as h } from "./chunk~ede3e357a2.js";
import { t as g } from "./chunk~f4e4ed5c17.js";
import { r as _ } from "./chunk~af36c62e9f.js";
import { t as v } from "./chunk~2f8c67b4de.js";
import { t as y } from "./chunk~ada233e34d.js";
import { t as b } from "./chunk~3ee5188744.js";
import { a as x, n as S } from "./chunk~a7c5e71e12.js";
import "./chunk~8e34816c9e.js";
import { a as C, o as w, t as T } from "./chunk~4f3a47e991.js";
import { t as E } from "./chunk~80765d41ae.js";
var D = a(e()),
  O = `MdJYPHe5A8U-`,
  k = `jV4DKdPFrho-`,
  A = `Fa6-3eYcsOM-`,
  j = `Z2UFMkykFcM-`,
  M = `-ol-zM5qXI4-`,
  N = `gTgsFoLQZHo-`,
  P = `-SI5GPJhUtY-`,
  F = `aTwFuosUkco-`,
  I = `jYLh2Fi2yY0-`,
  L = a(g()),
  R = o(),
  z = { include_assets: !0, include_release: !0 };
function B() {
  let e = q(9),
    [t, n] = _(`query`, ``),
    i = (0, D.useMemo)(
      () =>
        Array.from(
          new Set(e?.map((e) => e.data.store_item_id).filter(Boolean)),
        ),
      [e],
    ),
    a = (0, D.useMemo)(
      () =>
        Array.from(new Set(e?.map((e) => e.data.partnerid).filter(Boolean))),
      [e],
    ),
    o = x(i, z),
    c = w(a),
    [u, d] = _(`internaldate`, !1),
    h = (0, D.useMemo)(() => {
      let n = t.trim().toLocaleLowerCase();
      return e
        ?.filter(
          (e) =>
            n.length == 0 ||
            o == 1 ||
            !c ||
            b
              .Get()
              .GetApp(e.data.store_item_id)
              ?.GetName()
              .toLocaleLowerCase()
              .includes(n) ||
            T(e.data.partnerid)?.name.toLocaleLowerCase().includes(n),
        )
        .sort((e, t) => t.data.due_date - e.data.due_date);
    }, [t, e, o, c]);
  return e
    ? (0, R.jsxs)(s, {
        children: [
          (0, R.jsxs)(`h3`, {
            children: [
              `Season Passes `,
              (0, R.jsx)(`button`, {
                className: r(v),
                style: { float: `right`, marginRight: `16px` },
                onClick: (e) =>
                  p(
                    e,
                    `https://confluence.valve.org/display/~adils/Steam+Season+Passes`,
                  ),
                children: `Help`,
              }),
            ],
          }),
          (0, R.jsx)(`p`, {
            children: `This dashboard surfaces any important deadlines that a partner has missed. Currently, the only ones we are tracking are related to customer commitments with Season Pass DLC.`,
          }),
          (0, R.jsx)(m, {
            type: `string`,
            value: t,
            onChange: (e) => n(e.currentTarget.value.toLocaleLowerCase()),
            label: `Filter`,
            tooltip: `Filters the list to be those that contain the letters you typed exactly (case insenstive) on the page id or name`,
            placeholder: `type here...`,
          }),
          (0, R.jsx)(l, {
            label: `Show those missing their internal deadline date`,
            checked: u,
            tooltip: `Partner can set for themselves an internal date when they project the milestone is done, this is separate from the date we show customers as it has a range component.`,
            onChange: d,
          }),
          (0, R.jsxs)(`table`, {
            children: [
              (0, R.jsx)(`thead`, {
                children: (0, R.jsxs)(`tr`, {
                  children: [
                    (0, R.jsx)(`th`, { children: `Deadline ID` }),
                    (0, R.jsxs)(`th`, {
                      children: [
                        `Milestone ID `,
                        (0, R.jsx)(f, {
                          tooltip: `This is only unique within a DLC Season Pass`,
                        }),
                      ],
                    }),
                    (0, R.jsx)(`th`, { children: `Season Pass DLC` }),
                    (0, R.jsx)(`th`, { children: `Partner` }),
                    (0, R.jsx)(`th`, { children: `Season Pass Release Date` }),
                    (0, R.jsxs)(`th`, {
                      children: [
                        `Deadline Date `,
                        (0, R.jsx)(f, {
                          tooltip: `This account for what the customrs see on the store, not their specific data`,
                        }),
                      ],
                    }),
                    (0, R.jsx)(`th`, { children: `Milestone Name` }),
                    (0, R.jsx)(`th`, { children: `Ticket?` }),
                  ],
                }),
              }),
              (0, R.jsx)(`tbody`, {
                children: h.map((e) =>
                  (0, R.jsx)(V, { deadline: e }, `` + e.deadlineid),
                ),
              }),
            ],
          }),
        ],
      })
    : null;
}
function V(e) {
  let { deadline: n } = e,
    [r] = S(n.data.store_item_id, z),
    [i] = C(n.data.partnerid),
    a = E(n.data.store_item_id)?.find(
      (e) => e.milestone_id == Number.parseInt(n.data.gid),
    );
  return (0, R.jsxs)(`tr`, {
    children: [
      (0, R.jsx)(`td`, { children: n.deadlineid }),
      (0, R.jsx)(`td`, { children: n.data.gid }),
      (0, R.jsxs)(`td`, {
        children: [
          (0, R.jsx)(`a`, {
            href: r?.GetStorePageURL(),
            target: `_blank`,
            children: r?.GetName() || `unknown`,
          }),
          `(`,
          (0, R.jsxs)(`a`, {
            href: `${t.PARTNER_BASE_URL}admin/game/editbyappid/${n.data.store_item_id}`,
            target: `_blank`,
            children: [n.data.store_item_id, `)`],
          }),
        ],
      }),
      (0, R.jsx)(`td`, {
        children: (0, R.jsxs)(`a`, {
          href: `${t}pub/companydetails/${n.data.partnerid}`,
          target: `_blank`,
          children: [i?.name || `unknown`, ` (`, n.data.partnerid, `)`],
        }),
      }),
      (0, R.jsxs)(`td`, {
        children: [
          c(r?.GetReleaseDateRTime()),
          (0, R.jsx)(`span`, { children: ` - ` }),
          d(r?.GetReleaseDateRTime(), { bForce24HourClock: !1 }),
        ],
      }),
      (0, R.jsxs)(`td`, {
        children: [
          c(n.data.due_date),
          (0, R.jsx)(`span`, { children: ` - ` }),
          d(n.data.due_date, { bForce24HourClock: !1 }),
        ],
      }),
      (0, R.jsx)(`td`, {
        children: a?.title.find((e) => e.language == 0)?.localized_string,
      }),
      (0, R.jsx)(`td`, { children: `TODO` }),
    ],
  });
}
function H() {
  let [e, t] = D.useState(0),
    n = q(10, e),
    r = D.useRef(0);
  D.useEffect(() => () => window.clearTimeout(r.current), []);
  let i = (e) => {
      let n = Number(e.currentTarget.value);
      (window.clearTimeout(r.current),
        (r.current = window.setTimeout(() => t(n), 1e3)));
    },
    a = D.useMemo(() => {
      let e = new Map();
      return (
        n
          ?.sort((e, t) => {
            let n = JSON.parse(e.data.description_jsondata),
              r = JSON.parse(t.data.description_jsondata),
              i = new Date(n?.CreatedOn);
            return new Date(r?.CreatedOn).getTime() - i.getTime();
          })
          ?.forEach((t) => {
            let n;
            (e.has(t.data.gid)
              ? (n = e.get(t.data.gid))
              : ((n = []), e.set(t.data.gid, n)),
              n.push(t.data));
          }),
        e
      );
    }, [n]);
  return (0, R.jsxs)(`div`, {
    className: A,
    children: [
      (0, R.jsx)(`h3`, { children: `Tax Requirement Deadlines` }),
      (0, R.jsx)(`div`, {
        className: j,
        children: (0, R.jsxs)(`div`, {
          className: M,
          children: [
            `PartnerID: `,
            (0, R.jsx)(`textarea`, { cols: 30, rows: 1, onChange: i }),
          ],
        }),
      }),
      (0, R.jsxs)(`div`, {
        className: N,
        children: [
          (0, R.jsxs)(`table`, {
            children: [
              (0, R.jsx)(`thead`, {
                children: (0, R.jsxs)(`tr`, {
                  children: [
                    (0, R.jsx)(`th`, { className: P, children: `Action ID` }),
                    (0, R.jsx)(`th`, { className: F, children: `Status` }),
                    (0, R.jsx)(`th`, { children: `Template` }),
                    (0, R.jsx)(`th`, { className: I, children: `Created On` }),
                    (0, R.jsx)(`th`, { children: `Dropbox URL` }),
                    (0, R.jsx)(`th`, { children: `Freeform Message` }),
                  ],
                }),
              }),
              (0, R.jsx)(`tbody`, {
                children:
                  a?.size > 0 &&
                  Array.from(a?.values()).map((e, t) =>
                    e.length > 0
                      ? (0, R.jsx)(
                          U,
                          { actionID: e[0].gid, rgDeadlines: e },
                          `aid_` + t,
                        )
                      : null,
                  ),
              }),
            ],
          }),
          !n && e > 0 && (0, R.jsx)(y, { size: `small` }),
          n?.length == 0 &&
            e > 0 &&
            (0, R.jsxs)(`div`, {
              className: `_0UK-68UGjq4-`,
              children: [`No tax notifications for partner `, e],
            }),
        ],
      }),
    ],
  });
}
function U(e) {
  let { actionID: t, rgDeadlines: n } = e;
  return n.length
    ? (0, R.jsxs)(R.Fragment, {
        children: [
          (0, R.jsx)(`tr`, { children: (0, R.jsx)(`td`, { children: t }) }),
          n.map((e, t) => (0, R.jsx)(G, { deadline: e }, e.gid + `_` + t)),
        ],
      })
    : null;
}
function W(e) {
  if (!e) return null;
  let t = /(Z|[+-]\d{2}:?\d{2})$/i.test(e);
  return new Date(t ? e : e + `Z`);
}
function G(e) {
  let { deadline: t } = e,
    n = JSON.parse(t.description_jsondata),
    r = W(n.CreatedOn),
    i =
      r && !isNaN(r.getTime())
        ? r.toLocaleString(`en-us`, { timeZoneName: `short` })
        : n.CreatedOn;
  return (0, R.jsxs)(`tr`, {
    children: [
      (0, R.jsx)(`td`, {}),
      (0, R.jsx)(`td`, { children: t.status ? `Complete` : `Active` }),
      (0, R.jsx)(`td`, { children: n.TemplateName }),
      (0, R.jsx)(`td`, { children: i }),
      (0, R.jsx)(`td`, { children: n.Parameters?.Dropbox_FileRequest_Url }),
      (0, R.jsx)(`td`, { children: n.Parameters?.CustomMessageBody }),
    ],
  });
}
function K(e) {
  let [t, n] = D.useState(`9`),
    r = [
      { label: `Season Pass Milestone`, data: `9` },
      { label: `Tax Requirement`, data: `10` },
    ],
    i = (e) => {
      n(e.data);
    },
    a = null;
  switch (t) {
    case `10`:
      a = (0, R.jsx)(H, {});
      break;
    case `9`:
      a = (0, R.jsx)(B, {});
      break;
    default:
      console.error(`results component not implemented for this deadline type`);
  }
  return (0, R.jsx)(s, {
    children: (0, R.jsxs)(`div`, {
      className: O,
      children: [
        (0, R.jsx)(`h1`, { children: `Deadlines Dashboard` }),
        (0, R.jsx)(`hr`, {}),
        (0, R.jsxs)(`div`, {
          className: k,
          children: [
            `Type: `,
            (0, R.jsx)(u, {
              rgOptions: r,
              selectedOption: t,
              strDropDownClassName: void 0,
              onChange: i,
              contextMenuPositionOptions: { bMatchWidth: !1 },
            }),
          ],
        }),
        (0, R.jsx)(`div`, { className: void 0, children: a }),
      ],
    }),
  });
}
function q(e, t) {
  let r = h({
    queryKey: [`partnerDeadlines`, e, t],
    queryFn: async () => {
      if (t && t < 0) return;
      let r = new FormData();
      (r.append(`type`, e.toString()),
        r.append(`sessionid`, n()),
        t && r.append(`partnerid`, t.toString()));
      let a = `${i.PARTNER_BASE_URL}deadlines/ajaxgetdeadlines`,
        o = await L.default.post(a, r, { withCredentials: !0 });
      if (o?.status == 200) return o.data;
    },
    staleTime: 12e4,
  });
  return r.isLoading ? null : r.data?.deadlines;
}
export { K as default, q as usePartnerDeadlines };
