import { _ } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { _, _, _, _, _, _, _, _, _ } from "./libraries.js?contenthash=eLY4-d-j";
import { _ } from "./partnereventmigrate.js?contenthash=CEpog4Mi";
import { _, _, _, _ } from "./eventrow.js?contenthash=CQLWp866";
import { _ } from "./salebanner.js?contenthash=Kgzkt2UP";
import { _, _ } from "./clanstore.js?contenthash=C3YK0fn0";
import { _ } from "./throbber.js?contenthash=COAox7wG";
import { _ } from "./historyutils.js?contenthash=C2OBI7UD";
import { _ } from "./eventtime.js?contenthash=DlCNIi05";
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
} from "./main.js?contenthash=B3VTzWgT";
import "./partnereventsavebutton.module.js?contenthash=KlJHBgCU";
var _ = _(_()),
  _ = _(_()),
  _ = `_2QW4jBjN1Zk-`,
  _ = `wBp0X6XIyYg-`,
  _ = `JGRxCB9gdso-`,
  _ = `oLJu698DJfs-`,
  _ = `KoQBt-5Be2g-`,
  _ = _(),
  _ = (_) => {
    let {
        strLabel: _,
        strToolTip: _,
        fnSetCurator: _,
        bLimitToCreatorHome: _,
      } = _,
      _ = (0, _.useRef)(null),
      _ = (0, _.useRef)(null),
      _ = (0, _.useRef)(0),
      _ = (0, _.useRef)(void 0);
    (0, _.useEffect)(
      () => () => {
        window.clearTimeout(_.current),
          _.current && _.current(`SearchForCurator: unmounting`),
          _.current && _.current.Hide();
      },
      [],
    );
    let _ = (0, _.useCallback)(
      async (_) => {
        let _ = _.target.value;
        _ &&
          _.trim().length != 0 &&
          (window.clearTimeout(_.current),
          _.current && _.current(`SearchForCurator: new request`),
          (_.current = window.setTimeout(async () => {
            let _ = _.default.CancelToken.source();
            _.current = _.cancel;
            try {
              let _ = await _.SearchCreatorHomeStore(_, _, _);
              if (_.token.reason) return;
              _.current = _(
                (0, _.jsx)(_, {
                  list: _,
                  fnSetCurator: _,
                }),
                _.current.element,
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  bDisablePopTop: !0,
                  bNoFocusWhenShown: !0,
                  bSkipFocusWhenReady: !0,
                },
              );
            } catch (_) {
              if (_.token.reason) return;
              let _ = _(_);
              console.log(
                `SearchForCurator.SearchCreatorHomeStore error ` +
                  _.strErrorMsg,
                _,
              );
            }
          }, 300)));
      },
      [_, _],
    );
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        type: `text`,
        label: _,
        onChange: _,
        onBlur: (_) => setTimeout(() => _.current && _.current.Hide(), 200),
        ref: _,
        tooltip: _,
      }),
    });
  },
  _ = (_) => {
    let { list: _, fnSetCurator: _ } = _;
    return (0, _.jsx)(_, {
      className: _,
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            onSelected: () => _(_),
            children: (0, _.jsxs)(`div`, {
              style: {
                display: `flex`,
                alignItems: `center`,
              },
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`img`, {
                    src: _.GetAvatarURLFullSize(),
                    className: _,
                  }),
                }),
                _(_.GetName()),
              ],
            }),
          },
          `curatorresult` + _.GetClanAccountID(),
        ),
      ),
    });
  },
  _ = _((_) => {
    let _ = _();
    if (!_)
      return (0, _.jsx)(_, {
        string: _(`#Loading`),
        position: `center`,
        size: `medium`,
      });
    let _ = _.filter((_) => !_.gid_clan_event),
      _ = _.filter(
        (_) => _.display_name.toLocaleLowerCase().indexOf(`franchise`) >= 0,
      ),
      _ = _.filter(
        (_) => _.display_name.toLocaleLowerCase().indexOf(`franchise`) < 0,
      ),
      _ = _.filter((_) => !!(_.gid_clan_event && _.hidden)),
      _ = _.filter((_) => !(!_.gid_clan_event || _.hidden));
    return (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`h1`, {
          children: `Migration Sale Tool:`,
        }),
        (0, _.jsx)(`p`, {
          children: `For unmigrated or migrated but unpublished pages, you can view the existing sale page using a not logged in browser (or incognito mode). You can see the new sale page being built on the store if logged in using a Valve Admin account.`,
        }),
        (0, _.jsx)(_, {
          strName: `Unmigrated Franchises`,
          records: _,
        }),
        (0, _.jsx)(_, {
          strName: `Unmigrated Generic Sale PAges`,
          records: _,
          bHideByDefault: !0,
        }),
        (0, _.jsx)(_, {
          strName: `Migrated but Hidden`,
          records: _,
        }),
        (0, _.jsx)(_, {
          strName: `Migrated and Visible`,
          records: _,
          bHideByDefault: !0,
        }),
      ],
    });
  }),
  _ = (_) => {
    let { strName: _, records: _, bHideByDefault: _ } = _,
      [_, _] = (0, _.useState)(_);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`h2`, {
          className: _,
          onDoubleClick: () => _(!_),
          children: [
            _,
            ` (`,
            _.length,
            `)`,
            (0, _.jsx)(`span`, {
              children: `\xA0`,
            }),
            (0, _.jsx)(_, {
              onClick: () => _(!_),
              children: _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
            }),
          ],
        }),
        (0, _.jsx)(`hr`, {}),
        _
          ? (0, _.jsx)(_, {
              onClick: () => _(!1),
              children: _(`#Sale_ShowContents`),
            })
          : (0, _.jsx)(_.Fragment, {
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    record: _,
                  },
                  _.sale_page_id,
                ),
              ),
            }),
      ],
    });
  },
  _ = _((_) => {
    let { record: _ } = _,
      _ = _(_.clan_account_id);
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: (0, _.jsx)(`a`, {
                    href: _.STORE_BASE_URL + `sale/` + _.vanity,
                    children: (0, _.jsx)(`b`, {
                      children: `${_.display_name} - (${_.vanity})`,
                    }),
                  }),
                }),
                !!_ &&
                  (0, _.jsx)(`div`, {
                    children: (0, _.jsxs)(`a`, {
                      href: _.vanity_url,
                      children: [`Sale Page part of `, _.group_name],
                    }),
                  }),
                !!_.gid_clan_event &&
                  (0, _.jsx)(`div`, {
                    children: (0, _.jsx)(`a`, {
                      href:
                        _.COMMUNITY_BASE_URL +
                        `gid/` +
                        _.InitFromClanID(
                          _.clan_account_id,
                        ).ConvertTo64BitString() +
                        `/partnerevents/edit/` +
                        _.gid_clan_event,
                      children: `Migrated: Event Editor Links: State hidden: ${_.hidden} published: ${_.published} sale/ vanity?: ${_.valve_approved_sale_vanity_id}`,
                    }),
                  }),
              ],
            }),
            !!(!_.gid_clan_event || (_.hidden && !_.published)) &&
              (0, _.jsx)(_, {
                onClick: (_) =>
                  _(
                    (0, _.jsx)(_, {
                      record: _,
                    }),
                    _(_),
                  ),
                children: `Migrate Sale Page`,
              }),
          ],
        }),
        (0, _.jsx)(`hr`, {}),
      ],
    });
  }),
  _ = (_) => {
    let { record: _, closeModal: _ } = _,
      [_, _] = (0, _.useState)(_.clan_account_id),
      [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(void 0),
      [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(_.gid_clan_event),
      [_, _] = (0, _.useState)(null);
    return (0, _.jsxs)(_, {
      strTitle: `Migrate Sale page`,
      strDescription: `Will migrate the sale page ${_.vanity} to the below clan `,
      bOKDisabled: !_ || _,
      onOK: () => {
        _(!0),
          _.Get()
            .MigrateOrUpdateSalePage(_.sale_page_id, _, _.gid_clan_event)
            .then(([_, _, _]) => {
              _(_), _(_), _(_);
            });
      },
      onCancel: _,
      children: [
        _.clan_account_id
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`div`, {
                  children: `Sale page already migrated. This will update the hidden page with latest migration code`,
                }),
                (0, _.jsxs)(`div`, {
                  children: [`ClanID = `, _.clan_account_id],
                }),
                (0, _.jsxs)(`div`, {
                  children: [`GID = `, _.gid_clan_event],
                }),
              ],
            })
          : (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  bLimitToCreatorHome: !0,
                  strLabel: `Search for Creator Home to house the Sale Event`,
                  strToolTip: `Partner Event sales must belong to a creator home (which is a curator with games associated to it from the partner site)`,
                  fnSetCurator: (_) => {
                    _(_.GetClanAccountID()), _(_);
                  },
                }),
                !!_ &&
                  (0, _.jsx)(_, {
                    creatorHome: _,
                  }),
              ],
            }),
        !(!_ || _) &&
          (0, _.jsx)(_, {
            position: `center`,
            size: `medium`,
          }),
        !!_ &&
          (0, _.jsx)(`div`, {
            children: _,
          }),
        !!_ &&
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`div`, {
                children: (0, _.jsx)(`a`, {
                  href: _.STORE_BASE_URL + `sale/` + _.vanity,
                  target: `_blank`,
                  children: `Sale Page`,
                }),
              }),
              (0, _.jsx)(`div`, {
                children: (0, _.jsx)(`a`, {
                  href:
                    _.COMMUNITY_BASE_URL +
                    `gid/` +
                    _.InitFromClanID(_).ConvertTo64BitString() +
                    `/partnerevents/edit/` +
                    _,
                  target: `_blank`,
                  children: `New Sale Page Editor`,
                }),
              }),
            ],
          }),
      ],
    });
  },
  _ = (_) => {
    let { creatorHome: _ } = _,
      _ = _.InitFromClanID(_.GetClanAccountID()),
      _ = _.GetClanAccountID();
    return _
      ? (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsxs)(`div`, {
              children: [
                `ClanID = `,
                _,
                ` - SteamID `,
                _.ConvertTo64BitString(),
              ],
            }),
            (0, _.jsx)(`div`, {
              children: (0, _.jsx)(`a`, {
                href:
                  `https://steamsupport.valvesoftware.com/clan/overview/` +
                  _.ConvertTo64BitString(),
                children: `Group Support Page`,
              }),
            }),
            !_.BIsPartnerEventEditorEnabled() &&
              (0, _.jsxs)(`div`, {
                children: [
                  `To use this Creator Home for the sale page migration, the process will need to enable partner event editing on the clan. This both updates the creator home but also puts a small limitation upon it.`,
                  (0, _.jsx)(`a`, {
                    href: `https://confluence.valve.org/display/STEAM/Creator+home+and+Partner+Events+Beta`,
                    target: `_blank`,
                    children: `Read more about the state here.`,
                  }),
                ],
              }),
            (0, _.jsx)(_, {
              creatorID: _.GetCreatorHomeIdentifier(),
              bHideCreatorType: !0,
            }),
          ],
        })
      : null;
  },
  _ = class _ {
    m_mapSaleIDToInfo = new Map();
    m_listSaleState = [];
    m_stateLoadPromise = null;
    m_bLoadComplete = !1;
    BHasLoadCompleted() {
      return this.m_bLoadComplete;
    }
    GetMigrationRecords() {
      return this.m_listSaleState;
    }
    async MigrateOrUpdateSalePage(_, _, _) {
      let _ = this.m_mapSaleIDToInfo.get(_);
      if (!_)
        return [
          `Record not found to begin the migration processing, cannot take action.: ` +
            _,
          !1,
          void 0,
        ];
      if (_.gid_clan_event && (!_.hidden || _.published))
        return [
          `Sale event is already public, cannot take action.: ` + _,
          !1,
          void 0,
        ];
      try {
        let _ = _.COMMUNITY_BASE_URL + `migrate/ajaxcreateupdatesalepage`,
          _ = new URLSearchParams();
        _.append(`sessionid`, _()),
          _.append(`salePageID`, _),
          _.append(`clanAccountID`, `` + _),
          _ && _.append(`gidClanEvent`, _);
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
        if (_?.status == 200 && _?.data?.success == 1 && _?.data?.gidClanEvent)
          return (
            _(() => {
              _.gid_clan_event ||
                ((_.gid_clan_event = _.data.gidClanEvent),
                (_.clan_account_id = _),
                (_.hidden = !0),
                (_.published = !1),
                (_.valve_approved_sale_vanity_id = !0));
            }),
            [_.data.msg || `Success`, !0, _.data.gidClanEvent]
          );
        {
          let _ = _(_);
          return (
            console.error(
              `CMigrateSaleStore.LoadSalePageMigrationInfo: failed with ` +
                _.strErrorMsg,
              _,
            ),
            [_.data.msg || `Failed`, !1, void 0]
          );
        }
      } catch (_) {
        let _ = _(_);
        console.error(
          `CMigrateSaleStore.MigrateOrUpdateSalePage: caught error with ` +
            _.strErrorMsg,
          _,
        );
      }
      return [`failed`, !1, void 0];
    }
    async LoadSalePageMigrationInfo() {
      return (
        (this.m_stateLoadPromise ||= this.InternalLoadSalePageMigrationInfo()),
        this.m_stateLoadPromise
      );
    }
    async InternalLoadSalePageMigrationInfo() {
      try {
        let _ = _.COMMUNITY_BASE_URL + `migrate/ajaxgetsalepagestomigrate`,
          _ = {
            sessionid: _(),
          },
          _ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          });
        if (
          ((this.m_bLoadComplete = !0),
          _?.status == 200 && _?.data?.success == 1 && _?.data?.data)
        )
          return (
            _(() => {
              _.data.data.forEach((_) => {
                this.m_mapSaleIDToInfo.set(_.sale_page_id, _),
                  this.m_listSaleState.push(
                    this.m_mapSaleIDToInfo.get(_.sale_page_id),
                  );
              });
            }),
            console.log(
              `InternalLoadSalePageMigrationInfo Loaded: ` +
                this.m_listSaleState.length,
            ),
            this.m_listSaleState
          );
        {
          let _ = _(_);
          console.error(
            `CMigrateSaleStore.LoadSalePageMigrationInfo: failed with ` +
              _.strErrorMsg,
            _,
          );
        }
      } catch (_) {
        let _ = _(_);
        console.error(
          `CMigrateSaleStore.LoadSalePageMigrationInfo: caught error with ` +
            _.strErrorMsg,
          _,
        );
      }
      return [];
    }
    static s_Singleton;
    static Get() {
      return (_.s_Singleton ||= new _()), _.s_Singleton;
    }
    constructor() {
      _(this);
    }
  };
