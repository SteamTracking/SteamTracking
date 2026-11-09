import { _, _, _, _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _, _, _, _, _ } from "./react-router.js";
import { _, _, _ } from "./react-router-dom.js";
import { _ } from "./formatnumber.js";
import { _ } from "./axios.js";
var _ = _(_()),
  _ = `_02J3s0qaZkU-`,
  _ = `XrXc527-eN0-`,
  _ = `_2h8UzfafL2A-`,
  _ = `OUTjRoJcqDI-`,
  _ = `Mba5aeMyD74-`,
  _ = `ZS5lkohTp30-`,
  _ = `gJMyzfvqkDU-`,
  _ = `ONPdTqvV5is-`,
  _ = `n8I06srQMyE-`,
  _ = `tvx-N1pOzKI-`,
  _ = `p3Z6a2v1jSI-`,
  _ = `fZIuooVSW6Y-`,
  _ = `DNGDzyn3pjM-`,
  _ = `_2SGpEv7zmb0-`,
  _ = `zLPnm4RPZGw-`,
  _ = `x7Z4zGexv3M-`,
  _ = `gg6Wckp-slI-`,
  _ = `OSFqPWpbgOo-`,
  _ = `ejkphKJv29s-`,
  _ = `_7Nf-8oVKH8c-`,
  _ = `aQ89MSCoEO8-`,
  _ = `tgWb-IZd1os-`,
  _ = `aGdyUNKTIyg-`,
  _ = `yOva2cBwWGo-`,
  _ = `SEsGpoqSlXM-`,
  _ = `ak7K-NfFup8-`,
  _ = `AaOSww5oQOk-`,
  _ = `BokTpzJnPPs-`,
  _ = `ZbrKuEQLPZY-`,
  _ = `W7BCeh-Erbg-`,
  _ = `s-J90uH4hi0-`,
  _ = `XkXQyg0-G28-`,
  _ = `CW2BJ2R8ZH8-`,
  _ = `obNi1xU4fK8-`,
  _ = `EzHQYP6eeW0-`,
  _ = `_3VDjvUJf6ow-`,
  _ = `-nx27Hufw30-`,
  _ = `_8SJPXnsYTCU-`,
  _ = `oTfq5ek2Qb8-`,
  _ = `x0Yx8FPSO78-`,
  _ = `_--Cz8DzUUQs-`,
  _ = `M-Kipwu-EMQ-`,
  _ = `_5uD7K-RgZjE-`,
  _ = `Np-MRcB2ZCc-`,
  _ = `xhSg3O1-s-4-`,
  _ = `_0Xb838ZOWhk-`,
  _ = `x6QjzoVnN-k-`,
  _ = `WtoR3YGFUwo-`,
  _ = `LEkmCZFOfsE-`,
  _ = `OL29XhgFZFo-`,
  _ = `YE9yneICx-s-`,
  _ = `_101nlblgc0E-`,
  _ = `em4cudlPFQI-`,
  _ = `Rd6vxmKREw0-`,
  _ = `iQCBhM6qmcs-`,
  _ = `JMyi-G5QloM-`,
  _ = `p7wfXdyaJmc-`,
  _ = `efx3iPvt-SU-`,
  _ = `BhlXNkh8sic-`,
  _ = `_9KSQ4brMfEA-`,
  _ = _(_()),
  _ = class {
    constructor() {
      _(this);
    }
    getData(_, _, _) {
      let _ = this.eState == 1 || this.eState == 4;
      return (
        this.isExpired() &&
          !_ &&
          ((this.eState = 1),
          _()
            .then((_) => {
              this.eState == 4
                ? (this.expireData(), this.getData(_, _, _))
                : ((this.data = _ ? _(_) : _),
                  _
                    ? (this.delayNewData(_), (this.eState = 2))
                    : (this.eState = 3));
            })
            .catch((_) => {
              ((this.data = _(void 0)), (this.eState = 3));
            })),
        this.data
      );
    }
    clearData() {
      ((this.eState = 0), (this.data = null), (this.nExpirationTime = 0));
    }
    setDataPending() {
      this.eState = 1;
    }
    isDataPending() {
      return this.eState == 1;
    }
    setData(_, _) {
      ((this.data = _), this.delayNewData(_), (this.eState = 2));
    }
    expireData() {
      this.nExpirationTime = 0;
    }
    isExpired() {
      let _ = Date.now() / 1e3;
      return this.nExpirationTime < _;
    }
    delayNewData(_) {
      if (_ <= 0) this.nExpirationTime = 2 ** 53 - 1;
      else {
        let _ = Date.now() / 1e3;
        this.nExpirationTime = _ + _;
      }
    }
    rerequestDataIfPending() {
      this.eState == 1 && (this.eState = 4);
    }
    getCachedData() {
      return this.data;
    }
    data = void 0;
    eState = 0;
    nExpirationTime = 0;
  };
