<script lang="ts">
	import { env_variables } from '../env_variables.js';

	const getInfo = async () => {
		return await fetch(`${env_variables.api_url}/`).then((res) => res.json());
	};

	let message: Promise<any> = getInfo();
</script>

<svelte:head>
	<title>Vibing - Let's jam🎶</title>
</svelte:head>

{#await message}
	<p>Getting info...</p>
{:then message}
	<h1>{message.info}</h1>
{:catch err}
	<p>{err}</p>
{/await}
