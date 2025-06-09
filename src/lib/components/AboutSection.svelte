<script>
	import photoAbout from '$lib/images/photoAbout.jpeg';
	import Instagram from '$lib/components/icons/social/Instagram.svelte';
	import Telegram from '$lib/components/icons/social/Telegram.svelte';
	import Gmail from '$lib/components/icons/social/Gmail.svelte';

	import Animate from '$lib/components/Animate.svelte';

	const birthDate = new Date('1991-08-13');
	const today = new Date();

	$: age =
		today.getFullYear() -
		birthDate.getFullYear() -
		(today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);
</script>

<section class="py-16 lg:py-20" id="about">
	<div class="mx-auto px-4 sm:px-8 max-w-7xl">
		<div class="flex flex-col justify-between place-items-center gap-10 xl:gap-14 lg:flex-row">
			<div class="basis-1/2 shrink-0">
				<img
					src={photoAbout}
					alt="Зображення Задорожної Інни"
					class="rounded-3xl w-full"
					width="608"
					height="590"
				/>
			</div>
			<div class="basis-1/2">
				<Animate variant="top" duration={1}>
					<h2
						class="text-3xl lg:text-4xl text-slate-700 font-heading font-bold tracking-wide uppercase mb-8 lg:mb-10"
					>
						Про мене
					</h2>
				</Animate>

				<Animate variant="top" duration={1} delay={0.2}>
					<p class="text-slate-600 mb-5 leading-8">
						Мене звати Інна, мені {age} роки я спеціаліст з матриці долі. Кожна людина приходить в цей
						світ в певний день, де закладенно її призначення та задачі на це втілення. Матриця долі -
						це ключ до вашого самопізнання та розуміння себе.
					</p>
					<p class="text-slate-600 mb-5 leading-8">
						В певний період мого життя мене почали турбувати питання «Хто я?», «Яке моє
						призначення», «Ким я хочу бути?». Я завжди відчувала в собі потяг до всього таємничого і
						цей потяг познайомив мене з матрицею долі, котра дала мені краще зрозуміти себе та світ
						навколо.
					</p>
				</Animate>

				<Animate variant="top" duration={1} delay={0.4}>
					<h3 class="text-lg font-extrabold font-heading tracking-wider italic text-slate-700 mt-3">
						Напрями роботи:
					</h3>
				</Animate>

				<div class="flex flex-wrap gap-2 mt-4">
					<Animate variant="scale" duration={1} delay={0.6}>
						<span
							class="text-nowrap items-center rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600"
							>Матриця долі</span
						>
					</Animate>
					<Animate variant="scale" duration={1} delay={0.8}>
						<span
							class="inline-flex items-center rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-600"
							>Енергії</span
						>
					</Animate>
					<Animate variant="scale" duration={1} delay={1.0}>
						<span
							class="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600"
							>Нумерологія</span
						>
					</Animate>
					<Animate variant="scale" duration={1} delay={1.2}>
						<span
							class="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600"
							>Фінанси</span
						>
					</Animate>
					<Animate variant="scale" duration={1} delay={1.4}>
						<span
							class="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700"
							>Призначення</span
						>
					</Animate>
				</div>
				<Animate variant="fade" duration={1} delay={1.4}>
					<div class="flex items-center gap-4 mt-7 text-slate-700">
						<a
							href="https://www.instagram.com/zadoroznainna/"
							target="_blank"
							aria-label="Instagram"
							title="Instagram"
						>
							<Instagram
								colorFill="currentColor"
								classes="w-7 h-7 transition duration-500 hover:scale-125 hover:text-sky-600"
							/>
						</a>
						<a
							href="https://t.me/inna_zadorozhna13"
							target="_blank"
							aria-label="Telegram"
							title="Telegram"
						>
							<Telegram
								colorFill="currentColor"
								classes="w-7 h-7 transition duration-500 hover:scale-125 hover:text-sky-600"
							/>
						</a>

						<a href="mailto:zadoroznainna131@gmail.com" aria-label="Gmail" title="Gmail">
							<Gmail
								colorFill="currentColor"
								classes="w-7 h-7 transition duration-500 hover:scale-125 hover:text-sky-600"
							/>
						</a>
					</div>
				</Animate>
			</div>
		</div>
	</div>
</section>
