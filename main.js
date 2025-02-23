let i = true;
const adding = () => {
  var b = document.querySelector("#user-input");
  if (b.value !== "")
  {
    if (b.value.length <= 26)
    {
      var userInput = document.querySelector("#user-input").value;
      var x = document.createElement("input");
      var btn = document.createElement("input");
      btn.type = "button";
      btn.className = "rmovBtn";
      btn.value = "Remove";
      x.type = "text";
      x.className = "createdList";
      x.readOnly = true;
      x.value = userInput;
      document.body.appendChild(x);
      document.body.appendChild(btn);
      btn.onclick = () => {
        var h = confirm("Are you sure to remove this...");
        if (h == true)
        {
          btn.remove();
          x.remove();
        }
      }
    }
    else {
      alert("your list character is too long, please enter less then 26...");
      b.value = "";
    }
  }
  else {
    alert("please enter something here...");
  }
  b.value = "";
  var isCut = "yes";
  x.ontouchstart = () => {
    if (isCut === "yes")
    {
      x.style.textDecoration = "line-through";
      x.style.textDecorationColor = "red";
      isCut = "no";
    }
    else {
      x.style.textDecoration = "none";
      isCut = "yes";
    }
  }
}

var theme = "dark";
document.querySelector("#heart-btn").onclick = () => {
  if (theme == "light")
  {
    theme = "dark";
    var g = document.querySelector("#heart-btn");
    g.style.color = "#323127";
    document.querySelector("#addBtn").style.color = "white";
    document.querySelector("#user-input").style.color = "white";
    document.querySelector("#heading").style.color = "white";
  }
  else {
    theme = "light";
    document.querySelector("#heading").style.color = "#373737";
    var f = document.querySelector("#heart-btn");
    f.style.color = "#FFF598";
    document.querySelector("#addBtn").style.color = "black";
    document.querySelector("#user-input").style.color = "black";
  }
};