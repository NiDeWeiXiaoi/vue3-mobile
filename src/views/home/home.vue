<template>
	<div class="home">
		<HomeNavBar title="旅行旅途" />
		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="banner" />
		</div>
		<HomeSearch />
	</div>
</template>

<script setup>
import HomeNavBar from './cpns/nav-bar.vue';
import HomeSearch from './cpns/home-search.vue';
</script>
<style lang="less" scoped>
.banner {
	img {
		width: 100%;
	}
}
</style>
