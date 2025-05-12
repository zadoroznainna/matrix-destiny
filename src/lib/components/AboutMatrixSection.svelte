<script>
	import { scrollToSection } from '$lib/utils/scroll.js';
	import Animate from '$lib/components/Animate.svelte';
</script>

<section
	id="aboutMatrix"
	class="py-16 lg:py-20 bg-gradient-to-r from-slate-800 to-slate-600 rounded-[40px] mx-2"
>
	<div class="container mx-auto px-4">
		<Animate variant="top" duration={1}>
			<h2
				class="text-3xl lg:text-4xl font-bold font-heading tracking-wide uppercase text-center text-slate-50 mb-8 lg:mb-10"
			>
				Що таке матриця долі? Які питання допомогає вирішити?
			</h2>
		</Animate>

		<Animate variant="scale" duration={1} delay={0.4}>
			<div class="flex flex-col items-center gap-5 px-4 lg:px-14">
				<div class="mb-3">
					<p class="text-center text-slate-300">
						<span class="font-semibold">Матриця долі</span> – це інструмент самопізнання, в основі котрого
						лежить закон реінкарнації. Цей метод має 22 енергії, котрі мають як плюсове значення (це
						те до чого ми прагнемо щоб виконати наше призначення) і мінусове значення (це те що заважає
						нам виконати наше призначення).
					</p>
				</div>
				<div class="mb-3">
					<p class="text-center text-slate-300">
						Для розшифровки енергій використовуються Старші Аркани карт Таро (22 Аркани). Кожен
						Аркан символізує етап життєвого шляху людини та послідовність її розвитку у різних
						аспектах. Застосування Матриці Долі дозволяє глибше вивчити суть кожного Аркана.
					</p>
				</div>
				<div class="mb-3 rounded-full px-6 py-2 bg-slate-600">
					<p class="text-center font-heading tracking-wider font-medium text-slate-300 italic">
						Щоб скласти Матрицю Долі, потрібно врахувати число, місяць, рік народження та стать
						людини.
					</p>
				</div>
				<div>
					<a
						href="#calculator"
						on:click={scrollToSection}
						aria-label="Детальніше про розрахунок матриці долі"
						class="arrow-link flex flex-col items-center transition ease-linear duration-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-16 h-16 text-slate-100 text-opacity-40 animate-bounce arrow"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
						<p class="text-sm text-slate-100 text-opacity-40 pt-2">
							Спробуй розрахувати вже зараз!
						</p>
					</a>
				</div>
			</div>
		</Animate>
	</div>
</section>
