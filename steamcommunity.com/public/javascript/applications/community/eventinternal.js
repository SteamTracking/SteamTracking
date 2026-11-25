/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  I as t,
  L as n,
  Pt as r,
  S as i,
  at as a,
  bt as o,
  k as s,
  xt as c,
  z as l,
} from "./chunk~01cfc309bf.js";
import { X as u, c as d, dt as f, st as p } from "./chunk~35b0bf48ef.js";
import { t as m } from "./chunk~b986e50637.js";
import { l as h } from "./chunk~3f4314f3b4.js";
import { g, i as _ } from "./chunk~437071091c.js";
import { t as v } from "./chunk~eefd71512b.js";
import { o as y } from "./chunk~af36c62e9f.js";
import { l as b } from "./chunk~0111fcd096.js";
import {
  Cu as x,
  Df as S,
  Gs as C,
  Hs as w,
  Ji as T,
  Jo as E,
  Lf as D,
  Qd as O,
  Tm as k,
  Uo as A,
  Vi as j,
  Ws as ee,
  cm as M,
  mm as N,
  nd as P,
  qc as te,
  r as ne,
  t as re,
  tl as ie,
  zr as ae,
} from "./main.js";
import "./chunk~bf4b546728.js";
var F = e(r()),
  I = e(s()),
  L = `_2QW4jBjN1Zk-`,
  R = `wBp0X6XIyYg-`,
  z = `JGRxCB9gdso-`,
  B = `oLJu698DJfs-`,
  V = `KoQBt-5Be2g-`,
  H = a(),
  U = (e) => {
    let {
        strLabel: t,
        strToolTip: n,
        fnSetCurator: r,
        bLimitToCreatorHome: i = !1,
      } = e,
      a = (0, F.useRef)(null),
      o = (0, F.useRef)(null),
      s = (0, F.useRef)(0),
      c = (0, F.useRef)(null);
    (0, F.useEffect)(
      () => () => {
        (window.clearTimeout(s.current),
          a.current && a.current(`SearchForCurator: unmounting`),
          o.current && o.current.Hide());
      },
      [],
    );
    let l = (0, F.useCallback)(
      async (e) => {
        let t = e.target.value;
        t &&
          t.trim().length != 0 &&
          (window.clearTimeout(s.current),
          a.current && a.current(`SearchForCurator: new request`),
          (s.current = window.setTimeout(async () => {
            let e = I.default.CancelToken.source();
            a.current = e.cancel;
            try {
              let n = await g.SearchCreatorHomeStore(t, i, e);
              if (e.token.reason || !c.current) return;
              o.current = w(
                (0, H.jsx)(W, { list: n, fnSetCurator: r }),
                c.current.element,
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  bDisablePopTop: !0,
                  bNoFocusWhenShown: !0,
                  bSkipFocusWhenReady: !0,
                },
              );
            } catch (t) {
              if (e.token.reason) return;
              let n = D(t);
              console.log(
                `SearchForCurator.SearchCreatorHomeStore error ` +
                  n.strErrorMsg,
                n,
              );
            }
          }, 300)));
      },
      [r, i],
    );
    return (0, H.jsx)(x, {
      children: (0, H.jsx)(A, {
        type: `text`,
        label: t,
        onChange: l,
        onBlur: (e) => setTimeout(() => o.current && o.current.Hide(), 200),
        ref: c,
        tooltip: n,
      }),
    });
  },
  W = (e) => {
    let { list: t, fnSetCurator: n } = e;
    return (0, H.jsx)(ee, {
      className: V,
      children: t.map((e) =>
        (0, H.jsx)(
          C,
          {
            onSelected: () => n(e),
            children: (0, H.jsxs)(`div`, {
              style: { display: `flex`, alignItems: `center` },
              children: [
                (0, H.jsx)(`div`, {
                  className: ne,
                  children: (0, H.jsx)(`img`, {
                    src: e.GetAvatarURLFullSize(),
                    className: re,
                  }),
                }),
                b(e.GetName()),
              ],
            }),
          },
          `curatorresult` + e.GetClanAccountID(),
        ),
      ),
    });
  },
  G = i((e) => {
    let t = se();
    if (!t)
      return (0, H.jsx)(v, {
        string: O(`#Loading`),
        position: `center`,
        size: `medium`,
      });
    let n = t.filter((e) => !e.gid_clan_event),
      r = n.filter(
        (e) => e.display_name.toLocaleLowerCase().indexOf(`franchise`) >= 0,
      ),
      i = n.filter(
        (e) => e.display_name.toLocaleLowerCase().indexOf(`franchise`) < 0,
      ),
      a = t.filter((e) => !!(e.gid_clan_event && e.hidden)),
      o = t.filter((e) => !(!e.gid_clan_event || e.hidden));
    return (0, H.jsxs)(`div`, {
      children: [
        (0, H.jsx)(`h1`, { children: `Migration Sale Tool:` }),
        (0, H.jsx)(`p`, {
          children: `For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.`,
        }),
        (0, H.jsx)(K, { strName: `Unmigrated Franchises`, records: r }),
        (0, H.jsx)(K, {
          strName: `Unmigrated Generic Sale PAges`,
          records: i,
          bHideByDefault: !0,
        }),
        (0, H.jsx)(K, { strName: `Migrated but Hidden`, records: a }),
        (0, H.jsx)(K, {
          strName: `Migrated and Visible`,
          records: o,
          bHideByDefault: !0,
        }),
      ],
    });
  }),
  K = (e) => {
    let { strName: t, records: n, bHideByDefault: r } = e,
      [i, a] = (0, F.useState)(r);
    return (0, H.jsxs)(`div`, {
      className: L,
      children: [
        (0, H.jsxs)(`h2`, {
          className: R,
          onDoubleClick: () => a(!i),
          children: [
            t,
            ` (`,
            n.length,
            `)`,
            (0, H.jsx)(`span`, { children: `\xA0` }),
            (0, H.jsx)(E, {
              onClick: () => a(!i),
              children: i ? (0, H.jsx)(te, {}) : (0, H.jsx)(ie, {}),
            }),
          ],
        }),
        (0, H.jsx)(`hr`, {}),
        i
          ? (0, H.jsx)(E, {
              onClick: () => a(!1),
              children: O(`#Sale_ShowContents`),
            })
          : (0, H.jsx)(H.Fragment, {
              children: n.map((e) =>
                (0, H.jsx)(q, { record: e }, e.sale_page_id),
              ),
            }),
      ],
    });
  },
  q = i((e) => {
    let { record: t } = e,
      n = f(t.clan_account_id);
    return (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsxs)(`div`, {
          className: z,
          children: [
            (0, H.jsxs)(`div`, {
              className: B,
              children: [
                (0, H.jsx)(`div`, {
                  children: (0, H.jsx)(`a`, {
                    href: N.STORE_BASE_URL + `sale/` + t.vanity,
                    children: (0, H.jsx)(`b`, {
                      children: `${t.display_name} - (${t.vanity})`,
                    }),
                  }),
                }),
                !!n &&
                  (0, H.jsx)(`div`, {
                    children: (0, H.jsxs)(`a`, {
                      href: n.vanity_url,
                      children: [`Sale Page part of `, n.group_name],
                    }),
                  }),
                !!t.gid_clan_event &&
                  (0, H.jsx)(`div`, {
                    children: (0, H.jsx)(`a`, {
                      href:
                        N.COMMUNITY_BASE_URL +
                        `gid/` +
                        k
                          .InitFromClanID(t.clan_account_id, N.EUNIVERSE)
                          .ConvertTo64BitString() +
                        `/partnerevents/edit/` +
                        t.gid_clan_event,
                      children: `Migrated: Event Editor Links: State hidden: ${t.hidden} published: ${t.published} sale/ vanity?: ${t.valve_approved_sale_vanity_id}`,
                    }),
                  }),
              ],
            }),
            !!(!t.gid_clan_event || (t.hidden && !t.published)) &&
              (0, H.jsx)(E, {
                onClick: (e) => T((0, H.jsx)(J, { record: t }), P(e)),
                children: `Migrate Sale Page`,
              }),
          ],
        }),
        (0, H.jsx)(`hr`, {}),
      ],
    });
  }),
  J = (e) => {
    let { record: t, closeModal: n } = e,
      [r, i] = (0, F.useState)(t.clan_account_id),
      [a, o] = (0, F.useState)(!1),
      [s, c] = (0, F.useState)(void 0),
      [l, u] = (0, F.useState)(!1),
      [d, f] = (0, F.useState)(t.gid_clan_event),
      [p, m] = (0, F.useState)(null);
    return (0, H.jsxs)(j, {
      strTitle: `Migrate Sale page`,
      strDescription: `Will migrate the sale page ${t.vanity} to the below clan `,
      bOKDisabled: !r || a,
      onOK: () => {
        (o(!0),
          Y.Get()
            .MigrateOrUpdateSalePage(t.sale_page_id, r, t.gid_clan_event)
            .then(([e, t, n]) => {
              (c(e), u(t), f(n));
            }));
      },
      onCancel: n,
      children: [
        t.clan_account_id
          ? (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)(`div`, {
                  children: `Sale page already migrated. This will update the hidden page with latest migration code`,
                }),
                (0, H.jsxs)(`div`, {
                  children: [`ClanID = `, t.clan_account_id],
                }),
                (0, H.jsxs)(`div`, { children: [`GID = `, t.gid_clan_event] }),
              ],
            })
          : (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)(U, {
                  bLimitToCreatorHome: !0,
                  strLabel: `Search for Creator Home to house the Sale Event`,
                  strToolTip: `Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)`,
                  fnSetCurator: (e) => {
                    (i(e.GetClanAccountID()), m(e));
                  },
                }),
                !!p && (0, H.jsx)(oe, { creatorHome: p }),
              ],
            }),
        !(!a || s) && (0, H.jsx)(v, { position: `center`, size: `medium` }),
        !!s && (0, H.jsx)(`div`, { children: s }),
        !!l &&
          (0, H.jsxs)(`div`, {
            children: [
              (0, H.jsx)(`div`, {
                children: (0, H.jsx)(`a`, {
                  href: N.STORE_BASE_URL + `sale/` + t.vanity,
                  target: `_blank`,
                  children: `Sale Page`,
                }),
              }),
              (0, H.jsx)(`div`, {
                children: (0, H.jsx)(`a`, {
                  href:
                    N.COMMUNITY_BASE_URL +
                    `gid/` +
                    k.InitFromClanID(r, N.EUNIVERSE).ConvertTo64BitString() +
                    `/partnerevents/edit/` +
                    d,
                  target: `_blank`,
                  children: `New Sale Page Editor`,
                }),
              }),
            ],
          }),
      ],
    });
  },
  oe = (e) => {
    let { creatorHome: t } = e,
      n = k.InitFromClanID(t.GetClanAccountID(), N.EUNIVERSE),
      r = t.GetClanAccountID();
    return t
      ? (0, H.jsxs)(`div`, {
          children: [
            (0, H.jsxs)(`div`, {
              children: [
                `ClanID = `,
                r,
                ` - SteamID `,
                n.ConvertTo64BitString(),
              ],
            }),
            (0, H.jsx)(`div`, {
              children: (0, H.jsx)(`a`, {
                href:
                  `https://steamsupport.valvesoftware.com/clan/overview/` +
                  n.ConvertTo64BitString(),
                children: `Group Support Page`,
              }),
            }),
            !t.BIsPartnerEventEditorEnabled() &&
              (0, H.jsxs)(`div`, {
                children: [
                  `To use this Creator Home for the sale page migration, the process will need to enable partner event editing on the clan. This both updates the creator home but also puts a small limitation upon it.`,
                  (0, H.jsx)(`a`, {
                    href: `https://confluence.valve.org/display/STEAM/Creator+home+and+Partner+Events+Beta`,
                    target: `_blank`,
                    children: `Read more about the state here.`,
                  }),
                ],
              }),
            (0, H.jsx)(p, {
              creatorID: t.GetCreatorHomeIdentifier(),
              bHideCreatorType: !0,
            }),
          ],
        })
      : null;
  },
  Y = class e {
    m_mapSaleIDToInfo = new Map();
    m_listSaleState = [];
    m_stateLoadPromise = null;
    m_bLoadComplete = !1;
    BHasLoadCompleted() {
      return this.m_bLoadComplete;
    }
    GetMigrationRecords() {
      return this.m_listSaleState;
    }
    async MigrateOrUpdateSalePage(e, t, n) {
      let r = this.m_mapSaleIDToInfo.get(e);
      if (!r)
        return [
          `Record not found to begin the migration processing, cannot take action.: ` +
            e,
          !1,
          void 0,
        ];
      if (r.gid_clan_event && (!r.hidden || r.published))
        return [
          `Sale event is already public, cannot take action.: ` + e,
          !1,
          void 0,
        ];
      try {
        let i = N.COMMUNITY_BASE_URL + `migrate/ajaxcreateupdatesalepage`,
          a = new URLSearchParams();
        (a.append(`sessionid`, M()),
          a.append(`salePageID`, e),
          a.append(`clanAccountID`, `` + t),
          n && a.append(`gidClanEvent`, n));
        let o = await I.default.post(i, a, { withCredentials: !0 });
        if (o?.status == 200 && o?.data?.success == 1 && o?.data?.gidClanEvent)
          return (
            l(() => {
              r.gid_clan_event ||
                ((r.gid_clan_event = o.data.gidClanEvent),
                (r.clan_account_id = t),
                (r.hidden = !0),
                (r.published = !1),
                (r.valve_approved_sale_vanity_id = !0));
            }),
            [o.data.msg || `Success`, !0, o.data.gidClanEvent]
          );
        {
          let e = D(o);
          return (
            console.error(
              `CMigrateSaleStore.LoadSalePageMigrationInfo: failed with ` +
                e.strErrorMsg,
              e,
            ),
            [o.data.msg || `Failed`, !1, void 0]
          );
        }
      } catch (e) {
        let t = D(e);
        console.error(
          `CMigrateSaleStore.MigrateOrUpdateSalePage: caught error with ` +
            t.strErrorMsg,
          t,
        );
      }
      return [`failed`, !1, void 0];
    }
    async LoadSalePageMigrationInfo() {
      return (
        (this.m_stateLoadPromise ||= this.InternalLoadSalePageMigrationInfo()),
        this.m_stateLoadPromise
      );
    }
    async InternalLoadSalePageMigrationInfo() {
      try {
        let e = N.COMMUNITY_BASE_URL + `migrate/ajaxgetsalepagestomigrate`,
          t = { sessionid: M() },
          n = await I.default.get(e, { params: t, withCredentials: !0 });
        if (
          ((this.m_bLoadComplete = !0),
          n?.status == 200 && n?.data?.success == 1 && n?.data?.data)
        )
          return (
            l(() => {
              n.data.data.forEach((e) => {
                (this.m_mapSaleIDToInfo.set(e.sale_page_id, e),
                  this.m_listSaleState.push(
                    this.m_mapSaleIDToInfo.get(e.sale_page_id),
                  ));
              });
            }),
            console.log(
              `InternalLoadSalePageMigrationInfo Loaded: ` +
                this.m_listSaleState.length,
            ),
            this.m_listSaleState
          );
        {
          let e = D(n);
          console.error(
            `CMigrateSaleStore.LoadSalePageMigrationInfo: failed with ` +
              e.strErrorMsg,
            e,
          );
        }
      } catch (e) {
        let t = D(e);
        console.error(
          `CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with ` +
            t.strErrorMsg,
          t,
        );
      }
      return [];
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {
      t(this);
    }
  };
(S([n], Y.prototype, `m_mapSaleIDToInfo`, void 0),
  S([n], Y.prototype, `m_listSaleState`, void 0));
function se() {
  let [e, t] = F.useState(!Y.Get().BHasLoadCompleted());
  return (
    F.useEffect(() => {
      Y.Get().BHasLoadCompleted() ||
        Y.Get()
          .LoadSalePageMigrationInfo()
          .finally(() => t(!1));
    }, []),
    e ? void 0 : Y.Get().GetMigrationRecords()
  );
}
var X = class e {
  constructor() {
    t(this);
  }
  m_rgApps = [];
  m_rgClanAccountIDs = [];
  m_nHighestAppOffsetRequested = 0;
  m_nHighestClanOffsetRequested = 0;
  m_mostRecentRequest;
  m_startAppID;
  static s_globalSingletonStore;
  static Get() {
    return (
      e.s_globalSingletonStore ||
        ((e.s_globalSingletonStore = new e()), e.s_globalSingletonStore.Init()),
      e.s_globalSingletonStore
    );
  }
  Init() {}
  GetApps(e, t, n) {
    let r = Math.max(e, this.m_nHighestAppOffsetRequested),
      i = e + t - r;
    return (
      i > 0 && (this.m_mostRecentRequest = this.FetchApps(r, i, n)),
      this.m_rgApps.slice(e, e + t)
    );
  }
  async FetchApps(e, t, n, r) {
    if (this.m_startAppID && this.m_startAppID != n)
      throw Error(
        `Cannot switch starting AppID from ` + this.m_startAppID + ` to ` + n,
      );
    this.m_startAppID = n;
    let i = Math.max(t, 20);
    for (
      this.m_nHighestAppOffsetRequested = e + i, await this.m_mostRecentRequest;
      i > 0;
    ) {
      let t = Math.min(i, 100),
        a = { offset: e, nBatchSize: t, start_appid: n },
        o = N.COMMUNITY_BASE_URL + `migrate/ajaxgetallapps`,
        s = null;
      try {
        let n = await I.default.get(o, {
          params: a,
          withCredentials: !0,
          cancelToken: r?.token,
        });
        if (n?.data?.success == 1 && n.data.apps) {
          (l(() => {
            if (e > this.m_rgApps.length)
              for (let t = this.m_rgApps.length; t < e; t++)
                this.m_rgApps[t] = null;
            for (let r = 0; r < t; r++) this.m_rgApps[e + r] = n.data.apps[r];
          }),
            (e += t),
            (i -= t));
          continue;
        }
        s = D(n?.data);
      } catch (e) {
        s = D(e);
      }
      throw Error(
        `ajax request failed with error ` +
          s.errorCode +
          `:"` +
          s.strErrorMsg +
          `"`,
      );
    }
  }
  GetClanAccountIDs(e, t) {
    let n = this.m_nHighestClanOffsetRequested,
      r = e + t - n;
    return (
      r > 0 && this.FetchClans(n, r), this.m_rgClanAccountIDs.slice(e, e + t)
    );
  }
  async FetchClans(e, t, n) {
    this.m_nHighestClanOffsetRequested = e + t;
    let r = { offset: e, count: t },
      i = N.COMMUNITY_BASE_URL + `migrate/ajaxgetallclans`,
      a = null;
    try {
      let e = await I.default.get(i, {
        params: r,
        withCredentials: !0,
        cancelToken: n?.token,
      });
      if (e?.data?.success == 1 && e.data.accountids) {
        this.m_rgClanAccountIDs = this.m_rgClanAccountIDs.concat(
          e.data.accountids.map(Number),
        );
        return;
      }
      a = D(e?.data);
    } catch (e) {
      a = D(e);
    }
    console.error(`FetchClans: ajax request failed with error`, a.strErrorMsg);
  }
};
(S([n.shallow], X.prototype, `m_rgApps`, void 0),
  S([n.shallow], X.prototype, `m_rgClanAccountIDs`, void 0));
var ce = `vvKfa--ozEA-`,
  le = `oZ8bKUw8W-4-`,
  ue = `EZ-PZVqoIHM-`,
  de = `opVIDHTC4pM-`,
  fe = `ey2x7OQrzGQ-`,
  pe = `f63uLgxCgCs-`,
  me = `fdVyjjg3vpM-`,
  he = `xGCXoyhLvvc-`,
  Z = `ej4ZSyhzAzM-`,
  Q = `_4RtyaqASXjk-`,
  ge = i((e) => {
    let [t, n] = (0, F.useState)(!0);
    (0, F.useEffect)(() => {
      (d.Init(), n(!1));
    }, []);
    let [r, i] = y(`start`, 0),
      [a, o] = y(`start_appid`, 0),
      [s, c] = y(`count`, 10),
      [l, u] = y(`autoload`, !0),
      [f, p] = y(`batch_size`, 1),
      [m, h] = y(`automigrate`, !1),
      [g, _] = (0, F.useState)(!1),
      [b, x] = y(`rolling`, 0),
      [S, C] = (0, F.useState)(new Set()),
      w = (0, F.useRef)(0),
      T = () => {
        (_(!1), C(new Set()), i(r + s));
      },
      E = () => _(!0),
      D = X.Get().GetApps(r, s, a),
      O = b == 0 ? D : D.filter((e) => !S.has(Number(e.id))).slice(0, b),
      k = (e, t) => {
        S.has(e) ||
          (console.log(`completed: `, e, t),
          S.add(e),
          (w.current += t),
          C(new Set(S)));
      };
    return (0, H.jsxs)(`div`, {
      className: ce,
      children: [
        (0, H.jsx)(`div`, {
          className: le,
          children: `Partner Events Migration Tools`,
        }),
        O.map((e) =>
          (0, H.jsx)(
            _e,
            {
              app: e,
              bAutoLoad: l,
              bAutoMigrate: m || g,
              nMigrateBatchSize: f,
              fnOnCompletion: k,
            },
            e.id,
          ),
        ),
        t &&
          (0, H.jsx)(v, {
            size: `xlarge`,
            position: `center`,
            string: `initializing`,
          }),
        !D.length &&
          (0, H.jsx)(v, {
            size: `xlarge`,
            position: `center`,
            string: `loading apps`,
          }),
        (0, H.jsx)(`div`, {
          className: Q,
          onClick: T,
          children: `LOAD NEXT PAGE`,
        }),
        !m &&
          (0, H.jsx)(`div`, {
            className: `_4RtyaqASXjk-`,
            onClick: E,
            children: `MIGRATE ALL ON PAGE`,
          }),
        (0, H.jsx)(`div`, {
          className: ue,
          children:
            S.size +
            ` OF ` +
            D.length +
            ` APPS COMPLETE. #EVENTS: ` +
            w.current,
        }),
      ],
    });
  }),
  $ = 50,
  _e = i((e) => {
    let t = Number(e.app.id),
      [n, r] = (0, F.useState)(0),
      [i, a] = (0, F.useState)([]),
      [o, s] = (0, F.useState)(!1),
      c = (0, F.useRef)(new Set()),
      l = (0, F.useRef)(0);
    (0, F.useEffect)(() => {
      _.LoadOGGClanInfoForAppID(t).then((e) =>
        console.log(
          `Loaded app`,
          t,
          e?.group_name,
          e?.clanSteamID?.ConvertTo64BitString(),
        ),
      );
    }, [t]);
    let u = _.GetOGGClanInfo(t),
      f = u ? u.group_name : e.app.name,
      p = `${N.COMMUNITY_BASE_URL}games/${u ? u.vanity_url : t}/partnerevents/`,
      m = i.length,
      h = n == m,
      g = i.filter((e) => e.BIsVisibleEvent()),
      y = g.length,
      b = g.filter(
        (e) =>
          e.bOldAnnouncement &&
          u &&
          u.clanAccountID != e.announcementClanSteamID.GetAccountID(),
      ).length,
      x = g.filter(
        (e) =>
          e.bOldAnnouncement &&
          !c.current.has(e.AnnouncementGID) &&
          (!u || u.clanAccountID == e.announcementClanSteamID.GetAccountID()),
      ),
      S = x.length,
      C = !h && S > 0 && u?.clanSteamID,
      w = async () => {
        let e = n;
        (r(n + $), s(!0));
        let o = await d.LoadPartnerEventsPageable(void 0, t, e, $);
        (a(i.concat(o)), s(!1));
      };
    (0, F.useEffect)(() => {
      e.bAutoLoad && h && !o && w();
    });
    let T = (e, t) => {
        t ? (l.current += 1) : c.current.add(e);
      },
      E = async () => {
        (s(!0), await ve(x, e.nMigrateBatchSize, t, u.clanSteamID, T), s(!1));
      };
    return (
      (0, F.useEffect)(() => {
        e.bAutoMigrate && C && !o && E();
      }),
      (0, F.useEffect)(() => {
        h || C || o || e.fnOnCompletion(t, l.current);
      }),
      (0, H.jsxs)(`div`, {
        className: de,
        children: [
          (0, H.jsx)(`div`, { className: fe, children: t }),
          (0, H.jsx)(`a`, { className: pe, href: p, children: f }),
          (0, H.jsxs)(`div`, {
            className: me,
            children: [
              `Loaded: ${m}\tVisible: ${y}\tOld: ${S}`,
              b > 0 &&
                (0, H.jsx)(`span`, {
                  className: `cl4S7FwWoHY-`,
                  children: `Linked: ${b}`,
                }),
            ],
          }),
          h
            ? (0, H.jsx)(`div`, {
                className: Q,
                onClick: w,
                children: `LOAD EVENTS`,
              })
            : o
              ? (0, H.jsx)(v, { size: `small` })
              : C
                ? (0, H.jsx)(`div`, {
                    className: he,
                    onClick: E,
                    children: `MIGRATE EVENTS`,
                  })
                : (0, H.jsx)(`div`, {
                    className: Z,
                    children: `NOTHING TO MIGRATE`,
                  }),
        ],
      })
    );
  });
async function ve(e, t, n, r, i) {
  for (let a of e.slice(0, t)) {
    console.log(`Migrating`, n, a.AnnouncementGID, a.GetNameWithFallback(0), a);
    try {
      let e = await m(a.AnnouncementGID, n, r);
      if (e) console.warn(`Already migrated to event`, e);
      else {
        let e = d.GetEditModel();
        (e.AddTag(`auto_migrated`),
          e.AddTag(`hide_library_overview`),
          e.AddTag(`hide_library_detail`),
          await d.SaveModel(r),
          console.log(`Successfully migrated the event!`),
          (a.bOldAnnouncement = !1),
          i(a.AnnouncementGID, !0));
      }
    } catch (e) {
      let t = D(e);
      (console.error(`MigrateEvents: ` + t.strErrorMsg.slice(0, 512), t),
        i(a.AnnouncementGID, !1));
    }
  }
}
function ye(e) {
  let [t, n] = F.useState(!0);
  return (
    F.useEffect(() => {
      (h.Init(), Promise.all([]).then(() => n(!1)));
    }, []),
    t
      ? (0, H.jsx)(v, { position: `center`, size: `medium` })
      : (0, H.jsxs)(c, {
          children: [
            (0, H.jsx)(o, { path: u.MigrateSaleEvents(), component: G }),
            (0, H.jsx)(o, { path: u.MigrateEvents(), component: ge }),
            (0, H.jsx)(o, { component: ae }),
          ],
        })
  );
}
export { ye as default };
