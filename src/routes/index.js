/** @type {import('./').RequestHandler} */
export async function get() {

	const carbon_credits = [{source: "GoldStandard", serial_number: "123-abc", owner: "Alice"},
													{source: "Verra", serial_number: "456-def", owner: "Bob"}];
	const accounts = [{name: "Alice", session_id: "123"},
										{name: "Bob", session_id: "456"}];

	return {
		body: {
			carbon_credits: carbon_credits,
			accounts: accounts,
		}
	};
}
