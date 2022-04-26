<script>
	import Accounts from '$lib/Accounts.svelte';
	import CarbonCredits from '$lib/CarbonCreditsList.svelte';

	// These fields get read automatically from a GET request to the ./routes/index.js 'endpoint'
	export let carbon_credits;
	export let accounts;

	// TODO Move to separate file
	import { ApiPromise, WsProvider } from '@polkadot/api';

	async function main () {
		const wsProvider = new WsProvider('ws://127.0.0.1:9944');
		ApiPromise
			.create({ provider: wsProvider })//.isReady
			.then((api) =>
				console.log(api.genesisHash.toHex())
			);

		// const api = await ApiPromise.create({ provider: wsProvider });
		// console.log(api.genesisHash.toHex());
	}

	main().catch(console.error); // .finally(() => process.exit())
</script>

<style>
	div.spacer {margin-top: 20px;}
</style>

<h1>Carbon Credits Registry</h1>
<Accounts accounts='{accounts}'/>
<div class='spacer' />
<CarbonCredits carbon_credits='{carbon_credits}'/>
<div class='spacer' />
<a sveltekit:prefetch href="/new" >Create Credit</a>