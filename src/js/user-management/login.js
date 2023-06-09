import { login } from "../api/auth/login.js";

/**
 * This function triggers by a form submit to collect form data and send to API if the validation is successful.
 * @param {Element} form This is a html element where a form is displayed.
 * @param {Object} formData This is a collection of data from form.
 * @param {Object} profile This is a collection of data by key and value from submit form.
 * @function login() This function sends the profile data to an API "POST" method and informs whether the login was successful or not.
 */
export function setLoginFormListener() {
	const form = document.querySelector("#loginForm");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const profile = Object.fromEntries(formData.entries());

		// Send it to the API if form is successful validated
		if (form.checkValidity()) {
			login(profile);
		}
	});
}
