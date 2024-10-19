<script>
	import photoSteps from '$lib/images/steps.jpeg';

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
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center uppercase mb-8 pt-10">Як проходить консультація</h2>
		<div class="flex flex-col lg:flex-row gap-10">
			<div class="basis-1/2">
				<ul class="flex flex-col gap-8">
					{#each stepsData as step, index (step)}
						<li class="flex justify-between items-center gap-8">
							<div class="text-9xl text-[#6A9DD4] text-opacity-30 hover:text-opacity-80">
								{index + 1}
							</div>
							<div class="px-3">
								<h4 class="text-xl font-bold mb-4">{step.title}</h4>
								<p>{step.description}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="basis-1/2">
				<div class="flex flex-col">
					<div class="mb-8">
						<h3 class="text-xl font-bold mb-4">Що мені потрібно від вас, щоб зробити розбір ?</h3>
						<ul>
							<li>Ваша дата народження</li>
							<li>Ваше ім'я</li>
							<li>Запит з яким ви йдете на консультацію</li>
						</ul>
					</div>
					<div class="mb-8">
						<img src={photoSteps} class="rounded-3xl h-full object-cover" alt="Steps work" />
					</div>
					<button
						type="button"
						class="rounded-full bg-white px-4 py-2.5 text-xl text-[#6A9DD4] shadow-sm ring-1 ring-inset ring-[#6A9DD4] hover:bg-gray-50"
						>Дізнатися більше</button
					>
				</div>
			</div>
		</div>
	</div>
</section>
