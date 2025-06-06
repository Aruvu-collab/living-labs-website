<script>
	import Navbar from "../lib/Navbar.svelte";

	export let data;
	let { site } = data;

</script>

<!-- Full-screen hero section -->
<section
	class="relative h-screen w-full bg-contain bg-no-repeat bg-[url({site.coverImage.path})] bg-bottom md:bg-left "
	style="background-image: url({site.coverImage.path});"
>
	<!-- Gradient overlay -->
	<div
		class="absolute inset-0"
		style=""
	></div>

	<!-- Full-Width White Box with Centered Text -->
	<div class="absolute inset-x-0 mt-40 md:grid md:justify-items-end md:p-20 md:mx-20 p-10">
		<div class="max-w-md">
			<h1 class="mb-4 text-center text-5xl">
				<span class="text-red-900">{site.title}
			</h1>
			<p class="text-center text-sm text-red-900">{site.description}</p>
			<Navbar {site}/>
		</div>
	</div>
</section>

<!-- New section: Information on the left, Image on the right -->
<section
	class="mx-auto grid min-h-[80vh] max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-10 pt-10 md:grid-cols-2"
>
	<!-- Right Side: Imagegray-100 -->
	<div class="flex justify-center">
		<img
			src="{site.section2.image}"
			class="h-auto w-full object-cover shadow-lg"
		/>
	</div>

	<!-- Left Side: Information -->
	<div>
		<h2 class="mb-4 text-2xl font-bold text-gray-900">{site.section2.title}</h2>
		<p class="text-sm">		{site.section2.content}</p>

		<a href="{site.section2.ctabutton.link}">
			<button
				class="mt-5 rounded bg-llngreen px-4 py-2 font-semibold  shadow transition duration-200 hover:bg-red-700"
			>
				{site.section2.ctabutton.name}
			</button>
		</a>
	</div>
</section>

<section class="mx-auto min-h-[80vh] max-w-6xl p-5 pb-10 pt-10 text-center sm:p-5">
	<h2 class="mb-8 text-2xl font-bold text-gray-900">{site.modes.title}</h2>
	<div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-2 md:gap-4">
		{#each site.modes.list as mode}
			<a
				href={`${mode.link}`}
				class="flex h-48 flex-row items-center overflow-hidden rounded bg-white shadow-md"
			>
				<!-- Image -->
				<div class="w-1/2">
					<img
						src={mode.cover}
						alt={mode.title}
						class="h-48 w-full object-cover grayscale"
					/>
				</div>

				<!-- Text Content -->
				<div class=" p-6">
					<h3 class="text-left text-lg font-semibold">
						{mode.title}
					</h3>
					<p>
					{mode.description}
					</p>
				</div>
			</a>
		{/each}
	</div>

</section>

<section class="py-10">
	<div class="mx-auto max-w-6xl p-6">
		<h2 class="mb-4 text-center text-2xl font-bold text-gray-900">Axioms</h2>
		<p class="mx-auto mb-8 max-w-2xl text-center text-gray-900">
			{site.axioms.description}
		</p>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<!-- Card 001 -->
			 {#each site.axioms.list as axiom}
			<div class="rounded bg-green p-6 shadow">
				<h2 class="text-xl font-bold text-pink-700">{axiom.number}</h2>
				<h3 class="mt-2 text-lg font-semibold">{axiom.title}</h3>
				<p class="mt-4 text-sm">
					{axiom.description}
				</p>
			</div>
			{/each}
		</div>
	</div>
</section>

<style>
	li {
		margin-top: 0.5rem;
	}
</style>
