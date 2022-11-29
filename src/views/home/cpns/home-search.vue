<template>
	<div class="home-search">
		<!--位置信息-->
		<div class="location">
			<div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
			<div class="position">
				<span class="text">我的位置</span>
				<img src="@/assets/img/home/icon_location.png" alt="" />
			</div>
		</div>

		<!-- 日期范围 -->
		<div class="section date-range">
			<div class="begin">
				<div class="date">
					<span class="tip">入住</span>
					<span class="time">{{ beginDate }}</span>
				</div>
			</div>
			<div class="stay" @click="changeDate">共{{ stayDate }}晚</div>
			<div class="end">
				<div class="date">
					<span class="tip">离店</span>
					<span class="time">{{ endDate }}</span>
				</div>
			</div>
		</div>
		<van-calendar
			v-model:show="showCalendar"
			type="range"
			color="#ff9854"
			:round="false"
			@confirm="onConfirm"
		/>
		<div class="section price-counter bottom-gray-line">
			<div class="start">价格不限</div>
			<div class="end">人数不限</div>
		</div>
		<div class="section keyword bottom-gray-line">关键字/位置/民宿</div>
	</div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import useCityStore from '@/stores/modules/city';
import {formatMonthDay, getDays} from '@/utils/format_date';
import {storeToRefs} from 'pinia';

const router = useRouter();
const cityClick = () => {
	router.push('/city');
};

// 当前城市
const cityStore = useCityStore();
const {currentCity} = storeToRefs(cityStore);

// 日期范围
const nowDate = new Date();
const newDate = new Date();
newDate.setDate(nowDate.getDate() + 1);

const beginDate = ref(formatMonthDay(nowDate));
const endDate = ref(formatMonthDay(newDate));

const showCalendar = ref(false);
const stayDate = ref(getDays(nowDate, newDate));
// 设置日期
const onConfirm = (date) => {
	const selectBeginDate = date[0];
	const selectEndDate = date[1];
	beginDate.value = formatMonthDay(selectBeginDate);
	endDate.value = formatMonthDay(selectEndDate);
	showCalendar.value = false;
	stayDate.value = getDays(selectBeginDate, selectEndDate);
};

const changeDate = () => {
	showCalendar.value = true;
};
</script>
<style lang="less" scoped>
.home-search {
	--van-calendar-popup-height: 100%;
}

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

.section {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	color: #999;
	height: 44px;

	.begin {
		flex: 1;
		display: flex;
		height: 44px;
		align-items: center;
	}

	.tip {
		display: flex;
	}
}

.date-range {
	height: 44px;

	.stay {
		flex: 1;
		text-align: center;
		font-size: 12px;
		color: #666;
		text-align: left;
	}
}

.price-counter {
	.start {
		border-right: 1px solid #f8f9f9;
	}
}
</style>
