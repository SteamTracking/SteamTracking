/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import {
  A as t,
  B as n,
  C as r,
  Ft as i,
  L as a,
  R as o,
  St as s,
  ot as c,
  xt as l,
} from "./libraries.js?contenthash=eLY4-d-j";
import { t as u } from "./partnereventmigrate.js?contenthash=CEpog4Mi";
import {
  Y as d,
  c as f,
  ot as p,
  ut as m,
} from "./eventrow.js?contenthash=CQLWp866";
import { u as h } from "./salebanner.js?contenthash=Kgzkt2UP";
import { g, i as _ } from "./clanstore.js?contenthash=C3YK0fn0";
import { t as v } from "./throbber.js?contenthash=COAox7wG";
import { o as y } from "./historyutils.js?contenthash=C2OBI7UD";
import { s as b } from "./eventtime.js?contenthash=DlCNIi05";
import {
  Gi as x,
  Ho as S,
  Jr as C,
  Kc as w,
  Kd as T,
  Ku as E,
  Pu as D,
  Qi as O,
  Rf as k,
  Tf as A,
  Uf as j,
  Us as ee,
  Vs as M,
  Ws as N,
  el as te,
  hm as P,
  lm as F,
  qo as I,
  r as ne,
  t as re,
} from "./main.js?contenthash=B3VTzWgT";
import "./partnereventsavebutton.module.js?contenthash=KlJHBgCU";
var L = e(i()),
  R = e(t()),
  ie = `_2QW4jBjN1Zk-`,
  z = `wBp0X6XIyYg-`,
  B = `JGRxCB9gdso-`,
  V = `oLJu698DJfs-`,
  H = `KoQBt-5Be2g-`,
  U = c(),
  W = (e) => {
    let {
        strLabel: t,
        strToolTip: n,
        fnSetCurator: r,
        bLimitToCreatorHome: i,
      } = e,
      a = (0, L.useRef)(null),
      o = (0, L.useRef)(null),
      s = (0, L.useRef)(0),
      c = (0, L.useRef)(void 0);
    (0, L.useEffect)(
      () => () => {
        window.clearTimeout(s.current),
          a.current && a.current(`SearchForCurator: unmounting`),
          o.current && o.current.Hide();
      },
      [],
    );
    let l = (0, L.useCallback)(
      async (e) => {
        let t = e.target.value;
        t &&
          t.trim().length != 0 &&
          (window.clearTimeout(s.current),
          a.current && a.current(`SearchForCurator: new request`),
          (s.current = window.setTimeout(async () => {
            let e = R.default.CancelToken.source();
            a.current = e.cancel;
            try {
              let n = await g.SearchCreatorHomeStore(t, i, e);
              if (e.token.reason) return;
              o.current = M(
                (0, U.jsx)(G, { list: n, fnSetCurator: r }),
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
              let n = A(t);
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
    return (0, U.jsx)(D, {
      children: (0, U.jsx)(S, {
        type: `text`,
        label: t,
        onChange: l,
        onBlur: (e) => setTimeout(() => o.current && o.current.Hide(), 200),
        ref: c,
        tooltip: n,
      }),
    });
  },
  G = (e) => {
    let { list: t, fnSetCurator: n } = e;
    return (0, U.jsx)(ee, {
      className: H,
      children: t.map((e) =>
        (0, U.jsx)(
          N,
          {
            onSelected: () => n(e),
            children: (0, U.jsxs)(`div`, {
              style: { display: `flex`, alignItems: `center` },
              children: [
                (0, U.jsx)(`div`, {
                  className: ne,
                  children: (0, U.jsx)(`img`, {
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
  K = r((e) => {
    let t = se();
    if (!t)
      return (0, U.jsx)(v, {
        string: T(`#Loading`),
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
    return (0, U.jsxs)(`div`, {
      children: [
        (0, U.jsx)(`h1`, { children: `Migration Sale Tool:` }),
        (0, U.jsx)(`p`, {
          children: `For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.`,
        }),
        (0, U.jsx)(q, { strName: `Unmigrated Franchises`, records: r }),
        (0, U.jsx)(q, {
          strName: `Unmigrated Generic Sale PAges`,
          records: i,
          bHideByDefault: !0,
        }),
        (0, U.jsx)(q, { strName: `Migrated but Hidden`, records: a }),
        (0, U.jsx)(q, {
          strName: `Migrated and Visible`,
          records: o,
          bHideByDefault: !0,
        }),
      ],
    });
  }),
  q = (e) => {
    let { strName: t, records: n, bHideByDefault: r } = e,
      [i, a] = (0, L.useState)(r);
    return (0, U.jsxs)(`div`, {
      className: ie,
      children: [
        (0, U.jsxs)(`h2`, {
          className: z,
          onDoubleClick: () => a(!i),
          children: [
            t,
            ` (`,
            n.length,
            `)`,
            (0, U.jsx)(`span`, { children: `\xA0` }),
            (0, U.jsx)(I, {
              onClick: () => a(!i),
              children: i ? (0, U.jsx)(w, {}) : (0, U.jsx)(te, {}),
            }),
          ],
        }),
        (0, U.jsx)(`hr`, {}),
        i
          ? (0, U.jsx)(I, {
              onClick: () => a(!1),
              children: T(`#Sale_ShowContents`),
            })
          : (0, U.jsx)(U.Fragment, {
              children: n.map((e) =>
                (0, U.jsx)(J, { record: e }, e.sale_page_id),
              ),
            }),
      ],
    });
  },
  J = r((e) => {
    let { record: t } = e,
      n = m(t.clan_account_id);
    return (0, U.jsxs)(U.Fragment, {
      children: [
        (0, U.jsxs)(`div`, {
          className: B,
          children: [
            (0, U.jsxs)(`div`, {
              className: V,
              children: [
                (0, U.jsx)(`div`, {
                  children: (0, U.jsx)(`a`, {
                    href: P.STORE_BASE_URL + `sale/` + t.vanity,
                    children: (0, U.jsx)(`b`, {
                      children: `${t.display_name} - (${t.vanity})`,
                    }),
                  }),
                }),
                !!n &&
                  (0, U.jsx)(`div`, {
                    children: (0, U.jsxs)(`a`, {
                      href: n.vanity_url,
                      children: [`Sale Page part of `, n.group_name],
                    }),
                  }),
                !!t.gid_clan_event &&
                  (0, U.jsx)(`div`, {
                    children: (0, U.jsx)(`a`, {
                      href:
                        P.COMMUNITY_BASE_URL +
                        `gid/` +
                        j
                          .InitFromClanID(t.clan_account_id)
                          .ConvertTo64BitString() +
                        `/partnerevents/edit/` +
                        t.gid_clan_event,
                      children: `Migrated: Event Editor Links: State hidden: ${t.hidden} published: ${t.published} sale/ vanity?: ${t.valve_approved_sale_vanity_id}`,
                    }),
                  }),
              ],
            }),
            !!(!t.gid_clan_event || (t.hidden && !t.published)) &&
              (0, U.jsx)(I, {
                onClick: (e) => O((0, U.jsx)(ae, { record: t }), E(e)),
                children: `Migrate Sale Page`,
              }),
          ],
        }),
        (0, U.jsx)(`hr`, {}),
      ],
    });
  }),
  ae = (e) => {
    let { record: t, closeModal: n } = e,
      [r, i] = (0, L.useState)(t.clan_account_id),
      [a, o] = (0, L.useState)(!1),
      [s, c] = (0, L.useState)(void 0),
      [l, u] = (0, L.useState)(!1),
      [d, f] = (0, L.useState)(t.gid_clan_event),
      [p, m] = (0, L.useState)(null);
    return (0, U.jsxs)(x, {
      strTitle: `Migrate Sale page`,
      strDescription: `Will migrate the sale page ${t.vanity} to the below clan `,
      bOKDisabled: !r || a,
      onOK: () => {
        o(!0),
          Y.Get()
            .MigrateOrUpdateSalePage(t.sale_page_id, r, t.gid_clan_event)
            .then(([e, t, n]) => {
              c(e), u(t), f(n);
            });
      },
      onCancel: n,
      children: [
        t.clan_account_id
          ? (0, U.jsxs)(U.Fragment, {
              children: [
                (0, U.jsx)(`div`, {
                  children: `Sale page already migrated. This will update the hidden page with latest migration code`,
                }),
                (0, U.jsxs)(`div`, {
                  children: [`ClanID = `, t.clan_account_id],
                }),
                (0, U.jsxs)(`div`, { children: [`GID = `, t.gid_clan_event] }),
              ],
            })
          : (0, U.jsxs)(U.Fragment, {
              children: [
                (0, U.jsx)(W, {
                  bLimitToCreatorHome: !0,
                  strLabel: `Search for Creator Home to house the Sale Event`,
                  strToolTip: `Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)`,
                  fnSetCurator: (e) => {
                    i(e.GetClanAccountID()), m(e);
                  },
                }),
                !!p && (0, U.jsx)(oe, { creatorHome: p }),
              ],
            }),
        !(!a || s) && (0, U.jsx)(v, { position: `center`, size: `medium` }),
        !!s && (0, U.jsx)(`div`, { children: s }),
        !!l &&
          (0, U.jsxs)(`div`, {
            children: [
              (0, U.jsx)(`div`, {
                children: (0, U.jsx)(`a`, {
                  href: P.STORE_BASE_URL + `sale/` + t.vanity,
                  target: `_blank`,
                  children: `Sale Page`,
                }),
              }),
              (0, U.jsx)(`div`, {
                children: (0, U.jsx)(`a`, {
                  href:
                    P.COMMUNITY_BASE_URL +
                    `gid/` +
                    j.InitFromClanID(r).ConvertTo64BitString() +
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
      n = j.InitFromClanID(t.GetClanAccountID()),
      r = t.GetClanAccountID();
    return t
      ? (0, U.jsxs)(`div`, {
          children: [
            (0, U.jsxs)(`div`, {
              children: [
                `ClanID = `,
                r,
                ` - SteamID `,
                n.ConvertTo64BitString(),
              ],
            }),
            (0, U.jsx)(`div`, {
              children: (0, U.jsx)(`a`, {
                href:
                  `https://steamsupport.valvesoftware.com/clan/overview/` +
                  n.ConvertTo64BitString(),
                children: `Group Support Page`,
              }),
            }),
            !t.BIsPartnerEventEditorEnabled() &&
              (0, U.jsxs)(`div`, {
                children: [
                  `To use this Creator Home for the sale page migration, the process will need to enable partner event editing on the clan. This both updates the creator home but also puts a small limitation upon it.`,
                  (0, U.jsx)(`a`, {
                    href: `https://confluence.valve.org/display/STEAM/Creator+home+and+Partner+Events+Beta`,
                    target: `_blank`,
                    children: `Read more about the state here.`,
                  }),
                ],
              }),
            (0, U.jsx)(p, {
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
    async MigrateOrUpdateSalePage(e, t, r) {
      let i = this.m_mapSaleIDToInfo.get(e);
      if (!i)
        return [
          `Record not found to begin the migration processing, cannot take action.: ` +
            e,
          !1,
          void 0,
        ];
      if (i.gid_clan_event && (!i.hidden || i.published))
        return [
          `Sale event is already public, cannot take action.: ` + e,
          !1,
          void 0,
        ];
      try {
        let a = P.COMMUNITY_BASE_URL + `migrate/ajaxcreateupdatesalepage`,
          o = new URLSearchParams();
        o.append(`sessionid`, F()),
          o.append(`salePageID`, e),
          o.append(`clanAccountID`, `` + t),
          r && o.append(`gidClanEvent`, r);
        let s = await R.default.post(a, o, { withCredentials: !0 });
        if (s?.status == 200 && s?.data?.success == 1 && s?.data?.gidClanEvent)
          return (
            n(() => {
              i.gid_clan_event ||
                ((i.gid_clan_event = s.data.gidClanEvent),
                (i.clan_account_id = t),
                (i.hidden = !0),
                (i.published = !1),
                (i.valve_approved_sale_vanity_id = !0));
            }),
            [s.data.msg || `Success`, !0, s.data.gidClanEvent]
          );
        {
          let e = A(s);
          return (
            console.error(
              `CMigrateSaleStore.LoadSalePageMigrationInfo: failed with ` +
                e.strErrorMsg,
              e,
            ),
            [s.data.msg || `Failed`, !1, void 0]
          );
        }
      } catch (e) {
        let t = A(e);
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
        let e = P.COMMUNITY_BASE_URL + `migrate/ajaxgetsalepagestomigrate`,
          t = { sessionid: F() },
          r = await R.default.get(e, { params: t, withCredentials: !0 });
        if (
          ((this.m_bLoadComplete = !0),
          r?.status == 200 && r?.data?.success == 1 && r?.data?.data)
        )
          return (
            n(() => {
              r.data.data.forEach((e) => {
                this.m_mapSaleIDToInfo.set(e.sale_page_id, e),
                  this.m_listSaleState.push(
                    this.m_mapSaleIDToInfo.get(e.sale_page_id),
                  );
              });
            }),
            console.log(
              `InternalLoadSalePageMigrationInfo Loaded: ` +
                this.m_listSaleState.length,
            ),
            this.m_listSaleState
          );
        {
          let e = A(r);
          console.error(
            `CMigrateSaleStore.LoadSalePageMigrationInfo: failed with ` +
              e.strErrorMsg,
            e,
          );
        }
      } catch (e) {
        let t = A(e);
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
      return (e.s_Singleton ||= new e()), e.s_Singleton;
    }
    constructor() {
      a(this);
    }
  };
k([o], Y.prototype, `m_mapSaleIDToInfo`, void 0),
  k([o], Y.prototype, `m_listSaleState`, void 0);
function se() {
  let [e, t] = L.useState(!Y.Get().BHasLoadCompleted());
  return (
    L.useEffect(() => {
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
    a(this);
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
  async FetchApps(e, t, r, i) {
    if (this.m_startAppID && this.m_startAppID != r)
      throw Error(
        `Cannot switch starting AppID from ` + this.m_startAppID + ` to ` + r,
      );
    this.m_startAppID = r;
    let a = Math.max(t, 20);
    for (
      this.m_nHighestAppOffsetRequested = e + a, await this.m_mostRecentRequest;
      a > 0;
    ) {
      let t = Math.min(a, 100),
        o = { offset: e, nBatchSize: t, start_appid: r },
        s = P.COMMUNITY_BASE_URL + `migrate/ajaxgetallapps`,
        c = null;
      try {
        let r = await R.default.get(s, {
          params: o,
          withCredentials: !0,
          cancelToken: i?.token,
        });
        if (r?.data?.success == 1 && r.data.apps) {
          n(() => {
            if (e > this.m_rgApps.length)
              for (let t = this.m_rgApps.length; t < e; t++)
                this.m_rgApps[t] = null;
            for (let n = 0; n < t; n++) this.m_rgApps[e + n] = r.data.apps[n];
          }),
            (e += t),
            (a -= t);
          continue;
        }
        c = A(r?.data);
      } catch (e) {
        c = A(e);
      }
      throw Error(
        `ajax request failed with error ` +
          c.errorCode +
          `:"` +
          c.strErrorMsg +
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
      i = P.COMMUNITY_BASE_URL + `migrate/ajaxgetallclans`,
      a = null;
    try {
      let e = await R.default.get(i, {
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
      a = A(e?.data);
    } catch (e) {
      a = A(e);
    }
    console.error(`FetchClans: ajax request failed with error`, a.strErrorMsg);
  }
};
k([o.shallow], X.prototype, `m_rgApps`, void 0),
  k([o.shallow], X.prototype, `m_rgClanAccountIDs`, void 0);
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
  ge = r((e) => {
    let [t, n] = (0, L.useState)(!0);
    (0, L.useEffect)(() => {
      f.Init(), n(!1);
    }, []);
    let [r, i] = y(`start`, 0),
      [a, o] = y(`start_appid`, 0),
      [s, c] = y(`count`, 10),
      [l, u] = y(`autoload`, !0),
      [d, p] = y(`batch_size`, 1),
      [m, h] = y(`automigrate`, !1),
      [g, _] = (0, L.useState)(!1),
      [b, x] = y(`rolling`, 0),
      [S, C] = (0, L.useState)(new Set()),
      w = (0, L.useRef)(0),
      T = () => {
        _(!1), C(new Set()), i(r + s);
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
    return (0, U.jsxs)(`div`, {
      className: ce,
      children: [
        (0, U.jsx)(`div`, {
          className: le,
          children: `Partner Events Migration Tools`,
        }),
        O.map((e) =>
          (0, U.jsx)(
            _e,
            {
              app: e,
              bAutoLoad: l,
              bAutoMigrate: m || g,
              nMigrateBatchSize: d,
              fnOnCompletion: k,
            },
            e.id,
          ),
        ),
        t &&
          (0, U.jsx)(v, {
            size: `xlarge`,
            position: `center`,
            string: `initializing`,
          }),
        !D.length &&
          (0, U.jsx)(v, {
            size: `xlarge`,
            position: `center`,
            string: `loading apps`,
          }),
        (0, U.jsx)(`div`, {
          className: Q,
          onClick: T,
          children: `LOAD NEXT PAGE`,
        }),
        !m &&
          (0, U.jsx)(`div`, {
            className: `_4RtyaqASXjk-`,
            onClick: E,
            children: `MIGRATE ALL ON PAGE`,
          }),
        (0, U.jsx)(`div`, {
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
  _e = r((e) => {
    let t = Number(e.app.id),
      [n, r] = (0, L.useState)(0),
      [i, a] = (0, L.useState)([]),
      [o, s] = (0, L.useState)(!1),
      c = (0, L.useRef)(new Set()),
      l = (0, L.useRef)(0);
    (0, L.useEffect)(() => {
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
      d = u ? u.group_name : e.app.name,
      p = `${P.COMMUNITY_BASE_URL}games/${u ? u.vanity_url : t}/partnerevents/`,
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
        r(n + $), s(!0);
        let o = await f.LoadPartnerEventsPageable(void 0, t, e, $);
        a(i.concat(o)), s(!1);
      };
    (0, L.useEffect)(() => {
      e.bAutoLoad && h && !o && w();
    });
    let T = (e, t) => {
        t ? (l.current += 1) : c.current.add(e);
      },
      E = async () => {
        s(!0), await ve(x, e.nMigrateBatchSize, t, u.clanSteamID, T), s(!1);
      };
    return (
      (0, L.useEffect)(() => {
        e.bAutoMigrate && C && !o && E();
      }),
      (0, L.useEffect)(() => {
        !h && !C && !o && e.fnOnCompletion(t, l.current);
      }),
      (0, U.jsxs)(`div`, {
        className: de,
        children: [
          (0, U.jsx)(`div`, { className: fe, children: t }),
          (0, U.jsx)(`a`, { className: pe, href: p, children: d }),
          (0, U.jsxs)(`div`, {
            className: me,
            children: [
              `Loaded: ${m}\tVisible: ${y}\tOld: ${S}`,
              b > 0 &&
                (0, U.jsx)(`span`, {
                  className: `cl4S7FwWoHY-`,
                  children: `Linked: ${b}`,
                }),
            ],
          }),
          h
            ? (0, U.jsx)(`div`, {
                className: Q,
                onClick: w,
                children: `LOAD EVENTS`,
              })
            : o
              ? (0, U.jsx)(v, { size: `small` })
              : C
                ? (0, U.jsx)(`div`, {
                    className: he,
                    onClick: E,
                    children: `MIGRATE EVENTS`,
                  })
                : (0, U.jsx)(`div`, {
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
      let e = await u(a.AnnouncementGID, n, r);
      if (e) console.warn(`Already migrated to event`, e);
      else {
        let e = f.GetEditModel();
        e.AddTag(`auto_migrated`),
          e.AddTag(`hide_library_overview`),
          e.AddTag(`hide_library_detail`),
          await f.SaveModel(r),
          console.log(`Successfully migrated the event!`),
          (a.bOldAnnouncement = !1),
          i(a.AnnouncementGID, !0);
      }
    } catch (e) {
      let t = A(e);
      console.error(`MigrateEvents: ` + t.strErrorMsg.slice(0, 512), t),
        i(a.AnnouncementGID, !1);
    }
  }
}
function ye(e) {
  let [t, n] = L.useState(!0);
  return (
    L.useEffect(() => {
      h.Init(), Promise.all([]).then(() => n(!1));
    }, []),
    t
      ? (0, U.jsx)(v, { position: `center`, size: `medium` })
      : (0, U.jsxs)(s, {
          children: [
            (0, U.jsx)(l, { path: d.MigrateSaleEvents(), component: K }),
            (0, U.jsx)(l, { path: d.MigrateEvents(), component: ge }),
            (0, U.jsx)(l, { component: C }),
          ],
        })
  );
}
export { ye as default };
