import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/api';

export const API = await ApiPromise.create({ provider: new WsProvider('ws://127.0.0.1:9944') });

export async function fetch_accounts() {
	console.log('call to fetch_accounts...');
	const accounts = [{name: "Alice", session_id: "//Alice"},
		{name: "Bob", session_id: "//Bob"}];
	return accounts;
}

export async function fetch_carbon_credits() {
	console.log('call to fetch_carbon_credits...');
	const carbon_credits = [{source: "GoldStandard", serial_number: "123-abc", owner: "Alice"},
		{source: "Verra", serial_number: "456-def", owner: "Bob"}];
	return carbon_credits;
}

export async function fetch_sources() {
	console.log('call to fetch_sources...');
	const sources = [{id: "GoldStandard", name:"GoldStandard"},
		{id: "AmericanCarbonRegistry", name:"American Carbon Registry"},
		{id: "VCS", name:"Verified Carbon Registry"}];
	return sources;
}

export async function submit_carbon_credits_to_blockchain(source, serial_number, account_address) {

	const keyring = new Keyring({ type: 'sr25519' });
	const account_pair = keyring.addFromUri(account_address);
	let result = await API.tx.substrateCarbon.createCredit(source, serial_number).signAndSend(account_pair);
	// console.log(result);
}
