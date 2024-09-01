<script>
	import photoHero from '$lib/images/photoHero.jpeg';
	import toDoIcon from '$lib/icons/toDo.svg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="pt-8 pb-16">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-stretch gap-10">
			<div class="basis-1/2 p-10 bg-neutral-100 rounded-3xl flex flex-col justify-center">
				<h1 class="text-7xl text-start font-extrabold mb-10">Інна Задорожна</h1>
				<p class="text-2xl tracking-wide leading-8">
					Cпеціаліст з матриці долі та майстриня з трансформації вашого життя
				</p>
				<p class="mt-8 font-semibold">За допомогою матриці долі я зможу розказати вам:</p>
				<ul class="mb-8 space-y-3 mt-4">
					<li class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5 mr-3 text-green-400"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clip-rule="evenodd"
							/>
						</svg>

						<p>Як побудувати гармонійні відносини</p>
					</li>
					<li class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5 mr-3 text-green-400"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clip-rule="evenodd"
							/>
						</svg>
						<p>Які ваші таланти</p>
					</li>
					<li class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5 mr-3 text-green-400"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clip-rule="evenodd"
							/>
						</svg>
						<p>Які задачі потрібно виконати в цьому втіленні</p>
					</li>
					<li class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5 mr-3 text-green-400"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clip-rule="evenodd"
							/>
						</svg>
						<p>Що може блокувати ваші фінанси</p>
					</li>
				</ul>
				<button
					class="self-start text-xl border-2 border-solid border-amber-600 text-amber-600 py-3 px-6 rounded-md"
					>Дізнатися більше</button
				>
			</div>
			<div class="basis-1/2">
				<img src={photoHero} alt="Photo about" class="w-full rounded-3xl h-full object-cover" />
			</div>
		</div>
	</div>
</section>
