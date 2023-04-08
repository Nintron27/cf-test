import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const response = await fetch("https://catfact.ninja/fact");
    return await response.json();
}) satisfies PageServerLoad;