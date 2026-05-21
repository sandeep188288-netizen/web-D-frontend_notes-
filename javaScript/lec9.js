// date : object type   -> everything is stored in millisecond
const d = new Date();

console.log(d);
console.log(d.toDateString())
console.log(d.getDate())
console.log(d.getDay());
// sun, mon, tue, wed, thu, fri, sat
//  0  , 1,   2 ,  3 ,  4   5  , 6
console.log(d.getMonth());      // jan = 0,feb = 1,...dec = 11

const now = Date.now();
console.log(now);

const d1 = new Date("2026-05-10") // string me actual hoga sab        // year-month-date
console.log(d1);
console.log(d1.toDateString())  //Sun May 10 2026

const date = new Date(2026,4,10)    // number me 0 se count hoga
console.log(date);
console.log(date.toString())    //Sun May 10 2026 

// year / month / date / hour / minutes / second / millisecond
// Number -> 0 based start honge
// String -> 1 based start honge

const d2 = new Date();
d2.setDate(10);
d2.setFullYear(2026);
d.setMonth(5);
console.log(d2.toLocaleDateString());       // 5/10/2026

// date calculation. *********

const date1 = new Date();
const date2 = new Date("2026-05-12");

console.log(date2-date1);
// DIFFERENCE IN DATE IS MILLISECOND

// COUNTDOWN TIMER for olympics
// days , hours , minutes , seconds

const date3 = new Date();
const date4 = new Date("2026-05-10");

const d5 = date4 - date3;
const days = Math.floor(date/(1000*60*60*24));
const hour = Math.floor((date/(1000*60*60))%24);
const minute = Math.floor((date/(1000*60*60))%60);
const second = Math.floor((date/(1000*60*60))%60);
console.log(`Olympics CountDown Time: Days:${days} hour:${hour} minute:${minute} second:${second}`);
console.log(user.address);


