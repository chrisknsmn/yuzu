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
    {variant === 'default' ? 'border-0 bg-black text-white' : ''}
    {variant === 'outline' ? 'border bg-white text-black' : ''}
    "
	on:click
>
	<slot />
</button>
