<script>
	import Accounts from '$lib/Accounts.svelte';
	import CarbonCredits from '$lib/CarbonCreditsList.svelte';
	import CreateCarbonCredit from '$lib/CreateCarbonCredit.svelte';

	// These fields get read automatically from a GET request to the ./routes/index.js 'endpoint'
	export let carbon_credits;
	export let accounts;
	export let sources;
</script>

<style>
	div.spacer {margin-top: 20px;}
</style>

<h1>Carbon Credits Registry</h1>
<Accounts accounts='{accounts}'/>
<div class='spacer' />
<CarbonCredits carbon_credits='{carbon_credits}'/>
<div class='spacer' />
<CreateCarbonCredit accounts='{accounts}' sources='{sources}'/>