import type { PageServerLoad } from "./$types";

export const load = (async () => {
    // if (performance) {
    //     let requestStartTime = new Date().getTime();

    //     let response = await fetch("https://catfact.ninja/fact");
        
    //     let requestTime =  new Date().getTime() - requestStartTime;
    
    //     let deserializeStartTime = new Date().getTime();
    
    //     let json = await response.json();
    
    //     let deserializeTime =  new Date().getTime() - deserializeStartTime;
       
    //     return { 
    //         "json": json, 
    //         "requestTime": requestTime, 
    //         "deserializeTime": deserializeTime 
    //     };
    // } else {
    //     return {
    //         "status": "NOPE"
    //     }
    // }

    return {
        "ohYEAH": performance.now()
    }

}) satisfies PageServerLoad;