(_([_], _.prototype, `data`, void 0),
  _([_], _.prototype, `nExpirationTime`, void 0));
var _ = class {
  constructor() {
    _(this);
  }
  getAsyncDataWrapper(_) {
    let _;
    return (
      this.m_mapKeyToDataWrapper.has(_)
        ? (_ = this.m_mapKeyToDataWrapper.get(_))
        : ((_ = new _()), this.m_mapKeyToDataWrapper.set(_, _)),
      _
    );
  }
  clearKey(_) {
    (this.m_mapKeyToDataWrapper.has(_) &&
      this.m_mapKeyToDataWrapper.get(_).clearData(),
      this.m_mapKeyToDataWrapper.delete(_));
  }
  getAllElements() {
    return Array.from(this.m_mapKeyToDataWrapper.values()).map((_) =>
      _.getCachedData(),
    );
  }
  getAllElementsAndKeys() {
    let _ = [],
      _ = this.m_mapKeyToDataWrapper.entries(),
      _ = _.next();
    for (; !_.done;)
      (_.push({
        key: _.value[0],
        data: _.value[1].getCachedData(),
      }),
        (_ = _.next()));
    return _;
  }
  m_mapKeyToDataWrapper = new Map();
};
_([_], _.prototype, `m_mapKeyToDataWrapper`, void 0);
var _ = class _ {
  constructor() {
    _(this);
  }
  static s_SteamMLStore;
  m_asyncSchemaList = new _();
  m_asyncSchemaDetails = new _();
  m_asyncProblemList = new _();
  m_asyncProblemDetails = new _();
  static Get() {
    return (
      _.s_SteamMLStore ||
        ((_.s_SteamMLStore = new _()), _.s_SteamMLStore.Init()),
      _.s_SteamMLStore
    );
  }
  Init() {}
  GetSchemaList(_, _) {
    let _ = _ + `_` + _;
    return this.m_asyncSchemaList.getAsyncDataWrapper(_).getData(
      30,
      async () =>
        await _.default.get(
          `${_.PARTNER_BASE_URL}steamml/get_schemas?appid=${_}&includesteammlapp=${_}&sessionid=${_()}`,
        ),
      (_) => _.data.schemas,
    );
  }
  GetSchemaDetails(_, _) {
    return this.m_asyncSchemaDetails.getAsyncDataWrapper(_).getData(
      30,
      async () =>
        await _.default.get(
          `${_.PARTNER_BASE_URL}steamml/get_schema_details?appid=${_}&schemaid=${_}&sessionid=${_()}`,
        ),
      (_) => JSON.parse(_.data.schema_description_json),
    );
  }
  GetProblemList() {
    return this.m_asyncProblemList.getData(
      30,
      async () =>
        await _.default.get(
          `${_.PARTNER_BASE_URL}steamml/get_problems?sessionid=${_()}`,
        ),
      (_) => _.data.problems,
    );
  }
  GetProblemDetails(_) {
    return this.m_asyncProblemDetails.getAsyncDataWrapper(_).getData(
      30,
      async () =>
        await _.default.get(
          `${_.PARTNER_BASE_URL}steamml/get_problem_details?problemid=${_}&sessionid=${_()}`,
        ),
      (_) => _.data.problem,
    );
  }
  CreateProblem(_, _, _) {
    let _ = new FormData();
    return (
      _.append(`sessionid`, _()),
      _.append(`name`, _),
      _.append(`description`, _),
      _.append(`schemaids`, _.join(`,`)),
      _.default
        .post(`${_.PARTNER_BASE_URL}steamml/create_problem`, _)
        .then(() => {
          this.m_asyncProblemList.clearData();
        })
    );
  }
  EditProblemName(_, _) {
    let _ = new FormData();
    (_.append(`name`, _), this.EditProblem(_, _));
  }
  EditProblemDesc(_, _) {
    let _ = new FormData();
    (_.append(`description`, _), this.EditProblem(_, _));
  }
  EditProblemSchemas(_, _) {
    let _ = new FormData();
    (_.append(`schemaids`, _.join(`,`)), this.EditProblem(_, _));
  }
  EditProblem(_, _) {
    return (
      _.append(`sessionid`, _()),
      _.append(`problemid`, _.toString()),
      _.default
        .post(`${_.PARTNER_BASE_URL}steamml/edit_problem`, _)
        .then(() => {
          this.m_asyncProblemDetails.getAsyncDataWrapper(_).expireData();
        })
    );
  }
  DeleteProblem(_) {
    let _ = new FormData();
    return (
      _.append(`sessionid`, _()),
      _.append(`problemid`, _.toString()),
      _.default
        .post(`${_.PARTNER_BASE_URL}steamml/delete_problem`, _)
        .then(() => {
          this.m_asyncProblemList.clearData();
        })
    );
  }
};
(_([_], _.prototype, `m_asyncSchemaList`, void 0),
  _([_], _.prototype, `m_asyncSchemaDetails`, void 0),
  _([_], _.prototype, `m_asyncProblemList`, void 0),
  _([_], _.prototype, `m_asyncProblemDetails`, void 0),
  _([_], _.prototype, `Init`, null));
