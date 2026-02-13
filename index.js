const dropdownButton = document.getElementById("connect");
const dropDown = document.querySelector(".dropdown-content");
const dropData = document.getElementById("data");

dropDown.style.display = "none";
dropData.style.display = "block";
dropdownButton.addEventListener("click", () => {
  if (dropDown.style.display === "none" || dropData.style.display === "block") {
    dropDown.style.display = "block";
    dropData.style.display = "none";
    console.log("clicked");
  } else {
    dropDown.style.display = "none";
    dropData.style.display = "block";
    console.log("clicked");
  }
});
