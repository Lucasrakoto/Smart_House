var chambreValue = "";
function showSelectedOption() {
  var radioButtons = document.getElementsByName("option");
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function () {
      var selectedOption = this.value;
      if (selectedOption !== "") {
        alert(selectedOption);
        document.getElementById("piece").innerHTML = selectedOption;

        chambreValue = selectedOption;
      } else {
        alert("");
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var rangeInput = document.getElementById("myRange");
  var rangeValue = document.getElementById("rangeValue");

  rangeInput.addEventListener("input", function () {
    //console.log(rangeInput.value);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.8.100/" + rangeInput.value);
    xhr.send();
  });
  document.getElementById("rangeValue").innerHTML = rangeInput.value;
});
