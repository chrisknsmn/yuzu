<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Title from '$lib/components/Title.svelte';
	import { Loader2 } from 'lucide-svelte';

	// Get data from load function
	let { data } = $props();

	let searchField: 'name' | 'email' | 'role' = $state('name');
	let searchQuery = $state('');
	let isLoading = $state(false);
	let debouncedQuery = $state('');
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	// Watch for searchQuery changes and debounce
	$effect(() => {
		searchQuery;

		isLoading = true;

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			debouncedQuery = searchQuery;
			isLoading = false;
		}, 100);
	});

	// Filter users based on debounced search
	let filteredUsers = $derived(
		data.users.filter((user) => {
			const fieldValue = user[searchField].toLowerCase();
			return fieldValue.includes(debouncedQuery.toLowerCase());
		})
	);
</script>

<Section>
	<Title>Users</Title>

	<div class="mt-4">
		<select bind:value={searchField}>
			<option value="name">Name</option>
			<option value="email">Email</option>
			<option value="role">Role</option>
		</select>

		<input type="text" bind:value={searchQuery} placeholder="Search..." />

		{#if isLoading}
			<Loader2 class="loader" size={16} />
		{/if}
	</div>

	<ul>
		{#each filteredUsers as user}
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

<style>
	:global(.loader) {
		display: inline-block;
		margin-left: 8px;
		animation: spin 0.6s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
