/** @type {import('./').RequestHandler} */
export async function get() {

	const carbon_credits = [{source: "GoldStandard", serial_number: "123-abc", owner: "Alice"},
													{source: "Verra", serial_number: "456-def", owner: "Bob"}];
	const accounts = [{name: "Alice", session_id: "123"},
										{name: "Bob", session_id: "456"}];
	const sources = [{id: "1", name:"GoldStandard"},
									 {id: "2", name:"Verra"},
									 {id: "3", name:"Verified Carbon Registry"}];

	return {
		body: {
			carbon_credits: carbon_credits,
			accounts: accounts,
			sources: sources,
		}
	};
}

/** @type {import('./').RequestHandler} */
export async function post({request}) {

	const data = await request.formData();
	//console.log(data.serial_number);
	console.table([...data.entries()]);
	// const {source, serial_number, account} = Object.fromEntries(data);
	// console.log(source);
	// console.log(serial_number);
	// console.log(account);

	return {status: 200,
				  body: {}};
}
