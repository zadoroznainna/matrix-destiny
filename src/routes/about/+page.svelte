<script>
	import photoAbout from '$lib/images/photoAbout.jpeg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="py-16">
	<div class="mx-auto px-8 max-w-7xl">
		<div class="flex flex-col justify-between place-items-center md:flex-row md:space-x-8">
			<div class="basis-1/2 shrink-0">
				<img src={photoAbout} alt="Photo about" class="rounded-3xl w-full" />
			</div>
			<div class="basis-1/2 mt-16 md:mt-0">
				<h2 class="text-4xl font-bold uppercase mb-8">Про мене</h2>
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
				<h4 class="text-lg font-extrabold">Напрями роботи:</h4>
				<div class="flex flex-wrap gap-2 mt-4">
					<span
						class="text-nowrap items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800"
						>Матриця долі</span
					>
					<span
						class="inline-flex items-center rounded-full bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-600"
						>Енергії</span
					>
					<span
						class="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700"
						>Нумерологія</span
					>
					<span
						class="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
						>Фінанси</span
					>
					<span
						class="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700"
						>Призначення</span
					>
				</div>
			</div>
		</div>
	</div>
</section>
