<script>
	import Matrix from './Matrix.svelte';
	import Tariff from './tariff/+page.svelte';
	import About from './about/+page.svelte';
	import Statistics from './statistics/+page.svelte';
	import Hero from './hero/+page.svelte';
	import Steps from './steps/+page.svelte';
	import AboutMatrix from './aboutMatrix/+page.svelte';
	import ZoneMatrix from './zoneMatrix/+page.svelte';
	import Testimonials from './testimonials/+page.svelte';
	import Subscription from './subscription/+page.svelte';
	import Faq from "./faq/+page.svelte";
	import Services from "./services/+page.svelte";
	import Education from "./education/+page.svelte";
	import Contacts from "./contacts/+page.svelte";
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';
	import Error from "./+error.svelte";
</script>

<svelte:head>
	<title>Інна Задорожна – Експерт з Матриці Долі | Аналіз та Консультації</title>
	<meta name="description" content="Інна Задорожна – експерт з аналізу Матриці Долі. Допоможу розкрити ваші таланти, знайти покликання, покращити стосунки та фінанси. Отримайте персональну консультацію та змініть своє життя на краще!" />
</svelte:head>

<div>
	<Hero />
	<Statistics />
	<About />
	<AboutMatrix />
	<ZoneMatrix />
	<Matrix />
	<Subscription />
	<Services/>
	<Steps />
	<Tariff />
	<Faq/>
	<Education/>
	<Testimonials />
	<Contacts/>
	<ScrollToTopButton/>
	<!-- <Error/> -->
</div>
