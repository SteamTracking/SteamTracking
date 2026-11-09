import "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import "./steammessages_quest_pb.js";
import { _, _, _, _ } from "./main.js";
import { _, _, _, _, _, _, _ } from "./summersale2021store.js";
_();
var _ = `lzdS-shJ99Q-`,
  _ = `Bi1KUETOty0-`,
  _ = `i-g5ZtDKePs-`,
  _ = `_68khcGww89o-`,
  _ = `ICMAEivn9RA-`,
  _ = `XZcLyc9g0CY-`,
  _ = `kni-28dGLz4-`,
  _ = `_7huRhU8k3kY-`,
  _ = `o-x8158Kjaw-`,
  _ = `xMI6n9ZpWJo-`,
  _ = `_6S1mPrnZoJA-`,
  _ = `hmlT5uI2iFo-`,
  _ = `-Oh3kYql8qE-`,
  _ = `quEL6nRgkHU-`,
  _ = `Bk8HeYAmcxA-`,
  _ = `U4LVrnuK9mQ-`,
  _ = `TVvt2jSqPxE-`,
  _ = `F81q5JdFFbs-`,
  _ = `SOSgv9AXa5E-`,
  _ = `rjnRPU-qxvU-`,
  _ = `KW8oAvnSjMw-`,
  _ = `fJ1aZ8mlTv4-`,
  _ = `Tw0ESQFMsyY-`,
  _ = `Pe4RnxXlyuA-`,
  _ = `_2MUcd-trdsU-`,
  _ = `SpngiO9a2WA-`,
  _ = `Bh4iq-F-F0M-`,
  _ = `N9GZo1FTZJs-`,
  _ = `Y9ApdMsl8Y0-`,
  _ = `RlksnMM6EMs-`,
  _ = `b5SnSmoDFvk-`,
  _ = `C8iavsJdriA-`,
  _ = `PunVunzQvoc-`,
  _ = _(),
  _ = () => {
    _();
    let _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = [],
      _ = [];
    _.forEach((_) => {
      let _ = _.eGenre,
        _ = _.STORE_BASE_URL + `sale/` + _.strSalePage,
        _ = _(
          `#Summer_21_Story_Enter`,
          (0, _.jsx)(`span`, {
            children: _(_.strGenreName),
          }),
        );
      if (_.has(_)) {
        let _ = ``;
        _.get(_).choice == 1
          ? (_ = _.strResultA + `_Summary`)
          : _.get(_).choice == 2 && (_ = _.strResultB + `_Summary`),
          _.push(
            (0, _.jsx)(
              _,
              {
                strSubheader: _,
                bClaimed: !0,
                strBackgroundColor: _.strBackgroundColor,
                eGenre: _.eGenre,
                strTitle: _.strPageTitle,
                strSaleURL: _,
                strSummary: _,
              },
              _,
            ),
          );
      } else {
        let _ = ``;
        _.length || (_ = `next`),
          _.push(
            (0, _.jsx)(
              _,
              {
                strID: _,
                strSubheader: _,
                strBackgroundColor: `#7C5F5A`,
                bClaimed: !1,
                eGenre: _.eGenre,
                strTitle: _.strPageTitle,
                strSaleURL: _,
                strSummary: `#Summer_21_Story_Next_Intro`,
              },
              _,
            ),
          );
      }
    });
    let _ = _.concat(_);
    return (0, _.jsx)(`div`, {
      className: _(_, _.LANGUAGE),
      children: (0, _.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, _.jsxs)(`a`, {
            href: _.STORE_BASE_URL,
            children: [
              _ &&
                (0, _.jsx)(`img`, {
                  className: `BsHO-XUsE9Y-`,
                  src: _,
                }),
              _ &&
                (0, _.jsx)(`img`, {
                  className: `RonG1NGMvmU-`,
                  src: _,
                }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: _(`#Summer_21_Overview_Title_Prefix`),
                      }),
                      _(`#Summer_21_Overview_Title`),
                    ],
                  }),
                  (0, _.jsx)(`div`, {
                    className: _(_, _),
                    children: _(`#Summer_21_Overview_Description1`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _(_, _),
                    children: _(`#Summer_21_Overview_Description3`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _(_, _),
                    children: _(`#Summer_21_Overview_Description4`),
                  }),
                  (0, _.jsxs)(`a`, {
                    _: `wallpapers`,
                    href:
                      _.MEDIA_CDN_URL +
                      `store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip`,
                    className: _(_, _, _),
                    children: [`*`, _(`#Summer21_Story_DownloadWallpaper`)],
                  }),
                  (0, _.jsx)(`div`, {
                    className: _(_, _),
                    children: _(`#Summer_21_Overview_Description2`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _(_, _),
                    children: _(`#Summer_21_Story_Intro`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _(_, _),
                    children: _(`#Summer_21_Story_Next`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _(_),
                    children: _,
                  }),
                ],
              }),
              (0, _.jsx)(_, {}),
            ],
          }),
        ],
      }),
    });
  },
  _ = (_) => {
    let _ = _(),
      _;
    if (_ == 51)
      _ = {
        badge_name: `#Summer21_Badge_Outcome1_Title`,
        badge_desc: `#Summer21_Badge_Outcome1_Description`,
        badge_class: _,
      };
    else if (_ == 52)
      _ = {
        badge_name: `#Summer21_Badge_Outcome2_Title`,
        badge_desc: `#Summer21_Badge_Outcome2_Description`,
        badge_class: _,
      };
    else if (_ == 53)
      _ = {
        badge_name: `#Summer21_Badge_Outcome3_Title`,
        badge_desc: `#Summer21_Badge_Outcome3_Description`,
        badge_class: _,
      };
    else if (_ == 54)
      _ = {
        badge_name: `#Summer21_Badge_Outcome4_Title`,
        badge_desc: `#Summer21_Badge_Outcome4_Description`,
        badge_class: _,
      };
    else if (_ == 55)
      _ = {
        badge_name: `#Summer21_Badge_Outcome5_Title`,
        badge_desc: `#Summer21_Badge_Outcome5_Description`,
        badge_class: _,
      };
    else return null;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, _, _),
          children: _(`#Summer21_Badge_Unlocked_Description`),
        }),
        (0, _.jsxs)(`div`, {
          _: `badge`,
          className: _(_, _),
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#Summer21_Badge_Prelude`),
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(_.badge_name),
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(_.badge_desc),
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`a`, {
                  className: _(_, _.badge_class),
                  href: _.COMMUNITY_BASE_URL + `my/badges/` + _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#Summer21_Badge_Congrats1`),
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#Summer21_Badge_Congrats2`),
                }),
                (0, _.jsx)(`a`, {
                  className: _,
                  href: _.COMMUNITY_BASE_URL + `my/edit/avatar/` + _,
                  children: _(`#Summer21_Badge_View`),
                }),
                (0, _.jsx)(`a`, {
                  className: _,
                  href: _.COMMUNITY_BASE_URL + `my/edit/avatar/` + _,
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: _(`#Summer21_Story_End`),
        }),
      ],
    });
  },
  _ = (_) => {
    let _ = _(_.eGenre);
    return (0, _.jsxs)(`a`, {
      _: _.strID,
      href: _.strSaleURL,
      style: {
        backgroundColor: `${_.strBackgroundColor}`,
      },
      className: _(_, void 0),
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: _.strSubheader,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(_.strTitle),
            }),
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: _(_.strSummary),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `_9BmNqAzIk7s-`,
                style: {
                  backgroundImage: `url(${_})`,
                },
              }),
            !_.bClaimed &&
              (0, _.jsx)(`div`, {
                className: _(`_9BmNqAzIk7s-`, `TYimPHbowxs-`),
              }),
          ],
        }),
      ],
    });
  };
export { _ as default };
