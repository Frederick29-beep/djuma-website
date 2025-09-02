// Onyo baada ya kubonyeza button
document.querySelector(".button").addEventListener("click", () => {
  alert("Asante kwa kupenda blogu ya Frederick!");
});

// Fomu ya mawasiliano
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Ujumbe wako umetumwa! Tutawasiliana nawe hivi karibuni.");
});

// Fomu ya maoni
document.getElementById("commentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Asante kwa kutoa maoni yako!");
});
