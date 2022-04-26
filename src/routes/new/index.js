import { fetch_accounts, fetch_sources, submit_carbon_credits_to_blockchain } from '$lib/utils/blockchain.js';

/** @type {import('./new').RequestHandler} */
export async function get() {

	const accounts = await fetch_accounts();
	const sources = await fetch_sources();

	return {
		body: {
			accounts: accounts,
			sources: sources,
		}
	};
}

/** @type {import('./new').RequestHandler} */
export async function post({request}) {

	const data = await request.formData();
	//console.log(data.serial_number);
	console.table([...data.entries()]);
	const {source, serial_number, account} = Object.fromEntries(data);
	// console.log(source);
	// console.log(serial_number);
	// console.log(account);

	await submit_carbon_credits_to_blockchain(source, serial_number, account);

	return {status: 302,
				  headers: {
						location: "/"
					}};
}
