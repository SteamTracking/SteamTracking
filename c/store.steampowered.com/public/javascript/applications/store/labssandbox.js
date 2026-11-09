import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./throbber.js";
import { _ } from "./appinfostore.js";
import { _ } from "./storeitemhooks.js";
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
} from "./main.js";
import "./steammessages_twofactor_pb.js";
import { _ } from "./logindialog.js";
var _ = _(_()),
  _ = class {
    rgModelNames = [];
    constructor() {
      _(this);
    }
    Init(_) {
      _.Init(_);
      let _ = `${_.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
      _.default.get(_).then((_) => {
        if (_.data) {
          let _ = [];
          for (let _ of _.data) _ != "default" && _.push(_);
          _.sort(), (_ = [`default`, ..._]), (this.rgModelNames = _);
        }
      });
    }
    async ComputePathBetweenApps(_, _, _, _, _, _, _) {
      let _ = Math.acos(_),
        _ = await new _(
          async (_) => {
            let _ = await this.GetNeighbors(_),
              _ = [];
            for (let _ = 0; _ < _.length; _++) {
              let _ = _[_];
              if ((!_ || _.length > _) && (_.cost > _ || (_ && _.length >= _)))
                break;
              _.push(_);
            }
            return _;
          },
          this.EstimateCosts,
          (_, _) => _ == _,
          _,
        ).FindPath(_, _, _ || 10);
      if (_.path) {
        let _ = [],
          _ = 0;
        for (let _ = 0; _ < _.path.length; _++) {
          let _ = _.path[_],
            _ = _.cost - _;
          (_ = _.cost),
            _.push({
              appid: _.node,
              similarity: Math.cos(_),
            });
        }
        return _;
      }
      throw Error(`Unable to compute path.`);
    }
    async GetNeighbors(_) {
      let _ = `${_.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${_}`,
        _ = await _.default.get(_),
        _ = [];
      if (_.data && _.data.appid == _)
        for (let _ = 0; _ < _.data.similar_appids.length; _++)
          _.push({
            node: _.data.similar_appids[_],
            cost: Math.acos(_.data.similarity_scores[_]),
          });
      return _;
    }
    async EstimateCosts(_, _) {
      let _ = `${_.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${_}&${_.map((_) => `appid[]=` + _.toString()).join(`&`)}`,
        _ = await _.default.get(_);
      if (_.data && _.data.similarity_scores)
        return _.data.similarity_scores.map((_) => Math.acos(parseFloat(_)));
      throw Error(`Unable to fetch cost estimates`);
    }
  };
_([_], _.prototype, `rgModelNames`, void 0),
  _([_], _.prototype, `GetNeighbors`, null),
  _([_], _.prototype, `EstimateCosts`, null);
var _ = class {
    m_fnCompare;
    m_Heap = [];
    m_Length = 0;
    constructor(_) {
      this.m_fnCompare = _;
    }
    get length() {
      return this.m_Length;
    }
    Clear() {
      (this.m_Heap = []), (this.m_Length = 0);
    }
    Peek() {
      if (this.m_Length > 0) return this.m_Heap[0];
    }
    Pop() {
      if (this.m_Length != 0) {
        let _ = this.m_Heap[0];
        return (
          (this.m_Heap[0] = this.m_Heap[this.m_Length - 1]),
          this.m_Length--,
          this.BubbleDown(),
          _
        );
      }
    }
    Push(_) {
      this.m_Heap.length == this.m_Length
        ? this.m_Heap.push(_)
        : (this.m_Heap[this.m_Length] = _),
        this.m_Length++,
        this.BubbleUp();
    }
    FindElement(_) {
      for (let _ = 0; _ < this.m_Length; _++)
        if (_(this.m_Heap[_]))
          return {
            index: _,
            element: this.m_Heap[_],
          };
    }
    LowerPriorityOfElement(_, _) {
      (this.m_Heap[_] = _), this.BubbleUp(_);
    }
    BubbleDown() {
      let _ = 0;
      do {
        let _ = _ * 2 + 1,
          _ = _ * 2 + 2,
          _ = _;
        if (
          (_ < this.m_Length &&
            this.m_fnCompare(this.m_Heap[_], this.m_Heap[_]) > 0 &&
            (_ = _),
          _ < this.m_Length &&
            this.m_fnCompare(this.m_Heap[_], this.m_Heap[_]) > 0 &&
            (_ = _),
          _ != _)
        ) {
          let _ = this.m_Heap[_];
          (this.m_Heap[_] = this.m_Heap[_]), (this.m_Heap[_] = _), (_ = _);
        } else break;
      } while (_ < this.m_Length);
    }
    BubbleUp(_) {
      let _ = _ || this.m_Length - 1;
      for (; _ > 0; ) {
        let _ = (_ - 1) >> 1;
        if (this.m_fnCompare(this.m_Heap[_], this.m_Heap[_]) > 0) {
          let _ = this.m_Heap[_];
          (this.m_Heap[_] = this.m_Heap[_]), (this.m_Heap[_] = _), (_ = _);
        } else break;
      }
    }
  },
  _ = class {
    m_fnGetNeighbors;
    m_fnEstimateCosts;
    m_fnEquality;
    m_fnIterationCallback;
    constructor(_, _, _, _) {
      (this.m_fnGetNeighbors = _),
        (this.m_fnEstimateCosts = _),
        (this.m_fnEquality = _),
        (this.m_fnIterationCallback = _);
    }
    async FindPath(_, _, _) {
      let _ = new _((_, _) => _.cost - _.cost),
        _ = new Set();
      _.Push({
        node: _,
        cost: 0,
      });
      let _ = new Map(),
        _ = new Map(),
        _ = new Map(),
        _ = (await this.m_fnEstimateCosts([_], _))[0];
      _.set(_, _), _.set(_, 0);
      let _ = 0;
      for (; _.length > 0 && _ < _; ) {
        let _ = _.Pop();
        if (this.m_fnEquality(_.node, _)) {
          let _ = [],
            _ = _.node;
          for (; _.has(_); ) _.push(_), (_ = _.get(_));
          let _ = [];
          for (let _ = _.length - 1; _ >= 0; _--)
            _.push({
              node: _[_],
              cost: _.get(_[_]),
            });
          return {
            path: _,
          };
        }
        _.add(_.node);
        let _ = await this.m_fnGetNeighbors(_.node);
        if (_.length > 0) {
          let _ = await this.m_fnEstimateCosts(
            _.map((_) => _.node),
            _,
          );
          if (_.length != _.length)
            return (
              console.warn(
                `Failed to fetch expected number of cost estimates. Failing pathfinding.`,
              ),
              {}
            );
          let _ = _.get(_.node);
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_],
              _ = _ + _.cost;
            if (
              (!_.has(_.node) || _ < _.get(_.node)) &&
              (_.set(_.node, _.node),
              _.set(_.node, _),
              _.set(_.node, _.cost + _[_]),
              !_.has(_.node))
            ) {
              let _ = _.cost + _[_],
                _ = _.FindElement((_) => _.node == _.node);
              _
                ? _.element.cost > _ &&
                  _.LowerPriorityOfElement(_.index, {
                    node: _.node,
                    cost: _,
                  })
                : _.Push({
                    node: _.node,
                    cost: _,
                  });
            }
          }
        }
        _++, this.m_fnIterationCallback && this.m_fnIterationCallback();
      }
      throw Error(`No path found.`);
    }
  },
  _ = new _();
window.g_LabsSandbox = _;
var _ = _(_()),
  _ = `WVhYXTPPa5Q-`,
  _ = `x3LMY1wB7Z8-`,
  _ = `n0-NbgKnVgg-`,
  _ = `_72I-MQtMZj8-`,
  _ = `MtuwGZaUAng-`,
  _ = `CvXL-Wwt9TQ-`,
  _ = `rCcaMabbZx4-`,
  _ = `ddPMSRBRHGw-`,
  _ = `_8cUEY8q0nYU-`,
  _ = `NgWhKdDUzuY-`,
  _ = `lgXtUsuljdc-`,
  _ = `_-5Y-zHiqGtQ-`,
  _ = `ZUZRryOqfLs-`,
  _ = `QlNwd-gOVoA-`,
  _ = `LEzgtgE3TQM-`,
  _ = `BrotS3tOfxw-`,
  _ = `AkJ02HXKMhs-`,
  _ = `TauA-sfyWB8-`,
  _ = `HHHUlYd80sY-`,
  _ = `UiEMtH5V5hM-`,
  _ = `_0xUYDLGHKic-`,
  _ = `oMov3TXH87I-`,
  _ = `Q7tllLDG5wk-`,
  _ = `N27spIgX8-A-`,
  _ = `fgvlHXQJgVM-`,
  _ = `z3E2YTZo-D4-`,
  _ = `AVkSlVChUus-`,
  _ = `-tfmW4i7r-U-`,
  _ = `_8NYUdIS8vVE-`,
  _ = `c7rqBghcJoQ-`,
  _ = _(),
  _ = class extends _.Component {
    state = {
      appid: 0,
      appinfo: null,
      mode: `display`,
      strSearch: ``,
      rgSuggestions: [],
    };
    m_currentRequest = 0;
    constructor(_) {
      super(_),
        this.props.appidInitial &&
          (_.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(() => {
            _.GetAppInfo(this.props.appidInitial),
              this.setState({
                appid: this.props.appidInitial,
                appinfo: _.GetAppInfo(this.props.appidInitial),
              });
          }),
          (this.state.appid = this.props.appidInitial));
    }
    OnDisplayClicked() {
      this.setState({
        mode: `select`,
      });
    }
    async UpdateAppSuggestions(_) {
      let _ = _.target.value && _.target.value.trim();
      _?.length
        ? (window.clearTimeout(this.m_currentRequest),
          (this.m_currentRequest = window.setTimeout(async () => {
            let _ = {
                _: _.COUNTRY,
                _: _.LANGUAGE,
                realm: _.k_ESteamRealmGlobal,
                origin: self.origin,
                _: `jsonfull`,
                term: _.replace(` `, `+`),
                require_type: `game`,
                excluded_tags: [],
                excluded_content_descriptors: [],
              },
              _ = `${_.STORE_BASE_URL}search/suggest`,
              _ = await _.default.get(_, {
                params: _,
                withCredentials: !0,
              }),
              _;
            (_ = _?.data?.length
              ? _.data.map((_) =>
                  (0, _.jsxs)(
                    `div`,
                    {
                      className: _,
                      onClickCapture: () => this.SetSelectedApp(parseInt(_._)),
                      children: [
                        (0, _.jsx)(`img`, {
                          src: _.img,
                          className: _,
                        }),
                        (0, _.jsx)(`div`, {
                          className: _,
                          children:
                            _.name + (this.props.showAppIds ? ` (${_._})` : ``),
                        }),
                      ],
                    },
                    `suggestion-${_._}`,
                  ),
                )
              : []),
              this.setState({
                strSearch: _,
                rgSuggestions: _,
              });
          }, 250)))
        : this.setState({
            strSearch: ``,
            rgSuggestions: null,
          });
    }
    SetSelectedApp(_) {
      _ && _ != 0
        ? _.EnsureAppInfoForAppIDs([_]).then(() => {
            _.GetAppInfo(_),
              this.setState({
                appid: _,
                appinfo: _.GetAppInfo(_),
                mode: `display`,
              }),
              this.props.fnOnSelection && this.props.fnOnSelection(_, this);
          })
        : this.setState({
            appid: 0,
            appinfo: null,
            mode: `display`,
          });
    }
    OnKeyUp(_) {
      _.keyCode == 27 &&
        this.setState({
          mode: `display`,
        });
    }
    render() {
      let _ = this.props.classOverride ?? `gekZDtV16Ho-`,
        _ = null,
        _ = (0, _.jsx)(_, {
          type: `text`,
          onChange: this.UpdateAppSuggestions,
        });
      if (this.state.mode == `display`) {
        let _ = this.state.appinfo
          ? this.state.appinfo.name +
            (this.props.showAppIds ? ` (${this.state.appid})` : ``)
          : (this.props.strPrompt ?? `Select game`);
        _ = (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        });
      } else if (this.state.mode == `select`) {
        let _ = this.state.strSearch.length > 0;
        _ = (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _,
            _ &&
              (0, _.jsx)(`div`, {
                className: `u6Os1UrBFLs-`,
                children: this.state.rgSuggestions,
              }),
          ],
        });
      }
      return (0, _.jsx)(`div`, {
        className: _,
        onClick: this.OnDisplayClicked,
        onKeyUpCapture: this.OnKeyUp,
        children: _,
      });
    }
  };
_([_], _.prototype, `OnDisplayClicked`, null),
  _([_], _.prototype, `UpdateAppSuggestions`, null),
  _([_], _.prototype, `OnKeyUp`, null);
var _ = class extends _.Component {
    render() {
      if (this.props.appid == 0)
        return (0, _.jsx)(`div`, {
          className: _,
        });
      {
        let _ = _.GetAppInfo(this.props.appid);
        if (!_ || !_.is_valid)
          return (0, _.jsx)(`div`, {
            className: _,
          });
        let _ = [];
        if (this.props.score) {
          _.push(
            (0, _.jsx)(
              `div`,
              {
                className: _,
              },
              `score-spacer`,
            ),
          );
          let _ = Math.round(this.props.score * 100).toString() + `%`;
          _.push(
            (0, _.jsx)(
              `div`,
              {
                className: _,
                children: _,
              },
              `score-value`,
            ),
          );
        }
        let _ = _.name + ` (` + this.props.appid.toString() + `)`,
          _ = this.props.fnOnSelected ? this.props.fnOnSelected : (_) => {};
        return (0, _.jsxs)(`div`, {
          className: _,
          onClick: () => _(this.props.appid),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            _,
          ],
        });
      }
    }
  },
  _ = class extends _.Component {
    state = {};
    ref_app_a = _.createRef();
    ref_app_b = _.createRef();
    componentDidMount() {
      this.OnAppSelected();
    }
    OnAppSelected() {
      if (
        this.ref_app_a.current &&
        this.ref_app_b.current &&
        this.ref_app_a.current.state.appid &&
        this.ref_app_b.current.state.appid
      ) {
        let _ = this.ref_app_a.current.state.appid,
          _ = this.ref_app_b.current.state.appid,
          _ = `${_.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${_}&appid[]=${_}`;
        _.default.get(_).then((_) => {
          _.data && _.data.similarity_scores
            ? this.setState({
                score: _.data.similarity_scores[0],
              })
            : this.setState({
                score: null,
              });
        });
      }
    }
    render() {
      let _ = this.state.score ? (this.state.score * 100).toFixed(1) + `%` : ``;
      return (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(
            _,
            {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
            },
            `similar_app_a`,
          ),
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsx)(
            _,
            {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
            },
            `similar_app_b`,
          ),
        ],
      });
    }
  };
_([_], _.prototype, `OnAppSelected`, null);
var _ = class extends _.Component {
  selected_app = 0;
  similar_apps = [];
  similarity_scores = [];
  similarity_model = `default`;
  app_selector_ref = _.createRef();
  constructor(_) {
    super(_), _(this), _.default_app && this.SetSelectedApp(_.default_app);
  }
  componentDidMount() {
    this.app_selector_ref.current &&
      this.SetSelectedApp(this.app_selector_ref.current.state.appid);
  }
  OnSelectedApp(_) {
    _ && this.SetSelectedApp(_);
  }
  SetSelectedApp(_, _) {
    if (_ || _ != this.selected_app) {
      (this.similar_apps = []),
        (this.selected_app = _),
        this.app_selector_ref.current &&
          this.app_selector_ref.current.SetSelectedApp(_);
      let _ = `${_.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${_}&model=${this.similarity_model}`;
      _.default.get(_).then((_) => {
        if (_.data && _.data.appid == this.selected_app) {
          let _ = new Set(
            _.data.similar_appids.slice(0, this.props.max_similar),
          );
          _.add(_.data.appid),
            _.EnsureAppInfoForAppIDs(_).then(() => {
              (this.similar_apps = _.data.similar_appids),
                (this.similarity_scores = _.data.similarity_scores);
            });
        }
      });
    }
  }
  OnModelChanged(_, _) {
    (this.similarity_model = _.data),
      this.SetSelectedApp(this.selected_app, !0);
  }
  render() {
    let _ = [],
      _,
      _ = Math.min(
        this.similar_apps.length,
        this.similarity_scores.length,
        this.props.max_similar,
      );
    for (_ = 0; _ < _; _++) {
      let _ = this.similar_apps[_],
        _ = this.similarity_scores[_];
      _.push(
        (0, _.jsx)(
          _,
          {
            appid: _,
            score: _,
            fnOnSelected: this.SetSelectedApp,
          },
          _,
        ),
      );
    }
    let _ = [];
    for (let _ of _.rgModelNames) {
      let _ = {
        label: (0, _.jsx)(
          `div`,
          {
            children: _,
          },
          _,
        ),
        data: _,
      };
      _.push(_);
    }
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          rgOptions: _,
          onChange: this.OnModelChanged,
          selectedOption: `default`,
        }),
        (0, _.jsx)(`h1`, {
          children: `Games similar to:`,
        }),
        (0, _.jsx)(_, {
          fnOnSelection: this.OnSelectedApp,
          ref: this.app_selector_ref,
          appidInitial: 268500,
          showAppIds: !0,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    });
  }
};
_([_], _.prototype, `selected_app`, void 0),
  _([_], _.prototype, `similar_apps`, void 0),
  _([_], _.prototype, `similarity_scores`, void 0),
  _([_], _.prototype, `similarity_model`, void 0),
  _([_], _.prototype, `OnSelectedApp`, null),
  _([_], _.prototype, `SetSelectedApp`, null),
  _([_], _.prototype, `OnModelChanged`, null),
  (_ = _([_], _));
var _ = class extends _.Component {
  selected_app = void 0;
  selected_operator = void 0;
  constructor(_) {
    super(_),
      _(this),
      (this.selected_app = _.app),
      (this.selected_operator = _.operator);
  }
  OnSelectedApp(_) {
    _ &&
      _ != this.selected_app &&
      ((this.selected_app = _),
      this.props.fnOnChange && this.props.fnOnChange());
  }
  OnSelectedOperator(_, _) {
    (this.selected_operator = _.data),
      this.props.fnOnChange && this.props.fnOnChange();
  }
  render() {
    let _ = [
      {
        label: (0, _.jsx)(
          `div`,
          {
            children: `Plus`,
          },
          `Plus`,
        ),
        data: `Plus`,
      },
      {
        label: (0, _.jsx)(
          `div`,
          {
            children: `Minus`,
          },
          `Minus`,
        ),
        data: `Minus`,
      },
    ];
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            rgOptions: _,
            onChange: this.OnSelectedOperator,
            selectedOption: `Plus`,
          }),
        }),
        (0, _.jsx)(_, {
          fnOnSelection: this.OnSelectedApp,
        }),
      ],
    });
  }
};
_([_], _.prototype, `selected_app`, void 0),
  _([_], _.prototype, `selected_operator`, void 0),
  _([_], _.prototype, `OnSelectedApp`, null),
  _([_], _.prototype, `OnSelectedOperator`, null),
  (_ = _([_], _));
var _ = class extends _.Component {
  operands = [];
  similarity_model = `default`;
  similar_apps = [];
  similarity_scores = [];
  operand_refs;
  constructor(_) {
    super(_), _(this), (this.operand_refs = []);
    for (let _ = 0; _ < _.max_operands; _++)
      this.operand_refs.push(_.createRef());
  }
  OnModelChanged(_, _) {
    (this.similarity_model = _.data), this.RecomputeExpression();
  }
  OnAddOperand() {
    this.operands.length < this.props.max_operands &&
      this.operands.push({
        app: 0,
        operator: this.operands.length > 0 ? `Plus` : void 0,
      });
  }
  OnOperandChanged() {
    for (let _ = 0; _ < this.operands.length; _++) {
      let _ = this.operand_refs[_].current;
      (this.operands[_].app = _.selected_app),
        (this.operands[_].operator = _.selected_operator);
    }
    this.RecomputeExpression();
  }
  RecomputeExpression() {
    if (this.operands.length == 0) return;
    let _ = this.operands.map((_) => `appid[]=` + _.app.toString()),
      _ = `${_.STORE_BASE_URL}labs/ajaxgetappvectors?${_.join(`&`)}&model=${this.similarity_model}`;
    _.default.get(_).then((_) => {
      if (
        ((this.similar_apps = []),
        (this.similarity_scores = []),
        _.data && _.data.length == this.operands.length)
      ) {
        let _ = _.data[0].components.map((_) => parseFloat(_));
        for (let _ = 1; _ < this.operands.length; _++) {
          let _ = _.data[_].components.map((_) => parseFloat(_));
          this.operands[_].operator == `Plus`
            ? (_ = _.map((_, _) => _ + _[_]))
            : this.operands[_].operator == `Minus`
              ? (_ = _.map((_, _) => _ - _[_]))
              : console.log(`Unexpected operator ` + this.operands[_].operator);
        }
        let _ = _.map((_) => _ * _).reduce((_, _) => _ + _, 0),
          _ = Math.sqrt(_);
        if (_ > 1e-4) {
          let _ = _.map((_) => _ / _)
              .map((_) => `x[]=` + _)
              .join(`&`),
            _ = `${_.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${_}&model=${this.similarity_model}`;
          _.default.get(_).then((_) => {
            let _ = new Set(
              _.data.similar_appids.slice(0, this.props.max_similar),
            );
            _.EnsureAppInfoForAppIDs(_).then(() => {
              (this.similar_apps = _.data.similar_appids),
                (this.similarity_scores = _.data.similarity_scores);
            });
          });
        }
      }
    });
  }
  render() {
    let _ = [];
    for (let _ of _.rgModelNames) {
      let _ = {
        label: (0, _.jsx)(
          `div`,
          {
            children: _,
          },
          _,
        ),
        data: _,
      };
      _.push(_);
    }
    let _ = [],
      _ = 0;
    for (let _ of this.operands)
      _.push(
        (0, _.jsx)(
          _,
          {
            app: _.app,
            operator: _.operator,
            fnOnChange: this.OnOperandChanged,
            ref: this.operand_refs[_],
          },
          _,
        ),
      ),
        _++;
    let _ = null;
    this.operands.length < this.props.max_operands &&
      (_ = (0, _.jsx)(`div`, {
        className: _,
        onClick: this.OnAddOperand,
        children: `+`,
      }));
    let _ = [],
      _ = Math.min(
        this.similar_apps.length,
        this.similarity_scores.length,
        this.props.max_similar,
      );
    for (let _ = 0; _ < _; _++) {
      let _ = this.similar_apps[_],
        _ = this.similarity_scores[_];
      _.push(
        (0, _.jsx)(
          _,
          {
            appid: _,
            score: _,
          },
          _,
        ),
      );
    }
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          rgOptions: _,
          onChange: this.OnModelChanged,
          selectedOption: `default`,
        }),
        (0, _.jsx)(`h1`, {
          children: `Mixture`,
        }),
        _,
        _,
        (0, _.jsx)(`h1`, {
          children: `Games similar to mixture`,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    });
  }
};
_([_], _.prototype, `operands`, void 0),
  _([_], _.prototype, `similarity_model`, void 0),
  _([_], _.prototype, `similar_apps`, void 0),
  _([_], _.prototype, `similarity_scores`, void 0),
  _([_], _.prototype, `OnModelChanged`, null),
  _([_], _.prototype, `OnAddOperand`, null),
  _([_], _.prototype, `OnOperandChanged`, null),
  (_ = _([_], _));
var _ = class extends _.Component {
  constructor(_) {
    super(_), _(this);
  }
  app_start = 0;
  app_end = 0;
  in_progress = !1;
  progress_iteration = 0;
  found_path = void 0;
  IterationCallback() {
    this.progress_iteration++;
  }
  Pathfind() {
    this.in_progress ||
      ((this.in_progress = !0),
      (this.progress_iteration = 0),
      (this.found_path = void 0),
      _.ComputePathBetweenApps(
        this.app_start,
        this.app_end,
        0.75,
        3,
        10,
        200,
        this.IterationCallback,
      )
        .then((_) => {
          (this.in_progress = !1),
            _.EnsureAppInfoForAppIDs(_.map((_) => _.appid)).then(() => {
              this.found_path = _;
            });
        })
        .catch((_) => {
          console.warn(`Caught pathfinding failure because: ` + _.toString()),
            (this.in_progress = !1),
            (this.found_path = void 0);
        }));
  }
  OnSelectedStartApp(_) {
    _.EnsureAppInfoForAppIDs([_]).then(() => {
      this.app_start = _;
    });
  }
  OnSelectedEndApp(_) {
    _.EnsureAppInfoForAppIDs([_]).then(() => {
      this.app_end = _;
    });
  }
  render() {
    let _ =
        this.app_start != 0 &&
        this.app_end != 0 &&
        !this.in_progress &&
        this.app_start != this.app_end,
      _ = _ ? _ : _(_, void 0),
      _ = null;
    _ = this.in_progress
      ? (0, _.jsx)(`div`, {
          className: _,
          children: `Finding path, step ` + this.progress_iteration,
        })
      : this.found_path
        ? (0, _.jsx)(`div`, {
            className: _,
            children: `Found path`,
          })
        : (0, _.jsx)(`div`, {
            className: _,
            children: `No path found`,
          });
    let _ = [];
    if (this.found_path)
      for (let _ = 0; _ < this.found_path.length; _++) {
        let _ = this.found_path[_];
        _.push(
          (0, _.jsx)(
            _,
            {
              appid: _.appid,
              score: _.similarity,
            },
            `pathstep` + _,
          ),
        );
      }
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              fnOnSelection: this.OnSelectedStartApp,
              strPrompt: `Select start game`,
            }),
            (0, _.jsx)(_, {
              fnOnSelection: this.OnSelectedEndApp,
              strPrompt: `Select end game`,
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          onClick: _ ? this.Pathfind : () => {},
          children: `Pathfind!`,
        }),
        _,
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    });
  }
};
_([_], _.prototype, `app_start`, void 0),
  _([_], _.prototype, `app_end`, void 0),
  _([_], _.prototype, `in_progress`, void 0),
  _([_], _.prototype, `progress_iteration`, void 0),
  _([_], _.prototype, `found_path`, void 0),
  _([_], _.prototype, `IterationCallback`, null),
  _([_], _.prototype, `Pathfind`, null),
  _([_], _.prototype, `OnSelectedStartApp`, null),
  _([_], _.prototype, `OnSelectedEndApp`, null),
  (_ = _([_], _));
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`h1`, {
        children: `Similar Games`,
      }),
      (0, _.jsx)(_, {
        max_similar: 10,
      }),
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`h1`, {
        children: `Similarity`,
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`h1`, {
        children: `Mixer`,
      }),
      (0, _.jsx)(_, {
        max_similar: 10,
        max_operands: 6,
      }),
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`h1`, {
        children: `Pathfinder`,
      }),
      (0, _.jsx)(_, {}),
    ],
  });
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tag_score_factor || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tag_score_factor: {
              _: 1,
              _: 1,
              _: _.readDouble,
              _: _.writeDouble,
            },
            playtime_max_seconds: {
              _: 10,
              _: 36e4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            playtime_max_games: {
              _: 11,
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            playtime_score_factor: {
              _: 12,
              _: 0.9,
              _: _.readDouble,
              _: _.writeDouble,
            },
            popularity_factor: {
              _: 20,
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            popularity_reciprocal: {
              _: 21,
              _: 1e4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            popularity_base_score: {
              _: 22,
              _: `5000000`,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            played_since: {
              _: 23,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `StoreAppSimilarityPriorityOptions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            ids: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            options: {
              _: 4,
              _: _,
            },
            debug: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            include_owned_games: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.items || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            items: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, [50], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _,
            },
            already_owned: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            weight: {
              _: 3,
              _: _.readDouble,
              _: _.writeDouble,
            },
            weight_before_dedupe: {
              _: 4,
              _: _.readDouble,
              _: _.writeDouble,
            },
            debug_matches: {
              _: 50,
              _: _,
              _: !0,
              _: !0,
            },
            debug_popularity: {
              _: 51,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.source_app || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            source_app: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            weight: {
              _: 2,
              _: _.readDouble,
              _: _.writeDouble,
            },
            similarity: {
              _: 3,
              _: _.readDouble,
              _: _.writeDouble,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rank || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rank: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            popularity_factor: {
              _: 2,
              _: _.readDouble,
              _: _.writeDouble,
            },
            weight_before_popularity: {
              _: 3,
              _: _.readDouble,
              _: _.writeDouble,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            sort: {
              _: 2,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            clusters_to_return: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            cluster_index: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            context: {
              _: 10,
              _: _,
            },
            data_request: {
              _: 11,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clusters || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clusters: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cluster_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 6, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cluster_id: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            playtime_forever: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            playtime_2weeks: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            last_played: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            played_appids: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            similar_items_appids: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            similar_items: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            similar_item_popularity_score: {
              _: 8,
              _: _.readDouble,
              _: _.writeDouble,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `StoreAppSimilarity.PrioritizeAppsForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.PrioritizeAppsForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreAppSimilarity.IdentifyClustersFromPlaytime#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.IdentifyClustersFromPlaytime = _;
})((_ ||= {}));
var _ = class {
    m_SteamInterface;
    constructor(_) {
      this.m_SteamInterface = _;
    }
    LoadPlaytimeClusters(_, _, _, _) {
      return new _(this.m_SteamInterface, _, _, _, _);
    }
  },
  _ = class {
    m_callbacksLoaded = new _();
    m_rgClusters;
    constructor(_, _, _, _, _) {
      let _ = _.Init(_);
      _(_),
        _ && _(_, _),
        _.Body().set_steamid(_ || _.steamid),
        _ && _.Body().set_clusters_to_return(_),
        _.Body().set_sort(_),
        _.IdentifyClustersFromPlaytime(_.GetServiceTransport(), _).then((_) => {
          let _ = _.Body();
          this.m_rgClusters = [];
          for (let _ of _.clusters())
            this.m_rgClusters.push(this.ReadCluster(_, _));
          this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
        });
    }
    ReadCluster(_, _) {
      let _;
      return (
        _ && (_ = _.similar_items().map((_) => _.Get().ReadItem(_, _))),
        {
          nClusterID: _.cluster_id(),
          nPlaytimeMinutes: _.playtime_forever(),
          nPlaytimeMinutes2Weeks: _.playtime_2weeks(),
          rtLastPlayed: _.last_played(),
          rgAppIDsPlayed: _.played_appids(),
          rgSimilarItems: _.filter((_) => !!_),
          rgSimilarAppIDs: _.similar_items_appids(),
          flPopularityScore: _.similar_item_popularity_score(),
        }
      );
    }
    RegisterOnReadyCallback(_) {
      let _ = this.m_callbacksLoaded.Register(_);
      return (
        this.m_rgClusters !== void 0 &&
          window.setTimeout(() => _(this.m_rgClusters), 0),
        _
      );
    }
  };
function _(_, _, _, _ = 1, _ = null, _ = []) {
  let [_, _] = _.useState(null);
  return (
    _.useEffect(() => {
      if ((_(null), _))
        return _.LoadPlaytimeClusters(_, _, _, _).RegisterOnReadyCallback(_)
          .Unregister;
    }, [_, _, _, ..._]),
    _
  );
}
var _ = `U1eVOPgq7Qs-`,
  _ = `YHINLcprg3Q-`,
  _ = `xaJolC--bO0-`,
  _ = `HexrG-5SAEA-`,
  _ = `sxMHArvxX2E-`;
function _(_) {
  let { SteamInterface: _ } = _,
    _ = _.useRef(void 0);
  return (
    (_.current ||= new _(_)),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsx)(`p`, {
              children: `This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters.`,
            }),
            (0, _.jsxs)(`p`, {
              children: [
                `You can also `,
                (0, _.jsx)(`a`, {
                  href: `http://store-tc.k.steam.net/graph`,
                  target: `_blank`,
                  children: `browse the cluster data graphically`,
                }),
                ` (requires Rack VPN).`,
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          SimilarityStore: _.current,
        }),
      ],
    })
  );
}
var _ = {
  3: `Total Playtime`,
  2: `Number of Played Games`,
  1: `Most Recently Played`,
};
function _(_) {
  let { SimilarityStore: _ } = _,
    [_, _] = _.useState(_.steamid),
    [_, _] = _.useState(`10`),
    [_, _] = _.useState(1),
    _ = _.useCallback((_) => _(_.currentTarget.value), [_]),
    _ = _.useCallback((_) => _(_.currentTarget.value), [_]),
    _ = _.useCallback((_) => _(_.data), [_]),
    _ = !1,
    _ = _.useRef(_.steamid),
    _ = _ && new _(_);
  _ &&
    _.BIsValid() &&
    _.BIsIndividualAccount() &&
    ((_.current = _.ConvertTo64BitString()), (_ = !0));
  let _;
  _ && !isNaN(parseInt(_)) && (_ = parseInt(_));
  let _ = _.useMemo(() => {
      let _ = [];
      for (let _ in _)
        _.push({
          data: Number(_),
          label: _[_],
        });
      return _;
    }, []),
    _ = _(
      _,
      {
        include_assets: !0,
        include_basic_info: !0,
      },
      _.current,
      _,
      _,
    );
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            label: `SteamID`,
            type: `text`,
            value: _,
            onChange: _,
            description: !_ && `Invalid SteamID`,
          }),
          (0, _.jsx)(_, {
            label: `Clusters to return (Set to blank for all clusters)`,
            type: `text`,
            value: _,
            onChange: _,
          }),
          (0, _.jsx)(_, {
            label: `Sort clusters by`,
            rgOptions: _,
            selectedOption: _,
            onChange: _,
          }),
        ],
      }),
      _ && !_ && (0, _.jsx)(_, {}),
      _ &&
        (0, _.jsx)(_, {
          rgPlaytimeClusters: _,
        }),
    ],
  });
}
function _(_) {
  let { rgPlaytimeClusters: _ } = _;
  return (0, _.jsx)(`div`, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          children: (0, _.jsx)(_, {
            cluster: _,
          }),
        },
        _.nClusterID,
      ),
    ),
  });
}
function _(_) {
  let { cluster: _ } = _,
    [_, _] = _.useState(!1),
    _ = _.useCallback(() => _(!0), [_]),
    [_, _] = _.useState(!1),
    _ = _.useCallback(() => _(!0), [_]),
    _ = _({
      onEnter: _,
    });
  return (0, _.jsxs)(`div`, {
    ref: _,
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`h1`, {
            children: [`Cluster `, _.nClusterID],
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`b`, {
                      children: `Total Playtime:`,
                    }),
                    ` `,
                    Math.floor(_.nPlaytimeMinutes / 6) / 10,
                    `hr`,
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`b`, {
                      children: `Last Played:`,
                    }),
                    ` `,
                    _(_.rtLastPlayed),
                    ` `,
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`b`, {
                      children: `Games played:`,
                    }),
                    ` `,
                    _ &&
                      _.rgAppIDsPlayed.map((_) =>
                        (0, _.jsxs)(
                          _.Fragment,
                          {
                            children: [
                              (0, _.jsx)(_, {
                                appid: _,
                              }),
                              `, `,
                            ],
                          },
                          _,
                        ),
                      ),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`b`, {
                      children: `Popularity Score:`,
                    }),
                    ` `,
                    Math.floor(_.flPopularityScore * 100),
                    `% \xA0`,
                    (0, _.jsx)(`span`, {
                      title: `Based on the top four items; we might decide not to show clusters if this score is less than some threshold, maybe 90%`,
                      style: {
                        cursor: `default`,
                      },
                      children: `(?)`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`h3`, {
            children: `Similar titles:`,
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(`ul`, {
              children: _.rgSimilarItems.map((_, _) =>
                _ || _ < 4
                  ? (0, _.jsx)(
                      `li`,
                      {
                        children: (0, _.jsx)(_, {
                          item: _,
                        }),
                      },
                      _.GetUniqueID(),
                    )
                  : null,
              ),
            }),
          }),
          !_ &&
            (0, _.jsxs)(_, {
              onClick: _,
              children: [`Show all `, _.rgSimilarItems.length],
            }),
        ],
      }),
    ],
  });
}
var _ = {};
function _(_) {
  let { appid: _ } = _,
    [_] = _(_, _);
  return _
    ? (0, _.jsx)(`a`, {
        className: void 0,
        href: _.GetStorePageURL(),
        children: _.GetName(),
      })
    : null;
}
function _(_) {
  let { item: _ } = _;
  return (0, _.jsxs)(`a`, {
    className: _,
    href: _.GetStorePageURL(),
    children: [
      (0, _.jsx)(`img`, {
        src: _.GetAssets().GetSmallCapsuleURL(),
        loading: `lazy`,
      }),
      _.GetName(),
    ],
  });
}
var _ = [
  {
    path: `similarity`,
    render: () => (0, _.jsx)(_, {}),
    name: `ML Similarity`,
  },
  {
    path: `clustering`,
    render: (_) =>
      (0, _.jsx)(_, {
        SteamInterface: _.SteamInterface,
      }),
    name: `Tag Clustering`,
    requires_login: !0,
  },
];
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _.logged_in,
    _ = _();
  if (
    ((0, _.useEffect)(() => {
      _.Init(_), _(!0);
    }, [_]),
    !_)
  )
    return (0, _.jsx)(`div`, {
      className: _,
    });
  let _ = {
    SteamInterface: _,
  };
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `Labs Sandbox`,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: `Internal testbed page for Steam Labs experiments`,
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.map((_) =>
            (0, _.jsx)(
              _,
              {
                _: `${_.LabsSandbox()}/${_.path}`,
                className: _,
                activeClassName: _,
                children: _.name,
              },
              _.path,
            ),
          ),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    path: `${_.LabsSandbox()}/${_.path}`,
                    render: (_) =>
                      !_.requires_login || _
                        ? _.render({
                            ..._,
                            ..._,
                          })
                        : (0, _.jsx)(_, {}),
                  },
                  _.path,
                ),
              ),
            }),
          }),
        }),
      ],
    }),
  });
}
function _() {
  let _ = _();
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`h3`, {
        children: `Please login to view this page.`,
      }),
      (0, _.jsx)(_, {
        transport: _,
        platform: 2,
        onComplete: () => window.location.reload(),
      }),
    ],
  });
}
export { _ as default };
