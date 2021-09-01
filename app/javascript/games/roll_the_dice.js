const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

const img1 = document.getElementsByClassName("img1")[0];
const img2 = document.getElementsByClassName("img2")[0];

const dice = () => {

  if (img1 || img2) {

  const imgNumber1 =  `https://res.cloudinary.com/batch-588/image/upload/v1630489153/dice/dice${randomNumber1}.png`;
  const imgNumber2 = `https://res.cloudinary.com/batch-588/image/upload/v1630489153/dice/dice${randomNumber2}.png`;

  img1.setAttribute("src", `${imgNumber1}` );
  img2.setAttribute("src", `${imgNumber2}`);

  document.querySelector("h1").innerText;

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
}

export {dice};
