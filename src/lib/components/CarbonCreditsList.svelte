<script>

	export let carbon_credits;

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