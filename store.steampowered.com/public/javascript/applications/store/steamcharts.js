/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  B as t,
  F as n,
  L as r,
  Lt as i,
  Pt as a,
  V as o,
  ft as s,
  st as c,
  u as l,
} from "./libraries.js";
import { _ as u, g as d, i as f, v as p } from "./salesectionfactory.js";
import { Q as m, Z as h } from "./partnerevent.js";
import { t as ee } from "./partnersaledisplay.js";
import { t as g } from "./usehotkeys.js";
import { o as te } from "./historyutils.js";
import { t as ne } from "./throbber.js";
import { t as re } from "./moment.js";
import { i as _, t as ie } from "./eventdevfeaturestore.js";
import { a as ae } from "./simplesuccesserror.js";
import { a as oe } from "./storeitemhooks.js";
import { r as se } from "./storedisplayutils.js";
import { n as ce, r as le, t as v } from "./fakesalehelper.js";
import {
  $o as ue,
  $x as y,
  Ar as de,
  Dr as fe,
  Fr as pe,
  Gb as me,
  In as he,
  Io as ge,
  Iu as b,
  Ja as _e,
  Jc as x,
  Kx as S,
  Lr as C,
  Pn as ve,
  Ps as ye,
  Qx as w,
  Sc as T,
  Uy as E,
  Vl as D,
  Xa as be,
  Xx as O,
  Xy as xe,
  Yx as k,
  Zx as A,
  ax as Se,
  cb as Ce,
  db as we,
  du as Te,
  eS as j,
  fu as Ee,
  fx as De,
  ht as Oe,
  hx as ke,
  kc as M,
  kr as Ae,
  lb as je,
  lx as Me,
  mS as Ne,
  mx as N,
  nS as P,
  nl as Pe,
  oy as Fe,
  qx as Ie,
  rx as F,
  sy as Le,
  tS as I,
  ux as Re,
  x as ze,
  yu as Be,
} from "./main.js";
import { t as Ve } from "./storequery.js";
import { t as He } from "./react-datetime.js";
import { n as Ue, t as We } from "./focusablelink.js";
import { t as Ge } from "./browserpage.js";
var L = e(a(), 1),
  Ke = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.country_code || k(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: w.readString, bw: P.writeString },
            context: { n: 2, c: Me },
            data_request: { n: 3, c: Re },
            start_date: { n: 4, br: w.readUint32, bw: P.writeUint32 },
            page_start: { n: 5, br: w.readInt32, bw: P.writeInt32 },
            page_count: { n: 6, d: 20, br: w.readInt32, bw: P.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= y(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreTopSellers_GetWeeklyTopSellers_Request`;
    }
  },
  qe = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.start_date || k(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start_date: { n: 1, br: w.readUint32, bw: P.writeUint32 },
            ranks: { n: 2, c: Je, r: !0, q: !0 },
            next_page_start: { n: 3, br: w.readInt32, bw: P.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= y(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreTopSellers_GetWeeklyTopSellers_Response`;
    }
  },
  Je = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rank || k(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rank: { n: 1, br: w.readInt32, bw: P.writeInt32 },
            appid: { n: 2, br: w.readInt32, bw: P.writeInt32 },
            item: { n: 3, c: De },
            last_week_rank: { n: 4, br: w.readInt32, bw: P.writeInt32 },
            consecutive_weeks: { n: 5, br: w.readInt32, bw: P.writeInt32 },
            first_top100: { n: 6, br: w.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= y(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank`;
    }
  },
  Ye = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || k(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: w.readString, bw: P.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= y(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreTopSellers_GetCountryList_Request`;
    }
  },
  Xe = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.countries || k(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { countries: { n: 1, c: Ze, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= y(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreTopSellers_GetCountryList_Response`;
    }
  },
  Ze = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.country_code || k(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: w.readString, bw: P.writeString },
            name: { n: 2, br: w.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= y(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreTopSellers_GetCountryList_Response_Country`;
    }
  },
  Qe;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `StoreTopSellers.GetWeeklyTopSellers#1`,
      ke(Ke, t, n),
      qe,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetWeeklyTopSellers = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreTopSellers.GetCountryList#1`, ke(Ye, t, n), Xe, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetCountryList = n;
})((Qe ||= {}));
var $e = 20,
  et = class e {
    m_WebAPI;
    m_Storage;
    m_promiseInitialize;
    m_rtCurrentWeek;
    constructor(e, t) {
      (this.m_WebAPI = e), (this.m_Storage = t);
    }
    async Initialize(e) {
      return (
        (this.m_promiseInitialize ||= new Promise((t, n) => {
          let r;
          (F.EUNIVERSE == 2 || F.EUNIVERSE == 4) && (r = 1539068400),
            this.LoadCountryList()
              .then(() =>
                this.LoadCurrentWeekStart(r, e).then((e) => {
                  (this.m_rtCurrentWeek = e), t();
                }),
              )
              .catch(n);
        })),
        this.m_promiseInitialize
      );
    }
    m_rgCountryList;
    static k_nCountryListMaxCacheTime = 864e5;
    async LoadCountryList() {
      if (!this.m_rgCountryList) {
        let t = `TopSellersCountryList_` + F.LANGUAGE;
        if (
          ((this.m_rgCountryList = await this.m_Storage.GetObject(t)),
          !this.m_rgCountryList ||
            this.m_rgCountryList.dtTimeStored + e.k_nCountryListMaxCacheTime <
              Date.now())
        ) {
          let e = N.Init(Ye);
          e.Body().set_language(F.LANGUAGE);
          let n = await Qe.GetCountryList(
            this.m_WebAPI.GetServiceTransport(),
            e,
          );
          if (n.GetEResult() == 1) {
            let e = n
              .Body()
              .countries()
              .map((e) => e.toObject());
            e.sort((e, t) => (e.name < t.name ? -1 : 1)),
              (this.m_rgCountryList = {
                rgCountryCodes: e,
                dtTimeStored: Date.now(),
              }),
              this.m_Storage.StoreObject(t, this.m_rgCountryList);
          } else
            this.m_rgCountryList = {
              rgCountryCodes: [{ country_code: `US`, name: `United States` }],
              dtTimeStored: 0,
            };
        }
      }
      return this.m_rgCountryList;
    }
    BIsValidTopSellersCountry(e) {
      return !!this.ValidateCountryCode(e);
    }
    ValidateCountryCode(e) {
      return (
        Ie(this.m_rgCountryList, `Country list should already be loaded`),
        this.m_rgCountryList.rgCountryCodes.find((t) => t.country_code == e)
          ? e
          : ``
      );
    }
    GetCurrentWeek() {
      return this.m_rtCurrentWeek;
    }
    async LoadCurrentWeekStart(e, t) {
      let n = this.ValidateCountryCode(t),
        r = N.Init(Ke);
      Te(r),
        Ee(r, dt),
        n && r.Body().set_country_code(n),
        e && r.Body().set_start_date(e),
        r.Body().set_page_count($e);
      let i = await Qe.GetWeeklyTopSellers(
        this.m_WebAPI.GetAnonymousServiceTransport(),
        r,
      );
      if (i.GetEResult() != 1) throw `error loading top sellers`;
      return i.Body().start_date();
    }
  },
  tt = `TopSellers`;
function nt(e, t) {
  let { data: n } = c({
    queryKey: [tt, `Initialization`],
    queryFn: () =>
      e
        .Initialize(t)
        .then(() => ({
          rtCurrentWeek: e.GetCurrentWeek(),
          bCountryListInitialized: !0,
        })),
    staleTime: 1 / 0,
  });
  return n || { rtCurrentWeek: void 0, bCountryListInitialized: !1 };
}
function rt(e) {
  let t = 50;
  return e < 2009 ? (t = 5) : e < 2014 ? (t = 10) : e < 2018 && (t = 25), t;
}
var it = class {
    m_WebAPI;
    constructor(e) {
      this.m_WebAPI = e;
    }
    async LoadTopMonthlyReleases(e, t) {
      let n = N.Init(d),
        r = new Date(e, t, 15);
      n.Body().set_rtime_month(Math.floor(r.getTime() / 1e3)),
        n.Body().set_include_dlc(!0);
      let i = rt(e);
      n.Body().set_top_results_limit(i);
      let a = await p.GetMonthTopAppReleases(
        this.m_WebAPI.GetAnonymousServiceTransport(),
        n,
      );
      if (a.GetEResult() != 1) {
        if (a.GetEResult() == 10) return { bSQLError: !0 };
        if (a.GetEResult() == 42) return {};
        throw `error loading top releases`;
      }
      return a.Body().toObject();
    }
  },
  at = `useMonthlyTopRelease`;
function ot(e, t, n) {
  let { data: r } = c({
    queryKey: [at, t, n],
    queryFn: () => e.LoadTopMonthlyReleases(t, n),
  });
  return r;
}
var st = class {
    m_WebAPI;
    constructor(e) {
      this.m_WebAPI = e;
    }
    async LoadTopYearlyReleases(e) {
      let t = N.Init(u),
        n = new Date(e, 1, 15);
      t.Body().set_rtime_year(Math.floor(n.getTime() / 1e3)),
        t.Body().set_include_dlc(!0);
      let r = (me.is_support, this.m_WebAPI.GetAnonymousServiceTransport()),
        i = await p.GetYearTopAppReleases(r, t);
      if (i.GetEResult() != 1) {
        if (i.GetEResult() == 10) return { bSQLError: !0 };
        if (i.GetEResult() == 42) return {};
        throw `error loading top releases`;
      }
      let a = i.Body().toObject();
      return me.is_support && a.top_app_list.length, a;
    }
  },
  ct = `useYearlyTopRelease`;
function lt(e, t) {
  let { data: n } = c({
    queryKey: [ct, t],
    queryFn: () => e.LoadTopYearlyReleases(t),
  });
  return n;
}
var ut = class {
    m_DynamicUserStore;
    m_TopSellersStore;
    m_TopMonthlyReleasesStore;
    m_TopYearlyReleasesStore;
    m_WebAPI;
    async Initialize(e, t) {
      (this.m_WebAPI = e),
        (this.m_TopSellersStore = new et(this.m_WebAPI, t)),
        (this.m_TopMonthlyReleasesStore = new it(this.m_WebAPI)),
        (this.m_TopYearlyReleasesStore = new st(this.m_WebAPI)),
        (this.m_DynamicUserStore = await Be.Get().HintLoad());
    }
    get TopSellersStore() {
      return this.m_TopSellersStore;
    }
    get TopMonthlyReleasesStore() {
      return this.m_TopMonthlyReleasesStore;
    }
    get TopYearlyReleasesStore() {
      return this.m_TopYearlyReleasesStore;
    }
    get DynamicUserStore() {
      return this.m_DynamicUserStore;
    }
  },
  dt = {
    include_basic_info: !0,
    include_assets: !0,
    include_trailers: !0,
    include_release: !0,
    include_reviews: !0,
    include_platforms: !0,
    include_screenshots: !0,
    include_tag_count: 20,
  },
  R = `nWd1ELrYoe0-`,
  ft = `_95V-lbT5PJ4-`,
  pt = `PjNfTdZzbec-`,
  mt = `z1BmGx-3eHc-`,
  ht = `BI3ViiBatRs-`,
  gt = `-WUQRSRopgQ-`,
  _t = `K7jQn59eh0Q-`,
  vt = `VORLVa89K8w-`,
  yt = `WuFd3UO9Z8A-`,
  bt = `-M2vGhTiIBQ-`,
  xt = `_6NF3vg0mDAs-`,
  St = `Vp9bv89KEA4-`,
  Ct = `uI7wLN2bQiE-`,
  wt = `kGCpjDEp6bU-`,
  z = `G32wdCdumF8-`,
  Tt = `QPPTxaWO3x0-`,
  B = `_7dLEN2CpT-A-`,
  Et = `YXVaLgzPykw-`,
  V = `kiJjoM-8Yio-`,
  H = `ncC-B6lB610-`,
  Dt = `YqWcdxOb1HQ-`,
  Ot = `_9fTbvJQq5II-`,
  U = `lEUeKqj6qis-`,
  W = `V0nSJVwdJYU-`,
  G = `_4Hwybg0uOZA-`,
  K = `_8wtllXu9kAY-`,
  kt = `JFpy0tqsydo-`,
  q = e(i()),
  J = e(re()),
  At = e(He()),
  jt = `_2eSm1Y7y2zQ-`,
  Mt = `jV834OQRLIM-`,
  Y = s();
function Nt(e) {
  let { toolTipContent: t } = e,
    n = Pt({ ...e });
  return (0, Y.jsx)(C, {
    toolTipContent: t,
    children: (0, Y.jsx)(`div`, {
      className: T(jt),
      onClick: (e) => n(e, { bDisableMouseOverlay: !0, bAlwaysOnTop: !0 }),
      children: (0, Y.jsx)(_e, { color: `#c6d4df` }),
    }),
  });
}
function Pt(e) {
  return (0, q.useCallback)(
    (t, n) => {
      let r = (0, Y.jsx)(Ft, { ...e });
      fe(r, t, n);
    },
    [e],
  );
}
function Ft(e) {
  let { value: t, fnOnUpdate: n, minDate: r, maxDate: i } = e,
    a = (0, q.useRef)(void 0),
    o = (0, q.useRef)(null),
    s = (0, q.useCallback)(
      (e) => {
        let t = J.default.unix(r),
          n = J.default.unix(i);
        return e.isSameOrAfter(t, `month`) && e.isSameOrBefore(n, `month`);
      },
      [r, i],
    ),
    c = (0, q.useCallback)(
      (e) => {
        n(e.unix()), a.current.Hide();
      },
      [n],
    ),
    l = (0, q.useMemo)(() => {
      if (!J.default.locales().includes(`YearMonthPickerContextMenu`)) {
        let e = Array.from({ length: 12 }, (e, t) => xe(new Date(2020, t, 1))),
          t = Array.from({ length: 12 }, (e, t) => we(new Date(2020, t, 1)));
        J.default.defineLocale(`YearMonthPickerContextMenu`, {
          months: e,
          monthsShort: t,
        });
      }
      return (0, J.default)().clone().locale(`YearMonthPickerContextMenu`);
    }, []);
  return (0, Y.jsx)(Ae, {
    refInstance: a,
    children: (0, Y.jsx)(de, {
      onSelected: () => {},
      className: Mt,
      children: (0, Y.jsx)(`div`, {
        onClick: (e) => {
          e.preventDefault(), e.stopPropagation();
        },
        children: (0, Y.jsx)(At.default, {
          ref: o,
          value: l,
          onChange: c,
          dateFormat: `YYYY-MM`,
          timeFormat: !1,
          closeOnSelect: !0,
          isValidDate: s,
          input: !1,
          locale: `YearMonthPickerContextMenu`,
        }),
      }),
    }),
  });
}
var It = `-ltR43mR0X4-`,
  Lt = `_-02GoLJ4zss-`,
  Rt = `_3eZTUI8a7YQ-`,
  zt = `_1IPE7weNS5c-`,
  Bt = `_6nJy9OkrSk4-`,
  Vt = `aq431rFutSg-`,
  Ht = `Yl-MOWSIHeA-`,
  Ut = `dbaJyRHX-xw-`;
function Wt(e) {
  let {
      rgAppIDs: t,
      children: n,
      nMonth: r,
      bTallCapsule: i,
      bBlurCapsules: a,
    } = e,
    o = (0, q.useMemo)(() => {
      let e = 0,
        n = [...t];
      for (; n.length < 25; ) n.push(t[e % t.length]), e++;
      return n.map((e) => D.Get().GetApp(e)).filter(Boolean);
    }, [t]);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(`div`, {
        className: T({ [It]: !0, [Ht]: i, [Lt]: a, [zt]: !r }),
        children: (0, Y.jsx)(`div`, {
          className: Vt,
          children: (0, Y.jsx)(`div`, {
            className: Rt,
            children: (0, Y.jsx)(`div`, {
              className: T({
                [Bt]: !0,
                [`Month${r}`]: !0,
                [Ut]: o.length <= 10,
                [void 0]: o.length <= 20,
              }),
              children: o.map((e, t) =>
                i
                  ? (0, Y.jsx)(
                      `img`,
                      { src: e.GetAssets().GetHeroCapsuleURL() },
                      `bg_` + e.GetAppID() + `+` + t,
                    )
                  : (0, Y.jsx)(
                      `img`,
                      { src: e.GetAssets().GetHeaderURL() },
                      `bg_` + e.GetAppID() + `+` + t,
                    ),
              ),
            }),
          }),
        }),
      }),
      n,
    ],
  });
}
function Gt(e) {
  let t = new Date(e > 0xe8d4a51000 ? e : e * 1e3);
  new Intl.DateTimeFormat(`en-US`, {
    timeZone: `America/Los_Angeles`,
    year: `numeric`,
    month: `numeric`,
    day: `numeric`,
    hour: `numeric`,
    minute: `numeric`,
  }).format(t);
  let n = new Date(
      t.toLocaleString(`en-US`, { timeZone: `America/Los_Angeles` }),
    ),
    r = n.getMonth(),
    i = n.getFullYear(),
    a = n.getDate(),
    o = n.getHours(),
    s,
    c;
  for (s = a > 15 || (a === 15 && o >= 10) ? r - 1 : r - 2; s < 0; )
    (s += 12), (c = (c ?? i) - 1);
  c ??= i;
  let l = new Date(Date.UTC(c, s, 15, 17, 0));
  return Math.floor(l.getTime() / 1e3);
}
function Kt(e) {
  let [t, n] = e.split(`_`),
    r = parseInt(n, 10),
    i = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
    }[t.toLowerCase()];
  if (i === void 0) return { dtMidMonth: null, dtTestMonth: null };
  let a = i,
    o = r;
  return (
    i == 11 ? ((a = 0), (o += 1)) : (a += 1),
    { dtMidMonth: new Date(r, i, 15), dtTestMonth: new Date(o, a, 15) }
  );
}
function qt(e, t) {
  let n = [
    `january`,
    `february`,
    `march`,
    `april`,
    `may`,
    `june`,
    `july`,
    `august`,
    `september`,
    `october`,
    `november`,
    `december`,
  ];
  if (t < 0 || t > 11)
    throw Error(`Invalid month index. Must be between 0 and 11.`);
  return `${n[t]}_${e}`;
}
var Jt = `GrtMVCtr-vo-`,
  Yt = `gff1kM2EfSA-`,
  Xt = `YhTNq9btf6k-`,
  Zt = `KDYpaqyoTj8-`,
  Qt = `XCSzn66hgwE-`;
