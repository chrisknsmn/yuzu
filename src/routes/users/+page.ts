import usersData from '$lib/assets/data/users.json';

export async function load() {
	// API call
	// const response = await fetch('https://api.example.com/users');
	// const users = await response.json();

	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 300));

	return {
		users: usersData
	};
}
