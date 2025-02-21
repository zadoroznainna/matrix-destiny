<script>
	import { scale } from 'svelte/transition';
	import Muladhara from '$lib/components/icons/chakras/Muladhara.svelte';
	import Swadhistana from '$lib/components/icons/chakras/Swadhistana.svelte';
	import Manipura from '$lib/components/icons/chakras/Manipura.svelte';
	import Anahata from '$lib/components/icons/chakras/Anahata.svelte';
	import Vishudha from '$lib/components/icons/chakras/Vishudha.svelte';
	import Ajna from '$lib/components/icons/chakras/Ajna.svelte';
	import Sahasrara from '$lib/components/icons/chakras/Sahasrara.svelte';

	export let chakra;
	export let close;
	export let title;
	export let classes;

	const chakras = { Muladhara, Swadhistana, Manipura, Anahata, Vishudha, Ajna, Sahasrara };
	const colors = { Manipura: 'yellow', Swadhistana: 'orange', Sahasrara: 'purple' };
</script>

<div
	in:scale={{ duration: 200 }}
	out:scale={{ duration: 200 }}
	class={`shadow-xl absolute bg-white rounded-lg border w-72 border-slate-200 px-8 py-4 z-10 ${classes}`}
>
	<svelte:component
		this={chakras[chakra]}
		classes={`w-16 h-16 -mt-12 bg-white fill-${colors[chakra]}-500 p-1 border border-slate-100 rounded-full mx-auto`}
	/>

	<h2 class="font-bold">{title}</h2>
	<p class="text-xs mt-1">
		<slot />
	</p>
</div>
<div on:click={close} id="bg" class="fixed inset-0 transition-opacity z-0" aria-hidden="true" />
