import mod from '../my-rust-app/pkg/my_rust_app_bg.wasm';
import { greet, initSync } from '../my-rust-app/pkg/my_rust_app';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const memory = new WebAssembly.Memory({ initial: 64, maximum: 64 });
		initSync({ module: mod, memory });

		return new Response(greet('World'));
	},
} satisfies ExportedHandler<Env>;
