export class querystring {
  static parse(str, seq = "&", eq = "=", options) {
    const p = new URLSearchParams(str);
    const res = {};
    for (const key of p.keys()) {
      res[key] = p.get(key);
    }
    return res;
  }
  static decode(str, seq, eq, options) {
    return parse(str, seq, eq, options);
  }
  static stringify(obj, sep, eq, options) {
    return Object.entries(obj).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
  }
  static encode(obj, sep, eq, options) {
    return querystring.stringify(obj, sep, eq, options);
  }
  static escape(str) {
    return encodeURIComponent(str);
  }
  static unescape(str) {
    return decodeURIComponent(str);
  }
};
