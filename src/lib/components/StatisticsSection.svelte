<script>
	import PeopleIcon from '$lib/components/icons/statistics/PeopleIcon.svelte';
	import CalendarIcon from '$lib/components/icons/statistics/CalendarIcon.svelte';
	import SuccessIcon from '$lib/components/icons/statistics/SuccessIcon.svelte';

	import Countup from 'svelte-countup';

	let startYear = 2021;
	let currentYear = new Date().getFullYear();
	let years = currentYear - startYear;

	const items = [
		{
			count: '100',
			sign: "+",
			name: 'Проведених особистих консультацій',
			icon: PeopleIcon,
			gradient: 'from-rose-400 via-fuschia-700 to-red-600',
			iconColor: 'text-rose-500'
		},
		{
			count: `${years}`,
			sign: "+",
			name: 'Років в нумеролії',
			icon: CalendarIcon,
			gradient: 'from-blue-500 via-sky-400 to-blue-500',
			iconColor: 'text-blue-500'
		},
		{
			count: '95',
			sign: "%",
			name: 'Клієнтів знайшли відповіді на свої питання',
			icon: SuccessIcon,
			gradient: 'from-teal-400 via-green-500 to-lime-500',
			iconColor: 'text-green-400'
		}
	];
</script>

<section class="py-20 bg-slate-50 mx-2 rounded-3xl">
	<div class="container mx-auto px-4">
		<ul class="flex flex-col space-y-16 justify-between items-center md:flex-row md:space-y-0">
			<li></li>
			{#each items as item}
				<li class="flex flex-col items-center flex-1 md:self-start">
					<div class="flex items-center justify-center mb-2">
						<svelte:component
							this={item.icon}
							classes={`w-10 h-10 lg:w-16 lg:h-16 text-blue-500 ${item.iconColor}`}
						/>
					</div>
					<h3
						class={`text-6xl lg:text-8xl bg-gradient-to-r inline-block text-transparent bg-clip-text ${item.gradient}`}
					>
						<Countup
							initial={0}
							value={item.count}
							duration={3000}
							step={1}
							roundto={1}
							format={true}
						/>
						<span>{item.sign}</span>
					</h3>
					<p class="mt-4 uppercase text-center text-slate-700">{item.name}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
