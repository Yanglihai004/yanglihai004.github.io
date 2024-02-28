// let myImage = document.querySelector("img");

// myImage.onclick = function () {
//     let mySrc = myImage.getAttribute("src");
//     if (mySrc === "images/Firefox_logo.png") {
//         myImage.setAttribute("src", "images/Chrome_logo.png");
//     } else {
//         myImage.setAttribute("src", "images/Firefox_logo.png");
//     }
// };
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function SetUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        SetUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla! Cool! " + myName;
    }
}

if (!localStorage.getItem("name")) {
    SetUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla! Cool! " + storedName;
}

myButton.onclick = function () {
    SetUserName();
};