let btn = document.querySelector("#navbar-burger");
let menu = document.querySelector("#navbar-menu")

btn.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("is-active");
})

let form = document.forms[0];
let url = 'https://still-spire-37210.herokuapp.com/positions.json?';

document.addEventListener("submit", function(e) {
  e.preventDefault();
  let description = form.elements["description"].value;
  let location = form.elements["location"].value;
  let full_time = form.elements["full_time"].checked;

  let searchParams = new URLSearchParams([['description', description], ['location', location], ['full_time', full_time]]);

  let requestUri = url + searchParams

  fetch(requestUri)
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
  });
  // 為什麼要兩層

})