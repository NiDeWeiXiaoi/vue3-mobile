<template>
	<div class="city top-page">
		<!--搜索框-->
		<van-search
			v-model="SearchValue"
			shape="round"
			show-action
			@cancel="onCancel"
			placeholder="城市/区域/位置"
		/>

		<!--tab切换-->
		<van-tabs v-model:active="active" color="#ff9854" line-height="3">
			<template v-for="(value, key, index) in cityAll" :key="key">
				<van-tab :title="value.title"></van-tab>
			</template>
			<!-- <van-tab title="国内 港澳台"></van-tab>
			<van-tab title="海外"></van-tab> -->
		</van-tabs>
	</div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import useCityStore from '@/stores/modules/city';
import {storeToRefs} from 'pinia';

const router = useRouter();

// 搜索功能
const SearchValue = ref('');
const onCancel = () => {
	router.back();
};

// tab切换
const active = ref(0);

// store获取数据
const cityStore = useCityStore();
cityStore.fetchAllCityData();
const {cityAll} = storeToRefs(cityStore);
console.log(cityAll);
</script>
<style lang="less" scoped></style>
