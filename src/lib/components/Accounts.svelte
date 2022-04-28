<script>

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
</style>

<fieldset>
	<legend>Accounts</legend>
	<table>
		<thead>
		<th>Name</th>
		<th>URI</th>
		<th>Address</th>
		</thead>
		<tbody>
		{#each Object.entries(accounts) as [key, account]}
			<tr>
				<td>{account.name}</td>
				<td>{account.uri}</td>
				<td>{account.address}</td>
			</tr>
		{/each}
		</tbody>
	</table>
</fieldset>