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
  let full_time = trueToOn(form.elements["full_time"].checked);

  let searchParams = new URLSearchParams([['description', description], ['location', location], ['full_time', full_time]]);

  let requestUri = url + searchParams

  fetch(requestUri)
  .then((response) => response.json())
  .then((data) => {
    let result = data.map(toPostHtml).join("");
    document.getElementById('job-pannel').innerHTML = result;
  });
  
  function toPostHtml(jsn) {
    return `
      <tr>
        <td>
          <h4><a href="${jsn.url}">${jsn.title}</a></h4>
          <p class="source">
          <a class="company" href="${jsn.company_url}">${jsn.company}</a>
          –
          <strong class="fulltime">${jsn.type}</strong>
          </p>
       </td>
      <td class="meta">
        <span class="location">${jsn.location}</span>
      </td>
    </tr>
    `;
  }
})

function trueToOn(full_time) {
  if (full_time === true){
    return "on";
  } else{
    return "";
  }
}