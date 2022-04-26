<script>
	import { onMount } from 'svelte';
	import { carbon_credit_store } from '$lib/stores/carbon_credits_store.js';
	import Accounts from '$lib/components/Accounts.svelte';
	import CarbonCredits from '$lib/components/CarbonCreditsList.svelte';

	// These fields get read automatically from a GET request to the ./routes/index.js 'endpoint'
	export let carbon_credits;
	export let accounts;

	// gets called once components have been rendered
	onMount(async () => {
		carbon_credit_store.subscribe((cc) => {
			console.log("Current carbon credits: ${cc}");
		});
	});

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