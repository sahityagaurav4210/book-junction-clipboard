const code_snippet = document.getElementsByClassName("code-snippet");

function register() {
  for (let index = 0; index < code_snippet.length; index++) {
    code_snippet[index].children[1].children[0].addEventListener(
      "click",
      async function () {
        await navigator.clipboard.writeText(
          code_snippet[index].children[0].innerText
        );
        code_snippet[index].children[1].innerHTML = `<i class="fa-solid fa-clipboard-check fa-lg"></i>`;

        setTimeout(() => {
          code_snippet[index].children[1].innerHTML = `<i class="fa-regular fa-clipboard fa-lg"></i>`;
          register();
        }, 750);
      }
    );
  }
}

register();
