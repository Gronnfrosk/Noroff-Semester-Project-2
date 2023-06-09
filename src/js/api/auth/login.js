import { API_AUCTION_URL } from "../constants.js";
import { save } from "../../localstorage/save_load_remove.js";

const action = "/auth/login";
const method = "post";

/**
 * This async function sends an API "POST" request and informs if successful or not.
 * @param {Object} profile The data that will be sent to the "POST" request.
 * @param {String} loginURL This is the complete url needed for "POST" request.
 * @param {String} method The HTTP request method "POST".
 * @param {string} accessToken This is the localStorage access token value.
 * @param {string} user This is the localStorage user profile data value.
 */
export async function login(profile) {
	const loginURL = API_AUCTION_URL + action;

	const response = await fetch(loginURL, {
		headers: { "Content-type": "application/json" },
		method,
		body: JSON.stringify(profile),
	});

	if (response.ok) {
		const { accessToken, ...user } = await response.json();

		save("token", accessToken);
		save("profile", user);

		alert("You are now logged in at AuctionPoint.");
		window.location.href = "../index.html";
	} else {
		alert("Error! You have entered invalid username or password combination.");
	}
}
