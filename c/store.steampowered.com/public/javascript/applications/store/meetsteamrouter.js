import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./historyutils.js";
import { _ } from "./throbber.js";
import { _, _ } from "./eventdevfeaturestore.js";
import { _, _ } from "./simplesuccesserror.js";
import { _ } from "./partnereventstore.js";
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
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./main.js";
import { _, _, _, _, _, _ } from "./meetsteamregistrationhooks.js";
import { _ } from "./collapseablesection.js";
import { _ } from "./useavatarandpersona.js";
import { _ } from "./userprofile.js";
var _ = _(_()),
  _ = _(_());
function _(_, _, _, _) {
  return _({
    mutationFn: async ({ bIncludeSelf: _, rgGuests: _ }) => {
      let _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`gid`, _),
        _.append(`accountid`, `` + _),
        _.append(`meetsteam_group_id`, `` + _),
        _.append(`meetsteam_session_id`, `` + _),
        _.append(`include_self`, `` + +!!_),
        _?.length && _.append(`guests`, _.join(`|`)));
      let _ = `${_.STORE_BASE_URL}meetsteam/ajaxupdateattendance`;
      return (
        (
          await _.default.post(_, _, {
            withCredentials: !0,
          })
        )?.data?.success == 1
      );
    },
  });
}
function _(_, _, _) {
  return _({
    mutationFn: async ({ nCapacity: _ }) => {
      let _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`gid`, _),
        _.append(`meetsteam_group_id`, `` + _),
        _.append(`meetsteam_session_id`, `` + _),
        _.append(`capacity`, `` + _));
      let _ = `${_.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`;
      return (
        (
          await _.default.post(_, _, {
            withCredentials: !0,
          })
        )?.data?.success == 1
      );
    },
  });
}
function _(_) {
  return _.reduce(
    (_, _) => (
      _[_.relativeToToday] || (_[_.relativeToToday] = []),
      _[_.relativeToToday].push(_),
      _
    ),
    {
      today: [],
      past: [],
      future: [],
    },
  );
}
function _(_, _, _) {
  for (let _ of _)
    if (_.group_id === _) {
      let _ = _.sessions.find((_) => _._ === _);
      if (_)
        return {
          group: _,
          session: _,
        };
    }
  return {
    group: null,
    session: null,
  };
}
function _(_, _) {
  let _ = _(),
    [_] = (0, _.useState)(() =>
      _(`registrations`, `application_config`)
        .map((_) => ((_.userReg = JSON.parse(_.jsondata)), _))
        .sort((_, _) => {
          let _ = _(_.jsondata.meet_steam_groups, _.group_id, _.session_id);
          return (
            (_(_.jsondata.meet_steam_groups, _.group_id, _.session_id)?.session
              ?.rtime_start || 0) - (_?.session?.rtime_start || 0)
          );
        })
        .map((_) => {
          let _ = _(_.jsondata.meet_steam_groups, _.group_id, _.session_id);
          return (
            (_.relativeToToday = _(_?.session, _)),
            (_.rtSesssionTime = _?.session?.rtime_start ?? 0),
            _
          );
        }),
    ),
    _ = _?.trim().toLowerCase() || ``;
  return (0, _.useMemo)(
    () =>
      _.filter(
        (_) =>
          !_.length ||
          _.userReg.name?.toLowerCase().includes(_) ||
          _.userReg.company?.toLowerCase().includes(_) ||
          _.userReg.guest_names?.find((_) => _.toLowerCase().includes(_)) ||
          _.userReg.email_override?.toLowerCase().includes(_),
      ),
    [_, _],
  );
}
function _(_, _) {
  return (0, _.useMemo)(() => _(_), [_, _]);
}
function _(_, _) {
  if (!_) return `past`;
  let _ = _(_),
    _ = _(_.rtime_start, _),
    _ = _ === void 0 ? new Date() : new Date(_ * 1e3),
    _ = new Date(_.getFullYear(), _.getMonth(), _.getDate()),
    _ = new Date(_.getFullYear(), _.getMonth(), _.getDate() + 1);
  return _ >= _ && _ < _ ? `today` : _ < _ ? `past` : `future`;
}
var _ = `qp3ftpND5iU-`,
  _ = `oPN23gVsMtA-`,
  _ = `UEUcc6MRWe8-`,
  _ = `kT4hEzPaZYI-`,
  _ = `_2eRd-nCkb7s-`,
  _ = `_5eCjhjtChK8-`,
  _ = `PM3aTfYifbw-`,
  _ = `zoQGA6oGiFU-`,
  _ = `fCoHnd1EAUg-`,
  _ = `o5u0ZDISyOE-`,
  _ = `ClYsAiAEq3o-`,
  _ = `JtIOqFfvU-4-`,
  _ = _();
