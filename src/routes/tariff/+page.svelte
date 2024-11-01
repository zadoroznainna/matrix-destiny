<script>
	import Gift from '../icones/Gift.svelte';
	import Check from '../icones/Check.svelte';
	import ArrowRight from '../icones/ArrowRight.svelte';

	const firstTariffsData = [
		'Особистий розбір матриці (8 зон)',
		'10+ сторінок, PDF файл з розбором',
		'Голосові повідомлення',
		'3 дні, моя підтримка та супровід'
	];

	const secondTariffsData = [
		'Детальний аналіз матриці долі з акцентом на ключових життєвих подіях',
		'20+ сторінок, PDF файл з розбором та практичними рекомендаціями',
		'1-1,5 години, відео-консультація зі мною у Zoom',
		'14 днів, моя підтримка та супровід',
		'Короткий прогноз на майбутнє'
	];

	const thirdTariffsData = [
		'Поглиблений розбір усіх аспектів матриці долі',
		'Детально розберемо 2 зони на ваш вибір',
		'30+ сторінок, PDF файл з розбором, практичними рекомендаціями, а також техніки та медитації',
		'2-2,5 години, відео-консультація зі мною у Zoom',
		'1 місяць, моя підтримка та супровід'
	];

	const extraTariffData = [
		{
			title: 'Прогностика',
			description:
				'Система, призначена для аналізу та прогнозу ймовірних подій і їхніх наслідків у майбутньому.',
			price: 400
		},

		{
			title: 'Експрес консультація',
			description: 'Детальніше розглянемо будь-яку зону в матриці, яку ви хочете.',
			price: 350
		},

		{
			title: 'Цвяхостояння',
			description:
				"Пропрацюємо ваше м'язове та емоційне напруження, що зміцнить ваш дух та допоможе досягти релаксації.",
			price: 350
		}
	];
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="py-16">
	<div class="isolate overflow-hidden">
		<div class="rounded-t-3xl flow-root bg-slate-200 pb-16 pt-24 sm:pt-32 lg:pb-0">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="relative z-10">
					<h2
						class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-slate-600"
					>
						Формати роботи і вартість
					</h2>
					<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-slate-500">
						Пропоную такі варіанти взаємодії
					</p>
				</div>
				<div
					class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3"
				>
					<svg
						viewBox="0 0 1208 1024"
						aria-hidden="true"
						class="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
					>
						<ellipse
							cx="604"
							cy="512"
							fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
							rx="604"
							ry="512"
						/>
						<defs>
							<radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
								<stop stop-color="#ffedd5" />
								<stop offset="1" stop-color="#ffedd5" />
							</radialGradient>
						</defs>
					</svg>
					<div
						class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
						aria-hidden="true"
					></div>
					<div
						class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0"
					>
						<div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
							<h3 id="tier-starter" class="text-sm font-semibold leading-6 text-white">Базовий</h3>
							<div
								class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
							>
								<div class="mt-2 flex items-center gap-x-4">
									<!-- Price, update based on frequency toggle state -->
									<p class="text-4xl font-bold tracking-tight text-white">₴1 000</p>
									<div class="text-sm leading-5">
										<p class="text-white">ГРН</p>
										<!-- Payment frequency, update based on frequency toggle state -->
										<p class="text-gray-400"></p>
									</div>
								</div>
								<p class="hidden lg:inline-block text-base text-gray-400">
									"Основи Долі" - базовий тариф, який містить початковий аналіз матриці долі та
									загальні рекомендації.
								</p>
								<a
									href="#"
									aria-describedby="tier-starter"
									class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 hover:bg-white/20 focus-visible:outline-white"
									>Замовити</a
								>
							</div>
							<div class="mt-8 flow-root sm:mt-10">
								<ul
									role="list"
									class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white"
								>
									{#each firstTariffsData as firstTarrif}
										<li class="flex gap-x-3 py-2">
											<Check />
											{firstTarrif}
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
					<div class="relative rounded-2xl z-10 bg-white shadow-xl ring-1 ring-gray-900/10">
						<div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
							<div class="flex justify-between">
								<h3 id="tier-scale" class="text-sm font-semibold leading-6 text-gray-900">
									Середній
								</h3>
								<p
									class="rounded-full bg-sky-600/10 px-2.5 py-1 text-xs font-semibold text-sky-600"
								>
									Популярний
								</p>
							</div>
							<div
								class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
							>
								<div class="mt-2 flex items-center gap-x-4">
									<!-- Price, update based on frequency toggle state -->
									<p class="text-4xl font-bold tracking-tight text-gray-900">₴1 500</p>
									<div class="text-sm leading-5">
										<p class="text-gray-900">ГРН</p>
										<!-- Payment frequency, update based on frequency toggle state -->
										<p class="text-gray-500"></p>
									</div>
								</div>
								<p class="hidden lg:inline-block text-base text-gray-700">
									"Розкриття Шляху" - середній тариф, що включає детальніше дослідження та
									індивідуальні поради.
								</p>
								<a
									href="#"
									aria-describedby="tier-scale"
									class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
									>Замовити</a
								>
							</div>
							<div class="mt-8 flow-root sm:mt-10">
								<ul
									role="list"
									class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-gray-900/5 border-gray-900/5 text-gray-600"
								>
									{#each secondTariffsData as secondTarrif}
										<li class="flex gap-x-3 py-2">
											<Check />
											{secondTarrif}
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
					<div
						class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0"
					>
						<div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
							<div class="flex justify-between">
								<h3 id="tier-growth" class="text-sm font-semibold leading-6 text-white">Повний</h3>
								<p
									class="flex items-center gap-2 rounded-full bg-sky-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-sky-600"
								>
									<Gift />
									<span>Бонус</span>
								</p>
							</div>
							<div
								class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
							>
								<div class="mt-2 flex items-center gap-x-4">
									<!-- Price, update based on frequency toggle state -->
									<p class="text-4xl font-bold tracking-tight text-white">₴2 500</p>
									<div class="text-sm leading-5">
										<p class="text-white">ГРН</p>
										<!-- Payment frequency, update based on frequency toggle state -->
										<p class="text-gray-400"></p>
									</div>
								</div>
								<p class="hidden lg:inline-block text-base text-gray-400">
									"Гармонія Долі" - повний тариф із поглибленим аналізом, консультацією та
									персональними рекомендаціями.
								</p>
								<a
									href="#"
									aria-describedby="tier-growth"
									class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 hover:bg-white/20 focus-visible:outline-white"
									>Замовити</a
								>
							</div>
							<div class="mt-8 flow-root sm:mt-10">
								<ul
									role="list"
									class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white"
								>
									{#each thirdTariffsData as thirdTarrif}
										<li class="flex gap-x-3 py-2">
											<Check />
											{thirdTarrif}
										</li>
									{/each}
									<li class="flex gap-x-3 py-2">
										<Gift />
										Бонус - прогноз на найближчий рік
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container mx-auto px-4">
		<h3 class="col-span-3 text-xl font-bold uppercase text-center mb-2 mt-16">
			Ви завжди можете окремо обрати та замовити будь-яку послугу
		</h3>
		<div
			class="mt-4 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:items-center"
		>
			{#each extraTariffData as extraTariff}
				<div class="w-full flex items-center gap-8">
					<div class="lg:min-w-0 lg:flex-1">
						<h3 class="leading-6 text-lg font-semibold sm:leading-8 tracking-tight text-indigo-600">
							{extraTariff.title}
						</h3>
						<p class="mt-1 text-xs leading-4 sm:text-sm sm:leading-7 text-gray-600">
							{extraTariff.description}
						</p>
					</div>
					<p class="text-xl flex-1 lg:flex-initial md:text-2xl font-bold">
						{extraTariff.price} грн
					</p>
					<div class="flex-1 lg:flex-initial">
						<a
							href="#"
							class="flex items-center rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Замовити<span class="hidden md:inline">&nbsp;послугу</span>
							<ArrowRight classes="w-8 h-8 ml-2" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
