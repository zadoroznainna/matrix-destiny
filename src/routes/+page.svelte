<script>
	import Matrix from './Matrix.svelte';
	import Tariff from './tariff/+page.svelte';
	import About from './about/+page.svelte';
	import Statistics from './statistics/+page.svelte';
	import Hero from './hero/+page.svelte';
	import Steps from './steps/+page.svelte';
	import AboutMatrix from './aboutMatrix/+page.svelte';
	import ZoneMatrix from './ZoneMatrix/+page.svelte';
	import Testimonials from './testimonials/+page.svelte';
	import Subscription from './subscription/+page.svelte';
	import Faq from "./faq/+page.svelte";
	import Footer from "./footer/+page.svelte";
	import Services from "./services/+page.svelte";
	import Education from "./education/+page.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<!-- <Datepicker datepickerFormat="dd/mm/yyyy" datepickerTitle="Дата народження" $$restProps="dasd" /> -->
	<Hero />
	<Statistics />
	<About />
	<AboutMatrix />
	<ZoneMatrix />
	<Subscription />
	<Services/>
	<Steps />
	<Tariff />
	<Testimonials />
	<Education/>
	<Faq/>
	<Matrix />
	<Footer/>
</div>