_([_], _.prototype, `m_mapSaleIDToInfo`, void 0),
  _([_], _.prototype, `m_listSaleState`, void 0);
function _() {
  let [_, _] = _.useState(!_.Get().BHasLoadCompleted());
  return (
    _.useEffect(() => {
      _.Get().BHasLoadCompleted() ||
        _.Get()
          .LoadSalePageMigrationInfo()
          .finally(() => _(!1));
    }, []),
    _ ? void 0 : _.Get().GetMigrationRecords()
  );
}
var _ = class _ {
  constructor() {
    _(this);
  }
  m_rgApps = [];
  m_rgClanAccountIDs = [];
  m_nHighestAppOffsetRequested = 0;
  m_nHighestClanOffsetRequested = 0;
  m_mostRecentRequest;
  m_startAppID;
  static s_globalSingletonStore;
  static Get() {
    return (
      _.s_globalSingletonStore ||
        ((_.s_globalSingletonStore = new _()), _.s_globalSingletonStore.Init()),
      _.s_globalSingletonStore
    );
  }
  Init() {}
  GetApps(_, _, _) {
    let _ = Math.max(_, this.m_nHighestAppOffsetRequested),
      _ = _ + _ - _;
    return (
      _ > 0 && (this.m_mostRecentRequest = this.FetchApps(_, _, _)),
      this.m_rgApps.slice(_, _ + _)
    );
  }
  async FetchApps(_, _, _, _) {
    if (this.m_startAppID && this.m_startAppID != _)
      throw Error(
        `Cannot switch starting AppID from ` + this.m_startAppID + ` to ` + _,
      );
    this.m_startAppID = _;
    let _ = Math.max(_, 20);
    for (
      this.m_nHighestAppOffsetRequested = _ + _, await this.m_mostRecentRequest;
      _ > 0;
    ) {
      let _ = Math.min(_, 100),
        _ = {
          offset: _,
          nBatchSize: _,
          start_appid: _,
        },
        _ = _.COMMUNITY_BASE_URL + `migrate/ajaxgetallapps`,
        _ = null;
      try {
        let _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.data?.success == 1 && _.data.apps) {
          _(() => {
            if (_ > this.m_rgApps.length)
              for (let _ = this.m_rgApps.length; _ < _; _++)
                this.m_rgApps[_] = null;
            for (let _ = 0; _ < _; _++) this.m_rgApps[_ + _] = _.data.apps[_];
          }),
            (_ += _),
            (_ -= _);
          continue;
        }
        _ = _(_?.data);
      } catch (_) {
        _ = _(_);
      }
      throw Error(
        `ajax request failed with error ` +
          _.errorCode +
          `:"` +
          _.strErrorMsg +
          `"`,
      );
    }
  }
  GetClanAccountIDs(_, _) {
    let _ = this.m_nHighestClanOffsetRequested,
      _ = _ + _ - _;
    return (
      _ > 0 && this.FetchClans(_, _), this.m_rgClanAccountIDs.slice(_, _ + _)
    );
  }
  async FetchClans(_, _, _) {
    this.m_nHighestClanOffsetRequested = _ + _;
    let _ = {
        offset: _,
        count: _,
      },
      _ = _.COMMUNITY_BASE_URL + `migrate/ajaxgetallclans`,
      _ = null;
    try {
      let _ = await _.default.get(_, {
        params: _,
        withCredentials: !0,
        cancelToken: _?.token,
      });
      if (_?.data?.success == 1 && _.data.accountids) {
        this.m_rgClanAccountIDs = this.m_rgClanAccountIDs.concat(
          _.data.accountids.map(Number),
        );
        return;
      }
      _ = _(_?.data);
    } catch (_) {
      _ = _(_);
    }
    console.error(`FetchClans: ajax request failed with error`, _.strErrorMsg);
  }
};
_([_.shallow], _.prototype, `m_rgApps`, void 0),
  _([_.shallow], _.prototype, `m_rgClanAccountIDs`, void 0);
