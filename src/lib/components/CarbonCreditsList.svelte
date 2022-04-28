<script>

	import Address from '$lib/components/Address.svelte';

	export let carbon_credits;
	export let accounts;

</script>

<style>
    fieldset {
        border-style: hidden;
    }

    fieldset legend {
        font-size: larger;
        font-weight: bold;
    }

    table {
        border-collapse: collapse;
    }
    th,
    td {
        border: 1px solid #cecfd5;
        padding: 10px 15px;
				text-align:left;
    }
		.message {font-style: italic;}
</style>

<fieldset>
	<legend>Carbon Credits</legend>
	{#if carbon_credits.length == 0}
		<span class='message'>No carbon credits</span>
	{:else}
		<table>
			<thead>
				<th>Source</th>
				<th>Serial #</th>
				<th>Owner Address</th>
				<th>Retired</th>
			</thead>
			<tbody>
				{#each carbon_credits as carbon_credit}
					<tr>
						<td>{carbon_credit.source}</td>
						<td>{carbon_credit.serialNumber}</td>
						<td><Address name={accounts.get(carbon_credit.owner).name}
												 address={carbon_credit.owner}
												 show_name={true}
												 compress_address={true} />
						<td>{carbon_credit.retired}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</fieldset>