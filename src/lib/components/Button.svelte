<script lang="ts">
    export let variant: 'default' | 'outline'  = 'default';
    export let type: 'button' | 'submit'  = 'button';
    export let disabled = false;
</script>

<button
{type}
{disabled}
class="
    px-4 py-2 rounded-md font-medium bg-black text-white cursor-pointer
    {variant === 'default' ? 'border-0 bg-black text-white' : ''}
    {variant === 'outline' ? 'border-2 bg-black text-white' : ''}
    "
  on:click
>
    <slot />
</button>