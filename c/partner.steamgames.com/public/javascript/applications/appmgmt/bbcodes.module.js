var _ = class {
  m_fnAccumulatorFactory;
  m_dictComponents;
  constructor(_, _) {
    (this.m_dictComponents = _ instanceof Map ? _ : new Map(Object.entries(_))),
      (this.m_fnAccumulatorFactory = _);
  }
  Parse(_, _, _ = !0) {
    let _ = _(_ || ``, _);
    return this.Parse_BuildElements(_, _);
  }
  Parse_BuildElements(_, _) {
    let _ = this.m_fnAccumulatorFactory(void 0),
      _ = [],
      _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
      _ = this.m_dictComponents,
      _ = (_) => !!(_.tag && _.get(_.tag)?.autocloses),
      _ = !1,
      _ = !0,
      _ = (_, _) => {
        let _ = _.text.toLowerCase();
        if (_ && _.node.tag === _ && _.get(_.node.tag)) {
          let _ = _.get(_.node.tag),
            _ = {
              tagname: _.node.tag,
              args: _.node.args,
              rawargs: _.node.rawargs,
            },
            _ = _(_.Constructor, _, ..._.GetElements());
          (_ = _.accumulator),
            Array.isArray(_)
              ? _.forEach((_) => _.AppendNode(_))
              : _.AppendNode(_),
            (_ = !!_.skipFollowingNewline),
            (_ = _.bWrapTextForCopying);
        } else if (_) {
          let _ = _.accumulator;
          _.AppendText(`[` + _.node.text + `]`, !1),
            _.GetElements().forEach((_) => _.AppendNode(_)),
            _.AppendText(`[/` + _.text + `]`, !1),
            (_ = _),
            (_ = _.bWrapTextForCopying);
        }
      };
    for (
      _.forEach((_, _) => {
        if (_.type == 1) {
          let _ = _ ? _.text.replace(/^[\t\r ]*\n/g, ``) : _.text;
          _.AppendText(_, _), (_ = !1);
        } else if (_.type == 2) {
          let _ = _.get(_.tag);
          if (!_) _.AppendText(`[` + _.text + `]`, _.length == 0);
          else {
            let _ = _();
            if (_ !== void 0) {
              let _ = _.get(_.node.tag);
              _ && _.autocloses && _.tag === _.node.tag && _(_.pop(), _.node);
            }
            _.push({
              accumulator: _,
              node: _,
              bWrapTextForCopying: _,
            }),
              (_ = this.m_fnAccumulatorFactory(_)),
              (_ = !!_.skipInternalNewline),
              (_ = _.allowWrapTextForCopying ?? !1);
          }
        } else if (_.type == 3) {
          let _ = _.text.toLowerCase();
          for (; _() && _().node.tag !== _ && _(_().node); ) {
            let _ = _.pop();
            _(_, _.node);
          }
          if (_()?.node.tag == _) {
            let _ = _.pop();
            _(_, _);
          } else _.AppendText(`[/` + _.text + `]`, _.length == 0);
        }
      });
      _.length > 0;
    ) {
      let _ = _.pop();
      _(_, _.node);
    }
    return _.GetElements();
  }
};
function _(_, _, _ = !1) {
  let _ = `[` + _;
  _?.[``] && (_ += `=${_ ? `` + _[``] : _(`` + _[``])}`);
  for (let _ in _) _ !== `` && (_ += ` ${_(_)}=${_(`` + _[_])}`);
  return (_ += `]`), _;
}
function _(_) {
  return `"${_.replace(/(\\|"|\])/g, `\\$1`)}"`;
}
function _(_) {
  return _.replace(/(\\| |\])/g, `\\$1`);
}
function _(_) {
  return `[/${_}]`;
}
function _(_) {
  return _.replace(/(\\|\[)/g, `\\$1`);
}
function _(_, _, _ = 0) {
  let { type: _, text: _ = `` } = _;
  if (_ == 2) {
    let _ = _.indexOf(`=`),
      _ = _.indexOf(` `);
    _ != -1 && (_ == -1 || _ < _) && (_ = _);
    let _,
      _,
      _ = ``;
    _ > 0
      ? ((_ = _.substr(0, _).toLocaleLowerCase()),
        (_ = _.substr(_)),
        (_ = _(_)))
      : ((_ = {}), (_ = _.toLocaleLowerCase())),
      _.push({
        type: _,
        text: _,
        tag: _,
        args: _,
        rawargs: _,
      });
  } else
    _ != 0 &&
      _.push({
        type: _,
        text: _,
      });
  return {
    type: _,
    text: ``,
  };
}
function _(_) {
  let _ = ``;
  return (
    _.type == 3 ? (_ = `[/`) : _.type == 2 && (_ = `[`),
    {
      type: 1,
      text: _ + (_.text ?? ``),
    }
  );
}
function _(_, _) {
  let _ = [],
    _ = {
      type: 0,
      text: ``,
    },
    _ = !1,
    _ = !1,
    _ = !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    switch (_.type) {
      case 0:
        _ == `[`
          ? ((_.type = 2), (_ = !0))
          : ((_.type = 1), _ == `\\` && _ ? (_ = !_) : (_.text += _));
        break;
      case 2:
      case 3:
        if (_ == `/` && _) (_.type = 3), (_.text = ``), (_ = !1);
        else if (_ == `[` && !_) (_ = _(_, _(_), 2)), (_ = !0);
        else if (_ == `]` && !_) {
          let _ = _.type == 2 && _.text?.toLocaleLowerCase() == `noparse`,
            _ = _.type == 3 && _.text?.toLocaleLowerCase() == `noparse`;
          _ || (_ && !_)
            ? ((_ = _(_)), (_.text += _))
            : _
              ? (_ = !0)
              : _ && (_ = !1),
            (_ = _(_, _)),
            (_ = !1);
        } else
          _ == `\\` && _
            ? ((_.text += _), (_ = !_), (_ = !1))
            : ((_.text += _), (_ = !1), (_ = !1));
        break;
      case 1:
        _ == `[` && !_
          ? ((_ = _(_, _, 2)), (_ = !0))
          : _ == `\\` && _
            ? (_ && (_.text += _), (_ = !_))
            : ((_.text += _), (_ = !1));
    }
  }
  return (
    _.type != 0 &&
      (_.type == 2 || _.type == 3
        ? _.push(_(_))
        : _.push({
            type: _.type,
            text: _.text ?? ``,
          })),
    _
  );
}
function _(_) {
  if (!_ || _.length < 1) return {};
  let _ = {},
    _ = ``,
    _ = ``,
    _ = 0,
    _ = 0;
  _[0] == `=` && (_ = 2);
  let _ = !1;
  for (_++; _ < _.length; _++) {
    let _ = _[_],
      _ = !0,
      _ = !1;
    switch (_) {
      case 0:
        if (_ == `=`) return {};
        if (_ == ` `) continue;
        _ = 1;
        break;
      case 1:
        (_ != `=` && _ != ` `) ||
          _ ||
          (_ == ` ` ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
        break;
      case 2:
        _ == ` `
          ? ((_ = 0), (_ = !1), (_ = !0))
          : _ == `"`
            ? ((_ = 4), (_ = !1))
            : (_ = 3);
        break;
      case 3:
      case 4:
        ((_ == ` ` && _ != 4 && !_) || (_ == `"` && _ == 4 && !_)) &&
          ((_ = 0), (_ = !1), (_ = !0));
    }
    if (_) {
      if (_ == `\\` && !_) _ = !0;
      else if (((_ = !1), _ == 1)) _ += _;
      else if (_ == 3 || _ == 4) _ += _;
      else throw Error(`Not expecting to accumulate buffer in state ` + _);
    }
    _ && ((_[_] = _), (_ = ``), (_ = ``));
  }
  return _ != 0 && (_[_] = _), _;
}
function _(_) {
  if (!_) return _;
  let _ = _.trim(),
    _ = _.replace(/^[\u0000-\u0020]+/, ``)
      .replace(/[\t\n\r]/g, ``)
      .toLowerCase();
  return _.startsWith(`javascript:`) ||
    _.startsWith(`data:`) ||
    _.startsWith(`vbscript:`)
    ? ``
    : _;
}
var _ = `DGBHQeifcPs-`,
  _ = `dYxCj-H04rc-`,
  _ = `JHqvAwJwrJY-`,
  _ = `B6fjudO6zcI-`,
  _ = `CO-1c2JJaiA-`,
  _ = `bUyTklHzOxI-`,
  _ = `BfhKYW6TTzA-`,
  _ = `cy-zo5afOio-`,
  _ = `SOW8GvMXTHk-`,
  _ = `x9MpgTrN4Ww-`,
  _ = `i1AHn-0vXik-`,
  _ = `_2TfKaaLCT2o-`,
  _ = `LIXVgsnL-4M-`,
  _ = `K-jxiBASh0s-`,
  _ = `-eZXYCqUwL8-`,
  _ = `gK4c0jTYof8-`,
  _ = `YDb-da9VezY-`,
  _ = `HEUr5N26q0w-`,
  _ = `_4-6YoNKzSmk-`,
  _ = `_1fCwA2q2sU4-`,
  _ = `iZjggU7O-fs-`,
  _ = `_9zPcl3a3vcw-`,
  _ = `SA3Jp-lZuK8-`,
  _ = `-zMHRhhepPU-`,
  _ = `oJ15Z0k4q2M-`,
  _ = `sOsaxzBzN2Q-`,
  _ = `nqnnf2IPKes-`,
  _ = `-CpmJ6WkwpQ-`,
  _ = `WuW68UdAsvI-`,
  _ = `b20E2IrghSY-`,
  _ = `NKJXBcarNSw-`,
  _ = `v27si2jXkow-`,
  _ = `zJnyxE63CCk-`,
  _ = `_6yveHYc0OtM-`,
  _ = `wf2m1NyifjE-`,
  _ = `YBHm3uck7ds-`,
  _ = `Lwo0pX9leRw-`,
  _ = `lnrpYhOnF4E-`,
  _ = `oNRva9jZn5I-`,
  _ = `yoxkXiyvsD0-`,
  _ = `TMyoK8naM1k-`,
  _ = `jBFRE-B80eM-`,
  _ = `FW8nxYED2lM-`,
  _ = `_94faQspIw2E-`,
  _ = `C-B3bdlHS0I-`,
  _ = {
    Bold: _,
    Italic: _,
    Paragraph: _,
    TemplateMediaTitle: _,
    Question: _,
    Answer: _,
    Header1: _,
    Header2: _,
    Header3: _,
    Header4: _,
    Header5: _,
    CenterSpan: _,
    SmallText: _,
    Underline: _,
    Strike: _,
    Spoiler: _,
    Revealed: _,
    SpoilerText: _,
    DisabledMouseEvents: _,
    BlockQuote: _,
    QuoteAuthor: _,
    PullQuote: _,
    Code: _,
    CodeBlock: _,
    List: _,
    OrderedList: _,
    ListItem: _,
    _: _,
    Table: _,
    NoBorder: _,
    TableRow: _,
    TableCell: _,
    EqualCells: _,
    ExpandSectionBlock: _,
    ExpandSectionHeader: _,
    EmbedArrow: _,
    ExpandSectionBody: _,
    ExpandSection_WithTitle: _,
    LinkButton: _,
    Image: _,
    Image_Inline: _,
    PreservedUnsupportedTag: _,
    Tag: _,
    CalendarEventContainer: _,
    CalendarEventLink: _,
  };
export {
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
};
