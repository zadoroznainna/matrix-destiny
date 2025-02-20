<script>
	import { scrollToSection } from '$lib/utils/scroll.js';
	import { menuItems } from '$lib/utils/menuItems.js';
	import Instagram from '$lib/components/icons/social/Instagram.svelte';
	import Telegram from '$lib/components/icons/social/Telegram.svelte';
	import Youtube from '$lib/components/icons/social/Youtube.svelte';
	import Envelope from '$lib/components/icons/social/Envelope.svelte';
	import Phone from '$lib/components/icons/social/Phone.svelte';
	import Logo from '$lib/components/Logo.svelte';

	let currentYear = new Date(2026, 1, 1).getFullYear();
	let startYear = 2025;
	let showNextYear =
		new Date().getMonth() === 0 && new Date().getDate() === 1 && currentYear > startYear;

	let yearText = showNextYear ? `${startYear}-${startYear + 1}` : `${startYear}`;

	const socialsMedia = [
		{
			title: 'Instagram',
			icon: Instagram
		},

		{
			title: 'Telegram',
			icon: Telegram
		},

		{
			title: 'Youtube',
			icon: Youtube
		}
	];
</script>

<footer class="bg-gradient-to-r from-slate-900 to-slate-700" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<Logo rectClass="stroke-slate-50" letterClass="fill-slate-50" svgClass="w-28 h-28" />
				<p class="text-base leading-6 text-slate-300 mb-10 pr-5">
					Відкрийте свій шлях до гармонії та самопізнання за допомогою матриці долі.
				</p>
				<div>
					<h3 class="text-xl text-slate-200 font-bold mb-5">Залишайтесь на зв'язку зі мною</h3>
					<div class="flex space-x-6">
						{#each socialsMedia as social}
							<div
								class="group w-12 h-12 border border-orange-500 rounded-md transition duration-500 hover:scale-110 hover:border-slate-400"
							>
								<a
									href="#"
									class="w-full h-full flex justify-center items-center transition duration-500 text-orange-500 group-hover:text-slate-400"
									title={social.title}
								>
									<span class="hidden">{social.title}</span>
									<svelte:component
										this={social.icon}
										class="transition duration-500 fill-orange-500 group-hover:fill-slate-400"
									/>
								</a>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-1 md:gap-8">
					<div>
						<h3 class="text-xl font-semibold leading-6 text-slate-200 mb-5">Контакти</h3>
						<ul role="list" class="space-y-4 mb-10">
							<li class="flex gap-4 sm:gap-2 md:gap-5">
								<Phone colorFill="#f97316" classes="w-8 h-8" />
								<a
									href="tel:+380932992711"
									class="text-base lg:text-lg leading-6 text-slate-300 transition duration-500 hover:text-slate-50"
									>+380 93 299 27 11</a
								>
							</li>
							<li class="flex gap-4 sm:gap-2 md:gap-5">
								<Envelope colorFill="#f97316" classes="w-8 h-8" />
								<a
									href="mailto:zadoroznainna131@gmail.com"
									class="text-base lg:text-lg leading-6 text-slate-300 transition duration-500 hover:text-slate-50"
									>zadoroznainna131@gmail.com</a
								>
							</li>
						</ul>
						<h3 class="text-xl font-semibold leading-6 text-slate-200 mb-5">Технічна підтримка</h3>
						<p class="text-sm text-slate-300 mb-5">
							Залиште своє запитання або зверніться за технічною підтримкою, і ми з радістю вам
							допоможемо.
						</p>

						<a
							href="mailto:mkovaleva0205@gmail.com"
							class="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden
					text-white rounded-md border border-orange-400 bg-orange-400 focus:shadow-custom group w-48"
						>
							<span
								class="absolute w-0 h-0 transition-all duration-300 ease-out bg-slate-800 rounded-full group-hover:w-56 group-hover:h-56"
							></span>
							<span class="absolute inset-0 w-full h-full rounded-lg opacity-30"></span>
							<span class="relative transition-all duration-300 group-hover:text-orange-400"
								>Напишіть нам</span
							>
						</a>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-8">
					<div>
						<h3 class="text-base lg:text-lg font-semibold leading-6 text-slate-200">
							Навігація сайту
						</h3>
						<ul role="list" class="mt-5 space-y-4">
							{#each menuItems as item}
								<li>
									<a
										href={item.hrefLink}
										on:click|preventDefault={() => scrollToSection(item.hrefLink)}
										class="text-sm leading-6 text-slate-300 transition duration-500 hover:text-slate-50"
										>{item.title}</a
									>
								</li>
							{/each}
						</ul>
					</div>
					<div class="">
						<h3 class="text-base lg:text-lg font-semibold leading-6 text-slate-200">Інформація</h3>
						<ul role="list" class="mt-5 space-y-4">
							<li>
								<a
									href="#"
									class="text-sm leading-6 text-slate-300 transition duration-500 hover:text-slate-50"
									>Політика конфіденційності</a
								>
							</li>
							<li>
								<a
									href="#"
									class="text-sm leading-6 text-slate-300 transition duration-500 hover:text-slate-50"
									>Договір оферти</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<div class="flex flex-col sm:flex-row justify-between items-center gap-3">
				<p class="text-xs leading-5 text-slate-400">
					&copy; {yearText} zadoroznainna.com | Всі права захищені
				</p>
				<p class="text-xs text-slate-400">
					Розробка та дизайн сайту
					<a class="font-semibold text-slate-200" href="#">@Kovaleva Marina</a>
				</p>
			</div>
		</div>
	</div>
</footer>
