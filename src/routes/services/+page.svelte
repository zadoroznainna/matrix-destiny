<script>
	import serviceStud from '$lib/images/service_stud.jpeg';
	import serviceMatrix from '$lib/images/service_matrix.jpeg';
	import serviceProgosis from '$lib/images/service_prognosis.jpeg';
	import ArrowRight from '../icones/ArrowRight.svelte';

</script>

<section class="py-16">
	<div class="container mx-auto px-4">

		<h2 class="text-3xl font-bold text-center uppercase mb-8 pt-10">Мої послуги</h2>
		<div class="grid grid-cols-3 gap-2 rounded-3xl overflow-hidden">
			<div class="relative overflow-hidden group cursor-pointer rounded-r">
				<div class="relative">
					<img src={serviceStud} alt="Service stud" />
					<div class="absolute bottom-0 inset-0 flex justify-center items-end p-6">
						<div class="w-full p-5 rounded-xl bg-[#7B7C79] bg-opacity-85">
							<h3 class="text-xl font-semibold text-slate-50 mb-5">Цвяхостояння</h3>
							<p class="text-base text-slate-50 mb-5">Давня практика стояння на спеціальних цвяхових платформах, яка допомагає зняти м'язове та емоційне напруження. Ця техніка сприяє глибокій релаксації, зміцненню духу та розвитку сили волі.</p>
							<div class="flex justify-end">
								<a class="flex gap-1 text-slate-50" href="#">Детальніше<ArrowRight/> </a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="relative overflow-hidden group cursor-pointer rounded">
				<div class="relative">
					<img src={serviceMatrix} alt="Service stud" />
					<div class="absolute bottom-0 inset-0 flex justify-center items-end p-6">
						<div class="w-full p-5 rounded-xl bg-[#7B7C79] bg-opacity-85">
							<h3 class="text-xl font-semibold text-slate-50 mb-5">Розбір матриці долі</h3>
							<p class="text-base text-slate-50 mb-5">Інструмент самопізнання, який розкриває таланти, життєві завдання та можливі випробування у майбутньому. Аналіз матриці допомагає краще зрозуміти своє призначення і шлях до гармонії.</p>
							<div class="flex justify-end">
								<a class="flex gap-1 text-slate-50" href="#">Детальніше<ArrowRight/></a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="relative overflow-hidden group cursor-pointer rounded-l">
				<div class="relative">
					<img src={serviceProgosis} alt="Service prognosis" />
					<div class="absolute bottom-0 inset-0 flex justify-center items-end p-6">
						<div class="w-full p-5 rounded-xl bg-[#7B7C79] bg-opacity-85">
							<h3 class="text-xl font-semibold text-slate-50 mb-5">Прогностика на рік</h3>
							<p class="text-base text-slate-50 mb-5">Система, яка дозволяє передбачити можливі події та їхні наслідки в майбутньому. Вона допомагає підготуватися до змін і прийняти обґрунтовані рішення на основі аналізу ситуації.</p>
							<div class="flex justify-end">
								<a class="flex gap-1 text-slate-50" href="#">Детальніше<ArrowRight/></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
