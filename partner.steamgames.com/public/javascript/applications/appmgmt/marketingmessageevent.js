/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  Dt as e,
  F as t,
  Pt as n,
  U as r,
  W as i,
  g as a,
  k as o,
  nt as s,
  r as c,
} from "./chunk~de7f2df91c.js";
import { a as l, pt as u, t as d } from "./chunk~bd90a5fce7.js";
import {
  Bt as f,
  Da as p,
  Ft as m,
  Kt as h,
  Rn as g,
  Ua as _,
  da as v,
  fa as y,
  gn as b,
  mn as x,
  nn as S,
} from "./chunk~1fa4b8f2ff.js";
import { _ as C, k as w } from "./chunk~0a99e05c44.js";
import {
  C as T,
  D as E,
  O as D,
  P as O,
  S as k,
  T as A,
  _ as j,
  b as M,
  c as N,
  d as P,
  f as F,
  g as I,
  k as L,
  m as ee,
  p as te,
  u as ne,
  v as re,
  w as ie,
  x as R,
  y as ae,
} from "./chunk~6b8ddcaac8.js";
import { n as oe, r as se } from "./chunk~9a06851bec.js";
import { w as z } from "./chunk~44f252525d.js";
import { t as ce } from "./chunk~ede3e357a2.js";
import { S as le, _ as ue } from "./chunk~a825a84845.js";
import { s as de } from "./chunk~7b4b9eb713.js";
import { t as fe } from "./chunk~25a6634263.js";
import { n as pe } from "./chunk~9d71b14b50.js";
import { t as me } from "./chunk~f4e4ed5c17.js";
import { t as B } from "./chunk~c55709d290.js";
import { t as V } from "./chunk~eefd71512b.js";
import { a as he } from "./chunk~8ceeb46076.js";
import "./chunk~a6b9ae1345.js";
import { h as H, m as U } from "./chunk~2f8c67b4de.js";
import { r as ge } from "./chunk~0111fcd096.js";
import { i as W } from "./chunk~739842ca30.js";
import { t as _e } from "./chunk~ada233e34d.js";
import { t as ve } from "./chunk~a7c5e71e12.js";
import { r as ye } from "./chunk~437071091c.js";
function G(e) {
  return e;
}
var K = n(me()),
  q = n(s()),
  J = i();
