<script>
	import photoSteps from "$lib/images/steps.jpeg";


</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="py-16">
	<div class="container mx-auto px-4">
		<!-- <h2 class="text-3xl font-bold uppercase text-center mb-10">Етапи нашої роботи</h2>
		<div class="flex justify-between place-items-center gap-6">
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

		<div class="flex justify-between items-stretch gap-10 relative">
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
					<ul class="steps w-full 2xl:py-10">
						<li class="step step-primary after:!w-10 after:!h-10 after:text-3xl after:!bg-[#6A9DD4]">
							<div class="h-full mt-20 px-3">
								<h4 class="text-xl font-bold">Вибір тарифу</h4>
								<p>Обираєте для себе підходящий тариф (консультацію) або зверніться до мене для підбору.</p>
							</div>
						</li>
						<li class="step step-primary after:!w-10 after:!h-10 after:text-3xl after:!bg-[#6A9DD4] before:!h-1 before:!bg-[#6A9DD4]">
							<div class="h-full mt-20 px-3">
								<h4 class="text-xl font-bold">Призначення дати</h4>
								<p>Запропоную вам найближчу вільну дату і повідомлю про дату розбору.</p>
							</div>
						</li>
						<li class="step step-primary after:!w-10 after:!h-10 after:text-3xl after:!bg-[#6A9DD4] before:!h-1 before:!bg-[#6A9DD4]">
							<div class="h-full mt-20 px-3">
								<h4 class="text-xl font-bold">Розбір</h4>
								<p>У зазначений день надсилаю ваш розбір у Telegram, включаючи голосове повідомлення та PDF файл з розбором.</p>
							</div>
						</li>
						<li class="step step-primary after:!w-10 after:!h-10 after:text-3xl after:!bg-[#6A9DD4] before:!h-1 before:!bg-[#6A9DD4]">
							<div class="h-full mt-20 px-3">
								<h4 class="text-xl font-bold">Ваші питання</h4>
								<p>Залишаюсь на зв'язку після консультації чи розбору для вашої підтримки та відповіді на питання.</p>
							</div>
						</li>
						<li class="step step-primary after:!w-10 after:!h-10 after:text-3xl after:!bg-[#6A9DD4] before:!h-1 before:!bg-[#6A9DD4]">
							<div class="h-full mt-20 px-3">
								<h4 class="text-xl font-bold">Оплата</h4>
								<p>Здійснюєте або повну оплату, або 50 на 50 з бронюванням дати.</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		
		</div>
	</div>
</section>
