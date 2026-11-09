import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _ } from "./libraries.js";
import { _ } from "./throbber.js";
import { _, _ } from "./remotedownloadhooks.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
import { _ } from "./partnereventslogin.js";
function _(_) {
  try {
    if (!_ || typeof _ != `string`) return null;
    let _ = _.split(`.`);
    if (_.length !== 3) return null;
    let [_, _] = _,
      _ = _(_),
      _ = _(_);
    return !_ || !_
      ? null
      : {
          header: JSON.parse(_),
          body: JSON.parse(_),
        };
  } catch (_) {
    return (
      console.error(`Exception while attempting to decode token: "${_}"`), null
    );
  }
}
function _(_) {
  return atob(_.replace(/-/g, `+`).replace(/_/g, `/`));
}
_();
var _ = `HQgdwH5tXUk-`,
  _ = `LjnhAYlhNQs-`,
  _ = `SqHuEyf-R0c-`,
  _ = `HiGC36Dtjco-`,
  _ = `_8-2BJN7bxQU-`,
  _ = `SmcWa71lVCc-`,
  _ = `s4dp5QeFSkw-`,
  _ = `F5yttsqclrw-`,
  _ = `hvRNTEhrZxc-`,
  _ = `S0Tivllig-E-`,
  _ = `goxfDMgh3ik-`,
  _ = _(_()),
  _,
  _ = 864e5;
function _(_) {
  return `appinfo_${_}_${_.LANGUAGE}`;
}
function _(_) {
  return !!(_ && Date.now() - _.timeCached < _);
}
function _(_, _) {
  return (
    (_ ||= new _.default(
      async (_) => {
        let _ = new Map();
        (await Promise.all(_.map((_) => _.GetObject(_(_)))))
          .filter(_)
          .forEach(({ value: _ }) => _.set(_.appid, _));
        let _ = _.slice().filter((_) => !_.has(_));
        if (_.length) {
          let _ = _.Init(_);
          _.Body().set_language(_(_.LANGUAGE)), _.Body().set_appids(_);
          let _ = await _.GetApps(_, _);
          if (_.GetEResult() != 1) throw _.GetErrorMessage();
          _.Body()
            .toObject()
            .apps.forEach((_) => {
              _.StoreObject(_(_.appid), {
                timeCached: Date.now(),
                value: _,
              }),
                _.set(_.appid, _);
            });
        }
        return _.map((_) => _.get(_));
      },
      {
        cache: !1,
      },
    )),
    _
  );
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    queryKey: [`appinfo`, _],
    queryFn: async () => _(_, _).load(_),
    staleTime: _,
    enabled: !!_,
  }).data;
}
var _ = _();
function _(_) {
  return `?joinsessionid=${_}`;
}
function _(_) {
  return (0, _.jsx)(_, {
    className: _,
    onClick: () =>
      (window.location.href =
        `steam://launch/${_.steamAppId}` + _(_.sessionID)),
    children: _.children,
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _.isSuccess
    ? _.data?.sessions?.length > 0
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              className: _,
              children: `Available Steam Sessions:`,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.data?.sessions.map((_) =>
                (0, _.jsxs)(
                  `div`,
                  {
                    className: _,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: _.machine_name,
                      }),
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: _.os_name,
                      }),
                      (0, _.jsx)(_, {
                        className: _,
                        onClick: () =>
                          _(
                            _,
                            _.client_instanceid,
                            _.steamAppId,
                            _(_.sessionID),
                          ),
                        children: `Launch Game`,
                      }),
                    ],
                  },
                  _.client_instanceid,
                ),
              ),
            }),
          ],
        })
      : (0, _.jsx)(`div`, {
          className: void 0,
          children: `No logged in sessions`,
        })
    : _.isFetching || _.isRefetching
      ? (0, _.jsx)(_, {})
      : (0, _.jsxs)(`div`, {
          className: void 0,
          children: [`Error `, _.error.message],
        });
}
function _(_) {
  let _ = _(_.steamAppId);
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: `Join Game Session`,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `You've been invited to join a game! Click below to launch `,
              _.friendly_name || _.name,
              ` on Steam and start playing.`,
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`iframe`, {
              src: _.sessionLiveDataUrl,
            }),
          }),
          _.IN_CLIENT
            ? (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  ..._,
                  children: `Launch Game`,
                }),
              })
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _.logged_in
                      ? (0, _.jsx)(_, {
                          ..._,
                        })
                      : (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(_, {
                              children: `Login to join on another device`,
                            }),
                            (0, _.jsx)(_, {
                              onClick: _,
                              children: _(`#Login_SignIn`),
                            }),
                          ],
                        }),
                  }),
                  !_.IN_MOBILE_WEBVIEW &&
                    (0, _.jsxs)(`div`, {
                      className: `SqHuEyf-R0c-`,
                      children: [
                        (0, _.jsx)(_, {
                          children: `Or launch on this PC`,
                        }),
                        (0, _.jsx)(_, {
                          ..._,
                          children: `Launch Game Here`,
                        }),
                      ],
                    }),
                ],
              }),
        ],
      })
    : (0, _.jsx)(_, {});
}
function _() {
  let _ = _(`multiplayersession_join`, `application_config`),
    { header: _, body: _ } = _(new URLSearchParams(_().search).get(`jws`)) || {
      header: {},
      body: {},
    },
    { steamAppId: _ } = _,
    _ = _[_.jws_sessionid_key],
    _ = _[_.jws_livedata_url_key];
  return (
    typeof _ == `string` && (_ = parseInt(_)),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        !_ || !_ || !_
          ? (0, _.jsx)(`div`, {
              children: `Invalid session link`,
            })
          : (0, _.jsx)(_, {
              steamAppId: _,
              sessionLiveDataUrl: _,
              sessionID: _,
            }),
        ` `,
      ],
    })
  );
}
export { _ as default };
