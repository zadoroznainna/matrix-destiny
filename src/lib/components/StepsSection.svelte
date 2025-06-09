<script>
	import { scrollToSection } from '$lib/utils/scroll.js';
	import photoSteps from '$lib/images/steps.jpeg';

	import Animate from '$lib/components/Animate.svelte';

	const stepsData = [
		{
			title: 'Вибір тарифу',
			description:
				'Обираєте для себе підходящий тариф (консультацію) або зверніться до мене для підбору.'
		},

		{
			title: 'Призначення дати',
			description: 'Запропоную вам найближчу вільну дату і повідомлю про дату розбору.'
		},

		{
			title: 'Розбір',
			description:
				'У зазначений день надсилаю ваш розбір у Telegram, включаючи голосове повідомлення та PDF файл з розбором.'
		},

		{
			title: 'Ваші питання',
			description:
				"Залишаюсь на зв'язку після консультації чи розбору для вашої підтримки та відповіді на питання."
		},

		{
			title: 'Оплата',
			description: 'Здійснюєте або повну оплату, або 50 на 50 з бронюванням дати.'
		}
	];

	const informationData = [
		'Ваша дата народження',
		"Ваше ім'я",
		'Запит з яким ви йдете на консультацію'
	];
</script>

<section class="py-16 lg:py-20">
	<div class="container mx-auto px-4">
		<Animate variant="top" duration={1}>
			<h2
				class="text-slate-700 text-3xl lg:text-4xl font-bold font-heading tracking-wide text-center uppercase mb-8 lg:mb-10"
			>
				Як проходить консультація
			</h2>
		</Animate>

		<div class="flex flex-col lg:flex-row gap-10 xl:gap-14">
			<div class="basis-1/2">
				<ul class="flex flex-col gap-8 h-full justify-between">
					{#each stepsData as step, index (step)}
						<li class="flex justify-start items-center gap-4">
							<div class="flex-shrink-0 w-28">
								<Animate variant="scale" duration={1} delay={(index + 1) * 0.1}>
									<div
										class="text-9xl text-sky-600 font-heading text-center transition duration-300 text-opacity-30 hover:text-opacity-80"
									>
										{index + 1}
									</div>
								</Animate>
							</div>
							<div class="flex-grow px-3">
								<h3
									class="text-slate-700 text-xl font-bold font-heading tracking-wider italic mb-4"
								>
									{step.title}
								</h3>
								<p class="text-slate-600">{step.description}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="basis-1/2">
				<div class="flex flex-col h-full">
					<div class="mb-8 lg:mb-10">
						<h3 class="text-slate-700 text-xl font-bold font-heading tracking-wider italic mb-6">
							Що мені потрібно від вас, щоб зробити розбір ?
						</h3>
						<ul class="space-y-2">
							{#each informationData as data, index (data)}
								<li>
									<Animate variant="top" duration={1} delay={(index + 1) * 0.3}>
										<div class="flex items-center bg-slate-100 p-2 rounded-full">
											<div class="p-2 bg-slate-200 rounded-full mr-3">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													class="w-5 h-5 text-slate-400"
												>
													<path
														fill-rule="evenodd"
														d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
														clip-rule="evenodd"
													/>
												</svg>
											</div>
											<p class="text-slate-600">{data}</p>
										</div>
									</Animate>
								</li>
							{/each}
						</ul>
					</div>
					<div class="h-96 lg:h-full">
						<img
							src={photoSteps}
							class="rounded-3xl object-cover w-full h-full"
							alt="Зображення матриці долі на екрані ноутбука"
							width="724"
							height="621"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-center mt-14">
			<a
				href="/#tariff"
				on:click={scrollToSection}
				aria-label="Дізнатися більше"
				class="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden
					text-orange-400 rounded-md border border-orange-400 focus:shadow-custom group w-52"
			>
				<span
					class="absolute w-0 h-0 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-56 group-hover:h-56"
				></span>
				<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
				<span class="relative transition-all duration-300 group-hover:text-white"
					>Дізнатися більше</span
				>
			</a>
		</div>
	</div>
</section>
