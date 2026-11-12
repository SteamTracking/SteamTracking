var _ = class {
    async GetObject(_, _) {
      try {
        let _ = await this.GetString(_);
        return _ ? JSON.parse(_, _) : null;
      } catch {
        return null;
      }
    }
    async StoreObject(_, _) {
      return this.StoreString(_, JSON.stringify(_));
    }
  },
  _ = class extends _ {
    GetString(_) {
      return Promise.resolve(localStorage.getItem(_));
    }
    StoreString(_, _) {
      return (localStorage.setItem(_, _), Promise.resolve());
    }
    RemoveObject(_) {
      return (localStorage.removeItem(_), Promise.resolve());
    }
  };
