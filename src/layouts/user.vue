<template>
	<n-layout has-sider class="h-full">
		<n-layout-sider
			class="transition-all border-r"
			:class="isCollapse ? '!w-15' : '!w-40'"
		>
			<user-nav :collapse="isCollapse" />
		</n-layout-sider>
		<n-layout>
			<n-layout-header class="!p-0 border-b">
				<div class="flex justify-items-stretch items-center">
					<span class="px-4 h-8" @click="onCollapse">
						<i-ep:expand v-if="isCollapse" class="text-2xl" />
						<i-ep:fold v-else class="text-2xl" />
					</span>
					<user-header class="flex-grow" />
				</div>
			</n-layout-header>
			<n-layout-content>
				<router-view />
			</n-layout-content>
		</n-layout>
	</n-layout>
</template>

<script setup lang="ts">
let isCollapse: any = ref(false)

const onCollapse = () => {
	isCollapse.value = !isCollapse.value
}
</script>

<style scoped lang="css"></style>
