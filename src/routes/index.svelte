<script>
	import { onMount, onDestroy } from 'svelte';
	import { carbon_credit_store } from '$lib/stores/carbon_credits_store.js';
	import Accounts from '$lib/components/Accounts.svelte';
	import CarbonCredits from '$lib/components/CarbonCreditsList.svelte';
	import { subscribe_carbon_credits, fetch_accounts } from '$lib/utils/blockchain.js'; // TODO REMOVE
	import { createTestKeyring } from "@polkadot/keyring/testing";


	// These fields get read automatically from a GET request to the ./routes/index.js 'endpoint'
	export let carbon_credits;
	export let accounts;

	// gets called once components have been rendered
	let unsubscribe;
	onMount(async () => {
			unsubscribe = await subscribe_carbon_credits((credits) => {
				carbon_credits = credits;
			});

			debugger;
			let accs = await fetch_accounts();
			console.table(accs);

			let testKeyring = createTestKeyring();
			console.log(testKeyring);

	});

	onDestroy(async () => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

</script>

<style>
	.spacer {margin-top: 40px;}
</style>

<h1>Carbon Credits Registry</h1>
<Accounts accounts='{accounts}'/>
<div class='spacer' />
<CarbonCredits carbon_credits='{carbon_credits}'/>
<div class='spacer' />
<a sveltekit:prefetch href="/new" >Create Credit</a>