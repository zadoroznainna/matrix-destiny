<script>
	import photoAbout from "$lib/images/photoAbout.jpg";

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
				<p class="mb-5">
					Мене звати Інна, мені 32 роки я спеціаліст з матриці долі. Кожна людина приходить в цей  світ в певний день, де закладенно її призначення та задачі на це втілення. Матриця долі - це ключ до вашого самопізнання та розуміння себе.
				</p>
				<p class="mb-5">
					В певний період мого життя мене почали турбувати питання «хто я?», «яке моє призначення», «ким я хочу бути?». Я завжди відчувала в собі потяг до всього таємничого і цей потяг познайомив мене з матрицею долі, котра дала мені краще зрозуміти себе та світ навколо.
				</p>
				<div>
					<h4 class="text-lg text-[#C86F43] font-extrabold">Напрями роботи:</h4>
					<div class="flex gap-2">
						<div class="badge bg-[#416D6D] text-neutral-50 py-1">Матриця долі</div>
						<div class="badge bg-[#C86F43] text-neutral-50">Нумерологія</div>
						<div class="badge bg-zinc-400 text-neutral-50">Енергії</div>
						<div class="badge bg-[#608E8E] text-neutral-50">Призначення</div>
						<div class="badge bg-[#416D6D] text-neutral-50">Фінанси</div>
					</div>
				</div>
			</div>
			<div class="basis-1/2">
				<img src={photoAbout} alt="Photo about" class="rounded-3xl" height="500"/>
			</div>
		</div>
	</div>
</section>
