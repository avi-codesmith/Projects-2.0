"use strict";
const html = document.querySelector("h1");
window.addEventListener("keyup", (e) => {
  html.innerHTML = `
    <table border="1">
      <thead>
        <tr>
          <th>key</th>
          <th>key-code</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </tbody>
    </table>
  `;
});
