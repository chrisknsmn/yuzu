<script lang="ts">
	export let variant: 'default' | 'outline' = 'default';
	export let type: 'button' | 'submit' = 'button';
	export let disabled = false;
</script>

<button
	{type}
	{disabled}
	class="
    px-4 py-1 rounded-full font-medium cursor-pointer
    {variant === 'default' ? 'bg-fg text-bg border-0' : ''}
    {variant === 'outline' ? 'bg-bg text-fg border' : ''}
    "
	on:click
>
	<slot />
</button>
