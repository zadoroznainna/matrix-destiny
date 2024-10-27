<script>
	import Instagram from '$lib/components/socialIcons/Instagram.svelte';
</script>

<section class="py-16 bg-[#1A5572] bg-opacity-75 rounded-3xl">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto">
			<div class="flex flex-col place-items-center">
				<h2 class="text-3xl text-center font-bold text-slate-50 uppercase mb-5">
					Підписуйся на мій Instagram
				</h2>
				<p class="text-lg text-[#6A9DD4] text-center mb-10">
					Отримайте відео-урок + методичку у подарунок просто приєднавшись до моєї сторінки!
				</p>
				<div class="group">
					<a
						href="https://www.instagram.com/zadoroznainna/"
						target="_blank"
						class="border border-white text-white rounded-md transition-all duration-400 group-hover:text-[#6A9DD4] group-hover:border-[#6A9DD4]
				               w-full h-full flex justify-center items-center gap-3 py-3 px-5 group-hover:no-underline focus:shadow-whitening">
						<Instagram colorFill="currentColor" classes="w-4 h-4" />
						<span class="text-white group-hover:text-[#6A9DD4] transition-all duration-400"
							>Підписатись</span
						>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
