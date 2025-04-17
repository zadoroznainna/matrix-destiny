export function scrollToSection(e) {
	const link = e.currentTarget;
	const anchorId = new URL(link.href).hash.replace('#', '');
	const anchor = document.getElementById(anchorId);
	window.scrollTo({ top: anchor.offsetTop, behavior: 'smooth' });
}