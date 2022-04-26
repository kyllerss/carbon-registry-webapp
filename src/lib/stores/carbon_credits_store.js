import {writable} from "svelte/store";

// TODO move to other file?
import { ApiPromise, WsProvider } from '@polkadot/api';

async function init() {
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

	console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion} - ${genesisHash}`);

	return api;
}

let api = await init(); //.catch(console.error);

// main export
export const carbon_credit_store = writable(api);
