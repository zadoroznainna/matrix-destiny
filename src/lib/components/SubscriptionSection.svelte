<script>
	import Telegram from '$lib/components/icons/social/Telegram.svelte';

	import Animate from '$lib/components/Animate.svelte';
</script>

<section
	class="py-16 lg:py-20 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-cyan-300 from-28% via-sky-400 via-70% to-sky-500 bg-opacity-65 rounded-[40px] mx-2 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"
>
	<div class="container mx-auto px-4">
		<Animate variant="scale" duration={1}>
			<div class="flex flex-col place-items-center">
				<h2
					class="text-3xl lg:text-4xl text-center font-bold font-heading tracking-wide text-slate-50 uppercase mb-8 lg:mb-10"
				>
					Підписуйся на мій Telegram-канал
				</h2>

				<p class="max-w-3xl mx-auto text-lg text-slate-50 text-center mb-10">
					Отримайте відео-урок + методичку у подарунок
					<span class="font-heading tracking-wider font-extrabold"
						>"Як зрозуміти і опрацювати свою зону комфорту"</span
					>
					просто приєднавшись до мого каналу!
				</p>
				<div class="group">
					<a
						href="https://t.me/+4yvQZnHeB8AyNjA6?fbclid=PAZXh0bgNhZW0CMTEAAaYitH5Naywlplh2pnlF7E3qewNEb6j4Hw9WCneYWdlVxB81M0p4xXOqAaE_aem_Cr5zh0ufdtWYanmg0j5Qxw"
						target="_blank"
						aria-label="Telegram канал"
						title="Telegram канал"
						class="w-48 flex justify-between items-center relative rounded-full overflow-hidden ring-1 ring-slate-50 transition-all duration-500 px-5 py-3 font-xl text-slate-50"
					>
						<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
						<Telegram
							colorFill="currentColor"
							classes="relative w-5 h-5 transition-transform duration-500 group-hover:translate-x-[7px]"
						/>
						<span
							class="relative text-slate-60 font-medium transition-all duration-500 group-hover:font-bold"
							>Підписатись</span
						>
					</a>
				</div>
			</div>
		</Animate>
	</div>
</section>