function _(_) {
  let [_] = _(`gid`),
    _ = _(_),
    _ = _(_.LANGUAGE),
    _ = (0, _.useCallback)(
      () =>
        window.location.assign(
          `${_.STORE_BASE_URL}meetsteam/attendeelist?gid=${_}`,
        ),
      [_],
    );
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`h2`, {
                children: _.GetNameWithFallback(_),
              }),
              (0, _.jsx)(`a`, {
                href: `${_.STORE_BASE_URL}meetsteam/${_}`,
                target: `_blank`,
                children: `See Event Details`,
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsxs)(_, {
              onClick: _,
              children: [
                (0, _.jsx)(_, {
                  angle: 180,
                  className: _,
                }),
                `Back to full list`,
              ],
            }),
          }),
          (0, _.jsx)(_, {
            eventModel: _,
          }),
        ],
      })
    : (0, _.jsx)(_, {
        string: _(`#Loading`),
      });
}
function _(_) {
  let { eventModel: _ } = _,
    _ = _(_(_)),
    [_] = _(`accountid`),
    _ = _();
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          accountID: _,
        }),
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        rgUserRegs: _.today,
        strTitle: `Today ` + _(_),
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        rgUserRegs: _.future,
        bHideIfEmpty: !0,
        strTitle: `Future`,
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        rgUserRegs: _.past,
        bHideIfEmpty: !0,
        strTitle: `Past`,
      }),
    ],
  });
}
function _(_) {
  let { eventModel: _, rgUserRegs: _, bHideIfEmpty: _, strTitle: _ } = _;
  return _.length == 0 && _
    ? null
    : (0, _.jsx)(_, {
        title: `${_} (${_.length})`,
        bStartMinimized: _,
        children:
          !_ || _.length == 0
            ? (0, _.jsx)(`div`, {
                children: _ ? `` : `No registrations`,
              })
            : (0, _.jsx)(`div`, {
                children: _.sort(
                  (_, _) => _.rtSesssionTime - _.rtSesssionTime,
                ).map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      eventModel: _,
                      reg: _,
                    },
                    `${_.group_id}_${_.session_id}`,
                  ),
                ),
              }),
      });
}
function _(_) {
  let { desc: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => _((_) => !_), []);
  return (0, _.jsx)(`div`, {
    className: _({
      [_]: !0,
      [void 0]: _,
    }),
    onClick: _,
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: _,
  });
}
function _(_) {
  let { reg: _, eventModel: _ } = _,
    _ = new _(_.steamid).GetAccountID(),
    [_] = _(_.userReg.accountid),
    [_, _] = (0, _.useState)(!0),
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!1),
    _ = _.userReg,
    { group: _, session: _ } = _(
      _.jsondata.meet_steam_groups,
      _.group_id,
      _.session_id,
    ),
    [_, _, _] = _(),
    _ = _(_.GID, _, _.group_id, _.session_id),
    _ = new Set(
      _.guests_attendance?.length > 0 ? _.guests_attendance.split(`|`) : [],
    ),
    _ = _.attendance_count > _.size,
    _ = (_, _, _, _) =>
      (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsxs)(`span`, {
            className: _,
            children: [_, `:`, `\xA0`],
          }),
          _,
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                `\xA0`,
                (0, _.jsxs)(`span`, {
                  className: `wLlCdBivyGc-`,
                  children: [`(`, _, `)`],
                }),
              ],
            }),
          (0, _.jsxs)(_.Fragment, {
            children: [
              `\xA0`,
              `-`,
              (0, _.jsx)(`span`, {
                children: _ ? `✅ checked in` : `☐ not checked in`,
              }),
            ],
          }),
        ],
      });
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        group: _,
        session: _,
      }),
      _
        ? (0, _.jsx)(`div`, {
            className: _,
            children: `Attendee has been checked in`,
          })
        : (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                label: (0, _.jsx)(_.Fragment, {
                  children: _(
                    `Attendee`,
                    _.name || _.persona_name,
                    _.email_override,
                    _,
                  ),
                }),
                checked: _,
                onChange: _,
              }),
              _.guest_names?.length > 0 &&
                (0, _.jsx)(_.Fragment, {
                  children: _.guest_names.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        label: (0, _.jsx)(_.Fragment, {
                          children: _(`Guest`, _, void 0, _.has(_)),
                        }),
                        checked: _.includes(_),
                        onChange: (_) => {
                          _((_) =>
                            _
                              ? _.includes(_)
                                ? _
                                : [..._, _]
                              : _.filter((_) => _ !== _),
                          );
                        },
                      },
                      `` + _.group_id + `_` + _.session_id + `_` + _,
                    ),
                  ),
                }),
              (0, _.jsx)(_, {
                onClick: _,
                children: `Check in selected people`,
              }),
            ],
          }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            closeModal: _,
            bIncludeSelf: _,
            rgGuestsAttending: _,
            fnMarkAttendance: _,
            fnOnSuccess: () => _(!0),
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      closeModal: _,
      bIncludeSelf: _,
      rgGuestsAttending: _,
      fnMarkAttendance: _,
      fnOnSuccess: _,
    } = _,
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _(`#Saving`),
        closeModal: _,
      })
    : (0, _.jsx)(_, {
        onCancel: _,
        strTitle: _(`#Button_Submit`),
        bAllowFullSize: !0,
        onOK: async () => {
          (_.fnSetLoading(!0),
            _.mutateAsync({
              bIncludeSelf: _,
              rgGuests: _,
            })
              .then((_) => {
                _
                  ? (_(),
                    _.fnSetStrSuccess(
                      `Success! This person has been checked in.`,
                    ))
                  : _.fnSetStrError(_(`#Login_Error_Network_Description`));
              })
              .catch(() =>
                _.fnSetStrError(_(`#Login_Error_Network_Description`)),
              ));
        },
        children: `Mark as checked in?`,
      });
}
function _(_) {
  let { session: _, group: _ } = _,
    { sDisplayTimeZone: _, rtime_start: _, rtime_end: _ } = _(_.session),
    _ = _(_, _),
    _ = _(_, _, _);
  return !_ || !_
    ? (0, _.jsx)(`div`, {
        children: `Session Infomrmation Missing`,
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.localized_session_title[0],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _,
              ` @ `,
              (0, _.jsx)(`b`, {
                children: _,
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(_, {
              desc: `Description: ${_.localized_session_description[0] || ``}`,
            }),
          }),
          !1,
        ],
      });
}
var _ = `nRDp-l61YHE-`,
  _ = `CBm6tYhtelM-`,
  _ = `qOYa8mxlKiI-`,
  _ = `_6dnv0Uap06Q-`,
  _ = `_3j92ztnh3-U-`,
  _ = `nYQPuX9zn5w-`,
  _ = `D5PlmnNKbM4-`,
  _ = `TbuBLdEM4EU-`,
  _ = `aQ8WH9RBXYM-`,
  _ = `qXuG2pGa7SM-`,
  _ = `v2t82VLw74A-`,
  _ = `C0YiVY9PBgY-`,
  _ = `Zn9u5dfjLaA-`,
  _ = `gK91ntqy1Mg-`,
  _ = `Tgky-eweAsQ-`,
  _ = `rkfz9oU8Beg-`,
  _ = `MzXqArUOQNI-`,
  _ = `_05vyEbktq5k-`;
