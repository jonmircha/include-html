document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Error loading the file, verify that you are making the request by http or https");
        }
      })
      .then(html => {
        el.outerHTML = html;
      })
      .catch(error => {
        el.outerHTML = `<div><p>Error: ${error.message}</p></div>`;
      });
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});