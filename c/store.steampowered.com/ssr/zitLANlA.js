var _ = _(_(), 1),
  _ = `AhNg9jT4hrc-`,
  _ = `UDR84ALyLZI-`,
  _ = `CB81WjWbW98-`,
  _ = `hSnGOSK6hJU-`,
  _ = `Vj4E9TPa-ME-`,
  _ = `_6HGtV333bT0-`,
  _ = `jINK81jTs1g-`,
  _ = `i7AXnZ6ZNpg-`,
  _ = `C2HHd-M8iZA-`,
  _ = _();
function _(_) {
  let { closeCart: _, lineItemIDs: _, bPackagesReplaced: _ } = _,
    _ = _(),
    { data: _ } = _(),
    { data: _, isFetching: _ } = _(),
    _ = _(_),
    _ = _(`${_.STORE_BASE_URL}cart/`);
  if (
    (_.useEffect(() => {
      _ && _?.length == 0 && _();
    }, [_, _]),
    !_ || !_)
  )
    return null;
  let _ = _.Localize(_ ? `#Cart_UpdatedYourCart` : `#Cart_AddedToYourCart`);
  return (0, _.jsx)(_, {
    validateCart: _,
    eDisplayType: _.k_ECartDisplayType_Modal,
    children: (0, _.jsx)(_, {
      onClose: _,
      navID: `CartModal`,
      strTitle: _,
      children: (0, _.jsxs)(_, {
        className: _,
        "flow-children": `column`,
        children: [
          (0, _.jsx)(_, {
            lineItems: _,
            cartValidation: _,
            bValidating: _,
            scrollable: !0,
          }),
          (0, _.jsx)(_, {
            lineItems: _,
            cartValidation: _,
          }),
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                onClick: _,
                children: _.Localize(`#Cart_ContinueShopping`),
              }),
              (0, _.jsx)(_, {
                autoFocus: !0,
                href: _,
                children: _.Localize(
                  `#Cart_ViewMyCart`,
                  _?.line_items?.length ?? _.length,
                ),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  let { result: _, onDismiss: _ } = _;
  return _()
    ? (0, _.jsx)(_, {
        onClose: _,
        navID: `CartErrorModal`,
        strTitle: _.Localize(`#Error_Generic`),
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.Localize(`#Cart_ErrorUpdating`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _ ? _.Localize(`#Cart_ErrorCode`, _) : ``,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                autoFocus: !0,
                onClick: _,
                children: _.Localize(`#Button_Close`),
              }),
            }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let { cartValidation: _, lineItems: _ } = _,
    _ = _.useRef(!1),
    [_, _] = _.useState(!1),
    { gifteeHint: _, gifteePlayerDetails: _ } = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _?.public_data,
    _ = _?.cart_items,
    _ = !_ && !!_?.nGifteeAccountID && !!_ && !_ && !!_?.cart_items;
  if (_) {
    let _ = new Map(_.map((_) => [_.line_item_id, _]));
    _ = !!_.find(
      (_) =>
        !_.gift_info?.accountid_giftee &&
        !!_.get(_.line_item_id)?.can_purchase_as_gift,
    );
  }
  if (
    (_.useEffect(() => {
      _ && !_.current && (_()?.AddEvent(_), (_.current = !0));
    }, [_]),
    !_)
  )
    return null;
  let _ = () => {
      (_()?.AddEvent(_), _.mutate(null));
    },
    _ = () => {
      for (let _ of _)
        _.mutate({
          lineItemID: _.line_item_id,
          lineItemFlags: {
            is_gift: !0,
          },
          giftInfo: {
            ..._.gift_info,
            accountid_giftee: _.nGifteeAccountID,
          },
          gidCoupon: _.gidcoupon_applied,
        });
      (_.mutate(_), _(!0), _()?.AddEvent(_));
    },
    _ = (0, _.jsxs)(`a`, {
      href: _(_),
      target: `_blank`,
      rel: `noreferrer`,
      children: [
        (0, _.jsx)(_, {
          size: `X-Small`,
          statusPosition: `right`,
          playerLinkDetails: _,
          alt: _.persona_name ?? ``,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.persona_name,
        }),
      ],
    });
  return (0, _.jsxs)(_, {
    className: _,
    align: `center`,
    gap: `3`,
    direction: `row`,
    justify: `center`,
    children: [
      (0, _.jsx)(_, {
        _: `div`,
        align: `center`,
        className: _,
        children: _.LocalizeReact(`#Cart_GifteeHint_Wishlist`, _),
      }),
      (0, _.jsxs)(_, {
        gap: `2`,
        direction: `row`,
        align: `center`,
        children: [
          (0, _.jsx)(_, {
            size: `1`,
            color: `dull`,
            onClick: _,
            children: _.Localize(`#Button_No`),
          }),
          (0, _.jsx)(_, {
            size: `1`,
            onClick: _,
            children: _.Localize(`#Button_Yes`),
          }),
        ],
      }),
    ],
  });
}
export { _ as CartErrorModal, _ as default };
