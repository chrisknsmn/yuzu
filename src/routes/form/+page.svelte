<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Title from '$lib/components/Title.svelte';
	import { ChevronDown, ChevronRight } from 'lucide-svelte';

	let currentStep = $state(1);
	let formData = $state({
		name: '',
		email: ''
	});

	const steps = [
		{ id: 1, title: 'Name' },
		{ id: 2, title: 'Email' },
		{ id: 3, title: 'Review' }
	];

	function goToStep(id: number) {
		if (id <= currentStep || id === currentStep + 1) {
			currentStep = id;
		}
	}

	function handleSubmit() {
		console.log('Form submitted');
	}
</script>

<Section>
	<Title>Multi-Step Form</Title>

	{#each steps as step}
		<div>
			<button onclick={() => goToStep(step.id)} disabled={step.id > currentStep + 1}>
				<span>{step.id}</span>
				<span>{step.title}</span>
				{#if currentStep === step.id}
					<ChevronDown size={20} />
				{:else}
					<ChevronRight size={20} />
				{/if}
			</button>

			{#if currentStep === step.id}
				<div>
					{#if step.id === 1}
						<label>
							Name
							<input type="text" bind:value={formData.name} />
						</label>
						<button onclick={() => goToStep(2)}>Next</button>
					{:else if step.id === 2}
						<label>
							Email
							<input type="email" bind:value={formData.email} />
						</label>
						<button onclick={() => goToStep(1)}>Previous</button>
						<button onclick={() => goToStep(3)}>Next</button>
					{:else if step.id === 3}
						<p><strong>Name:</strong> {formData.name}</p>
						<p><strong>Email:</strong> {formData.email}</p>
						<button onclick={() => goToStep(2)}>Previous</button>
						<button onclick={handleSubmit}>Submit</button>
					{/if}
				</div>
			{/if}
		</div>
	{/each}
</Section>
