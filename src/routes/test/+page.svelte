<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Hello big test</h1>
{#if data.json}
	<p>deserialize time: {data.deserializeTime}</p>
	<p>request time: {data.requestTime}</p>
	<p>json: {data.json}</p>
{:else}
	<p>Thats a big nope papi</p>
{/if}
