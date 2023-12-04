var n = document.querySelector("#maskedImages");

if (n) {
  var s = n.querySelectorAll("img")[1];
  s && n.addEventListener("mousemove", function(e) {
    var t = -2 * e.clientX;
    s.style["-webkit-mask-position"] = t + "px 0";
    s.style["mask-position"] = t + "px 0";
  })
}