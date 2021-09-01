// const crash = document.querySelector(".w");
// const kick  = document.querySelector(".a");
// const snare = document.querySelector(".s");
// const tom1 = document.querySelector(".d");
// const tom2 = document.querySelector(".j");
// const tom3 = document.querySelector(".k");
// const tom4 = document.querySelector(".l");

// const drums = () => {
//   crash.addEventListener("click", () => {
//     const crashSound = new Audio('sounds/crash.mp3');
//     crashSound.play();
//     crash.classList.add("pressed");
//     setTimeout(function() {
//         crash.classList.remove("pressed");
//     }, 500);
//   });

//   kick.addEventListener("click", () => {
//       const kickSound = new Audio('sounds/kick-bass.mp3');
//       kickSound.play();
//       kick.classList.add("pressed");
//       setTimeout(function() {
//           kick.classList.remove("pressed");
//       }, 500);
//   });

//   snare.addEventListener("click", () => {
//       const snareSound = new Audio('sounds/snare.mp3');
//       snareSound.play();
//       snare.classList.add("pressed");
//       setTimeout(function() {
//           snare.classList.remove("pressed");
//       }, 500);
//   });

//   tom1.addEventListener("click", () => {
//       const tom = new Audio('sounds/tom-1.mp3');
//       tom.play();
//       tom1.classList.add("pressed");
//       setTimeout(function() {
//           tom1.classList.remove("pressed");
//       }, 500);
//   });

//   tom2.addEventListener("click", () => {
//       const tom = new Audio('sounds/tom-2.mp3');
//       tom.play();
//       tom2.classList.add("pressed");
//       setTimeout(function() {
//           tom2.classList.remove("pressed");
//       }, 500);
//   });

//   tom3.addEventListener("click", () => {
//       const tom = new Audio('sounds/tom-3.mp3');
//       tom.play();
//       tom3.classList.add("pressed");
//       setTimeout(function() {
//           tom3.classList.remove("pressed");
//       }, 500);
//   });

//   tom4.addEventListener("click", () => {
//       const tom = new Audio('sounds/tom-4.mp3');
//       tom.play();
//       tom4.classList.add("pressed");
//       setTimeout(function() {
//           tom4.classList.remove("pressed");
//       }, 500);
//   });


//   document.addEventListener('keyup', (event) => {
//       if (event.key === "w") {
//           const crash = new Audio('sounds/crash.mp3');
//           crash.play();
//           const activeButton = document.querySelector("." + event.key);
//           activeButton.classList.add("pressed");
//           setTimeout(function() {
//               activeButton.classList.remove("pressed");
//           }, 500);
//       }
//   });

//   document.addEventListener('keyup', (event) => {
//       if (event.key === "a") {
//           const kick = new Audio('sounds/kick-bass.mp3');
//           kick.play();
//           const activeButton = document.querySelector("." + event.key);
//           activeButton.classList.add("pressed");
//           setTimeout(function() {
//               activeButton.classList.remove("pressed");
//           }, 500);
//       }
//   });

//   document.addEventListener('keyup', (event) => {
//       if (event.key === "s") {
//           const snare = new Audio('sounds/snare.mp3');
//           snare.play();
//           const activeButton = document.querySelector("." + event.key);
//           activeButton.classList.add("pressed");
//           setTimeout(function() {
//               activeButton.classList.remove("pressed");
//           }, 500);
//       }
//   });

//   document.addEventListener('keyup', (event) => {
//       if (event.key === "d") {
//           const tom1 = new Audio('sounds/tom-1.mp3');
//           tom1.play();
//           const activeButton = document.querySelector("." + event.key);
//           activeButton.classList.add("pressed");
//           setTimeout(function() {
//               activeButton.classList.remove("pressed");
//           }, 500);
//       }
//   });

//   document.addEventListener('keyup', (event) => {
//       if (event.key === "j") {
//           const tom2 = new Audio('sounds/tom-2.mp3');
//           tom2.play();
//           const activeButton = document.querySelector("." + event.key);
//           activeButton.classList.add("pressed");
//           setTimeout(function() {
//               activeButton.classList.remove("pressed");
//           }, 500);
//       }
//   });

//   document.addEventListener('keyup', (event) => {
//       if (event.key === "k") {
//           const tom3 = new Audio('sounds/tom-3.mp3');
//           tom3.play();
//           const activeButton = document.querySelector("." + event.key);
//           activeButton.classList.add("pressed");
//           setTimeout(function() {
//               activeButton.classList.remove("pressed");
//           }, 500);
//       }
//   });

//   document.addEventListener('keyup', (event) => {
//       if (event.key === "l") {
//           const tom4 = new Audio('sounds/tom-4.mp3');
//           tom4.play();
//           const activeButton = document.querySelector("." + event.key);
//           activeButton.classList.add("pressed");
//           setTimeout(function() {
//               activeButton.classList.remove("pressed");
//           }, 500);
//       }
//   });
// };

// export {drums};
