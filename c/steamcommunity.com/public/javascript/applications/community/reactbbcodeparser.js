import { _ } from "./rolldown-runtime.js";
import { _ } from "./libraries.js";
import { _ } from "./bbcodeparser.js";
import { _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = class {
    reactNodes = [];
    AppendText(_, _ = !1) {
      _.length &&
        (_
          ? this.reactNodes.push(
              _.createElement(
                `span`,
                {
                  "data-copytext": ``,
                  "data-copystyle": `merge-adjacent`,
                  "bbcode-text": _,
                },
                _,
              ),
            )
          : this.reactNodes.push(_));
    }
    AppendNode(_) {
      this.reactNodes.push(_);
    }
    GetElements() {
      return this.reactNodes;
    }
  },
  _ = class {
    m_decoratedAccumulator;
    constructor(_) {
      (_(_, `decorated accumulator cannot be null`),
        (this.m_decoratedAccumulator = _));
    }
    AppendText(_, _ = !1) {
      this.m_decoratedAccumulator.AppendText(_, _);
    }
    AppendNode(_) {
      this.m_decoratedAccumulator.AppendNode(_);
    }
    GetElements() {
      return this.m_decoratedAccumulator.GetElements();
    }
  },
  _ = class extends _ {
    constructor(_) {
      super(_);
    }
    AppendText(_) {
      let _ = _,
        _ = [];
      for (
        let _ = _.indexOf(`
`);
        _ !== -1;
        _ = _.indexOf(`
`)
      )
        (_.push(_.substr(0, _)),
          _.push(_.createElement(`br`)),
          (_ = _.substr(_ + 1)));
      (_.length && _.push(_),
        _.forEach((_) => {
          super.AppendNode(_);
        }));
    }
  },
  _ = class extends _ {
    m_renderingLanguage;
    constructor(_, _, _) {
      (super(_, _ ?? (() => new _())),
        (this.m_renderingLanguage = typeof _ == `string` ? _(_) : _));
    }
    UpdateOverrideLanguage(_) {
      this.m_renderingLanguage = _;
    }
    ParseBBCode(_, _, _ = !0) {
      let _ = 0,
        _ = this.Parse(
          _,
          (_, _, ..._) =>
            _.createElement(
              _,
              {
                ..._,
                context: _,
                language: this.m_renderingLanguage,
                key: `bbnode_${_++}`,
              },
              ..._,
            ),
          _,
        );
      return _.length > 1
        ? _.createElement(_.Fragment, null, ..._)
        : _.length == 1
          ? _[0]
          : null;
    }
  };
