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
  Ea as p,
  Gt as m,
  Ha as h,
  Ln as g,
  Pt as _,
  da as v,
  hn as y,
  pn as b,
  tn as x,
  ua as S,
  zt as ee,
} from "./chunk~1fa4b8f2ff.js";
import { D as C, h as w } from "./chunk~0a99e05c44.js";
import {
  C as T,
  D as E,
  E as D,
  M as O,
  S as k,
  T as A,
  _ as j,
  b as M,
  c as N,
  d as P,
  f as F,
  g as te,
  h as ne,
  l as re,
  m as ie,
  o as ae,
  u as oe,
  v as se,
  x as ce,
  y as I,
} from "./chunk~6b8ddcaac8.js";
import { n as le, r as ue } from "./chunk~9a06851bec.js";
import { w as L } from "./chunk~44f252525d.js";
import { t as de } from "./chunk~ede3e357a2.js";
import { S as fe, _ as pe } from "./chunk~a825a84845.js";
import { n as me } from "./chunk~9d71b14b50.js";
import { t as he } from "./chunk~f4e4ed5c17.js";
import { t as R } from "./chunk~c55709d290.js";
import { t as z } from "./chunk~eefd71512b.js";
import { a as ge } from "./chunk~8ceeb46076.js";
import { r as _e } from "./chunk~0111fcd096.js";
import { h as B, m as V } from "./chunk~2f8c67b4de.js";
import "./chunk~a6b9ae1345.js";
import { i as H } from "./chunk~739842ca30.js";
import { s as ve } from "./chunk~7b4b9eb713.js";
import { t as ye } from "./chunk~ada233e34d.js";
import { t as be } from "./chunk~a7c5e71e12.js";
import { r as xe } from "./chunk~437071091c.js";
function U(e) {
  return e;
}
var W = s(he()),
  G = s(e()),
  K = c();
