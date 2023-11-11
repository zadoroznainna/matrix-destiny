<script>
	export let a = 'a';
	export let a1 = 'a1';
	export let a2 = 'a2';
	export let a3 = 'a3';

	export let b = 'b';
	export let b1 = 'b1';
	export let b2 = 'b2';
	export let b3 = 'b3';

	export let c = 'c';
	export let c1 = 'c1';
	export let c2 = 'c2';

	export let d = 'd';
	export let d1 = 'd1';
	export let d2 = 'd2';

	export let e = 'e';
	export let e1 = 'e1';
	export let e2 = 'e2';

	export let f = 'f';
	export let g = 'g';
	export let y = 'y';
	export let k = 'k';

	export let s1 = 's1';
	export let s2 = 's2';
	export let s3 = 's3';
	export let s4 = 's4';

	export let p1 = 'p1';
	export let p2 = 'p2';
	export let p3 = 'p3';
	export let p4 = 'p4';

	export let x = 'x';
	export let x1 = 'x1';
	export let x2 = 'x2';

	export let years10 = {
		'1-2': '12',
		'2-3': '23',
		'3-4': '34',
		'5': '5',
		'6-7': '67',
		'7-8': '78',
		'8-9': '89'
	};

	export let years20 = {
		'11-12': '1',
		'12-13': '2',
		'13-14': '1',
		'15': '1',
		'16-17': '1',
		'17-18': '1',
		'18-19': '1'
	};

	export let years30 = {
		'21-22': '1',
		'22-23': '2',
		'23-24': '1',
		'25': '1',
		'26-27': '1',
		'27-28': '1',
		'28-29': '1'
	};

	export let years40 = {
		'31-32': '1',
		'32-33': '2',
		'33-34': '1',
		'35': '1',
		'36-37': '1',
		'37-38': '1',
		'38-39': '1'
	};

	export let years50 = {
		'41-42': '1',
		'42-43': '2',
		'43-44': '1',
		'45': '1',
		'46-47': '1',
		'47-48': '1',
		'48-49': '1'
	};

	export let years60 = {
		'51-52': '1',
		'52-53': '2',
		'53-54': '1',
		'55': '1',
		'56-57': '1',
		'57-58': '1',
		'58-59': '1'
	};

	export let years70 = {
		'61-62': '1',
		'62-63': '2',
		'63-64': '1',
		'65': '1',
		'66-67': '1',
		'67-68': '1',
		'68-69': '1'
	};

	export let years80 = {
		'71-72': '1',
		'72-73': '2',
		'73-74': '1',
		'75': '1',
		'76-77': '1',
		'77-78': '1',
		'78-79': '1'
	};

	// table health
	export let t1 = "t1";
	export let t2 = "t2";
	export let t3 = "t3";
	export let t4 = "t4";
	export let t5 = "t5";
	export let t6 = "t6";
	export let t7 = "t7";

	// table health sum
	export let ts1 = "ts1";
	export let ts2 = "ts2";
	export let ts3 = "ts3";

	// birth programs
	export let m1 = "m1";
	export let w1 = "w1";

	// Пошук себе
	export let n1 = "n1";
	export let n2 = "n2";
	export let n3 = "n3";

	// Соціалізація
	export let c4 = "c4";
	export let c5 = "c5";
	export let c6 = "c6";

	// Духовна грамотність
	export let d3 = "d3";

	// Планетарна грамотність
	export let p5 = "p5";

	// TODO: у пустому вигляді, що показуємо у матриці та таблиці - нулі чи нічого?
	// TODO: додатковий квадрат у матриці - додаємо чи залишаємо без нього?


	let birthdate = '';

	const calcNumber = (number) => {
		if (number > 22) {
			const res = String(number).split('');
			let sum = 0;
			res.forEach((elem) => {
				sum += Number(elem);
			});
			return calcNumber(sum);
		} else {
			return number;
		}
	};

	const handleSubmit = () => {
		const [year, month, day] = birthdate.split('-');
		a = calcNumber(Number(day));
		b = calcNumber(Number(month));
		c = calcNumber(Number(year));
		d = calcNumber(a + b + c);
		e = calcNumber(a + b + c + d);
		a1 = calcNumber(a + e);
		a2 = calcNumber(a + a1);
		b1 = calcNumber(b + e);
		b2 = calcNumber(b + b1);
		c1 = calcNumber(c + e);
		c2 = calcNumber(c + c1);
		d1 = calcNumber(d + e);
		d2 = calcNumber(d + d1);
		f = calcNumber(a + b);
		g = calcNumber(b + c);
		y = calcNumber(c + d);
		k = calcNumber(d + a);
		s1 = calcNumber(f + e);
		s2 = calcNumber(f + s1);
		p1 = calcNumber(g + e);
		p2 = calcNumber(g + p1);
		s4 = calcNumber(y + e);
		s3 = calcNumber(y + s4);
		p3 = calcNumber(k + e);
		p4 = calcNumber(k + p3);
		e1 = calcNumber(f + g + y + k);
		e2 = calcNumber(e1 + e);
		x = calcNumber(d1 + c1);
		x1 = calcNumber(d1 + x);
		x2 = calcNumber(c1 + x);
		a3 = calcNumber(a1 + e);
		b3 = calcNumber(b1 + e);

		// from 0 years to 10 years
		years10['5'] = calcNumber(a + f);
		years10['2-3'] = calcNumber(a + years10['5']);
		years10['1-2'] = calcNumber(a + years10['2-3']);
		years10['3-4'] = calcNumber(years10['2-3'] + years10['5']);
		years10['7-8'] = calcNumber(years10['5'] + f);
		years10['6-7'] = calcNumber(years10['7-8'] + years10['5']);
		years10['8-9'] = calcNumber(years10['7-8'] + f);

		// from 10 years to 20 years
		years20['15'] = calcNumber(f + b);
		years20['12-13'] = calcNumber(f + years20['15']);
		years20['13-14'] = calcNumber(years20['12-13'] + years20['15']);
		years20['11-12'] = calcNumber(f + years20['12-13']);
		years20['17-18'] = calcNumber(b + years20['15']);
		years20['16-17'] = calcNumber(years20['17-18'] + years20['15']);
		years20['18-19'] = calcNumber(years20['17-18'] + b);

		// from 20 years to 30 years
		years30['25'] = calcNumber(b + g);
		years30['22-23'] = calcNumber(b + years30['25']);
		years30['21-22'] = calcNumber(b + years30['22-23']);
		years30['23-24'] = calcNumber(years30['22-23'] + years30['25']);
		years30['27-28'] = calcNumber(g + years30['25']);
		years30['26-27'] = calcNumber(years30['27-28'] + years30['25']);
		years30['28-29'] = calcNumber(g + years30['27-28']);

		// from 30 years to 40 years
		years40['35'] = calcNumber(g + c);
		years40['32-33'] = calcNumber(g + years40['35']);
		years40['31-32'] = calcNumber(g + years40['32-33']);
		years40['33-34'] = calcNumber(years40['35'] + years40['32-33']);
		years40['37-38'] = calcNumber(c + years40['35']);
		years40['36-37'] = calcNumber(years40['37-38'] + years40['35']);
		years40['38-39'] = calcNumber(c + years40['37-38']);

		// from 40 years to 50 years
		years50['45'] = calcNumber(c + y);
		years50['42-43'] = calcNumber(c + years50['45']);
		years50['41-42'] = calcNumber(years50['42-43'] + c);
		years50['43-44'] = calcNumber(years50['45'] + years50['42-43']);
		years50['47-48'] = calcNumber(years50['45'] + y);
		years50['46-47'] = calcNumber(years50['45'] + years50['47-48']);
		years50['48-49'] = calcNumber(years50['47-48'] + y);

		// from 50 years to 60 years
		years60['55'] = calcNumber(y + d);
		years60['52-53'] = calcNumber(y + years60['55']);
		years60['51-52'] = calcNumber(y + years60['52-53']);
		years60['53-54'] = calcNumber(years60['52-53'] + years60['55']);
		years60['57-58'] = calcNumber(d + years60['55']);
		years60['56-57'] = calcNumber(years60['57-58'] + years60['55']);
		years60['58-59'] = calcNumber(d + years60['57-58']);

		// from 60 years to 70 years
		years70['65'] = calcNumber(d + k);
		years70['62-63'] = calcNumber(d + years70['65']);
		years70['61-62'] = calcNumber(d + years70['62-63']);
		years70['63-64'] = calcNumber(years70['62-63'] + years70['65']);
		years70['67-68'] = calcNumber(k + years70['65']);
		years70['66-67'] = calcNumber(years70['67-68'] + years70['65']);
		years70['68-69'] = calcNumber(k + years70['67-68']);

		// from 70 years to 0 years
		years80['75'] = calcNumber(k + a);
		years80['72-73'] = calcNumber(k + years80['75']);
		years80['71-72'] = calcNumber(k + years80['72-73']);
		years80['73-74'] = calcNumber(years80['75'] + years80['72-73']);
		years80['77-78'] = calcNumber(a + years80['75']);
		years80['76-77'] = calcNumber(years80['77-78'] + years80['75']);
		years80['78-79'] = calcNumber(years80['77-78'] + a);

		// table health
		t1 = calcNumber(a + b);
		t2 = calcNumber(a2 + b2);
		t3 = calcNumber(a1 + b1);
		t4 = calcNumber(a3 + b3);
		t5 = calcNumber(e + e);
		t6 = calcNumber(c1 + d1);
		t7 = calcNumber(c + d);

		// table health sum
		ts1 = calcNumber(a + a2 + a1 + a3 + e + c1 + c);
		ts2 = calcNumber(b + b2 + b1 + b3 + e + d1 + d);
		ts3 = calcNumber(t1 + t2 + t3 + t4 + t5 + t6 + t7);

		// birth programs
		m1 = calcNumber(f + y)
		w1 = calcNumber(g + k)

		n1 = calcNumber(b + d)
		n2 = calcNumber(a + c)
		n3 = calcNumber(n1 + n2)

		c4 = calcNumber(f + y)
		c5 = calcNumber(g + k)
		c6 = calcNumber(c4 + c5)

		d3 = calcNumber(n3 + c6)
		p5 = calcNumber(c6 + d3)
	};
