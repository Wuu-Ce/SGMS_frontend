<template>
	<div id="header">
		<n-grid class="items-center h-14">
			<n-gi :span="20" class="h-8">
				<h1 class="text-2xl px-4">{{ t('header.title') }}</h1>
			</n-gi>
			<n-gi :span="4" class="flex justify-end flex-center">
				<n-a tag="a" href="/about" target="_blank" class="px-2">about</n-a>
				<!-- 语言切换 -->
				<n-tooltip trigger="hover">
					<template #trigger>
						<span class="h-7">
							<i-fa6-solid:language class="text-2xl" @click="toggleLocale" />
						</span>
					</template>
					<span>{{ t('header.switchLanguage') }}</span>
				</n-tooltip>
				<!-- 主题切换 -->
				<n-switch v-model:value="isDark" class="px-2">
					<template #checked-icon>
						<i-ri:moon-clear-fill />
					</template>
					<template #unchecked-icon>
						<i-ic:round-wb-sunny />
					</template>
				</n-switch>
			</n-gi>
		</n-grid>
	</div>
</template>

<script setup lang="ts">
const { isDark } = useDarks()
const { t, toggleLocale } = useLanguage()
</script>

<style scoped></style>