var _ = _(),
  _ = _((_) => {
    let _ = _().schemaid == `0`,
      _ = [
        {
          label: `816 - Dota Beta`,
          value: `816`,
        },
        {
          label: `570 - Dota`,
          value: `570`,
        },
        {
          label: `730 - CS:GO`,
          value: `730`,
        },
        {
          label: `1015410 - SteamML`,
          value: `1015410`,
        },
      ],
      [_, _] = (0, _.useState)(_[0].value);
    if (!_) return null;
    let _ = _.Get().GetSchemaList(parseInt(_), !0);
    if (!_) return null;
    let _ = [];
    for (let _ of _)
      _.push(
        (0, _.jsxs)(
          _,
          {
            _: _.SteamMLSchemas(_.appid, _.schemaid),
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _.name,
                  }),
                  (0, _.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, _.jsx)(`span`, {
                        className: _,
                        children: `Schema ID`,
                      }),
                      ` `,
                      _.schemaid,
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [`AppID `, _.appid],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`span`, {
                        className: _,
                        children: `Rows:`,
                      }),
                      ` `,
                      _.row_count,
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`span`, {
                        className: _,
                        children: `Keep Count:`,
                      }),
                      ` `,
                      _(_.keep_count),
                    ],
                  }),
                ],
              }),
            ],
          },
          _.schemaid,
        ),
      );
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`select`, {
          className: _,
          value: _,
          onChange: (_) => _(_.target.value),
          children: _.map((_) =>
            (0, _.jsx)(
              `option`,
              {
                value: _.value,
                children: _.label,
              },
              _.value,
            ),
          ),
        }),
        _,
      ],
    });
  });
