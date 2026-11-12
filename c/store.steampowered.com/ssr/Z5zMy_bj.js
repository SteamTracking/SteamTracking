var _ = _(_()),
  _ = `G1P1ZyqJjf8-`,
  _ = `j7G2Xdjlpp0-`,
  _ = `ZMdQZMoa6-U-`,
  _ = `jbaf5CQ2gQo-`,
  _ = `-u7X0tUkT0E-`,
  _ = `_-4o7kXvT1FQ-`,
  _ = `_37ioG1fiLLw-`,
  _ = `CqOZwXoHdIk-`,
  _ = `_-4qRmRIQUJY-`,
  _ = `GjVvP3msmeo-`,
  _ = `Fr9368rly38-`,
  _ = `NhXEc5eqRTY-`,
  _ = `ozCVufQ1zlM-`,
  _ = `OLmpJQg1UuI-`,
  _ = `wMc-2OhaLHs-`,
  _ = `JS5ae4rPqsE-`;
function _(_) {
  if (!_) return;
  let _ = typeof _ == `string` ? _ : _.locString,
    _ = typeof _ == `string` ? [] : _.params || [];
  if (_) return _[0] === `#` ? _(_, ..._) : _;
}
function _(_, _) {
  return _.useMemo(() => {
    if (_ === void 0) return null;
    let _ = _(_),
      _ = _(_);
    if (!_ || !_) return null;
    let _ =
        typeof _.displayNameLoc == `function`
          ? _.displayNameLoc(_)
          : {
              locString: _.displayNameLoc,
            },
      _ =
        typeof _.titleLoc == `function`
          ? _.titleLoc(_)
          : {
              locString: _.titleLoc,
            },
      _ =
        typeof _.bodyLoc == `function`
          ? _.bodyLoc(_)
          : {
              locString: _.bodyLoc,
            },
      _ = typeof _.image == `function` ? _.image(_) : _.image,
      _ = typeof _.link == `function` ? _.link(_) : _.link;
    return {
      display_name: _(_),
      title: _(_),
      body: _(_),
      image: _,
      link: _,
    };
  }, [_, _]);
}
function _(_, _) {
  return _.useMemo(() => {
    let _ = _(_),
      _ = _(_);
    if (!_) return null;
    let _ = typeof _.titleLoc == `string` ? _.titleLoc : _.titleLoc(_),
      _ = typeof _.bodyLoc == `string` ? _.bodyLoc : _.bodyLoc(_),
      _ = typeof _.url == `string` ? _.url : _.url(_),
      _ =
        typeof _.steamidAttribute == `string`
          ? _.steamidAttribute
          : _.steamidAttribute(_);
    return {
      strTitleLoc: _,
      strBodyLoc: _,
      strUrl: _,
      steamid: _ && _[_],
    };
  }, [_, _]);
}
function _(_) {
  return _.useMemo(() => (_(_.type) ? _(_) : null), [_]);
}
var _ = `tY1EfG-Owy8-`,
  _ = `zIg9T02-llM-`,
  _ = `I6MOv-xqRws-`,
  _ = `-tSLzlbmqds-`,
  _ = `v0SP64JQDEM-`,
  _ = `yMf71xU3HuI-`,
  _ = `xt4PaC5WZEw-`,
  _ = `lYapceyg6RI-`,
  _ = `UEAh4EwAaiI-`,
  _ = `_4AbLh9tgdX0-`,
  _ = `_6Wb0DKY8LYE-`,
  _ = `EE4FCo73JHk-`,
  _ = `t73yKAPBCZA-`,
  _ = `Ng03JSo5DeM-`,
  _ = `u7UU3gQ7zdw-`,
  _ = `AYgbbhSuWG4-`,
  _ = `hd0VQaHUodE-`,
  _ = `VQhF4ONTz8k-`,
  _ = `kRyQpzGJdiM-`,
  _ = `BX63D1we1O0-`,
  _ = `dhhFvcPsBgU-`,
  _ = `EQ7VoRigF0g-`,
  _ = `_8FA0qZoDHSY-`,
  _ = `cDXpehjV14s-`,
  _ = `eEEZIDH8xLE-`,
  _ = `RSEUPJivDYc-`,
  _ = `vrt0VjL-l5c-`,
  _ = _();
