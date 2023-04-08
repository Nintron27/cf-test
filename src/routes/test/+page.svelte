<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Hello big test</h1>
<p>oh papi: {data.ohYEAH}</p>
<!-- {#if data.json}
	<p>deserialize time: {data.deserializeTime}</p>
	<p>request time: {data.requestTime}</p>
	<p>json: {data.json}</p>
{:else if data.ohYEAH }
	<p>Thats a big nope papi</p>
{/if} -->
