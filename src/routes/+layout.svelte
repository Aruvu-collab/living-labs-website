<script>
	import '../app.css'; // Ensure the CSS file is imported

	export let data;
	let { site } = data;
</script>

<svelte:head>
	<script
		defer
		src="https://cloud.umami.is/script.js"
		data-website-id="bfa84bd9-0558-48b3-89ab-efc424187840"
	></script>
</svelte:head>
<body class="bg-[#adaf26]">
	<!-- Navigation Bar -->

	<!-- Main Content -->
	<main class="min-h-screen bg-[#adaf26]">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="my-20 text-center text-black">
		<p>&copy; 2025 {site.title} All rights reserved.</p>
	</footer>
</body>
