$(".slider").slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: true,
  cssEase: "linear",
});

// accrodian

let accordian_items = document.querySelectorAll(".accordian-box");

accordian_items.forEach(items => {
    let paragraph = items.querySelector(".accordian-p");
    let heading = items.querySelector(".accordian-txt-or-svg");
    let svg = items.querySelector(".accordian-svg");

    heading.style.cursor = "pointer";
    heading.addEventListener("click", () => {

        accordian_items.forEach(other => {
            if (other !== items) {
                let paragraph = other.querySelector(".accordian-p");
                let svg = other.querySelector(".accordian-svg");
                paragraph.classList.add("d-none")
                svg.innerHTML = "+"
            }
        });

        if (paragraph.classList.contains("d-none")) {
            paragraph.classList.remove("d-none")
            paragraph.classList.add("d-block");
            svg.innerHTML = "-"
        }
        else {
            paragraph.classList.remove("d-block")
            paragraph.classList.add("d-none")
            svg.innerHTML = "+"
        }
    })
})