<script>

	let accounts = [{name: "Alice", session_id: "123"},
									{name: "Bob", session_id: "456"}];

</script>

<style>
	div {
			border-style: solid;
			width: 30%;
	}
</style>

<div>
	<ul>
		{#each accounts as account}
		   <li>
				 {account.name} - {account.session_id}
		   </li>
		{/each}
	</ul>
</div>