import type { App } from 'vue'
import { setupLayouts } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes as fileRoutes } from 'vue-router/auto/routes'

fileRoutes.forEach((route) => {
	if (route.children) route.meta = route.children[0].meta
})
export const router = createRouter({
	history: createWebHistory(),
	routes: setupLayouts(fileRoutes),
})

export default (app: App) => app.use(router)