function _(_) {
  let { onActivate: _, icon: _, body: _, eUIMode: _, classNames: _ } = _,
    _ = _,
    _ = _;
  return (
    _ == 7 ? (_ = _) : _ == 3 && (_ = _),
    (_ = _(_, _)),
    (0, _.jsx)(_, {
      className: _,
      onActivate: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`span`, {
              className: _,
              children: _,
            }),
            _,
          ],
        }),
      }),
    })
  );
}
function _(_) {
  let {
    count: _,
    icon: _,
    onActivate: _,
    strBody: _,
    bAlwaysShow: _,
    eUIMode: _,
    classNames: _,
    visible: _,
  } = _;
  return !_ && !_
    ? null
    : (0, _.jsx)(_, {
        icon: _,
        body: _,
        onActivate: _,
        eUIMode: _,
        classNames: _,
        visible: _,
      });
}
function _(_) {
  let {
      nUnread: _,
      location: _,
      eUIMode: _,
      bLoading: _,
      footer: _,
      bNewIndicator: _,
    } = _,
    [_, _] = _.useState(+!!_),
    [_, _] = _.useState(void 0);
  (_.useEffect(() => {
    _ == 1 && !_ ? _(2) : _ == 2 && _ && _(1);
  }, [_, _]),
    _.useEffect(() => {
      let _ = window.setTimeout(() => _(0), 2e4);
      return () => window.clearTimeout(_);
    }, []),
    _.useEffect(() => {
      _ && _ > 0 && _ !== `BX63D1we1O0-` && _ != 2 && _ != 1
        ? _(_)
        : !_ && _ == `BX63D1we1O0-` && _(_);
    }, [_, _, _]));
  let _ = _.onActivate;
  ((_ ||= () => console.log(`Missing activate function`)),
    _ == 1 && (_ = void 0));
  let _ = _;
  _ == 4 ? (_ = _) : _ == 2 ? (_ = _) : (_ == 7 || _ == 3) && (_ = _);
  let _ = null;
  if (_ != 0 && _ != 2 && _ != 1) {
    let _ = _ == 2 ? _ : null;
    _ = (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, _),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
            (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
          ],
        }),
      ],
    });
  }
  return (0, _.jsxs)(_, {
    onActivate: _,
    className: _,
    onOptionsButton: _.onOptionsButton,
    onOptionsActionDescription: _.onOptionsButtonDesc,
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.logo,
          }),
          _.personaStatus &&
            (0, _.jsx)(`div`, {
              className: _(`HVFuDe6Cc6s-`, _.personaStatus),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.children,
          }),
          _,
          _ &&
            (0, _.jsx)(_, {
              location: _,
            }),
        ],
      }),
      _ || null,
    ],
  });
}
function _(_) {
  let { location: _ } = _;
  return _ == 3
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      })
    : null;
}
function _(_) {
  let {
      icon: _,
      title: _,
      timestamp: _,
      location: _,
      fnRenderTimestamp: _,
    } = _,
    _ = !!_ && (_ == 3 || _ == 4),
    _;
  return (
    (_ = _ == 4 ? _ : (_ ?? _)),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          icon: _,
        }),
        !!_ &&
          (0, _.jsx)(_, {
            title: _,
          }),
        _ &&
          _({
            timestamp: _,
          }),
      ],
    })
  );
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !!_.icon &&
        (0, _.jsx)(`div`, {
          className: `UEAh4EwAaiI-`,
          children: _.icon,
        }),
      ` `,
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.title,
  });
}
function _(_) {
  let _ = _(_, _.multiline && `_2OxPAJkmSGo-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let _ = _(_, _.multiline && `_2OxPAJkmSGo-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  if (_.timestamp === void 0) return null;
  let _ = new Date(),
    _ = new Date(_.timestamp * 1e3),
    _ = _(_.timestamp);
  return (
    _(_, _) || (_ = _(_.timestamp, !1, !1, !1) + ` ` + _),
    (0, _.jsx)(`div`, {
      className: _,
      children: _,
    })
  );
}
function _(_) {
  if (_.timestamp === void 0) return null;
  let _ = new Date(),
    _ = new Date(_.timestamp * 1e3),
    _ = _(_, _) ? _(_.timestamp) : _(_.timestamp, !1, !1, !1);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _(_) {
  return _ == 1;
}
function _(_, _) {
  return _.useCallback(
    (_) => {
      (_ && _(_), _ && _());
    },
    [_, _],
  );
}
var _ = `G7ABJ-RQDcQ-`,
  _ = `_1NSylN56FaA-`,
  _ = `Z-eNHLrSoUE-`,
  _ = `-MhinKS0EHQ-`,
  _ = `_4HwSF-VGLww-`,
  _ = `KMjz9RgqVfY-`,
  _ = `NuPVm1AZ2k8-`,
  _ = `vr0mrg2-prM-`;
function _(_) {
  let {
      onActivate: _,
      onDismiss: _,
      logo: _,
      icon: _,
      title: _,
      body: _,
      personaStatus: _,
      className: _,
      singleLineOnly: _,
      fullWidth: _,
      bodySuffix: _,
      bodySuffixToken: _,
    } = _,
    _ = _(_, _);
  return (
    _ &&
      _ &&
      (_ = _(
        _,
        (0, _.jsx)(`span`, {
          className: _,
          children: _,
        }),
        (0, _.jsx)(`span`, {
          className: _,
          children: _,
        }),
      )),
    (0, _.jsxs)(_, {
      className: _(_, !_ && !_ && `qz3r-n3YPnk-`, _),
      onActivate: _,
      onMouseDown: (_) => {
        _.button == 1 && _ && _();
      },
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        _.personaStatus &&
          (0, _.jsx)(`div`, {
            className: _(`ZaR0T0hRhb8-`, _),
          }),
        (0, _.jsxs)(`div`, {
          className: _(_, _ && `B-ehFiwCqak-`),
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                !!_ &&
                  (0, _.jsx)(`div`, {
                    className: `vp1KFLrEqtk-`,
                    children: _,
                  }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _(_, !!_ && `zeLnVFV5194-`),
              children: _,
            }),
          ],
        }),
      ],
    })
  );
}
var _ = `_2dS5rsyxZco-`,
  _ = `_7Tu2PI3hMyU-`,
  _ = `FoBa248GpXI-`,
  _ = `GcHxM19mGd0-`,
  _ = `xS3Y4nbmtYg-`,
  _ = `zbcKxz2FaQU-`;
