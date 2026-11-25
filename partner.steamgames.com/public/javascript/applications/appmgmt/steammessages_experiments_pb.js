/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ct as e,
  K as t,
  Pt as n,
  St as r,
  _t as i,
  bt as a,
  g as o,
  gt as s,
  nt as c,
  vt as l,
  wt as u,
  xt as d,
  y as f,
  yt as p,
} from "./chunk~de7f2df91c.js";
import { i as m } from "./chunk~8fb30ea08b.js";
import { t as h } from "./chunk~ede3e357a2.js";
import { t as g } from "./chunk~6257ebd2d4.js";
var _ = n(c(), 1),
  v = `saleaction/creategiveawayregistration`;
async function y(e) {
  let t =
    o.STORE_BASE_URL +
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
  let t = o.STORE_BASE_URL + v;
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
  let { data: t, isError: n } = h(w(e, f.accountid));
  return n ? S : t;
}
function E() {
  let e = m(),
    { mutateAsync: t } = g({
      mutationFn: b,
      onSuccess: (t, n) => e.setQueryData(C(n, f.accountid), t),
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
var D = n(u(), 1),
  O = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.impressions || s(e.M()),
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new D.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification`;
    }
  },
  k = class t extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.type || s(t.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            type: { n: 1, br: p.readEnum, bw: e.writeEnum },
            appid: { n: 2, br: p.readUint32, bw: e.writeUint32 },
            num_impressions: { n: 3, br: p.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new D.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification_Impression`;
    }
  },
  A;
(function (e) {
  function n(e, n) {
    return e.SendNotification(
      `ExperimentService.ReportProductImpressionsFromClient#1`,
      t(O, n),
      { ePrivilege: 1 },
    );
  }
  e.ReportProductImpressionsFromClient = n;
})((A ||= {}));
export { T as n, E as t };
