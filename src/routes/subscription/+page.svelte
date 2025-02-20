<script>
	import Instagram from '$lib/components/icons/social/Instagram.svelte';
</script>

<section
	class="py-16 lg:py-20 bg-gradient-to-r from-amber-400 to-pink-500 bg-opacity-65 rounded-[40px] mx-2"
>
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto">
			<div class="flex flex-col place-items-center">
				<h2 class="text-3xl lg:text-4xl text-center font-bold font-heading tracking-wide text-slate-50 uppercase mb-8 lg:mb-10">
					Підписуйся на мій Instagram
				</h2>
				<p class="text-lg text-slate-50 text-center mb-10">
					Отримайте відео-урок + методичку у подарунок
					<span class="font-heading tracking-wider font-extrabold">"Як зрозуміти і опрацювати свою зону комфорту"</span>
					просто приєднавшись до моєї сторінки!
				</p>
				<div class="group">
					<a
						href="https://www.instagram.com/zadoroznainna/" target="_blank"
						class="relative flex justify-center items-center gap-3 py-3 px-5 overflow-hidden
					text-orange-50 rounded-md border border-orange-50 focus:shadow-custom group w-52"
					>
						<span
							class="absolute w-0 h-0 transition-all duration-300 ease-out bg-orange-50 rounded-full group-hover:w-56 group-hover:h-56"
						></span>
						<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
						<Instagram colorFill="currentColor" classes="relative w-4 h-4 group-hover:text-slate-500" />
						<span class="relative transition-all duration-300 group-hover:text-slate-500"
							>Підписатись</span
						>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
