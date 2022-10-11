"use strict";

console.log("app.js is connected");
var shareBtn = document.getElementById("share-button");
var socials = document.getElementById("socials");
shareBtn.addEventListener("click", function () {
  if (shareBtn.dataset.style == "light") {
    shareBtn.dataset.style = "dark";
  } else {
    shareBtn.dataset.style = "light";
  }

  if (socials.dataset.state == "close") {
    socials.dataset.state = "open";
  } else {
    socials.dataset.state = "close";
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwic2hhcmVCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic29jaWFscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhc2V0Iiwic3R5bGUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBQSxDQUFBQyxHQUFBLENBQUEscUJBQUE7QUFFQSxJQUFBQyxRQUFBLEdBQUFDLFFBQUEsQ0FBQUMsY0FBQSxDQUFBLGNBQUEsQ0FBQTtBQUNBLElBQUFDLE9BQUEsR0FBQUYsUUFBQSxDQUFBQyxjQUFBLENBQUEsU0FBQSxDQUFBO0FBRUFGLFFBQUEsQ0FBQUksZ0JBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQTtFQUNBLElBQUFKLFFBQUEsQ0FBQUssT0FBQSxDQUFBQyxLQUFBLElBQUEsT0FBQSxFQUFBO0lBQ0FOLFFBQUEsQ0FBQUssT0FBQSxDQUFBQyxLQUFBLEdBQUEsTUFBQTtFQUNBLENBRkEsTUFFQTtJQUNBTixRQUFBLENBQUFLLE9BQUEsQ0FBQUMsS0FBQSxHQUFBLE9BQUE7RUFDQTs7RUFDQSxJQUFBSCxPQUFBLENBQUFFLE9BQUEsQ0FBQUUsS0FBQSxJQUFBLE9BQUEsRUFBQTtJQUNBSixPQUFBLENBQUFFLE9BQUEsQ0FBQUUsS0FBQSxHQUFBLE1BQUE7RUFDQSxDQUZBLE1BRUE7SUFDQUosT0FBQSxDQUFBRSxPQUFBLENBQUFFLEtBQUEsR0FBQSxPQUFBO0VBQ0E7QUFDQSxDQVhBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiYXBwLmpzIGlzIGNvbm5lY3RlZFwiKTtcclxuXHJcbmNvbnN0IHNoYXJlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGFyZS1idXR0b25cIik7XHJcbmNvbnN0IHNvY2lhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvY2lhbHNcIik7XHJcblxyXG5zaGFyZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChzaGFyZUJ0bi5kYXRhc2V0LnN0eWxlID09IFwibGlnaHRcIikge1xyXG4gICAgc2hhcmVCdG4uZGF0YXNldC5zdHlsZSA9IFwiZGFya1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaGFyZUJ0bi5kYXRhc2V0LnN0eWxlID0gXCJsaWdodFwiO1xyXG4gIH1cclxuICBpZiAoc29jaWFscy5kYXRhc2V0LnN0YXRlID09IFwiY2xvc2VcIikge1xyXG4gICAgc29jaWFscy5kYXRhc2V0LnN0YXRlID0gXCJvcGVuXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNvY2lhbHMuZGF0YXNldC5zdGF0ZSA9IFwiY2xvc2VcIjtcclxuICB9XHJcbn0pO1xyXG4iXX0=
