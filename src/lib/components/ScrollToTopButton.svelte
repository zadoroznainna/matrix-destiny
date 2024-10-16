<script>
	import { onMount } from 'svelte';
	import ChevronUp from '../../routes/icones/ChevronUp.svelte';

	let showButton = false;

	function scrollToTop() {
		if (window.scrollY > 500) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}

	onMount(() => {
		const handleScroll = () => {
			showButton = window.scrollY > 500;
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if showButton}
	<div class="group">
		<button
			on:click={scrollToTop}
			class="fixed right-[2%] bottom-[4%] drop-shadow flex bg-white border border-slate-400 rounded-2xl justify-center items-center p-3 z-20 transition duration-300 ease-in-out hover:border-orange-400 active:ring-2 active:ring-orange-400 active:bg-orange-100"
		>
			<ChevronUp
				classes="w-8 h-8 text-slate-400 transition duration-300 ease-in-out group-hover:text-orange-400 active:text-orange-400"
			/>
		</button>
	</div>
{/if}
