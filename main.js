"use Sctrict";

//dad variables and functions
const headerDad = document.getElementById("dad");
const topCard = document.getElementById("top");

topCard.addEventListener("click", function () {
  const parent = document.getElementById("top");
  const child = document.getElementById("dad");
  const p = document.createElement("p");
  const node = document.createTextNode(
    "Happy Birthday son, today is your first birthday. Over this past year i've watched you grow so fast. You were my little baby boy, I was so scared but so in love the moment I saw you. I've watched you grow into the most handsome little baby and watched you smile almost every second of the way. You have the most contagious smile and laughter, you shine so bright, you radiate happiness and love, I hope me, your mom and the world give you a life where that can be you, forever. I just know you're going to make a difference in this world, and you already have with your mom and I, but I know you are going to do more than that. I can't wait to see who you grow up and become, I can't wait to watch you grow.. well I guess I can wait a while cause you're breaking my heart growing up this fast in a year. I love you Aziel, my little papa chicken head."
  );
  p.appendChild(node);
  setTimeout(function () {
    parent.replaceChild(p, child);
  }, 1000);
  parent.classList.add("cardAnimation");
});

//mom variables and functions
const headerMom = document.getElementById("mom");
const botCard = document.getElementById("bot");

botCard.addEventListener("click", function () {
  const parent = document.getElementById("bot");
  const child = document.getElementById("mom");
  const p = document.createElement("p");
  const node = document.createTextNode(
    "Happy Birthday son, today is your first birthday. Over this past year i've watched you grow so fast. You were my little baby boy, I was so scared but so in love the moment I saw you. I've watched you grow into the most handsome little baby and watched you smile almost every second of the way. You have the most contagious smile and laughter, you shine so bright, you radiate happiness and love, I hope me, your mom and the world give you a life where that can be you, forever. I just know you're going to make a difference in this world, and you already have with your mom and I, but I know you are going to do more than that. I can't wait to see who you grow up and become, I can't wait to watch you grow.. well I guess I can wait a while cause you're breaking my heart growing up this fast in a year. I love you Aziel, my little papa chicken head."
  );
  p.appendChild(node);
  setTimeout(function () {
    parent.replaceChild(p, child);
  }, 1000);
  parent.classList.add("cardAnimation");
});

// left/right variables
const left = document.getElementById("left");
const right = document.getElementById("right");
const imgContainer = document.getElementById("img");
const topText = document.getElementById("child");
const img1 = document.getElementById("img1");

left.addEventListener("click", function () {
  console.log("gg");
  img.classList.add("cardAnimation");
});

right.addEventListener("click", function () {
  console.log("gg");
  imgContainer.classList.add("imgAnimation");
  setTimeout(function () {
    topText.classList.add("hidden");
    img1.classList.remove("hidden");
  }, 1000);
});
