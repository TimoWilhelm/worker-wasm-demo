import mod from '../my-rust-app/pkg/my_rust_app_bg.wasm';
import initWasm, { greet } from '../my-rust-app/pkg/my_rust_app';

await initWasm(mod);

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(greet("World"));
	},
} satisfies ExportedHandler<Env>;