function $t(e) {
  let t = Jt;
  switch (e) {
    case 1:
      t = Yt;
      break;
    case 2:
      t = Xt;
      break;
    case 3:
      t = Zt;
  }
  return t;
}
function en(e, t, n, r, i, a, o, s) {
  t?.length > 25 &&
    e.jsondata.sale_sections.push({
      ...v(`items`, `#Sale_default_label_148`),
      capsules: t.map((e) => ({ id: e, type: r.has(e) ? `dlc` : `game` })),
      capsules_per_row_array: [1],
      show_as_carousel: !1,
      carousel_rows: 1,
      single_item_style: `library`,
      use_random_order: !0,
      cap_section_content: !1,
      cap_section_row_count: t.length,
      disable_background: !0,
      enable_faceted_browsing: !0,
      min_capsule_matches_for_facet_values: 5,
      max_facet_values_for_facet: 5,
      facet_sort_order: 1,
      cap_item_count: 0,
      facets: n,
      show_on_tabs: a ? [a] : void 0,
      prefer_assets_without_overrides: i,
      show_deck_compability_details: !!o,
      show_as_demos: !!s,
      prefer_demo_store_page: !!s,
    });
}
function tn(e, t, n, r, i, a, o, s) {
  if (Se.logged_in) {
    let c = Be.Get(),
      l = t.filter((e) => c.BIsGameWishlisted(e));
    l?.length > 0 &&
      e.jsondata.sale_sections.push({
        ...v(`items`, `#Sale_OnWishlist`),
        capsules: l.map((e) => ({ id: e, type: r.has(e) ? `dlc` : `game` })),
        capsules_per_row_array: l.length < 3 ? [2] : [5],
        carousel_rows: 1,
        show_as_carousel: !0,
        disable_background: !0,
        capsule_style_per_row_array: l.length < 3 ? [`grid`] : [`tall`],
        random_from_entire_set: !0,
        show_on_tabs: a ? [a] : void 0,
        prefer_assets_without_overrides: i,
        show_deck_compability_details: !!o,
        show_as_demos: !!s,
        prefer_demo_store_page: !!s,
      });
    let u = t.filter((e) => c.BIsGameRecommended(e) && !c.BIsGameIgnored(e));
    if (u?.length > 0) {
      let t = u.length;
      e.jsondata.sale_sections.push({
        ...v(`items`, `#Sale_default_label_RecommendedForYou`),
        capsules: u.map((e) => ({ id: e, type: r.has(e) ? `dlc` : `game` })),
        capsules_per_row_array: t == 2 ? [2] : [3, 2],
        carousel_rows: 2,
        show_as_carousel: !0,
        disable_background: !0,
        capsule_style_per_row_array: t == 2 ? [`grid`] : [`tall`, `grid`],
        show_on_tabs: a ? [a] : void 0,
        prefer_assets_without_overrides: i,
        show_deck_compability_details: !!o,
        show_as_demos: !!s,
        prefer_demo_store_page: !!s,
      });
    }
    if (!s) {
      let t = n.filter((e) => {
        if (!c.BIsGameOwned(e)) {
          let t = D.Get().GetApp(e);
          return c.BIsGameOwned(t.GetParentAppID());
        }
        return !1;
      });
      t.length > 0 &&
        e.jsondata.sale_sections.push({
          ...v(`dlc_for_you`, `#Sale_default_label_246`),
          capsules: t.map((e) => ({ id: e, type: `dlc` })),
          dlc_for_you_data: {
            group_by_parent_app: !0,
            hide_dlc_stats: !0,
            parent_app_page_size: 5,
            hide_dlc_grouping: !0,
          },
          capsules_per_row_array: [3],
          show_as_carousel: !0,
          disable_background: !0,
          show_on_tabs: a ? [a] : void 0,
          prefer_assets_without_overrides: i,
        });
    }
  }
}
function nn(e, t) {
  let n = Be.Get(),
    r = [],
    i = [],
    a = [],
    o = [],
    s = [];
  for (let c of e)
    if (n.BIsGameIgnored(c)) continue;
    else
      n.BIsGameRecommended(c)
        ? r.push(c)
        : n.BIsGameWishlisted(c)
          ? i.push(c)
          : t[1]?.includes(c)
            ? a.push(c)
            : t[2]?.includes(c)
              ? o.push(c)
              : s.push(c);
  return [...S(r), ...S(i), ...S(a), ...S(o), ...S(s)];
}
function rn(e, t, n, r, i, a, o, s) {
  e.jsondata.sale_sections.push({
    ...v(`trailercarousel`, ``),
    capsules: nn(t, n).map((e) => ({ id: e, type: r.has(e) ? `dlc` : `game` })),
    use_random_order: !1,
    disable_background: !0,
    trailer_carousel_auto_advance_msec: 1e4,
    show_on_tabs: a ? [a] : void 0,
    prefer_assets_without_overrides: i,
    show_deck_compability_details: !!o,
    show_as_demos: !!s,
    prefer_demo_store_page: !!s,
  });
}
function an(e, t, n, r, i) {
  let a = ce(m, 1, e, ie()),
    o = [...i, ...n],
    s = new Set(i);
  if (
    ((a.jsondata.sale_sections = []),
    n.length > 9 && rn(a, n, r, s, !1),
    n?.length > 25)
  )
    for (let e in r) {
      let t = r[e];
      a.jsondata.sale_sections.push({
        ...v(`items`, `#SteamCharts_Monthly_Rank_` + e),
        capsules: t.map((e) => ({ id: e, type: s.has(e) ? `dlc` : `game` })),
        capsules_per_row_array: [4],
        capsule_style_per_row_array: e == `1` ? [`tall`] : [`grid`],
        show_as_carousel: !1,
        use_random_order: !0,
        border_width: 1,
        default_subtitle: `#SteamCharts_Monthly_Rank_` + e + `_subtitle`,
        sale_section_classname: $t(Number.parseInt(e)),
        prefer_assets_without_overrides: !1,
      });
    }
  else {
    let e = Object.values(n).flat();
    a.jsondata.sale_sections.push({
      ...v(`items`, `#SteamCharts_Monthly_Rank_All`),
      capsules: e.map((e) => ({ id: e, type: s.has(e) ? `dlc` : `game` })),
      capsules_per_row_array:
        n?.length > 9 ? (n?.length > 15 ? [3] : [2]) : [1],
      single_item_style: n?.length < 9 ? `library` : `bordered`,
      show_as_carousel: !1,
      use_random_order: !0,
      sale_section_classname: Qt,
      prefer_assets_without_overrides: !1,
    });
  }
  return (
    tn(a, o, i, s, !1),
    en(a, n, t, s, !1),
    a.jsondata.sale_sections.push({
      ...v(`social_share`, `#EventDisplay_Share_WithFriendsHeader`),
      social_share: le(),
    }),
    a
  );
}
function on(e, t, n, r, i) {
  let { data: a } = c({
    queryKey: [`useMonthEventModel`, e],
    queryFn: () => {
      try {
        return an(e, t, n, r, i);
      } catch (t) {
        return console.error(`Montly new release: ${e} failed: `, t), null;
      }
    },
  });
  return a;
}
function sn(e) {
  let {
      rgFilteredDLCsAppIDs: t,
      rgFilteredCombinedAppsAndDLC: n,
      promotionName: r,
      rgFilteredAppIDByTier: i,
      facets: a,
    } = e,
    o = on(r, a, n, i, t),
    s = Ne(F.LANGUAGE);
  return o
    ? (0, Y.jsx)(ee, {
        eventModel: o,
        language: s,
        bIsPreview: !1,
        bDynamicallyCreatedSale: !0,
      })
    : o === null
      ? (0, Y.jsx)(`div`, {
          className: ae,
          children: E(`#Error_ErrorCommunicatingWithNetwork`),
        })
      : (0, Y.jsx)(ne, { string: E(`#Loading`), position: `center` });
}
function cn(e, t, n, r) {
  (0, q.useEffect)(() => {
    if (e == null && r != 1 && n) {
      let e = ln(n);
      e?.length > 0
        ? D.Get()
            .HintLoadStoreApps(e, se)
            .then(() => t(e))
        : t([]);
    }
  }, [r, n, e, t]);
}
function ln(e) {
  let t = Be.Get(),
    n = e
      .filter((e) => {
        if (!t.BIsGameOwned(e)) {
          let n = D.Get().GetApp(e);
          return n && n.BIsVisible() && t.BIsGameOwned(n.GetParentAppID());
        }
        return !1;
      })
      .map((e) => D.Get().GetApp(e).GetParentAppID())
      .filter(Boolean);
  return Array.from(new Set(n));
}
var un = [`topnewreleases`, `bestofyear`];
function dn(e) {
  return e.split(/[?#]/)[0];
}
function fn(e) {
  let t = dn(e);
  return t.length > 1 && t.endsWith(`/`) ? t.slice(0, -1) : t;
}
function pn(e) {
  if (!e) return !1;
  let t = b.SteamCharts(),
    n = dn(e);
  if (fn(n) == fn(t)) return !0;
  if (!n.startsWith(t)) return !1;
  let r = n.slice(t.length).split(`/`)[0];
  return !un.includes(r);
}
function mn() {
  let e = t();
  return q.useCallback(
    (t, n) => {
      pn(t)
        ? n?.bReplace
          ? window.location.replace(t)
          : window.location.assign(t)
        : n?.bReplace
          ? e.replace(t, n?.state)
          : e.push(t, n?.state);
    },
    [e],
  );
}
function hn(e, t) {
  let n = fn(window.location.pathname),
    r = fn(e);
  return t ? n == r : n == r || n.startsWith(r + `/`);
}
function X(e) {
  let {
      to: t,
      exact: n,
      activeClassName: r,
      className: i,
      children: a,
      ...o
    } = e,
    s = typeof t == `string` ? t : void 0;
  return pn(s)
    ? (0, Y.jsx)(Pe, {
        href: s,
        className: T(i, hn(s, !!n) ? r : void 0),
        ...o,
        children: a,
      })
    : (0, Y.jsx)(Ue, {
        to: t,
        exact: n,
        activeClassName: r,
        className: i,
        ...o,
        children: a,
      });
}
function Z(e) {
  let { to: t, children: n, ...r } = e,
    i = typeof t == `string` ? t : void 0;
  return pn(i)
    ? (0, Y.jsx)(Pe, { href: i, ...r, children: n })
    : (0, Y.jsx)(We, { to: t, ...r, children: n });
}
function gn(e) {
  let { salePageName: t, TopMonthlyReleasesStore: n } = e,
    r = _(),
    { dtMidMonth: i, dtTestMonth: a } = Kt(t);
  return !i ||
    Math.floor(a.getTime() / 1e3) > r ||
    i.getFullYear() < xn ||
    (i.getFullYear() == xn && i.getMonth() < Sn)
    ? (0, Y.jsx)(`div`, {
        children: E(`#DateTimePicker_Fallback_Invalid_DateTime`),
      })
    : (0, Y.jsx)(yn, {
        TopMonthlyReleasesStore: n,
        nMonth: i.getMonth(),
        nYear: i.getFullYear(),
        promotionName: t,
      });
}
var _n = { ...se, apply_user_filters: !0 };
function vn(e, t, n, r) {
  let i = ot(e, t, n),
    a = (0, q.useMemo)(
      () =>
        i
          ? Array.from(
              new Set([
                ...(i.top_dlc_releases?.map((e) => e.appid) || []),
                ...(i.top_combined_app_and_dlc_releases?.map((e) => e.appid) ||
                  []),
              ]),
            )
          : (r && r(null), []),
      [i, r],
    ),
    o = oe(a, _n),
    s = (0, q.useMemo)(
      () =>
        !i || o == 1
          ? []
          : i.top_dlc_releases
              ?.filter((e) => !D.Get().BIsAppMissing(e.appid))
              .map((e) => e.appid),
      [i, o],
    ),
    { rgFilteredCombinedAppsAndDLC: c, rgFilteredAppIDByTier: l } = (0,
    q.useMemo)(() => {
      if (!i || o == 1)
        return { rgFilteredCombinedAppsAndDLC: [], rgFilteredAppIDByTier: [] };
      let e = i?.top_combined_app_and_dlc_releases || [],
        t = [];
      return {
        rgFilteredCombinedAppsAndDLC: e
          .filter((e) => !D.Get().BIsAppMissing(e.appid))
          .map((e) => {
            let n = e.app_release_rank;
            return t[n] || (t[n] = []), t[n].push(e.appid), e.appid;
          }),
        rgFilteredAppIDByTier: t,
      };
    }, [o, i]);
  return {
    rgAppIDs: a,
    rgMonthlyReleases: i,
    rgFilteredAppIDByTier: l,
    rgFilteredCombinedAppsAndDLC: c,
    rgFilteredDLCsAppIDs: s,
    loadState: o,
  };
}
function yn(e) {
  let { TopMonthlyReleasesStore: t, nYear: n, nMonth: r, promotionName: i } = e,
    [a, o] = (0, q.useState)(null),
    [s, c] = (0, q.useState)(null),
    {
      rgAppIDs: l,
      rgMonthlyReleases: u,
      rgFilteredAppIDByTier: d,
      rgFilteredCombinedAppsAndDLC: p,
      rgFilteredDLCsAppIDs: m,
      loadState: h,
    } = vn(t, n, r);
  return (
    (0, q.useEffect)(() => {
      a || f({ bForceFeatureTagForFullController: !1 }).then(o);
    }, [a]),
    cn(s, c, m, h),
    !u || h == 1 || !a || s == null || !l
      ? (0, Y.jsxs)(M, {
          className: R,
          children: [
            (0, Y.jsx)(wn, { nMonth: r, nYear: n }),
            (0, Y.jsx)(ne, { string: E(`#Loading`), position: `center` }),
          ],
        })
      : l.length == 0
        ? (0, Y.jsxs)(M, {
            className: R,
            children: [
              (0, Y.jsx)(wn, { nMonth: r, nYear: n }),
              (0, Y.jsx)(`div`, {
                className: ft,
                children: E(
                  u.bSQLError
                    ? `#Error_ErrorCommunicatingWithNetwork`
                    : `#SteamCharts_NewMonth_NoRelease`,
                ),
              }),
            ],
          })
        : (0, Y.jsxs)(M, {
            className: R,
            children: [
              (0, Y.jsx)(Wt, {
                rgAppIDs: p,
                nMonth: r,
                bBlurCapsules: !0,
                children: (0, Y.jsx)(wn, { nMonth: r, nYear: n }),
              }),
              (0, Y.jsx)(sn, {
                promotionName: i,
                rgFilteredCombinedAppsAndDLC: p,
                rgFilteredAppIDByTier: d,
                rgFilteredDLCsAppIDs: m,
                facets: a,
              }),
            ],
          })
  );
}
function bn(e, t) {
  return E(
    `#SteamCharts_Monthly_Title_wMonthAndYear`,
    E(`#Sale_Reservation_MonthNoun_` + (e + 1)),
    t,
  );
}
var xn = 2003,
  Sn = 8,
  Cn = 1063584e3;
function wn(e) {
  let { nMonth: t, nYear: n } = e,
    r = mn(),
    i = he() || ve(window),
    a = _(),
    o = t > 0 ? n : n - 1,
    s = t > 0 ? t - 1 : 11,
    c = qt(o, s),
    l = n > xn || t > Sn,
    u = t < 11 ? n : n + 1,
    d = t < 11 ? t + 1 : 0,
    f = qt(u, d),
    p = new Date(d == 11 ? n + 1 : n, d == 11 ? 0 : d + 1, 15),
    m = Math.floor(p.getTime() / 1e3) < a,
    h = (0, q.useCallback)(
      (e) => {
        i.active_modal ||
          (e && m ? r($.TopNewReleases(f)) : !e && l && r($.TopNewReleases(c)));
      },
      [i.active_modal, m, l, r, f, c],
    );
  return (
    g(`ArrowLeft`, () => h(!1), !0, !0),
    g(`Left`, () => h(!1), !0, !0),
    g(`ArrowRight`, () => h(!0), !0, !0),
    g(`Right`, () => h(!0), !0, !0),
    (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsx)(`div`, {
          className: T(vt, yt),
          children: (0, Y.jsx)(`h1`, { children: bn(t, n) }),
        }),
        (0, Y.jsxs)(`div`, {
          className: T(_t),
          children: [
            E(`#SteamCharts_Monthly_SubTitle`, rt(n)),
            (0, Y.jsx)(`br`, {}),
            (0, Y.jsx)(`span`, {
              children: E(`#SteamCharts_Monthly_PublishSchedule`),
            }),
          ],
        }),
        (0, Y.jsxs)(M, {
          className: T(Dt),
          children: [
            (0, Y.jsx)(C, {
              toolTipContent: bn(s, o),
              children: (0, Y.jsx)(`div`, {
                className: T({ [U]: !0, [G]: !l }),
                children: l
                  ? (0, Y.jsx)(Z, {
                      to: l ? $.TopNewReleases(c) : void 0,
                      className: W,
                      children: (0, Y.jsx)(`div`, {
                        className: K,
                        children: `\xA0`,
                      }),
                    })
                  : (0, Y.jsx)(`div`, {
                      className: W,
                      children: (0, Y.jsx)(`div`, {
                        className: K,
                        children: `\xA0`,
                      }),
                    }),
              }),
            }),
            (0, Y.jsx)(C, {
              toolTipContent: bn(d, u),
              children: (0, Y.jsx)(`div`, {
                className: T({ [U]: !0, [G]: !m }),
                children: m
                  ? (0, Y.jsx)(Z, {
                      to: $.TopNewReleases(f),
                      className: W,
                      children: (0, Y.jsx)(`div`, {
                        className: kt,
                        children: `\xA0`,
                      }),
                    })
                  : (0, Y.jsx)(`div`, {
                      className: W,
                      children: (0, Y.jsx)(`div`, {
                        className: kt,
                        children: `\xA0`,
                      }),
                    }),
              }),
            }),
            (0, Y.jsx)(Nt, {
              toolTipContent: E(`#SteamCharts_Monthly_Calendar`),
              minDate: Cn,
              maxDate: Gt(a),
              value: Math.floor(new Date(n, t, 15, 12, 0, 0).getTime() / 1e3),
              fnOnUpdate: (e) => {
                let t = new Date(e * 1e3),
                  n = qt(t.getFullYear(), t.getMonth());
                r($.TopNewReleases(n));
              },
            }),
          ],
        }),
      ],
    })
  );
}
function Tn(e) {
  if (!e) return ``;
  let t = new Date(e * 1e3);
  return `${t.getUTCFullYear()}-${t.getUTCMonth() + 1}-${t.getUTCDate()}`;
}
function En(e) {
  return e || `global`;
}
var Dn = 2,
  On = 60,
  kn = 2022;
