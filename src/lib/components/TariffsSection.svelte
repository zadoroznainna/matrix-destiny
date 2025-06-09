<script>
	import Gift from '$lib/components/icons/Gift.svelte';
	import Star from '$lib/components/icons/Star.svelte';
	import Check from '$lib/components/icons/Check.svelte';
	import ArrowRight from '$lib/components/icons/ArrowRight.svelte';

	import Animate from '$lib/components/Animate.svelte';

	const firstTariffsData = [
		'Особистий розбір матриці (8 зон)',
		'10+ сторінок, PDF файл з розбором',
		'Голосові повідомлення',
		'3 дні, моя підтримка та супровід'
	];

	const secondTariffsData = [
		'Аналіз усіх зон матриці долі (детальний)',
		'20+ сторінок, PDF файл з розбором',
		'Голосові повідомлення',
		'14 днів, моя підтримка та супровід',
		'1-1,5 години, відео-консультація зі мною у Zoom',
		'Короткий прогноз на майбутнє',
		'Практичні рекомендації'
	];

	const thirdTariffsData = [
		'Аналіз усіх зон матриці долі (поглиблений)',
		'30+ сторінок, PDF файл з розбором',
		'Голосові повідомлення',
		'1 місяць, моя підтримка та супровід',
		'2-2,5 години, відео-консультація зі мною у Zoom',
		'Короткий прогноз на майбутнє',
		'Практичні рекомендації',
		'Додаткові техніки та медитації',
		'Детально розберемо 2 зони на ваш вибір'
	];

	const extraTariffData = [
		{
			title: 'Прогностика',
			description:
				'Система, призначена для аналізу та прогнозу ймовірних подій і їхніх наслідків у майбутньому.',
			price: 650
		},

		{
			title: 'Експрес консультація',
			description: 'Детальніше розглянемо будь-яку зону в матриці, яку ви хочете.',
			price: 500
		},

		{
			title: 'Цвяхостояння',
			description:
				"Пропрацюємо ваше м'язове та емоційне напруження, що зміцнить ваш дух та допоможе досягти релаксації.",
			price: 500
		}
	];
</script>

