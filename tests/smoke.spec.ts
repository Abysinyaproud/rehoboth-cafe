import { expect, test } from "@playwright/test";

const publicRoutes = ["/", "/coffee", "/market", "/about", "/visit", "/ceremony"];

test.describe("public smoke tests", () => {
  test("homepage loads", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "The House of Ethiopian Coffee"
    );
  });

  test("main navigation reaches primary pages", async ({ page }) => {
    const routes = ["/coffee", "/market", "/about", "/visit"];

    await page.goto("/", { waitUntil: "domcontentloaded" });

    const menuToggle = page.locator("header summary:visible").first();

    if ((await menuToggle.count()) > 0) {
      await menuToggle.click();
    }

    for (const route of routes) {
      const navLink = page.locator(`header a[href="${route}"]:visible`).first();

      await expect(navLink).toBeVisible();
      await expect(navLink).toHaveAttribute("href", route);
    }

    for (const route of routes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await expect(page).toHaveURL(new RegExp(`${route}$`));
    }
  });

  for (const route of publicRoutes) {
    test(`${route} loads without console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];

      page.on("console", (message) => {
        if (message.type() === "error") {
          consoleErrors.push(message.text());
        }
      });

      page.on("pageerror", (error) => {
        consoleErrors.push(error.message);
      });

      const response = await page.goto(route);

      expect(response?.ok()).toBeTruthy();
      await expect(page.locator("body")).toBeVisible();
      expect(consoleErrors).toEqual([]);
    });
  }

  test("mobile viewport has no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    for (const route of publicRoutes) {
      await page.goto(route);

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth + 2;
      });

      expect(hasOverflow, `${route} should not overflow horizontally`).toBe(false);
    }
  });
});
