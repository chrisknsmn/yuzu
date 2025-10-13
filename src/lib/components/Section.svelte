<script lang="ts">
	export let variant: 'default' | 'fit' = 'default';
</script>

<section
	class="
    w-full flex items-center justify-center
    {variant === 'default' ? 'min-h-[calc(100vh-60px)]' : ''}
    {variant === 'fit' ? 'min-h-fit' : ''}
    "
>
	<slot />
</section>
