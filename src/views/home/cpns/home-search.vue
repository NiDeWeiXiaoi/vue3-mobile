<template>
	<div class="home-search">
		<div class="location">
			<div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
			<div class="position">
				<span class="text">我的位置</span>
				<img src="@/assets/img/home/icon_location.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import useCityStore from '@/stores/modules/city';
import {storeToRefs} from 'pinia';

const router = useRouter();
const cityClick = () => {
	router.push('/city');
};

const cityStore = useCityStore();
const {currentCity} = storeToRefs(cityStore);
</script>
<style lang="less" scoped>
.location {
	display: flex;
	height: 44px;
	align-items: center;
	padding: 0 20px;

	.city {
		flex: 1;
		color: #333;
	}

	.position {
		width: 74px;

		.text {
			font-size: 12px;
			color: #666;
		}

		img {
			margin-left: 5px;
			vertical-align: sub;
			width: 18px;
			height: 18px;
		}
	}
}
</style>
