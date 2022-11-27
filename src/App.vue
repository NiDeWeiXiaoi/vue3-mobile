<template>
	<div class="app">
		<router-view />
		<!-- <TabBar v-if="!route.meta.hiddenTotab" /> -->
		<TabBar />
	</div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue';
import {useRoute} from 'vue-router';

const route = useRoute();
</script>

<style scoped></style>