</script>

<form on:submit={handleSubmit} class="flex justify-center m-6">
	<input type="date" bind:value={birthdate} />
	<button type="sumbit" class="ml-3 uppercase font-bold">Count</button>
</form>

<svg
	width="100%"
	height="100%"
	viewBox="0 0 829 826"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g id="diagram">
		<path
			id="polygon"
			d="M389.21 42.8627C404.524 36.5193 421.731 36.5193 437.045 42.8627L658.086 134.421C673.4 140.764 685.567 152.931 691.911 168.245L783.469 389.286C789.812 404.6 789.812 421.807 783.469 437.121L691.911 658.162C685.567 673.476 673.4 685.643 658.086 691.987L437.045 783.545C421.731 789.888 404.524 789.888 389.21 783.545L168.169 691.987C152.855 685.643 140.688 673.476 134.345 658.162L42.7865 437.122C36.4431 421.807 36.4431 404.6 42.7865 389.286L134.345 168.245C140.688 152.931 152.855 140.764 168.169 134.421L389.21 42.8627Z"
			stroke="#334155"
			stroke-width="3"
		/>
		<g id="inner-square">
			<rect
				id="inner-square-shape"
				x="174"
				y="173"
				width="478"
				height="479"
				stroke="#334155"
				stroke-width="2"
			/>
			<path id="Vector 12" d="M174 173L648 648" stroke="#334155" />
			<path id="Vector 13" d="M174 648L648 173" stroke="#334155" />
		</g>
		<path id="horizontal-line" d="M175 414.5H659.5" stroke="#334155" />
		<path
			xmlns="http://www.w3.org/2000/svg"
			id="vertical-line"
			d="M413.25 172.25L413.25 656.75"
			stroke="#334155"
		/>
		<g id="arrows">
			<g id="arrows-red-bottom">
				<path
					d="M255.999 566L272.692 561.379L260.343 549.233L255.999 566ZM374.93 442.948L264.396 555.324L266.535 557.427L377.068 445.052L374.93 442.948Z"
					fill="#DC2626"
				/>
			</g>
			<g id="arrows-red-top">
				<path
					d="M565.999 255L549.269 259.483L561.516 271.73L565.999 255ZM445.061 378.065L557.514 265.607L555.393 263.485L442.939 375.943L445.061 378.065Z"
					fill="#DC2626"
				/>
			</g>
			<g id="arrows-purple-top">
				<path
					d="M258.999 258L263.482 274.73L275.729 262.483L258.999 258ZM381.066 377.943L269.606 266.485L267.484 268.607L378.944 380.065L381.066 377.943Z"
					fill="#7E22CE"
				/>
			</g>
			<g id="arrows-purple-bottom">
				<path
					d="M567.999 568L563.516 551.27L551.269 563.517L567.999 568ZM445.939 448.061L557.392 559.515L559.514 557.393L448.061 445.939L445.939 448.061Z"
					fill="#7E22CE"
				/>
			</g>
		</g>
		<g id="a">
			<circle
				id="Ellipse 494_17"
				cx="71.845"
				cy="412.845"
				r="32.345"
				fill="#7E22CE"
				stroke="#D8B4FE"
			/>
			<text
				id="9_4"
				fill="#D8B4FE"
				style="whiteSpace: 'pre'"
				font-size="24"
				font-weight="bold"
				letter-spacing="-0.08em"
				x="70.0781"
				y="415.227"
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{a}
			</text>
			<rect x="38.5" y="379.5" width="66.69" height="66.69" rx="33.345" stroke="#6B21A8" />
		</g>

		<g id="b">
			<circle
				id="purple-top-shape"
				cx="412.845"
				cy="72.845"
				r="32.345"
				fill="#7E22CE"
				stroke="#D8B4FE"
			/>

			<text
				x="412.845"
				y="75.845"
				id="10"
				fill="#D8B4FE"
				font-size="24"
				text-anchor="middle"
				dominant-baseline="middle"
				font-weight="bold"
			>
				{b}
			</text>
			<rect x="379.5" y="39.5" width="66.69" height="66.69" rx="33.345" stroke="#6B21A8" />
		</g>

		<g id="c">
			<circle
				id="red-right-circle-shape"
				cx="754.862"
				cy="413.862"
				r="32.345"
				fill="#DC2626"
				stroke="#FCA5A5"
			/>
			<text
				id="red-right-circle-text"
				x="754.862"
				y="415.862"
				fill="#FECACA"
				font-size="24"
				font-weight="600"
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{c}
			</text>
			<rect
				x="720.94"
				y="381.104"
				width="66.69"
				height="66.69"
				rx="33.345"
				transform="rotate(-1 720.94 381.104)"
				stroke="#DC2626"
			/>
		</g>

		<g id="d">
			<circle
				id="Ellipse 497_2"
				cx="412.845"
				cy="753.845"
				r="32.345"
				fill="#DC2626"
				stroke="#FCA5A5"
			/>
			<text
				id="9_3"
				fill="#FECACA"
				style="whiteSpace: 'pre'"
				font-size="24"
				font-weight="600"
				letter-spacing="-0.08em"
				text-anchor="middle"
				dominant-baseline="middle"
				x="411.219"
				y="757.227"
			>
				{d}
			</text>
			<rect x="379.5" y="720.5" width="66.69" height="66.69" rx="33.345" stroke="#DC2626" />
		</g>

		<g id="e">
			<circle
				id="yellow-center-shape"
				cx="413.5"
				cy="414.5"
				r="48"
				fill="#FDE047"
				stroke="#FEF08A"
				stroke-width="9"
			/>
			<text
				id="9_2"
				fill="#854D0E"
				font-size="48"
				font-weight="bold"
				letter-spacing="-0.08em"
				x="411.156"
				y="420.455"
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{e}
			</text>
			<rect x="360.5" y="361.5" width="106" height="106" rx="53" stroke="#FACC15" />
		</g>

		<g id="e1">
			<circle
				id="Ellipse 494_13"
				cx="491.01"
				cy="414.01"
				r="21.51"
				fill="#F8FAFC"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				id="5_9"
				fill="#1E293B"
				style="whiteSpace: 'pre'"
				font-size="20"
				text-anchor="middle"
				dominant-baseline="middle"
				font-weight="bold"
				x="490.055"
				y="416.273"
				letter-spacing="-0.08em"
			>
				{e1}
			</text>
			<rect x="467.5" y="390.5" width="47.02" height="47.02" rx="23.51" stroke="#475569" />
		</g>

		<g id="e2">
			<g id="common-right-center-group">
				<circle
					id="common-right-center-shape"
					cx="535.5"
					cy="414.5"
					r="18"
					fill="#F8FAFC"
					stroke="#CBD5E1"
					stroke-width="3"
				/>
				<text
					id="41_5"
					fill="#1F2937"
					style="whiteSpace: 'pre'"
					font-size="16"
					font-weight="bold"
					letter-spacing="-0.08em"
					x="534"
					y="415.943"
					text-anchor="middle"
					dominant-baseline="middle"
				>
					{e2}
				</text>
			</g>
			<rect x="515.5" y="394.5" width="40" height="40" rx="20" stroke="#475569" />
		</g>

		<g id="g">
			<circle
				id="regular-top-right-shape"
				cx="654.984"
				cy="172.529"
				r="31.345"
				fill="#F1F5F9"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				x="654.984"
				y="174.529"
				id="18"
				fill="#1E293B"
				text-anchor="middle"
				dominant-baseline="middle"
				font-size="24"
				font-weight="bold"
			>
				{g}
			</text>
			<rect x="621.139" y="138.684" width="67.69" height="67.69" rx="33.845" stroke="#64748B" />
		</g>
		<g id="f">
			<circle
				id="regular-top-left-shape"
				cx="173.845"
				cy="171.845"
				r="31.345"
				fill="#F8FAFC"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				x="173.845"
				y="173.845"
				id="11"
				fill="#1E293B"
				font-size="24"
				text-anchor="middle"
				dominant-baseline="middle"
				font-weight="bold"
			>
				{f}
			</text>
			<rect x="140.5" y="138.5" width="66.69" height="66.69" rx="33.345" stroke="#475569" />
		</g>
		<path id="Vector 16" d="M651.5 414.5L413 651.5" stroke="black" strokeDasharray="5 5" />
		<g id="b2">
			<circle
				id="Ellipse 505"
				cx="412.5"
				cy="130.5"
				r="23"
				transform="rotate(90 412.5 130.5)"
				fill="#1D4ED8"
				stroke="#60A5FA"
			/>
			<text
				id="11_2"
				fill="#BFDBFE"
				style="whiteSpace: 'pre'"
				font-size="20"
				font-weight="bold"
				text-anchor="middle"
				dominant-baseline="middle"
				letter-spacing="-0.08em"
				x="411.015"
				y="133.273"
			>
				{b2}
			</text>
			<rect x="388.5" y="106.5" width="48" height="48" rx="24" stroke="#1D4ED8" />
		</g>
		<g id="a3">
			<circle
				id="green-left-shape"
				cx="272.5"
				cy="415.5"
				r="19"
				transform="rotate(90 272.5 415.5)"
				fill="#22C55E"
				stroke="#86EFAC"
			/>
			<text
				id="9"
				fill="#DCFCE7"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="-0.08em"
				text-anchor="middle"
				dominant-baseline="middle"
				x="271.219"
				y="418.318"
			>
				{a3}
			</text>
			<rect x="252.5" y="395.5" width="40" height="40" rx="20" stroke="#16A34A" />
		</g>
		<g id="d1">
			<circle
				id="orange-bottom-shape"
				cx="19.5"
				cy="19.5"
				r="19"
				transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 433 671)"
				fill="#F97316"
				stroke="#FDBA74"
			/>
			<text
				id="18_2"
				fill="#FFEDD5"
				style="whiteSpace: 'pre'"
				font-size="16"
				text-anchor="middle"
				dominant-baseline="middle"
				font-weight="bold"
				letter-Spacing="-0.08em"
				x="412.437"
				y="653.318"
			>
				{d1}
			</text>
			<rect x="393.5" y="631.5" width="40" height="40" rx="20" stroke="#F97316" />
		</g>
		<g id="p3">
			<g id="common-left-bottom-third-group">
				<circle
					id="common-left-bottom-third-shape"
					cx="241.5"
					cy="579.5"
					r="18"
					fill="#F8FAFC"
					stroke="#CBD5E1"
					stroke-width="3"
				/>
				<text
					id="41"
					fill="#1F2937"
					style="whiteSpace: 'pre'"
					font-size="16"
					font-weight="bold"
					letter-spacing="-0.08em"
					text-anchor="middle"
					dominant-baseline="middle"
					x="240"
					y="581.943"
				>
					{p3}
				</text>
			</g>
			<rect x="221.5" y="559.5" width="40" height="40" rx="20" stroke="#475569" />
		</g>
		<g id="x1">
			<g id="common-right-bottom-love-group">
				<circle
					id="common-right-bottom-love-shape"
					cx="476.5"
					cy="584.5"
					r="18"
					fill="#F8FAFC"
					stroke="#CBD5E1"
					stroke-width="3"
				/>
				<text
					id="41_2"
					fill="#1F2937"
					style="whiteSpace: 'pre'"
					font-size="16"
					font-weight="bold"
					letter-spacing="-0.08em"
					x="475"
					y="585.943"
					text-anchor="middle"
					dominant-baseline="middle"
				>
					{x1}
				</text>
			</g>
			<rect x="456.5" y="564.5" width="40" height="40" rx="20" stroke="#475569" />
		</g>
		<g id="x">
			<g id="common-right-bottom-center-group">
				<circle
					id="common-right-bottom-center-shape"
					cx="530.5"
					cy="532.5"
					r="18"
					fill="#F8FAFC"
					stroke="#CBD5E1"
					stroke-width="3"
				/>
				<text
					id="41_3"
					fill="#1F2937"
					style="whiteSpace: 'pre'"
					font-size="16"
					font-weight="bold"
					letter-spacing="-0.08em"
					x="529"
					y="534.943"
					text-anchor="middle"
					dominant-baseline="middle"
				>
					{x}
				</text>
			</g>
			<rect x="510.5" y="512.5" width="40" height="40" rx="20" stroke="#475569" />
		</g>
		<g id="x2">
			<g id="common-right-bottom-money-group">
				<circle
					id="common-right-bottom-money-shape"
					cx="584.5"
					cy="479.5"
					r="18"
					fill="#F8FAFC"
					stroke="#CBD5E1"
					stroke-width="3"
				/>
				<text
					id="41_4"
					fill="#1F2937"
					style="whiteSpace: 'pre'"
					font-size="16"
					font-weight="bold"
					letter-spacing="-0.08em"
					x="583"
					y="480.943"
					text-anchor="middle"
					dominant-baseline="middle"
				>
					{x2}
				</text>
			</g>
			<rect x="564.5" y="459.5" width="40" height="40" rx="20" stroke="#475569" />
		</g>

		<g id="s2">
			<circle
				id="common-top-left-center-shape"
				cx="214.01"
				cy="212.01"
				r="21.51"
				fill="#F8FAFC"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				id="4"
				fill="#1E293B"
				style="whiteSpace: 'pre'"
				font-size="20"
				font-weight="bold"
				letter-spacing="-0.08em"
				x="212"
				y="215.273"
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{s2}
			</text>
			<rect x="190.5" y="188.5" width="47.02" height="47.02" rx="23.51" stroke="#475569" />
		</g>

		<g id="p2">
			<circle
				id="common-top-right-center-shape"
				cx="613.01"
				cy="212.01"
				r="21.51"
				fill="#F8FAFC"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				id="5"
				fill="#1E293B"
				style="whiteSpace: 'pre'"
				font-size="20"
				font-weight="bold"
				letter-spacing="-0.08em"
				x="611.055"
				y="215.273"
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{p2}
			</text>
			<rect x="589.5" y="188.5" width="47.02" height="47.02" rx="23.51" stroke="#475569" />
		</g>

		<g id="d2">
			<circle
				id="Ellipse 494_9"
				cx="413.01"
				cy="696.01"
				r="21.51"
				fill="#F8FAFC"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				id="5_5"
				fill="#1E293B"
				style="whiteSpace: 'pre'"
				font-size="20"
				font-weight="bold"
				letter-spacing="-0.08em"
				text-anchor="middle"
				dominant-baseline="middle"
				x="412.055"
				y="699.273"
			>
				<tspan>{d2}</tspan>
			</text>
			<rect x="389.5" y="672.5" width="47.02" height="47.02" rx="23.51" stroke="#475569" />
		</g>
		<g id="c2">
			<circle
				id="Ellipse 494_10"
				cx="697.01"
				cy="414.01"
				r="21.51"
				fill="#F8FAFC"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				id="5_6"
				fill="#1E293B"
				style="whiteSpace: 'pre'"
				font-size="20"
				font-weight="bold"
				text-anchor="middle"
				dominant-baseline="middle"
				letter-spacing="-0.08em"
				x="695.055"
				y="416.273"
			>
				{c2}
			</text>
			<rect x="673.5" y="390.5" width="47.02" height="47.02" rx="23.51" stroke="#475569" />
		</g>
		<g id="s3">
			<circle
				id="Ellipse 494_11"
				cx="613.01"
				cy="614.01"
				r="21.51"
				fill="#F8FAFC"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				id="5_7"
				fill="#1E293B"
				style="whiteSpace: 'pre'"
				font-size="20"
				font-weight="bold"
				letter-spacing="-0.08em"
				text-anchor="middle"
				dominant-baseline="middle"
				x="611.055"
				y="616.273"
			>
				{s3}
			</text>
			<rect x="589.5" y="590.5" width="47.02" height="47.02" rx="23.51" stroke="#475569" />
		</g>
		<g id="p4">
			<circle
				id="Ellipse 494_12"
				cx="212.01"
				cy="612.01"
				r="21.51"
				fill="#F8FAFC"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				id="5_8"
				fill="#1E293B"
				style="whiteSpace: 'pre'"
				font-size="20"
				font-weight="bold"
				letter-spacing="-0.08em"
				text-anchor="middle"
				dominant-baseline="middle"
				x="210.055"
				y="614.273"
			>
				{p4}
			</text>
			<rect x="188.5" y="588.5" width="47.02" height="47.02" rx="23.51" stroke="#475569" />
		</g>
		<g id="p1">
			<g id="Group 323/Variant6_6">
				<circle
					id="Ellipse 494_14"
					cx="581.5"
					cy="242.5"
					r="18"
					fill="#F8FAFC"
					stroke="#CBD5E1"
					stroke-width="3"
				/>
				<text
					id="41_6"
					fill="#1F2937"
					style="whiteSpace: 'pre'"
					font-size="16"
					font-weight="bold"
					letter-spacing="-0.08em"
					text-anchor="middle"
					dominant-baseline="middle"
					x="580"
					y="243.943"
				>
					{p1}
				</text>
			</g>
			<rect x="561.5" y="222.5" width="40" height="40" rx="20" stroke="#475569" />
		</g>
		<g id="s1">
			<g id="Group 323/Variant6_7">
				<circle
					id="Ellipse 494_15"
					cx="244.5"
					cy="244.5"
					r="18"
					fill="#F8FAFC"
					stroke="#CBD5E1"
					stroke-width="3"
				/>
				<text
					id="41_7"
					fill="#1F2937"
					style="whiteSpace: 'pre'"
					font-size="16"
					font-weight="bold"
					letter-spacing="-0.08em"
					text-anchor="middle"
					dominant-baseline="middle"
					x="243"
					y="245.943"
				>
					{s1}
				</text>
			</g>
			<rect x="224.5" y="224.5" width="40" height="40" rx="20" stroke="#475569" />
		</g>
		<g id="Frame 339_3">
			<g id="Group 323/Variant6_8">
				<circle
					id="Ellipse 494_16"
					cx="582.5"
					cy="582.5"
					r="18"
					fill="#F8FAFC"
					stroke="#CBD5E1"
					stroke-width="3"
				/>
				<text
					id="41_8"
					fill="#1F2937"
					style="whiteSpace: 'pre'"
					font-size="16"
					font-weight="bold"
					letter-spacing="-0.08em"
					text-anchor="middle"
					dominant-baseline="middle"
					x="581"
					y="583.943"
				>
					{s4}
				</text>
			</g>
			<rect x="562.5" y="562.5" width="40" height="40" rx="20" stroke="#475569" />
		</g>
		<g id="y">
			<circle
				id="Ellipse 496_3"
				cx="652.845"
				cy="655.845"
				r="31.345"
				fill="#F1F5F9"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				id="18_3"
				fill="#1E293B"
				style="whiteSpace: 'pre'"
				font-size="24"
				font-weight="bold"
				text-anchor="middle"
				dominant-baseline="middle"
				x="650.861"
				y="659.544"
				letter-spacing="-0.08em"
			>
				{y}
			</text>
			<rect x="619.5" y="622.5" width="66.69" height="66.69" rx="33.345" stroke="#64748B" />
		</g>

		<g id="k">
			<circle
				id="Ellipse 496_4"
				cx="174.845"
				cy="655.845"
				r="31.345"
				fill="#F1F5F9"
				stroke="#CBD5E1"
				stroke-width="3"
			/>
			<text
				id="18_4"
				fill="#1E293B"
				style="whiteSpace: 'pre'"
				font-size="24"
				font-weight="bold"
				letter-spacing="-0.08em"
				text-anchor="middle"
				dominant-baseline="middle"
				x="172.861"
				y="658.544"
			>
				{k}
			</text>
			<rect x="141.5" y="622.5" width="66.69" height="66.69" rx="33.345" stroke="#64748B" />
		</g>
		<g id="b1">
			<circle
				id="Ellipse 508_2"
				cx="412.5"
				cy="175.5"
				r="19"
				transform="rotate(90 412.5 175.5)"
				fill="#38BDF8"
				stroke="#7DD3FC"
			/>
			<text
				id="4_5"
				fill="#DCFCE7"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="-0.08em"
				text-anchor="middle"
				dominant-baseline="middle"
				x="411.445"
				y="177.318"
			>
				{b1}
			</text>
			<rect x="392.5" y="155.5" width="40" height="40" rx="20" stroke="#0EA5E9" />
		</g>
		<g id="a1">
			<circle
				id="Ellipse 508_3"
				cx="174.5"
				cy="414.5"
				r="19"
				transform="rotate(90 174.5 414.5)"
				fill="#38BDF8"
				stroke="#7DD3FC"
			/>
			<text
				id="4_6"
				fill="#DCFCE7"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="-0.08em"
				text-anchor="middle"
				dominant-baseline="middle"
				x="173.437"
				y="416.318"
			>
				{a1}
			</text>
			<rect x="154.5" y="394.5" width="40" height="40" rx="20" stroke="#0EA5E9" />
		</g>
		<g id="b3">
			<circle
				id="Ellipse 508_4"
				cx="413.5"
				cy="277.5"
				r="19"
				transform="rotate(90 413.5 277.5)"
				fill="#22C55E"
				stroke="#86EFAC"
			/>
			<text
				id="4_7"
				fill="#DCFCE7"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				text-anchor="middle"
				dominant-baseline="middle"
				letter-spacing="-0.08em"
				x="412.218"
				y="279.318"
			>
				{b3}
			</text>
			<rect x="393.5" y="257.5" width="40" height="40" rx="20" stroke="#16A34A" />
		</g>
		<g id="c1">
			<circle
				id="Ellipse 504_2"
				cx="19.5"
				cy="19.5"
				r="19"
				transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 672 434)"
				fill="#F97316"
				stroke="#FDBA74"
			/>
			<text
				id="17"
				fill="#FFEDD5"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				text-anchor="middle"
				dominant-baseline="middle"
				x="652.468"
				y="416.318"
				letter-spacing="-0.08em"
			>
				{c1}
			</text>
			<rect x="632.5" y="394.5" width="40" height="40" rx="20" stroke="#EA580C" />
		</g>
		<g id="a2">
			<circle
				id="Ellipse 505_2"
				cx="129.5"
				cy="413.5"
				r="23"
				transform="rotate(90 129.5 413.5)"
				fill="#1D4ED8"
				stroke="#60A5FA"
			/>
			<text
				id="9_5"
				fill="#BFDBFE"
				style="whiteSpace: 'pre'"
				font-size="20"
				font-weight="bold"
				letter-spacing="-0.08em"
				text-anchor="middle"
				dominant-baseline="middle"
				x="127.398"
				y="416.273"
			>
				{a2}
			</text>
			<rect x="105.5" y="389.5" width="48" height="48" rx="24" stroke="#1D4ED8" />
		</g>

		<text
			id="male-line-text"
			transform="translate(290.606 265) rotate(45)"
			fill="#581C87"
			style="whiteSpace: 'pre'"
			font-size="12"
			letter-spacing="0em"
		>
			<tspan x="0.429688" y="11.8636">лінія чоловічого роду </tspan>
		</text>
		<text
			id="female-line-text"
			transform="translate(449.535 347.268) rotate(-45)"
			fill="#7F1D1D"
			style="whiteSpace: 'pre'"
			font-size="12"
			letter-spacing="0em"
		>
			<tspan x="0.408203" y="11.8636"> лінія жіночого роду </tspan>
		</text>
		<g id="dots-top-left">
			<circle id="Ellipse 509" cx="362" cy="54" r="4" fill="#1E293B" />
			<circle id="Ellipse 510" cx="333" cy="66" r="4" fill="#1E293B" />
			<circle id="Ellipse 511" cx="279" cy="88" r="5.5" fill="#F1F5F9" stroke="#1E293B" />
			<circle id="Ellipse 512" cx="304" cy="78" r="4" fill="#1E293B" />
			<circle id="Ellipse 513" cx="254" cy="99" r="4" fill="#1E293B" />
			<circle id="Ellipse 514" cx="225" cy="111" r="4" fill="#1E293B" />
			<circle id="Ellipse 515" cx="196" cy="123" r="4" fill="#1E293B" />
		</g>
		<g id="dots-top-right">
			<circle
				id="Ellipse 509_2"
				cx="633.827"
				cy="124.036"
				r="4"
				transform="rotate(45 633.827 124.036)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 510_2"
				cx="604.836"
				cy="112.016"
				r="4"
				transform="rotate(45 604.836 112.016)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 511_2"
				cx="551.096"
				cy="90.5595"
				r="5.5"
				transform="rotate(45 551.096 90.5595)"
				fill="#F1F5F9"
				stroke="#1E293B"
			/>
			<circle
				id="Ellipse 512_2"
				cx="575.844"
				cy="99.9947"
				r="4"
				transform="rotate(45 575.844 99.9947)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 513_2"
				cx="525.64"
				cy="79.4889"
				r="4"
				transform="rotate(45 525.64 79.4889)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 514_2"
				cx="496.648"
				cy="67.4674"
				r="4"
				transform="rotate(45 496.648 67.4674)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 515_2"
				cx="467.657"
				cy="55.4479"
				r="4"
				transform="rotate(45 467.657 55.4479)"
				fill="#1E293B"
			/>
		</g>
		<g id="dots-left-bottom">
			<circle
				id="Ellipse 509_3"
				cx="123"
				cy="630.998"
				r="4"
				transform="rotate(90 123 630.998)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 510_3"
				cx="111"
				cy="601.998"
				r="4"
				transform="rotate(90 111 601.998)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 511_3"
				cx="88"
				cy="547.998"
				r="5.5"
				transform="rotate(90 88 547.998)"
				fill="#F1F5F9"
				stroke="#1E293B"
			/>
			<circle
				id="Ellipse 512_3"
				cx="99"
				cy="572.998"
				r="4"
				transform="rotate(90 99 572.998)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 513_3"
				cx="78"
				cy="522.998"
				r="4"
				transform="rotate(90 78 522.998)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 514_3"
				cx="66"
				cy="493.998"
				r="4"
				transform="rotate(90 66 493.998)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 515_3"
				cx="54"
				cy="464.998"
				r="4"
				transform="rotate(90 54 464.998)"
				fill="#1E293B"
			/>
		</g>
		<g id="dots-right-bottom">
			<circle
				id="Ellipse 509_4"
				cx="705.447"
				cy="625.826"
				r="4"
				transform="rotate(135 705.447 625.826)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 510_4"
				cx="717.467"
				cy="596.836"
				r="4"
				transform="rotate(135 717.467 596.836)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 511_4"
				cx="739.924"
				cy="543.096"
				r="5.5"
				transform="rotate(135 739.924 543.096)"
				fill="#F1F5F9"
				stroke="#1E293B"
			/>
			<circle
				id="Ellipse 512_4"
				cx="729.489"
				cy="567.844"
				r="4"
				transform="rotate(135 729.489 567.844)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 513_4"
				cx="749.995"
				cy="517.641"
				r="4"
				transform="rotate(135 749.995 517.641)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 514_4"
				cx="762.015"
				cy="488.648"
				r="4"
				transform="rotate(135 762.015 488.648)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 515_4"
				cx="774.036"
				cy="459.656"
				r="4"
				transform="rotate(135 774.036 459.656)"
				fill="#1E293B"
			/>
		</g>
		<g id="dots-right-top">
			<circle
				id="Ellipse 509_5"
				cx="774"
				cy="365"
				r="4"
				transform="rotate(90 774 365)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 510_5"
				cx="762"
				cy="336"
				r="4"
				transform="rotate(90 762 336)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 511_5"
				cx="739"
				cy="282"
				r="5.5"
				transform="rotate(90 739 282)"
				fill="#F1F5F9"
				stroke="#1E293B"
			/>
			<circle
				id="Ellipse 512_5"
				cx="750"
				cy="307"
				r="4"
				transform="rotate(90 750 307)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 513_5"
				cx="729"
				cy="257"
				r="4"
				transform="rotate(90 729 257)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 514_5"
				cx="717"
				cy="228"
				r="4"
				transform="rotate(90 717 228)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 515_5"
				cx="705"
				cy="199"
				r="4"
				transform="rotate(90 705 199)"
				fill="#1E293B"
			/>
		</g>

		<g id="love-icon-group">
			<path
				id="love-icon"
				d="M468.645 544.908L468.638 544.905L468.616 544.893C468.487 544.822 468.36 544.75 468.233 544.675C466.711 543.771 465.288 542.708 463.989 541.505C461.688 539.358 459.25 536.172 459.25 532.248C459.25 529.32 461.714 526.998 464.688 526.998C465.515 526.994 466.332 527.176 467.078 527.532C467.825 527.887 468.482 528.406 469 529.05C469.518 528.406 470.175 527.887 470.922 527.532C471.669 527.176 472.486 526.994 473.313 526.998C476.286 526.998 478.75 529.32 478.75 532.248C478.75 536.173 476.312 539.359 474.011 541.504C472.712 542.707 471.289 543.77 469.767 544.674C469.64 544.749 469.513 544.822 469.384 544.893L469.362 544.905L469.355 544.909L469.352 544.91C469.244 544.968 469.123 544.998 469 544.998C468.877 544.998 468.756 544.968 468.648 544.91L468.645 544.908Z"
				fill="#FB7185"
			/>
		</g>
		<g id="dots-bottom-left">
			<circle
				id="Ellipse 509_6"
				cx="359.827"
				cy="771.034"
				r="4"
				transform="rotate(45 359.827 771.034)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 510_6"
				cx="330.836"
				cy="759.014"
				r="4"
				transform="rotate(45 330.836 759.014)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 511_6"
				cx="276.096"
				cy="736.558"
				r="5.5"
				transform="rotate(45 276.096 736.558)"
				fill="#F1F5F9"
				stroke="#1E293B"
			/>
			<circle
				id="Ellipse 512_6"
				cx="301.844"
				cy="746.993"
				r="4"
				transform="rotate(45 301.844 746.993)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 513_6"
				cx="251.64"
				cy="726.487"
				r="4"
				transform="rotate(45 251.64 726.487)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 514_6"
				cx="222.648"
				cy="714.465"
				r="4"
				transform="rotate(45 222.648 714.465)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 515_6"
				cx="193.657"
				cy="702.446"
				r="4"
				transform="rotate(45 193.657 702.446)"
				fill="#1E293B"
			/>
		</g>
		<g id="dots-bottom-right">
			<circle id="Ellipse 509_7" cx="631" cy="703" r="4" fill="#1E293B" />
			<circle id="Ellipse 510_7" cx="602" cy="715" r="4" fill="#1E293B" />
			<circle id="Ellipse 511_7" cx="548" cy="737" r="5.5" fill="#F1F5F9" stroke="#1E293B" />
			<circle id="Ellipse 512_7" cx="573" cy="727" r="4" fill="#1E293B" />
			<circle id="Ellipse 513_7" cx="523" cy="748" r="4" fill="#1E293B" />
			<circle id="Ellipse 514_7" cx="494" cy="760" r="4" fill="#1E293B" />
			<circle id="Ellipse 515_7" cx="465" cy="772" r="4" fill="#1E293B" />
		</g>
		<g id="dots-left-top">
			<circle
				id="Ellipse 509_8"
				cx="123.037"
				cy="194.658"
				r="4"
				transform="rotate(-45 123.037 194.658)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 510_8"
				cx="111.016"
				cy="223.648"
				r="4"
				transform="rotate(-45 111.016 223.648)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 511_8"
				cx="89.5595"
				cy="277.389"
				r="5.5"
				transform="rotate(-45 89.5595 277.389)"
				fill="#F1F5F9"
				stroke="#1E293B"
			/>
			<circle
				id="Ellipse 512_8"
				cx="98.9947"
				cy="252.641"
				r="4"
				transform="rotate(-45 98.9947 252.641)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 513_8"
				cx="78.4889"
				cy="302.846"
				r="4"
				transform="rotate(-45 78.4889 302.846)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 514_8"
				cx="66.4684"
				cy="331.836"
				r="4"
				transform="rotate(-45 66.4684 331.836)"
				fill="#1E293B"
			/>
			<circle
				id="Ellipse 515_8"
				cx="54.4469"
				cy="360.828"
				r="4"
				transform="rotate(-45 54.4469 360.828)"
				fill="#1E293B"
			/>
		</g>
		<g id="left-bottom-years">
			<text id="71-72" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="129.398" y="628.909"> 71-72 </tspan>
			</text>
			<text id="72-73" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="118.277" y="599.909"> 72-73 </tspan>
			</text>
			<text id="73-74" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="106.367" y="570.909"> 73-74 </tspan>
			</text>
			<text id="76-77" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="85.3828" y="521.909"> 76-77 </tspan>
			</text>
			<text id="77-78" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="73.4102" y="492.909"> 77-78 </tspan>
			</text>
			<text id="78-79" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="61.3164" y="463.909"> 78-79 </tspan>
			</text>
			<text
				id="75"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="12"
				font-weight="600"
				letter-spacing="0em"
			>
				<tspan x="99.2402" y="547.864"> 75 </tspan>
			</text>
		</g>
		<g id="bottom-left-years">
			<text id="61-62" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="355.387" y="763.909"> 61-62 </tspan>
			</text>
			<text id="62-63" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="329.199" y="750.909"> 62-63 </tspan>
			</text>
			<text id="63-64" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="303.055" y="738.909"> 63-64 </tspan>
			</text>
			<text id="66-67" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="247.387" y="717.909"> 66-67 </tspan>
			</text>
			<text id="67-68" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="219.418" y="705.909"> 67-68 </tspan>
			</text>
			<text id="68-69" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="193.207" y="693.909"> 68-69 </tspan>
			</text>
			<text
				id="65"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="12"
				font-weight="600"
				letter-spacing="0em"
			>
				<tspan x="279.312" y="726.864"> 65 </tspan>
			</text>
		</g>
		<g id="right-top-years">
			<text id="32-33" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="685.145" y="233.909"> 32-33 </tspan>
			</text>
			<text id="33-34" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="697" y="261.909"> 33-34 </tspan>
			</text>
			<text id="36-37" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="718.332" y="314.909"> 36-37 </tspan>
			</text>
			<text id="37-38" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="731.363" y="342.909"> 37-38 </tspan>
			</text>
			<text id="38-39" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="742.152" y="370.909"> 38-39 </tspan>
			</text>
			<text
				id="35"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="12"
				font-weight="600"
				letter-spacing="0em"
			>
				<tspan x="713.295" y="289.864"> 35 </tspan>
			</text>
			<text id="31-32" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="676.332" y="205.909"> 31-32 </tspan>
			</text>
		</g>
		<g id="left-top-years">
			<text id="1-2" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="63.0176" y="363.911"> 1-2 </tspan>
			</text>
			<text id="2-3" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="75.2402" y="334.911"> 2-3 </tspan>
			</text>
			<text id="3-4" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="87.0479" y="305.911"> 3-4 </tspan>
			</text>
			<text
				id="5_2"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="12"
				font-weight="600"
				letter-spacing="0em"
			>
				<tspan x="101.203" y="281.864"> 5 </tspan>
			</text>
			<text id="6-7" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="107.469" y="255.911"> 6-7 </tspan>
			</text>
			<text id="7-8" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="119.41" y="226.911"> 7-8 </tspan>
			</text>
			<text id="8-9" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="131.2" y="197.911"> 8-9 </tspan>
			</text>
		</g>
		<g id="top-right-years">
			<text
				id="25"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="12"
				font-weight="600"
				letter-spacing="0em"
			>
				<tspan x="534.477" y="107.864"> 25 </tspan>
			</text>
			<text id="21-22" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="449.172" y="67.9091"> 21-22 </tspan>
			</text>
			<text id="22-23" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="476.484" y="79.9091"> 22-23 </tspan>
			</text>
			<text id="23-24" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="505.402" y="91.911"> 23-24 </tspan>
			</text>
			<text id="26-27" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="558.172" y="114.911"> 26-27 </tspan>
			</text>
			<text id="27-28" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="586.203" y="126.911"> 27-28 </tspan>
			</text>
			<text id="28-29" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="614.492" y="138.911"> 28-29 </tspan>
			</text>
		</g>
		<g id="top-left-years">
			<text
				id="15"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="12"
				font-weight="600"
				letter-spacing="0em"
			>
				<tspan x="280.32" y="106.864"> 15 </tspan>
			</text>
			<text id="11-12" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="195.16" y="137.909"> 11-12 </tspan>
			</text>
			<text id="13-14" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="247.328" y="115.911"> 13-14 </tspan>
			</text>
			<text id="16-17" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="304.16" y="91.911"> 16-17 </tspan>
			</text>
			<text id="17-18" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="330.191" y="79.911"> 17-18 </tspan>
			</text>
			<text id="18-19" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="356.48" y="67.911"> 18-19 </tspan>
			</text>
			<text id="12-13" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="220.473" y="127.911"> 12-13 </tspan>
			</text>
		</g>
		<g id="bottom-right-years">
			<text id="51-52" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="614.012" y="692.909"> 51-52 </tspan>
			</text>
			<text id="52-53" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="586.324" y="704.909"> 52-53 </tspan>
			</text>
			<text id="53-54" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="558.18" y="716.909"> 53-54 </tspan>
			</text>
			<text id="56-57" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="511.012" y="736.909"> 56-57 </tspan>
			</text>
			<text id="57-58" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="484.043" y="748.909"> 57-58 </tspan>
			</text>
			<text id="58-59" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="456.332" y="760.909"> 58-59 </tspan>
			</text>
			<text
				id="55"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="12"
				font-weight="600"
				letter-spacing="0em"
			>
				<tspan x="538.407" y="724.864"> 55 </tspan>
			</text>
		</g>
		<g id="right-bottom-years">
			<text id="41-42" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="744.285" y="461.909"> 41-42 </tspan>
			</text>
			<text id="42-43" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="732.059" y="489.909"> 42-43 </tspan>
			</text>
			<text id="43-44" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="718.414" y="517.909"> 43-44 </tspan>
			</text>
			<text id="46-47" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="698.246" y="570.909"> 46-47 </tspan>
			</text>
			<text id="47-48" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="686.277" y="598.909"> 47-48 </tspan>
			</text>
			<text id="48-49" fill="black" style="whiteSpace: 'pre'" font-size="8" letter-spacing="0em"
				>"
				<tspan x="675.066" y="626.909"> 48-49 </tspan>
			</text>
			<text
				id="45"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="12"
				font-weight="600"
				letter-spacing="0em"
			>
				<tspan x="715.207" y="545.864"> 45 </tspan>
			</text>
		</g>

		<g id="0years">
			<text
				id="0"
				fill="black"
				xml:space="preserve"
				style="white-space: pre"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"><tspan x="12.4922" y="419.318">0</tspan></text
			>
			<text
				id="&#209;&#128;&#208;&#190;&#208;&#186;&#209;&#150;&#208;&#178;_8"
				fill="black"
				xml:space="preserve"
				style="white-space: pre"
				font-size="10"
				font-weight="bold"
				letter-spacing="0em"
				><tspan x="5.09668" y="432.636">&#x440;&#x43e;&#x43a;&#x456;&#x432;</tspan></text
			>
		</g>
		<g id="10years">
			<text
				id="10_2"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="119.078" y="127.318"> 10 </tspan>
			</text>
			<text
				id="&#209;&#128;&#208;&#190;&#208;&#186;&#209;&#150;&#208;&#178;"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="10"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="115.097" y="140.636"> &#x440;&#x43e;&#x43a;&#x456;&#x432; </tspan>
			</text>
		</g>
		<g id="20years">
			<text
				id="20"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="402.453" y="15.3182"> 20 </tspan>
			</text>
			<text
				id="&#209;&#128;&#208;&#190;&#208;&#186;&#209;&#150;&#208;&#178;_2"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="10"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="400.097" y="28.6364"> &#x440;&#x43e;&#x43a;&#x456;&#x432; </tspan>
			</text>
		</g>
		<g id="30years">
			<text
				id="30"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="690.219" y="127.318"> 30 </tspan>
			</text>
			<text
				id="&#209;&#128;&#208;&#190;&#208;&#186;&#209;&#150;&#208;&#178;_3"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="10"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="688.097" y="140.636"> &#x440;&#x43e;&#x43a;&#x456;&#x432; </tspan>
			</text>
		</g>
		<g id="40years">
			<text
				id="40"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="797.07" y="410.318"> 40 </tspan>
			</text>
			<text
				id="&#209;&#128;&#208;&#190;&#208;&#186;&#209;&#150;&#208;&#178;_4"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="10"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="795.097" y="423.636"> &#x440;&#x43e;&#x43a;&#x456;&#x432; </tspan>
			</text>
		</g>
		<g id="50years">
			<text
				id="50"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="680.336" y="698.318"> 50 </tspan>
			</text>
			<text
				id="&#209;&#128;&#208;&#190;&#208;&#186;&#209;&#150;&#208;&#178;_5"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="10"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="678.097" y="711.636"> &#x440;&#x43e;&#x43a;&#x456;&#x432; </tspan>
			</text>
		</g>
		<g id="60years">
			<text
				id="60"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="402.211" y="810.318"> 60 </tspan>
			</text>
			<text
				id="&#209;&#128;&#208;&#190;&#208;&#186;&#209;&#150;&#208;&#178;_6"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="10"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="400.097" y="823.636"> &#x440;&#x43e;&#x43a;&#x456;&#x432; </tspan>
			</text>
		</g>
		<g id="70years">
			<text
				id="70"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="121.359" y="700.318"> 70 </tspan>
			</text>
			<text
				id="&#209;&#128;&#208;&#190;&#208;&#186;&#209;&#150;&#208;&#178;_7"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="10"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="118.097" y="713.636"> &#x440;&#x43e;&#x43a;&#x456;&#x432; </tspan>
			</text>
		</g>
		<g id="years10">
			<text id="5_3" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="31.1328" y="365.318"> {years10['1-2']} </tspan>
			</text>
			<text id="2" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="43.1562" y="335.318"> {years10['2-3']} </tspan>
			</text>
			<text id="4_2" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="55.3672" y="305.318"> {years10['3-4']} </tspan>
			</text>
			<text
				id="11_3"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="64.1719" y="277.318"> {years10['5']} </tspan>
			</text>
			<text id="14" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="75.1484" y="249.318"> {years10['6-7']} </tspan>
			</text>
			<text id="22" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="86.3125" y="219.318"> {years10['7-8']} </tspan>
			</text>
			<text id="12" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="99.4375" y="189.318"> {years10['8-9']} </tspan>
			</text>
		</g>
		<g id="years20">
			<text id="12_2" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="178.438" y="114.318"> {years20['11-12']}</tspan>
			</text>
			<text id="4_3" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="242.367" y="90.3182"> {years20['13-14']} </tspan>
			</text>
			<text id="21" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="293.438" y="68.3182"> {years20['16-17']} </tspan>
			</text>
			<text id="14_2" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="323.148" y="56.3182"> {years20['17-18']}</tspan>
			</text>
			<text id="10_3" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="353.281" y="43.3182"> {years20['18-19']} </tspan>
			</text>
			<text
				id="15_2"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="265.43" y="76.3182"> {years20['15']} </tspan>
			</text>
			<text id="6" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="212.008" y="102.318"> {years20['12-13']} </tspan>
			</text>
		</g>
		<g id="years30">
			<text id="11_4" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="461.062" y="43.3182"> {years30['21-22']} </tspan>
			</text>
			<text id="11_5" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="488.062" y="56.3182"> {years30['22-23']} </tspan>
			</text>
			<text id="5_4" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="517.133" y="68.3182"> {years30['23-24']} </tspan>
			</text>
			<text
				id="11_6"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="544.172" y="76.3182"> {years30['25']} </tspan>
			</text>
			<text id="11_7" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="574.062" y="90.3182"> {years30['26-27']} </tspan>
			</text>
			<text id="11_8" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="601.062" y="102.318"> {years30['27-28']} </tspan>
			</text>
			<text id="11_9" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="631.062" y="114.318"> {years30['28-29']} </tspan>
			</text>
		</g>
		<g id="years40">
			<text
				id="11_13"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="754.172" y="285.318"> {years40['35']} </tspan>
			</text>
			<text id="1_2" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="717.281" y="197.318"> {years40['31-32']} </tspan>
			</text>
			<text id="2_4" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="727.156" y="227.318"> {years40['32-33']} </tspan>
			</text>
			<text id="12_11" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="739.438" y="257.318"> {years40['33-34']} </tspan>
			</text>
			<text id="12_12" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="761.438" y="313.318"> {years40['36-37']} </tspan>
			</text>
			<text id="7" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="774.43" y="341.318"> {years40['37-38']} </tspan>
			</text>
			<text id="5_11" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="786.133" y="369.318"> {years40['38-39']} </tspan>
			</text>
		</g>
		<g id="years50">
			<text
				id="16"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="750.305" y="553.318"> {years50['45']}</tspan>
			</text>
			<text id="5_10" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="785.133" y="467.318"> {years50['41-42']} </tspan>
			</text>
			<text id="2_2" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="773.156" y="497.318"> {years50['42-43']} </tspan>
			</text>
			<text id="14_3" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="758.148" y="527.318"> {years50['43-44']} </tspan>
			</text>
			<text id="6_2" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="738.008" y="579.318"> {years50['46-47']} </tspan>
			</text>
			<text id="1" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="728.281" y="609.318"> {years50['47-48']} </tspan>
			</text>
			<text id="11_10" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="715.062" y="639.318"> {years50['48-49']} </tspan>
			</text>
		</g>
		<g id="years60">
			<text
				id="15_3"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="541.43" y="761.318"> {years60['55']} </tspan>
			</text>
			<text id="12_13" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="596.438" y="736.318"> {years60['52-53']} </tspan>
			</text>
			<text id="12_14" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="567.438" y="750.318"> {years60['53-54']} </tspan>
			</text>
			<text id="12_15" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="515.438" y="771.318"> {years60['56-57']} </tspan>
			</text>
			<text id="12_16" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="486.438" y="784.318"> {years60['57-58']} </tspan>
			</text>
			<text id="12_17" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="457.438" y="796.318"> {years60['58-59']} </tspan>
			</text>
			<text id="11_14" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="625.062" y="725.318"> {years60['51-52']} </tspan>
			</text>
		</g>

		<g id="years70">
			<text
				id="11_12"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="259.172" y="760.318"> {years70['65']} </tspan>
			</text>
			<text id="12_6" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="233.438" y="748.318"> {years70['66-67']} </tspan>
			</text>
			<text id="12_7" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="204.438" y="737.318"> {years70['67-68']} </tspan>
			</text>
			<text id="20_2" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="173.156" y="725.318"> {years70['68-69']} </tspan>
			</text>
			<text id="12_8" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="312.438" y="780.318"> {years70['62-63']} </tspan>
			</text>
			<text id="12_9" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="283.438" y="768.318"> {years70['63-64']} </tspan>
			</text>
			<text id="12_10" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em">
				<tspan x="341.438" y="792.318"> {years70['61-62']} </tspan>
			</text>
		</g>

		<g id="years80">
			<text
				id="11_11"
				fill="black"
				style="whiteSpace: 'pre'"
				font-size="16"
				font-weight="bold"
				letter-spacing="0em"
			>
				<tspan x="61.1719" y="560.318"> {years80['75']} </tspan>
			</text>
			<text id="12_3" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="97.4375" y="648.318"> {years80['71-72']} </tspan>
			</text>
			<text id="8_2" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="88.0703" y="618.318"> {years80['72-73']} </tspan>
			</text>
			<text id="12_4" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="71.4375" y="588.318"> {years80['73-74']} </tspan>
			</text>
			<text id="4_4" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="52.3672" y="532.318"> {years80['76-77']} </tspan>
			</text>
			<text id="12_5" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="37.4375" y="502.318"> {years80['77-78']} </tspan>
			</text>
			<text id="2_3" fill="black" style="whiteSpace: 'pre'" font-size="16" letter-spacing="0em"
				>"
				<tspan x="30.1562" y="472.318"> {years80['78-79']} </tspan>
			</text>
		</g>
		<g id="Frame_2">
			<path
				id="Vector_2"
				d="M533.464 466.746C533.691 466.566 533.961 466.435 534.25 466.352V469.147C533.965 469.068 533.698 468.935 533.464 468.754C533.07 468.441 532.918 468.073 532.918 467.75C532.918 467.427 533.07 467.059 533.464 466.746ZM535.75 473.662V470.838C536.097 470.923 536.414 471.066 536.671 471.259C537.098 471.579 537.25 471.945 537.25 472.25C537.25 472.555 537.098 472.921 536.671 473.241C536.395 473.441 536.082 473.585 535.75 473.662Z"
				fill="#4ADE80"
			/>
			<path
				id="Vector_3"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M535 460.25C529.615 460.25 525.25 464.615 525.25 470C525.25 475.385 529.615 479.75 535 479.75C540.385 479.75 544.75 475.385 544.75 470C544.75 464.615 540.385 460.25 535 460.25ZM535.75 464C535.75 463.801 535.671 463.61 535.53 463.47C535.39 463.329 535.199 463.25 535 463.25C534.801 463.25 534.61 463.329 534.47 463.47C534.329 463.61 534.25 463.801 534.25 464V464.816C533.623 464.922 533.032 465.181 532.53 465.572C531.818 466.138 531.418 466.922 531.418 467.75C531.418 468.579 531.818 469.362 532.531 469.928C533.033 470.328 533.633 470.575 534.25 470.684V473.662C533.918 473.585 533.605 473.442 533.329 473.241L532.45 472.581C532.371 472.522 532.282 472.479 532.186 472.454C532.091 472.43 531.991 472.425 531.894 472.439C531.697 472.467 531.519 472.572 531.4 472.731C531.281 472.89 531.229 473.09 531.258 473.287C531.286 473.484 531.391 473.662 531.55 473.781L532.429 474.441C532.962 474.841 533.598 475.086 534.25 475.191V476C534.25 476.199 534.329 476.39 534.47 476.53C534.61 476.671 534.801 476.75 535 476.75C535.199 476.75 535.39 476.671 535.53 476.53C535.671 476.39 535.75 476.199 535.75 476V475.19C536.409 475.091 537.033 474.834 537.571 474.441C538.316 473.882 538.75 473.097 538.75 472.25C538.75 471.403 538.316 470.618 537.571 470.059C537.034 469.666 536.409 469.408 535.75 469.309V466.354C536.04 466.436 536.309 466.567 536.536 466.747L536.951 467.077C537.107 467.201 537.305 467.257 537.503 467.235C537.701 467.212 537.881 467.112 538.005 466.956C538.129 466.8 538.185 466.602 538.163 466.404C538.14 466.206 538.04 466.026 537.884 465.902L537.469 465.572C536.967 465.182 536.377 464.922 535.75 464.817V464Z"
				fill="#4ADE80"
			/>
		</g>
	</g>
	<defs>
		<filter
			id="filter0_d_606_536"
			x="251.999"
			y="442.947"
			width="129.069"
			height="131.053"
			filterUnits="userSpaceOnUse"
			colorInterpolationFilters="sRGB"
		>
			<feFlood floodOpacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="2" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_606_536" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_606_536" result="shape" />
		</filter>
		<filter
			id="filter1_d_606_536"
			x="430.939"
			y="246"
			width="147.06"
			height="147.064"
			filterUnits="userSpaceOnUse"
			colorInterpolationFilters="sRGB"
		>
			<feFlood floodOpacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dy="3" />
			<feGaussianBlur stdDeviation="6" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix
				type="matrix"
				values="0 0 0 0 0.862745 0 0 0 0 0.14902 0 0 0 0 0.14902 0 0 0 1 0"
			/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_606_536" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_606_536" result="shape" />
		</filter>
		<filter
			id="filter2_d_606_536"
			x="254.999"
			y="258"
			width="130.066"
			height="130.064"
			filterUnits="userSpaceOnUse"
			colorInterpolationFilters="sRGB"
		>
			<feFlood floodOpacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="2" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_606_536" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_606_536" result="shape" />
		</filter>
		<filter
			id="filter3_d_606_536"
			x="441.939"
			y="445.939"
			width="130.06"
			height="130.061"
			filterUnits="userSpaceOnUse"
			colorInterpolationFilters="sRGB"
		>
			<feFlood floodOpacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="2" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_606_536" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_606_536" result="shape" />
		</filter>
	</defs>