function be(e) {
  let { children: t, ...n } = e,
    r = se(),
    i = q.useMemo(
      () => ({ ...he.GetDefaultParams(), ...r, ...n }),
      [r, n.domain, n.controller, n.method, n.submethod, n.feature, n.depth],
    );
  return (0, J.jsx)(oe, { ...i, children: t });
}
var Y = class e {
  m_mapAppIDToPaymentPartners = new Map();
  m_mapAppIDToPromise = new Map();
  m_mapPackageIDToPaymentPartners = new Map();
  m_mapPackageIDToPromise = new Map();
  m_mapBundleIDToPaymentPartners = new Map();
  m_mapBundleIDToPromise = new Map();
  GetInfoForApp(e) {
    return this.m_mapAppIDToPaymentPartners.get(e);
  }
  BHasInfoForApp(e) {
    return this.m_mapAppIDToPaymentPartners.has(e);
  }
  GetInfoForPackage(e) {
    return this.m_mapPackageIDToPaymentPartners.get(e);
  }
  BHasInfoForPackage(e) {
    return this.m_mapPackageIDToPaymentPartners.has(e);
  }
  GetInfoForBundle(e) {
    return this.m_mapBundleIDToPaymentPartners.get(e);
  }
  BHasInfoForBundle(e) {
    return this.m_mapBundleIDToPaymentPartners.has(e);
  }
  GetInfoForStoreItem(e, t) {
    switch (t) {
      case 0:
        return this.GetInfoForApp(e);
      case 1:
        return this.GetInfoForPackage(e);
      case 2:
        return this.GetInfoForBundle(e);
      default:
        return null;
    }
  }
  BHasInfoForStoreItem(e, t) {
    switch (t) {
      case 0:
        return this.BHasInfoForApp(e);
      case 1:
        return this.BHasInfoForPackage(e);
      case 2:
        return this.BHasInfoForBundle(e);
      default:
        return !1;
    }
  }
  async LoadAppPartnerInfo(e) {
    return (
      this.m_mapAppIDToPromise.has(e) ||
        this.m_mapAppIDToPromise.set(
          e,
          this.InternalLoadAppPartnerInfo(e, null, null),
        ),
      this.m_mapAppIDToPromise.get(e)
    );
  }
  async LoadPackagePartnerInfo(e) {
    return (
      this.m_mapPackageIDToPromise.has(e) ||
        this.m_mapPackageIDToPromise.set(
          e,
          this.InternalLoadAppPartnerInfo(null, e, null),
        ),
      this.m_mapPackageIDToPromise.get(e)
    );
  }
  async LoadBundlePartnerInfo(e) {
    return (
      this.m_mapBundleIDToPromise.has(e) ||
        this.m_mapBundleIDToPromise.set(
          e,
          this.InternalLoadAppPartnerInfo(null, null, e),
        ),
      this.m_mapBundleIDToPromise.get(e)
    );
  }
  async LoadStoreItemPartnerInfo(e, t) {
    switch (t) {
      case 0:
        return this.LoadAppPartnerInfo(e);
      case 1:
        return this.LoadPackagePartnerInfo(e);
      case 2:
        return this.LoadBundlePartnerInfo(e);
      default:
        return null;
    }
  }
  async InternalLoadAppPartnerInfo(e, t, n) {
    let r = null;
    try {
      let i = { appid: e, packageid: t, bundleid: n },
        a = o.PARTNER_BASE_URL + `promotion/dailydeals/ajaxgetpartner`,
        s = await K.default.get(a, { params: i, withCredentials: !0 });
      if (s?.status == 200 && s.data?.success == 1)
        return e
          ? (this.m_mapAppIDToPaymentPartners.set(e, s.data.partnerinfo),
            this.m_mapAppIDToPaymentPartners.get(e))
          : t
            ? (this.m_mapPackageIDToPaymentPartners.set(t, s.data.partnerinfo),
              this.m_mapPackageIDToPaymentPartners.get(t))
            : (this.m_mapBundleIDToPaymentPartners.set(n, s.data.partnerinfo),
              this.m_mapBundleIDToPaymentPartners.get(n));
      r = B(s);
    } catch (e) {
      r = B(e);
    }
    return (
      console.error(
        `CPartnerPaymentStore.LoadAppPartnerInfo failed: ` + r?.strErrorMsg,
        r,
      ),
      null
    );
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
  constructor() {}
};
function xe(e) {
  return X(e, 0);
}
function Se(e) {
  return X(e.id, le(e));
}
function X(e, t) {
  let [n, r] = q.useState(() => Y.Get().GetInfoForStoreItem(e, t));
  return (
    q.useEffect(() => {
      e
        ? !Y.Get().BHasInfoForStoreItem(e, t) || n == null
          ? Y.Get().LoadStoreItemPartnerInfo(e, t).then(r)
          : Y.Get().BHasInfoForStoreItem(e, t) &&
            n != Y.Get().GetInfoForStoreItem(e, t) &&
            r(Y.Get().GetInfoForStoreItem(e, t))
        : r(null);
    }, [e, t, n]),
    n
  );
}
function Ce(e) {
  let [t, n] = (0, q.useState)(null);
  return (
    (0, q.useEffect)(() => {
      if (e?.length > 0) {
        let t = e.map((e) => Y.Get().LoadStoreItemPartnerInfo(e, 0));
        Promise.all(t).then(() => {
          let t = new Map();
          (e.forEach((e) => {
            Y.Get().BHasInfoForApp(e) && t.set(e, Y.Get().GetInfoForApp(e));
          }),
            n(t));
        });
      }
    }, [e]),
    t
  );
}
function Z(e) {
  let { href: t, children: n, bAllowFocuseableAnchor: i, ...o } = e;
  return a.EREALM === r.k_ESteamRealmChina
    ? (0, J.jsx)(`div`, { ...o, children: n })
    : i
      ? (0, J.jsx)(l, { href: t, ...o, children: n })
      : (0, J.jsx)(`a`, { href: t, ...o, children: n });
}
function we(e) {
  let {
    strURL: t,
    strName: n,
    strAvatarURL: r,
    nFollowers: i,
    strCreatorType: a,
    strTagLine: o,
    strMemberListURL: s,
    followButton: l,
    bSmallFormat: u,
    bMinimalDisplay: d,
    bCompact: f,
  } = e;
  return (0, J.jsx)(be, {
    feature: `salecreatorhome`,
    children: (0, J.jsxs)(_, {
      className: c(M, u ? D : A, d ? E : ``, f ? F : ``),
      "flow-children": `row`,
      children: [
        !!a && (0, J.jsx)(`span`, { className: `SG9Xn5tF5a0-`, children: a }),
        (0, J.jsxs)(`div`, {
          className: R,
          children: [
            (0, J.jsx)(`div`, {
              className: re,
              style: { backgroundImage: `url(${r} )` },
            }),
            (0, J.jsxs)(`div`, {
              className: c(ae),
              children: [
                (0, J.jsxs)(`div`, {
                  className: H,
                  children: [
                    (0, J.jsx)(Z, {
                      href: g(t),
                      className: P,
                      bAllowFocuseableAnchor: !0,
                      children: (0, J.jsx)(`img`, {
                        className: c(ne, `Avatar_Trgt`),
                        src: r,
                        alt: ``,
                      }),
                    }),
                    (0, J.jsxs)(`div`, {
                      className: c(U, te),
                      children: [
                        (0, J.jsxs)(`div`, {
                          className: c(I, U),
                          children: [
                            (0, J.jsx)(Z, {
                              href: g(t),
                              className: ee,
                              children: n,
                            }),
                            !!o &&
                              (0, J.jsx)(`div`, {
                                className: c(`_0UzWiVhBe8U-`, `ct7kvDppls0-`),
                                children: o,
                              }),
                          ],
                        }),
                        (0, J.jsx)(`div`, {
                          className: c({ [U]: u, [H]: !u, [L]: !0 }),
                          children: (0, J.jsxs)(`div`, {
                            className: c(k),
                            children: [
                              l,
                              (0, J.jsxs)(`div`, {
                                className: c({ [ie]: !0 }),
                                children: [
                                  (0, J.jsx)(`span`, {
                                    children: v(`#CreatorHome_JustFollowers`),
                                  }),
                                  (0, J.jsx)(`span`, {
                                    className: T,
                                    children: pe(i),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !!s &&
                  (0, J.jsx)(`a`, {
                    href: s,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `GEroszngeLM-`,
                    children: v(`#ClanMembershipList`),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Te(e) {
  switch (e) {
    case `publisher`:
      return v(`#CreatorHome_PublishedBy`);
    case `franchise`:
      return v(`#CreatorHome_InFranchise`);
  }
  return v(`#CreatorHome_DevelopedBy`);
}
function Ee(e) {
  let {
      creatorID: t,
      bShowTagline: n,
      bHideCreatorType: r,
      bSmallFormat: i,
      bHideFollowButton: a,
      bAddLinkToMemberList: s,
      bMinimalDisplay: c,
      bCompact: l,
    } = e,
    { creatorHome: u, isFetching: f } = de(t.clan_account_id),
    [p] = O();
  return p || (!u && f)
    ? (0, J.jsx)(`div`, {
        className: R,
        children: (0, J.jsx)(V, {
          string: v(`#Loading`),
          size: `medium`,
          position: `center`,
        }),
      })
    : u
      ? (0, J.jsx)(d, {
          children: (0, J.jsx)(we, {
            strURL: u.GetCreatorHomeURL(t.type),
            strName: u.GetName(),
            strAvatarURL: u.GetAvatarURLFullSize(),
            nFollowers: u.GetNumFollowers(),
            strCreatorType: r ? void 0 : Te(t.type),
            strTagLine: n ? u.GetTagLine() : void 0,
            strMemberListURL: s
              ? o.COMMUNITY_BASE_URL +
                `gid/` +
                u.GetClanSteamID().ConvertTo64BitString() +
                `/members/`
              : void 0,
            followButton: a
              ? void 0
              : (0, J.jsx)(N, {
                  clanAccountID: t.clan_account_id,
                  creatorID: t,
                }),
            bSmallFormat: i,
            bMinimalDisplay: c,
            bCompact: l,
          }),
        })
      : null;
}
function De(t) {
  let { clanInfo: n, bAddLinkToMemberList: r } = t;
  if (
    (e(
      n && n.clanAccountID,
      `CuratorHoverContent expect clanInfo, not supplied`,
    ),
    !n)
  )
    return null;
  let i = {
    clan_account_id: n.clanAccountID,
    name: n.group_name,
    type: `developer`,
  };
  return (0, J.jsx)(`div`, {
    className: j,
    children: (0, J.jsx)(Ee, {
      creatorID: i,
      bSmallFormat: !0,
      bShowTagline: !0,
      bHideCreatorType: !0,
      bAddLinkToMemberList: r,
    }),
  });
}
var Oe = `_9LqpNw7qjdM-`,
  ke = `_93Z4fzffJcU-`,
  Ae = `dR6hKqARMhQ-`,
  je = `JRk3rj5vGwI-`,
  Me = `iGL3Ei3Dyak-`,
  Ne = `BFCBEAWk9Ws-`;
function Pe(e) {
  let {
      fnSetItemID: t,
      strLabel: n,
      itemType: r,
      fnFilterID: i,
      className: a,
      tooltip: s,
      autoFocus: c,
      bIncludeRetired: l,
      bShowDLCToggle: d,
      bOnlyDLC: p,
      bRunQueryOnLoad: m,
      rgParentAppIDs: g,
    } = e,
    [_, y] = q.useState(``),
    [b, x] = q.useState(!1),
    [S, C] = q.useState(!1),
    [w] = q.useState(new u()),
    [T, E] = q.useState([]),
    [D, O] = q.useState([]),
    [k, A] = q.useState([]),
    j = q.createRef(),
    M = q.createRef(),
    N = (0, q.useCallback)(
      async (e, t) => {
        C(!0);
        let n = { json: 1, term: e, bexcluderetired: !l },
          a = `${o.PARTNER_BASE_URL}appsearch/suggestapps`;
        switch (r) {
          case 1:
            a = `${o.PARTNER_BASE_URL}admin/store/suggestpackage`;
            break;
          case 2:
            a = `${o.PARTNER_BASE_URL}bundles/suggestbundle`;
            break;
          default:
            (p ? (n.includedlc = !0) : t === !1 && (n.includedlc = !1),
              g &&
                ((n.bfilterappids = !0),
                (n.rgParentAppIds = JSON.stringify(g))));
        }
        let s = await K.default.get(a, { params: n, withCredentials: !0 });
        (s?.status == 200 && s.data?.success == 1
          ? i
            ? (E(s.data.matches?.filter((e) => i(e.id)) || []),
              O(s.data.package_matches?.filter((e) => i(e.packageid)) || []),
              A(s.data.bundle_matches?.filter((e) => i(e.bundleid)) || []))
            : (E(s.data.matches || []),
              O(s.data.package_matches || []),
              A(s.data.bundle_matches || []))
          : (E([]), O([]), A([])),
          C(!1));
      },
      [i, r, l, p, g],
    ),
    P = (0, q.useCallback)(
      (e) => {
        (x(e), N(j.current?.value, e));
      },
      [N, j],
    ),
    F = (0, q.useCallback)(
      (e) => {
        let t = e?.target?.value?.toLocaleLowerCase() ?? ``;
        y(t);
        let n = M.current?.checked;
        w.Schedule(1e3, () => N(t, n));
      },
      [N, w, M],
    );
  q.useEffect(() => {
    m && N(_);
  }, []);
  let I;
  switch (r) {
    case 1:
      I = v(`#StoreAdmin_Search_Placeholder_package`);
      break;
    case 2:
      I = v(`#StoreAdmin_Search_Placeholder_bundle`);
      break;
    default:
      I = v(`#StoreAdmin_Search_Placeholder`);
  }
  let L = d && !p && r == 0;
  return (0, J.jsxs)(`div`, {
    className: a,
    children: [
      (0, J.jsxs)(`div`, {
        className: Ne,
        children: [
          (0, J.jsx)(f, {
            type: `text`,
            ref: j,
            className: void 0,
            label: n,
            tooltip: s,
            placeholder: I,
            onChange: F,
            value: _,
            bAlwaysShowClearAction: _.length > 0,
            focusOnMount: c,
          }),
          L &&
            (0, J.jsx)(h, {
              ref: M,
              checked: b,
              onChange: P,
              className: `XvBYAJ74wLA-`,
              label: v(`#StoreAdmin_Search_IncludeDLC`),
            }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: Oe,
        children: [
          S &&
            (0, J.jsx)(`div`, {
              className: `dtnEhnhLM-A-`,
              children: (0, J.jsx)(_e, { size: `small` }),
            }),
          T?.length > 0 &&
            T.map((e) =>
              (0, J.jsx)(
                Q,
                {
                  name: e.match,
                  id: e.id,
                  is_visible: !0,
                  type: 0,
                  fnSetItemID: () => {
                    (E([]), t(e.id, e.itemid));
                  },
                },
                e.id,
              ),
            ),
          D?.length > 0 &&
            D.map((e) =>
              (0, J.jsx)(
                Q,
                {
                  name: e.name,
                  id: e.packageid,
                  type: 1,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    (O([]), t(e.packageid));
                  },
                },
                e.packageid,
              ),
            ),
          k?.length > 0 &&
            k.map((e) =>
              (0, J.jsx)(
                Q,
                {
                  name: e.name,
                  id: e.bundleid,
                  type: 2,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    (A([]), t(e.bundleid));
                  },
                },
                e.bundleid,
              ),
            ),
        ],
      }),
    ],
  });
}
function Q(e) {
  let { name: t, id: n, type: r, is_visible: i, fnSetItemID: a } = e,
    [o] = ve(n, r, { include_assets: !0 }),
    s = `#DailyDeals_HeaderArtMissing`;
  switch (r) {
    case 1:
      s = `#DailyDeals_PackageHeaderArtMissing`;
      break;
    case 2:
      s = `#DailyDeals_BundleHeaderArtMissing`;
  }
  return (0, J.jsxs)(`div`, {
    className: ke,
    onClick: () => a(),
    children: [
      (0, J.jsx)(`div`, {
        className: c(je, `AvatarImageCtn`),
        children: (0, J.jsx)(`img`, {
          src: o?.GetAssets()?.GetHeaderURL(),
          className: Me,
          alt: v(s),
        }),
      }),
      (0, J.jsxs)(`div`, {
        className: Ae,
        children: [
          !i &&
            (0, J.jsxs)(`span`, {
              children: [v(`#Sale_FeaturingHidden`), ` `],
            }),
          t,
          r == 1 ? ` (${n})` : ``,
        ],
      }),
    ],
  });
}
function Fe(e, n) {
  let r = t(n);
  return e ? e[r] : ``;
}
function Ie(e, n, r) {
  let i = t(n);
  return e[i] != r && ((e[i] = r), !0);
}
function Le(e, n) {
  let r = t(n);
  return !!e?.[r];
}
function Re(e) {
  if (!e) return 0;
  let n = 0;
  for (let r = 0; r < 32; ++r) e[t(r)] && (n += 1);
  return n;
}
function ze(e) {
  let n = [];
  for (let r = 0; r < 32; ++r) {
    let i = t(r);
    e[i] && n.push([i, e[i]]);
  }
  return n;
}
var $ = `partnerevents/ajaxgetdraftandrecentsnippets`;
function Be(e, t) {
  return G({
    queryKey: [`eventdraftrecent`, e, t],
    queryFn: () => He(e, t),
    select: Ue,
    enabled: !!e,
  });
}
function Ve(e, t) {
  return ce(Be(e, t));
}
async function He(e, t) {
  let n = new URLSearchParams({ clan_accountid: `` + e });
  t && n.set(`rtime_oldest`, `` + t);
  let r = `${a.PARTNER_BASE_URL}${$}?${n}`,
    i = await fetch(r, { credentials: `include` });
  if (!i.ok) throw Error(`${$} answered HTTP ${i.status}`);
  let o = await i.json();
  if (o?.success != 1) throw Error(`${$} failed with result ${o?.success}`);
  return o.snippets ?? [];
}
function Ue(e) {
  return [...e].sort((e, t) =>
    e.hidden == t.hidden
      ? e.hidden && e.published != t.published
        ? e.published
          ? -1
          : 1
        : (t.rtime32_start_time ?? 0) - (e.rtime32_start_time ?? 0)
      : e.hidden
        ? -1
        : 1,
  );
}
function We(e, t) {
  let { data: n } = Ve(e, t);
  return n ?? null;
}
function Ge(e) {
  let { oEditableMessage: t } = e,
    [n] = z(() => [t.GetStoreItemKey()]);
  return !n || n.item_type != `app`
    ? (0, J.jsx)(`div`, {
        className: W,
        children: `Error: Major Update does not support anything but targeting app`,
      })
    : (0, J.jsx)(Ke, { oEditableMessage: t, idKey: n });
}
function Ke(e) {
  let { oEditableMessage: t, idKey: n } = e,
    [r, i] = z(() => [t.GetUpdateEventClanAccountID(), t.GetUpdateEventGID()]),
    { data: a } = C(w({ item_type: ue(n.item_type), id: n.id })),
    s = (0, q.useMemo)(() => fe.InitFromClanID(r, o.EUNIVERSE), [r]),
    c = a?.type == 12 ? void 0 : a?.related_items?.parent_appid;
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsx)(qe, {
        appid: c || n.id,
        selectedEventGID: i,
        fnSetUpdateEvent: t.SetUpdateEvent,
        label: v(`#EventDropDown_MM_FeaturedEvent`),
        tooltip: v(`#EventDropDown_MM_FeaturedEvent_ttip`),
        strUrlLearnMore: `https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates`,
      }),
      !!r &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(`a`, {
              href: `${o.COMMUNITY_BASE_URL}gid/${s.ConvertTo64BitString()}/partnerevents/edit/${i}`,
              target: `_blank`,
              children: `open event for edit`,
            }),
            `\xA0 \xA0`,
            (0, J.jsx)(b, {
              toolTipContent: `Once the event is published, go here to verify it is not awaiting moderation review. Games in the moderator review queue are not visible in the library`,
              children: (0, J.jsx)(`a`, {
                href: `${o.STORE_BASE_URL}events_admin/?selectedTags=vo_marketing_message&excludedTags=mod_reviewed&excludedTags=auto_migrated`,
                target: `_blank`,
                children: `open event moderation tool`,
              }),
            }),
            (0, J.jsx)(`br`, {}),
            (0, J.jsx)(`br`, {}),
          ],
        }),
    ],
  });
}
function qe(e) {
  let {
      appid: t,
      selectedEventGID: n,
      fnSetUpdateEvent: r,
      label: i,
      tooltip: a,
      strUrlLearnMore: s,
      bFilterOutDrafts: l,
    } = e,
    u = ge(),
    { clanInfo: d, bLoadingClanInfo: f } = ye(t),
    h = We(d?.clanAccountID, u - 2592e3),
    g = (0, q.useMemo)(() => (l ? h?.filter((e) => !e.hidden) : h), [h, l]),
    _ = (0, q.useMemo)(
      () =>
        g
          ? g.map((e) => {
              let t = e.hidden
                ? e.published
                  ? `#EventDropDown_HiddenPublish`
                  : `#EventDropDown_Hidden`
                : `#EventDropDown_Visible`;
              return {
                label: v(t, p(e.rtime32_start_time), e.event_name),
                data: e,
              };
            })
          : [],
      [g],
    ),
    b = g?.find((e) => e.gid === n);
  return !g && (f || d?.appid)
    ? (0, J.jsx)(V, {
        string: v(`#Loading`),
        size: `small`,
        position: `center`,
      })
    : !g || g.length == 0
      ? (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsxs)(S, {
              children: [i, ` `, (0, J.jsx)(x, { tooltip: a })],
            }),
            (0, J.jsx)(`div`, {
              className: c(W, `ErrorCtn`),
              children: y(
                `#EventDropDown_NoEventFound`,
                (0, J.jsx)(`a`, {
                  href: `${o.COMMUNITY_BASE_URL}ogg/${t}/partnerevents`,
                  target: `_blank`,
                }),
              ),
            }),
          ],
        })
      : (0, J.jsxs)(J.Fragment, {
          children: [
            !!s &&
              (0, J.jsx)(`a`, {
                href: s,
                target: `_blank`,
                style: { float: `right` },
                children: v(
                  `#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink`,
                ),
              }),
            (0, J.jsx)(m, {
              label: i,
              tooltip: a,
              selectedOption: b,
              onChange: (e) => r(d.clanAccountID, e.data.gid),
              rgOptions: _,
            }),
          ],
        });
}
export {
  Ce as _,
  Fe as a,
  ze as c,
  je as d,
  Ee as f,
  X as g,
  Se as h,
  Re as i,
  Pe as l,
  xe as m,
  qe as n,
  Le as o,
  De as p,
  Ve as r,
  Ie as s,
  Ge as t,
  Me as u,
  G as v,
};
