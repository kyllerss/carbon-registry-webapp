import { ApiPromise, WsProvider } from '@polkadot/api';

export async function fetch_accounts() {
	console.log('call to fetch_accounts...');
	const accounts = [{name: "Alice", session_id: "123000"},
		{name: "Bob", session_id: "456000"}];
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
	const sources = [{id: "1", name:"GoldStandard"},
		{id: "2", name:"Verra"},
		{id: "3", name:"Verified Carbon Registry"}];
	return sources;
}

export async function submit_carbon_credits_to_blockchain(source, serial_number, account) {

	const wsProvider = new WsProvider('ws://127.0.0.1:9944');
	// ApiPromise
	// 	.create({ provider: wsProvider })//.isReady
	// 	.then((api) =>
	// 		console.log()
	// 	);

	// Retrieve the chain & node information via rpc calls
	const api = await ApiPromise.create({ provider: wsProvider });
	const [chain, nodeName, nodeVersion, genesisHash] = await Promise.all([
		api.rpc.system.chain(),
		api.rpc.system.name(),
		api.rpc.system.version(),
		api.genesisHash.toHex()
	]);

	console.log(`SERVER: You are connected to chain ${chain} using ${nodeName} v${nodeVersion} - ${genesisHash}`);
}
