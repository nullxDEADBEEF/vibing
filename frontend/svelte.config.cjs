/** @type {import('@sveltejs/kit').Config} */
const config = {
  ...config,
  kit: {
    vite: {
      server: {
        watch: {
          usePolling: true,
        },
      },
    },
  },
};
