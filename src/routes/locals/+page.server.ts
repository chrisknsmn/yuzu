export async function load({ locals }) {
	console.log('User on server:', locals.user);
	return { user: locals.user };
}
