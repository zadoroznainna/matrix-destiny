<script>
	import { scrollToSection } from '$lib/utils/scroll.js';
	import { menuItems } from '$lib/utils/menuItems.js';
	import Logo from '$lib/components/Logo.svelte';
	import { fade, slide } from 'svelte/transition';

	let isMobileMenuShown = false;

	const showMobileMenu = () => (isMobileMenuShown = true);
	const closeMobileMenu = () => (isMobileMenuShown = false);

	const handleMobileScroll = (anchor) => {
		scrollToSection(anchor);
		closeMobileMenu();
	};
</script>

<header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-8" aria-label="Global">
		<div class="flex lg:flex">
			<a href="/" class="-m-1.5 p-1.5" aria-label="Логотип сайту">
				<span class="sr-only">Інна Задорожна</span>
				<Logo rectClass="stroke-slate-600" letterClass="fill-slate-600" svgClass="w-16 h-16" />
			</a>
		</div>
		<div class="hidden lg:flex flex-1 justify-center gap-6 lg:gap-x-8">
			{#each menuItems as item}
				<a
					href={item.hrefLink}
					on:click={scrollToSection}
					class="text-sm font-semibold leading-6 text-slate-600 transition-all duration-300 hover:text-slate-800"
					aria-label={`Перейти до розділу ${item.title}`}>{item.title}</a
				>
			{/each}
		</div>

		<div class="hidden sm:flex sm:justify-end ml-auto">
			<a
				href="https://t.me/inna_zadorozhna13"
				target="_blank"
				aria-label="Зв'язатися через Telegram"
				class="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden
         text-white rounded-md border border-orange-400 bg-orange-400 focus:shadow-custom group w-48 font-semibold"
			>
				<span
					class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"
					aria-hidden="true"
				></span>
				<span class="absolute inset-0 w-full h-full rounded-md opacity-30" aria-hidden="true"
				></span>
				<span class="relative transition-all duration-300 group-hover:text-orange-400">
					Зв'язатись
				</span>
			</a>
		</div>

		<div class="flex ml-5 lg:hidden">
			<button
				type="button"
				on:click={showMobileMenu}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-600"
				aria-label="Відкрити меню"
			>
				<span class="sr-only">Відкрити меню</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</nav>

	<!-- Mobile menu, show/hide based on menu open state. -->
	{#if isMobileMenuShown}
		<div role="dialog" aria-modal="true">
			<div transition:fade={{ duration: 400 }} class="fixed inset-0 z-20 bg-slate-500/50"></div>
			<div
				transition:slide={{ duration: 400, axis: 'x' }}
				class="fixed inset-y-0 right-0 z-20 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-slate-900/10"
			>
				<div transition:fade={{ duration: 600 }} class="p-4">
					<div class="flex items-center justify-between">
						<div class="flex items-center justify-center flex-grow">
							<a
								on:click={closeMobileMenu}
								href="/"
								class="-m-1.5 p-1.5 pl-4"
								aria-label="Логотип сайту"
							>
								<span class="sr-only">Інна Задорожна</span>
								<Logo
									rectClass="stroke-slate-600"
									letterClass="fill-slate-600"
									svgClass="w-14 h-14"
								/>
							</a>
						</div>

						<button
							on:click={closeMobileMenu}
							type="button"
							class="-m-2.5 rounded-md p-2.5 text-slate-700"
							aria-label="Закрити меню"
						>
							<span class="sr-only">Закрити меню</span>
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					<div class="mt-6 px-4 flow-root">
						<div class="mx-auto mb-6">
							<a
								href="#calculator"
								on:click={(e) => {
									closeMobileMenu();
									scrollToSection(e);
								}}
								aria-label="Розрахувати матрицю долі"
								class="block px-3 py-2 text-base w-full font-semibold leading-7 text-center text-orange-400 border border-orange-400 rounded-lg transition-all duration-300 hover:text-orange-500 hover:border-orange-500"
							>
								Розрахувати матрицю долі
							</a>
						</div>
						<div class="-my-6 divide-y divide-slate-500/10">
							<div class="space-y-4 py-6">
								{#each menuItems as item}
									{#if item.id !== 2}
										<a
											href={item.hrefLink}
											on:click={(e) => {
												closeMobileMenu();
												scrollToSection(e);
											}}
											aria-label={`Перейти до розділу ${item.title}`}
											class="group -mx-3 flex items-center justify-center gap-x-6 transition-all duration-300 rounded-lg p-3 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-50"
										>
											{item.title}
										</a>
									{/if}
								{/each}
							</div>
						</div>
					</div>
				</div>
				<div
					transition:fade={{ duration: 600 }}
					class="sticky bottom-0 mb-4 px-4 bg-gray-50 text-center"
				>
					<a
						href="https://t.me/inna_zadorozhna13"
						target="_blank"
						aria-label="Звʼязатись"
						class="block p-3 text-base font-semibold leading-7 text-white bg-slate-400 rounded-lg hover:bg-orange-400 transition-all duration-400"
						>Звʼязатись</a
					>
				</div>
			</div>
		</div>
	{/if}
</header>
