<script>
    	import { page } from '$app/stores';
        export let site;
</script>
<nav class="sticky top-0 z-50 w-full p-4">

	<!-- <div class="mb-4 flex items-center justify-center">
		<a
			href="/"
			data-sveltekit-reload
			class="flex items-center text-2xl font-semibold text-white"
		>
			<img src="{site.logo.path}" alt="Logo" class="mr-3 h-10" />
		</a>
	</div> -->

	<!-- Second Line: Navigation Links -->
	<div class="flex justify-center">
		<div class="space-x-4 text-center">
			{#if $page.url.pathname != '/'}
				<a href="/" class="font-medium text-white hover:text-gray-400">Home</a>
			{/if}
			{#each site.navbar as link}
			<a href="{link.link}" class="font-medium text-white hover:text-gray-400">{link.title}</a>
			{/each}
	</div>
</nav>