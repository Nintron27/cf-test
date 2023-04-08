import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
    let response = (await fetch("https://catfact.ninja/fact")).statusText;
    return { "status": response };
}) satisfies PageServerLoad;