function _(_) {
  switch (_) {
    case 6:
      return (0, _.jsx)(_, {});
    case 11:
      return (0, _.jsx)(_, {});
    default:
      return (0, _.jsx)(_, {});
  }
}
function _(_) {
  let {
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = typeof _?.image == `number`,
    _ = _
      ? {
          appid: _.image,
        }
      : void 0,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _?.display_name ?? ``,
    _ = _?.title ?? _?.body,
    _ = _?.title ? _.body : null,
    _ = _(_),
    _ = _ && (!_ || !_),
    [_, _] = _.useState(!1),
    _ = () => _(!0),
    _ = null;
  if (_) _ = _(_, _, _);
  else {
    let _ = _ ? _ : _;
    _ =
      _?.image && !_
        ? (0, _.jsx)(`img`, {
            className: _,
            src: _.image,
            onError: _,
          })
        : _;
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      displayName: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(`#SteamNotifications_TradeOffer_Title`),
    _ = _
      ? _(`#SteamNotifications_TradeOffer_Body_Short`, _ ?? ``)
      : _(`#SteamNotifications_TradeOffer_Body`),
    _ = _(`#SteamNotifications_TradeOffer_Description`, _ ?? ``),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
var _ = (_) => {
  let {
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(`#SteamNotifications_TradeReversal_Title`),
    _ = _(
      _
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    _ = _(`#SteamNotifications_TradeReversal_Description`);
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
};
function _(_) {
  let {
      senderName: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _
      ? _(`#Notification_GiftReceived_Body_Short`, _ ?? ``)
      : _(`#Notification_GiftReceived_Body`),
    _ = _ ? _(`#Notification_GiftReceived_Description`, _) : null,
    _ = _(`#Notification_GiftReceived_Title`),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      requestorName: _,
      requestorAvatarURL: _,
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = ``;
  _ && _.state == 2
    ? (_ = _(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : _ && _.state == 3
      ? (_ = _(`#SteamNotifications_FriendInvite_Description_Friends`))
      : _ && (_ = _(`#SteamNotifications_FriendInvite_Description`));
  let [_, _] = _.useState(!1),
    _ = () => _(!0),
    _ = _;
  if (_ && !_) {
    let _ = _.state == 3 && _ != 1,
      _ = _ ? _ : _;
    _ = (0, _.jsxs)(_, {
      style: {
        position: `relative`,
      },
      children: [
        _ &&
          (0, _.jsx)(_, {
            className: `QpI8-1z6564-`,
          }),
        (0, _.jsx)(`img`, {
          className: _,
          src: _,
          onError: _,
        }),
      ],
    });
  }
  let _ = _ || _(`#SteamNotifications_FriendInvite_Body_Generic`),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _(`#Notification_FriendInvite_Title`),
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _(`#Notification_FriendInvite_Title`),
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      itemState: _,
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      appName: _,
      fnRenderTimestamp: _,
      nUnread: _,
      onHide: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = () => _(!0),
    _ = _(_),
    _ = _;
  if (_?.icon_url && !_) {
    let _ = `${_.COMMUNITY_CDN_URL}economy/image/${_.icon_url}`,
      _ = _.background_color ? `#` + _.background_color : null,
      _ = _ ? _ : _;
    _ = (0, _.jsx)(_, {
      style: {
        position: `relative`,
      },
      children: (0, _.jsx)(`img`, {
        className: _,
        style: {
          backgroundColor: _ ?? void 0,
          justifyContent: `center`,
        },
        src: _,
        onError: _,
      }),
    });
  }
  let _ = _.appid == 753,
    _ = null;
  if (_ !== void 0 && _ > 1) {
    let _ = _ - 1;
    _ = _
      ? _(`#Notification_Item_RollupMore_Steam`, _)
      : _
        ? _(`#Notification_Item_RollupMore_GameName`, _, _)
        : _(`#Notification_Item_RollupMore`, _);
  } else _ && (_ = _ ? _ : _(`#Notification_Item_Single_GameName`, _));
  let _ = _?.name ? _.name : _(`#Notification_Item_Body_Generic`),
    _ = !_;
  if (_) {
    let _ = ``;
    return (
      (_ = _
        ? _(
            _ > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            _,
          )
        : _(`#Notification_Item_Body_Generic`)),
      (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _(`#Notification_ItemAnnouncement_Body`),
        body: _,
      })
    );
  }
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      logo: _,
      bLoading: _,
      ..._,
      children: [
        (0, _.jsx)(_, {
          icon: _,
          title: _(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: _,
          location: _,
          fnRenderTimestamp: _,
        }),
        (0, _.jsx)(_, {
          multiline: !_,
          children: _,
        }),
        !!_ &&
          (0, _.jsx)(_, {
            children: _,
          }),
        _
          ? (0, _.jsx)(_, {
              onHide: _,
            })
          : null,
      ],
    }),
  });
}
function _(_) {
  let {
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _.appid
      ? {
          appid: _.appid,
        }
      : void 0,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_, _, _),
    _ = _ && (!_ || !_),
    _ = ``;
  return (
    _.state == 1
      ? (_ =
          _ && _?.name
            ? _(`#SteamNotification_AsyncGame_Action_Short`, _.name)
            : _(`#SteamNotification_AsyncGame_Action`))
      : _.state == 2 &&
        (_ =
          _ && _?.name
            ? _(`#SteamNotification_AsyncGame_Done_Short`, _.name)
            : _(`#SteamNotification_AsyncGame_Done`)),
    _
      ? (0, _.jsx)(_, {
          ..._,
          logo: _,
          icon: _.icon,
          title: _(`#SteamNotification_AsyncGame_Title`),
          body: _,
        })
      : (0, _.jsx)(_, {
          children: (0, _.jsxs)(_, {
            logo: _,
            bLoading: _,
            ..._,
            children: [
              (0, _.jsx)(_, {
                icon: _,
                title: _(`#SteamNotification_AsyncGame_Title`),
                timestamp: _,
                location: _,
                fnRenderTimestamp: _,
              }),
              (0, _.jsx)(_, {
                children: _,
              }),
              (0, _.jsx)(_, {
                children: _?.name,
              }),
              _
                ? (0, _.jsx)(_, {
                    onHide: _,
                  })
                : null,
            ],
          }),
        })
  );
}
function _(_) {
  let {
      title: _,
      body: _,
      logoUrl: _,
      bDataLoading: _,
      icon: _,
      onHide: _,
      location: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onActivate: _,
      personaStatus: _,
    } = _,
    _ = _(_),
    _ = _ ? _ : _,
    _ = (0, _.jsx)(_, {
      style: {
        position: `relative`,
      },
      children: (0, _.jsx)(`img`, {
        className: _,
        style: {
          justifyContent: `center`,
        },
        src: _,
      }),
    });
  return _
    ? (0, _.jsx)(_, {
        logo: _,
        icon: _.icon,
        title: _,
        body: _,
        onActivate: _,
        personaStatus: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          onActivate: _,
          personaStatus: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !0,
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      currentUserSteamID: _,
      fallbackLogo: _,
      postedByDisplayName: _,
      postedByAvatarURL: _,
      ownerDisplayName: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      nUnread: _,
      appName: _,
      onHide: _,
      commentTitle: _,
      commentBody: _,
    } = _,
    _ = _,
    _ = _(_),
    [_, _] = _.useState(!1),
    _ = () => _(!0),
    [_, _] = _(_.bclan_account ? _.owner_steam_id?.GetAccountID() : void 0),
    _ = _(_) ? _ : null,
    _ = _(_) ? _ : null;
  _.comment_type == 10
    ? (_ =
        _.owner_steam_id?.ConvertTo64BitString() == _
          ? _ == 4 && _
            ? _(`#SteamNotifications_Comment_Your_Profile_By`, _)
            : _(`#SteamNotifications_Comment_Your_Profile`)
          : _
            ? _ == 4 && _
              ? _(`#SteamNotifications_Comment_Player_Profile_By`, _, _)
              : _(`#SteamNotifications_Comment_Player_Profile`, _)
            : _(`#SteamNotifications_Comment_Profile`))
    : _.comment_type == 5 && _.json_data?.file_type == 5
      ? (_ =
          _.owner_steam_id?.ConvertTo64BitString() == _
            ? _
              ? _(`#SteamNotifications_Comment_Your_Screenshot_Game`, _)
              : _(`#SteamNotifications_Comment_Your_Screenshot`)
            : _
              ? _(`#SteamNotifications_Comment_Screenshot_Game`, _)
              : _(`#SteamNotifications_Comment_Screenshot`))
      : !_ && _.json_data?.title && (_ = _.json_data.title);
  let _ = null;
  _.brate_limited
    ? (_ =
        _.comment_type == 7 && _.bis_forum && _
          ? _(`#SteamNotifications_Comment_RateLimited_Forum`, _)
          : _(`#SteamNotifications_Comment_RateLimited`))
    : (_ =
        _.comment_type == 7 && _.bis_forum && _
          ? (0, _.jsx)(_, {
              children: _(`#SteamNotifications_Comment_NewDiscussion`, _),
            })
          : (0, _.jsxs)(_, {
              children: [`"`, _, `"`],
            }));
  let _ = _(`#SteamNotifications_Comment`),
    _ = null;
  if (_ !== void 0 && _ > 1) {
    let _ = `+` + (_ - 1);
    _ == 4
      ? (_ = (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }))
      : (_ = _ + ` ` + _);
  }
  let _ = _;
  if (!_) {
    let _ = _ ? _ : _;
    if (_ && _(_)) {
      let _ = _.bhas_friend && _ != 1;
      _ = (0, _.jsxs)(`div`, {
        style: {
          position: `relative`,
        },
        children: [
          _ &&
            (0, _.jsx)(_, {
              className: `QpI8-1z6564-`,
            }),
          (0, _.jsx)(`img`, {
            className: _,
            src: _,
            onError: _,
          }),
        ],
      });
    } else
      _?.avatar_medium_url &&
        (_ = (0, _.jsx)(`img`, {
          className: _,
          src: _.avatar_medium_url,
          onError: _,
        }));
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _,
            _,
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _.appid
      ? {
          appid: _.appid,
        }
      : void 0,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_, _, _),
    _ = _ && (!_ || !_ || !_),
    _ = ``,
    _ = null;
  if (_) {
    let _ = _.name ?? ``;
    ((_ = _),
      _.count == 1
        ? _
          ? (_ = _(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, _.jsx)(`span`, {
                children: _,
              }),
              (0, _.jsx)(`bdi`, {
                dir: `ltr`,
                style: {
                  color: `#FFFFFF`,
                },
                children: _?.formatted_final_price,
              }),
            ))
          : (_ = _(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, _.jsx)(`bdi`, {
                dir: `ltr`,
                style: {
                  color: `#FFFFFF`,
                },
                children: _?.formatted_final_price,
              }),
            ))
        : _.count == 2
          ? _
            ? (_ = _(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, _))
            : (_ = _(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : _
            ? (_ = _(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                _,
                _.count - 1,
              ))
            : (_ = _(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                _.count - 1,
              )));
  } else _ = _(`#SteamNotifications_Wishlist_Generic`);
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _(`#SteamNotifications_Wishlist`),
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _(`#SteamNotifications_Wishlist`),
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_, _, _ = !1) {
  let [_, _] = _.useState(!1),
    _ = () => _(!0);
  if (!_ || _)
    return (0, _.jsx)(_, {
      style: {
        position: `relative`,
      },
      children: _,
    });
  let _ = _(_, `community_icon`);
  return _
    ? (0, _.jsx)(_, {
        style: {
          position: `relative`,
        },
        children: (0, _.jsx)(`img`, {
          src: _,
          className: _,
          onError: _,
        }),
      })
    : (0, _.jsxs)(_, {
        style: {
          position: `relative`,
        },
        children: [
          (0, _.jsx)(`img`, {
            className: _(_),
            src: _,
            onError: _,
          }),
          (0, _.jsx)(`img`, {
            src: _,
            onError: _,
            style: {
              position: `absolute`,
              left: 7,
              top: 7,
              height: 32,
              width: 32,
            },
          }),
        ],
      });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    onClick: (_) => {
      (_.onHide(), _.stopPropagation(), _.preventDefault());
    },
    onMouseDown: (_) => {
      (_.stopPropagation(), _.preventDefault());
    },
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
var _ = null,
  _ = !1;
function _() {
  return (
    (_ ||= new _({
      BIsFriend: _(),
    })),
    _
  );
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(() => _().m_bInitialized);
  return (
    !_ && !_ && ((_ = !0), _.Init(_.accountid, _, _).finally(() => (_ = !1))),
    [_, _]
  );
}
function _(_) {
  let _ = null;
  return (_(_) ? (_ = _) : _(_) ? (_ = _) : _[_] && (_ = _[_]), _);
}
function _(_) {
  let { rollup: _, uimode: _, location: _ } = _,
    _ = _(_.type);
  return _
    ? (0, _.jsx)(_, {
        controller: `notification`,
        method: _(_),
        submethod: _(_),
        children: (0, _.jsx)(_, {
          ..._,
        }),
      })
    : null;
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_.item.notification_type, _.item.body_data),
    _ = _(_.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    _ = _(_?.link ?? `#`, _);
  return (0, _.jsx)(`a`, {
    href: _?.link ? _ : `#`,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      icon: _(_.type),
      onActivate: () =>
        _(() => {
          _?.link && _ && window.location.assign(_);
        }, _.item),
      fallbackLogo: (0, _.jsx)(_, {}),
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = `${_.COMMUNITY_BASE_URL}my/gamenotifications/`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_);
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      icon: (0, _.jsx)(_, {}),
      fallbackLogo: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      steamid: _,
      url: _,
      strTitleLoc: _,
      strBodyLoc: _,
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    { data: _ } = _(_),
    _ = (_) => _(() => {}, _.item, _),
    _ = () => _(() => window.location.assign(_), _.item);
  if (!_) return null;
  let _ = !_,
    _ = _(_, _?.m_strPlayerName ?? ``),
    _ = _(_, _?.m_strPlayerName ?? ``);
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      title: _,
      body: _,
      bDataLoading: _,
      logoUrl: _?.avatar_url_medium,
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let _ = _(_.rollup.type, _.rollup.item.body_data);
  if (!_) return null;
  let { strTitleLoc: _, strBodyLoc: _, strUrl: _, steamid: _ } = _;
  return !_ || !_ || !_
    ? null
    : (0, _.jsx)(_, {
        steamid: _,
        url: _,
        strTitleLoc: _,
        strBodyLoc: _,
        ..._,
      });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = _(_),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/tradeoffers`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _.InitFromAccountID(_, _.EUNIVERSE),
    { data: _ } = _(_.GetAccountID());
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      displayName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
var _ = (_) => {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = `${_.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: () => _(() => window.location.assign(_), _.item),
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
};
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/inventory/#pending_gifts`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_),
    _ = _.InitFromAccountID(_, _.EUNIVERSE),
    { data: _ } = _(_.GetAccountID());
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      senderName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    { data: _ } = _(_.responder_steamid),
    _ =
      _.package_id > 0
        ? {
            packageid: _.package_id,
          }
        : {
            bundleid: _.bundle_id,
          },
    { data: _ } = _(_),
    _ = _ ? `app/${_.appid}` : ``,
    _ = `${_.STORE_BASE_URL}${_}`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = !_ || !_,
    _ = _(`#SteamNotifications_RequestedGameAddedTitle`),
    _ = _ ? _(`#SteamNotifications_RequestedGameAddedBody`, _.name ?? ``) : ``;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      title: _,
      body: _,
      bDataLoading: _,
      logoUrl: _?.avatar_url_medium,
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(_.item, _, _),
    _ = _(_),
    { data: _ } = _(
      _?.appid
        ? {
            appid: _.appid,
          }
        : void 0,
    ),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/inventory`;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      appName: _?.name,
      icon: (0, _.jsx)(_, {}),
      fallbackLogo: (0, _.jsx)(_, {}),
      onActivate: () => _(() => window.location.assign(_), _.item),
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      itemState: _,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/friends/pending`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_),
    { data: _ } = _(_.requestorID);
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      fallbackLogo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      requestorAvatarURL: _?.avatar_url_medium,
      requestorName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(),
    _ = _.COMMUNITY_BASE_URL + _.url,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => {
      _(() => {}, _.item, _);
    },
    _ = _(_) ? _?.account_steam_id?.GetAccountID() : null,
    { data: _ } = _(_),
    _ = _(_) ? _?.owner_steam_id?.GetAccountID() : null,
    { data: _ } = _(_),
    _ = _.json_data?.app_id
      ? {
          appid: _.json_data?.app_id,
        }
      : void 0,
    { data: _ } = _(_),
    [_, _] = _(),
    _ = _ ? _.FilterText(_.account_steam_id.GetAccountID(), _.title) : ``,
    _ = _ ? _.FilterText(_.account_steam_id.GetAccountID(), _.comment) : ``;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      fallbackLogo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      currentUserSteamID: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      postedByAvatarURL: _?.avatar_url_medium,
      postedByDisplayName: _?.m_strPlayerName,
      ownerDisplayName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      appName: _?.name,
      onHide: _,
      commentTitle: _,
      commentBody: _,
      bLoading: !_,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    { data: _ } = _({
      appid: _.appid,
    }),
    [_, _] = (0, _.useState)(``),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (_.count > 1 && _.appids?.length)
        return _(
          _.STORE_BASE_URL +
            `wishlist/profiles/${_}/?wng=${_.appids.toString()}#sort=discount`,
        );
      if (_) return _(_.STORE_BASE_URL + _.store_url_path);
      let _ = _.appid ? `?appid=${_.appid}` : ``;
      _(_.STORE_BASE_URL + `wishlist/profiles/${_}/${_}#sort=discount`);
    }, [_, _, _]),
    (0, _.jsx)(`a`, {
      href: _,
      onMouseDown: (_) => _(() => {}, _.item, _),
      children: (0, _.jsx)(_, {
        fallbackLogo: (0, _.jsx)(_, {}),
        icon: (0, _.jsx)(_, {}),
        onActivate: () => _(() => window.location.assign(_), _.item),
        location: _,
        data: _,
        timestamp: _.timestamp,
        nUnread: _.rgunread.length,
        eUIMode: _,
        bNewIndicator: _(_.item),
        onHide: _,
      }),
    })
  );
}
function _(_) {
  let { url: _, count: _, icon: _, strBody: _, eFeature: _ } = _,
    _ = _(_);
  return !_ || _
    ? null
    : (0, _.jsx)(`a`, {
        href: _,
        className: _,
        children: (0, _.jsx)(_, {
          icon: (0, _.jsx)(_, {}),
          count: _,
          onActivate: () => window.location.assign(_),
          strBody: _,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var _ = {
    3: _,
    8: _,
    5: _,
    4: _,
    2: _,
    9: _,
    12: _,
    22: _,
    29: _,
  },
  _ = new _(),
  _ = _(function (_) {
    let { bResponsiveHeader: _, notifications: _ } = _;
    (_.m_bLoaded || _.ProcessNewNotificationPayload(_),
      _.useEffect(() => {
        _ && !_.m_bLoaded && _.ProcessNewNotificationPayload(_);
      }, [_]));
    let _ = _();
    (0, _.useEffect)(() => {
      (_.setTransport(_), (window.RefreshSteamNotifications = () => _(_)));
    }, [_]);
    let _ = _();
    return _
      ? (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
        })
      : (0, _.jsx)(_, {
          nTotalUnviewed: _.nUnviewed,
        });
  });
function _() {
  return _(() => ({
    notifications: _.m_rgNotificationRollups,
    summary: _.m_summary,
    loaded: _.m_bLoaded,
    nUnviewed: _.m_nUnviewed,
  }));
}
function _() {
  let _ = _(),
    _ = _(),
    { data: _ } = _(_),
    _ = _(),
    _ = _?.settings;
  return _.notifications.filter((_) => !_(_.type, _, _) && !_(_.item));
}
function _(_) {
  let { nTotalUnviewed: _ } = _,
    _ = _.useRef(null),
    _ = _(),
    [_, _] = _.useState(_);
  _.useEffect(() => {
    _.current ||
      ((_.current = _(
        (0, _.jsx)(_, {
          popupRef: _,
        }),
        document.getElementById(`green_envelope_menu_root`),
        {
          bPreferPopLeft: !0,
          bOverlapHorizontal: !0,
          strClassName: `GreenEnvelopeMenu`,
        },
      )),
      _.current.Hide());
    let _ = document.getElementById(`header_notification_link`);
    (_ && (_.style.cssText = `background-color: rgba(0,0,0,0)`),
      window.setTimeout(() => _(null), 2e3));
  }, []);
  let _ = () => {
      _.current?.visible ||
        (_.current?.Show(),
        _.findIndex((_) => !_.item.viewed) != -1 && _.MarkAllItemsViewed());
    },
    _ = _.useCallback(
      (_) => {
        !_ && _.current?.visible && _.current.Hide();
      },
      [_],
    );
  return (0, _.jsx)(_, {
    trigger: `repeated`,
    onVisibilityChange: _,
    children: (0, _.jsx)(`button`, {
      onClick: _,
      _: `green_envelope_menu_root`,
      className: _(_, _ ? _ : _, _),
      children: (0, _.jsx)(_, {
        className: _,
        "aria-label": _(`#NotificationsMenu_Title`),
      }),
    }),
  });
}
var _ = (_) => {
    let { popupRef: _ } = _,
      _ = _.useRef(null),
      [_, _] = _.useState(!1);
    _.useEffect(() => {
      _(_.current != null && _.current?.scrollHeight > _.current?.clientHeight);
    }, [_.current?.scrollHeight, _]);
    let _ = _ ? void 0 : _;
    return (0, _.jsxs)(`div`, {
      className: _,
      onClick: () => _?.current?.Hide(),
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(`div`, {
          className: _(_, _),
          ref: _,
          children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
        }),
      ],
    });
  },
  _ = () => {
    let _ = `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications`;
    return (0, _.jsxs)(`div`, {
      className: _(_),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#NotificationsMenu_Title`),
        }),
        (0, _.jsx)(`a`, {
          href: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: _(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  _ = () => {
    let _ = `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications`;
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      children: (0, _.jsx)(`a`, {
        href: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _(`#NotificationsMenu_ViewAll`),
        }),
      }),
    });
  };
function _(_, _, _) {
  (_.read ||
    (_ && _.button != 0 && _.button != 1) ||
    !_.notification_id ||
    _.MarkItemRead(_.notification_id),
    _());
}
function _() {
  let _ = _();
  return _.length == 0
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              rollup: _,
              onNotificationClick: _,
              uimode: 3,
              location: 3,
            },
            _,
          ),
        ),
      });
}
var _ = [
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewGiftsPinned_Body`, _),
    feature: 1,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_FriendInvitePinned_Body`, _),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewCommentPinned_Body`, _),
    feature: 2,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewItemAnnouncementPinned_Body`, _),
    feature: 3,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewTradeOffersPinned_Body`, _),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewAsyncGamePinned_Body`, _),
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewModeratorMessagePinned_Body`, _),
    feature: 2,
  },
  {
    fnUrl: () => `${_.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: _,
    fnLocalizeBody: (_) =>
      _(`#Notification_NewHelpRequestRepliesPinned_Body`, _),
  },
  {
    fnUrl: () =>
      `${_.STORE_BASE_URL}account/familymanagement/join?ft=${_.steamid}`,
    countItem: `family_invites`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_FamilyInvitePinned_Body`, _),
  },
];
function _() {
  let _ = _();
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          url: _.fnUrl(),
          count: _.summary[_.countItem],
          icon: _.icon,
          strBody: _.fnLocalizeBody(_.summary[_.countItem]),
          eFeature: _.feature,
        },
        _.countItem,
      ),
    ),
  });
}
function _() {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function _(_) {
  let _ = null;
  try {
    _ = await _(_, _.steamid, _(_.LANGUAGE), void 0, !1, !1);
  } catch {}
  _ && _.ProcessNewNotificationPayload(_);
}
export { _ as GreenEnvelope, _ as default };
