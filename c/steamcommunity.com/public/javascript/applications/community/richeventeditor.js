import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _ } from "./libraries.js";
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
} from "./eventrow.js";
import "./vodquery.js";
import { _, _ } from "./clanstore.js";
import { _, _, _, _ } from "./emoticonbutton.js";
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
} from "./apppartnereventspage.js";
import { _ } from "./expandonappear.js";
import { _, _ } from "./eventdevfeaturestore.js";
import { _ } from "./localdateandtime.js";
import { _, _ } from "./languagepicker.js";
import { _ } from "./partnereventdialog.module.js";
import { _ } from "./clanimagepicker.js";
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
} from "./pmbbcodeschema.js";
import { _ } from "./linkplugin.js";
function _(_) {
  return _({
    rules: [_(/^>$/, _.nodes.quote)],
  });
}
var _ = _(_()),
  _ = _();
function _(_, _, _, _ = _.left) {
  _.dispatch(
    _.state._.insert(
      _.state.selection._,
      _.create({
        videoID: _,
        align: _,
      }),
    ),
  );
}
function _(_) {
  let {
      videoID: _,
      align: _,
      editModel: _,
      selected: _,
      setAttrs: _,
      focusView: _,
    } = _,
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]),
    _ = _.useCallback(
      (_, _) => {
        (_({
          videoID: _,
          align: _,
        }),
          _());
      },
      [_, _],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          videoID: _,
          align: _,
          bEditing: !0,
          hideModal: _,
          onSave: _,
        }),
      (0, _.jsxs)(_, {
        className: _(_, _ && `ef5sjCjBDrY-`),
        children: [
          (0, _.jsx)(_, {
            onEditClick: _,
            onDeleteClick: _.removeNode,
            bStrongShadows: !0,
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `RhG8qWaN38o-`,
            }),
          (0, _.jsx)(_, {
            event: _.GetEventModel(),
            strTag: `previewyoutube`,
            args: {
              "": `${_};${_}`,
            },
            rawargs: `${_};${_}`,
            showErrorInfo: !0,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      videoID: _ = ``,
      align: _ = ``,
      bEditing: _ = !1,
      hideModal: _,
      onSave: _,
    } = _,
    [_, _] = _.useState(_ || _.full),
    [_, _] = _.useState(_ ? `https://www.youtube.com/watch?v=${_}` : ``),
    [_, _] = _.useState(void 0),
    _ = _.useCallback(() => {
      let { strVideoID: _ } = _(_);
      return (_ ? _(_, _) : _(_(`#EventEditor_InsertYouTube_NoURL`)), !1);
    }, [_, _, _]),
    _ = _.useCallback((_) => {
      _ && (_.element.focus(), _.element.select());
    }, []);
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsxs)(_, {
      strTitle: _(`#EventEditor_InsertYouTube`),
      closeModal: _,
      strOKText: _(_ ? `#Button_Save` : `#EventEditor_InsertYouTube`),
      onOK: _,
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className: `O-jb07OKlag-`,
            children: _,
          }),
        (0, _.jsx)(_, {
          label: _(`#EventEditor_InsertYouTube_URL`),
          placeholder: _(`#EventEditor_InsertYouTube_Placholder`),
          value: _,
          ref: _,
          onChange: (_) => _(_.currentTarget.value),
        }),
        (0, _.jsxs)(_, {
          label: _(`#EventEditor_InsertYouTube_Position`),
          children: [
            (0, _.jsx)(_, {
              checked: _ == _.left,
              onChange: (_) => _ && _(_.left),
              label: _(`#EventEditor_InsertYouTube_Left`),
            }),
            (0, _.jsx)(_, {
              checked: _ == _.right,
              onChange: (_) => _ && _(_.right),
              label: _(`#EventEditor_InsertYouTube_Right`),
            }),
            (0, _.jsx)(_, {
              checked: _ == _.full,
              onChange: (_) => _ && _(_.full),
              label: _(`#EventEditor_InsertYouTube_Full`),
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = `bkCqOWe6u70-`,
  _ = `F-Iu9ouJkU4-`,
  _ = `Orxop48kS2w-`,
  _ = `p-atMVHbHCY-`,
  _ = `-dznvStnO7w-`,
  _ = `UXQ6tbkrOG0-`,
  _ = `tKQoekDRds8-`,
  _ = _(_()),
  _ = _(_());
function _(_) {
  let { hideModal: _, fnUpdateSession: _ } = _,
    [_, _] = (0, _.useState)(() => _(!0, null)),
    [_, _] = (0, _.useState)(() => _(!0, null)),
    [_] = _(() => [_.location_type]);
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      strTitle: _(`#MeetSteam_create_title`),
      onOK: () => _(_, _),
      closeModal: () => {
        (_(_(!0, null)), _(_(!0, null)), _());
      },
      bOKDisabled: !_ == null,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            group: _,
            fnSetGroup: _,
          }),
          (0, _.jsx)(_, {
            session: _,
            fnSetSession: _,
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  let { hideModal: _, groupInput: _, fnUpdateGroupSession: _ } = _,
    [_, _] = (0, _.useState)(() => _(!1, _));
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      strTitle: _(`#MeetSteam_edit_title`),
      onOK: () => {
        (_(_), _());
      },
      onCancel: () => {
        (_(_(!1, _)), _());
      },
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          group: _,
          fnSetGroup: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let { bCreate: _, hideModal: _, sessionInput: _, fnUpdateSession: _ } = _,
    [_, _] = (0, _.useState)(() => _(_, _)),
    [_] = _(() => [_.location_type]);
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      strTitle: _(_ ? `#MeetSteam_create_title` : `#MeetSteam_edit_title`),
      onOK: () => {
        (_(_), _());
      },
      onCancel: () => {
        (_(_(_, _)), _());
      },
      bOKDisabled: !_,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          session: _,
          fnSetSession: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let { group: _, fnSetGroup: _ } = _,
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        type: `text`,
        label: _(`#MeetSteam_edit_session_name`),
        value: _.Get(_.localized_session_title, _),
        onChange: (_) => {
          let _ = {
            ..._,
          };
          ((_.localized_session_title = _.Set(
            _.localized_session_title,
            _,
            _.currentTarget.value,
          )),
            _(_));
        },
      }),
      (0, _.jsx)(_, {
        children: _(`#MeetSteam_edit_session_desc`),
      }),
      (0, _.jsx)(`textarea`, {
        className: _(`DialogTextInputBase`, _),
        value: _.Get(_.localized_session_description, _),
        rows: 5,
        onChange: (_) => {
          let _ = {
            ..._,
          };
          ((_.localized_session_description = _.Set(
            _.localized_session_description,
            _,
            _.currentTarget.value,
          )),
            _(_));
        },
      }),
      (0, _.jsx)(_, {
        type: `text`,
        label: `Intended Audience`,
        tooltip: `A short descriptions for whom then event is designed for to help partners self select`,
        value: _.Get(_.localized_intended_audience, _),
        onChange: (_) => {
          let _ = {
            ..._,
          };
          ((_.localized_intended_audience = _.Set(
            _.localized_intended_audience,
            _,
            _.currentTarget.value,
          )),
            _(_));
        },
      }),
      (0, _.jsxs)(_, {
        children: [
          `FAQ `,
          (0, _.jsx)(_, {
            tooltip: `Optional FAQ section which appears in the pop-up display and hidden by default`,
          }),
        ],
      }),
      (0, _.jsx)(`textarea`, {
        className: _(`DialogTextInputBase`, _),
        value: _.Get(_.localized_sesssion_faq, _),
        rows: 5,
        onChange: (_) => {
          let _ = {
            ..._,
          };
          ((_.localized_sesssion_faq = _.Set(
            _.localized_sesssion_faq,
            _,
            _.currentTarget.value,
          )),
            _(_));
        },
      }),
      (0, _.jsx)(_, {
        checked: _.ask_registration_question,
        onChange: (_) => {
          let _ = {
            ..._,
          };
          ((_.ask_registration_question = _), _(_));
        },
        label: `Ask partner to tell us what they want to learn from the sessions`,
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { group: _, fnSetGroup: _ } = _,
    [_, _] = (0, _.useState)(_.group_visibility_tokens?.length > 0);
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            children: `By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.`,
          }),
          _.group_visibility_tokens.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                type: `number`,
                min: `10000`,
                max: `99999`,
                value: _ || 1e4,
                onChange: (_) => {
                  let _ = {
                    ..._,
                  };
                  ((_.group_visibility_tokens[_] = Number.parseInt(
                    _.currentTarget.value,
                  )),
                    _(_));
                },
                label: `Visibility Token`,
              },
              `token` + _ + `_` + _,
            ),
          ),
          (0, _.jsx)(_, {
            onClick: () => {
              let _ = {
                ..._,
              };
              ((_.group_visibility_tokens = [
                ..._.group_visibility_tokens,
                1e4,
              ]),
                _(_));
            },
            children: `Add Token`,
          }),
          _.group_visibility_tokens.length > 0 &&
            (0, _.jsx)(_, {
              onClick: () => {
                let _ = {
                  ..._,
                };
                ((_.group_visibility_tokens = _.group_visibility_tokens.slice(
                  0,
                  -1,
                )),
                  _(_));
              },
              children: `Remove Last Token`,
            }),
        ],
      })
    : (0, _.jsx)(_, {
        checked: !1,
        onChange: _,
        label: `Change Visibility Options`,
      });
}
function _(_) {
  let { session: _, fnSetSession: _ } = _,
    [_, _, _, _, _, _] = _(() => [
      _.rtime_start,
      _.rtime_end,
      _.max_capacity,
      _.max_per_team,
      _.location_type,
      _.in_person_time_zone,
    ]),
    _ = [];
  for (let _ = 0; _ < 4; ++_)
    _.push({
      data: _,
      label: _,
    });
  let _ = Math.max(0, Math.floor((_ - _) / 60)),
    _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
    _ = _ === `in_person` ? (_ ?? `America/Los_Angeles`) : _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        startTime: _.rtime_start,
        location_type: _,
        fnUpdateLocationAndTZ: (_, _) =>
          _({
            ..._,
            location_type: _,
            in_person_time_zone: _,
          }),
        in_person_time_zone: _,
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(_, {
        strDescription: _(`#MeetSteam_edit_start`),
        nEarliestTime: 0,
        fnGetTimeToUpdate: () => _,
        fnSetTimeToUpdate: (_) =>
          _({
            ..._,
            rtime_start: _,
            rtime_end: _ + _.PerMinute * _,
          }),
        fnIsValidDateTime: () => !0,
        bShowTimeZone: !0,
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(_, {
        type: `number`,
        min: 0,
        label: _(`#MeetSteam_edit_duration`),
        onChange: (_) => {
          let _ = Number.parseInt(_.currentTarget.value);
          _({
            ..._,
            rtime_end: _.rtime_start + _.PerMinute * _,
          });
        },
        value: _,
      }),
      (0, _.jsx)(_, {
        rtime_start: _,
        rtime_end: _,
        sDisplayTimeZone: _,
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`br`, {}),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            type: `number`,
            value: _,
            label: _(`#MeetSteam_edit_max_capacity`),
            min: 1,
            onChange: (_) =>
              _({
                ..._,
                max_capacity: Number.parseInt(_.currentTarget.value),
              }),
          }),
          (0, _.jsx)(_, {
            controlled: !0,
            label: _(`#MeetSteam_edit_guest_count`),
            tooltip: _(`#MeetSteam_edit_guest_count_ttip`),
            rgOptions: _,
            selectedOption: _,
            onChange: (_) =>
              _({
                ..._,
                max_per_team: _.data,
              }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { rtime_start: _, rtime_end: _, sDisplayTimeZone: _ } = _,
    _ = _.unix(_)._(_),
    _ = _.unix(_)._(_),
    _ = _.utcOffset() - _.utcOffset(),
    _ = _.unix(_)._(_),
    _ = _.unix(_)._(_),
    _ = _.utcOffset() - _.utcOffset();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          _(`#MeetSteam_edit_displayed_start`),
          `: `,
          _(_.unix() + _ * 60, !1, _.format(`z`)),
          ` `,
        ],
      }),
      (0, _.jsxs)(`div`, {
        children: [
          _(`#MeetSteam_edit_displayed_end`),
          `: `,
          _(_.unix() + _ * 60, !1, _.format(`z`)),
          ` `,
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      startTime: _,
      location_type: _,
      fnUpdateLocationAndTZ: _,
      in_person_time_zone: _,
    } = _,
    _ = {
      option: (_) => ({
        ..._,
        color: `#444444`,
      }),
    },
    _ = _(_),
    _ = _.useMemo(
      () => _.reduce((_, _) => _.set(_.name, _.friendly_name), new Map()),
      [_],
    ),
    _ = (_) => _.get(_) ?? _,
    _ = _.useId(),
    _ = _.useId();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        _: _,
        className: _,
        children: _(`#MeetSteam_edit_date_display_title`),
      }),
      (0, _.jsx)(`div`, {
        _: _,
        className: _,
        children: _(`#MeetSteam_edit_date_display_desc`),
      }),
      (0, _.jsxs)(_, {
        labelId: _,
        descriptionId: _,
        value: _,
        onChange: (_) => _(_, _),
        children: [
          (0, _.jsx)(_, {
            value: `in_person`,
            children: _(`#MeetSteam_edit_date_display_in_person`),
          }),
          (0, _.jsx)(_, {
            value: `virtual`,
            children: _(`#MeetSteam_edit_date_display_virtual`),
          }),
        ],
      }),
      _ === `in_person` &&
        (0, _.jsx)(_._default, {
          styles: _,
          isSearchable: !0,
          isMulti: !1,
          options: _.map((_) => ({
            label: _.friendly_name,
            value: _.name,
          })),
          defaultMenuIsOpen: !1,
          value: _
            ? {
                label: _(_),
                value: _,
              }
            : {
                label: _(`America/Los_Angeles`),
                value: `America/Los_Angeles`,
              },
          onChange: (_) => _(_, _.value),
        }),
    ],
  });
}
function _(_) {
  let _ = _({
    queryKey: [`timezone`, _],
    queryFn: async () => {
      let _ = `${_.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
        _ = {
          reference_time: _,
        };
      return (
        await _.default.get(_, {
          params: _,
        })
      )?.data.timezones;
    },
  });
  return _.isSuccess ? _.data : [];
}
function _(_, _) {
  if (_) {
    let _ = _.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
      _ = 0;
    do _ = Math.floor(1e4 + Math.random() * 9e4);
    while (_ && _.findIndex((_) => _.group_id == _) >= 0);
    return {
      group_id: _,
      localized_session_title: _([], 32, null),
      localized_session_description: _([], 32, null),
      localized_sesssion_faq: _([], 32, null),
      localized_intended_audience: _([], 32, null),
      group_visibility_tokens: [],
      ask_registration_question: !1,
      sessions: [],
    };
  }
  return _
    ? {
        ..._,
        localized_session_description: [..._.localized_session_description],
        localized_session_title: [..._.localized_session_title],
        localized_sesssion_faq: [...(_.localized_sesssion_faq || [])],
        localized_intended_audience: [...(_.localized_intended_audience || [])],
        group_visibility_tokens: [...(_.group_visibility_tokens || [])],
        ask_registration_question: _.ask_registration_question,
      }
    : (_(
        !1,
        `HelperCreateOrCloneGroupSessionModel Expect Create or previous model`,
      ),
      null);
}
function _(_, _) {
  if (_) {
    let _ = _.GetTimeNowWithOverride(),
      _ = _.GetEditModel()
        .GetEventModel()
        .jsondata.meet_steam_groups?.reduce((_, _) => _.concat(_.sessions), []),
      _ = 0;
    do _ = Math.floor(1e4 + Math.random() * 9e4);
    while (_ && _.findIndex((_) => _._ == _) >= 0);
    let _ = Math.ceil(_ / 3600) * 3600;
    return {
      _: _,
      rtime_start: _ + _.PerDay,
      rtime_end: _ + _.PerDay + _.PerHour,
      max_capacity: 100,
      max_per_team: 3,
    };
  }
  return _
    ? {
        ..._,
      }
    : (_(
        !1,
        `HelperCreateOrCloneSessionInstanceModel Expect Create or previous model`,
      ),
      null);
}
function _(_) {
  let _ = _.GetEditModel();
  for (
    let _ = 0;
    _ < _.GetEventModel().jsondata.meet_steam_groups.length;
    ++_
  ) {
    let _ = _.GetEventModel().jsondata.meet_steam_groups[_];
    for (let _ = 0; _ < _.sessions.length; ++_)
      if (_.sessions[_]._ == _)
        return {
          groupIndex: _,
          sessionIndex: _,
        };
  }
  return null;
}
function _(_) {
  let _ = _.GetEditModel();
  for (
    let _ = 0;
    _ < _.GetEventModel().jsondata.meet_steam_groups.length;
    ++_
  ) {
    let _ = _.GetEventModel().jsondata.meet_steam_groups[_];
    if (_.group_id == _)
      return {
        group: _,
        groupIndex: _,
      };
  }
  return null;
}
function _(_) {
  let _ = _.GetEditModel();
  for (
    let _ = 0;
    _ < _.GetEventModel().jsondata.meet_steam_schedules.length;
    ++_
  ) {
    let _ = _.GetEventModel().jsondata.meet_steam_schedules[_];
    if (_.schedule_id == _)
      return {
        schedule: _,
        scheduleIndex: _,
      };
  }
  return null;
}
function _(_, _, _) {
  _.dispatch(
    _.state._.insert(
      _.state.selection._,
      _.create({
        group_id: _,
      }),
    ),
  );
}
function _(_) {
  let { focusView: _, removeNode: _, group_id: _ } = _,
    _ = _(),
    _ = _(() =>
      _.GetEventModel().jsondata.meet_steam_groups?.find(
        (_) => _.group_id == _,
      ),
    ),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]);
  return !_ || _.GetClanAccountID() != _()
    ? (0, _.jsx)(`div`, {
        children: `Error: Cannot edit meet steam session group`,
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            groupData: _,
            focusView: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                onClick: _,
                tooltip: _(`#Button_Edit`),
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                onClick: _,
                tooltip: _(`#Button_Delete`),
                children: (0, _.jsx)(_, {}),
              }),
              _.group_visibility_tokens?.length > 0 &&
                (0, _.jsx)(_, {
                  onClick: () => {},
                  tooltip: `Limited visibility to those with the appropriate URLs`,
                  children: (0, _.jsx)(_, {}),
                }),
              !!_.ask_registration_question &&
                (0, _.jsx)(_, {
                  onClick: () => {},
                  tooltip: `Will ask partner to provides questions for us for this session.`,
                  children: (0, _.jsx)(_, {}),
                }),
            ],
          }),
          !!_ &&
            (0, _.jsx)(_, {
              hideModal: _,
              groupInput: _,
              fnUpdateGroupSession: (_) => {
                let { groupIndex: _ } = _(_.group_id),
                  _ = _.GetEditModel();
                ((_.GetEventModel().jsondata.meet_steam_groups[_] = _),
                  _.SetDirty(_.description));
              },
            }),
          !!_ &&
            (0, _.jsx)(_, {
              active: !0,
              children: (0, _.jsx)(_, {
                strTitle: _(`#Button_Delete`),
                strDescription: _(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { groupIndex: _ } = _(_.group_id),
                    _ = _.GetEditModel(),
                    _ = [..._.GetEventModel().jsondata.meet_steam_groups];
                  (_.splice(_, 1),
                    (_.GetEventModel().jsondata.meet_steam_groups = _),
                    _.SetDirty(_.description),
                    _());
                },
                closeModal: _,
              }),
            }),
        ],
      });
}
function _(_) {
  let { groupData: _, focusView: _ } = _,
    _ = _(() => _.sessions || []),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]);
  return _
    ? (0, _.jsxs)(_, {
        groupData: _,
        children: [
          _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                focusView: _,
                sessionID: _._,
                bShowOR: _ + 1 < _.length,
              },
              `timecol_` + _.group_id + `_` + _._,
            ),
          ),
          (0, _.jsx)(_, {
            className: _,
            onClick: _,
            tooltip: _(`#MeetSteam_add`),
            children: (0, _.jsx)(_, {}),
          }),
          _ &&
            (0, _.jsx)(_, {
              bCreate: !0,
              hideModal: _,
              fnUpdateSession: (_) => {
                let _ = _.GetEditModel(),
                  _ = [..._.sessions, _];
                (_.sort((_, _) => _.rtime_start - _.rtime_start),
                  (_.sessions = _),
                  _.SetDirty(_.description));
              },
            }),
        ],
      })
    : null;
}
function _(_) {
  let { sessionID: _, bShowOR: _, focusView: _ } = _,
    [_, _] = _(),
    _ = _(() => {
      let { groupIndex: _, sessionIndex: _ } = _(_);
      return _.GetEditModel().GetEventModel().jsondata.meet_steam_groups[_]
        .sessions[_];
    }),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        ..._,
        children: [
          (0, _.jsx)(_, {
            sessionData: _,
          }),
          !!_ &&
            (0, _.jsxs)(`div`, {
              className: `F-Iu9ouJkU4-`,
              children: [
                (0, _.jsx)(_, {
                  onClick: _,
                  tooltip: _(`#Button_Edit`),
                  children: (0, _.jsx)(_, {}),
                }),
                (0, _.jsx)(_, {
                  onClick: _,
                  tooltip: _(`#Button_Delete`),
                  children: (0, _.jsx)(_, {}),
                }),
              ],
            }),
          !!_ &&
            (0, _.jsx)(_, {
              bCreate: !1,
              hideModal: _,
              sessionInput: _,
              fnUpdateSession: (_) => {
                let _ = _.GetEditModel(),
                  { groupIndex: _, sessionIndex: _ } = _(_),
                  _ = [
                    ..._.GetEventModel().jsondata.meet_steam_groups[_].sessions,
                  ];
                ((_[_] = _),
                  _.sort((_, _) => _.rtime_start - _.rtime_start),
                  (_.GetEventModel().jsondata.meet_steam_groups[_].sessions =
                    _),
                  _.SetDirty(_.description));
              },
            }),
          !!_ &&
            (0, _.jsx)(_, {
              active: !0,
              children: (0, _.jsx)(_, {
                strTitle: _(`#Button_Delete`),
                strDescription: _(`#Dialog_AreYouSure`),
                onOK: () => {
                  let _ = _.GetEditModel(),
                    { groupIndex: _, sessionIndex: _ } = _(_),
                    _ = [
                      ..._.GetEventModel().jsondata.meet_steam_groups[_]
                        .sessions,
                    ];
                  (_.splice(_, 1),
                    _.sort((_, _) => _.rtime_start - _.rtime_start),
                    (_.GetEventModel().jsondata.meet_steam_groups[_].sessions =
                      _),
                    _.SetDirty(_.description));
                },
                closeModal: _,
              }),
            }),
        ],
      }),
      _ && (0, _.jsx)(_, {}),
    ],
  });
}
function _(_, _, _, _, _) {
  let _ = () => _.createChecked(null, _.createChecked()),
    _ = () => _.createChecked(null, _.createChecked());
  return _.createChecked(null, [
    _.createChecked(null, [_(), _()]),
    _.createChecked(null, [_(), _()]),
  ]);
}
function _(_) {
  let { schema: _ } = _,
    {
      table: _,
      table_row: _,
      table_header: _,
      table_cell: _,
      paragraph: _,
    } = _.nodes,
    _ = _.useCallback(
      (_, _, _) =>
        !_(_) && (_ && _(_._.insert(_.selection._, _(_, _, _, _, _))), !0),
      [_, _, _, _, _],
    );
  return _
    ? (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_InsertTable`),
        command: _,
        children: (0, _.jsx)(_, {}),
      })
    : null;
}
function _(_) {
  let { schema: _, className: _ } = _,
    { callbacks: _, view: _ } = _(),
    [_, _] = _.useState(() => !!_.nodes.table && _(_.state));
  return (
    _(
      _,
      _.useCallback((_) => _(!!_.nodes.table && _(_.state)), [_.nodes.table]),
    ),
    (0, _.jsx)(_, {
      visible: _,
      msAnimationDuration: 100,
      children: (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          schema: _,
        }),
      }),
    })
  );
}
function _(_) {
  let { schema: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_AddRowBefore`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_AddRowAfter`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_DeleteRow`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_AddColumnBefore`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_AddColumnAfter`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_DeleteColumn`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_HeaderRow`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_HeaderColumn`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_HeaderCell`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_MergeCells`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Tables_SplitCells`),
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      !1,
    ],
  });
}
var _ = `TfGEx4iodHc-`,
  _ = `EbkD9oXySts-`;
