<script>
	import Counter from './Counter.svelte';
	import Matrix from './Matrix.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	// import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { FloatingLabelInput, Helper } from 'flowbite-svelte';

	import { Datepicker } from 'flowbite-svelte';

	// import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <Datepicker datepickerFormat="dd/mm/yyyy" datepickerTitle="Дата народження" $$restProps="dasd" /> -->

	<Counter />
	<Matrix />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
