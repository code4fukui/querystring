import * as t from "https://deno.land/std/testing/asserts.ts";
import { querystring } from "./querystring.js";

Deno.test("parse", () => {
  t.assertEquals(querystring.parse("foo=bar&abc=xyz&abc=123"), { abc: "xyz", foo: "bar" })
});
Deno.test("stringify", () => {
  t.assertEquals(querystring.stringify({ foo: 'bar', baz: "q", corge: '' }), "foo=bar&baz=q&corge=");
});
Deno.test("escape", () => {
  t.assertEquals(querystring.escape("&"), "%26");
});
Deno.test("unescape", () => {
  t.assertEquals(querystring.unescape("%26"), "&");
});
