var _ = class extends _ {
  constructor(_, _) {
    super(_, _);
  }
  bindMethods() {
    super.bindMethods(),
      (this.fetchNextPage = this.fetchNextPage.bind(this)),
      (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
  }
  setOptions(_, _) {
    super.setOptions(
      {
        ..._,
        behavior: _(),
      },
      _,
    );
  }
  getOptimisticResult(_) {
    return (_.behavior = _()), super.getOptimisticResult(_);
  }
  fetchNextPage(_) {
    return this.fetch({
      ..._,
      meta: {
        fetchMore: {
          direction: `forward`,
        },
      },
    });
  }
  fetchPreviousPage(_) {
    return this.fetch({
      ..._,
      meta: {
        fetchMore: {
          direction: `backward`,
        },
      },
    });
  }
  createResult(_, _) {
    let { state: _ } = _,
      _ = super.createResult(_, _),
      { isFetching: _, isRefetching: _, isError: _, isRefetchError: _ } = _,
      _ = _.fetchMeta?.fetchMore?.direction,
      _ = _ && _ === `forward`,
      _ = _ && _ === `forward`,
      _ = _ && _ === `backward`,
      _ = _ && _ === `backward`;
    return {
      ..._,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: _(_, _.data),
      hasPreviousPage: _(_, _.data),
      isFetchNextPageError: _,
      isFetchingNextPage: _,
      isFetchPreviousPageError: _,
      isFetchingPreviousPage: _,
      isRefetchError: _ && !_ && !_,
      isRefetching: _ && !_ && !_,
    };
  }
};
function _(_, _) {
  return _(_, _, _);
}
export { _ };
