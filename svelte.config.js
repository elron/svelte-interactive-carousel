// import adapter from '@sveltejs/adapter-auto';
import netlify from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter: adapter()
    adapter: netlify({ edge: true }), // temporarily fix https://github.com/sveltejs/kit/issues/6462
  },
};

export default config;
