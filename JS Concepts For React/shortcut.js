/** various shortcut */

// 1. ternary operator

/** number to string */
const num = 52;
const numStr = num + '';
// console.log(numStr);

/** string to number */
const str = '560';
const strNum = +str;
// console.log(strNum);

/**  */
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
/** use '&' if the left side is true then right side will be executed */
isActive && showUser();
/** use '||' if the left side is false then right side will be executed */
isActive || hideUser();

isActive = !isActive;