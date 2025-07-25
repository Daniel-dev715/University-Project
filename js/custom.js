window.addEventListener("load", () => {
  let spans = document.getElementsByClassName("header-changer")[0];
  console.log(spans.children);
  for (let i = 0; i < spans.children.length; i++) {
    spans.children[i].setAttribute("onclick", `nextImage(${i})`);
  }
});

let tracker = 1;
const images = ["./images/Chance.jpg", "./images/Grad.jpg", "./images/5.jpg"];

setInterval(() => {
  changeImage(tracker);
  tracker = (tracker + 1) % images.length;
}, 5000);

function changeImage(index) {
  let header_content = document.getElementsByClassName("header")[0];

  header_content.style.backgroundImage = `url('${images[index]}')`;

  header_content.classList.remove("animate__animated", "animate__slow");

  void header_content.offsetWidth;

  header_content.classList.add("animate__animated", "animate__slow");
}

function nextImage(index) {
  let header_content = document.getElementsByClassName("header")[0];

  header_content.style.backgroundImage = `url('${images[index]}')`;

  header_content.classList.remove("animate__animated", "animate__slow");

  void header_content.offsetWidth;

  let spans = document.getElementsByClassName("header-changer")[0];
  spans.children[index].style.backgroundColor = "red";
  spans.children[index].style.backgroundColor = "red";
  spans.children[index].style.backgroundColor = "red";

  tracker = index;

  header_content.classList.add("animate__animated", "animate__slow");
}
