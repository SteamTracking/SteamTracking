/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Pt as t, dt as n, ot as r, st as i } from "./chunk~01cfc309bf.js";
import {
  Xb as a,
  aS as o,
  bx as s,
  eS as c,
  fy as l,
  iS as u,
  ly as d,
  nS as f,
  oS as p,
  qb as m,
  rS as h,
  sS as g,
  tS as _,
  yx as v,
  zx as y,
} from "./main.js";
var b = e(t(), 1),
  x = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || c(e.M()),
        b.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: h.readInt32,
              pbr: h.readPackedInt32,
              bw: g.writeRepeatedInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateAppList`;
    }
  },
  S = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || c(e.M()),
        b.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: h.readInt32,
              pbr: h.readPackedInt32,
              bw: g.writeRepeatedInt32,
            },
            private: { n: 2, br: h.readBool, bw: g.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApps_ToggleAppPrivacy_Request`;
    }
  },
  C = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), b.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApps_ToggleAppPrivacy_Response`;
    }
  },
  w = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), b.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApps_GetPrivateAppList_Request`;
    }
  },
  T = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.private_apps || c(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { private_apps: { n: 1, c: x } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApps_GetPrivateAppList_Response`;
    }
  },
  E = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.private_apps || c(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { private_apps: { n: 1, c: x } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification`;
    }
  },
  D;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountPrivateApps.ToggleAppPrivacy#1`, s(S, t, n), C, {
      ePrivilege: 1,
    });
  }
  e.ToggleAppPrivacy = t;
  function n(e, t, n) {
    return e.SendMsg(`AccountPrivateApps.GetPrivateAppList#1`, s(w, t, n), T, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPrivateAppList = n;
})((D ||= {}));
var O;
(function (e) {
  e.NotifyPrivateAppListChangedHandler = {
    name: `AccountPrivateAppsClient.NotifyPrivateAppListChanged#1`,
    request: E,
  };
})((O ||= {}));
function k() {
  return `PrivateApps_` + a.accountid;
}
function A() {
  return m.IN_STEAMUI;
}
async function j(e) {
  let t = k();
  return await e.GetObject(t);
}
async function M(e, t) {
  try {
    let n = k();
    await e.StoreObject(n, t);
  } catch (e) {
    let t = Error(
      `WritePrivateAppsToLocalCache failed with result ${e?.result}, ${e?.message}`,
    );
    (y().ReportError(t, { bIncludeMessageInIdentifier: !0 }), console.warn(t));
  }
}
var N = [`AccountPrivateApps`];
function P(e) {
  let { transport: t, storage: n, bUseLocalCache: r, bEnabled: i } = e;
  return {
    queryKey: N,
    queryFn: async () => {
      let e;
      r && (e = await j(n));
      let i = v.Init(w),
        a = await D.GetPrivateAppList(t, i);
      if (!a.BSuccess()) {
        if (e) return new Set(e);
        throw a.GetErrorMessage();
      }
      return (
        r && (await M(n, a.Body().private_apps(!0).appids())),
        new Set(a.Body().private_apps(!0).appids())
      );
    },
    enabled: i,
  };
}
function F() {
  let e = d(),
    t = l(),
    n = A();
  return i(
    P({ transport: e, storage: t, bUseLocalCache: n, bEnabled: !!a.accountid }),
  );
}
function I(e) {
  let { data: t } = F();
  return !a.accountid || !e ? !1 : t ? t.has(e) : void 0;
}
function L(e) {
  let t = d(),
    i = n(),
    a = A(),
    o = l();
  return r({
    mutationFn: async (n) => z(t, [e], n),
    onSuccess: (t, n) => B(i, [e], n, a ? o : null),
  });
}
function R() {
  let e = d(),
    t = n(),
    i = A(),
    a = l();
  return r({
    mutationFn: async (t) => {
      let { rgAppIDs: n, bPrivate: r } = t;
      return z(e, n, r);
    },
    onSuccess: (e, n) => {
      let { rgAppIDs: r, bPrivate: o } = n;
      B(t, r, o, i ? a : null);
    },
  });
}
async function z(e, t, n) {
  let r = v.Init(S);
  (r.Body().set_appids(t.slice()), r.Body().set_private(n));
  let i = await D.ToggleAppPrivacy(e, r);
  if (!i.BSuccess()) throw i.GetErrorMessage();
}
function B(e, t, n, r) {
  e.setQueryData(N, (e) => {
    if (!e) return;
    let i = new Set(e);
    return (
      t.forEach((e) => {
        n ? i.add(e) : i.delete(e);
      }),
      r && M(r, Array.from(i.values())),
      i
    );
  });
}
export { L as i, I as n, F as r, R as t };