<section class="py-16 lg:py-20" id="tariff">
	<div class="relative z-10">
		<div class="mx-auto px-4 px-xl-8 max-w-7xl">
			<Animate variant="top" duration={1}>
				<h2
					class="mx-auto max-w-4xl text-center text-3xl lg:text-4xl uppercase font-bold font-heading tracking-wide text-slate-700 mb-8 lg:mb-10"
				>
					Формати роботи і вартість
				</h2>
			</Animate>
			<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-slate-500">
				Пропоную кілька варіантів взаємодії — оберіть той, що найкраще відповідає вашим потребам
			</p>
		</div>
	</div>

	<div class="relative py-20 xl:py-24">
		<div
			class="absolute inset-x-2 top-60 bottom-0 rounded-[40px] ring-1 ring-black/5 ring-inset bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"
		></div>
		<div class="relative px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-7xl">
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div
						class="-m-2 grid grid-cols-1 rounded-3xl ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
					>
						<div class="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
							<div class="rounded-3xl bg-white py-10 px-9 ring-1 shadow-2xl ring-black/5">
								<Animate variant="scale" duration={1} delay={0.2}>
									<div class="flex justify-between mb-6 lg:mb-3">
										<h3
											id="tier-scale"
											class="text-base font-semibold font-heading tracking-wider italic text-slate-700 leading-8"
										>
											Базовий
										</h3>
									</div>
									<div
										class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
									>
										<div class="flex items-center gap-x-4">
											<p class="text-4xl font-bold tracking-tight text-slate-700">₴1 000</p>
											<div class="text-sm leading-5">
												<p class="text-slate-700">ГРН</p>
											</div>
										</div>
										<p class="hidden lg:inline-block text-base text-slate-600">
											"Основи Долі" - базовий тариф, який містить початковий аналіз матриці долі та
											загальні рекомендації.
										</p>
										<a
											href="https://t.me/inna_zadorozhna13"
											target="_blank"
											aria-label="Обрати тариф"
											title="Обрати тариф"
											class="sm:w-32 lg:w-full rounded-full py-2 px-3 text-center text-sm font-semibold transition-all duration-500 leading-6 text-white focus-visible:outline
										focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-500 shadow-sm hover:bg-slate-600 focus-visible:outline-slate-600"
											>Обрати</a
										>
									</div>
									<div class="mt-8 flow-root sm:mt-10">
										<ul
											role="list"
											class="-my-2 border-t text-sm leading-6 lg:border-t-0 divide-gray-900/5 border-gray-900/5 text-gray-600"
										>
											{#each firstTariffsData as firstTarrif}
												<li class="flex gap-x-3 text-slate-600 py-2">
													<div class="text-slate-600"><Check /></div>
													{firstTarrif}
												</li>
											{/each}
											<li class="flex gap-x-3 text-slate-300 py-2">
												<div class="text-slate-300"><Check /></div>
												Відео-консультація зі мною у Zoom
											</li>
											<li class="flex gap-x-3 text-slate-300 py-2">
												<div class="text-slate-300"><Check /></div>
												Короткий прогноз на майбутнє
											</li>
											<li class="flex gap-x-3 text-slate-300 py-2">
												<div class="text-slate-300"><Check /></div>
												Практичні рекомендації
											</li>
											<li class="flex gap-x-3 text-slate-300 py-2">
												<div class="text-slate-300"><Check /></div>
												Додаткові техніки та медитації
											</li>

											<li class="flex gap-x-3 text-slate-300 py-2">
												<div class="text-slate-300"><Check /></div>
												Детально розберемо 2 зони на ваш вибір
											</li>
										</ul>
									</div>
								</Animate>
							</div>
						</div>
					</div>

					<div
						class="-m-2 grid grid-cols-1 rounded-3xl ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
					>
						<div class="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
							<div class="rounded-3xl bg-white py-10 px-9 ring-1 shadow-2xl ring-black/5">
								<Animate variant="scale" duration={1} delay={0.4}>
									<div class="flex justify-between mb-6 lg:mb-3">
										<h3
											id="tier-scale"
											class="text-base font-semibold font-heading tracking-wider italic leading-6 text-slate-700"
										>
											Середній
										</h3>
										<p
											class="flex items-center gap-2 rounded-full bg-orange-500/10 px-2.5 py-1 text-xs font-semibold text-orange-500"
										>
											<Star />
											<span>Популярний</span>
										</p>
									</div>
									<div
										class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
									>
										<div class="flex items-center gap-x-4">
											<p class="text-4xl font-bold tracking-tight text-slate-700">₴1 500</p>
											<div class="text-sm leading-5">
												<p class="text-slate-700">ГРН</p>
											</div>
										</div>
										<p class="hidden lg:inline-block text-base text-slate-600">
											"Розкриття Шляху" - середній тариф, що включає детальніше дослідження та
											індивідуальні поради.
										</p>
										<a
											href="https://t.me/inna_zadorozhna13"
											target="_blank"
											aria-label="Обрати тариф"
											title="Обрати тариф"
											aria-describedby="tier-scale"
											class="sm:w-32 lg:w-full rounded-full py-2 px-3 text-center transition-all duration-500 text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2
										focus-visible:outline-offset-2 bg-orange-400 shadow-sm hover:bg-orange-500">Обрати</a
										>
									</div>
									<div class="mt-8 flow-root sm:mt-10">
										<ul
											role="list"
											class="-my-2 border-t text-sm leading-6 lg:border-t-0 divide-gray-900/5 border-gray-900/5 text-gray-600"
										>
											{#each secondTariffsData as secondTarrif}
												<li class="flex gap-x-3 text-slate-600 py-2">
													<div class="text-orange-600"><Check /></div>
													{secondTarrif}
												</li>
											{/each}
											<li class="flex gap-x-3 text-slate-300 py-2">
												<div class="text-slate-300"><Check /></div>
												Додаткові техніки та медитації
											</li>
											<li class="flex gap-x-3 text-slate-300 py-2">
												<div class="text-slate-300"><Check /></div>
												Детально розберемо 2 зони на ваш вибір
											</li>
										</ul>
									</div>
								</Animate>
							</div>
						</div>
					</div>

					<div
						class="-m-2 grid grid-cols-1 rounded-3xl ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
					>
						<div class="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
							<div class="rounded-3xl bg-white py-10 px-9 ring-1 shadow-2xl ring-black/5">
								<Animate variant="scale" duration={1} delay={0.6}>
									<div class="flex justify-between mb-6 lg:mb-3">
										<h3
											id="tier-scale"
											class="text-base font-semibold font-heading tracking-wider italic leading-8 text-slate-700"
										>
											Повний
										</h3>

										<p
											class="flex items-center gap-2 rounded-full bg-orange-500/10 px-2.5 py-1 text-xs font-semibold text-orange-500"
										>
											<Gift />
											<span>Бонус</span>
										</p>
									</div>
									<div
										class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
									>
										<div class="flex items-center gap-x-4">
											<p class="text-4xl font-bold tracking-tight text-slate-700">₴2 500</p>
											<div class="text-sm leading-5">
												<p class="text-slate-700">ГРН</p>
											</div>
										</div>
										<p class="hidden lg:inline-block text-base text-slate-600">
											"Гармонія Долі" - повний тариф із поглибленим аналізом, консультацією та
											персональними рекомендаціями.
										</p>
										<a
											href="https://t.me/inna_zadorozhna13"
											target="_blank"
											aria-label="Обрати тариф"
											title="Обрати тариф"
											aria-describedby="tier-scale"
											class="sm:w-32 lg:w-full rounded-full py-2 px-3 text-center text-sm font-semibold transition-all duration-500 leading-6 text-white focus-visible:outline
										focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-500 shadow-sm hover:bg-slate-600 focus-visible:outline-slate-600"
											>Обрати</a
										>
									</div>
									<div class="mt-8 flow-root sm:mt-10">
										<ul
											role="list"
											class="-my-2 border-t text-sm leading-6 lg:border-t-0 divide-gray-900/5 border-gray-900/5 text-gray-600"
										>
											{#each thirdTariffsData as thirdTarrif}
												<li class="flex gap-x-3 text-slate-600 py-2">
													<div class="text-slate-600"><Check /></div>
													{thirdTarrif}
												</li>
											{/each}
											<li class="flex text-orange-500 gap-x-3 py-2 mt-2">
												<Gift />
												Бонус - прогноз на найближчий рік
											</li>
										</ul>
									</div>
								</Animate>
							</div>
						</div>
					</div>
				</div>

				<div
					class="mt-20 xl:mt-24 rounded-[40px] flex justify-between max-sm:mx-auto max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 bg-white"
				>
					<div class="p-9 xl:p-16">
						<Animate variant="top" duration={1}>
							<h3 class="col-span-3 text-xl text-slate-700 font-bold uppercase text-center mb-6">
								Ви завжди можете обрати та замовити будь-яку послугу окремо
							</h3>
						</Animate>
						<Animate variant="scale" duration={1.5} delay={0.4}>
							<div
								class="flex flex-col items-start gap-x-8 gap-y-6 sm:gap-y-10 lg:p-10 lg:col-span-3 lg:items-center"
							>
								{#each extraTariffData as extraTariff}
									<div
										class="relative w-full flex flex-col lg:flex-row items-center gap-8 ring-1 ring-gray-900/10 p-6 lg:p-8 rounded-3xl overflow-hidden"
									>
										<div
											class="z-0 absolute w-96 h-96 right-0 blur-lg top-0 opacity-25 rounded-full bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff]"
										></div>
										<div class="lg:min-w-0 lg:flex-1 lg:pr-12">
											<h3
												class="leading-6 text-lg font-heading tracking-wider italic font-semibold sm:leading-8 text-slate-700 mb-3"
											>
												{extraTariff.title}
											</h3>
											<p class="text-sm md:text-base leading-6 sm:leading-7 text-slate-600">
												{extraTariff.description}
											</p>
										</div>
										<div class="z-10 flex justify-between items-center w-full lg:w-auto lg:gap-6">
											<p
												class="text-xl flex-1 lg:flex-initial md:text-2xl font-bold text-slate-700"
											>
												{extraTariff.price} грн
											</p>
											<div class="flex-1 lg:flex-initial">
												<a
													href="https://t.me/inna_zadorozhna13"
													target="_blank"
													aria-label="Обрати послугу"
													title="Обрати послугу"
													class="flex items-center rounded-full px-3.5 py-2 text-sm transition-all duration-500 font-semibold leading-6 text-orange-400 ring-1 ring-inset ring-orange-200 hover:ring-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
													>Обрати<span class="hidden md:inline">&nbsp;послугу</span>
													<ArrowRight classes="w-8 h-8 ml-auto lg:ml-2" />
												</a>
											</div>
										</div>
									</div>
								{/each}
							</div>
						</Animate>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