function _(_) {
  let _ = new Date(_.getTime());
  return (_.setHours(0, 0, 0, 0), _);
}
function _(_, _) {
  return _.reduce((_, _) => {
    let _ = _(_),
      _ = Math.floor(_.getTime() / 1e3),
      _ = _.get(_) || [];
    return (_.set(_, [..._, _]), _);
  }, new Map());
}
function _(_) {
  let [_] = _(`gid`),
    _ = _(_),
    _ = _(_.LANGUAGE),
    [_, _] = (0, _.useState)(``);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`h1`, {
                children: _.GetNameWithFallback(_),
              }),
              (0, _.jsx)(`a`, {
                href: `${_.STORE_BASE_URL}meetsteam/${_}`,
                target: `_blank`,
                children: `See Event Details`,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            eventModel: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              type: `text`,
              label: `Search for an attendee`,
              value: _,
              bShowClearAction: !0,
              onChange: (_) => _(_.currentTarget.value || ``),
              placeholder: `Type name or partner or email address`,
            }),
          }),
          (0, _.jsx)(_, {
            eventModel: _,
            strSearch: _.toLowerCase(),
          }),
        ],
      })
    : (0, _.jsx)(_, {
        string: _(`#Loading`),
      });
}
function _(_) {
  let { eventModel: _, strSearch: _ } = _,
    _ = _(_, _),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useMemo)(() => {
      let _ = new Map();
      return (
        _.forEach((_) => {
          [_.userReg.name, ...(_.userReg.guest_names || [])].forEach((_) => {
            let _ = _.toLowerCase();
            _.has(_) ? _.get(_).push(_) : _.set(_, [_]);
          });
        }),
        [_, Array.from(_.keys()).sort()]
      );
    }, [_]);
  return (
    _.useEffect(() => {
      _(null);
    }, [_]),
    (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`h3`, {
          children: `Attendees`,
        }),
        _
          ? (0, _.jsx)(_, {
              eventModel: _,
              rgSelected: _,
              strSearch: _,
              onCleanSelection: () => _(null),
            })
          : (0, _.jsx)(_.Fragment, {
              children: _.filter((_) => !_ || _.includes(_)).map((_) =>
                (0, _.jsx)(
                  `div`,
                  {
                    className: _,
                    children: (0, _.jsx)(_, {
                      onClick: () => _(_.get(_.toLowerCase())),
                      children: _,
                    }),
                  },
                  _,
                ),
              ),
            }),
      ],
    })
  );
}
function _(_) {
  let { eventModel: _, rgSelected: _, strSearch: _, onCleanSelection: _ } = _,
    _ = _(),
    _ = _(_, _);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(_, {
          onClick: _,
          children: [
            (0, _.jsx)(_, {
              angle: 180,
              className: _,
            }),
            `Back to full list`,
          ],
        }),
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        rgUserRegs: _.today,
        strTitle: `Today ` + _(_),
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        rgUserRegs: _.future,
        bHideIfEmpty: !0,
        strTitle: `Future`,
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        rgUserRegs: _.past,
        bHideIfEmpty: !0,
        strTitle: `Past`,
      }),
    ],
  });
}
function _(_) {
  let { eventModel: _ } = _,
    _ = _(),
    [_, _] = _.useState(!1),
    { rgGroupedSessions: _, bMoreSessions: _ } = _.useMemo(() => {
      let _ = _?.jsondata?.meet_steam_groups?.flatMap((_) =>
          _.sessions.map((_) => {
            let _ = _(_);
            return {
              group: _,
              session: _,
              displayDate: _(_.rtime_start, _),
            };
          }),
        ),
        _ = _?.filter((_) => _ || _(_.displayDate) >= _(_)),
        _ = _ || (_ && _.length > _.length);
      return {
        rgGroupedSessions: _(_ ?? [], (_) => _(_.displayDate)),
        bMoreSessions: _,
      };
    }, [_?.jsondata?.meet_steam_groups, _, _]),
    _ = _.useMemo(() => {
      let _ = _(`registrations`, `application_config`);
      if (_ && typeof _ == `object`)
        return _.reduce((_, _) => {
          let _ = `${_.group_id}_${_.session_id}`,
            _ = _.get(_) ?? [];
          return (_.push(_), _.set(_, _), _);
        }, new Map());
    }, []);
  if (!_ || (_.size == 0 && !_)) return;
  let _ =
      Array.from(_.keys()).reduce(
        (_, _) => (_ == null || (_ * 1e3 > _.getTime() && _ < _) ? _ : _),
        void 0,
      ) ?? 0,
    _ = Array.from(_.keys()).some((_) => _(_, new Date(_ * 1e3)));
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          label: `Show past events`,
          checked: _,
          onChange: _,
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: Array.from(_.keys()).map((_) =>
          (0, _.jsx)(
            _,
            {
              eventModel: _,
              date: new Date(_ * 1e3),
              sessionsAndGroups: _.get(_),
              rgRegistrationInfo: _,
              isToday: _(_ ? _ : new Date(_ * 1e3), new Date(_ * 1e3)),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let {
    eventModel: _,
    date: _,
    sessionsAndGroups: _,
    rgRegistrationInfo: _,
    isToday: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _(_, !_ && `dfDPmr4MFBA-`),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(_),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              eventModel: _,
              date: _,
              registrations: _.get(`${_.group.group_id}_${_.session._}`) ?? [],
              group: _.group,
              session: _.session,
            },
            `${_.group.group_id}_${_.session._}`,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { eventModel: _, date: _, group: _, session: _, registrations: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _(),
    { sDisplayTimeZone: _, rtime_start: _ } = _(_),
    _ = _(_, _),
    _ = _.reduce((_, _) => _ + (_.guests_registered ?? 0), 0),
    _ = _.reduce(
      (_, _) =>
        _ +
        (_.rt_attendance_marked > 0 && _.guests_registered
          ? _.guests_registered
          : 0),
      0,
    ),
    [_, _, _] = _(),
    _ = _(_.GID, _.group_id, _._),
    _ = () => window.location.reload();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children:
              _.localized_session_title[_] ?? _.localized_session_title[0],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        title: `Registered:`,
        nCount: _,
        nCapacity: _.max_capacity,
      }),
      (0, _.jsx)(_, {
        title: `Checked in:`,
        nCount: _,
        nCapacity: _.max_capacity,
      }),
      _(_) >= _(_) &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              className: _(`-nD2J-ewBfk-`),
              onClick: _,
              children: `Update capacity...`,
            }),
            (0, _.jsx)(_, {
              active: _,
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  closeModal: _,
                  nCapacity: _.max_capacity ?? 0,
                  fnUpdateCapacity: _,
                  fnOnSuccess: () => _(),
                }),
              }),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { closeModal: _, nCapacity: _, fnUpdateCapacity: _, fnOnSuccess: _ } = _,
    [_, _] = _.useState(_.toString()),
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _(`#Saving`),
        closeModal: _,
      })
    : (0, _.jsx)(_, {
        onCancel: _,
        strTitle: _(`Update Capacity`),
        bAllowFullSize: !0,
        onOK: async () => {
          _.fnSetLoading(!0);
          let _ = Number.isNaN(Number.parseInt(_))
            ? void 0
            : Number.parseInt(_);
          _.mutateAsync({
            nCapacity: _,
          })
            .then((_) => {
              _
                ? (_(), _.fnSetStrSuccess(`Max capacity updated.`))
                : _.fnSetStrError(_(`#Login_Error_Network_Description`));
            })
            .catch(() =>
              _.fnSetStrError(_(`#Login_Error_Network_Description`)),
            );
        },
        children: (0, _.jsx)(_, {
          className: _,
          label: `New capacity`,
          type: `text`,
          autoComplete: `off`,
          value: _,
          onChange: (_) => _(_.currentTarget.value),
        }),
      });
}
function _(_) {
  let { title: _, nCount: _, nCapacity: _ } = _,
    _ = _ >= _,
    _ = Math.min((_ / _) * 100, 100),
    _ = _ > 0 ? `${_}%` : `0%`;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`span`, {
        children: [_, ` `, _, ` / `, _],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _(_, _ ? _ : ``),
          style: {
            width: _,
          },
        }),
      }),
    ],
  });
}
var _ = {
  MeetSteamAttendance: () => `${_.MeetSteamRoute()}attendance`,
  MeetSteamAttendeeList: () => `${_.MeetSteamRoute()}attendeelist`,
};
function _(_) {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        path: _.MeetSteamAttendance(),
        render: (_) =>
          (0, _.jsx)(_, {
            ..._,
          }),
      }),
      (0, _.jsx)(_, {
        path: _.MeetSteamAttendeeList(),
        render: (_) =>
          (0, _.jsx)(_, {
            ..._,
          }),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
export { _ as MeetSteamRoutes, _ as default };
