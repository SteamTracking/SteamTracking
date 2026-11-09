/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

var e = class {
    async GetObject(e, t) {
      try {
        let n = await this.GetString(e);
        return n ? JSON.parse(n, t) : null;
      } catch {
        return null;
      }
    }
    async StoreObject(e, t) {
      return this.StoreString(e, JSON.stringify(t));
    }
  },
  t = class extends e {
    GetString(e) {
      return Promise.resolve(localStorage.getItem(e));
    }
    StoreString(e, t) {
      return localStorage.setItem(e, t), Promise.resolve();
    }
    RemoveObject(e) {
      return localStorage.removeItem(e), Promise.resolve();
    }
  };
export { t };
