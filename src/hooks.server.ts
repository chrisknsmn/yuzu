// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = {
		id: '123',
		name: 'Chris',
		email: 'example@gmail.com'
	};
	return resolve(event);
};
