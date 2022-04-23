<script>

	let carbon_credits = [{source: "GoldStandard", serial_number: "123-abc", owner: "Alice"},
		{source: "Verra", serial_number: "456-def", owner: "Bob"}];

</script>

<style>
    fieldset {
        border-style: solid;
        width: 50%;
    }
    fieldset legend {
        font-size: larger;
        font-weight: bold;
    }
</style>

<fieldset>
	<legend>Carbon Credits</legend>
	<ul>
		{#each carbon_credits as carbon_credit}
			<li>
				{carbon_credit.source} (serial: {carbon_credit.serial_number}) - {carbon_credit.owner}
			</li>
		{/each}
	</ul>
</fieldset>