<script>
	import { onMount } from 'svelte';
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.min.css';
	import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';

	export let value = '';
	const options = {
		locale: Ukrainian,
		dateFormat: 'd.m.Y'
	};
	let input;
	let picker;
	
	onMount(() => {
		picker = flatpickr(input, {
			...options,
			defaultDate: value,
			onChange: (dateStr) => {
				value = dateStr;
			}
		});
		console.log('value', value);
	});

</script>

<input bind:this={input} bind:value placeholder="20.04.1998"/>

<style>
	:global(.flatpickr-input) {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 0.375rem;
		padding: 1rem 0.75rem;
		border: none;
		box-shadow: inset 0 0 0 1px rgba(203, 213, 225, 1);
		color: #0f172a;
	}

	:global(.flatpickr-input::placeholder) {
		color: #94a3b8;
	}

	:global(.flatpickr-input:focus) {
		box-shadow: inset 0 0 0 1px rgba(253, 186, 116, 1);
		outline: none;
	}

	:global(.flatpickr-calendar) {
		font-family: 'Montserrat', 'sans-serif';
	}

	:global(.flatpickr-current-month .flatpickr-monthDropdown-months) {
		margin: 0 6px;
		border-radius: 4px;
	}

	:global(.flatpickr-current-month .flatpickr-monthDropdown-months:focus),
	:global(.flatpickr-current-month input.cur-year:focus) {
		box-shadow: inset 0 0 0 1px rgba(253, 186, 116, 1);
	}

	:global(.flatpickr-current-month .numInputWrapper),
	:global(.flatpickr-current-month input.cur-year) {
		border-radius: 4px;
	}

	:global(.flatpickr-day.selected) {
        background: #fb923c;
        border-color: #fb923c;
	}

    :global(.flatpickr-day.selected:hover) {
        background: #94a3b8;
        border-color: #94a3b8;
    }

	:global(.flatpickr-day.today) {
		border-color: #fdba74;
	}

    :global(.flatpickr-day:hover) {
        background-color: #fed7aa;
        border-color: #fed7aa;
    }

	:global(.numInputWrapper span.arrowUp) {
		border-top-right-radius: 4px;
	}

	:global(.numInputWrapper span.arrowDown) {
		border-bottom-right-radius: 4px;
	}

</style>