</svg>

<!-- Розрахунок карти здоров’я -->
<div class="w-full bg-[#F8FAFC] border-4 border-[#CBD5E1] py-9 my-8 rounded-3xl">
	<h2 class="text-2xl tracking-wider font-thin text-center mb-6">Розрахунок карти здоров’я</h2>
	<div class="flex flex-col">
		<div class="overflow-x-auto">
		  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
			<div class="overflow-hidden">
			  <table class="min-w-full text-left text-sm font-light">
				<thead class="border-b font-medium dark:border-neutral-500">
				  <tr>
					<th scope="col" class="px-6 py-4">Назва чакри</th>
					<th scope="col" class="px-6 py-4 text-center">Фізика</th>
					<th scope="col" class="px-6 py-4 text-center">Енергія</th>
					<th scope="col" class="px-6 py-4 text-center">Емоції</th>
				  </tr>
				</thead>
				<tbody>
				  <tr class="border-b dark:border-neutral-500">
					<td class="whitespace-nowrap px-6 py-4 font-medium text-fuchsia-700">Сахасрара-чакра</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{a}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{b}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{t1}</td>
				  </tr>
				  <tr class="border-b dark:border-neutral-500">
					<td class="whitespace-nowrap px-6 py-4 font-medium text-indigo-700">Аджа-чакра</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{a2}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{b2}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{t2}</td>
				  </tr>
				  <tr class="border-b dark:border-neutral-500">
					<td class="whitespace-nowrap px-6 py-4 font-medium text-cyan-500">Вішудха-чакра</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{a1}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{b1}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{t3}</td>
				  </tr>
				  <tr class="border-b dark:border-neutral-500">
					<td class="whitespace-nowrap px-6 py-4 font-medium text-green-500">Анахата-чакра</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{a3}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{b3}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{t4}</td>
				  </tr>
				  <tr class="border-b dark:border-neutral-500">
					<td class="whitespace-nowrap px-6 py-4 font-medium text-yellow-300">Маніпура-чакра</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{e}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{e}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{t5}</td>
				  </tr>
				  <tr class="border-b dark:border-neutral-500">
					<td class="whitespace-nowrap px-6 py-4 font-medium text-orange-400">Свадхістана-чакра</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{c1}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{d1}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{t6}</td>
				  </tr>
				  <tr class="border-b dark:border-neutral-500">
					<td class="whitespace-nowrap px-6 py-4 font-medium text-red-500">Муладхара-чакра</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{c}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{d}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{t7}</td>
				  </tr>
				  <tr class="border-b dark:border-neutral-500">
					<td class="whitespace-nowrap px-6 py-4 font-medium text-zinc-500">Сума</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{ts1}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{ts2}</td>
					<td class="whitespace-nowrap px-6 py-4 text-center">{ts3}</td>
				  </tr>
				</tbody>
			  </table>
			</div>
		  </div>
		</div>
	  </div>