function An(e, t) {
  let n = new Date(e * 1e3),
    r = `America/Los_Angeles`,
    i = Number(
      new Intl.DateTimeFormat(`en-US`, { timeZone: r, year: `numeric` }).format(
        n,
      ),
    ),
    a =
      new Date(
        new Intl.DateTimeFormat(`en-US`, {
          timeZone: r,
          year: `numeric`,
          month: `2-digit`,
          day: `2-digit`,
        })
          .formatToParts(new Date(Date.UTC(i, 11, 31)))
          .reduce((e, t) => ((e[t.type] = t.value), e), {}).year +
          `-12-31T10:00:00`,
      ).getTime() -
      t * 24 * 60 * 60 * 1e3;
  return n.getTime() >= a;
}
function jn(e, t, n) {
  let r = t * 1e3,
    i = new Date(r).getUTCFullYear();
  return (
    e >= kn &&
    e < i + 1 &&
    (e != i || (n && Se.is_support && An(t, On)) || An(t, Dn))
  );
}
function Mn(e, t) {
  let n = new Date().getUTCFullYear(),
    r = [];
  for (let i = n, a = 0; i >= kn && a < t; i--, a++)
    jn(i, e, !1) ? r.push(i) : a--;
  return r;
}
function Nn(e) {
  let {
    TopSellersStore: t,
    TopMonthlyReleasesStore: n,
    DynamicUserStore: r,
    children: i,
  } = e;
  Ge(pt);
  let a = Pn(r),
    o = q.useMemo(() => ({ content_descriptors_excluded: a }), [a]),
    s = q.useRef(null);
  return (
    q.useEffect(() => {
      s.current && s.current.NavTree()?.Activate(!0);
    }, []),
    (0, Y.jsxs)(M, {
      className: mt,
      navRef: s,
      children: [
        (0, Y.jsx)(`div`, {
          className: St,
          children: (0, Y.jsx)(`div`, {
            className: Ct,
            children: (0, Y.jsxs)(M, {
              className: wt,
              children: [
                (0, Y.jsx)(M, {
                  className: z,
                  children: (0, Y.jsx)(`div`, {
                    className: B,
                    children: (0, Y.jsxs)(X, {
                      to: $.Overview(),
                      exact: !0,
                      activeClassName: H,
                      children: [
                        (0, Y.jsx)(`span`, {
                          className: T(void 0),
                          children: (0, Y.jsx)(ge, {}),
                        }),
                        E(`#SteamCharts_Menu_Overview`),
                      ],
                    }),
                  }),
                }),
                (0, Y.jsx)(x, { children: (0, Y.jsx)(Fn, {}) }),
                (0, Y.jsx)(x, {
                  children: (0, Y.jsx)(In, { TopSellersStore: t }),
                }),
                (0, Y.jsx)(x, {
                  children: (0, Y.jsx)(Ln, { TopMonthlyReleasesStore: n }),
                }),
                (0, Y.jsx)(x, { children: (0, Y.jsx)(Rn, {}) }),
              ],
            }),
          }),
        }),
        (0, Y.jsx)(`div`, {
          className: T(ht, `SteamChartsShell`),
          children: (0, Y.jsx)(`div`, {
            className: gt,
            children: (0, Y.jsx)(Ve, {
              defaultOptions: o,
              children: (0, Y.jsx)(x, { children: i }),
            }),
          }),
        }),
      ],
    })
  );
}
function Pn(e) {
  return l(() => e.ExcludedContentDescriptor);
}
function Fn() {
  return (0, Y.jsxs)(M, {
    className: z,
    children: [
      (0, Y.jsx)(`div`, {
        className: V,
        children: E(`#SteamCharts_Menu_LiveCharts`),
      }),
      (0, Y.jsxs)(M, {
        className: B,
        children: [
          (0, Y.jsxs)(X, {
            className: void 0,
            to: $.TopSelling(F.COUNTRY),
            activeClassName: H,
            children: [(0, Y.jsx)(be, {}), E(`#SteamCharts_Menu_TopSelling`)],
          }),
          (0, Y.jsxs)(X, {
            className: void 0,
            to: $.MostPlayed(),
            activeClassName: H,
            children: [(0, Y.jsx)(ue, {}), E(`#SteamCharts_Menu_MostPlayed`)],
          }),
          (0, Y.jsxs)(X, {
            className: void 0,
            to: $.MostPlayedOnSteamDeck(),
            activeClassName: H,
            children: [
              (0, Y.jsx)(ye, {}),
              E(`#SteamCharts_Menu_MostPlayedOnDeck`),
            ],
          }),
        ],
      }),
    ],
  });
}
function In(e) {
  let { TopSellersStore: t } = e,
    { rtCurrentWeek: n, bCountryListInitialized: r } = nt(t, F.COUNTRY);
  if (!n || !r) return null;
  let i = En(t.BIsValidTopSellersCountry(F.COUNTRY) ? F.COUNTRY : ``),
    a = [];
  for (let e = 0; e < 3; e++) {
    let t = n - e * 60 * 60 * 24 * 7;
    a.push(
      (0, Y.jsxs)(
        X,
        {
          to: $.TopSellers(i, Tn(t)),
          activeClassName: H,
          fnCanTakeFocus: pe,
          children: [
            (0, Y.jsx)(`span`, {
              className: T(void 0),
              children: (0, Y.jsx)(_e, { color: `#C3D3D8` }),
            }),
            je(t, { timeZone: `UTC` }),
          ],
        },
        t,
      ),
    );
  }
  return (0, Y.jsxs)(M, {
    className: T(z, Tt),
    children: [
      (0, Y.jsx)(`div`, {
        className: V,
        children: E(`#SteamCharts_Menu_WeeklyCharts`),
      }),
      (0, Y.jsx)(M, { className: B, children: a }),
    ],
  });
}
function Ln(e) {
  let t = Gt(_()),
    n = [t, t - 2592e3, t - 5184e3];
  return (0, Y.jsxs)(M, {
    className: T(z, Et),
    children: [
      (0, Y.jsx)(`div`, {
        className: V,
        children: E(`#SteamCharts_Menu_MonthlyCharts`),
      }),
      (0, Y.jsx)(M, {
        className: B,
        children: n.map((e) => {
          let t = new Date(e * 1e3),
            n = qt(t.getFullYear(), t.getMonth()),
            r = $.TopNewReleases(n),
            i = window.location.pathname === r;
          return (0, Y.jsxs)(
            X,
            {
              className: i ? H : ``,
              to: r,
              fnCanTakeFocus: pe,
              children: [
                (0, Y.jsx)(`span`, {
                  className: T(void 0),
                  children: (0, Y.jsx)(_e, { color: `#C3D3D8` }),
                }),
                Ce(e),
              ],
            },
            `month_` + e,
          );
        }),
      }),
    ],
  });
}
function Rn(e) {
  let t = _(),
    n = (0, q.useMemo)(() => Mn(t, 3), [t]);
  return (0, Y.jsxs)(M, {
    className: T(z, Et),
    children: [
      (0, Y.jsx)(`div`, {
        className: V,
        children: E(`#SteamCharts_Menu_YearlyCharts`),
      }),
      (0, Y.jsx)(M, {
        className: B,
        children: n.map((e) => {
          let t = $.BestOfYear(`` + e),
            n = window.location.pathname === t;
          return (0, Y.jsxs)(
            Z,
            {
              className: T(n ? H : ``),
              to: t,
              fnCanTakeFocus: pe,
              children: [
                (0, Y.jsx)(`span`, {
                  className: T(void 0),
                  children: (0, Y.jsx)(_e, { color: `#C3D3D8` }),
                }),
                e,
              ],
            },
            e,
          );
        }),
      }),
    ],
  });
}
function zn(e, t, n) {
  let r = ce(h, 1, `` + e, ie()),
    i = { ...v(`tabs`, ``), tabs: [] };
  return (
    n.forEach((e, t) => {
      i.tabs.push({
        unique_id: t + 1,
        default_label: e.strTabTitleToken,
        localized_label: [],
        capsules: [],
      });
    }),
    (r.jsondata.sale_sections = [i]),
    n.forEach((n, a) => {
      let {
          rgFilteredCombinedAppsAndDLC: o,
          rgFilteredAppIDByTier: s,
          rgFilteredDLCsAppIDs: c,
        } = n,
        l = new Set(c),
        u = [...c, ...o];
      r.jsondata.sale_sections.push({
        ...v(`text_section`, ``),
        text_section_contents: [E(n.strTabSubTitleToken, e, e + 1)],
        show_on_tabs: [a + 1],
        show_deck_compability_details: !!n.bShowDeckCompat,
        prefer_assets_without_overrides: !0,
      });
      for (let e in s) {
        let t = s[e];
        r.jsondata.sale_sections.push({
          ...v(`items`, `#SteamCharts_Yearly_Rank_` + e),
          capsules: t.map((e) => ({ id: e, type: l.has(e) ? `dlc` : `game` })),
          capsules_per_row_array: e == `3` || e == `0` ? [4] : [3],
          capsule_style_per_row_array: e == `0` ? [`tall`] : [`grid`],
          show_as_carousel: !1,
          use_random_order: !0,
          border_width: 1,
          default_subtitle: `#SteamCharts_Yearly_Rank_` + e + `_subtitle`,
          show_on_tabs: [i.tabs[a].unique_id],
          sale_section_classname: $t(Number.parseInt(e)),
          prefer_assets_without_overrides: !0,
          show_deck_compability_details: !!n.bShowDeckCompat,
          show_as_demos: !!n.bShowDemoInfo,
          prefer_demo_store_page: !!n.bShowDemoInfo,
        });
      }
      tn(
        r,
        u,
        c,
        l,
        !0,
        i.tabs[a].unique_id,
        !!n.bShowDeckCompat,
        !!n.bShowDemoInfo,
      ),
        rn(
          r,
          o,
          s,
          l,
          !0,
          i.tabs[a].unique_id,
          !!n.bShowDeckCompat,
          !!n.bShowDemoInfo,
        ),
        en(
          r,
          o,
          t,
          l,
          !0,
          i.tabs[a].unique_id,
          !!n.bShowDeckCompat,
          !!n.bShowDemoInfo,
        );
    }),
    r.jsondata.sale_sections.push({
      ...v(`text_section`, ``),
      text_section_contents: [
        E(`#SteamCharts_Yearly_FAQ`) +
          `
[url=${F.HELP_BASE_URL}faqs/view/6C17-2BC1-2A01-9B76]${E(`#SteamCharts_Yearly_FAQ_link`)}[/url]`,
      ],
    }),
    r.jsondata.sale_sections.push({
      ...v(`social_share`, `#EventDisplay_Share_WithFriendsHeader`),
      social_share: le(),
    }),
    r
  );
}
function Bn(e, t, n) {
  let { data: r } = c({
    queryKey: [`useYearEventModel`, e],
    queryFn: () => {
      try {
        return zn(e, t, n);
      } catch (t) {
        return console.error(`Yearly new release: ${e} failed: `, t), null;
      }
    },
  });
  return r;
}
function Vn(e) {
  let { rgTabsData: t, nYear: n, facets: r } = e,
    i = Bn(n, r, t),
    a = Ne(F.LANGUAGE);
  return i
    ? (0, Y.jsx)(ee, {
        eventModel: i,
        language: a,
        bIsPreview: !1,
        bDynamicallyCreatedSale: !0,
      })
    : i === null
      ? (0, Y.jsx)(`div`, {
          className: ae,
          children: E(`#Error_ErrorCommunicatingWithNetwork`),
        })
      : (0, Y.jsx)(ne, { string: E(`#Loading`), position: `center` });
}
function Hn(e) {
  let { salePageName: t, TopYearlyReleasesStore: n } = e,
    r = _(),
    i = Number.parseInt(t),
    a = mn();
  return jn(i, r, !0)
    ? (0, Y.jsx)(Kn, { nYear: i, TopYearlyReleasesStore: n })
    : (a($.Overview(), { bReplace: !0 }),
      (0, Y.jsx)(`div`, { children: E(`#SteamCharts_Yearly_Unavailable`) }));
}
var Un = {
  ...se,
  apply_user_filters: !0,
  include_assets_without_overrides: !0,
};
function Q(e, t, n, r) {
  let i = r?.filter((t) => t.type == e),
    a = [],
    o = [];
  return {
    strTabTitleToken: t,
    strTabSubTitleToken: n,
    rgFilteredCombinedAppsAndDLC: i
      ?.filter((e) => !D.Get().BIsAppMissing(e.appid))
      .map((e) => {
        let t = e.app_release_rank;
        return (
          t == 4 && (t = 0),
          a[t] || (a[t] = []),
          a[t].push(e.appid),
          D.Get().GetApp(e.appid)?.GetAppType() == 4 && o.push(e.appid),
          e.appid
        );
      }),
    rgFilteredAppIDByTier: a,
    rgFilteredDLCsAppIDs: o,
  };
}
function Wn(e, t) {
  let n = e + 1,
    r = new Date(Date.UTC(n, 0, t, 1, 0, 0)),
    i = new Intl.DateTimeFormat(`en-US`, {
      timeZone: `America/Los_Angeles`,
      year: `numeric`,
      month: `2-digit`,
      day: `2-digit`,
      hour: `2-digit`,
      minute: `2-digit`,
      second: `2-digit`,
      hour12: !1,
    }).formatToParts(r),
    a = (e) => Number(i.find((t) => t.type === e).value),
    o = Date.UTC(
      a(`year`),
      a(`month`) - 1,
      a(`day`),
      a(`hour`),
      a(`minute`),
      a(`second`),
    );
  return Math.floor(o / 1e3);
}
function Gn(e, t, n) {
  let r = _(),
    i = r < Wn(t, 1),
    a = r < Wn(t, 15),
    o = lt(e, t),
    s = (0, q.useMemo)(
      () =>
        o
          ? Array.from(
              new Set([
                ...(o.top_dlc_releases?.map((e) => e.appid) || []),
                ...(o.top_combined_app_and_dlc_releases?.map((e) => e.appid) ||
                  []),
                ...(o.top_app_list?.map((e) => e.appid) || []),
              ]),
            )
          : (n && n(null), []),
      [o, n],
    ),
    c = oe(s, Un);
  return {
    rgAppIDs: s,
    rgYearlyReleases: o,
    rgTabsData: (0, q.useMemo)(() => {
      if (!o || c == 1) return [];
      let e = o?.top_combined_app_and_dlc_releases || [],
        t = [],
        n = e
          .filter((e) => !D.Get().BIsAppMissing(e.appid))
          .map((e) => {
            let n = e.app_release_rank;
            return (
              n == 4 && (n = 0),
              t[n] || (t[n] = []),
              t[n].push(e.appid),
              e.appid
            );
          }),
        r = [
          {
            strTabTitleToken: `#SteamCharts_Yearly_Tab_NewReleases`,
            strTabSubTitleToken: a
              ? `#SteamCharts_Yearly_Tab_NewReleases_desc_pre`
              : `#SteamCharts_Yearly_Tab_NewReleases_desc`,
            rgFilteredDLCsAppIDs:
              o.top_dlc_releases
                ?.filter((e) => !D.Get().BIsAppMissing(e.appid))
                .map((e) => e.appid) || [],
            rgFilteredCombinedAppsAndDLC: n,
            rgFilteredAppIDByTier: t,
          },
        ],
        s = Q(
          1,
          `#SteamCharts_Yearly_Tab_TopSellers`,
          i
            ? `#SteamCharts_Yearly_Tab_TopSellers_desc_pre`
            : `#SteamCharts_Yearly_Tab_TopSellers_desc`,
          o.top_app_list,
        );
      return (
        s.rgFilteredCombinedAppsAndDLC?.length > 0 && r.push(s),
        (s = Q(
          2,
          `#SteamCharts_Yearly_Tab_MostPlayed`,
          `#SteamCharts_Yearly_Tab_MostPlayed_desc`,
          o.top_app_list,
        )),
        s.rgFilteredCombinedAppsAndDLC?.length > 0 && r.push(s),
        (s = Q(
          3,
          `#SteamCharts_Yearly_Tab_SteamDeck`,
          `#SteamCharts_Yearly_Tab_SteamDeck_desc`,
          o.top_app_list,
        )),
        s.rgFilteredCombinedAppsAndDLC?.length > 0 &&
          ((s.bShowDeckCompat = !0), r.push(s)),
        (s = Q(
          4,
          `#SteamCharts_Yearly_Tab_Controller`,
          `#SteamCharts_Yearly_Tab_Controller_desc`,
          o.top_app_list,
        )),
        s.rgFilteredCombinedAppsAndDLC?.length > 0 && r.push(s),
        (s = Q(
          5,
          `#SteamCharts_Yearly_Tab_VR`,
          `#SteamCharts_Yearly_Tab_VR_desc`,
          o.top_app_list,
        )),
        s.rgFilteredCombinedAppsAndDLC?.length > 0 && r.push(s),
        (s = Q(
          6,
          `#SteamCharts_Yearly_Tab_Demo`,
          `#SteamCharts_Yearly_Tab_Demo_desc`,
          o.top_app_list,
        )),
        s.rgFilteredCombinedAppsAndDLC?.length > 0 &&
          ((s.bShowDemoInfo = !0), r.push(s)),
        r
      );
    }, [o, c, i, a]),
    loadState: c,
  };
}
function Kn(e) {
  let { nYear: t, TopYearlyReleasesStore: n } = e,
    [r, i] = (0, q.useState)(null),
    [a, o] = (0, q.useState)(null),
    {
      rgAppIDs: s,
      rgYearlyReleases: c,
      rgTabsData: l,
      loadState: u,
    } = Gn(n, t);
  return (
    (0, q.useEffect)(() => {
      a || f({ bForceFeatureTagForFullController: !1 }).then(o);
    }, [a]),
    cn(r, i, l?.[0]?.rgFilteredDLCsAppIDs, u),
    !c || u == 1 || !a || r == null || !s
      ? (0, Y.jsxs)(M, {
          className: R,
          children: [
            (0, Y.jsx)(qn, { nYear: t }),
            (0, Y.jsx)(ne, { string: E(`#Loading`), position: `center` }),
          ],
        })
      : s.length == 0
        ? (0, Y.jsxs)(M, {
            className: R,
            children: [
              (0, Y.jsx)(qn, { nYear: t }),
              (0, Y.jsx)(`div`, {
                className: ft,
                children: E(`#Error_ErrorCommunicatingWithNetwork`),
              }),
            ],
          })
        : (0, Y.jsxs)(M, {
            className: R,
            children: [
              (0, Y.jsx)(Wt, {
                rgAppIDs: l[0].rgFilteredCombinedAppsAndDLC,
                bTallCapsule: !0,
                bBlurCapsules: !1,
                children: (0, Y.jsx)(qn, { nYear: t }),
              }),
              (0, Y.jsx)(Vn, { facets: a, nYear: t, rgTabsData: l }),
            ],
          })
  );
}
function qn(e) {
  let { nYear: t } = e,
    n = mn(),
    r = _(),
    [i] = te(`tab`, 1),
    a = t + 1,
    o = jn(a, r, !0),
    s = t - 1,
    c = jn(s, r, !0),
    l = he() || ve(window),
    u = (0, q.useCallback)(
      (e) => {
        l.active_modal ||
          (e && o
            ? n($.BestOfYear(`` + a))
            : !e && c && n($.BestOfYear(`` + s)));
      },
      [l.active_modal, o, c, n, a, s],
    );
  g(`ArrowLeft`, () => u(!1), !0, !0),
    g(`Left`, () => u(!1), !0, !0),
    g(`ArrowRight`, () => u(!0), !0, !0),
    g(`Right`, () => u(!0), !0, !0);
  let d = i == 1 ? `` : `?tab=${i}`;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(`div`, {
        className: bt,
        children: [
          (0, Y.jsx)(`svg`, {
            viewBox: `0 0 100 100`,
            className: xt,
            children: (0, Y.jsx)(`polygon`, { points: `50,35 100,100 0,100` }),
          }),
          (0, Y.jsx)(`div`, {
            className: T(vt, yt),
            children: (0, Y.jsx)(`h1`, {
              children: E(`#SteamCharts_Yearly_Title`, t),
            }),
          }),
          (0, Y.jsxs)(`div`, {
            className: T(_t),
            children: [
              E(`#SteamCharts_Yearly_SubTitle`, 100),
              (0, Y.jsx)(`br`, {}),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(M, {
        className: T(Dt, Ot),
        children: [
          (0, Y.jsx)(C, {
            toolTipContent: E(`#SteamCharts_Yearly_Title`, s),
            children: (0, Y.jsx)(`div`, {
              className: T({ [U]: !0, [G]: !c }),
              children: c
                ? (0, Y.jsx)(Z, {
                    to: $.BestOfYear(`` + s) + d,
                    className: W,
                    children: (0, Y.jsx)(`div`, {
                      className: K,
                      children: `\xA0`,
                    }),
                  })
                : (0, Y.jsx)(`div`, {
                    className: W,
                    children: (0, Y.jsx)(`div`, {
                      className: K,
                      children: `\xA0`,
                    }),
                  }),
            }),
          }),
          (0, Y.jsx)(C, {
            toolTipContent: E(`#SteamCharts_Yearly_Title`, a),
            children: (0, Y.jsx)(`div`, {
              className: T({ [U]: !0, [G]: !o }),
              children: o
                ? (0, Y.jsx)(Z, {
                    to: $.BestOfYear(`` + a) + d,
                    className: W,
                    children: (0, Y.jsx)(`div`, {
                      className: kt,
                      children: `\xA0`,
                    }),
                  })
                : (0, Y.jsx)(`div`, {
                    className: W,
                    children: (0, Y.jsx)(`div`, {
                      className: kt,
                      children: `\xA0`,
                    }),
                  }),
            }),
          }),
        ],
      }),
    ],
  });
}
var $ = {
  Overview: () => `${b.SteamCharts()}`,
  MostPlayed: () => `${b.SteamCharts()}mostplayed`,
  MostPlayedOnSteamDeck: (e) =>
    `${b.SteamCharts()}steamdecktopplayed${e ? `/` + e : ``}`,
  TopSelling: (e) => `${b.SteamCharts()}topselling/${e}`,
  TopSellers: (e, t) => `${b.SteamCharts()}topsellers/${e}${t ? `/` + t : ``}`,
  TopNewReleases: (e) => `${b.SteamCharts()}topnewreleases/${e}`,
  BestOfYear: (e) => `${b.SteamCharts()}bestofyear/${e}`,
};
async function Jn(e, t) {
  let n = new ut();
  return await n.Initialize(e, t), n;
}
function Yn(e) {
  let [t, i] = (0, q.useState)(void 0),
    a = Fe(),
    o = Le();
  if (
    ((0, q.useEffect)(() => {
      Jn(a, o).then((e) => i(e));
    }, [a, o]),
    !t)
  )
    return null;
  let s = $,
    {
      TopSellersStore: c,
      DynamicUserStore: l,
      TopMonthlyReleasesStore: u,
      TopYearlyReleasesStore: d,
    } = t;
  return (0, Y.jsxs)(Nn, {
    TopSellersStore: c,
    DynamicUserStore: l,
    TopMonthlyReleasesStore: u,
    children: [
      (0, Y.jsx)(Xn, {}),
      (0, Y.jsx)(Oe, {
        domain: `store.steampowered.com`,
        controller: `steamcharts`,
        children: (0, Y.jsx)(q.Suspense, {
          fallback: null,
          children: (0, Y.jsxs)(r, {
            children: [
              (0, Y.jsx)(n, {
                path: `${s.TopNewReleases(`:salePagename`)}`,
                render: (e) => {
                  let {
                    match: {
                      params: { salePagename: t },
                    },
                  } = e;
                  return (0, Y.jsx)(Oe, {
                    method: `monthlytopreleases`,
                    children: (0, Y.jsx)(x, {
                      children: (0, Y.jsx)(gn, {
                        salePageName: t,
                        TopMonthlyReleasesStore: u,
                      }),
                    }),
                  });
                },
              }),
              (0, Y.jsx)(n, {
                path: `${s.BestOfYear(`:salePagename`)}`,
                render: (e) => {
                  let {
                    match: {
                      params: { salePagename: t },
                    },
                  } = e;
                  return (0, Y.jsx)(Oe, {
                    method: `bestofyear`,
                    children: (0, Y.jsx)(x, {
                      children: (0, Y.jsx)(Hn, {
                        salePageName: t,
                        TopYearlyReleasesStore: d,
                      }),
                    }),
                  });
                },
              }),
              (0, Y.jsx)(n, { children: (0, Y.jsx)(ze, {}) }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Xn() {
  let { pathname: e } = o();
  return (
    q.useEffect(() => {
      window.ScrollToTopStoreMobileAware === void 0
        ? window.scrollTo(0, 0)
        : window.ScrollToTopStoreMobileAware();
    }, [e]),
    null
  );
}
export { $ as SteamChartsRoutes, Yn as default };
