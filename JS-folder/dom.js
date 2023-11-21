const DOMselectors = {

    container: document.getElementById("data"),
    button: document.getElementById("submit"),
    value1: document.querySelector(".input1"),
    value2: document.querySelector(".input2"),
    value3: document.querySelector(".input3"),
  };
  
  function create() {
    const v1 = DOMselectors.value1.value;
    const v2 = DOMselectors.value2.value;
    const v3 = DOMselectors.value3.value;
    DOMselectors.container.insertAdjacentHTML(
      "afterend",
      `<div id="newbox">
      <p>${v1}</p>
      <p>${v2}</p> 
      <p>${v3}</p>
      <button class="btn">Erase Me</button>
    </div>
      `
    );
  }
  function clearoldinputs(){
    DOMselectors.value1.value="";
    DOMselectors.value2.value="";
    DOMselectors.value3.value="";
  }
  function erase() {
    let remove = document.querySelectorAll(".btn");
    remove.forEach((button) => {
      button.addEventListener("click", (clicks) => {
        clicks.target.parentElement.remove();
      });
    });
  }
  DOMselectors.button.addEventListener("click", function (box) {
    box.preventDefault();
     create();
     erase();
     clearoldinputs();
   });
   console.log(DOMselectors);