<script>
	import photoFaq from '$lib/images/photoFaq.jpeg';
	import ChevronDown from '../icones/ChevronDown.svelte';
	import ChevronUp from '../icones/ChevronUp.svelte';

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

<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center uppercase mb-10">Запитання та відповіді</h2>
		<div class="flex justify-between place-items-center">
			<div class="basis-1/3">
				<img src={photoFaq} alt="Photo about" class="rounded-3xl" height="400" />
			</div>
			<div class="basis-2/3 pl-10">
				<div class="mx-auto max-w-7xl">
					<div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
						<dl class="space-y-6 divide-y divide-gray-900/10">
							{#each faqData as faq, index}
								<div class="{index === 0 ? "pt-0" : "pt-6"}">
									<dt>
										<button
											type="button"
											class="flex w-full items-start justify-between text-left text-gray-900"
											aria-controls="faq-{index}"
											aria-expanded={activeQuestion === index}
											on:click={() => toggleQuestion(index)}
										>
											<span class="text-base font-semibold leading-7">{faq.title}</span>
											<span class="ml-6 flex h-7 items-center">
												<ChevronUp classes={activeQuestion !== index ? 'hidden' : ''} />
												<ChevronDown classes={activeQuestion === index ? 'hidden' : ''} />
											</span>
										</button>
									</dt>
									<dd
										class="mt-2 pr-12 {activeQuestion === index ? '' : 'hidden'}"
										id="faq-{index}"
									>
										<p class="text-base leading-7 text-gray-600">
											{faq.description}
										</p>
									</dd>
								</div>
							{/each}
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
