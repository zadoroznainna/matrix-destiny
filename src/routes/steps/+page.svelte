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

<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center uppercase mb-8 pt-10">Як проходить консультація</h2>
		<div class="flex flex-col lg:flex-row gap-10">
			<div class="basis-1/2">
				<ul class="flex flex-col gap-8">
					{#each stepsData as step, index (step)}
						<li class="flex justify-between items-center gap-8">
							<div
								class="text-9xl text-[#6A9DD4] transition duration-300 text-opacity-30 hover:text-opacity-80"
							>
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
						<h3 class="text-xl font-bold mb-3">Що мені потрібно від вас, щоб зробити розбір ?</h3>
						<ul class="space-y-2">
							<li class="flex items-center bg-slate-100 p-2 rounded-full">
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
								<p>Ваша дата народження</p>
							</li>
							<li class="flex items-center bg-slate-100 p-2 rounded-full">
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
								<p>Ваше ім'я</p>
							</li>
							<li class="flex items-center bg-slate-100 p-2 rounded-full">
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
								<p>Запит з яким ви йдете на консультацію</p>
							</li>
						</ul>
					</div>
					<div class="mb-4">
						<img src={photoSteps} class="rounded-3xl object-cover" alt="Steps work" />
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-center mt-10">
			<a
				href="#_"
				class="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden
					text-orange-400 rounded-md border border-orange-400 focus:shadow-custom group"
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
