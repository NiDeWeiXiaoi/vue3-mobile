<template>
	<div class="tab-bar">
		<van-tabbar route v-model="active">
			<template v-for="(item, index) in tabBarData">
				<van-tabbar-item :to="item.path">
					<span class="text" :class="{textActive: active === index}">{{ item.text }}</span>
					<template #icon>
						<img v-if="active !== index" :src="getAssetURL(item.image)" alt="" />
						<img v-else :src="getAssetURL(item.imageActive)" alt="" />
					</template>
				</van-tabbar-item>
			</template>
			<!-- <van-tabbar-item to="/home" icon="home-o">标签</van-tabbar-item>
			<van-tabbar-item to="/favor" icon="search">标签</van-tabbar-item>
			<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
			<van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
		</van-tabbar>
		<!-- <template v-for="(item, index) in tabBarData">
			<div
				class="tab-bar-item"
				:class="{active: currentIndex === index}"
				@click="itemClick(index, item)"
			>
				<img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" />
				<img v-else :src="getAssetURL(item.imageActive)" alt="" />
				<span class="text">{{ item.text }}</span>
			</div>
		</template> -->
	</div>
</template>

<script lang="ts" setup>
import tabBarData from '@/data/tabbar.js';
import {getAssetURL} from '@/utils/load_assets.js';
import {ref} from 'vue';

const active = ref(0);
</script>
<style lang="less" scoped>
.tab-bar {
	.text {
		color: #646566;

		&.textActive {
			color: var(--primary-color);
		}
	}
}
</style>
