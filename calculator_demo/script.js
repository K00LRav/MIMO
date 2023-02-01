let display = document.getElementById("display");

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function() {
    if (this.id === "clear") {
      display.value = "";
    } else if (this.id === "backspace") {
      display.value = display.value.slice(0, -1);
    } else if (this.id === "equals") {
      display.value = eval(display.value);
    } else {
      display.value += this.innerHTML;
    }
  });
});
