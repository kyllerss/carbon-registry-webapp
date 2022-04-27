import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/api';
import { createTestKeyring } from "@polkadot/keyring/testing";

export const API = await ApiPromise.create({ provider: new WsProvider('ws://127.0.0.1:9944') });

export async function fetch_accounts() {
	console.log('call to fetch_accounts...');
	const accounts = [{name: "Alice", uri: "//Alice", address: "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"},
										{name: "Bob", uri: "//Bob", address: "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"}];

	// let entries = await API.query.system.account.entries();
	// let all_accounts = entries.map(([key, option] ) => option.toHuman());

	// let testKeyring = createTestKeyring();
	// console.log(testKeyring);

	return accounts;
}

export async function fetch_carbon_credits() {
	console.log('call to fetch_carbon_credits...');

	//const carbon_credits = [{source: "GoldStandard", serial_number: "123-abc", owner: "Alice"},	{source: "Verra", serial_number: "456-def", owner: "Bob"}];
	let entries = await API.query.substrateCarbon.credits.entries();
	let all_credits = entries.map(([key, option] ) => option.toHuman());
	return all_credits;
	//return carbon_credits;
}

export async function subscribe_carbon_credits(callback) {
	const unsub = await API.query.substrateCarbon.countForCredits(async (count) => {
		let all_credits = await fetch_carbon_credits();
		callback(all_credits);
	});
	return unsub;
}

export async function fetch_sources() {
	console.log('call to fetch_sources...');
	const sources = [{id: "GoldStandard", name:"GoldStandard"},
		{id: "AmericanCarbonRegistry", name:"American Carbon Registry"},
		{id: "VCS", name:"Verified Carbon Registry"}];
	return sources;
}

export async function submit_carbon_credits_to_blockchain(source, serial_number, account_address) {

	// ensure serial number 256 chars
	let serial_number_padded = serial_number.padEnd(64, ' ');

	const keyring = new Keyring({ type: 'sr25519' });
	const account_pair = keyring.addFromUri(account_address);

	// const wsProvider = new WsProvider('ws://127.0.0.1:9944');
	// let result = ApiPromise
	// 	.create({ provider: wsProvider })
	// 	.then((api) =>
	// 		//console.log(api.genesisHash.toHex())
	// 		api.tx.substrateCarbon.createCredit(source, serial_number_padded).signAndSend(account_pair)
	// 	);

	let result = await API.tx.substrateCarbon.createCredit(source, serial_number_padded).signAndSend(account_pair);
	console.log("Post credit creation result: ${result}");
}
