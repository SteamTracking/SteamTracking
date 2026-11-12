function _(_, _) {
  return {
    clanid: _,
    appid: _,
    can_edit: !1,
    owns_app: !1,
    event_followed: [],
    event_followed_flags: [],
    event_ignored: [],
    follows_app: !1,
    valve_admin: !1,
    support_user: !1,
    limited_user: !0,
  };
}
function _(_, _) {
  return !_ || !(_.support_user || _.valve_admin)
    ? _
    : {
        ..._,
        can_edit: !0,
        support_user: !1,
        valve_admin: !1,
      };
}
async function _(_, _, _) {
  let _ = _(),
    _ = _(`partnereventpermissions`, `application_config`);
  if (_(_)) {
    let _ = _.find((_) => _.clanid == _);
    if (_) {
      let { success: _, warn_msg: _, err_msg: _, ..._ } = _;
      return _(_, _);
    }
  }
  if (_.logged_in) {
    let _ = _.InitFromClanID(_, _.EUNIVERSE),
      _ = `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
    _() == `partner`
      ? (_ = `${_.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${_}`)
      : _() == `store` &&
        (_ = `${_.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${_}`);
    let _ = await fetch(_, {
      method: `GET`,
      credentials: `include`,
    });
    if (_.status == 200) {
      let _ = await _.json();
      if (_) {
        let { success: _, warn_msg: _, err_msg: _, ..._ } = _;
        return _(_, _);
      }
    }
  }
  return _(_, void 0);
}
function _(_) {
  let _ = _;
  return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
    ? typeof _[0].clanid == `number` && typeof _[0].appid == `number`
    : !1;
}
function _(_) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _));
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: async () => await _(_, _, _),
    enabled: !!_,
  };
}
function _(_) {
  return [`useEventUserPermissions`, _.accountid, _];
}
