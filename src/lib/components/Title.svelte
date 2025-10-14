<script lang="ts">
	export let variant: 'h1' | 'h2' | 'h3' = 'h1';
</script>

{#if variant === 'h1'}
	<h1 class="text-4xl font-bold">
		<slot />
	</h1>
{:else if variant === 'h2'}
	<h2 class="text-3xl font-bold">
		<slot />
	</h2>
{:else if variant === 'h3'}
	<h3 class="text-2xl font-bold">
		<slot />
	</h3>
{/if}
