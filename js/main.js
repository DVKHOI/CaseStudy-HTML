$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});
const text = "KlassyCafe";
let indexTitle = 0;
const writeTitle = () => {
  document.getElementById("title").innerHTML = text.slice(0, indexTitle);
  indexTitle++;
  if (indexTitle > text.length) {
    indexTitle = 0;
  }
};
setInterval(writeTitle, 300);

function reservation() {
  confirm("Are You Sure?");
  alert("You Reservation Success!");
  window.location.href = "index.html";
}

const offerClassifyItems = document.querySelectorAll(".offer__classify--item");
const offerItems = document.querySelectorAll(".tab-content");
[...offerClassifyItems].forEach((item) =>
  item.addEventListener("click", handleItem)
);
function handleItem(e) {
  [...offerClassifyItems].forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");
  const tabNumber = e.target.dataset.tab;
  [...offerItems].forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active");
    }
  });
  //   [...offerItems][tabNumber - 1].classList.add("active");
}
const progress = document.querySelector(".progress-scroll");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  const height =
    document.documentElement.offsetHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});
