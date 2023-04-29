import { load } from "../../localstorage/save_load_remove.js";

const userNav = document.querySelectorAll("#nav-user");
const navNew = document.querySelectorAll("#login");
const addItem = document.querySelector(".add-btn");

/**
 * This function stops none users to visit home page or profile page
 * @param {Element} deleteBtn This is the html location of the element button.
 * @param {string} token This is the localStorage key with access token value.
 * @param {string} userToken This is the localStorage key with user profile data value.
 */
export function checkUser() {
	const token = load("token");
	const userToken = load("profile");

	if (!token && !userToken) {
		console.log("No token in storage");

		userNav.forEach((element) => {
			element.classList.add("d-none");
		});

		navNew.forEach((element) => {
			element.classList.remove("d-none");
		});

		if (addItem) {
			addItem.classList.add("d-none");
		}
	}
}
