/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  K as r,
  Kt as i,
  U as a,
  Ut as o,
  Wt as s,
  Xt as c,
  Yt as l,
  kt as u,
  on as d,
  qt as f,
  yt as p,
} from "./mobx.esm.js";
import { i as m } from "./utils.js";
import { t as h } from "./useQuery.js";
import { t as g } from "./useMutation.js";
var _ = d(u(), 1),
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
  let { data: t, isError: n } = h(w(e, r.accountid));
  return n ? S : t;
}
function E() {
  let e = m(),
    { mutateAsync: t } = g({
      mutationFn: b,
      onSuccess: (t, n) => e.setQueryData(C(n, r.accountid), t),
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
var D = d(c(), 1),
  O = class e extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        e.prototype.impressions || t(e.M()),
        D.Message.initialize(this, n, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new D.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification`;
    }
  },
  k = class r extends D.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.type || t(r.M()),
        D.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            type: { n: 1, br: e.readEnum, bw: l.writeEnum },
            appid: { n: 2, br: e.readUint32, bw: l.writeUint32 },
            num_impressions: { n: 3, br: e.readUint32, bw: l.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= i(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new D.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new D.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      f(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new D.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
      p(O, t),
      { ePrivilege: 1 },
    );
  }
  e.ReportProductImpressionsFromClient = t;
})((A ||= {}));
export { T as n, E as t };
