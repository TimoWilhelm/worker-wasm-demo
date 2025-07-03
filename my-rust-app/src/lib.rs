mod utils;

use wasm_bindgen::prelude::*;

use crate::utils::set_panic_hook;

use web_sys::console;

#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
    set_panic_hook();
	console::log_1(&"Hello using web-sys".into());
    Ok(())
}

#[wasm_bindgen]
pub fn greet(subject: &str) -> String {
    format!("Hello, {}!", subject)
}
