function clipboard() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
}
