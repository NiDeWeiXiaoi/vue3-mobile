import {defineStore} from 'pinia';
import {getCityAll} from '@/services/modules/city';

const useCityStore = defineStore('city', {
	state: () => ({
		cityAll: {},
		currentCity: {
			cityName: '长沙'
		}
	}),
	actions: {
		async fetchAllCityData() {
			const res = await getCityAll();
			this.cityAll = res.data;
			console.log(res.data);
			console.log('state:', this.cityAll);
		}
	}
});

export default useCityStore;
