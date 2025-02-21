<script>
	import Hero from '$lib/components/HeroSection.svelte';
	import Statistics from '$lib/components/StatisticsSection.svelte';
	import About from '$lib/components/AboutSection.svelte';
	import AboutMatrix from '$lib/components/AboutMatrixSection.svelte';
	import ZoneMatrix from '$lib/components/ZoneMatrixSection.svelte';
	import Matrix from '$lib/components/Matrix.svelte';
	import Tariff from '$lib/components/TariffsSection.svelte';
	import Steps from '$lib/components/StepsSection.svelte';
	import Testimonials from '$lib/components/TestimonialsSection.svelte';
	import Subscription from '$lib/components/SubscriptionSection.svelte';
	import Faq from '$lib/components/FaqSection.svelte';
	import Services from '$lib/components/ServicesSection.svelte';
	import Education from '$lib/components/EducationSection.svelte';
	import Contacts from '$lib/components/ContactsSection.svelte';
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';
</script>

<svelte:head>
	<title>Інна Задорожна – Експерт з Матриці Долі | Аналіз та Консультації</title>
	<meta
		name="description"
		content="Інна Задорожна – експерт з аналізу Матриці Долі. Допоможу розкрити ваші таланти, знайти покликання, покращити стосунки та фінанси. Отримайте персональну консультацію та змініть своє життя на краще!"
	/>
</svelte:head>

<div>
	<Hero />
	<Statistics />
	<About />
	<AboutMatrix />
	<ZoneMatrix />
	<Matrix />
	<Subscription />
	<Services />
	<Steps />
	<Tariff />
	<Faq />
	<Education />
	<Testimonials />
	<Contacts />
	<ScrollToTopButton />
</div>
