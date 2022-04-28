<script>
	export let name;
	export let address;
	export let show_name = false;
	export let compress_address = true;

	let address_formatted;
	if (compress_address) {
		address_formatted = address.slice(0, 8) + "..." + address.slice(-8);
	} else {
		address_formatted = address;
	}

	if (show_name) {
		address_formatted = `${name} (${address_formatted})`;
	}

</script>

{address_formatted}
