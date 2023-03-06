document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = async (el, url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const html = await response.text();
        el.outerHTML = html;
      } else {
        throw new Error("Error loading the file, verify that you are making the request by http or https");
      }
    } catch (error) {
      el.outerHTML = `<div><p>Error: ${error.message}</p></div>`;
    }
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});