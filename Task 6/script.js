function nftcard(){
//BODY
document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.flexWrap =  "wrap";


// WRAPPER
let wrapper = document.createElement("div");
wrapper.id = "wrapper";

wrapper.style.width = "330px";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.flexDirection= "column";
wrapper.style.padding =  "20px";
wrapper.style.paddingTop="30px";





// CARD
let card = document.createElement("div");
card.className = "card";
card.style.padding = "20px 20px";
card.style.borderRadius = "17px";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.boxShadow = "3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";

// iMAGES
let cardImg = document.createElement("img");
cardImg.className = "card-image";
cardImg.src = "img/bg.jpg";
cardImg.style.width = "100%";
cardImg.style.borderRadius = "10px";
cardImg.style.marginBottom = "17px";

//TITLES (h3 and p)
let title1 = document.createElement("h3");
title1.className = "card-title";
title1.innerText = "Equilibrium #3429";
title1.style.margin = "0";
title1.style.color = "hsl(0, 0%, 100%)";
title1.style.marginBottom = "17px";


let title2 = document.createElement("p");
title2.className = "card-subtitle";
title2.innerText = "Our Equilibrium collection promotes balance and calm.";
title2.style.margin = "0";
title2.style.maxWidth = "300px";
title2.style.color = "hsl(215, 51%, 70%)";
title2.style.fontSize = "300";
title2.style.lineHeight = "25px";
title2.style.marginBottom = "17px";

//
let items = document.createElement("div");
items.style.display = "flex";
items.style.justifyContent = "space-between";

let value = document.createElement("div");
value.className = "card-value";

let pseudoItem = document.createElement("img");
pseudoItem.className = "value-icon";
pseudoItem.src = "img/icon-ethereum.svg";
pseudoItem.style.marginRight = "5px";

let valueText = document.createElement("p");
valueText.className = "value-text";
valueText.innerText = "0.041 ETH";
valueText.style.margin = "0";
valueText.style.display = "inline-block";
valueText.style.color = "hsl(178, 100%, 50%)";
valueText.style.fontWeight = "bold";

let timeItems = document.createElement("div");
timeItems.className = "time";
timeItems.style.display = "flex";
timeItems.style.alignItems = "center";
timeItems.style.marginBottom = "17px";

let timeImage = document.createElement("img");
timeImage.className = "time-img";
timeImage.src = "img/icon-clock.svg";
timeImage.style.marginRight = "5px";

let timeItem = document.createElement("time");
timeItem.className = "time-item";
timeItem.innerText = "3 days left";
timeItem.style.color = "hsl(215, 51%, 70%)";

let line = document.createElement("hr");
line.style.borderColor = "hsl(215, 32%, 27%";

let user = document.createElement("div");
user.className = "user";
user.style.marginTop = "22px";
user.style.display = "flex";
user.style.alignItems = "center";

let userImg = document.createElement("img");
userImg.className = "avatar";
userImg.src = "img/image-avatar.png";
userImg.style.maxWidth = "45px";
userImg.style.marginRight = "15px";
userImg.style.border = "2px solid white";
userImg.style.borderRadius = "50%";

let userText = document.createElement("span");
userText.className = "user-txt";
userText.innerText = "Creation of";
userText.style.color = "hsl(215, 51%, 70%)";
userText.style.textAlign = "center";

let userName = document.createElement("span");
userName.className = "userName";
userName.innerText = " Jules Wyvern";
userName.style.color = "white";

document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(cardImg);
card.appendChild(title1);
card.appendChild(title2);
card.appendChild(items);
items.appendChild(value);
value.appendChild(pseudoItem);
value.appendChild(valueText);
items.appendChild(timeItems);
timeItems.appendChild(timeImage);
timeItems.appendChild(timeItem);
card.appendChild(line);
card.appendChild(user);
user.appendChild(userImg);
user.appendChild(userText);
userText.appendChild(userName);
}
//console.log(card);

alert("Я оцениваю свою работу на 110 баллов");
nftcard();
//nftcard();
//nftcard();