function Se(e) {
  let { children: t, ...n } = e,
    r = ue(),
    i = G.useMemo(
      () => ({ ...ge.GetDefaultParams(), ...r, ...n }),
      [r, n.domain, n.controller, n.method, n.submethod, n.feature, n.depth],
    );
  return (0, K.jsx)(le, { ...i, children: t });
}
var q = class e {
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
        s = await W.default.get(a, { params: i, withCredentials: !0 });
      if (s?.status == 200 && s.data?.success == 1)
        return e
          ? (this.m_mapAppIDToPaymentPartners.set(e, s.data.partnerinfo),
            this.m_mapAppIDToPaymentPartners.get(e))
          : t
            ? (this.m_mapPackageIDToPaymentPartners.set(t, s.data.partnerinfo),
              this.m_mapPackageIDToPaymentPartners.get(t))
            : (this.m_mapBundleIDToPaymentPartners.set(n, s.data.partnerinfo),
              this.m_mapBundleIDToPaymentPartners.get(n));
      r = R(s);
    } catch (e) {
      r = R(e);
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
function Ce(e) {
  return J(e, 0);
}
function we(e) {
  return J(e.id, fe(e));
}
function J(e, t) {
  let [n, r] = G.useState(() => q.Get().GetInfoForStoreItem(e, t));
  return (
    G.useEffect(() => {
      e
        ? !q.Get().BHasInfoForStoreItem(e, t) || n == null
          ? q.Get().LoadStoreItemPartnerInfo(e, t).then(r)
          : q.Get().BHasInfoForStoreItem(e, t) &&
            n != q.Get().GetInfoForStoreItem(e, t) &&
            r(q.Get().GetInfoForStoreItem(e, t))
        : r(null);
    }, [e, t, n]),
    n
  );
}
function Te(e) {
  let [t, n] = (0, G.useState)(null);
  return (
    (0, G.useEffect)(() => {
      if (e?.length > 0) {
        let t = e.map((e) => q.Get().LoadStoreItemPartnerInfo(e, 0));
        Promise.all(t).then(() => {
          let t = new Map();
          (e.forEach((e) => {
            q.Get().BHasInfoForApp(e) && t.set(e, q.Get().GetInfoForApp(e));
          }),
            n(t));
        });
      }
    }, [e]),
    t
  );
}
function Y(e) {
  let { href: r, children: i, bAllowFocuseableAnchor: a, ...o } = e;
  return t.EREALM === n.k_ESteamRealmChina
    ? (0, K.jsx)(`div`, { ...o, children: i })
    : a
      ? (0, K.jsx)(d, { href: r, ...o, children: i })
      : (0, K.jsx)(`a`, { href: r, ...o, children: i });
}
function Ee(e) {
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
  return (0, K.jsx)(Se, {
    feature: `salecreatorhome`,
    children: (0, K.jsxs)(h, {
      className: i(se, u ? D : T, d ? A : ``, f ? oe : ``),
      "flow-children": `row`,
      children: [
        !!o && (0, K.jsx)(`span`, { className: `SG9Xn5tF5a0-`, children: o }),
        (0, K.jsxs)(`div`, {
          className: I,
          children: [
            (0, K.jsx)(`div`, {
              className: te,
              style: { backgroundImage: `url(${r} )` },
            }),
            (0, K.jsxs)(`div`, {
              className: i(j),
              children: [
                (0, K.jsxs)(`div`, {
                  className: B,
                  children: [
                    (0, K.jsx)(Y, {
                      href: g(t),
                      className: re,
                      bAllowFocuseableAnchor: !0,
                      children: (0, K.jsx)(`img`, {
                        className: i(N, `Avatar_Trgt`),
                        src: r,
                        alt: ``,
                      }),
                    }),
                    (0, K.jsxs)(`div`, {
                      className: i(V, P),
                      children: [
                        (0, K.jsxs)(`div`, {
                          className: i(ie, V),
                          children: [
                            (0, K.jsx)(Y, {
                              href: g(t),
                              className: F,
                              children: n,
                            }),
                            !!s &&
                              (0, K.jsx)(`div`, {
                                className: i(`_0UzWiVhBe8U-`, `ct7kvDppls0-`),
                                children: s,
                              }),
                          ],
                        }),
                        (0, K.jsx)(`div`, {
                          className: i({ [V]: u, [B]: !u, [E]: !0 }),
                          children: (0, K.jsxs)(`div`, {
                            className: i(M),
                            children: [
                              l,
                              (0, K.jsxs)(`div`, {
                                className: i({ [k]: !0 }),
                                children: [
                                  (0, K.jsx)(`span`, {
                                    children: S(`#CreatorHome_JustFollowers`),
                                  }),
                                  (0, K.jsx)(`span`, {
                                    className: ce,
                                    children: me(a),
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
                  (0, K.jsx)(`a`, {
                    href: c,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `GEroszngeLM-`,
                    children: S(`#ClanMembershipList`),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function De(e) {
  switch (e) {
    case `publisher`:
      return S(`#CreatorHome_PublishedBy`);
    case `franchise`:
      return S(`#CreatorHome_InFranchise`);
  }
  return S(`#CreatorHome_DevelopedBy`);
}
function X(e) {
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
    { creatorHome: d, isFetching: f } = ve(t.clan_account_id),
    [p] = O();
  return p || (!d && f)
    ? (0, K.jsx)(`div`, {
        className: I,
        children: (0, K.jsx)(z, {
          string: S(`#Loading`),
          size: `medium`,
          position: `center`,
        }),
      })
    : d
      ? (0, K.jsx)(u, {
          children: (0, K.jsx)(Ee, {
            strURL: d.GetCreatorHomeURL(t.type),
            strName: d.GetName(),
            strAvatarURL: d.GetAvatarURLFullSize(),
            nFollowers: d.GetNumFollowers(),
            strCreatorType: r ? void 0 : De(t.type),
            strTagLine: n ? d.GetTagLine() : void 0,
            strMemberListURL: s
              ? o.COMMUNITY_BASE_URL +
                `gid/` +
                d.GetClanSteamID().ConvertTo64BitString() +
                `/members/`
              : void 0,
            followButton: a
              ? void 0
              : (0, K.jsx)(ae, {
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
  return (0, K.jsx)(`div`, {
    className: ne,
    children: (0, K.jsx)(X, {
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
      bRunQueryOnLoad: p,
      rgParentAppIDs: h,
    } = e,
    [g, _] = G.useState(``),
    [v, y] = G.useState(!1),
    [b, x] = G.useState(!1),
    [C] = G.useState(new l()),
    [w, T] = G.useState([]),
    [E, D] = G.useState([]),
    [O, k] = G.useState([]),
    A = G.createRef(),
    j = G.createRef(),
    M = (0, G.useCallback)(
      async (e, t) => {
        x(!0);
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
        let s = await W.default.get(a, { params: n, withCredentials: !0 });
        (s?.status == 200 && s.data?.success == 1
          ? i
            ? (T(s.data.matches?.filter((e) => i(e.id)) || []),
              D(s.data.package_matches?.filter((e) => i(e.packageid)) || []),
              k(s.data.bundle_matches?.filter((e) => i(e.bundleid)) || []))
            : (T(s.data.matches || []),
              D(s.data.package_matches || []),
              k(s.data.bundle_matches || []))
          : (T([]), D([]), k([])),
          x(!1));
      },
      [i, r, u, f, h],
    ),
    N = (0, G.useCallback)(
      (e) => {
        (y(e), M(A.current?.value, e));
      },
      [M, A],
    ),
    P = (0, G.useCallback)(
      (e) => {
        let t = e?.target?.value?.toLocaleLowerCase() ?? ``;
        _(t);
        let n = j.current?.checked;
        C.Schedule(1e3, () => M(t, n));
      },
      [M, C, j],
    );
  G.useEffect(() => {
    p && M(g);
  }, []);
  let F;
  switch (r) {
    case 1:
      F = S(`#StoreAdmin_Search_Placeholder_package`);
      break;
    case 2:
      F = S(`#StoreAdmin_Search_Placeholder_bundle`);
      break;
    default:
      F = S(`#StoreAdmin_Search_Placeholder`);
  }
  let te = d && !f && r == 0;
  return (0, K.jsxs)(`div`, {
    className: a,
    children: [
      (0, K.jsxs)(`div`, {
        className: Pe,
        children: [
          (0, K.jsx)(ee, {
            type: `text`,
            ref: A,
            className: void 0,
            label: n,
            tooltip: s,
            placeholder: F,
            onChange: P,
            value: g,
            bAlwaysShowClearAction: g.length > 0,
            focusOnMount: c,
          }),
          te &&
            (0, K.jsx)(m, {
              ref: j,
              checked: v,
              onChange: N,
              className: `XvBYAJ74wLA-`,
              label: S(`#StoreAdmin_Search_IncludeDLC`),
            }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: ke,
        children: [
          b &&
            (0, K.jsx)(`div`, {
              className: `dtnEhnhLM-A-`,
              children: (0, K.jsx)(ye, { size: `small` }),
            }),
          w?.length > 0 &&
            w.map((e) =>
              (0, K.jsx)(
                Z,
                {
                  name: e.match,
                  id: e.id,
                  is_visible: !0,
                  type: 0,
                  fnSetItemID: () => {
                    (T([]), t(e.id, e.itemid));
                  },
                },
                e.id,
              ),
            ),
          E?.length > 0 &&
            E.map((e) =>
              (0, K.jsx)(
                Z,
                {
                  name: e.name,
                  id: e.packageid,
                  type: 1,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    (D([]), t(e.packageid));
                  },
                },
                e.packageid,
              ),
            ),
          O?.length > 0 &&
            O.map((e) =>
              (0, K.jsx)(
                Z,
                {
                  name: e.name,
                  id: e.bundleid,
                  type: 2,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    (k([]), t(e.bundleid));
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
    [s] = be(n, r, { include_assets: !0 }),
    c = `#DailyDeals_HeaderArtMissing`;
  switch (r) {
    case 1:
      c = `#DailyDeals_PackageHeaderArtMissing`;
      break;
    case 2:
      c = `#DailyDeals_BundleHeaderArtMissing`;
  }
  return (0, K.jsxs)(`div`, {
    className: Ae,
    onClick: () => o(),
    children: [
      (0, K.jsx)(`div`, {
        className: i(Me, `AvatarImageCtn`),
        children: (0, K.jsx)(`img`, {
          src: s?.GetAssets()?.GetHeaderURL(),
          className: Ne,
          alt: S(c),
        }),
      }),
      (0, K.jsxs)(`div`, {
        className: je,
        children: [
          !a &&
            (0, K.jsxs)(`span`, {
              children: [S(`#Sale_FeaturingHidden`), ` `],
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
  return U({
    queryKey: [`eventdraftrecent`, e, t],
    queryFn: () => Ue(e, t),
    select: We,
    enabled: !!e,
  });
}
function He(e, t) {
  return de(Ve(e, t));
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
    [n] = L(() => [t.GetStoreItemKey()]);
  return !n || n.item_type != `app`
    ? (0, K.jsx)(`div`, {
        className: H,
        children: `Error: Major Update does not support anything but targeting app`,
      })
    : (0, K.jsx)(qe, { oEditableMessage: t, idKey: n });
}
function qe(e) {
  let { oEditableMessage: t, idKey: n } = e,
    [r, i] = L(() => [t.GetUpdateEventClanAccountID(), t.GetUpdateEventGID()]),
    { data: a } = w(C({ item_type: pe(n.item_type), id: n.id })),
    s = (0, G.useMemo)(() => f.InitFromClanID(r, o.EUNIVERSE), [r]),
    c = a?.type == 12 ? void 0 : a?.related_items?.parent_appid;
  return (0, K.jsxs)(`div`, {
    children: [
      (0, K.jsx)($, {
        appid: c || n.id,
        selectedEventGID: i,
        fnSetUpdateEvent: t.SetUpdateEvent,
        label: S(`#EventDropDown_MM_FeaturedEvent`),
        tooltip: S(`#EventDropDown_MM_FeaturedEvent_ttip`),
        strUrlLearnMore: `https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates`,
      }),
      !!r &&
        (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(`a`, {
              href: `${o.COMMUNITY_BASE_URL}gid/${s.ConvertTo64BitString()}/partnerevents/edit/${i}`,
              target: `_blank`,
              children: `open event for edit`,
            }),
            `\xA0 \xA0`,
            (0, K.jsx)(y, {
              toolTipContent: `Once the event is published, go here to verify it is not awaiting moderation review. Games in the moderator review queue are not visible in the library`,
              children: (0, K.jsx)(`a`, {
                href: `${o.STORE_BASE_URL}events_admin/?selectedTags=vo_marketing_message&excludedTags=mod_reviewed&excludedTags=auto_migrated`,
                target: `_blank`,
                children: `open event moderation tool`,
              }),
            }),
            (0, K.jsx)(`br`, {}),
            (0, K.jsx)(`br`, {}),
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
    u = _e(),
    { clanInfo: d, bLoadingClanInfo: f } = xe(t),
    m = Ge(d?.clanAccountID, u - 2592e3),
    h = (0, G.useMemo)(() => (l ? m?.filter((e) => !e.hidden) : m), [m, l]),
    g = (0, G.useMemo)(
      () =>
        h
          ? h.map((e) => {
              let t = e.hidden
                ? e.published
                  ? `#EventDropDown_HiddenPublish`
                  : `#EventDropDown_Hidden`
                : `#EventDropDown_Visible`;
              return {
                label: S(t, p(e.rtime32_start_time), e.event_name),
                data: e,
              };
            })
          : [],
      [h],
    ),
    y = h?.find((e) => e.gid === n);
  return !h && (f || d?.appid)
    ? (0, K.jsx)(z, {
        string: S(`#Loading`),
        size: `small`,
        position: `center`,
      })
    : !h || h.length == 0
      ? (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsxs)(x, {
              children: [a, ` `, (0, K.jsx)(b, { tooltip: s })],
            }),
            (0, K.jsx)(`div`, {
              className: i(H, `ErrorCtn`),
              children: v(
                `#EventDropDown_NoEventFound`,
                (0, K.jsx)(`a`, {
                  href: `${o.COMMUNITY_BASE_URL}ogg/${t}/partnerevents`,
                  target: `_blank`,
                }),
              ),
            }),
          ],
        })
      : (0, K.jsxs)(K.Fragment, {
          children: [
            !!c &&
              (0, K.jsx)(`a`, {
                href: c,
                target: `_blank`,
                style: { float: `right` },
                children: S(
                  `#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink`,
                ),
              }),
            (0, K.jsx)(_, {
              label: a,
              tooltip: s,
              selectedOption: y,
              onChange: (e) => r(d.clanAccountID, e.data.gid),
              rgOptions: g,
            }),
          ],
        });
}
export {
  Te as _,
  Ie as a,
  Be as c,
  Me as d,
  X as f,
  J as g,
  we as h,
  ze as i,
  Fe as l,
  Ce as m,
  $ as n,
  Re as o,
  Oe as p,
  He as r,
  Le as s,
  Ke as t,
  Ne as u,
  U as v,
};