</div>

<!-- Розрахунок родових програм -->
<div class="w-full bg-[#F8FAFC] border-4 border-[#CBD5E1] p-9 my-8 rounded-3xl">
	<h2 class="text-2xl tracking-wider font-thin text-center mb-6">Розрахунок родових програм</h2>
	<div class="flex justify-center items-center mb-3">
		<p class="w-2/3">Родові програми по чоловічій лінії</p>
		<ul class="flex justify-start items-center gap-10 w-1/3">
			<li>{f}</li>
			<li>{y}</li>
			<li>{m1}</li>
		</ul>
	</div>
	<div class="flex justify-center items-center mb-3">
		<p class="w-2/3">Родові програми по жіночій лінії</p>
		<ul class="flex justify-start items-center gap-10 w-1/3">
			<li>{g}</li>
			<li>{k}</li>
			<li>{w1}</li>
		</ul>
	</div>
	<div class="flex justify-center items-center mb-3">
		<p class="w-2/3">Код внутрішньої сили</p>
		<ul class="flex justify-start items-center gap-10 w-1/3">
			<li>{e}</li>
			<li>{e1}</li>
			<li>{e2}</li>
		</ul>
	</div>
	<div class="flex justify-start items-center">
		<p class="w-2/3">Сила роду</p>
		<span>{e1}</span>
	</div>
