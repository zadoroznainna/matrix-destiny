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
			class="fixed right-[2%] bottom-[4%] flex bg-orange-100 rounded-2xl justify-center items-center p-3 z-20 
			transition duration-300 ease-in-out border border-transparent hover:border-orange-500 focus:shadow-custom focus:bg-orange-50"
		>
			<ChevronUp
				classes="w-8 h-8 text-orange-500 font-bold transition duration-300 ease-in-out"
			/>
		</button>
	</div>
{/if}
