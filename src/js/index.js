import * as global from "./global-modules/index.js";
import * as user from "./user-management/index.js";
import { checkUser } from "./localstorage/check_storage.js";

global.navHamburger();
global.inputValidation();

//global.navUser();

const path = location.pathname;

if (path === "/Noroff-Semester-Project-2/html/signin.html" || path === "/html/signin.html") {
	user.setLoginFormListener();
	console.log("Hello login site");
} else if (path === "/Noroff-Semester-Project-2/html/register.html" || path === "/html/register.html") {
	user.setRegisterFormListener();
	console.log("Hello register site");
} else if (
	path === "/Noroff-Semester-Project-2/" ||
	path === "/Noroff-Semester-Project-2/html/profile.html" ||
	path === "/Noroff-Semester-Project-2/html/specific_auction_item.html" ||
	path === "/index.html" ||
	path === "/html/profile.html" ||
	path === "/specific_auction_item.html"
) {
	console.log("Hello home, profile and specific page");
	global.checkUserNav();
	user.logout();
} else if (
	path === "/Noroff-Semester-Project-2/html/profile.html" ||
	path === "/Noroff-Semester-Project-2/html/specific_auction_item.html" ||
	path === "/html/profile.html" ||
	path === "/specific_auction_item.html"
) {
	checkUser();
} else if (path === "/Noroff-Semester-Project-2/" || path === "/index.html") {
	global.checkUserNav();
	console.log("Hello home page");
}

console.log("Hello main index javascript");
