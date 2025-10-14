<script lang="ts">
	export let data;
	console.log('User on client:', data.user);
</script>

<main class="p-8 text-center">
	<h1 class="text-2xl font-bold">Welcome!</h1>
	{#if data.user}
		<p>Hello, {data.user.name} 👋</p>
	{:else}
		<p>Not User</p>
	{/if}
</main>
