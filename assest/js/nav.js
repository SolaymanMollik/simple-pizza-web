const locP = document.getElementById("location-div-main");
const locationDiv = document.getElementById("location-div");

locP.addEventListener("mouseenter", () => {
  locationDiv.style.display = "block";
  locP.addEventListener("mouseleave", () => {
    locationDiv.style.display = "none";
  });
});
