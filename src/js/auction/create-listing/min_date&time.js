/**
 * This function formate and get current date and time .
 * @param {String} today The current time and date.
 * @param {string} todayTime The formatted current date.
 */
export function minDateTime() {
	const today = new Date();
	let currentHours = today.getHours();
	let currentMinutes = today.getMinutes();
	let currentMonths = today.getMonth() + 1;
	let currentDays = today.getDate();

	if (currentMonths < 10) currentMonths = "0" + currentMonths;
	if (currentDays < 10) currentDays = "0" + currentDays;
	if (currentHours < 10) currentHours = "0" + currentHours;
	if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;

	let todayTime = today.getFullYear() + "-" + currentMonths + "-" + currentDays + "T" + currentHours + ":" + currentMinutes;

	return todayTime;
}
