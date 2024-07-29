<script>
	import photoAbout from "$lib/images/photoAbout.jpg";

</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold uppercase text-center mb-10">Етапи нашої роботи</h2>
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
		</div>
	</div>
</section>
