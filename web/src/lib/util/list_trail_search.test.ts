import { describe, expect, test } from "vitest";
import { buildListTrailSearchOptions } from "./list_trail_search";

describe("buildListTrailSearchOptions", () => {
    test("keeps relevance ranking and excludes trails already in the list", () => {
        const options = buildListTrailSearchOptions("actor123", [
            "trail123",
            "trail456",
        ]);

        expect(options).toEqual({
            filter: "(author = actor123 OR public = true OR shares = actor123) AND id NOT IN ['trail123', 'trail456']",
            limit: 20,
        });
        expect(options.sort).toBeUndefined();
    });

    test("does not add an empty exclusion clause for a new list", () => {
        expect(buildListTrailSearchOptions("actor123", [])).toEqual({
            filter: "(author = actor123 OR public = true OR shares = actor123)",
            limit: 20,
        });
    });
});
