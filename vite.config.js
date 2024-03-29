import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { VitePluginFonts} from 'vite-plugin-fonts'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		VitePluginFonts({
			google: {
				families: ['Poppins']
			}
		}),
		vuetify({ autoImport: true }),
	],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			"public": path.resolve(__dirname, './public')
		}
	}
})
