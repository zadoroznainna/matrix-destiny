<script>
	import peopleIcon from "$lib/icons/people.png";
	import successIcon from "$lib/icons/success.png";
	import likeIcon from "$lib/icons/like.png";
</script>

<svelte:head>
	<title>Statistics</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="py-16 bg-amber-100">
	<div class="container mx-auto px-4">
		<ul class="flex justify-between place-items-center">
			<li class="basis-4/12">
				<div class="flex items-center justify-center mb-2">
					<img src={peopleIcon} alt="Photo about" height="50" width="50"/>
				</div>
				<h3 class="text-4xl text-amber-600 fw-bold text-center mb-2">100+</h3>
				<p class="text-center">проведених особистих консультацій</p>
			</li>
			<li class="basis-4/12">
				<div class="flex items-center justify-center mb-2">
					<img src={likeIcon} alt="Photo about" height="50" width="50"/>
				</div>
				<h3 class="text-4xl text-amber-600 fw-bold text-center mb-2">3+</h3>
				<p class="text-center">років в нумеролії</p>
			</li>
			<li class="basis-4/12">
				<div class="flex items-center justify-center mb-2">
					<img src={successIcon} alt="Photo about" height="50" width="50"/>
				</div>
				<h3 class="text-4xl text-amber-600 fw-bold text-center mb-2">95%</h3>
				<p class="text-center">клієнтів знайшли відповіді на свої питання</p>
			</li>
		</ul>
	</div>
</section>
