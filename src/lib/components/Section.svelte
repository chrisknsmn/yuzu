<script lang="ts">
	export let variant: 'default' | 'fit' = 'default';
</script>

<section
	class="
    w-full border-4
    {variant === 'default' ? 'min-h-screen' : ''}
    {variant === 'fit' ? 'min-h-fit' : ''}
    "
>
	<slot />
</section>
