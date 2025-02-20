<script>
    import ArrowRight from "$lib/components/icons/ArrowRight.svelte";
</script>

<div class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-2xl font-semibold text-orange-400">404</p>
		<h1 class="mt-4 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl md:text-6xl">
			Сторінку не знайдено
		</h1>
		<p class="mt-6 text-lg font-medium text-pretty text-slate-500 sm:text-xl/8">
			Вибачте, такої сторінки не існує.
		</p>
        <div class="group mt-10 w-[300px] mx-auto">
			<a
				href="/"
				class="flex justify-center items-center p-3 gap-2
            text-orange-400 rounded-md border border-orange-400 group w-full transition-all duration-300 group-hover:border-slate-600"
			>
				<ArrowRight classes="w-8 h-8 transition-all duration-300 group-hover:text-slate-600 rotate-180" />
				<span class="transition-all duration-300 group-hover:text-slate-600"
					>Повернутся на головну</span
				>
			</a>
		</div>
	</div>
</div>
