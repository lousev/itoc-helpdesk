// Looping through the Navigation List
const navList = document.querySelectorAll(".nav-list");
for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
