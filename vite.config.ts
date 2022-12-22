import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		solid({ ssr: true }),
		Unocss({}),
	]
})
