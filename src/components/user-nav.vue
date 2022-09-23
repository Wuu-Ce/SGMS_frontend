<template>
	<n-menu :options="menuList" @update:value="handleMenu" />
</template>

<script setup lang="ts">
// 定义路由单元数据结构
interface IRoute {
	path: string
	name: string
	meta: {
		icon: string
		title: string
	}
}
const menuList: IRoute[] = reactive([
	{
		name: 'teacher',
		path: '/teacher',
		meta: {
			icon: 'el-icon-home',
			title: 'home',
		},
	},
])
const handleMenu = () => {}
</script>

<style scoped></style>
