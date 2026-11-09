/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, Pt as n, dt as r, ot as i, st as a } from "./libraries.js";
import {
  $x as o,
  Gb as s,
  Hb as c,
  Qx as l,
  Xx as u,
  Yx as d,
  Zx as f,
  eS as p,
  hx as m,
  nS as h,
  tS as g,
} from "./main.js";
var _ = e(t(), 1),
  v = `saleaction/creategiveawayregistration`;
async function y(e) {
  let t =
    c.STORE_BASE_URL +
    `saleaction/giveawayregistration?name=` +
    encodeURIComponent(e);
  return await x(
    `GetUserGiveawayRegistration`,
    e,
    t,
    await fetch(t, { credentials: `include` }),
  );
}
async function b(e) {
  let t = c.STORE_BASE_URL + v;
  return await x(
    `UpdateUserGiveawayRegistration`,
    e,
    t,
    await fetch(t, {
      method: `POST`,
      credentials: `include`,
      headers: { "content-type": `application/json` },
      body: JSON.stringify({ name: e }),
    }),
  );
}
async function x(e, t, n, r) {
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success == 1 && i.registration) return i.registration;
  throw Error(e + ` on ` + t + ` answered ` + i?.success);
}
var S = { registered: !1 };
function C(e, t) {
  return [`sale`, `giveawayregistration`, e, t];
}
function w(e, t) {
  return { queryKey: C(e, t), queryFn: () => y(e), enabled: !!e, retry: !1 };
}
function T(e) {
  let { data: t, isError: n } = a(w(e, s.accountid));
  return n ? S : t;
}
function E() {
  let e = r(),
    { mutateAsync: t } = i({
      mutationFn: b,
      onSuccess: (t, n) => e.setQueryData(C(n, s.accountid), t),
    });
  return {
    fnCreateRegistration: (0, _.useCallback)(
      async (e) => {
        try {
          return await t(e);
        } catch (t) {
          return (
            console.error(`Registering for giveaway ` + e + ` failed`, t), S
          );
        }
      },
      [t],
    ),
  };
}
var D = e(n(), 1),
  O = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.impressions || d(e.M()),
        D.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { impressions: { n: 1, c: k, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification`;
    }
  },
  k = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.type || d(e.M()),
        D.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: l.readEnum, bw: h.writeEnum },
            appid: { n: 2, br: l.readUint32, bw: h.writeUint32 },
            num_impressions: { n: 3, br: l.readUint32, bw: h.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification_Impression`;
    }
  },
  A;
(function (e) {
  function t(e, t) {
    return e.SendNotification(
      `ExperimentService.ReportProductImpressionsFromClient#1`,
      m(O, t),
      { ePrivilege: 1 },
    );
  }
  e.ReportProductImpressionsFromClient = t;
})((A ||= {}));
export { T as n, E as t };
