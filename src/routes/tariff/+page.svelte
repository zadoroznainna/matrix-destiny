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
		}
	];
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<!-- <div class="container mx-auto px-4"> -->

	<div class="isolate overflow-hidden bg-gray-900">
		<div class="mx-auto max-w-7xl px-6 pb-96 pt-10 text-center sm:pt-20 lg:px-8">
			<h2 class="text-3xl text-white font-bold uppercase text-center mb-3">Тарифи</h2>
			<div class="relative mt-6">
				<svg
					viewBox="0 0 1208 1024"
					class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
				>
					<ellipse cx="604" cy="512" fill="#1A5572" rx="604" ry="512" />
					<defs>
						<radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
							<stop stop-color="#6A9DD4" />
							<stop offset="1" stop-color="#E7E4D8" />
						</radialGradient>
					</defs>
				</svg>
			</div>
		</div>
		<div class="flow-root bg-white pb-24 sm:pb-32">
			<div class="-mt-80">
				<div class="mx-auto px-6 lg:px-8">
					<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
						<div
							class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
						>
							<div>
								<h3 id="tier-hobby" class="text-base font-semibold leading-7 text-sky-600">
									Базовий
								</h3>
								<div class="mt-4 flex items-baseline gap-x-2">
									<span class="text-5xl font-bold tracking-tight text-gray-900">1 000 грн</span>
								</div>
								<p class="mt-6 text-base leading-7 text-gray-600">
									"Основи Долі" - базовий тариф, який містить початковий аналіз матриці долі та
									загальні рекомендації.
								</p>
								<ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
									{#each firstTariffsData as firstTarrif}
										<li class="flex gap-x-3">
											<Check />
											{firstTarrif}
										</li>
									{/each}
								</ul>
							</div>
							<a
								href="#"
								aria-describedby="tier-hobby"
								class="mt-8 block rounded-md bg-sky-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Обрати</a
							>
						</div>
						<div
							class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
						>
							<div>
								<div class="flex items-center justify-between gap-x-4">
									<h3 id="tier-team" class="text-base font-semibold leading-7 text-sky-600">
										Середній
									</h3>
									<p
										class="rounded-full bg-sky-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-sky-600"
									>
										Популярний
									</p>
								</div>
								<div class="mt-4 flex items-baseline gap-x-2">
									<span class="text-5xl font-bold tracking-tight text-gray-900">1 500 грн</span>
								</div>
								<p class="mt-6 text-base leading-7 text-gray-600">
									"Розкриття Шляху" - середній тариф, що включає детальніше дослідження та
									індивідуальні поради.
								</p>
								<ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
									{#each secondTariffsData as secondTarrif}
										<li class="flex gap-x-3">
											<Check />
											{secondTarrif}
										</li>
									{/each}
								</ul>
							</div>
							<a
								href="#"
								aria-describedby="tier-team"
								class="mt-8 block rounded-md bg-sky-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Обрати</a
							>
						</div>
						<div
							class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
						>
							<div>
								<div class="flex items-center justify-between gap-x-4">
									<h3 id="tier-team" class="text-base font-semibold leading-7 text-sky-600">
										Повний
									</h3>
									<p
										class="flex items-center gap-2 rounded-full bg-sky-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-sky-600"
									>
										<Gift />
										<span>Бонус</span>
									</p>
								</div>
								<div class="mt-4 flex items-baseline gap-x-2">
									<span class="text-5xl font-bold tracking-tight text-gray-900">2 500 грн</span>
								</div>
								<p class="mt-6 text-base leading-7 text-gray-600">
									"Гармонія Долі" - повний тариф із поглибленим аналізом, консультацією та
									персональними рекомендаціями.
								</p>
								<ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
									{#each thirdTariffsData as thirdTarrif}
										<li class="flex gap-x-3">
											<Check />
											{thirdTarrif}
										</li>
									{/each}
									<li class="flex gap-x-3">
										<Gift />
										Бонус - прогноз на найближчий рік
									</li>
								</ul>
							</div>
							<a
								href="#"
								aria-describedby="tier-team"
								class="mt-8 block rounded-md bg-sky-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Обрати</a
							>
						</div>

						<h3 class="col-span-3 text-xl font-bold uppercase text-center mb-2 mt-3">Ви завжди можете окремо обрати та замовити потрібну послугу</h3>
						<div
							class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:items-center"
						>
							{#each extraTariffData as extraTariff}
							<div class="w-full flex items-start gap-8">
								<div class="lg:min-w-0 lg:flex-1">
									<h3 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
										{extraTariff.title}
									</h3>
									<p class="mt-1 text-sm leading-7 text-gray-600">
										{extraTariff.description}
									</p>
								</div>
								<p class="text-2xl font-bold">{extraTariff.price} грн</p>
								<a
									href="#"
									class="flex rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>Замовити послугу <ArrowRight />
								</a>
							</div>
								
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- </div> -->
</section>
