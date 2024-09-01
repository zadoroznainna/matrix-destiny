<script>
	import photoAbout from '$lib/images/photoAbout.jpeg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="flex justify-between place-items-center">
			<div class="basis-1/2 pr-10">
				<h2 class="text-3xl font-bold uppercase mb-8">Про мене</h2>
				<p class="mb-5 leading-8">
					Мене звати Інна, мені 32 роки я спеціаліст з матриці долі. Кожна людина приходить в цей
					світ в певний день, де закладенно її призначення та задачі на це втілення. Матриця долі -
					це ключ до вашого самопізнання та розуміння себе.
				</p>
				<p class="mb-5 leading-8">
					В певний період мого життя мене почали турбувати питання «Хто я?», «Яке моє призначення»,
					«Ким я хочу бути?». Я завжди відчувала в собі потяг до всього таємничого і цей потяг
					познайомив мене з матрицею долі, котра дала мені краще зрозуміти себе та світ навколо.
				</p>
				<div>
					<h4 class="text-lg text-amber-600 font-extrabold">Напрями роботи:</h4>
					<div class="flex gap-2 mt-4">
						<div class="badge bg-teal-400 text-teal-50 py-3 px-4">Матриця долі</div>
						<div class="badge bg-amber-400 text-amber-50 py-3 px-4">Нумерологія</div>
						<div class="badge bg-purple-400 text-purple-50 py-3 px-4">Енергії</div>
						<div class="badge bg-blue-400 text-blue-50 py-3 px-4">Призначення</div>
						<div class="badge bg-green-400 text-green-50 py-3 px-4">Фінанси</div>
					</div>
				</div>
			</div>
			<div class="basis-1/2">
				<img src={photoAbout} alt="Photo about" class="rounded-3xl" height="500" />
			</div>
		</div>
	</div>
</section>
