import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~8fb30ea08b.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _ } from "./chunk~6257ebd2d4.js";
var _ = _(_(), 1),
  _ = `saleaction/creategiveawayregistration`;
async function _(_) {
  let _ =
    _.STORE_BASE_URL +
    `saleaction/giveawayregistration?name=` +
    encodeURIComponent(_);
  return await _(
    `GetUserGiveawayRegistration`,
    _,
    _,
    await fetch(_, {
      credentials: `include`,
    }),
  );
}
async function _(_) {
  let _ = _.STORE_BASE_URL + _;
  return await _(
    `UpdateUserGiveawayRegistration`,
    _,
    _,
    await fetch(_, {
      method: `POST`,
      credentials: `include`,
      headers: {
        "content-type": `application/json`,
      },
      body: JSON.stringify({
        name: _,
      }),
    }),
  );
}
async function _(_, _, _, _) {
  if (!_._) throw Error(_ + ` answered ` + _.status);
  let _ = await _.json();
  if (_?.success == 1 && _.registration) return _.registration;
  throw Error(_ + ` on ` + _ + ` answered ` + _?.success);
}
var _ = {
  registered: !1,
};
function _(_, _) {
  return [`sale`, `giveawayregistration`, _, _];
}
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => _(_),
    enabled: !!_,
    retry: !1,
  };
}
function _(_) {
  let { data: _, isError: _ } = _(_(_, _.accountid));
  return _ ? _ : _;
}
function _() {
  let _ = _(),
    { mutateAsync: _ } = _({
      mutationFn: _,
      onSuccess: (_, _) => _.setQueryData(_(_, _.accountid), _),
    });
  return {
    fnCreateRegistration: (0, _.useCallback)(
      async (_) => {
        try {
          return await _(_);
        } catch (_) {
          return (
            console.error(`Registering for giveaway ` + _ + ` failed`, _), _
          );
        }
      },
      [_],
    ),
  };
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.impressions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            impressions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_impressions: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification_Impression`;
    }
  },
  _;
(function (_) {
  function _(_, _) {
    return _.SendNotification(
      `ExperimentService.ReportProductImpressionsFromClient#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportProductImpressionsFromClient = _;
})((_ ||= {}));
