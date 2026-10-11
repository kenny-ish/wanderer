import type { SearchParams } from "meilisearch";

export function buildListTrailSearchOptions(
    actor: string | undefined,
    trailIds: string[],
): SearchParams {
    const visibilityFilter =
        `(author = ${actor} OR public = true OR shares = ${actor})`;
    const exclusionFilter = trailIds.length
        ? `id NOT IN [${trailIds.map((id) => `'${id}'`).join(", ")}]`
        : undefined;

    return {
        filter: [visibilityFilter, exclusionFilter].filter(Boolean).join(" AND "),
        limit: 20,
    };
}
