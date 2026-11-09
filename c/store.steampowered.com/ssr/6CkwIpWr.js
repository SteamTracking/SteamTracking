var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { eventLink: _, labelOverride: _ } = _,
    _ = _.useRef(null),
    [_, _] = _.useState(``),
    _ = () => {
      let _ = _.current?.ownerDocument.defaultView;
      _.current &&
        _ &&
        _.navigator.clipboard
          .writeText(_.current.value)
          .then(() => _(_(`#EventDisplay_Share_CopiedToClipboard`)))
          .catch((_) => {
            (_(_(`#EventDisplay_Share_FailedToCopyToClipboard`)),
              console.error(`Failed to copy link to clipboard:`, _));
          });
    };
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _(_ ?? `#EventDisplay_Share_Link`),
          }),
          (0, _.jsx)(`input`, {
            className: _,
            ref: _,
            value: _,
            readOnly: !0,
            onClick: _,
          }),
          (0, _.jsx)(_, {
            className: _(_, _, _),
            onActivate: _,
            children: (0, _.jsx)(_, {
              toolTipContent: _(`#ToolTip_CopyLinkToClipboard`),
              children: (0, _.jsx)(`img`, {
                className: _,
                src: _,
                alt: _(`#ToolTip_CopyLinkToClipboard`),
              }),
            }),
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
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
      return (_.searchParams.set(_, _(_)), _.href);
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
                      className: `xz-Oozsf1YU-`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: `QRS0gB4DguM-`,
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
                      className: _(`Y-e7ZAPjgPc-`, `p17eQIYgdUM-`),
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
                              `m-U1DKR49wc-`,
                              `IASebiEBINY-`,
                              `UgZN6e6XXGk-`,
                            ),
                            children: [
                              (0, _.jsx)(`img`, {
                                className: `_7QJQSRZvXHQ-`,
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
                            className: `IASebiEBINY-`,
                            children: (0, _.jsx)(`img`, {
                              className: _(`m-U1DKR49wc-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=`,
                              alt: _(`#EventDisplay_Share_OnFaceBook`),
                            }),
                          }),
                        }),
                        (0, _.jsx)(_, {
                          toolTipContent: _(`#EventDisplay_Share_OnTwitter`),
                          children: (0, _.jsx)(_, {
                            href: _.strTwitterUrl,
                            className: `IASebiEBINY-`,
                            children: (0, _.jsx)(`img`, {
                              className: _(`m-U1DKR49wc-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC`,
                              alt: _(`#EventDisplay_Share_OnTwitter`),
                            }),
                          }),
                        }),
                        (0, _.jsx)(_, {
                          toolTipContent: _(`#EventDisplay_Share_OnReddit`),
                          children: (0, _.jsx)(_, {
                            href: _.strRedditUrl,
                            className: `IASebiEBINY-`,
                            children: (0, _.jsx)(`img`, {
                              className: _(`m-U1DKR49wc-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1MjI5RjcyNjYyMjExRTlCQTM3QzA4REJGQTAwNUZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1MjI5RjczNjYyMjExRTlCQTM3QzA4REJGQTAwNUZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjUyMjlGNzA2NjIyMTFFOUJBMzdDMDhEQkZBMDA1RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjUyMjlGNzE2NjIyMTFFOUJBMzdDMDhEQkZBMDA1RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7oZ6UCAAAFiElEQVR42uybW2hcVRSGZ9JE22RotJa2wUrEW0xBlGIl0kijQZqWoPXSPjSt0oLgg4hvpY999SkQxYoPgmmgKkKVSiMqtrQpVeO9YCMOtTqmaVF6G5OYXqb/ov/AdHrOnrXP2efkwMyGj0Mm+7LWOvuy1t77pAuFQqqaU12qylPNANVugPryH9LptNMGMMfMxaMDdII20A6WggxoYrb/QB7kwK9gDBwCRyDPtGN5bvyhFEeNNIKNYB+YKgRPU6xD6mp0ZYDr9HVpAJRvAf3gQsF9usC6WxJnAJRrBgNgphB9mmFbzYkwAMr0gVOF+JO02TdrBkDeDNhVmP0kMmSCGiBdrrRmFUCZu/HYC+5PyGp2DPRC9qztKlAXoAs9hMdIgpRPUZYRymaVrHoAGzgA5ifUrzkPVkGHH533AHb74QQrn6Jsw5TVXQ/gJPNtwrp9pTlhBXTJu+oBOyNW/iDYAt4Co+BS2f8nwWtgGegBXyvmhJ3B1kXvdT7q9CK4pbicSfwAOsCrYAj0eLjaWUW9faH8AHp4cTg57WA7uAx+Ae+Al8ADYI7Pi9uhdJaawxhgIAblz4E6sMfn/9kQBpA0EMgADGzi8O2/YHsnDXnWBBwCxdihxc8ApklwG2iIYcb+BoLcgecSQ573kecVcB9Yjb+/Ancp62+gLvplkLH3KW5aRJ2eoZAfRNiGLIeLodukdhlcF5PyKS5pj0TcRoY6qfcEN8ekfA5v5SS3zKJOm1UG4B5eV1xvn8vc8hja6qJu5k1Rvo25EQpyFsjSdlomN7AQfCpjlBPb0ojaLW7O7q9kgE7HDZ8De8BnErKiy//pkWdDSQ9cgMejdHmfAy0OZeksN8AN6yIYdLS+i0f3Arg5xAbmHPAUOORR/+UAMg1WdITAqLIyEeB1CT0paBt4A/wDtoh353g/fx04Ad4shrt4LgLbwLRS5lGNASaUlW0yHIREklB3vc/vq8EVhcwTGgPkFRUdTNoGAGT6SCF3XuMKNynaG07gJsiXijxNWkeoUqpXvpWHwQ+0/nEZx4oyPeAog5jDFhudDUG7TpAhMKyodz4nxNJ0ESwzlGnziEAnNPv+yPOhqyGQV9hNJp1nK+R5HNzm0XOeVgRGpWkx6zIp/yR9Bk1QVHEI5JSdZ7dsWRn+P+Xz+/+GMhd9fp8xKL8Vj48lkNXEHpohYOMIjRgEuwmMleU/YzrdlX0B7hCVpt+kLkOZvWEcIa8eMOZiSobLK2+tGwyCn+kOP8boz6/MX+zu+xgv7AZPsC4XaUzTA7osLDqegPX/qIW8XRUPRxk1nbGICNvxho7NkvIynP5Wjn+ZkyTQmjZOgryTs99CjpdnsQNsVSov6YDnfSOvXWHeybG5x3OP4S3JIce7oNvizXZwwsoY8iwBZy3k3KjeFue2s809H9nZmWdwiHIMVmTpXOOlGNvsprEu0YlaaAiTP7e8X9Roey7Qbxlrf+IX+/NtDdITLCYJbb8H39FNLsb3VxjYtBqUt72Z0u/X431PhznBnLD0sQ+D9ahj3Ef4RXisBQ+Ce8GtHMOya/Q7+EkCLZTP+ZRfwGV1rYVM4ly1Fpdfq3uCAY/G/nW9IYK65EWtl2U3gDzBjsaYOczhqIstsXrwPDgS4iZZ8MNRFgh7PC6u7Xusp1Wh9O1U+m1wOmTbFY/HtTdEduHR56hHy3j/A4yXBDkN3P29k/OCizQEXTZ5GeA6fWtXZHSBjVTUm7p2YJr0JDL2eimvOhozGCHLw4rzCVZeZOvRXJgMtCfI+3erEtoTRCbjHcHQBigxwkqOsySN+ZW2ygfeFWYXWyEzbQKUH+KElw1UunZdvvbBRO2Tmag/mpoMofRk1B9NBfpgwrLBRH82l659O1zlqWaAajfAVQEGAEyk4t4HpStTAAAAAElFTkSuQmCC`,
                              alt: _(`#EventDisplay_Share_OnReddit`),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: `si2rwaMlEF8-`,
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
