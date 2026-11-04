var _ = _(_(), 1),
  _ = `mlHgowtFAEI-`,
  _ = `GJkduAzFcH0-`,
  _ = `uMqBh4Yp8yY-`,
  _ = `Hg2tl2tZ788-`,
  _ = _(),
  _ = new Set();
function _(_) {
  let { reportMutation: _, onClose: _ } = _,
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(`reason`),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(``),
    _ = _.length ? _[_.length - 1] : null,
    _ = () => {
      _(_.slice(0, -1)), _(`reason`);
    },
    _ = () => {
      if (!_ || !_(_)) {
        _(!1, `Content report submitted with invalid reason tree state`);
        return;
      }
      let _ = _.trim(),
        _ = _.length > 0 ? `${_} - ${_}` : _;
      _.mutateAsync({
        reason: _.value,
        text: _,
      })
        .then(() => _(`submitted`))
        .then(() => _.onSubmitted?.())
        .catch((_) => _(_?.eResult === 116 ? `cooldown` : `error`));
    },
    _ = (_) => {
      let _ = _(_) && _.children.length === 1 ? _.children[0] : _;
      _([..._, _]),
        _(_)
          ? (_(
              _.strOverrideReasonNameLocToken
                ? _.Localize(_.strOverrideReasonNameLocToken)
                : null,
            ),
            _(`submit`))
          : _(_) &&
            (_.strWarningBeforeNav
              ? _(`anchorwarning`)
              : (window.location.href = _.url));
    },
    _ = _ && _(_) ? _.value : 0,
    _ = [];
  _ && _(_) ? (_ = _.children) : _ || (_ = _.rgReportReasonTree ?? _);
  let _ = _.excludedReasons ?? _,
    _ = _.filter((_) => !_(_, _)).map((_) =>
      (0, _.jsx)(
        _,
        {
          node: _,
          onClick: () => _(_),
        },
        _(_) ? _.value : _.strLocToken,
      ),
    ),
    _ = _.Localize(`#ReportContent_Title`);
  _ === `submitted`
    ? (_ = _.Localize(`#ContentReportSubmitted_Title`))
    : _ === `error` && (_ = _.Localize(`#ContentReportSubmissionError_Title`));
  let _ = (0, _.jsxs)(_, {
      color: `dull`,
      onClick: _,
      children: [`« `, _.Localize(`#ReportContent_Back`)],
    }),
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _ === `reason` &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              !!_.landingDescription &&
                !_.length &&
                (0, _.jsx)(`div`, {
                  className: `FKyWcPaFvIw-`,
                  children: _.landingDescription,
                }),
              (0, _.jsx)(`p`, {
                children: _.Localize(`#ReportContent_PickAReason`),
              }),
              (0, _.jsx)(_, {
                focusableIfEmpty: !0,
                className: `BcjNCMOY2HI-`,
                children: _,
              }),
              (0, _.jsx)(_, {
                className: `T-2kLQVqIN0-`,
                children: _.length
                  ? _
                  : (0, _.jsx)(_, {
                      color: `dull`,
                      onClick: _,
                      children: _.Localize(`#moderation_cancel`),
                    }),
              }),
            ],
          }),
        _ === `submit` &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`p`, {
                children: _.Localize(`#ReportContent_Attestation`),
              }),
              (0, _.jsx)(_, {
                children: _.Localize(
                  `#reportforumpost_reasonforreport`,
                  _ || _(_),
                ),
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  autoFocus: !0,
                  value: _,
                  onChange: (_) => _(_.target.value),
                  className: `FsUHsnMpfFo-`,
                  placeholder: _.Localize(`#ReportContent_DetailsPlaceholder`),
                  maxLength: 1024,
                }),
              }),
              (0, _.jsxs)(_, {
                className: `OEDgLBREpmM-`,
                children: [
                  (0, _.jsx)(_, {
                    children: _.Localize(`#ReportContent_YourNamePlaceholder`),
                  }),
                  (0, _.jsx)(_, {
                    children: (0, _.jsx)(_, {
                      className: `skjlg1-WmaM-`,
                      type: `text`,
                      value: _,
                      onChange: (_) => _(_.target.value),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(_, {
                className: `T-2kLQVqIN0-`,
                children: [
                  _,
                  (0, _.jsx)(_, {
                    onClick: _,
                    disabled: _.isPending,
                    children: _.Localize(`#ReportContent_ReportButton`),
                  }),
                ],
              }),
            ],
          }),
        _ === `anchorwarning` &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`p`, {
                children: _.Localize(_.strWarningBeforeNav),
              }),
              (0, _.jsxs)(_, {
                className: `T-2kLQVqIN0-`,
                children: [
                  _,
                  (0, _.jsx)(_, {
                    onClick: () => {
                      window.location.href = _.url;
                    },
                    children: `Proceed`,
                  }),
                ],
              }),
            ],
          }),
        (_ === `submitted` || _ === `error` || _ === `cooldown`) &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              _ === `submitted` &&
                (0, _.jsx)(`p`, {
                  children: _.Localize(`#ContentReportSubmitted_Description`),
                }),
              _ === `error` &&
                (0, _.jsx)(`p`, {
                  children: _.Localize(
                    `#ContentReportSubmissionError_Description`,
                  ),
                }),
              _ === `cooldown` &&
                (0, _.jsx)(`p`, {
                  children: _.Localize(
                    `#ContentReportSubmissionOnCooldown_Description`,
                  ),
                }),
              (0, _.jsx)(_, {
                className: `T-2kLQVqIN0-`,
                children: (0, _.jsx)(_, {
                  color: `dull`,
                  onClick: _,
                  children: _.Localize(`#ReportContent_Close`),
                }),
              }),
            ],
          }),
      ],
    });
  return {
    strTitle: _,
    elContent: _,
  };
}
function _(_) {
  let { node: _, onClick: _ } = _,
    _,
    _;
  _(_) && _.children.length === 1 && !_.bForceLocToken && _(_.children[0])
    ? (_ = _(_.children[0].value))
    : ((_ = _(_)
        ? _.strOverrideReasonNameLocToken
          ? _.Localize(_.strOverrideReasonNameLocToken)
          : _(_.value)
        : _.Localize(_.strLocToken)),
      (_ = _.strDescriptionLocToken
        ? _.Localize(_.strDescriptionLocToken)
        : void 0));
  let _ = !_(_) && (_(_) || !!_.bShowRightArrow);
  return (0, _.jsxs)(_, {
    focusable: !0,
    className: _,
    onActivate: _,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `GBKI8Etmelw-`,
              children: _,
            }),
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          children: (0, _.jsx)(_, {}),
        }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M7 4L13 10L7 16`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    }),
  });
}
function _(_) {
  let { reportMutation: _, publishedFileId: _, onClose: _ } = _,
    { strTitle: _, elContent: _ } = _({
      reportMutation: _,
      rgReportReasonTree: (0, _.useMemo)(() => _(_), [_]),
      onClose: _,
    });
  return (0, _.jsx)(_, {
    onClose: _,
    className: _,
    strTitle: _,
    children: _,
  });
}
var _ = `dc9xw37OAcs-`,
  _ = `xFjdBZ6MG5c-`,
  _ = `_5yuo1xyqpuo-`,
  _ = `zKzCCA52OxY-`;
function _(_) {
  let { coordinates: _, onClose: _ } = _,
    _ = (!!_ && _(_)) || window.location.href,
    _ = `${_.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`,
    _ = `${_.STORE_BASE_URL}join/`,
    _ = `${_.HELP_BASE_URL}wizard/HelpWithAnonymousContentReport?contenturl=${encodeURIComponent(_)}`;
  return (0, _.jsxs)(_, {
    onClose: _,
    className: _,
    strTitle: _.Localize(`#anonymousreport_title`),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#anonymousreport_description`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(
          _.Localize(`#anonymousreport_footer`),
          (0, _.jsx)(_, {
            href: _,
          }),
        ),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            href: _,
            children: _.Localize(`#anonymousreport_signin`),
          }),
          (0, _.jsx)(_, {
            href: _,
            color: `dull`,
            children: _.Localize(`#anonymousreport_createaccount`),
          }),
        ],
      }),
    ],
  });
}
export { _, _ };
