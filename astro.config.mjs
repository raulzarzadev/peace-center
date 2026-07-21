// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

const localeAlternates = {
	"/": "/en/",
	"/en/": "/",
	"/politica-privacidad/": "/en/privacy-policy/",
	"/en/privacy-policy/": "/politica-privacidad/",
	"/terminos-servicio/": "/en/terms-of-service/",
	"/en/terms-of-service/": "/terminos-servicio/",
	"/eliminacion-datos/": "/en/data-deletion/",
	"/en/data-deletion/": "/eliminacion-datos/",
};

// https://astro.build/config
export default defineConfig({
	site: "https://www.peacecenterlapaz.com",
	integrations: [
		react(),
		sitemap({
			serialize(item) {
				const pathname = new URL(item.url).pathname;
				const alternatePath = localeAlternates[pathname];

				return {
					...item,
					lastmod: new Date().toISOString(),
					...(alternatePath && !item.links?.length
						? {
							links: [
								{ lang: "es", hreflang: "es", url: new URL(pathname.startsWith("/en/") ? alternatePath : pathname, "https://www.peacecenterlapaz.com").href },
								{ lang: "en", hreflang: "en", url: new URL(pathname.startsWith("/en/") ? pathname : alternatePath, "https://www.peacecenterlapaz.com").href },
								{ lang: "x-default", hreflang: "x-default", url: "https://www.peacecenterlapaz.com/" },
							],
						}
						: {}),
				};
			},
			i18n: {
				defaultLocale: "es",
				locales: {
					es: "es",
					en: "en",
				},
			},
		}),
	],
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: false,
			redirectToDefaultLocale: true,
		},
	},
	redirects: {
		"/es": "/",
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
