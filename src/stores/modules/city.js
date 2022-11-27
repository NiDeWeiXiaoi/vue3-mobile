import {defineStore} from 'pinia';
import {getCityAll} from '@/services/modules/city';

const useCityStore = defineStore('city', {
	state: () => ({
		cityAll: {}
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
