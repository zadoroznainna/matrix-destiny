<script>
	import photoContacts from '$lib/images/photoContacts.jpeg';
	import Instagram from '$lib/components/socialIcons/Instagram.svelte';
	import Telegram from '$lib/components/socialIcons/Telegram.svelte';
	import Envelope from '$lib/components/socialIcons/Envelope.svelte';
	import ArrowRight from '../icones/ArrowRight.svelte';

	const contacts = [
		{
			title: 'Зв’яжіться в Instagram',
			icon: Instagram
		},

		{
			title: 'Зв’яжіться в Telegram',
			icon: Telegram
		},

		{
			title: 'Зв’яжіться в Gmail',
			icon: Envelope
		}
	];
</script>

<section class="pt-8 pb-16">
	<div class="mx-auto px-4 px-xl-8 max-w-7xl">
		<div class="flex flex-col md:flex-row justify-between items-stretch gap-10">
			<div class="basis-1/2 rounded-3xl flex flex-col justify-center">
				<h2 class="text-3xl font-bold uppercase text-left mb-14">Контактні дані та соціальні мережі</h2>
				<p class="mb-3 font-semibold">Маєте питання або бажаєте записатися на консультацію?</p>
				<p>Просто перейдіть за зручним для вас посиланням, і я зв’яжуся з вами, щоб узгодити зручний час!</p>
				<div class="flex flex-col space-y-6 pr-12 mt-16">
					{#each contacts as contact}
						<div class="border border-sky-700 rounded-md px-4 py-5">
							<a
								href="#"
								class="w-full h-full flex justify-center items-center text-sky-700"
							>
							<div class="flex justify-between items-center w-full">
								<div class="flex">
									<svelte:component this={contact.icon} classes="w-8 h-8" colorFill="#0369a1" />
									<p class="leading-8 ml-6 mb-0">{contact.title}</p>
								</div>
								<ArrowRight classes="w-8 h-8" />
							</div>
							</a>
						</div>
					{/each}
				</div>
			</div>
			<div class="basis-1/2">
				<img src={photoContacts} alt="Photo contacts" class="w-full rounded-3xl h-full object-cover" />
			</div>
		</div>
	</div>
</section>
