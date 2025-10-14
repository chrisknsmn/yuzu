<script lang="ts">
	import Section from '$lib/components/Section.svelte';

	// Get data from load function
	let { data } = $props();
</script>

<Section>
	<h1>Users</h1>
	<ul>
		{#each data.users as user}
			{#if user.role === 'Admin'}
				<li class="text-prm">
					<strong>{user.name}</strong> - {user.email} ({user.role})
				</li>
			{:else}
				<li>
					<strong>{user.name}</strong> - {user.email} ({user.role})
				</li>
			{/if}
		{/each}
	</ul>
</Section>
