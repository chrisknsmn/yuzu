<script lang="ts">
	export let variant: 'default' | 'fit' = 'default';
</script>

<section
	class="
    w-full flex items-center justify-center p-4
    {variant === 'default' ? 'min-h-[calc(100vh-var(--nav-height))]' : ''}
    {variant === 'fit' ? 'min-h-fit' : ''}
    "
>
	<div class="max-w-screen-xl mx-auto w-full">
		<slot />
	</div>
</section>
