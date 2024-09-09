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
		<!-- <div class="flex justify-between place-items-center gap-6">
			<div class="basis-1/5">
				<div>
					<h4 class="text-xl font-bold mb-3.5">Вибір тарифу</h4>
					<p>Обираєте для себе підходящий тариф (консультацію) або зверніться до мене для підбору.</p>
				</div>
				<p class="text-2xl text-orange-600 relative ml-12 mt-24 after:content-[''] after:absolute after:left-0 after:bottom-[calc(100%+15px)] after:w-[1px] after:bg-slate-200 after:h-16">01</p>
			</div>
			<div class="basis-1/5">
				<p class="text-2xl text-orange-600 relative ml-12 mt-0 mb-24 after:content-[''] after:absolute after:left-0 after:bottom-[calc(100%+15px)] after:top-[calc(100%+15px)] after:w-[1px] after:bg-slate-200 after:h-16">02</p>
				<div>
					<h4 class="text-xl font-bold mb-3.5">Призначення дати</h4>
					<p>Запропоную вам найближчу вільну дату і повідомлю про дату розбору.</p>
				</div>
			</div>
			<div class="basis-1/5">
				<div>
					<h4 class="text-xl font-bold mb-3.5">Отримання розбору</h4>
					<p>У зазначений день надсилаю ваш розбір у Telegram, включаючи голосове повідомлення та PDF файл з розбором.</p>
				</div>
				<p class="text-2xl text-orange-600 relative ml-12 mt-24 after:content-[''] after:absolute after:left-0 after:bottom-[calc(100%+15px)] after:w-[1px] after:bg-slate-200 after:h-16">03</p>
			</div>
			<div class="basis-1/5">
				<p class="text-2xl text-orange-600 relative ml-12 mt-0 mb-24 after:content-[''] after:absolute after:left-0 after:bottom-[calc(100%+15px)] after:top-[calc(100%+15px)] after:w-[1px] after:bg-slate-200 after:h-16">04</p>
				<div>
					<h4 class="text-xl font-bold mb-3.5">Ваші питання</h4>
					<p>Залишаюсь на зв'язку після консультації чи розбору для вашої підтримки та відповіді на питання.</p>
				</div>
			</div>
			<div class="basis-1/5">
				<div>
					<h4 class="text-xl font-bold mb-3.5">Оплата</h4>
					<p>Здійснюєте або повну оплату, або 50 на 50 з бронюванням дати.</p>
				</div>
				<p class="text-2xl text-orange-600 relative ml-12 mt-24 after:content-[''] after:absolute after:left-0 after:bottom-[calc(100%+15px)] after:w-[1px] after:bg-slate-200 after:h-16">05</p>
			</div>
		</div> -->

		<!-- <div class="flex justify-between items-stretch gap-10 relative">
			<div class="basis-1/2">
				<img src={photoSteps} class="w-full rounded-3xl h-full object-cover" alt="Steps work" />
			</div>
			<div class="basis-1/2">
				<h2 class="text-3xl font-bold uppercase mb-8 pt-10">Як проходить консультація</h2>
				<p>Що мені потрібно від вас, щоб зробити розбір ?</p>
				<ul>
					<li>Ваша дата народження</li>
					<li>Ваше ім'я</li>
					<li>Запит з яким ви йдете на консультацію</li>
				</ul>
				<div class="absolute top-1/3 max-w-5xl 2xl:max-w-7xl rounded-2xl right-0 px-12 2xl:px-12 py-16 2xl:py-10 bg-slate-50 bg-opacity-90">
					<ul class="grid grid-cols-5 gap-4 w-full 2xl:py-10">
						<li class="relative flex flex-col gap-4 justify-between h-[270px]">
							<div class="absolute bottom-0 right-0 z-1 text-[180px] leading-[180px] text-[#6A9DD4] text-opacity-30">1</div>
							<div class="h-full px-3">
								<h4 class="text-xl font-bold mb-10">Вибір тарифу</h4>
								<p>Обираєте для себе підходящий тариф (консультацію) або зверніться до мене для підбору.</p>
							</div>
						</li>
						<li class="relative flex flex-col gap-4 justify-between h-[270px]">
							<div class="absolute bottom-0 right-0 z-1 text-[180px] leading-[180px] text-[#6A9DD4] text-opacity-30">2</div>
							<div class="h-full px-3">
								<h4 class="text-xl font-bold mb-10">Призначення дати</h4>
								<p>Запропоную вам найближчу вільну дату і повідомлю про дату розбору.</p>
							</div>
						</li>
						<li class="relative flex flex-col gap-4 justify-between h-[270px]">
							<div class="absolute bottom-0 right-0 z-1 text-[180px] leading-[180px] text-[#6A9DD4] text-opacity-30">3</div>
							<div class="h-full px-3">
								<h4 class="text-xl font-bold mb-10">Розбір</h4>
								<p>У зазначений день надсилаю ваш розбір у Telegram, включаючи голосове повідомлення та PDF файл з розбором.</p>
							</div>
						</li>
						<li class="relative flex flex-col gap-4 justify-between h-[270px]">
							<div class="absolute bottom-0 right-0 z-1 text-[180px] leading-[180px] text-[#6A9DD4] text-opacity-30">4</div>
							<div class="h-full px-3">
								<h4 class="text-xl font-bold mb-10">Ваші питання</h4>
								<p>Залишаюсь на зв'язку після консультації чи розбору для вашої підтримки та відповіді на питання.</p>
							</div>
						</li>
						<li class="relative flex flex-col gap-4 justify-between h-[270px]">
							<div class="absolute bottom-0 right-0 z-1 text-[180px] leading-[180px] text-[#6A9DD4] text-opacity-30">5</div>
							<div class="h-full px-3">
								<h4 class="text-xl font-bold mb-10">Оплата</h4>
								<p>Здійснюєте або повну оплату, або 50 на 50 з бронюванням дати.</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		
		</div> -->

		<h2 class="text-3xl font-bold text-center uppercase mb-8 pt-10">Як проходить консультація</h2>
		<div class="flex gap-10">
			<div class="basis-1/2">
				<ul class="flex flex-col gap-8">
					{#each stepsData as step, index (step)}
						<li class="flex justify-between items-center gap-8">
							<div class="text-9xl text-[#6A9DD4] text-opacity-30">
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
						class="rounded-full bg-white px-4 py-2.5 text-xl text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>Дізнатися більше</button
					>
				</div>
			</div>
		</div>
	</div>
</section>
