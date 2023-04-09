<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Hello big test</h1>
<p>deserialize time: {data.deserializeTime}</p>
<p>request time: {data.requestTime}</p>
<p>json: {data.json}</p>
