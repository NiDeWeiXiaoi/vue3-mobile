<template>
	<div class="city top-page">
		<div class="top">
			<!--搜索框-->
			<van-search
				v-model="SearchValue"
				shape="round"
				show-action
				@cancel="onCancel"
				placeholder="城市/区域/位置"
			/>

			<!--tab切换-->
			<van-tabs v-model:active="Tabactive" color="#ff9854" line-height="3">
				<template v-for="(value, key, index) in cityAll" :key="key">
					<van-tab :title="value.title" :name="key"></van-tab>
				</template>
			</van-tabs>
		</div>
		<div class="content">
			<CityGroup :cityGroup="currentGroup" />
		</div>
	</div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router';
import useCityStore from '@/stores/modules/city';
import {storeToRefs} from 'pinia';
import CityGroup from './cpns/city-group.vue';

const router = useRouter();

// 搜索功能
const SearchValue = ref('');
const onCancel = () => {
	router.back();
};

// tab切换
const Tabactive = ref(0);

// store获取数据
const cityStore = useCityStore();
cityStore.fetchAllCityData();
const {cityAll} = storeToRefs(cityStore);

console.log('111', cityAll.value[Tabactive.value]);

// 获取当前tab标签数据，使用computed将数据变成响应式
const currentGroup = computed(() => cityAll.value[Tabactive.value]);
</script>
<style lang="less" scoped>
.city {
	.content {
		height: calc(100vh - 98px);
		overflow-y: auto;
	}
}
</style>
