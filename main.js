const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, Ummaahhh...!!😘";
  gif.src ="second.gif";

  yesBtn.addEventListener("click", () =>{
    question.innerHTML = "Thank You!!🤞";
    gif.src ="third.gif";

    yesBtn.addEventListener("click", () =>{
      question.innerHTML = "Advance Happy BirthDay🎂";
      gif.src ="fourth.gif";

      yesBtn.addEventListener("click", () =>{
        question.innerHTML = "I LOVE YOU!!💖";
        gif.src ="fifth.gif";
  });

});

});

});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

