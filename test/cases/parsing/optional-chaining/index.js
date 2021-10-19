import maybeB from "./b";

it("should evaluate optional members", () => {
	if (!module.hot) {
		expect(
			module.hot?.accept((() => {throw new Error("fail")})())
		).toBe(undefined);
	}
});

it("should evaluate optional chaining as a part of statement", () => {
	if (module.hot?.accept) {
		module.hot?.accept("./a.js");
	} else {
		expect(module.hot).toBe(undefined);
	}
});

it("should not incorrectly remove optional chain - issue-12960", () => {
	expect(maybeB).toBe(undefined);
	expect(maybeB?.toString()).toBe(undefined);
});
