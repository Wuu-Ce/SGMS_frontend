<template>
	<n-config-provider :theme="theme" class="h-full">
		<n-message-provider>
			<router-view />
		</n-message-provider>
	</n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
const { isDark } = useDarks()
const theme = computed(() => (isDark.value ? darkTheme : null))
</script>
