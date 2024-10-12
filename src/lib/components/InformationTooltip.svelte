<script>
	export let classes;
	let showTooltip = false;
</script>

<div class="relative flex justify-center items-center">
	<button
		on:mouseover={() => (showTooltip = true)}
		on:mouseleave={() => (showTooltip = false)}
		on:focus={() => (showTooltip = true)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 16 16"
			class="transition-all duration-300 {classes}"
			{...$$props}
			><g fill="currentColor"
				><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path
					d="m8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
				/></g
			></svg
		>
	</button>

	{#if showTooltip}
		<div
			class="absolute left-full top-1/2 transform -translate-y-1/2 w-56 ml-2 border border-slate-300 bg-white rounded px-2 py-1 z-10"
		>
			<p class="text-slate-500 text-xs whitespace-normal"><slot /></p>
		</div>
	{/if}
</div>
