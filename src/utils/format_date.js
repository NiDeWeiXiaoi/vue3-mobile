import dayjs from 'dayjs';

export function formatMonthDay(date) {
	return dayjs(date).format('MM月DD日');
}

export function getDays(beginDate, endDate) {
	return dayjs(endDate).diff(beginDate, 'day');
}
