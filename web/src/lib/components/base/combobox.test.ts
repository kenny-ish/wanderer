import { describe, expect, test } from "vitest";
import { filterSelectedItems } from "./combobox.svelte";

describe("filterSelectedItems", () => {
    test("removes selected values only in multiple mode", () => {
        const items = [
            { text: "Alpine", value: "alpine" },
            { text: "Alpine lake", value: "alpine-lake" },
        ];

        expect(filterSelectedItems(items, [items[0]], true)).toEqual([items[1]]);
        expect(filterSelectedItems(items, [items[0]], false)).toEqual(items);
    });
});
