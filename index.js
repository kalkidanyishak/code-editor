let editable = document.getElementById("editable");
let output = document.getElementById("demo");
editable.focus();
editable.value = "";
let html = "";
let Backspace = false;
window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    Backspace = true;
    let outX = output.innerText;
    output.innerText = outX.substring(0, outX.length - 1);
  } else {
    Backspace = false;
  }
});
editable.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    html += "<br>";
  }

  if (e.key === "Tab") {
    e.preventDefault();
    e.target.value += "።።።።";
    html += "&nbsp&nbsp&nbsp&nbsp;";
  }
});
editable.addEventListener("input", (e) => {
  if (Backspace === false) {
    let text = e.target.value.at(-1);
    html = html + (text || "");
    if (html.includes("let ")) {
      html = html.replace("let ", "<red>let</red> ");
    }
    output.innerHTML = html;
  } else {
    html = output.innerHTML;
  }
});