var _ = `vvKfa--ozEA-`,
  _ = `oZ8bKUw8W-4-`,
  _ = `EZ-PZVqoIHM-`,
  _ = `opVIDHTC4pM-`,
  _ = `ey2x7OQrzGQ-`,
  _ = `f63uLgxCgCs-`,
  _ = `fdVyjjg3vpM-`,
  _ = `xGCXoyhLvvc-`,
  _ = `ej4ZSyhzAzM-`,
  _ = `_4RtyaqASXjk-`,
  _ = _((_) => {
    let [_, _] = (0, _.useState)(!0);
    (0, _.useEffect)(() => {
      _.Init(), _(!1);
    }, []);
    let [_, _] = _(`start`, 0),
      [_, _] = _(`start_appid`, 0),
      [_, _] = _(`count`, 10),
      [_, _] = _(`autoload`, !0),
      [_, _] = _(`batch_size`, 1),
      [_, _] = _(`automigrate`, !1),
      [_, _] = (0, _.useState)(!1),
      [_, _] = _(`rolling`, 0),
      [_, _] = (0, _.useState)(new Set()),
      _ = (0, _.useRef)(0),
      _ = () => {
        _(!1), _(new Set()), _(_ + _);
      },
      _ = () => _(!0),
      _ = _.Get().GetApps(_, _, _),
      _ = _ == 0 ? _ : _.filter((_) => !_.has(Number(_._))).slice(0, _),
      _ = (_, _) => {
        _.has(_) ||
          (console.log(`completed: `, _, _),
          _.add(_),
          (_.current += _),
          _(new Set(_)));
      };
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: `Partner Events Migration Tools`,
        }),
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              app: _,
              bAutoLoad: _,
              bAutoMigrate: _ || _,
              nMigrateBatchSize: _,
              fnOnCompletion: _,
            },
            _._,
          ),
        ),
        _ &&
          (0, _.jsx)(_, {
            size: `xlarge`,
            position: `center`,
            string: `initializing`,
          }),
        !_.length &&
          (0, _.jsx)(_, {
            size: `xlarge`,
            position: `center`,
            string: `loading apps`,
          }),
        (0, _.jsx)(`div`, {
          className: _,
          onClick: _,
          children: `LOAD NEXT PAGE`,
        }),
        !_ &&
          (0, _.jsx)(`div`, {
            className: `_4RtyaqASXjk-`,
            onClick: _,
            children: `MIGRATE ALL ON PAGE`,
          }),
        (0, _.jsx)(`div`, {
          className: _,
          children:
            _.size +
            ` OF ` +
            _.length +
            ` APPS COMPLETE. #EVENTS: ` +
            _.current,
        }),
      ],
    });
  }),
  _ = 50,
  _ = _((_) => {
    let _ = Number(_.app._),
      [_, _] = (0, _.useState)(0),
      [_, _] = (0, _.useState)([]),
      [_, _] = (0, _.useState)(!1),
      _ = (0, _.useRef)(new Set()),
      _ = (0, _.useRef)(0);
    (0, _.useEffect)(() => {
      _.LoadOGGClanInfoForAppID(_).then((_) =>
        console.log(
          `Loaded app`,
          _,
          _?.group_name,
          _?.clanSteamID?.ConvertTo64BitString(),
        ),
      );
    }, [_]);
    let _ = _.GetOGGClanInfo(_),
      _ = _ ? _.group_name : _.app.name,
      _ = `${_.COMMUNITY_BASE_URL}games/${_ ? _.vanity_url : _}/partnerevents/`,
      _ = _.length,
      _ = _ == _,
      _ = _.filter((_) => _.BIsVisibleEvent()),
      _ = _.length,
      _ = _.filter(
        (_) =>
          _.bOldAnnouncement &&
          _ &&
          _.clanAccountID != _.announcementClanSteamID.GetAccountID(),
      ).length,
      _ = _.filter(
        (_) =>
          _.bOldAnnouncement &&
          !_.current.has(_.AnnouncementGID) &&
          (!_ || _.clanAccountID == _.announcementClanSteamID.GetAccountID()),
      ),
      _ = _.length,
      _ = !_ && _ > 0 && _?.clanSteamID,
      _ = async () => {
        let _ = _;
        _(_ + _), _(!0);
        let _ = await _.LoadPartnerEventsPageable(void 0, _, _, _);
        _(_.concat(_)), _(!1);
      };
    (0, _.useEffect)(() => {
      _.bAutoLoad && _ && !_ && _();
    });
    let _ = (_, _) => {
        _ ? (_.current += 1) : _.current.add(_);
      },
      _ = async () => {
        _(!0), await _(_, _.nMigrateBatchSize, _, _.clanSteamID, _), _(!1);
      };
    return (
      (0, _.useEffect)(() => {
        _.bAutoMigrate && _ && !_ && _();
      }),
      (0, _.useEffect)(() => {
        !_ && !_ && !_ && _.fnOnCompletion(_, _.current);
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`a`, {
            className: _,
            href: _,
            children: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `Loaded: ${_}\tVisible: ${_}\tOld: ${_}`,
              _ > 0 &&
                (0, _.jsx)(`span`, {
                  className: `cl4S7FwWoHY-`,
                  children: `Linked: ${_}`,
                }),
            ],
          }),
          _
            ? (0, _.jsx)(`div`, {
                className: _,
                onClick: _,
                children: `LOAD EVENTS`,
              })
            : _
              ? (0, _.jsx)(_, {
                  size: `small`,
                })
              : _
                ? (0, _.jsx)(`div`, {
                    className: _,
                    onClick: _,
                    children: `MIGRATE EVENTS`,
                  })
                : (0, _.jsx)(`div`, {
                    className: _,
                    children: `NOTHING TO MIGRATE`,
                  }),
        ],
      })
    );
  });
