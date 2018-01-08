import babel from "rollup-plugin-babel";
import babelrc from "babelrc-rollup";

let pkg = require("./package.json");
let external = Object.keys(pkg.dependencies);
let plugins = [
	babel(
		babelrc({
			presets: [["es2015", { modules: false }]],
		})
	),
];

export default {
	entry: "./index.js",
	plugins: plugins,
	external: external,
	exports: "named",
	targets: [
		{ format: "cjs", dest: "dist/html-matcher.cjs.js" },
		{ format: "es", dest: "dist/html-matcher.es.js" },
	],
};
