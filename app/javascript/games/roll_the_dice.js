const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

const img1 = document.getElementsByClassName("img1")[0];
const img2 = document.getElementsByClassName("img2")[0];

const imgNumber1 =  `images/dice${randomNumber1}.png`;
const imgNumber2 = `images/dice${randomNumber2}.png`;

img1.setAttribute("src", `${imgNumber1}` );
img2.setAttribute("src", `${imgNumber2}`);

document.querySelector("h1").innerText;

const dice = () => {
  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "🚩 Player 1 wins!";
    setTimeout(function() {
      document.querySelector("h1").innerText = "Refresh me!";
    }, 2000);
  } else if (randomNumber1 < randomNumber2){
      document.querySelector("h1").innerText = "Player 2 wins! 🚩";
      setTimeout(function() {
        document.querySelector("h1").innerText = "Refresh me!";
      }, 2000);
  } else {
      document.querySelector("h1").innerText = "🚩 Draw! 🚩";
      setTimeout(function() {
        document.querySelector("h1").innerText = "Refresh me!";
      }, 2000);
  }
}

export {dice};
