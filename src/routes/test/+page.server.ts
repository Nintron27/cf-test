import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
    if (performance) {
        let requestStartTime = performance.now();

        let response = await fetch("https://catfact.ninja/fact");
        
        let requestTime =  performance.now() - requestStartTime;
    
        let deserializeStartTime = performance.now();
    
        let json = await response.json();
    
        let deserializeTime =  performance.now() - deserializeStartTime;
       
        return { 
            "json": json, 
            "requestTime": requestTime, 
            "deserializeTime": deserializeTime 
        };
    } else {
        return {
            "status": "NOPE"
        }
    }

}) satisfies PageServerLoad;