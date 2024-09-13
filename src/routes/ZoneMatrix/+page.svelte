<script>
	import Portrait from "../icones/zones/Portrait.svelte";
	import Talents from "../icones/zones/Talents.svelte";
	import ComfortZone from "../icones/zones/ComfortZone.svelte";
	import Material from "../icones/zones/Material.svelte";
	import Money from "../icones/zones/Money.svelte";
	import Karma from "../icones/zones/Karma.svelte";
	import FamilyPrograms from "../icones/zones/FamilyPrograms.svelte";
	import ChildParent from "../icones/zones/ChildParent.svelte";
	import Relations from "../icones/zones/Relations.svelte";
	import Appointment from "../icones/zones/Appointment.svelte";
	import zones from '$lib/images/zones_m.jpeg';

	const zoneData = [
		{
			icon: Portrait,
			backgroundClass: "bg-red-100",
			title: "Портрет",
			description: "Візитна картка, найяскравіша енергія, яка показує, якою/яким Ви є. Коли важко, коли потрібна підтримка – у вас завжди є ресурс."
		},

		{
			icon: Talents,
			backgroundClass: "bg-cyan-100",
			title: "Таланти",
			description: "Те що дано вам вищими силами і пов'язаний із підсвідомістю, світогляд, самовираження."
		},

		{
			icon: ComfortZone,
			backgroundClass: "bg-orange-100",
			title: "Зона комфорту",
			description: "Ця енергія допоможе зрозуміти, як Ви проявляєтеся в соціумі. Показує соціальні завдання та вчинки, які ви маєте зробити для людей."
		},

		{
			icon: Material,
			backgroundClass: "bg-lime-100",
			title: "Матеріальна карма",
			description: "Що сприяє матеріальному достатку та фізичному здоров’ю? Ця енергія покаже, що може заважати вам отримувати матеріальні блага в житті."
		},

		{
			icon: Money,
			backgroundClass: "bg-green-100",
			title: "«Грошовий канал»",
			description: "Ця енергія покаже через що до вас будуть приходити гроші, вказуючи на стан, поведінку та дії, що допомагають розкрити енергію грошового каналу."
		},

		{
			icon: Karma,
			backgroundClass: "bg-indigo-100",
			title: "Кармічний хвіст",
			description: "Це задачі котрі ми повинні виконати в цьому втіленні. Пропрацювавши кармічний хвіст, ми збудуємо міцний фундамент для нашого життя."
		},

		{
			icon: FamilyPrograms,
			backgroundClass: "bg-neutral-100",
			title: "Родові програми",
			description: "У матриці є лінія чоловічого роду та лінія жіночого роду. Якщо ці лінії не опрацьовані, то у вас можуть виникати проблеми з фінансами, відносинами."
		},

		{
			icon: ChildParent,
			backgroundClass: "bg-sky-100",
			title: "Дитячо-батьківська зона",
			description: "Образи на батьків, чого навчатимуть вас ваші діти."
		},

		{
			icon: Relations,
			backgroundClass: "bg-rose-100",
			title: "Канал відносин",
			description: "Що блокує вам гармонійну побудову нових міжособистих відносин та сприяє конфліктам у вже існуючих відносинах?"
		},

		{
			icon: Appointment,
			backgroundClass: "bg-amber-100",
			title: "Призначення",
			description: "Особисте, соціальне та духовне."
		},
	];

	let visibleCount = 7;
	let showingAll = false;

	function toggleItems() {
		if (showingAll) {
			visibleCount = 7;
		} else {
			visibleCount = zoneData.length;
		}
		showingAll = !showingAll;
	}
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="py-16">
	<div class="container mx-auto px-4">
		<!-- <h2 class="text-3xl font-bold uppercase text-center mb-10">Зони в матриці долі</h2> -->
		<!-- <div class="relative">
			<div class="flex gap-6 carousel py-6">
				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-red-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-red-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">Портрет</h4>
						<p class="text-center">
							«Візитна картка, найяскравіша енергія, яка показує, якою/яким Ви є. Коли важко, коли
							потрібна підтримка – у вас завжди є ресурс.
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-cyan-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-cyan-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">Таланти</h4>
						<p class="text-center">
							Те що дано вам вищими силами і пов'язаний із підсвідомістю, світогляд, самовираження.
						</p>
					</div>
				</div>

				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-orange-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-orange-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">Зона комфорту</h4>
						<p class="text-center">
							Ця енергія допоможе зрозуміти, як Ви проявляєтеся в соціумі. Показує соціальні
							завдання та вчинки, які ви маєте зробити для людей.
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-lime-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-lime-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">Матеріальна карма</h4>
						<p class="text-center">
							Що сприяє матеріальному достатку та фізичному здоров’ю? Ця енергія покаже, що може
							заважати вам отримувати матеріальні блага в житті.
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-green-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-green-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">«Грошовий канал»</h4>
						<p class="text-center">
							Ця енергія покаже через що до вас будуть приходити гроші, вказуючи на стан, поведінку
							та дії, що допомагають розкрити енергію грошового каналу.
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-indigo-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-indigo-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">Кармічний хвіст</h4>
						<p class="text-center">
							Це задачі котрі ми повинні виконати в цьому втіленні. Пропрацювавши кармічний хвіст,
							ми збудуємо міцний фундамент для нашого життя.
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-neutral-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-neutral-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">Родові програми</h4>
						<p class="text-center">
							У матриці є лінія чоловічого роду та лінія жіночого роду. Якщо ці лінії не
							опрацьовані, то у вас можуть виникати проблеми з фінансами, відносинами.
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-sky-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-sky-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">Дитячо-батьківська зона</h4>
						<p class="text-center">Образи на батьків, чого навчатимуть вас ваші діти.</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-rose-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-rose-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">Канал відносин</h4>
						<p class="text-center">
							Що блокує вам гармонійну побудову нових міжособистих відносин та сприяє конфліктам у
							вже існуючих відносинах?
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="w-80 shadow-xl flex flex-col items-center gap-6 px-5 py-7 rounded-xl">
						<div class="w-48 h-20 flex items-center justify-center">
							<div class="flex rounded-full h-16 w-16 bg-amber-100 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8 text-amber-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
									/>
								</svg>
							</div>
						</div>
						<h4 class="text-xl font-bold">Призначення</h4>
						<p class="text-center">Особисте, соціальне та духовне.</p>
					</div>
				</div>
			</div>

			<div class="carousel-bg absolute top-0 right-0 h-full w-12" />
		</div> -->

		<div class="grid grid-cols-3 gap-10">
			<div class="row-start-1 row-end-3 flex flex-col justify-between">
				<h2 class="text-3xl font-bold uppercase">Зони в матриці долі</h2>
				<div class="flex flex-col gap-9">
					<!-- <p class="text-xl text-slate-400">
						Зони в матриці долі відображають ключові аспекти життя, що допомагають зрозуміти
						внутрішні потенціали та життєві виклики. -->
					<!-- </p>
					<p class="text-xl text-slate-400">
						Вони слугують орієнтиром для саморозвитку,
						дозволяючи краще усвідомити свою роль і призначення.
					</p> -->
					<img src={zones} class="rounded-3xl h-full object-cover" alt="Zones matrix">
				</div>
			</div>

			{#each zoneData.slice(0, visibleCount) as item, index (item)}
			<div class="shadow-xl flex flex-col gap-6 p-10 rounded-xl h-full transition hover:scale-105 duration-300">
				<div class="flex items-center gap-4">
					<div class="flex items-center justify-center">
						<div class={`flex rounded-full h-16 w-16 ${item.backgroundClass} items-center justify-center`}>
							<svelte:component this={item.icon} />
						</div>
					</div>
					<h4 class="text-xl font-bold">{item.title}</h4>
				</div>
				<p>{item.description}</p>
			</div>
			{/each}
		</div>

		<div class="flex justify-center mt-10">
			<button on:click={toggleItems} class="py-3 border border-orange-400 px-7 text-orange-400 mx-auto rounded-md">
				{showingAll ? "Приховати" : "Переглянути всі"}
			</button>
		</div>
	</div>
</section>
