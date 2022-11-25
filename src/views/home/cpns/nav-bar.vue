<template>
	<div class="home">
		<div class="nav-bar">
			<div class="title">{{ title }}</div>
		</div>
	</div>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
	title: {
		type: String,
		default: ''
	}
});
</script>
<style lang="less" scoped>
.nav-bar {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 46px;
	border-bottom: 1px solid #f2f2f2;

	.title {
		color: var(--primary-color);
		font-size: 16px;
		font-weight: 500;
	}
}
</style>
