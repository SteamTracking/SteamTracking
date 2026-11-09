/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  U as t,
  Y as n,
  _t as r,
  kt as i,
  nt as a,
  on as o,
} from "./mobx.esm.js";
import { r as s } from "./src.js";
import {
  At as c,
  Ht as l,
  It as u,
  Sa as d,
  Ta as f,
  un as p,
  xn as m,
} from "./dialogs.js";
import { t as h } from "./useQuery.js";
import { t as g } from "./axios.js";
import { a as _ } from "./historyutils.js";
import { t as v } from "./partnereventshared.module.js";
import { t as y } from "./loadingspinner.js";
import { t as b } from "./storeitemcache.js";
import { a as x, n as S } from "./storeitemhooks.js";
import "./steammessages_partnerdeadline_pb.js";
import { a as C, o as w, t as T } from "./partnerinfostore.js";
import { t as E } from "./seasonpasshooks.js";
var D = o(i()),
  O = `MdJYPHe5A8U-`,
  k = `jV4DKdPFrho-`,
  A = `Fa6-3eYcsOM-`,
  j = `Z2UFMkykFcM-`,
  M = `-ol-zM5qXI4-`,
  N = `gTgsFoLQZHo-`,
  P = `-SI5GPJhUtY-`,
  F = `aTwFuosUkco-`,
  I = `jYLh2Fi2yY0-`,
  L = o(g()),
  R = r(),
  z = { include_assets: !0, include_release: !0 };
function B() {
  let t = q(9),
    [n, r] = _(`query`, ``),
    i = (0, D.useMemo)(
      () =>
        Array.from(
          new Set(t?.map((e) => e.data.store_item_id).filter(Boolean)),
        ),
      [t],
    ),
    a = (0, D.useMemo)(
      () =>
        Array.from(new Set(t?.map((e) => e.data.partnerid).filter(Boolean))),
      [t],
    ),
    o = x(i, z),
    c = w(a),
    [d, f] = _(`internaldate`, !1),
    h = (0, D.useMemo)(() => {
      let e = n.trim().toLocaleLowerCase();
      return t
        ?.filter(
          (t) =>
            e.length == 0 ||
            o == 1 ||
            !c ||
            b
              .Get()
              .GetApp(t.data.store_item_id)
              ?.GetName()
              .toLocaleLowerCase()
              .includes(e) ||
            T(t.data.partnerid)?.name.toLocaleLowerCase().includes(e),
        )
        .sort((e, t) => t.data.due_date - e.data.due_date);
    }, [n, t, o, c]);
  return t
    ? (0, R.jsxs)(s, {
        children: [
          (0, R.jsxs)(`h3`, {
            children: [
              `Season Passes `,
              (0, R.jsx)(`button`, {
                className: e(v),
                style: { float: `right`, marginRight: `16px` },
                onClick: (e) =>
                  m(
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
          (0, R.jsx)(u, {
            type: `string`,
            value: n,
            onChange: (e) => r(e.currentTarget.value.toLocaleLowerCase()),
            label: `Filter`,
            tooltip: `Filters the list to be those that contain the letters you typed exactly (case insenstive) on the page id or name`,
            placeholder: `type here...`,
          }),
          (0, R.jsx)(l, {
            label: `Show those missing their internal deadline date`,
            checked: d,
            tooltip: `Partner can set for themselves an internal date when they project the milestone is done, this is separate from the date we show customers as it has a range component.`,
            onChange: f,
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
                        (0, R.jsx)(p, {
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
                        (0, R.jsx)(p, {
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
          d(r?.GetReleaseDateRTime()),
          (0, R.jsx)(`span`, { children: ` - ` }),
          f(r?.GetReleaseDateRTime(), { bForce24HourClock: !1 }),
        ],
      }),
      (0, R.jsxs)(`td`, {
        children: [
          d(n.data.due_date),
          (0, R.jsx)(`span`, { children: ` - ` }),
          f(n.data.due_date, { bForce24HourClock: !1 }),
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
            (0, R.jsx)(c, {
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
      let i = `${a.PARTNER_BASE_URL}deadlines/ajaxgetdeadlines`,
        o = await L.default.post(i, r, { withCredentials: !0 });
      if (o?.status == 200) return o.data;
    },
    staleTime: 12e4,
  });
  return r.isLoading ? null : r.data?.deadlines;
}
export { K as default, q as usePartnerDeadlines };
