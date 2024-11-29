const summaryTags = document.querySelectorAll(".custom-list summary");

summaryTags.forEach(control => {
  const plusIcon = control.querySelector("svg:first-of-type");
  const minusIcon = control.querySelector("svg:last-of-type");

  if (control.parentElement.hasAttribute("open")) {
    plusIcon.classList.add("hidden");
    minusIcon.classList.remove("hidden");
  }

  control.addEventListener("click", () => {
    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");
  })
})