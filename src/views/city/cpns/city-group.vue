<template>
	<div class="CityGroup">
		<van-index-bar :sticky="false" :index-list="indexList">
			<van-index-anchor index="热门" />
			<div class="list">
				<template v-for="(city, index) in cityGroup.hotCities">
					<div class="city" @click="chooseCity(city)">{{ city.cityName }}</div>
				</template>
			</div>

			<template v-for="(item, index) in cityGroup.cities" :key="index">
				<van-index-anchor :index="item.group" />
				<template v-for="(city, index) in item.cities" :key="index">
					<van-cell :title="city.cityName" @click="chooseCity(city)" />
				</template>
			</template>
		</van-index-bar>
	</div>
</template>

<script setup>
import {defineProps, computed} from 'vue';
import {useRouter} from 'vue-router';
import useCityStore from '@/stores/modules/city';

const propsp = defineProps({
	cityGroup: {
		type: Object,
		default: () => ({})
	}
});

const indexList = computed(() => {
	const list = propsp.cityGroup.cities.map((item) => item.group);
	list.unshift('#');
	return list;
});

const router = useRouter();
const cityStore = useCityStore();
const chooseCity = (city) => {
	cityStore.currentCity = city;
	router.back();
};
</script>
<style lang="less" scoped>
.list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 10px;
	padding-right: 25px;

	.city {
		width: 70px;
		height: 28px;
		border-radius: 14px;
		font-size: 12px;
		color: #000;
		text-align: center;
		line-height: 28px;
		background-color: #fff4ec;
		margin: 10px 0;
	}
}
</style>
