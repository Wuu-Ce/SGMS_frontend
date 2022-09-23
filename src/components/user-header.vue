<template>
	<div id="header">
		<n-grid class="items-center h-14">
			<n-gi :span="20" class="h-8">
				<h1 class="text-2xl">{{ t('header.title') }}</h1>
			</n-gi>
			<n-gi :span="4" class="flex justify-end flex-center">
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
				<!-- 用户资料 -->
				<n-dropdown
					trigger="hover"
					:options="userOptions"
					:show-arrow="true"
					@select="handleCommand"
				>
					<n-avatar round src="../img/userIcon.svg" class="mr-5"></n-avatar>
				</n-dropdown>
			</n-gi>
		</n-grid>
	</div>
</template>

<script setup lang="ts">
import UserIcon from '~icons/ep/user'
import LogoutIcon from '~icons/ri/logout-box-line'
import { NIcon } from 'naive-ui'
import type { Component } from 'vue'

const { isDark } = useDarks()
const { t, toggleLocale } = useLanguage()

interface funcObj {
	func: Function
}

const router = useRouter()

const renderIcon = (icon: Component) => {
	return () => {
		return h(NIcon, null, {
			default: () => h(icon),
		})
	}
}
const userOptions = reactive([
	{
		label: computed(() => {
			return t('header.userInfo')
		}),
		key: 'profile',
		icon: renderIcon(UserIcon),
	},
	{
		label: computed(() => {
			return t('header.logout')
		}),
		key: {
			func: () => {
				router.push('/login')
			},
		},
		icon: renderIcon(LogoutIcon),
	},
])

const handleCommand = (e: funcObj) => {
	e.func()
}
</script>

<style scoped></style>
