<script>
	import photoAbout from '$lib/images/photoAbout.jpeg';
	import Instagram from '$lib/components/socialIcons/Instagram.svelte';
	import Telegram from '$lib/components/socialIcons/Telegram.svelte';

	const birthDate = new Date('1990-10-05');
	const today = new Date();

	$: age =
		today.getFullYear() -
		birthDate.getFullYear() -
		(today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);
</script>

<section class="py-16">
	<div class="mx-auto px-8 max-w-7xl">
		<div class="flex flex-col justify-between place-items-center md:flex-row md:space-x-8">
			<div class="basis-1/2 shrink-0">
				<img src={photoAbout} alt="Моє Задорожної Інни" class="rounded-3xl w-full" />
			</div>
			<div class="basis-1/2 mt-16 md:mt-0">
				<h2 class="text-4xl text-slate-700 font-bold uppercase mb-8">Про мене</h2>
				<p class="text-slate-600 mb-5 leading-8">
					Мене звати Інна, мені {age} роки я спеціаліст з матриці долі. Кожна людина приходить в цей
					світ в певний день, де закладенно її призначення та задачі на це втілення. Матриця долі - це
					ключ до вашого самопізнання та розуміння себе.
				</p>
				<p class="text-slate-600 mb-5 leading-8">
					В певний період мого життя мене почали турбувати питання «Хто я?», «Яке моє призначення»,
					«Ким я хочу бути?». Я завжди відчувала в собі потяг до всього таємничого і цей потяг
					познайомив мене з матрицею долі, котра дала мені краще зрозуміти себе та світ навколо.
				</p>
				<h4 class="text-lg font-extrabold text-slate-700">Напрями роботи:</h4>
				<div class="flex flex-wrap gap-2 mt-4">
					<span
						class="text-nowrap items-center rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600"
						>Матриця долі</span
					>
					<span
						class="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600"
						>Енергії</span
					>
					<span
						class="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600"
						>Нумерологія</span
					>
					<span
						class="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600"
						>Фінанси</span
					>
					<span
						class="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700"
						>Призначення</span
					>
				</div>
				<div class="flex items-center gap-3 mt-7 text-slate-700">
					<a
						href="https://www.instagram.com/zadoroznainna/"
						target="_blank"
						class="transition duration-300 hover:scale-125 hover:text-blue-500"
					>
						<Instagram colorFill="currentColor" classes="w-7 h-7" />
					</a>
					<a
						href="#"
						target="_blank"
						class="transition duration-300 hover:scale-125 hover:text-blue-500"
					>
						<Telegram colorFill="currentColor" classes="w-7 h-7" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
