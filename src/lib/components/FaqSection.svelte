<script>
	import { slide } from 'svelte/transition';
	import photoFaq from '$lib/images/photoFaq.jpeg';
	import ChevronDown from '$lib/components/icons/ChevronDown.svelte';
	import ChevronUp from '$lib/components/icons/ChevronUp.svelte';

	import Animate from '$lib/components/Animate.svelte';

	const faqData = [
		{
			title: 'Матриця долі це ворожіння?',
			description:
				'Ні, це не ворожіння це розшифровка вашої дати народження та аналіз ваших енергій.'
		},

		{
			title: 'Чи може матриця чимось зашкодити?',
			description: 'Ні, це безпечний інструмент самопізнання, ніякої магії тільки цифри.'
		},

		{
			title: 'Що дасть мені розбір матриці?',
			description:
				'Розуміння себе, своїх сильних та слабких сторін.Задасть вектор в якому потрібно рухатися,чому в житті трапляються ті чи інші ситуації, через що до вас йтимуть гроші та на що потрібно їх витрачати, що заважає побудувати міцні стосунки? Призначення'
		},

		{
			title: 'Чи потрібно робити розбір матриці декілька разів протягом життя?',
			description:
				'Один розбір може дати глибоке розуміння вашого потенціалу, але якщо ви хочете відслідковувати зміни та розвиток у різних сферах, розбір можна повторювати для аналізу різних періодів життя.'
		},

		{
			title:
				'Чи можна запитати у матриці звільнятися мені з роботи чи ні? Чи будувати відносини з конретною людиною чи ні?',
			description:
				'Ні, рішення завжди приймаєте тільки ви, матриця задає направлення куди потрібно рухатися, та що потрібно робити. Який у вас є потенціал.'
		},

		{
			title: 'Чи потрібні спеціальні знання для розуміння матриці долі?',
			description:
				'Ні, спеціальних знань не потрібно. Ви отримаєте розбір, в якому все пояснено простою мовою, доступною для кожного.'
		}
	];

	let activeQuestion = 0;

	function toggleQuestion(index) {
		activeQuestion = activeQuestion === index ? null : index;
	}
</script>

<section class="py-16 lg:py-20">
	<div class="container mx-auto px-4">
		<Animate variant="top" duration={1}>
			<h2
				class="text-3xl lg:text-4xl font-heading tracking-wide font-bold text-slate-700 text-center uppercase mb-8 lg:mb-10"
			>
				Запитання та відповіді
			</h2>
		</Animate>
		<div
			class="flex flex-col-reverse xl:flex-row justify-between place-items-center gap-10 xl:gap-14"
		>
			<div class="w-full xl:basis-1/3 h-96 md:h-[700px] xl:h-full">
				<img
					src={photoFaq}
					alt="Фотографія Задорожної Інни, яка надає консультації"
					class="rounded-3xl w-full h-full object-cover object-top"
				/>
			</div>
			<div class="basis-2/3">
				<Animate variant="top" duration={1} delay={0.4}>
					<div class="mx-auto max-w-7xl">
						<div class="mx-auto max-w-4xl divide-y divide-slate-700/10">
							<dl class="space-y-6 divide-y divide-slate-700/10">
								{#each faqData as faq, index}
									<div class={index === 0 ? 'pt-0' : 'pt-6'}>
										<dt>
											<button
												type="button"
												class="flex w-full items-start justify-between text-left text-slate-700"
												aria-controls="faq-{index}"
												aria-expanded={activeQuestion === index}
												aria-label="Читати відповідь на запитання"
												on:click={() => toggleQuestion(index)}
											>
												<p class="text-base font-semibold leading-7 mb-0">
													{index + 1}. {faq.title}
												</p>
												<span
													class="ml-6 flex items-center p-1 border border-slate-300 rounded-lg {activeQuestion ===
													index
														? 'border-sky-200 text-sky-700'
														: 'border-slate-300 text-slate-700'}"
												>
													<ChevronUp classes={activeQuestion !== index ? 'hidden' : ''} />
													<ChevronDown classes={activeQuestion === index ? 'hidden' : ''} />
												</span>
											</button>
										</dt>
										{#if activeQuestion === index}
											<dd
												id="faq-{index}"
												class="mt-2 pr-12"
												in:slide={{ duration: 300 }}
												out:slide={{ duration: 300 }}
											>
												<p class="text-base leading-7 text-slate-600">
													{faq.description}
												</p>
											</dd>
										{/if}
									</div>
								{/each}
							</dl>
						</div>
					</div>
				</Animate>
			</div>
		</div>
	</div>
</section>
