<script>
	import Section from '$lib/components/Section.svelte';
	import Button from '$lib/components/Button.svelte';
	let num = 0;
	function add() {
		num += 1;
	}
	function reset() {
		num = 0;
	}
</script>

<Section>
	<div class="flex flex-col gap-4">
		<h1 class="text-4xl font-bold text-center">COUNTER <br /> {num}</h1>
		<Button on:click={add}>ADD</Button>
		<Button on:click={reset} variant="outline">RESET</Button>
	</div>
</Section>
