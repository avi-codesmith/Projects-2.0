"use strict";

const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector(".result");

button.addEventListener("click", () => {
  const username = input.value.trim();
  if (!username) {
    alert("Please enter a username");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.github.com/users/${username}`);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        result.innerHTML = `
              <div class="card">
                <img src="${data.avatar_url}" alt="Profile" />
                <h2>Name: ${data.name ?? " have not name"}</h2>
                <p>ID : ${data.id}</p>
                <p>Log in as : ${data.login}</p>
                <div class="stats">
                  <h3>Followers: ${data.followers}</h3>
                  <h3>Following: ${data.following}</h3>
                  </div>
                  <a href="https://www.github.com/${
                    data.login
                  }" target="_blank">Visit Now!</a>
              </div>
            `;
      } else if (xhr.status === 404 || xhr.status === 403) {
        result.innerHTML = `<p style="color:red; font-weight: bold">User not found!!!</p>`;
      } else {
        result.innerHTML = `<p>Something went wrong. Try again.</p>`;
      }
    }
  };
  xhr.send();
});
