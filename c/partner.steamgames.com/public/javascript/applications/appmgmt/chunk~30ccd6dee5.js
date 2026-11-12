import { _, _, _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _, _ } from "./chunk~25a6634263.js";
import { _ } from "./chunk~8fb30ea08b.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _ } from "./chunk~726542bc75.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~c55709d290.js";
import { _ } from "./chunk~f8f9713b0c.js";
function _(_) {
  let _ = new Date(_.getTime());
  return (_.setHours(0, 0, 0, 0), _);
}
function _(_) {
  let _ = new Date(_.getTime());
  return (_.setDate(1), _.setHours(0, 0, 0, 0), _);
}
function _(_, _) {
  let _ = new Date(_);
  return (_.setDate(_.getDate() + _), _);
}
function _(_, _) {
  return _.reduce((_, _) => {
    let _ = _(_),
      _ = Math.floor(_.getTime() / 1e3),
      _ = _.get(_) || [];
    return (_.set(_, [..._, _]), _);
  }, new Map());
}
var _ = _(_());
async function _(_) {
  let _ = {
      accountid: _,
      origin: self.origin,
    },
    _ = `${_.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
  _() == `partner` &&
    (_ = `${_.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
  let _ = await _.default.get(_, {
    params: _,
    withCredentials: !0,
  });
  if (!_ || _.status != 200 || _.data?.success != 1 || !_.data?.partners)
    throw `Load single user partner info failed ${_(_).strErrorMsg}`;
  return _.data.partners;
}
function _(_) {
  let { data: _, isLoading: _ } = _({
    queryKey: [`PartnerInfoList`, _],
    queryFn: () => _(_),
  });
  return _ ? null : _;
}
function _(_, _) {
  return _(_)?.find((_) => _.partnerid === _);
}
var _ = _(_()),
  _ = `_0vUrwCDzuXw-`,
  _ = _();
function _(_) {
  let _ = _.getValue();
  return _?.length > 0
    ? (0, _.jsx)(_, {
        text: _,
        regExp: /\r\n|\r|\n/,
      })
    : ``;
}
function _(_) {
  let { text: _, regExp: _ } = _;
  if (!_) return (0, _.jsx)(_.Fragment, {});
  let _ = _.split(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.map((_, _) =>
      (0, _.jsxs)(
        `span`,
        {
          children: [_, _ < _.length - 1 && (0, _.jsx)(`br`, {})],
        },
        _,
      ),
    ),
  });
}
function _(_) {
  return Number.parseInt(_.getValue()) ? `yes` : `no`;
}
function _(_) {
  let _ = Number.parseInt(_.getValue());
  return _(_);
}
function _(_, _, _) {
  let _ = [],
    _ = _.map((_) => _.header);
  _.push(_);
  for (let _ of _) {
    let _ = [];
    for (let _ of _) {
      let _ = _[_.accessorKey];
      _.push(_ == null ? `` : _.toString());
    }
    _.push(_);
  }
  _.WriteCSVToFile(_, _);
}
var _ = class _ {
  m_mapPartnerToContactInfo = new Map();
  m_mapPromisePartnerLoading = new Map();
  async FetchValvePartnerContacts(_) {
    let _ = _.PARTNER_BASE_URL + `actions/ajaxgetpartnervalvecontacts`,
      _ = {
        sessionid: _(),
        strPartnerIDs: _.join(`,`),
      },
      _ = await _.default.get(_, {
        params: _,
        withCredentials: !0,
      });
    return _?.status == 200 && _?.data.success == 1
      ? (_.data.contacts.forEach((_) => {
          (this.m_mapPartnerToContactInfo.has(_.partnerid) ||
            this.m_mapPartnerToContactInfo.set(_.partnerid, []),
            this.m_mapPartnerToContactInfo.get(_.partnerid).push(_));
        }),
        _.data.contacts)
      : [];
  }
  async LoadValvePartnerContact(_) {
    return _
      ? this.m_mapPartnerToContactInfo.has(_)
        ? this.m_mapPartnerToContactInfo.get(_)
        : (this.m_mapPromisePartnerLoading.has(_) ||
            this.m_mapPromisePartnerLoading.set(
              _,
              this.InternalLoadValvePartnerContact(_),
            ),
          this.m_mapPromisePartnerLoading.get(_))
      : [];
  }
  async InternalLoadValvePartnerContact(_) {
    return this.FetchValvePartnerContacts([_]);
  }
  async InternalLoadMultiplePartnerContact(_) {
    return this.FetchValvePartnerContacts(_);
  }
  GetPartnerContact(_) {
    return this.m_mapPartnerToContactInfo.get(_);
  }
  GetPartnerContactAccountsByFilter(_, _, _) {
    let _ = this.m_mapPartnerToContactInfo.get(_);
    if (_?.length > 0) {
      let _ = _.filter((_) => !_.appid || _.appid == _)
        .filter(
          (_) =>
            !_ ||
            _ == `any` ||
            (_ == `business` && _.is_business_contact) ||
            (_ == `tech` && _.is_tech_contact),
        )
        .map((_) => new _(_.steamid).GetAccountID());
      return _(_);
    }
    return [];
  }
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  Init() {
    let _ = _(`partner_valve_contact_list`, `application_config`);
    _ &&
      _.forEach((_) => {
        this.m_mapPartnerToContactInfo.has(_.partnerid)
          ? this.m_mapPartnerToContactInfo.get(_.partnerid).push(_)
          : this.m_mapPartnerToContactInfo.set(_.partnerid, [_]);
      });
  }
};
function _(_) {
  return [`PartnerValveContactByPartnerID`, _];
}
function _(_) {
  let { data: _, isLoading: _ } = _({
    queryKey: _(_),
    queryFn: async () => _.Get().LoadValvePartnerContact(_),
  });
  return _ ? null : _;
}
function _(_, _) {
  return _.prefetchQuery({
    queryKey: _(_),
    queryFn: async () => _.Get().LoadValvePartnerContact(_),
  });
}
function _(_) {
  return _.Get().GetPartnerContact(_);
}
function _(_, _, _) {
  return _.Get().GetPartnerContactAccountsByFilter(_, _, _);
}
function _(_, _, _) {
  let [_, _] = (0, _.useState)(null),
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      _ && _(_.Get().GetPartnerContactAccountsByFilter(_, _, _));
    }, [_, _, _, _]),
    _
  );
}
function _(_) {
  let _ = _();
  return _({
    queryKey: [`multiloadpartnerconatact`, ...(_ || [])],
    queryFn: async () => {
      let _ = await _.Get().InternalLoadMultiplePartnerContact(_);
      return (
        _.forEach((_) => {
          let _ = _.filter((_) => _.partnerid == _);
          _.setQueryData(_(_), _);
        }),
        _
      );
    },
    enabled: !!(_ && _.length > 0),
  });
}
