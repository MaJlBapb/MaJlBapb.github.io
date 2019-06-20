function clipboard() {
  var copyText = document.getElementById("email");
  copyText.select();
  document.execCommand("copy");
}
