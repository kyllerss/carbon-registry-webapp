<script>

	export let accounts;

</script>

<style>
	fieldset {
			border-style: solid;
			width: 30%;
	}
	fieldset legend {
      font-size: larger;
      font-weight: bold;
	}
</style>

<fieldset>
	<legend>Accounts</legend>
	<ul>
		{#each accounts as account}
		   <li>
				 {account.name} - {account.session_id}
		   </li>
		{/each}
	</ul>
</fieldset>