<script>
	import photoContacts from '$lib/images/photoContacts.jpeg';
	import Instagram from '$lib/components/icons/social/Instagram.svelte';
	import Telegram from '$lib/components/icons/social/Telegram.svelte';
	import Envelope from '$lib/components/icons/social/Envelope.svelte';
	import ArrowRightCircle from '$lib/components/icons/ArrowRightCircle.svelte';

	import Animate from '$lib/components/Animate.svelte';

	const contacts = [
		{
			title: 'Зв’яжіться в Instagram',
			icon: Instagram,
			href: 'https://www.instagram.com/zadoroznainna/',
			name: "Instagram"
		},

		{
			title: 'Зв’яжіться в Telegram',
			icon: Telegram,
			href: 'https://t.me/inna_zadorozhna13',
			name: "Telegram"
		},

		{
			title: 'Зв’яжіться в Gmail',
			icon: Envelope,
			href: 'mailto:zadoroznainna131@gmail.com',
			name: "Gmail"
		}
	];
</script>

<section class="py-16 lg:py-20" id="contacts">
	<div class="mx-auto px-4 px-xl-8 max-w-7xl">
		<div class="flex flex-col lg:flex-row justify-between items-stretch gap-10 xl:gap-14">
			<div class="basis-1/2 rounded-3xl flex flex-col justify-center">
				<Animate variant="left" duration={1}>
					<h2
						class="text-3xl text-slate-700 lg:text-4xl font-bold font-heading tracking-wide text-start uppercase mb-8 lg:mb-10"
					>
						Контактні дані та соціальні мережі
					</h2>
				</Animate>

				<p class="mb-3 font-semibold text-slate-700 font-heading tracking-wider italic">
					Маєте питання або бажаєте записатися на консультацію?
				</p>
				<p class="text-slate-600 xl:pr-16">
					Просто перейдіть за зручним для вас посиланням, і я зв’яжуся з вами, щоб узгодити зручний
					час!
				</p>
				<div class="flex flex-col space-y-6 xl:pr-16 mt-14">
					{#each contacts as contact, index (contact)}
						<Animate variant="top" duration={1.5} delay={(index + 1) * 0.2}>
							<div class="group border border-sky-700 rounded-md px-4">
								<a
									href={contact.href}
									aria-label={contact.name}
									title={contact.name}
									target="_blank"
									class="w-full h-full flex justify-center items-center text-sky-700 py-5 px-2"
								>
									<div class="flex justify-between items-center w-full">
										<div class="flex">
											<svelte:component this={contact.icon} classes="w-8 h-8" colorFill="#0369a1" />
											<p
												class="leading-8 ml-6 mb-0 transition-all duration-500 group-hover:font-bold"
											>
												{contact.title}
											</p>
										</div>
										<ArrowRightCircle
											classes="w-8 h-8 transition-transform duration-500 group-hover:translate-x-[7px]"
										/>
									</div>
								</a>
							</div>
						</Animate>
					{/each}
				</div>
			</div>
			<div class="lg:basis-1/2 h-[500px] md:h-[700px] lg:h-full">
				<img
					src={photoContacts}
					alt="Зображення Зодорожної Інни у блоці контактів"
					class="w-full rounded-3xl h-full object-cover object-top"
				/>
			</div>
		</div>
	</div>
</section>
