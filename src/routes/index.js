import { fetch_accounts, fetch_carbon_credits } from '$lib/utils/blockchain.js';

/** @type {import('./').RequestHandler} */
export async function get() {

	const carbon_credits = await fetch_carbon_credits();
	const accounts = await fetch_accounts();

	return {
		body: {
			carbon_credits: carbon_credits,
			accounts: accounts,
		}
	};
}
