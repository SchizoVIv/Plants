
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("active")
  })
});

document.querySelector("nav>ul").addEventListener("click", function() {
  document.querySelector("header").classList.remove("active")
})

document.querySelector("main").addEventListener("click", function() {
  document.querySelector("header").classList.remove("active")
})
