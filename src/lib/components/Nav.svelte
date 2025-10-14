<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { Moon, Sun } from 'lucide-svelte';
	import { onMount } from 'svelte';

	// type Link = {
	// 	name: string;
	// 	href: string;
	// };
	// let links: Link[] = [{ name: 'Home', href: '/' }];
	let isDark = $state(false);

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
		document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
	});

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
</script>

<nav
	class="w-full sticky top-0 left-0 h-[var(--nav-height)] border-b-1 z-50 flex items-center p-4 bg-bg"
>
	<div class="max-w-screen-xl mx-auto w-full flex justify-between">
		<div class="flex gap-4 items-center">
			<a href="/" class="text-2xl font-bold text-prm">Yuzu</a>
			<!-- {#each links as link}
				<a href={link.href}>
					{link.name}
				</a>
			{/each} -->
		</div>

		<button onclick={toggleTheme} aria-label="Toggle theme">
			{#if isDark}
				<Moon size={20} />
			{:else}
				<Sun size={20} />
			{/if}
		</button>
	</div>
</nav>
