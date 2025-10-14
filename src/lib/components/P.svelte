<script lang="ts">
	export let variant: 'p' | 'b' = 'p';
</script>

{#if variant === 'p'}
	<p>
		<slot />
	</p>
{:else if variant === 'b'}
	<b>
		<slot />
	</b>
{/if}
