<script>
	import Button from '$lib/components/Button.svelte';
	let num = 0;
	function add() {
		num += 1;
	}
</script>

<div class="min-h-screen min-w-screen flex items-center justify-center">
	<div class="flex flex-col gap-4">
		<h1 class="text-4xl font-bold">HELLO WORLD!</h1>
		<Button on:click={add}>{num}</Button>
	</div>
</div>
