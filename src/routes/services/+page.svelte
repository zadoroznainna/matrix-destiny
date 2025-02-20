<script>
	import { scrollToSection } from '$lib/utils/scroll.js';
	import serviceStud from '$lib/images/service_stud.jpeg';
	import serviceMatrix from '$lib/images/service_matrix.jpeg';
	import serviceProgosis from '$lib/images/service_prognosis.jpeg';
	import ArrowRightCircle from '$lib/components/icons/ArrowRightCircle.svelte';
</script>

<section class="py-16 lg:py-20" id="services">
	<div class="container mx-auto px-4">
		<h2
			class="text-slate-700 text-3xl lg:text-4xl font-bold font-heading tracking-wide text-center uppercase mb-8 lg:mb-10"
		>
			Мої послуги
		</h2>
		<div class="grid grid-cols-1 xl:grid-cols-3 gap-2 rounded-3xl overflow-hidden">
			<button
				on:click|preventDefault={() => scrollToSection('#tariff')}
				class="relative overflow-hidden group cursor-pointer rounded-r h-64 md:h-80 lg:h-96 xl:h-full text-start"
			>
				<div class="relative h-full">
					<img
						class="transform transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover object-center h-full w-full"
						src={serviceStud}
						alt="Service stud"
					/>
					<div class="absolute bottom-0 inset-0 flex justify-center items-end p-6">
						<div class="w-full p-3 h-auto lg:p-5 rounded-xl bg-slate-500 bg-opacity-75">
							<h3
								class="flex justify-between items-center text-xl font-semibold font-heading tracking-wider italic text-slate-50 md:mb-5"
							>
								Цвяхостояння
								<ArrowRightCircle classes="w-6 h-6 md:hidden" />
							</h3>
							<p class="hidden md:inline-block text-base text-slate-50 mb-5">
								Давня практика стояння на спеціальних цвяхових платформах, яка допомагає зняти
								м'язове та емоційне напруження. Ця техніка сприяє глибокій релаксації, зміцненню
								духу та розвитку сили волі.
							</p>
							<div class="hidden md:flex justify-end items-center">
								<div class="flex gap-2 text-slate-50">
									<span class="transition-all duration-500 group-hover:pr-3 group-hover:font-bold"
										>Детальніше</span
									><ArrowRightCircle classes="w-6 h-6" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</button>

			<button
				on:click|preventDefault={() => scrollToSection('#tariff')}
				class="relative overflow-hidden group cursor-pointer rounded h-64 md:h-80 lg:h-96 xl:h-full text-start"
			>
				<div class="relative h-full">
					<img
						class="transform transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover object-center h-full w-full"
						src={serviceMatrix}
						alt="Service stud"
					/>
					<div class="absolute bottom-0 inset-0 flex justify-center items-end p-6">
						<div class="w-full h-auto p-3 lg:p-5 rounded-xl bg-slate-500 bg-opacity-75">
							<h3
								class="flex justify-between items-center text-xl font-semibold font-heading tracking-wider italic text-gray-50 md:mb-5"
							>
								Розбір матриці долі
								<ArrowRightCircle classes="w-6 h-6 md:hidden" />
							</h3>
							<p class="hidden md:inline-block text-base text-slate-50 mb-5">
								Інструмент самопізнання, який розкриває таланти, життєві завдання та можливі
								випробування у майбутньому. Аналіз матриці допомагає краще зрозуміти своє
								призначення і шлях до гармонії.
							</p>
							<div class="hidden md:flex justify-end items-center">
								<div class="flex gap-2 text-slate-50">
									<span class="transition-all duration-500 group-hover:pr-3 group-hover:font-bold"
										>Детальніше</span
									>
									<ArrowRightCircle classes="w-6 h-6" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</button>

			<button
				on:click|preventDefault={() => scrollToSection('#tariff')}
				class="relative overflow-hidden group rounded-l h-64 md:h-80 lg:h-96 xl:h-full text-start"
			>
				<div class="relative h-full">
					<img
						class="transform transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover object-center h-full w-full"
						src={serviceProgosis}
						alt="Service prognosis"
					/>
					<div class="absolute bottom-0 inset-0 flex justify-center items-end p-6">
						<div class="w-full h-auto p-3 lg:p-5 rounded-xl bg-slate-500 bg-opacity-75">
							<h3
								class="flex justify-between items-center text-xl font-semibold font-heading tracking-wider italic text-slate-50 md:mb-5"
							>
								Прогностика на рік
								<ArrowRightCircle classes="w-6 h-6 md:hidden" />
							</h3>
							<p class="hidden md:inline-block text-base text-slate-50 mb-5">
								Система, яка дозволяє передбачити можливі події та їхні наслідки в майбутньому.
								Допомагає підготуватися до змін, мінімізувати ризики та прийняти обґрунтовані
								рішення на основі аналізу ситуації.
							</p>
							<div class="hidden md:flex justify-end items-center">
								<div class="flex gap-2 text-slate-50">
									<span
										class="transition-all duration-500 group-hover:pr-3 group-hover:font-semibold"
										>Детальніше</span
									><ArrowRightCircle classes="w-6 h-6" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</button>
		</div>
	</div>
</section>
