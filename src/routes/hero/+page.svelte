<script>
	import photoHero from "$lib/images/photoHero.png";
	import toDoIcon from "$lib/icons/toDo.svg";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="pt-8 pb-16">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-stretch gap-10">
			<div class="basis-1/2 p-10 bg-neutral-300 rounded-3xl flex flex-col justify-center">
				<h1 class="text-7xl text-start font-extrabold mb-10">Інна Задорожна</h1>
				<p class="text-2xl tracking-wide leading-8 mb-12">
					Cпеціаліст з матриці долі та майстриня з трансформації вашого життя
				</p>
				<p>
					За допомогою матриці долі я зможу розказати вам:
				</p>
				<ul class="mb-8">
					<li class="flex items-center">
						<img src={toDoIcon} class="mr-2" alt="Icon to do" height="16" width="16"/>
						<p>Як побудувати гармонійні відносини</p>
					</li>
					<li class="flex items-center">
						<img src={toDoIcon} class="mr-2" alt="Icon to do" height="16" width="16"/>
						<p>Які ваші таланти</p>
					</li>
					<li class="flex items-center">
						<img src={toDoIcon} class="mr-2" alt="Icon to do" height="16" width="16"/>
						<p>Які задачі потрібно виконати в цьому втіленні</p>
					</li>
					<li class="flex items-center">
						<img src={toDoIcon} class="mr-2" alt="Icon to do" height="16" width="16"/>
						<p>Що може блокувати ваші фінанси</p>
					</li>
				</ul>
				<button class="self-start text-xl border-2 border-solid border-amber-600 text-amber-600 py-3 px-6 rounded-md">Дізнатися більше</button>
			</div>
			<div class="basis-1/2">
				<img src={photoHero} alt="Photo about" class="w-full rounded-3xl h-full object-cover"/>
			</div>
		</div>
	</div>
	
</section>
