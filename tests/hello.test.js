import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Hello World Page", () => {
  it("should load the page and display Hello World", async (context) => {
    const testdriver = TestDriver(context);

    // Target the app's production URL (or deployed GitHub Pages URL)
    await testdriver.provision.chrome({ url: "https://ithakdn.github.io/Jose-Angulo/" });

    // Verify the Hello World heading is present
    const heading = await testdriver.find("Hello World");
    expect(heading).toBeTruthy();

    // Assert that Hello World is displayed on screen
    const result = await testdriver.assert("the page displays 'Hello World'");
    expect(result).toBeTruthy();
  });
});
