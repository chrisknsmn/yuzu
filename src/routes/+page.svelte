<script>
	import Section from '$lib/components/Section.svelte';
	import Title from '$lib/components/Title.svelte';
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
	<div class="flex flex-col gap-4 text-center">
		<Title variant="h1">COUNTER <br /> {num}</Title>
		<Button on:click={add}>ADD</Button>
		<Button on:click={reset} variant="outline">RESET</Button>
	</div>
</Section>
