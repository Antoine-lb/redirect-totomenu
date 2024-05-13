import { redirect } from '@sveltejs/kit';
import { PUBLIC_REDIRECT_TO } from '$env/static/public';

export function handle({ event, resolve }) {
	const newUrl = PUBLIC_REDIRECT_TO + event.url.pathname + event.url.search;

	// Perform the redirection
	throw redirect(308, newUrl);
}