function _(_, _, _) {
  _.dispatch(
    _.state._.insert(
      _.state.selection._,
      _.create({
        schedule_id: _,
      }),
    ),
  );
}
function _(_, _) {
  if (_) {
    let _ = _.GetEditModel().GetEventModel().jsondata.meet_steam_schedules,
      _ = 0;
    do _ = Math.floor(1e4 + Math.random() * 9e4);
    while (_ && _.findIndex((_) => _.schedule_id == _) >= 0);
    return {
      schedule_id: _,
      session_breaks: [],
    };
  }
  return _
    ? {
        ..._,
      }
    : (_(
        !1,
        `HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model`,
      ),
      null);
}
function _(_) {
  let { hideModal: _, fnUpdateSession: _, inputScheduleModel: _ } = _,
    _ = _(),
    _ = _(),
    [_, _] = (0, _.useState)(() => _(!_, _)),
    [_, _, _] = _(() => [
      _.location_type,
      _.in_person_time_zone,
      _.GetEventModel().jsondata.meet_steam_groups || [],
    ]),
    _ = (0, _.useMemo)(() => {
      let _ = _.reduce((_, _) => _.concat(_.sessions), []);
      return _.length == 0 ? _ : Math.min(..._.map((_) => _.rtime_start));
    }, [_, _]);
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      strTitle: _
        ? `Update Meet Steam Schedule`
        : `Create Meet Steam Schedule View`,
      onOK: () => _(_),
      closeModal: () => {
        (_(_(!_, _)), _());
      },
      children: (0, _.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, _.jsx)(_, {
            startTime: _.GetEventStartTime(),
            location_type: _,
            in_person_time_zone: _,
            fnUpdateLocationAndTZ: (_, _) =>
              _({
                ..._,
                location_type: _,
                in_person_time_zone: _,
              }),
          }),
          (0, _.jsx)(_, {
            inputScheduleModel: _,
            fnUpdateSession: (_) => _(_),
            rtBreakStartingTime: _,
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  let { fnUpdateSession: _, inputScheduleModel: _, rtBreakStartingTime: _ } = _,
    [_, _] = _(() => [
      _.session_breaks || [],
      _.in_person_time_zone || `America/Los_Angeles`,
    ]),
    _ = (0, _.useCallback)(
      (_, _) => {
        let _ = {
          ..._,
        };
        ((_.session_breaks = _.session_breaks ? [..._.session_breaks] : []),
          _ < _.session_breaks.length
            ? (_.session_breaks[_] = _)
            : _.session_breaks.push(_),
          _(_));
      },
      [_, _],
    );
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, {
        children: `Scheduled Breaks`,
      }),
      _.sort((_, _) => _.rtime_start - _.rtime_start).map((_, _) =>
        (0, _.jsx)(
          _,
          {
            sDisplayTimeZone: _,
            index: _,
            breakSession: _,
            fnOnUpdate: (_) => _(_, _),
          },
          `breakedit` + _.break_id,
        ),
      ),
      (0, _.jsx)(_, {
        onClick: () => {
          let _ = _.session_breaks ? [..._.session_breaks] : [],
            _ = Math.floor(1 + Math.random() * 1e5);
          for (; _.findIndex((_) => _.break_id == _) >= 0;)
            _ = Math.floor(1 + Math.random() * 1e5);
          _(
            {
              break_id: _,
              localized_break_description: _([], 32, null),
              rtime_start: _,
              rtime_end: _ + _.PerHour,
            },
            _.session_breaks?.length || 0,
          );
        },
        children: `+ Add Break`,
      }),
    ],
  });
}
function _(_) {
  let { breakSession: _, fnOnUpdate: _, index: _, sDisplayTimeZone: _ } = _,
    _ = _(),
    [_, _, _, _] = _(() => [
      _.rtime_start,
      _.rtime_end,
      _.localized_break_description[_] || ``,
      Math.max(0, Math.floor((_.rtime_end - _.rtime_start) / 60)),
    ]);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(`div`, {
        children: [`Break # `, _ + 1],
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(_, {
        strDescription: `Break Start Time`,
        nEarliestTime: 0,
        fnGetTimeToUpdate: () => _,
        fnSetTimeToUpdate: (_) =>
          _({
            ..._,
            rtime_start: _,
            rtime_end: _ + _.PerMinute * _,
          }),
        fnIsValidDateTime: () => !0,
        bShowTimeZone: !0,
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(_, {
        type: `number`,
        min: 0,
        label: `Break duration in minutes`,
        onChange: (_) => {
          let _ = Number.parseInt(_.currentTarget.value);
          _({
            ..._,
            rtime_end: _.rtime_start + _.PerMinute * _,
          });
        },
        value: _,
      }),
      (0, _.jsx)(_, {
        type: `text`,
        label: `Break Description`,
        value: _,
        onChange: (_) => {
          let _ = {
            ..._,
          };
          ((_.localized_break_description[_] = _.currentTarget.value), _(_));
        },
      }),
      (0, _.jsx)(_, {
        rtime_start: _,
        rtime_end: _,
        sDisplayTimeZone: _,
      }),
    ],
  });
}
function _(_) {
  let { focusView: _, removeNode: _, schedule_id: _ } = _,
    _ = _(),
    _ = _(() =>
      _.GetEventModel().jsondata.meet_steam_schedules?.find(
        (_) => _.schedule_id == _,
      ),
    ),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]);
  return !_ || _.GetClanAccountID() != _()
    ? (0, _.jsx)(`div`, {
        children: `Error: Cannot edit meet steam schedule view`,
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            eventModel: _.GetEventModel(),
            scheduleData: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                onClick: _,
                tooltip: _(`#Button_Edit`),
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                onClick: _,
                tooltip: _(`#Button_Delete`),
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
          !!_ &&
            (0, _.jsx)(_, {
              hideModal: _,
              inputScheduleModel: _,
              fnUpdateSession: (_) => {
                let { scheduleIndex: _ } = _(_.schedule_id);
                ((_.GetEventModel().jsondata.meet_steam_schedules[_] = _),
                  _.SetDirty(_.description));
              },
            }),
          !!_ &&
            (0, _.jsx)(_, {
              active: !0,
              children: (0, _.jsx)(_, {
                strTitle: _(`#Button_Delete`),
                strDescription: _(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { scheduleIndex: _ } = _(_.schedule_id),
                    _ = _.GetEditModel(),
                    _ = [..._.GetEventModel().jsondata.meet_steam_schedules];
                  (_.splice(_, 1),
                    (_.GetEventModel().jsondata.meet_steam_schedules = _),
                    _.SetDirty(_.description),
                    _());
                },
                closeModal: _,
              }),
            }),
        ],
      });
}
function _(_) {
  let { schema: _ } = _,
    { callbacks: _, view: _ } = _(),
    [_, _] = _.useState(!1),
    _ = _.useCallback(
      (_, _) => {
        (_.dispatch(
          _.state._.insert(
            _.state.selection._,
            _.nodes.emoticon.create(null, _.text(_)),
          ),
        ),
          _ || _.focus());
      },
      [_, _],
    ),
    _ = _.useCallback(
      (_) => {
        _(!0);
        let _ = _(
          (0, _.jsx)(_, {
            OnSelected: _,
          }),
          _,
          {
            bOverlapHorizontal: !0,
          },
        );
        _(
          () => !_.visible,
          () => _(!1),
        );
      },
      [_],
    );
  return (0, _.jsx)(_, {
    tooltip: _(`#Editor_Emoticon`),
    onClick: _,
    toggled: _,
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let _ = _();
  return (
    _(_),
    (0, _.jsx)(_, {
      emoticonStore: _,
      OnSelected: _.OnSelected,
    })
  );
}
var _ = `KJ1XyPiGQj0-`,
  _ = `fiKe4PCXweM-`,
  _ = `yuw8NnJmdB8-`;
function _(_) {
  let { hideModal: _, fnUpdateSession: _, clanAccountID: _ } = _,
    [_, _] = (0, _.useState)(() => _(!0, null));
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      strTitle: _(`#UserPolls_Create_title`),
      onOK: () => _(_),
      closeModal: () => {
        (_(_(!0, null)), _());
      },
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          clanAccountID: _,
          userPollDef: _,
          fnSetDef: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let {
      hideModal: _,
      userPollDef: _,
      clanAccountID: _,
      fnUpdateUserPollDef: _,
    } = _,
    [_, _] = (0, _.useState)(() => _(!1, _));
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      strTitle: _(`#UserPolls_Edit_title`),
      onOK: () => {
        _(_);
      },
      onCancel: () => {
        _(_(!1, _));
      },
      closeModal: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          userPollDef: _,
          clanAccountID: _,
          fnSetDef: _,
        }),
      }),
    }),
  });
}
function _(_) {
  switch (_) {
    default:
    case _.k_EPollResult_NotVisible:
      return _(`#UserPolls_Visibility_None`);
    case _.k_EPollResult_Visible_After_End:
      return _(`#UserPolls_Visibility_End`);
    case _.k_EPollResult_Visible_After_Vote:
      return _(`#UserPolls_Visibility_Voter`);
    case _.k_EPollResult_Visible_After_Vote_Or_End:
      return _(`#UserPolls_Visibility_Voter_or_End`);
    case _.k_EPollResult_Visible_On_Demand:
      return _(`#UserPolls_Visibility_OnDemand`);
  }
}
function _(_) {
  let { userPollDef: _, fnSetDef: _ } = _,
    _ = _(),
    [_] = _(() => [_.results_visibility_settings]),
    _ = Object.values(_).map((_) => ({
      data: _,
      label: _(_),
    }));
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        type: `text`,
        label: _(`#UserPolls_Description`),
        value: _.Get(_.localized_poll_description, _),
        onChange: (_) => {
          let _ = {
            ..._,
          };
          ((_.localized_poll_description = _.Set(
            _.localized_poll_description,
            _,
            _.currentTarget.value,
          )),
            _(_));
        },
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsx)(_, {
        children: _(`#UserPolls_Visibility`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          strDropDownClassName: _,
          rgOptions: _,
          selectedOption: _,
          onChange: (_) => {
            _.data != _.results_visibility_settings &&
              _({
                ..._,
                results_visibility_settings: _.data,
              });
          },
          bDisableMouseOverlay: !0,
          contextMenuPositionOptions: {
            bDisableMouseOverlay: !0,
          },
        }),
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { clanAccountID: _, userPollDef: _, fnSetDef: _ } = _,
    _ = _(),
    _ = _(_.GetClanSteamID()),
    [_] = _(() => [_.user_poll_background]),
    _ = (0, _.useCallback)(
      (_, _, _, _, _) => {
        (_(_ != null && _ >= 0 && _ < 32, `Unexpected value for elang: ` + _),
          _(_ === `user_poll_background`, `Unexpected artwork type ` + _));
        let _ = _(_, _);
        _.image &&
          _({
            ..._,
            user_poll_background: _.image,
          });
      },
      [_, _],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _(`#UserPolls_BackgroundImage`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`p`, {
            children: _(`#UserPolls_BackgroundImage_desc`),
          }),
          (0, _.jsx)(_, {
            rgRealmList: _.GetIncludedRealmList(),
            rgSupportArtwork: _,
            strUploadAjaxURL: _,
            fnOnUploadSuccess: _,
            elOverrideDragAndDropText: _(
              `#Template_Section_MediaUpdate_Static_Dnd`,
            ),
            bTwoPhaseUpload: !0,
            bDirectTempStorageUpload: !0,
          }),
          !!_ &&
            (0, _.jsx)(`img`, {
              src: _(_, _),
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  switch (_) {
    case _.k_EPollVoter_AnyUser:
      return _(`#UserPolls_Voters_Anyone`);
    case _.k_EPollVoter_UserGameInLibrary:
      return _(`#UserPolls_Voters_Owners`);
    case _.k_EPollVoter_MinPlayTime:
      return _(`#UserPolls_Voters_Players`);
    case _.k_EPollVoter_MemberOfGroup:
      return _(`#UserPolls_Voters_Members`);
  }
}
function _(_) {
  let { clanAccountID: _, userPollDef: _, fnSetDef: _ } = _,
    [_, _] = _(_),
    [_, _] = _(() => [_.voter_min_playtime_seconds, _.voter_eligibility]),
    _ = (0, _.useMemo)(() => {
      let _ = [
        {
          label: _(_.k_EPollVoter_AnyUser),
          data: _.k_EPollVoter_AnyUser,
        },
      ];
      return (
        _ && _.is_ogg && _ != 4145017
          ? (_.push({
              label: _(_.k_EPollVoter_UserGameInLibrary),
              data: _.k_EPollVoter_UserGameInLibrary,
            }),
            _.push({
              label: _(_.k_EPollVoter_MinPlayTime),
              data: _.k_EPollVoter_MinPlayTime,
            }))
          : _ &&
            (!_.is_ogg || _ == 4145017) &&
            _.push({
              label: _(_.k_EPollVoter_MemberOfGroup),
              data: _.k_EPollVoter_MemberOfGroup,
            }),
        _
      );
    }, [_, _]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _(`#UserPolls_Voters`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            strDropDownClassName: _,
            rgOptions: _,
            selectedOption: _,
            onChange: (_) => {
              if (_.data != _.voter_eligibility) {
                let _ = {
                  ..._,
                  voter_eligibility: _.data,
                };
                (_.data == _.k_EPollVoter_MinPlayTime &&
                  (_.voter_min_playtime_seconds = 5 * _),
                  _(_));
              }
            },
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: {
              bDisableMouseOverlay: !0,
            },
          }),
          _ == _.k_EPollVoter_MinPlayTime &&
            (0, _.jsx)(`div`, {
              className: `_1iRX-KtzqgY-`,
              children: (0, _.jsx)(_, {
                type: `number`,
                label: _(`#UserPolls_MinPlayTime`),
                value: _ / _,
                min: 5,
                onChange: (_) => {
                  let _ = (Number.parseInt(_?.currentTarget?.value) ?? 5) * _;
                  _.voter_min_playtime_seconds != _ &&
                    _({
                      ..._,
                      voter_min_playtime_seconds: _,
                    });
                },
              }),
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { userPollDef: _, fnSetDef: _ } = _,
    [_, _] = _(() => [_.poll_end_time, _.poll_end_days_since_start]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _(`#UserPolls_Starts`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(`input`, {
                type: `radio`,
                name: `StartDateRadio`,
                _: `UserPollDialog_Days`,
                checked: !!_,
                onChange: () => {
                  _.poll_end_days_since_start ||
                    _({
                      ..._,
                      poll_end_time: void 0,
                      poll_end_days_since_start: _ * _,
                    });
                },
              }),
              (0, _.jsx)(`label`, {
                htmlFor: `UserPollDialog_Days`,
                children: (0, _.jsx)(`span`, {
                  children: _(`#UserPolls_EndTime_In_Days`),
                }),
              }),
            ],
          }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `_1iRX-KtzqgY-`,
              children: (0, _.jsx)(_, {
                type: `number`,
                value: _ / _,
                min: 1,
                onChange: (_) => {
                  let _ = (Number.parseInt(_?.currentTarget?.value) ?? 1) * _;
                  _.poll_end_days_since_start != _ &&
                    _({
                      ..._,
                      poll_end_time: void 0,
                      poll_end_days_since_start: _,
                    });
                },
              }),
            }),
          (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(`input`, {
                type: `radio`,
                name: `StartDateRadio`,
                _: `UserPollDialog_SpecificTime`,
                checked: !!_,
                onChange: () => {
                  _.poll_end_time ||
                    _({
                      ..._,
                      poll_end_days_since_start: void 0,
                      poll_end_time: Math.floor(Date.now() / 1e3) + _ * _,
                    });
                },
              }),
              (0, _.jsx)(`label`, {
                htmlFor: `UserPollDialog_SpecificTime`,
                children: (0, _.jsx)(`span`, {
                  children: _(`#UserPolls_EndTime_Specific`),
                }),
              }),
            ],
          }),
          !!_ &&
            (0, _.jsxs)(`div`, {
              className: _(`_1iRX-KtzqgY-`, `befdhdeb-HY-`),
              children: [
                (0, _.jsx)(_, {
                  strDescription: ``,
                  nEarliestTime: Math.floor(Date.now() / 1e3) + 3600,
                  fnGetTimeToUpdate: () => _,
                  fnSetTimeToUpdate: (_) => {
                    _.poll_end_time != _ &&
                      _({
                        ..._,
                        poll_end_days_since_start: void 0,
                        poll_end_time: _,
                      });
                  },
                  fnIsValidDateTime: () =>
                    _ > Math.floor(Date.now() / 1e3) + 3600,
                }),
                (0, _.jsx)(`span`, {
                  children: _(`#UserPolls_EndTime_Zone`),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
var _ = 7,
  _ = 86400,
  _ = 60;
function _(_, _) {
  if (_) {
    let _ = _.GetEditModel().GetEventModel().jsondata.user_polls || [],
      _ = 0;
    do _ = Math.floor(1e4 + Math.random() * 9e4);
    while (_ && _.findIndex((_) => _.poll_id == _) >= 0);
    return {
      poll_id: _,
      options: [],
      localized_poll_description: _([], 32, null),
      poll_end_days_since_start: _ * _,
      poll_end_time: void 0,
      results_visibility_settings: _.k_EPollResult_Visible_On_Demand,
      voter_eligibility: _.k_EPollVoter_AnyUser,
    };
  }
  return _
    ? {
        ..._,
        localized_poll_description: [..._.localized_poll_description],
      }
    : (_(
        !1,
        `HelperCreateOrCloneUserPollModel Expect Create or previous model`,
      ),
      null);
}
function _(_) {
  let {
      bCreate: _,
      hideModal: _,
      pollOptionsInput: _,
      fnUpdatePollOption: _,
    } = _,
    [_, _] = (0, _.useState)(() => _(_, _)),
    _ = _();
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      strTitle: _(_ ? `#UserPolls_Option_Create` : `#UserPolls_Option_Edit`),
      onOK: () => {
        (_(_), _());
      },
      onCancel: () => {
        (_(_(_, _)), _());
      },
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          type: `text`,
          label: _(`#UserPolls_Option_Title`),
          value: _.Get(_.localized_option, _),
          onChange: (_) => {
            let _ = {
              ..._,
            };
            ((_.localized_option = [..._.localized_option]),
              (_.localized_option = _.Set(
                _.localized_option,
                _,
                _.currentTarget.value,
              )),
              _(_));
          },
        }),
      }),
    }),
  });
}
function _(_, _) {
  if (_) {
    let _ = _.GetEditModel()
        .GetEventModel()
        .jsondata.user_polls?.reduce((_, _) => _.concat(_.options), []),
      _ = 0;
    do _ = Math.floor(1e4 + Math.random() * 9e4);
    while (_ && _.findIndex((_) => _.option_id == _) >= 0);
    return {
      option_id: _,
      localized_option: _([], 32, null),
    };
  }
  return _
    ? {
        ..._,
      }
    : (_(
        !1,
        `HelperCreateOrClonePollOptionModel Expect Create or previous model`,
      ),
      null);
}
function _(_) {
  let _ = _.GetEditModel();
  for (let _ = 0; _ < _.GetEventModel().jsondata.user_polls.length; ++_) {
    let _ = _.GetEventModel().jsondata.user_polls[_];
    for (let _ = 0; _ < _.options.length; ++_)
      if (_.options[_].option_id == _)
        return {
          pollIndex: _,
          optionIndex: _,
        };
  }
  return null;
}
function _(_) {
  let _ = _.GetEditModel();
  for (let _ = 0; _ < _.GetEventModel().jsondata.user_polls.length; ++_) {
    let _ = _.GetEventModel().jsondata.user_polls[_];
    if (_.poll_id == _)
      return {
        userPollDef: _,
        pollIndex: _,
      };
  }
  return null;
}
function _(_, _, _) {
  _.dispatch(
    _.state._.insert(
      _.state.selection._,
      _.create({
        poll_id: _,
      }),
    ),
  );
}
function _(_) {
  let { focusView: _, removeNode: _, poll_id: _ } = _,
    _ = _(),
    _ = _(() =>
      _.GetEventModel().jsondata.user_polls?.find((_) => _.poll_id == _),
    ),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            userPollDef: _,
            focusView: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                onClick: _,
                tooltip: _(`#Button_Edit`),
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                onClick: _,
                tooltip: _(`#Button_Delete`),
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                onClick: () => {},
                tooltip: _(_.results_visibility_settings),
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                onClick: () => {},
                tooltip: _(_.voter_eligibility),
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
          !!_ &&
            (0, _.jsx)(_, {
              hideModal: _,
              userPollDef: _,
              clanAccountID: _.GetClanAccountID(),
              fnUpdateUserPollDef: (_) => {
                let { pollIndex: _ } = _(_.poll_id),
                  _ = _.GetEditModel();
                ((_.GetEventModel().jsondata.user_polls[_] = _),
                  _.SetDirty(_.description));
              },
            }),
          !!_ &&
            (0, _.jsx)(_, {
              active: !0,
              children: (0, _.jsx)(_, {
                strTitle: _(`#Button_Delete`),
                strDescription: _(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { pollIndex: _ } = _(_.poll_id),
                    _ = _.GetEditModel(),
                    _ = [..._.GetEventModel().jsondata.user_polls];
                  (_.splice(_, 1),
                    (_.GetEventModel().jsondata.user_polls = _),
                    _.SetDirty(_.description),
                    _());
                },
                closeModal: _,
              }),
            }),
        ],
      })
    : (0, _.jsx)(`div`, {
        className: _,
        children: _(`#UserPolls_Editor_FailToFindModel`, _),
      });
}
function _(_) {
  let { userPollDef: _, focusView: _ } = _,
    [_, _] = _(() => [_.options || [], _.randomize_option_order]),
    _ = _(),
    _ = _(),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]);
  return _
    ? (0, _.jsxs)(_, {
        userPollDef: _,
        eventModel: _.GetEventModel(),
        lang: _,
        children: [
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                focusView: _,
                optionID: _.option_id,
              },
              `polloption` + _.poll_id + `_` + _.option_id,
            ),
          ),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: ``,
                onClick: _,
                children: _(`#UserPolls_Option_Add`),
              }),
              (0, _.jsx)(_, {
                className: ``,
                onClick: _,
                children: _(`#UserPolls_Option_Reorder`),
              }),
            ],
          }),
          _ &&
            (0, _.jsx)(_, {
              bCreate: !0,
              hideModal: _,
              fnUpdatePollOption: (_) => {
                let _ = _.GetEditModel();
                ((_.options ||= []),
                  _.options.push(_),
                  _.SetDirty(_.description));
              },
            }),
          _ &&
            (0, _.jsx)(_, {
              hideModal: _,
              options: _,
              bRandomize: _,
              fnUpdateOptions: (_, _) => {
                ((_.randomize_option_order = _), (_.options = _));
              },
            }),
        ],
      })
    : null;
}
function _(_) {
  let { options: _, bRandomize: _, fnUpdateOptions: _, hideModal: _ } = _,
    _ = _(),
    [_, _] = (0, _.useState)(_),
    [_, _] = (0, _.useState)(_);
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsxs)(_, {
      strTitle: _(`#UserPolls_Option_Reorder`),
      strDescription: _(`#UserPolls_Option_Reorder_desc`),
      onCancel: () => {
        (_(_), _(_));
      },
      onOK: () => {
        _([..._], _);
      },
      closeModal: _,
      children: [
        (0, _.jsx)(_, {
          label: _(`#UserPolls_Option_Randomize`),
          checked: _,
          onChange: _,
        }),
        (0, _.jsx)(_, {
          items: _,
          render: (_) =>
            (0, _.jsx)(`div`, {
              children:
                _.localized_option?.[_] || _.localized_option?.[0] || ``,
            }),
          onReorder: (_) => _(_),
        }),
      ],
    }),
  });
}
function _(_) {
  let { optionID: _, focusView: _ } = _,
    [_, _] = _(),
    _ = _(() => {
      let { optionIndex: _, pollIndex: _ } = _(_);
      return _.GetEditModel().GetEventModel().jsondata.user_polls[_].options[_];
    }),
    _ = _(),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]);
  return (0, _.jsxs)(`div`, {
    className: _,
    ..._,
    children: [
      (0, _.jsx)(_, {
        pollOptionDef: _,
        lang: _,
      }),
      !!_ &&
        (0, _.jsxs)(`div`, {
          className: `F-Iu9ouJkU4-`,
          children: [
            (0, _.jsx)(_, {
              onClick: _,
              tooltip: _(`#Button_Edit`),
              children: (0, _.jsx)(_, {}),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              tooltip: _(`#Button_Delete`),
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
      !!_ &&
        (0, _.jsx)(_, {
          bCreate: !1,
          hideModal: _,
          pollOptionsInput: _,
          fnUpdatePollOption: (_) => {
            let _ = _.GetEditModel(),
              { optionIndex: _, pollIndex: _ } = _(_),
              _ = [..._.GetEventModel().jsondata.user_polls[_].options];
            ((_[_] = _),
              (_.GetEventModel().jsondata.user_polls[_].options = _),
              _.SetDirty(_.description));
          },
        }),
      !!_ &&
        (0, _.jsx)(_, {
          active: !0,
          children: (0, _.jsx)(_, {
            strTitle: _(`#Button_Delete`),
            strDescription: _(`#Dialog_AreYouSure`),
            onOK: () => {
              let _ = _.GetEditModel(),
                { optionIndex: _, pollIndex: _ } = _(_),
                _ = [..._.GetEventModel().jsondata.user_polls[_].options];
              (_.splice(_, 1),
                (_.GetEventModel().jsondata.user_polls[_].options = _),
                _.SetDirty(_.description));
            },
            closeModal: _,
          }),
        }),
    ],
  });
}
var _ = _.memo(function (_) {
  let {
    view: _,
    schema: _,
    refUpdateToolbar: _,
    className: _,
    clanSteamID: _,
    bSpellcheckEnabled: _,
    setSpellcheckEnabled: _,
  } = _;
  return (0, _.jsx)(_, {
    refUpdateToolbar: _,
    view: _,
    children: (0, _.jsxs)(`div`, {
      className: _.className,
      children: [
        (0, _.jsxs)(_, {
          className: _.className,
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              schema: _,
            }),
            (0, _.jsx)(_, {}),
            _.marks.link &&
              (0, _.jsx)(_, {
                schema: _,
              }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              schema: _,
            }),
            (0, _.jsx)(_, {
              schema: _,
              levels: 3,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              schema: _,
            }),
            (0, _.jsx)(_, {
              schema: _,
              clanSteamID: _,
            }),
            (0, _.jsx)(_, {
              schema: _,
            }),
            (0, _.jsx)(_, {
              schema: _,
              showIndentButtonsAsNeeded: !0,
            }),
            (0, _.jsx)(_, {}),
            _ &&
              (0, _.jsx)(_, {
                bSpellcheckEnabled: _,
                setSpellcheckEnabled: _,
              }),
            _.nodes.meetsteamsessiongroup &&
              (0, _.jsx)(_, {
                schema: _,
              }),
            _.nodes.meetsteamscheduleview &&
              (0, _.jsx)(_, {
                schema: _,
              }),
            _.nodes.userpolls &&
              _.is_support &&
              (0, _.jsx)(_, {
                schema: _,
              }),
          ],
        }),
        (0, _.jsx)(_, {
          className: _.className,
          schema: _,
        }),
      ],
    }),
  });
});
function _(_) {
  let _ = _();
  return (0, _.jsx)(_, {
    schema: _.schema,
    addtlAttrs: _,
  });
}
function _(_) {
  let { schema: _ } = _,
    { callbacks: _, view: _ } = _(),
    _ = _(),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _.focus());
    }, [_, _]),
    _ = _.useCallback(
      (_) => {
        (_.GetEventModel().jsondata.user_polls ||
          (_.GetEventModel().jsondata.user_polls = []),
          _.GetEventModel().jsondata.user_polls.push({
            ..._,
          }),
          _(_, _.nodes.userpolls, _.poll_id),
          _());
      },
      [_, _, _, _],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          hideModal: _,
          clanAccountID: _.GetClanAccountID(),
          fnUpdateSession: _,
        }),
      (0, _.jsx)(_, {
        tooltip: _(`#UserPolls_Toolbar_ttip`),
        onClick: _,
        toggled: _,
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let { schema: _, clanSteamID: _ } = _,
    { callbacks: _, view: _ } = _(),
    { image: _, video: _, previewyoutube: _ } = _.nodes,
    _ = _.useCallback(
      (_, _) => {
        _.dispatch(_.state._.insert(_.state.selection._, _.create(_)));
      },
      [_],
    ),
    _ = _.useCallback(() => _.focus(), [_]),
    {
      showInsertImageModal: _,
      showInsertVideoModal: _,
      imageModal: _,
      activeModal: _,
    } = _({
      clanSteamID: _,
      imageNodeType: _,
      videoNodeType: _,
      onItemSelected: _,
      onHideModal: _,
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _,
      _ &&
        (0, _.jsx)(_, {
          tooltip: _(`#EventEditor_InsertImage_Title`),
          onClick: _,
          toggled: _ == `image`,
          children: (0, _.jsx)(_, {}),
        }),
      _ &&
        (0, _.jsx)(_, {
          tooltip: _(`#EventEditor_EditVideo_Title`),
          onClick: _,
          toggled: _ == `video`,
          children: (0, _.jsx)(_, {}),
        }),
      _ &&
        (0, _.jsx)(_, {
          schema: _,
        }),
      (_ || _ || _) && (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { schema: _ } = _,
    { callbacks: _, view: _ } = _(),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _.focus());
    }, [_, _]),
    _ = _.useCallback(
      (_, _) => {
        (_(_, _.nodes.previewyoutube, _, _), _());
      },
      [_, _, _],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          hideModal: _,
          onSave: _,
        }),
      (0, _.jsx)(_, {
        tooltip: _(`#EventEditor_InsertYouTube`),
        onClick: _,
        toggled: _,
        children: (0, _.jsx)(`img`, {
          src: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { schema: _ } = _,
    { callbacks: _, view: _ } = _(),
    _ = _(),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _.focus());
    }, [_, _]),
    _ = _.useCallback(
      (_, _) => {
        (_.GetEventModel().jsondata.meet_steam_groups ||
          (_.GetEventModel().jsondata.meet_steam_groups = []),
          _.GetEventModel().jsondata.meet_steam_groups.push({
            ..._,
            sessions: [_],
          }),
          _(_, _.nodes.meetsteamsessiongroup, _.group_id),
          _());
      },
      [_, _, _, _],
    );
  if (_?.GetClanAccountID() == _())
    return (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(_, {
            hideModal: _,
            fnUpdateSession: _,
          }),
        (0, _.jsx)(_, {
          tooltip: _(`#MeetSteam_add_group_ttip`),
          onClick: _,
          toggled: _,
          children: (0, _.jsx)(`img`, {
            src: _,
          }),
        }),
      ],
    });
}
function _(_) {
  let { schema: _ } = _,
    { callbacks: _, view: _ } = _(),
    _ = _(),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _.focus());
    }, [_, _]),
    _ = _.useCallback(
      (_) => {
        (_.GetEventModel().jsondata.meet_steam_schedules ||
          (_.GetEventModel().jsondata.meet_steam_schedules = []),
          _.GetEventModel().jsondata.meet_steam_schedules.push({
            ..._,
          }),
          _(_, _.nodes.meetsteamscheduleview, _.schedule_id),
          _());
      },
      [_, _, _, _],
    );
  if (_?.GetClanAccountID() == _())
    return (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(_, {
            hideModal: _,
            inputScheduleModel: null,
            fnUpdateSession: _,
          }),
        (0, _.jsx)(_, {
          tooltip: _(`#MeetSteam_add_schedule_ttip`),
          onClick: _,
          toggled: _,
          children: (0, _.jsx)(`img`, {
            src: _,
          }),
        }),
      ],
    });
}
function _(_) {
  let { schema: _, emoticonStore: _ } = _,
    _ = _.nodes.emoticon;
  (_(_),
    _(
      _.useMemo(
        () =>
          _({
            rules: [_(/:([a-zA-Z0-9_]+):$/, _, _)],
          }),
        [_, _],
      ),
    ));
  let _ = _.useMemo(
    () => [
      {
        type: _,
        component: _,
        readProps: (_) => ({
          emoticonStore: _,
          emoticon: _.textContent,
        }),
      },
    ],
    [_, _],
  );
  return (0, _.jsx)(_, {
    specs: _,
  });
}
function _(_) {
  let { selected: _, emoticonStore: _, emoticon: _ } = _;
  return (
    _(_),
    _.BHasEmoticon(_)
      ? (0, _.jsx)(`span`, {
          style: _
            ? {
                background: `#54a5d4`,
                filter: `brightness(1.2)`,
              }
            : void 0,
          children: (0, _.jsx)(_, {
            emoticon: _,
          }),
        })
      : `:${_}:`
  );
}
function _(_, _, _) {
  return new _(_, (_, _, _, _) => {
    let _ = _[1];
    if (!_.BHasEmoticon(_)) return null;
    let _ = _.create(null, _.schema.text(_));
    return _._.replaceWith(_, _, _);
  });
}
var _ = _(function (_) {
  let { editModel: _ } = _,
    _ = _.GetEventModel().loadedAllLanguages,
    _ = _.GetCurEditLanguage();
  return _
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          ..._,
          eCurrentEditLanguage: _,
        }),
      })
    : null;
});
function _(_, _, _, _) {
  let _ = _.GetDescription(_);
  return (
    (_ = _?.replace(
      _.GetUnvalidatedEmoticonReplaceRegex(),
      `[emoticon]$1[/emoticon]`,
    )),
    new _(_, _, (_) => _.SetDescription(_, _), {
      parser: {
        fnProcessText: (_) => _(_.pm_schema, _, _.pm_schema.marks.link, _),
      },
    })
  );
}
var _ = _.memo(function (_) {
  let {
      editModel: _,
      refOnInsertImage: _,
      limitBBCode: _,
      eCurrentEditLanguage: _,
    } = _,
    [_, _] = _.useState(),
    _ = _.useMemo(() => _(_), [_]),
    [_, _] = _.useState(),
    _ = _(_.GetClanSteamID(), _);
  _.useEffect(() => {
    _(_(_, _, _, _));
  }, [_, _, _, _]);
  let _ = _.useRef(void 0);
  _(_, {
    msAutosaveTimeout: 1e3,
  });
  let { nodes: _, marks: _ } = _.pm_schema;
  return (
    _(_, _.image, _.video, _.link, _),
    (0, _.jsx)(_, {
      clanSteamID: _.GetClanSteamID(),
      imageNode: _.image,
      videoNode: _.video,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            view: _,
            schema: _.pm_schema,
            refUpdateToolbar: _,
            className: _,
            clanSteamID: _.GetClanSteamID(),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              pmState: _,
              className: _(_, _),
              refOnUpdate: _,
              refView: _,
              panelProps: {
                onBlur: () => _.CommitChanges(),
              },
              children: (0, _.jsx)(_, {
                eventSchemaConfig: _,
                editModel: _,
                onURLPasted: _,
              }),
            }),
          }),
        ],
      }),
    })
  );
});
function _(_, _) {
  let { nodes: _ } = _.pm_schema,
    _ = _(_, _.image, _.video),
    _ = _(_.dynamiclink);
  return _.useCallback(
    (..._) => {
      let _ = `default`;
      return (_ && (_ = _(..._)), _ == "default" && _ && (_ = _(..._)), _);
    },
    [_, _],
  );
}
var _ = _.memo(function (_) {
  let { eventSchemaConfig: _, editModel: _, onURLPasted: _ } = _,
    _ = _(),
    { marks: _, nodes: _ } = _.pm_schema;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        linkMarkType: _.link,
        onURLPasted: _,
        schema: _.pm_schema,
      }),
      _.image &&
        (0, _.jsx)(_, {
          nodeType: _.image,
        }),
      (0, _.jsx)(_, {
        schemaConfig: _,
        editModel: _,
        clanSteamID: _.GetClanSteamID(),
      }),
      (0, _.jsx)(_, {
        emoticonStore: _,
        schema: _.pm_schema,
      }),
    ],
  });
});
function _(_) {
  let { schemaConfig: _, editModel: _, clanSteamID: _ } = _,
    _ = _.pm_schema,
    _ = _.useMemo(() => _(_), [_]);
  _(_);
  let _ = _.nodes,
    _ = _.image,
    _ = _.video,
    _ = _.carousel,
    _ = _.useCallback(
      (_, _) => ({
        schemaConfig: _,
        node: _,
        imageNodeType: _,
        videoNodeType: _,
        carouselNodeType: _,
        editModel: _,
        clanSteamID: _,
      }),
      [_, _, _, _, _, _],
    ),
    _ = _.useMemo(
      () => [
        _.previewyoutube && {
          type: _.previewyoutube,
          component: _,
          readProps: (_) => ({
            videoID: _.attrs.videoID,
            align: _.attrs.align,
            editModel: _,
          }),
        },
        _ && {
          type: _,
          component: _,
          readProps: (_) => _(`image`, _),
        },
        _ && {
          type: _,
          component: _,
          readProps: (_) => _(`video`, _),
        },
        _.meetsteamsessiongroup && {
          type: _.meetsteamsessiongroup,
          component: _,
          readProps: (_) => ({
            group_id: _.attrs.group_id,
          }),
        },
        _.meetsteamscheduleview && {
          type: _.meetsteamscheduleview,
          component: _,
          readProps: (_) => ({
            schedule_id: _.attrs.schedule_id,
          }),
        },
        _.userpolls && {
          type: _.userpolls,
          component: _,
          readProps: (_) => ({
            poll_id: _.attrs.poll_id,
          }),
        },
        _.dynamiclink && {
          type: _.dynamiclink,
          component: _,
          readProps: (_) => ({
            editModel: _,
            href: _.attrs.href,
            schema: _.pm_schema,
          }),
        },
        _.carousel && {
          type: _.carousel,
          component: _,
          readProps: (_) => ({
            node: _,
            imageNodeType: _,
            videoNodeType: _,
            schemaConfig: _,
            editModel: _,
          }),
        },
      ],
      [_, _, _, _, _, _],
    );
  return (0, _.jsx)(_, {
    specs: _,
  });
}
export { _ as default };
