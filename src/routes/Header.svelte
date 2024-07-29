<script>
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center py-3">
			<div>
				<a href="/">
					<img src={logo} height="70" width="70" alt="Logo"/>
				</a>
			</div>
			<nav>
				<ul class="flex">
					<li>
						<a href="/" class="px-4">Про мене</a>
					</li>
					<li>
						<a href="#" class="px-4">Статистика</a>
					</li>
					<li>
						<a href="#" class="px-4">Про Матрицю</a>
					</li>
					<li>
						<a href="#" class="px-4">Тарифи</a>
					</li>
					<li>
						<a href="#" class="px-4">Етапи роботи</a>
					</li>
					<li>
						<a href="#" class="px-4">Контакти</a>
					</li>
				</ul>
			</nav>
			<div>
				<button class="px-7 py-2 bg-amber-600 text-lg text-white rounded-lg">Зв'язатись</button>
			</div>
		</div>
	</div>
</header>