</div>

<!-- Розрахунок призначення -->
<div class="flex flex-wrap grow gap-8">
	<!-- Пошук себе -->
	<div class="grow bg-[#F8FAFC] border-4 border-[#CBD5E1] p-9 rounded-3xl">
		<h2 class="text-2xl tracking-wider font-thin text-center mb-6">Пошук себе</h2>
		<div class="flex items-center justify-around text-lg w-10/12 mx-auto">
			<div class="w-6/12">
				<div class="flex items-center justify-between mb-4">
					<p>Лінія Неба:</p>
					<div class="bg-white border-2 border-[#CBD5E1] p-3 px-4 rounded-full">
						<span class="font-bold">{n1}</span>
					</div>
				</div>
				<div class="flex items-center justify-between">
					<p>Лінія Землі:</p>
					<div class="bg-white border-2 border-[#CBD5E1] p-3 px-4 rounded-full">
						<span class="font-bold">{n2}</span>
					</div>
				</div>
			</div>
			
			<div class="bg-white border-2 border-[#CBD5E1] p-3 px-4 rounded-full">
				<span class="font-bold">{n3}</span>
			</div>
		</div>
	</div>

	<!-- Соціалізація -->
	<div class="basis-6/12 bg-[#F8FAFC] border-4 border-[#CBD5E1] p-9 rounded-3xl">
		<h2 class="text-2xl tracking-wider font-thin text-center mb-6">Соціалізація</h2>
		<div class="flex items-center justify-around text-lg w-10/12 mx-auto">
			<div class="w-6/12">
				<div class="flex items-center justify-between mb-4">
					<p>Ч:</p>
					<div class="bg-white border-2 border-[#CBD5E1] p-3 px-4 rounded-full">
						<span class="font-bold">{c4}</span>
					</div>
				</div>
				<div class="flex items-center justify-between">
					<p>Ж:</p>
					<div class="bg-white border-2 border-[#CBD5E1] p-3 px-4 rounded-full">
						<span class="font-bold">{c5}</span>
					</div>
				</div>
			</div>
			
			<div class="bg-white border-2 border-[#CBD5E1] p-3 px-4 rounded-full">
				<span class="font-bold">{c6}</span>
			</div>
		</div>
	</div>

	<!-- Духовна грамотність -->
	<div class="grow bg-[#F8FAFC] border-4 border-[#CBD5E1] p-9 rounded-3xl">
		<h2 class="text-2xl tracking-wider font-thin text-center mb-6">Духовна грамотність</h2>
		<div class="flex items-center justify-around text-lg w-10/12 mx-auto">
			<div class="bg-white border-2 border-[#CBD5E1] p-3 px-4 rounded-full">
				<span class="font-bold">{d3}</span>
			</div>
		</div>
	</div>

	<!-- Планетарна грамотність -->
	<div class="basis-6/12 bg-[#F8FAFC] border-4 border-[#CBD5E1] p-9 rounded-3xl">
		<h2 class="text-2xl tracking-wider font-thin text-center mb-6">Планетарна грамотність</h2>
		<div class="flex items-center justify-around text-lg w-10/12 mx-auto">
			<div class="bg-white border-2 border-[#CBD5E1] p-3 px-4 rounded-full">
				<span class="font-bold">{p5}</span>
			</div>
		</div>
	</div>
</div>