function _(_) {
  switch (_) {
    case 1:
      return `int32`;
    case 2:
      return `int64`;
    case 3:
      return `bool`;
    case 4:
      return `float`;
    case 5:
      return `enum`;
    case 6:
      return `timestamp`;
  }
  return ``;
}
function _(_) {
  switch (_) {
    case 1:
      return _;
    case 2:
      return _;
    case 3:
      return _;
    case 4:
      return _;
    case 5:
      return _;
    case 6:
      return _;
  }
  return ``;
}
function _(_, _, _) {
  let _,
    _ = _.indexOf(_.name),
    _ = _ == -1 && !_.count;
  return (
    _.structure
      ? (_ = (0, _.jsxs)(`div`, {
          className: _(_, void 0),
          children: [
            !_.count &&
              (0, _.jsxs)(`div`, {
                className: `e7iVLXlvG-I-`,
                onClick: () => {
                  _(_ ? [..._, _.name] : _.slice(0, _).concat(_.slice(_ + 1)));
                },
                children: [
                  (0, _.jsx)(`div`, {
                    className: _(_ && `sbhCBV8PUaU-`, `fz2xQh7zg6E-`),
                    children: `▼`,
                  }),
                  (0, _.jsxs)(`div`, {
                    className: `SEsGpoqSlXM-`,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: `CW2BJ2R8ZH8-`,
                        children: _.name,
                      }),
                      (0, _.jsx)(`div`, {
                        className: `AaOSww5oQOk-`,
                        children: `STRUCT`,
                      }),
                    ],
                  }),
                ],
              }),
            _.structure.member.map((_) =>
              (0, _.jsx)(
                `div`,
                {
                  className: _(_ && `aSW2roouXk0-`, _),
                  children: _(_, _, _),
                },
                _.name,
              ),
            ),
          ],
        }))
      : _.array && _.array.primitive
        ? (_ = (0, _.jsx)(`div`, {
            className: _(_, void 0),
            children: (0, _.jsxs)(`div`, {
              className: _(_, _(_.array.primitive.type_info.type)),
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _.name,
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    _(_.array.primitive.type_info.type),
                    ` [`,
                    _.array.max_length,
                    `]`,
                  ],
                }),
              ],
            }),
          }))
        : _.array && _.array.structure
          ? (_ = (0, _.jsxs)(`div`, {
              className: _(_, void 0),
              children: [
                !_.count &&
                  (0, _.jsxs)(`div`, {
                    className: `e7iVLXlvG-I-`,
                    onClick: () => {
                      _(
                        _
                          ? [..._, _.name]
                          : _.slice(0, _).concat(_.slice(_ + 1)),
                      );
                    },
                    children: [
                      (0, _.jsx)(`div`, {
                        className: _(_ && `sbhCBV8PUaU-`, `fz2xQh7zg6E-`),
                        children: `▼`,
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `SEsGpoqSlXM-`,
                        children: [
                          (0, _.jsx)(`div`, {
                            className: `CW2BJ2R8ZH8-`,
                            children: _.name,
                          }),
                          (0, _.jsxs)(`div`, {
                            className: `AaOSww5oQOk-`,
                            children: [`STRUCT [`, _.array.max_length, `]`],
                          }),
                        ],
                      }),
                    ],
                  }),
                _.array.structure.member.map((_) =>
                  (0, _.jsx)(
                    `div`,
                    {
                      className: _(_ && `aSW2roouXk0-`, _),
                      children: _(_, _, _),
                    },
                    _.name,
                  ),
                ),
              ],
            }))
          : _.primitive &&
            (_ = (0, _.jsx)(`div`, {
              className: _(_, void 0),
              children: (0, _.jsxs)(`div`, {
                className: _(_, _(_.primitive.type_info.type)),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _.name,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(_.primitive.type_info.type),
                  }),
                ],
              }),
            })),
    _
  );
}
var _ = _((_) => {
    let _ = _(),
      _ = _.schemaid == `0`,
      [_, _] = (0, _.useState)([]);
    if (_) return null;
    let _ = _.Get().GetSchemaDetails(parseInt(_.appid), _.schemaid);
    return _
      ? (console.log(_(_)),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              _: _.SteamMLSchemas(`0`),
              className: _,
              children: `<< BACK`,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [`SCHEMA `, _.name],
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _.schemaid,
                  }),
                ],
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(_, _, _),
            }),
          ],
        }))
      : null;
  }),
  _ = _((_) =>
    (0, _.jsxs)(`div`, {
      className: _,
      children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
    }),
  ),
  _ = (_) =>
    (0, _.jsx)(`div`, {
      className: _(
        _,
        _.acceptStyle && `_9JpnoXVXMSQ-`,
        _.cancelStyle && `jUNwRlBUAe4-`,
        _.disabled && `Bnr6Za9kXxQ-`,
      ),
      style: {
        minWidth: _.minWidth,
      },
      onClick: (_) => {
        _.disabled || (_.onClick(), _.stopPropagation());
      },
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _.children,
      }),
    }),
  _ = ({ problem: _ }) => (
    console.log(_(_)),
    (0, _.jsxs)(_, {
      _: _.SteamMLProblems(_.problemid),
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.name,
        }),
        !_.active &&
          (0, _.jsx)(`div`, {
            className: `ppcbxioOlS4-`,
            children: `Inactive`,
          }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.problem_description,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.problemid,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                `Created `,
                new Date(_.create_time * 1e3).toLocaleDateString([`en-us`]),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                `Last modified `,
                new Date(_.update_time * 1e3).toLocaleDateString([`en-us`]),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  _ = (_) => {
    let [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(``),
      [_, _] = (0, _.useState)(``),
      [_, _] = (0, _.useState)([]),
      _ = _.Get()
        .GetSchemaList(0, !0)
        ?.sort((_, _) => (_.name < _.name ? -1 : 1))
        ?.filter((_, _, _) => _ == 0 || _.name != _[_ - 1].name),
      _ = _.length > 0 && _.length > 0 && _.length > 0,
      _ = () => {
        _.Get().CreateProblem(_, _, _);
      };
    return (0, _.jsxs)(`div`, {
      className: _(_, !_ && `rJjXnBtPbjo-`, _ && `_6g8QQ-OtiVc-`),
      onClick: () => _(!0),
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`img`, {
              className: _,
              src: `${_.IMG_URL}webui/storeadmin/plus.png`,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: `Add New Problem` + (_ ? `` : `?`),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: `Name`,
                }),
                (0, _.jsx)(`input`, {
                  className: _,
                  type: `text`,
                  value: _,
                  onChange: (_) => _(_.target.value),
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: `Description`,
                }),
                (0, _.jsx)(`input`, {
                  className: _,
                  type: `text`,
                  value: _,
                  onChange: (_) => _(_.target.value),
                }),
              ],
            }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: `OL29XhgFZFo-`,
                children: [
                  (0, _.jsx)(`div`, {
                    className: `_0sDeXpjQOF0-`,
                    children: `Select Schemas to Include`,
                  }),
                  (0, _.jsx)(`div`, {
                    className: `_101nlblgc0E-`,
                    children: _.map((_) => {
                      let _ = _.indexOf(_.schemaid) != -1;
                      return (0, _.jsx)(
                        `div`,
                        {
                          className: _(`OFyWGKrCiFg-`, _ && `O-GKWpa9oIQ-`),
                          onClick: () =>
                            _(
                              _
                                ? _.filter((_) => _ != _.schemaid)
                                : _.concat(_.schemaid),
                            ),
                          children: _.name,
                        },
                        _.schemaid,
                      );
                    }),
                  }),
                ],
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  acceptStyle: !0,
                  minWidth: 100,
                  disabled: !_,
                  onClick: () => _ && _(),
                  children: `Create`,
                }),
                (0, _.jsx)(_, {
                  cancelStyle: !0,
                  minWidth: 100,
                  onClick: () => _(!1),
                  children: `Cancel`,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  _ = _(({ schemaid: _ }) => {
    let _ = _.Get().GetSchemaList(0, !0),
      _;
    if (_) {
      let _ = _.filter((_) => _.schemaid == _);
      _.length > 0 && (_ = _[0]);
    }
    return (0, _.jsx)(`div`, {
      className: _,
      children:
        _ &&
        (0, _.jsx)(`div`, {
          className: `fZIuooVSW6Y-`,
          children: _.name,
        }),
    });
  }),
  _ = (_) => {
    (0, _.useEffect)(() => {
      let _ = (_) => {
        _.keyCode === 27 && _();
      };
      return (
        window.addEventListener(`keydown`, _),
        () => {
          window.removeEventListener(`keydown`, _);
        }
      );
    }, [_]);
  },
  _ = _(({ problem: _ }) => {
    let [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(_.name),
      [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(_.problem_description),
      [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(_.schemaid),
      _ = _(),
      _ = (0, _.useRef)(null),
      _ = (0, _.useRef)(null),
      _ = parseInt(_.problemid),
      _ = _.Get()
        .GetSchemaList(0, !0)
        ?.slice()
        .sort((_, _) => (_.name < _.name ? -1 : 1))
        ?.filter((_, _, _) => _ == 0 || _.name != _[_ - 1].name);
    _(() => {
      (_(), _(), _(_.problem_description), _(!1));
    });
    let _ = () => {
        (_(_.name), _(!1));
      },
      _ = () => {
        (_(_.problem_description), _(!1));
      },
      _ = () => {
        (_(_.schemaid), _(!1));
      },
      _ = () => {
        (_(), _(), _(!0));
      },
      _ = () => {
        (_(), _(), _(!0));
      },
      _ = () => {
        (_(), _(), _(!0));
      },
      _ = () => {
        (_.Get().EditProblemName(_, _), (_.name = _), _(!1));
      },
      _ = () => {
        (_.Get().EditProblemDesc(_, _), (_.problem_description = _), _(!1));
      },
      _ = () => {
        (_.Get().EditProblemSchemas(_, _), (_.schemaid = _), _(!1));
      },
      _ = () => {
        (_.Get().DeleteProblem(_), _.push(_.SteamMLProblems(0)));
      };
    return (
      _ && _.current.focus(),
      _ && _.current.focus(),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            _: _.SteamMLProblems(0),
            className: _,
            children: `<< BACK `,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _ && `n8I06srQMyE-`),
                onClick: (_) => _(),
                children: _.name,
              }),
              (0, _.jsx)(`form`, {
                className: _ ? void 0 : _,
                onSubmit: (_) => {
                  (_(), _.preventDefault());
                },
                children: (0, _.jsx)(`input`, {
                  ref: _,
                  className: _,
                  type: `text`,
                  value: _,
                  onBlur: () => _(),
                  onFocus: (_) => _.target.select(),
                  onChange: (_) => _(_.target.value),
                }),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _ && `n8I06srQMyE-`),
                onClick: (_) => _(),
                children: _.problem_description,
              }),
              (0, _.jsx)(`form`, {
                className: _ ? void 0 : _,
                onSubmit: (_) => {
                  (_(), _.preventDefault());
                },
                children: (0, _.jsx)(`input`, {
                  ref: _,
                  className: _,
                  type: `text`,
                  value: _,
                  onBlur: () => _(),
                  onFocus: (_) => _.target.select(),
                  onChange: (_) => _(_.target.value),
                }),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _.problemid,
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      `Created `,
                      new Date(_.create_time * 1e3).toLocaleDateString([
                        `en-us`,
                      ]),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      `Last modified `,
                      new Date(_.update_time * 1e3).toLocaleDateString([
                        `en-us`,
                      ]),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: `Schemas:`,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                onClick: () => _(),
                children: `Edit`,
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _ && `n8I06srQMyE-`),
                children: _.schemaid.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      schemaid: _,
                    },
                    _,
                  ),
                ),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, (!_ || !_) && `n8I06srQMyE-`),
                children:
                  _ &&
                  _.map((_) => {
                    let _ = _.indexOf(_.schemaid) != -1;
                    return (0, _.jsx)(
                      `div`,
                      {
                        className: _(`OFyWGKrCiFg-`, _ && `O-GKWpa9oIQ-`),
                        onClick: () =>
                          _(
                            _
                              ? _.filter((_) => _ != _.schemaid)
                              : _.concat(_.schemaid),
                          ),
                        children: _.name,
                      },
                      _.schemaid,
                    );
                  }),
              }),
              _ &&
                (0, _.jsxs)(`div`, {
                  className: `YE9yneICx-s-`,
                  children: [
                    (0, _.jsx)(_, {
                      minWidth: 100,
                      acceptStyle: !0,
                      disabled: _.length == 0,
                      onClick: () => _(),
                      children: `Accept`,
                    }),
                    (0, _.jsx)(_, {
                      minWidth: 100,
                      cancelStyle: !0,
                      onClick: () => _(),
                      children: `Cancel`,
                    }),
                  ],
                }),
              (0, _.jsx)(`div`, {
                className: _(_, _ && `n8I06srQMyE-`),
                onClick: () => _(),
                children: `Delete Problem`,
              }),
            ],
          }),
        ],
      })
    );
  }),
  _ = _((_) => {
    let _ = _(),
      _ = _.problemid == `0`,
      _,
      _;
    return (
      _
        ? (_ = _.Get().GetProblemList())
        : (_ = _.Get().GetProblemDetails(parseInt(_.problemid))),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            _ &&
            (0, _.jsxs)(`div`, {
              className: `TCfr0Ygz3UA-`,
              children: [
                _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      problem: _,
                    },
                    _.problemid,
                  ),
                ),
                _.length == 0 &&
                  (0, _.jsx)(`div`, {
                    className: `_90sG72RgVkI-`,
                    children: `No Existing Problems`,
                  }),
                (0, _.jsx)(_, {}),
              ],
            }),
          !_ &&
            _ &&
            (0, _.jsx)(`div`, {
              className: `em4cudlPFQI-`,
              children: (0, _.jsx)(_, {
                problem: _,
              }),
            }),
        ],
      })
    );
  }),
  _ = {
    SteamMLBase: () => `steamml`,
    SteamMLSchemas: (_, _) => `/schemas/${_ ?? `0`}/${_ ?? `0`}`,
    SteamMLModels: () => `/models`,
    SteamMLProblems: (_) => `/problems/${_ ?? `0`}`,
  },
  _ = class extends _.Component {
    render() {
      return (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(_, {
          basename: _() + _.SteamMLBase(),
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  exact: !0,
                  path: _.SteamMLSchemas(`:appid`, `:schemaid`),
                  component: _,
                }),
                (0, _.jsx)(_, {
                  exact: !0,
                  path: _.SteamMLModels(),
                  component: _,
                }),
                (0, _.jsx)(_, {
                  exact: !0,
                  path: _.SteamMLProblems(`:problemid`),
                  component: _,
                }),
                (0, _.jsx)(_, {
                  exact: !0,
                  path: `/`,
                  children: (0, _.jsx)(_, {
                    _: _.SteamMLSchemas(),
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    }
  },
  _ = (_) => {
    let _ = _(),
      _ = _(_.pathname, {
        path: _.SteamMLSchemas(`:appid`, `:schemaid`),
        exact: !0,
      }),
      _ = _(_.pathname, {
        path: _.SteamMLModels(),
        exact: !0,
      }),
      _ = _(_.pathname, {
        path: _.SteamMLProblems(`:problemid`),
        exact: !0,
      });
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          _: _.SteamMLSchemas(),
          className: _(_, _ && `O-GKWpa9oIQ-`),
          children: `SCHEMAS`,
        }),
        (0, _.jsx)(_, {
          _: _.SteamMLModels(),
          className: _(_, _ && `O-GKWpa9oIQ-`),
          children: `MODELS`,
        }),
        (0, _.jsx)(_, {
          _: _.SteamMLProblems(),
          className: _(_, _ && `O-GKWpa9oIQ-`),
          children: `PROBLEMS`,
        }),
      ],
    });
  },
  _ = (_) =>
    (0, _.jsx)(`div`, {
      children: `MODEL PAGE`,
    });
export { _ as SteamMLRoutes, _ as default };