async function _(_, _, _, _, _) {
  for (let _ of _.slice(0, _)) {
    console.log(`Migrating`, _, _.AnnouncementGID, _.GetNameWithFallback(0), _);
    try {
      let _ = await _(_.AnnouncementGID, _, _);
      if (_) console.warn(`Already migrated to event`, _);
      else {
        let _ = _.GetEditModel();
        _.AddTag(`auto_migrated`),
          _.AddTag(`hide_library_overview`),
          _.AddTag(`hide_library_detail`),
          await _.SaveModel(_),
          console.log(`Successfully migrated the event!`),
          (_.bOldAnnouncement = !1),
          _(_.AnnouncementGID, !0);
      }
    } catch (_) {
      let _ = _(_);
      console.error(`MigrateEvents: ` + _.strErrorMsg.slice(0, 512), _),
        _(_.AnnouncementGID, !1);
    }
  }
}
function _(_) {
  let [_, _] = _.useState(!0);
  return (
    _.useEffect(() => {
      _.Init(), Promise.all([]).then(() => _(!1));
    }, []),
    _
      ? (0, _.jsx)(_, {
          position: `center`,
          size: `medium`,
        })
      : (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              path: _.MigrateSaleEvents(),
              component: _,
            }),
            (0, _.jsx)(_, {
              path: _.MigrateEvents(),
              component: _,
            }),
            (0, _.jsx)(_, {
              component: _,
            }),
          ],
        })
  );
}
export { _ as default };
