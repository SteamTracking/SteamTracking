/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  At as e,
  W as t,
  _t as n,
  en as r,
  j as i,
  lt as a,
  rt as o,
  sn as s,
  vt as c,
} from "./chunk~de7f2df91c.js";
import { ht as l, r as u, s as d, t as f } from "./chunk~25a6634263.js";
import {
  Bt as p,
  Da as m,
  Ft as h,
  Kt as g,
  Rn as _,
  Ua as v,
  da as y,
  fa as b,
  gn as x,
  mn as S,
  nn as C,
} from "./chunk~1fa4b8f2ff.js";
import { _ as w, k as T } from "./chunk~0a99e05c44.js";
import {
  C as E,
  D,
  E as O,
  M as k,
  S as A,
  T as j,
  _ as M,
  b as N,
  c as P,
  d as F,
  f as I,
  g as ee,
  h as te,
  l as ne,
  m as re,
  o as ie,
  u as ae,
  v as oe,
  x as se,
  y as L,
} from "./chunk~6b8ddcaac8.js";
import { n as ce, r as le } from "./chunk~9a06851bec.js";
import { w as R } from "./chunk~44f252525d.js";
import { t as ue } from "./chunk~ede3e357a2.js";
import { S as de, _ as fe } from "./chunk~a825a84845.js";
import { n as pe } from "./chunk~9d71b14b50.js";
import { t as me } from "./chunk~f4e4ed5c17.js";
import { t as z } from "./chunk~c55709d290.js";
import { t as B } from "./chunk~eefd71512b.js";
import { a as he } from "./chunk~8ceeb46076.js";
import { r as ge } from "./chunk~0111fcd096.js";
import { h as V, m as H } from "./chunk~2f8c67b4de.js";
import "./chunk~a6b9ae1345.js";
import { i as U } from "./chunk~739842ca30.js";
import { s as _e } from "./chunk~7b4b9eb713.js";
import { t as ve } from "./chunk~ada233e34d.js";
import { t as ye } from "./chunk~a7c5e71e12.js";
import { r as be } from "./chunk~437071091c.js";
function W(e) {
  return e;
}
var G = s(me()),
  K = s(e()),
  q = c();
