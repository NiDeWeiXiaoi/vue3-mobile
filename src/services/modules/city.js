import vRequest from '../request';

export function getCityAll() {
	return vRequest.get({
		url: '/city/all'
	});
}
