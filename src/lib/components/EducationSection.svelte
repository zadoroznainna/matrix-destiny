<script>
	import educationFirst from '$lib/images/education_1.jpg';
	import educationSecond from '$lib/images/education_2.jpg';
	import educationThird from '$lib/images/education_3.jpg';

	import Animate from '$lib/components/Animate.svelte';
</script>

<section class="py-16 lg:py-20 bg-slate-600 rounded-[40px] mx-2">
	<div class="mx-auto px-4">
		<Animate variant="top" duration={1}>
			<h2
				class="text-3xl lg:text-4xl font-bold font-heading tracking-wide text-slate-50 text-center uppercase mb-8 lg:mb-10"
			>
				Мої сертифікати
			</h2>
		</Animate>

		<div
			class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto px-8 sm:px-20 md:px-0"
		>
			<Animate variant="scale" duration={1.5} delay={0.2}>
				<div
					class="rounded-3xl p-2 shadow-md grayscale hover:grayscale-0 hover:scale-105 duration-300 cursor-pointer"
				>
					<img
						src={educationFirst}
						alt="Зображення сертифікату про навчання - чакри в матриці"
						class="w-full rounded-3xl h-full object-cover"
						width="341"
						height="241"
					/>
				</div>
			</Animate>
			<Animate variant="scale" duration={1.5} delay={0.4}>
				<div
					class="rounded-3xl p-2 shadow-md grayscale hover:grayscale-0 hover:scale-105 duration-300 cursor-pointer"
				>
					<img
						src={educationSecond}
						alt="Зображення сертифікату про навчання - матриця долі"
						class="w-full rounded-3xl h-full object-cover"
						width="341"
						height="241"
					/>
				</div>
			</Animate>
			<Animate variant="scale" duration={1.5} delay={0.6}>
				<div
					class="rounded-3xl p-2 shadow-md grayscale hover:grayscale-0 hover:scale-105 duration-300 cursor-pointer"
				>
					<img
						src={educationThird}
						alt="Зображення сертифікату про навчання- цвяхостояння"
						class="w-full rounded-3xl h-full object-cover"
						width="341"
						height="241"
					/>
				</div>
			</Animate>
		</div>
	</div>
</section>
