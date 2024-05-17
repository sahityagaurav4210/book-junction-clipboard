"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("clipboard.test.js", function () {
    it("copy function should return valid types", async function () {
        const data = await new index_1.default().copy("gaurav sahitya");
        expect(typeof data).toBe("object");
        expect(typeof data.message).toBe("string");
        expect(typeof data.cerr === "string" || typeof data.cerr === "undefined").toBe(true);
    });
    it("copy function should return valid values", async function () {
        const data = await new index_1.default().copy("gaurav sahitya");
        expect(typeof data).toBe("object");
        expect(data.message).toBe("");
        expect(data.cerr).toBe("");
    });
});
