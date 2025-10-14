<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	type Link = {
		name: string;
		href: string;
	};

	let links: Link[] = [{ name: 'Home', href: '/' }];
</script>

<nav
	class="w-full sticky top-0 left-0 h-[var(--nav-height)] border-b-1 z-50 flex items-center p-2 justify-between bg-bg"
>
	<a href="/" class="text-2xl font-bold text-prm">Yuzu</a>
	<div class="flex gap-2">
		{#each links as link}
			<a href={link.href}>
				<Button variant="outline">{link.name}</Button>
			</a>
		{/each}
	</div>
</nav>
