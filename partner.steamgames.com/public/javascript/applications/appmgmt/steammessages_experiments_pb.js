/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  Gt as t,
  Jt as n,
  Kt as r,
  Ut as i,
  W as a,
  Wt as o,
  Xt as s,
  Yt as c,
  Zt as l,
  bt as u,
  q as d,
  qt as f,
  sn as p,
} from "./chunk~de7f2df91c.js";
import { i as m } from "./chunk~8fb30ea08b.js";
import { t as h } from "./chunk~ede3e357a2.js";
import { t as g } from "./chunk~6257ebd2d4.js";
var _ = p(e(), 1),
  v = `saleaction/creategiveawayregistration`;
async function y(e) {
  let t =
    a.STORE_BASE_URL +
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
  let t = a.STORE_BASE_URL + v;
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
  let { data: t, isError: n } = h(w(e, d.accountid));
  return n ? S : t;
}
function E() {
  let e = m(),
    { mutateAsync: t } = g({
      mutationFn: b,
      onSuccess: (t, n) => e.setQueryData(C(n, d.accountid), t),
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
var D = p(l(), 1),
  O = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.impressions || i(e.M()),
        D.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification`;
    }
  },
  k = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || i(e.M()),
        D.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: r.readEnum, bw: s.writeEnum },
            appid: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            num_impressions: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
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
      u(O, t),
      { ePrivilege: 1 },
    );
  }
  e.ReportProductImpressionsFromClient = t;
})((A ||= {}));
export { T as n, E as t };
