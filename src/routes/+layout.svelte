<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import Footer from './footer/+page.svelte';
	import './styles.css';
</script>

<div class="app font-body">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