function xe(e) {
  let { children: t, ...n } = e,
    r = le(),
    i = K.useMemo(
      () => ({ ...he.GetDefaultParams(), ...r, ...n }),
      [r, n.domain, n.controller, n.method, n.submethod, n.feature, n.depth],
    );
  return (0, q.jsx)(ce, { ...i, children: t });
}
var J = class e {
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
        s = await G.default.get(a, { params: i, withCredentials: !0 });
      if (s?.status == 200 && s.data?.success == 1)
        return e
          ? (this.m_mapAppIDToPaymentPartners.set(e, s.data.partnerinfo),
            this.m_mapAppIDToPaymentPartners.get(e))
          : t
            ? (this.m_mapPackageIDToPaymentPartners.set(t, s.data.partnerinfo),
              this.m_mapPackageIDToPaymentPartners.get(t))
            : (this.m_mapBundleIDToPaymentPartners.set(n, s.data.partnerinfo),
              this.m_mapBundleIDToPaymentPartners.get(n));
      r = z(s);
    } catch (e) {
      r = z(e);
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
function Se(e) {
  return Y(e, 0);
}
function Ce(e) {
  return Y(e.id, de(e));
}
function Y(e, t) {
  let [n, r] = K.useState(() => J.Get().GetInfoForStoreItem(e, t));
  return (
    K.useEffect(() => {
      e
        ? !J.Get().BHasInfoForStoreItem(e, t) || n == null
          ? J.Get().LoadStoreItemPartnerInfo(e, t).then(r)
          : J.Get().BHasInfoForStoreItem(e, t) &&
            n != J.Get().GetInfoForStoreItem(e, t) &&
            r(J.Get().GetInfoForStoreItem(e, t))
        : r(null);
    }, [e, t, n]),
    n
  );
}
function we(e) {
  let [t, n] = (0, K.useState)(null);
  return (
    (0, K.useEffect)(() => {
      if (e?.length > 0) {
        let t = e.map((e) => J.Get().LoadStoreItemPartnerInfo(e, 0));
        Promise.all(t).then(() => {
          let t = new Map();
          (e.forEach((e) => {
            J.Get().BHasInfoForApp(e) && t.set(e, J.Get().GetInfoForApp(e));
          }),
            n(t));
        });
      }
    }, [e]),
    t
  );
}
function X(e) {
  let { href: r, children: i, bAllowFocuseableAnchor: a, ...o } = e;
  return t.EREALM === n.k_ESteamRealmChina
    ? (0, q.jsx)(`div`, { ...o, children: i })
    : a
      ? (0, q.jsx)(d, { href: r, ...o, children: i })
      : (0, q.jsx)(`a`, { href: r, ...o, children: i });
}
function Te(e) {
  let {
    strURL: t,
    strName: n,
    strAvatarURL: r,
    nFollowers: a,
    strCreatorType: o,
    strTagLine: s,
    strMemberListURL: c,
    followButton: l,
    bSmallFormat: u,
    bMinimalDisplay: d,
    bCompact: f,
  } = e;
  return (0, q.jsx)(xe, {
    feature: `salecreatorhome`,
    children: (0, q.jsxs)(v, {
      className: i(oe, u ? O : E, d ? j : ``, f ? ae : ``),
      "flow-children": `row`,
      children: [
        !!o && (0, q.jsx)(`span`, { className: `SG9Xn5tF5a0-`, children: o }),
        (0, q.jsxs)(`div`, {
          className: L,
          children: [
            (0, q.jsx)(`div`, {
              className: ee,
              style: { backgroundImage: `url(${r} )` },
            }),
            (0, q.jsxs)(`div`, {
              className: i(M),
              children: [
                (0, q.jsxs)(`div`, {
                  className: V,
                  children: [
                    (0, q.jsx)(X, {
                      href: _(t),
                      className: ne,
                      bAllowFocuseableAnchor: !0,
                      children: (0, q.jsx)(`img`, {
                        className: i(P, `Avatar_Trgt`),
                        src: r,
                        alt: ``,
                      }),
                    }),
                    (0, q.jsxs)(`div`, {
                      className: i(H, F),
                      children: [
                        (0, q.jsxs)(`div`, {
                          className: i(re, H),
                          children: [
                            (0, q.jsx)(X, {
                              href: _(t),
                              className: I,
                              children: n,
                            }),
                            !!s &&
                              (0, q.jsx)(`div`, {
                                className: i(`_0UzWiVhBe8U-`, `ct7kvDppls0-`),
                                children: s,
                              }),
                          ],
                        }),
                        (0, q.jsx)(`div`, {
                          className: i({ [H]: u, [V]: !u, [D]: !0 }),
                          children: (0, q.jsxs)(`div`, {
                            className: i(N),
                            children: [
                              l,
                              (0, q.jsxs)(`div`, {
                                className: i({ [A]: !0 }),
                                children: [
                                  (0, q.jsx)(`span`, {
                                    children: y(`#CreatorHome_JustFollowers`),
                                  }),
                                  (0, q.jsx)(`span`, {
                                    className: se,
                                    children: pe(a),
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
                !!c &&
                  (0, q.jsx)(`a`, {
                    href: c,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `GEroszngeLM-`,
                    children: y(`#ClanMembershipList`),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Ee(e) {
  switch (e) {
    case `publisher`:
      return y(`#CreatorHome_PublishedBy`);
    case `franchise`:
      return y(`#CreatorHome_InFranchise`);
  }
  return y(`#CreatorHome_DevelopedBy`);
}
function De(e) {
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
    { creatorHome: d, isFetching: f } = _e(t.clan_account_id),
    [p] = k();
  return p || (!d && f)
    ? (0, q.jsx)(`div`, {
        className: L,
        children: (0, q.jsx)(B, {
          string: y(`#Loading`),
          size: `medium`,
          position: `center`,
        }),
      })
    : d
      ? (0, q.jsx)(u, {
          children: (0, q.jsx)(Te, {
            strURL: d.GetCreatorHomeURL(t.type),
            strName: d.GetName(),
            strAvatarURL: d.GetAvatarURLFullSize(),
            nFollowers: d.GetNumFollowers(),
            strCreatorType: r ? void 0 : Ee(t.type),
            strTagLine: n ? d.GetTagLine() : void 0,
            strMemberListURL: s
              ? o.COMMUNITY_BASE_URL +
                `gid/` +
                d.GetClanSteamID().ConvertTo64BitString() +
                `/members/`
              : void 0,
            followButton: a
              ? void 0
              : (0, q.jsx)(ie, {
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
function Oe(e) {
  let { clanInfo: t, bAddLinkToMemberList: n } = e;
  if (
    (r(
      t && t.clanAccountID,
      `CuratorHoverContent expect clanInfo, not supplied`,
    ),
    !t)
  )
    return null;
  let i = {
    clan_account_id: t.clanAccountID,
    name: t.group_name,
    type: `developer`,
  };
  return (0, q.jsx)(`div`, {
    className: te,
    children: (0, q.jsx)(De, {
      creatorID: i,
      bSmallFormat: !0,
      bShowTagline: !0,
      bHideCreatorType: !0,
      bAddLinkToMemberList: n,
    }),
  });
}
var ke = `_9LqpNw7qjdM-`,
  Ae = `_93Z4fzffJcU-`,
  je = `dR6hKqARMhQ-`,
  Me = `JRk3rj5vGwI-`,
  Ne = `iGL3Ei3Dyak-`,
  Pe = `BFCBEAWk9Ws-`;
function Fe(e) {
  let {
      fnSetItemID: t,
      strLabel: n,
      itemType: r,
      fnFilterID: i,
      className: a,
      tooltip: s,
      autoFocus: c,
      bIncludeRetired: u,
      bShowDLCToggle: d,
      bOnlyDLC: f,
      bRunQueryOnLoad: m,
      rgParentAppIDs: h,
    } = e,
    [_, v] = K.useState(``),
    [b, x] = K.useState(!1),
    [S, C] = K.useState(!1),
    [w] = K.useState(new l()),
    [T, E] = K.useState([]),
    [D, O] = K.useState([]),
    [k, A] = K.useState([]),
    j = K.createRef(),
    M = K.createRef(),
    N = (0, K.useCallback)(
      async (e, t) => {
        C(!0);
        let n = { json: 1, term: e, bexcluderetired: !u },
          a = `${o.PARTNER_BASE_URL}appsearch/suggestapps`;
        switch (r) {
          case 1:
            a = `${o.PARTNER_BASE_URL}admin/store/suggestpackage`;
            break;
          case 2:
            a = `${o.PARTNER_BASE_URL}bundles/suggestbundle`;
            break;
          default:
            (f ? (n.includedlc = !0) : t === !1 && (n.includedlc = !1),
              h &&
                ((n.bfilterappids = !0),
                (n.rgParentAppIds = JSON.stringify(h))));
        }
        let s = await G.default.get(a, { params: n, withCredentials: !0 });
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
      [i, r, u, f, h],
    ),
    P = (0, K.useCallback)(
      (e) => {
        (x(e), N(j.current?.value, e));
      },
      [N, j],
    ),
    F = (0, K.useCallback)(
      (e) => {
        let t = e?.target?.value?.toLocaleLowerCase() ?? ``;
        v(t);
        let n = M.current?.checked;
        w.Schedule(1e3, () => N(t, n));
      },
      [N, w, M],
    );
  K.useEffect(() => {
    m && N(_);
  }, []);
  let I;
  switch (r) {
    case 1:
      I = y(`#StoreAdmin_Search_Placeholder_package`);
      break;
    case 2:
      I = y(`#StoreAdmin_Search_Placeholder_bundle`);
      break;
    default:
      I = y(`#StoreAdmin_Search_Placeholder`);
  }
  let ee = d && !f && r == 0;
  return (0, q.jsxs)(`div`, {
    className: a,
    children: [
      (0, q.jsxs)(`div`, {
        className: Pe,
        children: [
          (0, q.jsx)(p, {
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
          ee &&
            (0, q.jsx)(g, {
              ref: M,
              checked: b,
              onChange: P,
              className: `XvBYAJ74wLA-`,
              label: y(`#StoreAdmin_Search_IncludeDLC`),
            }),
        ],
      }),
      (0, q.jsxs)(`div`, {
        className: ke,
        children: [
          S &&
            (0, q.jsx)(`div`, {
              className: `dtnEhnhLM-A-`,
              children: (0, q.jsx)(ve, { size: `small` }),
            }),
          T?.length > 0 &&
            T.map((e) =>
              (0, q.jsx)(
                Z,
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
              (0, q.jsx)(
                Z,
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
              (0, q.jsx)(
                Z,
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
function Z(e) {
  let { name: t, id: n, type: r, is_visible: a, fnSetItemID: o } = e,
    [s] = ye(n, r, { include_assets: !0 }),
    c = `#DailyDeals_HeaderArtMissing`;
  switch (r) {
    case 1:
      c = `#DailyDeals_PackageHeaderArtMissing`;
      break;
    case 2:
      c = `#DailyDeals_BundleHeaderArtMissing`;
  }
  return (0, q.jsxs)(`div`, {
    className: Ae,
    onClick: () => o(),
    children: [
      (0, q.jsx)(`div`, {
        className: i(Me, `AvatarImageCtn`),
        children: (0, q.jsx)(`img`, {
          src: s?.GetAssets()?.GetHeaderURL(),
          className: Ne,
          alt: y(c),
        }),
      }),
      (0, q.jsxs)(`div`, {
        className: je,
        children: [
          !a &&
            (0, q.jsxs)(`span`, {
              children: [y(`#Sale_FeaturingHidden`), ` `],
            }),
          t,
          r == 1 ? ` (${n})` : ``,
        ],
      }),
    ],
  });
}
function Ie(e, t) {
  let n = a(t);
  return e ? e[n] : ``;
}
function Le(e, t, n) {
  let r = a(t);
  return e[r] != n && ((e[r] = n), !0);
}
function Re(e, t) {
  let n = a(t);
  return !!e?.[n];
}
function ze(e) {
  if (!e) return 0;
  let t = 0;
  for (let n = 0; n < 32; ++n) e[a(n)] && (t += 1);
  return t;
}
function Be(e) {
  let t = [];
  for (let n = 0; n < 32; ++n) {
    let r = a(n);
    e[r] && t.push([r, e[r]]);
  }
  return t;
}
var Q = `partnerevents/ajaxgetdraftandrecentsnippets`;
function Ve(e, t) {
  return W({
    queryKey: [`eventdraftrecent`, e, t],
    queryFn: () => Ue(e, t),
    select: We,
    enabled: !!e,
  });
}
function He(e, t) {
  return ue(Ve(e, t));
}
async function Ue(e, n) {
  let r = new URLSearchParams({ clan_accountid: `` + e });
  n && r.set(`rtime_oldest`, `` + n);
  let i = `${t.PARTNER_BASE_URL}${Q}?${r}`,
    a = await fetch(i, { credentials: `include` });
  if (!a.ok) throw Error(`${Q} answered HTTP ${a.status}`);
  let o = await a.json();
  if (o?.success != 1) throw Error(`${Q} failed with result ${o?.success}`);
  return o.snippets ?? [];
}
function We(e) {
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
function Ge(e, t) {
  let { data: n } = He(e, t);
  return n ?? null;
}
function Ke(e) {
  let { oEditableMessage: t } = e,
    [n] = R(() => [t.GetStoreItemKey()]);
  return !n || n.item_type != `app`
    ? (0, q.jsx)(`div`, {
        className: U,
        children: `Error: Major Update does not support anything but targeting app`,
      })
    : (0, q.jsx)(qe, { oEditableMessage: t, idKey: n });
}
function qe(e) {
  let { oEditableMessage: t, idKey: n } = e,
    [r, i] = R(() => [t.GetUpdateEventClanAccountID(), t.GetUpdateEventGID()]),
    { data: a } = w(T({ item_type: fe(n.item_type), id: n.id })),
    s = (0, K.useMemo)(() => f.InitFromClanID(r, o.EUNIVERSE), [r]),
    c = a?.type == 12 ? void 0 : a?.related_items?.parent_appid;
  return (0, q.jsxs)(`div`, {
    children: [
      (0, q.jsx)($, {
        appid: c || n.id,
        selectedEventGID: i,
        fnSetUpdateEvent: t.SetUpdateEvent,
        label: y(`#EventDropDown_MM_FeaturedEvent`),
        tooltip: y(`#EventDropDown_MM_FeaturedEvent_ttip`),
        strUrlLearnMore: `https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates`,
      }),
      !!r &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(`a`, {
              href: `${o.COMMUNITY_BASE_URL}gid/${s.ConvertTo64BitString()}/partnerevents/edit/${i}`,
              target: `_blank`,
              children: `open event for edit`,
            }),
            `\xA0 \xA0`,
            (0, q.jsx)(x, {
              toolTipContent: `Once the event is published, go here to verify it is not awaiting moderation review. Games in the moderator review queue are not visible in the library`,
              children: (0, q.jsx)(`a`, {
                href: `${o.STORE_BASE_URL}events_admin/?selectedTags=vo_marketing_message&excludedTags=mod_reviewed&excludedTags=auto_migrated`,
                target: `_blank`,
                children: `open event moderation tool`,
              }),
            }),
            (0, q.jsx)(`br`, {}),
            (0, q.jsx)(`br`, {}),
          ],
        }),
    ],
  });
}
function $(e) {
  let {
      appid: t,
      selectedEventGID: n,
      fnSetUpdateEvent: r,
      label: a,
      tooltip: s,
      strUrlLearnMore: c,
      bFilterOutDrafts: l,
    } = e,
    u = ge(),
    { clanInfo: d, bLoadingClanInfo: f } = be(t),
    p = Ge(d?.clanAccountID, u - 2592e3),
    g = (0, K.useMemo)(() => (l ? p?.filter((e) => !e.hidden) : p), [p, l]),
    _ = (0, K.useMemo)(
      () =>
        g
          ? g.map((e) => {
              let t = e.hidden
                ? e.published
                  ? `#EventDropDown_HiddenPublish`
                  : `#EventDropDown_Hidden`
                : `#EventDropDown_Visible`;
              return {
                label: y(t, m(e.rtime32_start_time), e.event_name),
                data: e,
              };
            })
          : [],
      [g],
    ),
    v = g?.find((e) => e.gid === n);
  return !g && (f || d?.appid)
    ? (0, q.jsx)(B, {
        string: y(`#Loading`),
        size: `small`,
        position: `center`,
      })
    : !g || g.length == 0
      ? (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsxs)(C, {
              children: [a, ` `, (0, q.jsx)(S, { tooltip: s })],
            }),
            (0, q.jsx)(`div`, {
              className: i(U, `ErrorCtn`),
              children: b(
                `#EventDropDown_NoEventFound`,
                (0, q.jsx)(`a`, {
                  href: `${o.COMMUNITY_BASE_URL}ogg/${t}/partnerevents`,
                  target: `_blank`,
                }),
              ),
            }),
          ],
        })
      : (0, q.jsxs)(q.Fragment, {
          children: [
            !!c &&
              (0, q.jsx)(`a`, {
                href: c,
                target: `_blank`,
                style: { float: `right` },
                children: y(
                  `#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink`,
                ),
              }),
            (0, q.jsx)(h, {
              label: a,
              tooltip: s,
              selectedOption: v,
              onChange: (e) => r(d.clanAccountID, e.data.gid),
              rgOptions: _,
            }),
          ],
        });
}
export {
  we as _,
  Ie as a,
  Be as c,
  Me as d,
  De as f,
  Y as g,
  Ce as h,
  ze as i,
  Fe as l,
  Se as m,
  $ as n,
  Re as o,
  Oe as p,
  He as r,
  Le as s,
  Ke as t,
  Ne as u,
  W as v,
};
