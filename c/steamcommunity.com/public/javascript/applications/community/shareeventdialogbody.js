import { _ } from "./rolldown-runtime.js";
import { _, _, _ } from "./libraries.js";
import { _, _, _ } from "./vodquery.js";
import { _ } from "./throbber.js";
import { _, _ } from "./carouselarrows.js";
import { _, _ } from "./languagepicker.js";
import { _ } from "./appinfostore.js";
import { _ } from "./playerstore.js";
import { _ } from "./linktoeventforusertocopy.js";
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
} from "./main.js";
import "./twitter_large.js";
import { _ } from "./reddit_large.js";
var _ = _(_(), 1),
  _ = `j59mI0R4Mls-`,
  _ = `hYzeNZ6Fv5E-`,
  _ = `_7KwGD4ys9So-`,
  _ = `rgEtYZWJk28-`,
  _ = _();
function _(_, _) {
  return _.trim().length
    ? _ +
        `

` +
        _
    : _;
}
async function _(_, _, _) {
  if (_.IN_STEAMUI) {
    let _ = _.Init(_);
    _.Body().set_appid(_), _.Body().set_status_text(_);
    let _ = await _.PostStatusToFriends(_.CMInterface.GetServiceTransport(), _);
    if (_.GetEResult() != 1) throw Error(String(_.GetEResult()));
    return;
  }
  let _ = new FormData();
  _.append(`appid`, String(_ ?? 0)),
    _.append(`status_text`, _),
    _.append(`sessionid`, _());
  let _ = await fetch(_ + `ajaxpostuserstatus`, {
      method: `POST`,
      body: _,
      credentials: `include`,
    }),
    _;
  try {
    _ = _._ ? await _.json() : void 0;
  } catch {
    _ = void 0;
  }
  if (_?.success != 1) throw Error(_?.message ?? _.statusText);
}
function _(_) {
  let { appid: _, eventLink: _, emoticonStore: _, closeModal: _ } = _,
    { data: _ } = _(_.steamid),
    [_, _] = _.useState(``),
    _ =
      _.COMMUNITY_BASE_URL +
      `profiles/` +
      _.InitFromAccountID(_.accountid, _.EUNIVERSE).ConvertTo64BitString() +
      `/`,
    _ = _({
      mutationFn: () => _(_, _, _(_, _)),
    });
  return _.isIdle
    ? (0, _.jsx)(_, {
        strDescription: ``,
        strTitle: _(`#Button_Share`),
        onCancel: _,
        onOK: () => _.mutate(),
        strOKButtonText: _(`#Button_Post`),
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              children: _(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`img`, {
                      className: _,
                      src: _?.avatar_url,
                      alt: ``,
                      "data-miniprofile": `s` + _.steamid,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _(_),
                      children: (0, _.jsx)(_, {
                        strPlaceholder: _(
                          `#EventDisplay_Share_OnMyStatus_Placeholder`,
                        ),
                        fnGetCurText: () => _,
                        fnOnTextChange: (_) => _(_.currentTarget.value),
                        fnSetText: _,
                        emoticonStore: _,
                        bSupportHTMLImport: !1,
                        showFormatHelp: `UserStatusPublished`,
                        limitBBCode: _,
                        classNameForTextArea: _,
                        bEmbeddedInDialog: !0,
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    text: _,
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    : (0, _.jsx)(_, {
        strDescription: ``,
        strTitle: _(`#Button_Share`),
        onCancel: _,
        onOK: _,
        bAlertDialog: !0,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              children: _(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _.isPending &&
                  (0, _.jsx)(_, {
                    position: `center`,
                  }),
                _.isSuccess &&
                  (0, _.jsx)(`div`, {
                    children: _(`#EventDisplay_Share_Success`),
                  }),
                _.isError &&
                  (0, _.jsx)(`div`, {
                    children:
                      _(`#EventDisplay_Share_Failure`) +
                      `

` +
                      _.error.message,
                  }),
                _.isSuccess &&
                  (0, _.jsx)(`a`, {
                    href: _ + `home`,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    rel: `noreferrer`,
                    children: _(`#EventDisplay_Share_OpenActivityFeed`),
                  }),
              ],
            }),
          ],
        }),
      });
}
var _ = `l`;
function _(_) {
  let { emoticonStore: _, ..._ } = _;
  return (0, _.jsx)(_, {
    store: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { eventModel: _, strEventLink: _, closeModal: _ } = _,
    _ = _(_),
    _ = _(),
    [_, _] = _.useState(() => _(_.LANGUAGE)),
    [_, _] = _.useState(!1),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(
      _(`#EventDisplay_Share_NotLoggedIn_Description`),
    ),
    _ = _.useMemo(() => {
      if (!_) return ``;
      let _ = new URL(_);
      return _.searchParams.set(_, _(_)), _.href;
    }, [_, _]),
    _ = _.EREALM === _.k_ESteamRealmChina;
  return _
    ? (0, _.jsx)(_, {
        eventLink: _,
        appid: _.appid,
        emoticonStore: _,
        closeModal: _,
      })
    : (0, _.jsxs)(_, {
        strDescription: ``,
        strTitle: _(`#Button_Share`),
        onCancel: _,
        onOK: _,
        bAlertDialog: !0,
        modalClassName: `EventDisplay_Share_Dialog`,
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              !_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: `Cx2zVOdOEwU-`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: `rk6-75sKTfs-`,
                          children: _(`#EventDisplay_Share_LanguageLabel`),
                        }),
                        (0, _.jsx)(`div`, {
                          children: (0, _.jsx)(_, {
                            selectedLang: _,
                            fnOnLanguageChanged: _,
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _(`befdhdeb-HY-`, `bPmDLn-lEoc-`),
                      style: {
                        flexWrap: `wrap`,
                      },
                      children: [
                        (0, _.jsx)(_, {
                          toolTipContent: _(`#EventDisplay_Share_OnSteam`),
                          children: (0, _.jsxs)(_, {
                            onClick: () => {
                              _.logged_in ? _(!0) : _();
                            },
                            className: _(
                              `yYL-OrX9PtQ-`,
                              `D4J8JhjevEo-`,
                              `LQrwY5m9KjE-`,
                            ),
                            children: [
                              (0, _.jsx)(`img`, {
                                className: `uPjG9NaDuUg-`,
                                src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%200%201400%201409'%20enable-background='new%200%200%201400%201409'%20xml:space='preserve'%3e%3cpath%20fill='%23FFFFFF'%20d='M698.195,10.125c-364.347,0-662.838,280.938-691.206,637.969L378.74,801.797%20c31.502-21.539,69.555-34.133,110.495-34.133c3.669,0,7.315,0.09,10.939,0.313l165.33-239.637c0-1.137-0.029-2.25-0.029-3.395%20c0-144.227,117.335-261.574,261.582-261.574c144.233,0,261.583,117.348,261.583,261.574c0,144.246-117.35,261.598-261.583,261.598%20c-1.99,0-3.95-0.047-5.926-0.09L685.341,954.688c0.119,3.074,0.23,6.191,0.23,9.297c0,108.273-88.076,196.352-196.336,196.352%20c-95.041,0-174.494-67.848-192.496-157.676L30.872,892.754c82.32,291.137,349.807,504.582,667.323,504.582%20c383.062,0,693.598-310.551,693.598-693.613C1391.793,320.664,1081.257,10.125,698.195,10.125'/%3e%3cpath%20fill='%23FFFFFF'%20d='M441.648,1062.563l-85.202-35.203c15.105,31.445,41.23,57.762,75.911,72.215%20c74.961,31.25,161.41-4.336,192.667-79.359c15.112-36.313,15.224-76.355,0.223-112.742c-14.979-36.391-43.25-64.773-79.572-79.922%20c-36.047-15.004-74.656-14.438-108.587-1.637l88.009,36.391c55.304,23.051,81.444,86.559,58.408,141.855%20C560.476,1059.457,496.944,1085.613,441.648,1062.563'/%3e%3cpath%20fill='%23FFFFFF'%20d='M1101.353,524.961c0-96.113-78.184-174.313-174.295-174.313c-96.096,0-174.294,78.199-174.294,174.313%20c0,96.102,78.198,174.277,174.294,174.277C1023.169,699.238,1101.353,621.063,1101.353,524.961%20M796.415,524.656%20c0-72.324,58.638-130.918,130.94-130.918c72.316,0,130.925,58.594,130.925,130.918c0,72.316-58.608,130.918-130.925,130.918%20C855.053,655.574,796.415,596.973,796.415,524.656'/%3e%3c/svg%3e`,
                                alt: _(`#EventDisplay_Share_OnSteam`),
                              }),
                              (0, _.jsx)(`span`, {
                                style: {
                                  whiteSpace: `nowrap`,
                                },
                                children: _(`#EventDisplay_Share_OnMyStatus`),
                              }),
                            ],
                          }),
                        }),
                        (0, _.jsx)(_, {
                          toolTipContent: _(`#EventDisplay_Share_OnFaceBook`),
                          children: (0, _.jsx)(_, {
                            href: _.strFacebookUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, _.jsx)(`img`, {
                              className: _(`yYL-OrX9PtQ-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=`,
                              alt: _(`#EventDisplay_Share_OnFaceBook`),
                            }),
                          }),
                        }),
                        (0, _.jsx)(_, {
                          toolTipContent: _(`#EventDisplay_Share_OnTwitter`),
                          children: (0, _.jsx)(_, {
                            href: _.strTwitterUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, _.jsx)(`img`, {
                              className: _(`yYL-OrX9PtQ-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC`,
                              alt: _(`#EventDisplay_Share_OnTwitter`),
                            }),
                          }),
                        }),
                        (0, _.jsx)(_, {
                          toolTipContent: _(`#EventDisplay_Share_OnReddit`),
                          children: (0, _.jsx)(_, {
                            href: _.strRedditUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, _.jsx)(`img`, {
                              className: _(`yYL-OrX9PtQ-`),
                              src: _,
                              alt: _(`#EventDisplay_Share_OnReddit`),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: `-znUDBPGuEA-`,
                    }),
                  ],
                }),
              (0, _.jsx)(_, {
                eventLink: _,
              }),
            ],
          }),
          _,
        ],
      });
}
export { _ as ShareEventDialogBody };
