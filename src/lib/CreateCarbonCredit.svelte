<script>
	export let accounts;
	export let sources;
</script>

<style>
    * {
        box-sizing: border-box;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
    }

    form > div{
        display: flex;
        justify-content: space-between;
    }

    form > div + * {
        margin-top: 10px;
    }

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
	<legend>Create Carbon Credit</legend>
	<form>
		<div>
			<label for='account'>Account:</label>
			<select id='account' name='account'>
				{#each accounts as account}
					<option value='{account.session_id}'>{account.name}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for='source'>Source:</label>
			<select id='source' name='source'>
				{#each sources as source}
					<option value='{source.id}'>{source.name}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for='serial_number'>Serial Number:</label>
			<input type='text' id='serial_number' name='serial_number'/>
		</div>

		<div>
			<button type='submit'>Create</button>
		</div>
	</form>
</fieldset>