import Clipboards from "../index";

describe("clipboard.test.js", function () {
  it("copy function should return valid types", async function () {
    const data = await new Clipboards().copy("gaurav sahitya");

    expect(typeof data).toBe("object");
    expect(typeof data.message).toBe("string");
    expect(
      typeof data.cerr === "string" || typeof data.cerr === "undefined"
    ).toBe(true);
  }, 60000);

  it("copy function should return valid values", async function () {
    const data = await new Clipboards().copy(
      `git commit -m "hello" -m "world"`
    );

    expect(typeof data).toBe("object");
    expect(data.message).toBe("Text copied\n");
    expect(data.cerr).toBe("");
  }, 60000);
});
