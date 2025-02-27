import { readFileSync } from "fs";
import { createHash } from "crypto";

describe("日本の祝日", () => {
  it("変更がないこと", async () => {
    const result = await fetch(
      "https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv",
    );
    const expected = createHash("md5");
    expected.update(Buffer.from(await result.arrayBuffer()));

    const current = createHash("md5");
    current.update(readFileSync("expected/syukujitsu.csv"));

    expect(current.digest("hex")).toBe(expected.digest("hex"));
  });
});

describe("日本の郵便番号", () => {
  it("変更がないこと", async () => {
    const result = await fetch(
      "https://www.post.japanpost.jp/zipcode/dl/utf/zip/utf_ken_all.zip",
    );
    const expected = createHash("md5");
    expected.update(Buffer.from(await result.arrayBuffer()));

    const current = createHash("md5");
    current.update(readFileSync("expected/japan_postal_codes.zip"));

    expect(current.digest("hex")).toBe(expected.digest("hex"));
  });
});
