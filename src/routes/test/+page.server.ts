import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';
import type { PageServerLoad } from './$types';
import '@shopify/shopify-api/adapters/cf-worker';

export const load = (async () => {
	const shopify = shopifyApi({
		apiKey: 'APIKeyFromPartnersDashboard',
		apiSecretKey: 'APISecretFromPartnersDashboard',
		scopes: ['read_products'],
		hostName: 'ngrok-tunnel-address',
		apiVersion: LATEST_API_VERSION,
		isEmbeddedApp: false
	});

	let requestStartTime = new Date().getTime();

	let response = await fetch('https://catfact.ninja/fact');

	let requestTime = new Date().getTime() - requestStartTime;

	let deserializeStartTime = new Date().getTime();

	let json = await response.json();

	let deserializeTime = new Date().getTime() - deserializeStartTime;

	return {
		json: json,
		requestTime: requestTime,
		deserializeTime: deserializeTime
	};
}) satisfies PageServerLoad;
