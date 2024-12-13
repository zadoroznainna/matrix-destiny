<script>
	import Instagram from '$lib/components/socialIcons/Instagram.svelte';
	import Telegram from '$lib/components/socialIcons/Telegram.svelte';
	import Youtube from '$lib/components/socialIcons/Youtube.svelte';
	import Envelope from '$lib/components/socialIcons/Envelope.svelte';
	import Phone from '$lib/components/socialIcons/Phone.svelte';
	import Logo from '$lib/components/Logo.svelte';

	let currentYear = new Date().getFullYear();
	let nextYear = currentYear + 1;
	let isNextYear = new Date().getMonth() === 0 && new Date().getDate() === 1;

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

	const footerLinks = [
		{
			title: 'Про мене',
			hrefLink: '#'
		},

		{
			title: 'Статистика',
			hrefLink: '#'
		},

		{
			title: 'Про Матрицю',
			hrefLink: '#'
		},

		{
			title: 'Тарифи',
			hrefLink: '#'
		},

		{
			title: 'Етапи роботи',
			hrefLink: '#'
		}
	];
</script>

<footer class="bg-gradient-to-r from-slate-900 to-slate-700" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<Logo rectClass="stroke-slate-50" letterClass="fill-slate-50" svgClass="w-28 h-28" />
				<p class="text-base leading-6 text-gray-300 mb-10 pr-5">
					Відкрийте свій шлях до гармонії та самопізнання за допомогою матриці долі.
				</p>
				<div>
					<h3 class="text-xl text-gray-200 font-bold mb-5">Залишайтесь на зв'язку зі мною</h3>
					<div class="flex space-x-6">
						{#each socialsMedia as social}
							<div class="w-12 h-12 border border-orange-500 rounded-md">
								<a
									href="#"
									class="w-full h-full flex justify-center items-center text-orange-500 hover:text-gray-400"
								>
									<span class="hidden">{social.title}</span>
									<svelte:component this={social.icon} colorFill="#f97316" />
								</a>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-1 md:gap-8">
					<div>
						<h3 class="text-xl font-semibold leading-6 text-white">Контакти</h3>
						<ul role="list" class="mt-6 space-y-4 mb-10">
							<li class="flex gap-5">
								<Phone colorFill="#f97316" classes="w-8 h-8" />
								<a href="tel:+380932992711" class="text-lg leading-6 text-gray-300 hover:text-white"
									>+380 93 299 27 11</a
								>
							</li>
							<li class="flex gap-5">
								<Envelope colorFill="#f97316" classes="w-8 h-8" />
								<a
									href="mailto:zadoroznainna131@gmail.com"
									class="text-lg leading-6 text-gray-300 hover:text-white"
									>zadoroznainna131@gmail.com</a
								>
							</li>
						</ul>
						<h3 class="text-base font-semibold leading-6 text-white mb-5">Технічна підтримка</h3>
						<p class="text-sm text-gray-300 mb-5">
							Залиште своє запитання або зверніться за технічною підтримкою, і ми з радістю вам
							допоможемо.
						</p>
						<a
							class="inline-block text-white rounded-xl bg-orange-500 px-10 py-4"
							href="mailto:mkovaleva0205@gmail.com">Напишіть нам</a
						>
						<p class="text-sm text-gray-300 mb-5">Залиште своє запитання або зверніться за технічною підтримкою, і ми з радістю вам допоможемо.</p>
						<a class="inline-block text-white rounded-xl bg-orange-500 px-10 py-4" href="mailto:mkovaleva0205@gmail.com">Напишіть нам</a>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">Навігація сайту</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each footerLinks as link}
								<li>
									<a href={link.hrefLink} class="text-sm leading-6 text-gray-300 hover:text-white"
										>{link.title}</a
									>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Інформація</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white"
									>Політика конфіденційності</a
								>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white"
									>Договір оферти</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<div class="flex justify-between">
				<p class="text-xs leading-5 text-gray-400">
					Copyright &copy; {isNextYear ? currentYear + ' - ' + nextYear : currentYear} zadoroznainna.com
					| Всі права захищені
				</p>
				<p class="text-xs text-gray-400">
					Website design and development by
					<a class="font-bold text-orange-200" href="#">@Kovaleva Marina</a>
				</p>
			</div>
		</div>
	</div>
</footer>
