<script>
	import PeopleIcon from '$lib/components/statisticsIcons/PeopleIcon.svelte';
	import LikeIcon from '$lib/components/statisticsIcons/LikeIcon.svelte';
	import SuccessIcon from '$lib/components/statisticsIcons/SuccessIcon.svelte';

	const items = [
		{
			count: '100+',
			name: 'Проведених особистих консультацій',
			icon: PeopleIcon,
			gradient: 'from-rose-400 via-fuschia-700 to-red-600',
			iconColor: 'text-rose-500'
		},
		{
			count: '3+',
			name: 'Років в нумеролії',
			icon: LikeIcon,
			gradient: 'from-blue-500 via-sky-400 to-blue-500',
			iconColor: 'text-blue-500'
		},
		{
			count: '95%',
			name: 'Клієнтів знайшли відповіді на свої питання',
			icon: SuccessIcon,
			gradient: 'from-teal-400 via-green-500 to-lime-500',
			iconColor: 'text-lime-500'
		}
	];
</script>

<svelte:head>
	<title>Statistics</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="py-32 bg-slate-50 border">
	<div class="container mx-auto px-8 max-w-7xl">
		<ul class="flex flex-col space-y-16 justify-between items-center md:flex-row md:space-y-0">
			{#each items as item}
				<li class="flex flex-col items-center">
					<div class="flex items-center justify-center mb-2">
						<svelte:component
							this={item.icon}
							classes={`w-16 h-16 text-blue-500 ${item.iconColor}`}
						/>
					</div>
					<h3
						class={`text-6xl md:text-8xl xl:text-9xl bg-gradient-to-r inline-block text-transparent bg-clip-text ${item.gradient}`}
					>
						{item.count}
					</h3>
					<p class="mt-4 uppercase text-center text-neutral-600">{item.name}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
