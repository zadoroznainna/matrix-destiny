<script>
	import educationFirst from '$lib/images/education_1.jpg';
	import educationSecond from '$lib/images/education_2.jpg';
	import educationThird from '$lib/images/education_3.jpg';
</script>

<section class="pb-16 bg-gray-900 bg-opacity-85">
	<div class="mx-auto px-4">
		<h2 class="text-3xl font-bold text-gray-100 text-center uppercase mb-8 pt-10">
			Мої сертифікати
		</h2>
		<div class="flex flex-column justify-center h-full">
			<div class="grid grid-cols-3 gap-10 max-w-6xl mx-auto">
				<div
					class="rounded-3xl grayscale hover:grayscale-0 hover:scale-105 duration-300 cursor-pointer"
				>
					<img
						src={educationFirst}
						alt="Сертифікат - чакри в матриці"
						class="w-full rounded-3xl h-full object-cover"
					/>
				</div>
				<div
					class="rounded-3xl grayscale hover:grayscale-0 hover:scale-105 duration-300 cursor-pointer"
				>
					<img
						src={educationSecond}
						alt="Сертифікат - матриця долі"
						class="w-full rounded-3xl h-full object-cover"
					/>
				</div>
				<div
					class="rounded-3xl grayscale hover:grayscale-0 hover:scale-105 duration-300 cursor-pointer"
				>
					<img
						src={educationThird}
						alt="Сертифікат- цвяхостояння"
						class="w-full rounded-3xl h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
