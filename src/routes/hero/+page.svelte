<script>
	import photoHero from '$lib/images/photoHero.jpeg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="pt-8 pb-16">
	<div class="mx-auto px-4 px-8 max-w-7xl">
		<div class="flex flex-col md:flex-row justify-between items-stretch gap-10">
			<div class="basis-1/2 rounded-3xl flex flex-col justify-center">
				<h1 class="text-7xl text-start font-bold mb-10">Інна Задорожна</h1>
				<p class="text-2xl tracking-wide leading-8">
					Cпеціаліст з матриці долі та майстриня з трансформації вашого життя
				</p>
				<p class="mt-8 font-semibold">За допомогою матриці долі я зможу розказати вам:</p>
				<ul class="mb-8 space-y-3 mt-4">
					<li class="flex items-center bg-rose-100 p-2 rounded-full">
						<div class="p-2 bg-rose-200 rounded-full mr-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5 h-5 text-rose-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
						</div>
						<p>Як побудувати гармонійні відносини</p>
					</li>
					<li class="flex items-center bg-blue-100 p-2 rounded-full">
						<div class="p-2 bg-blue-200 rounded-full mr-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5 h-5 text-blue-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
								/>
							</svg>
						</div>
						<p>Які ваші таланти</p>
					</li>
					<li class="flex items-center bg-orange-100 p-2 rounded-full">
						<div class="p-2 bg-orange-200 rounded-full mr-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5 text-orange-400"
							>
								<path
									fill-rule="evenodd"
									d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<p>Які задачі потрібно виконати в цьому втіленні</p>
					</li>
					<li class="flex items-center bg-green-100 p-2 rounded-full">
						<div class="p-2 bg-green-200 rounded-full mr-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5 h-5 text-green-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						</div>
						<p>Що може блокувати ваші фінанси</p>
					</li>
				</ul>
				<button class="group w-full lg:w-1/2 relative rounded-2xl inline-block overflow-hidden border border-[#1A5572] px-8 py-3 font-xl 
				text-purple-600">
					<span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#1A5572] opacity-90 transition-all 
					duration-500 ease-out group-hover:w-full"></span>
					<span class="relative text-[#1A5572] transition-all duration-500 group-hover:text-white">Перейти до послуг</span>
				</button>
			</div>
			<div class="basis-1/2">
				<img src={photoHero} alt="Photo about" class="w-full rounded-3xl h-full object-cover" />
			</div>
		</div>
	</div>
</section>
