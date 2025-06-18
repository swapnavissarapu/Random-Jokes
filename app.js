let h1 = document.querySelector("h1");

const colors = ["red", "green", "blue", "orange"];
let index = 0;

function changeColorLoop() {
    h1.style.color = colors[index];
    index = (index + 1) % colors.length;
    setTimeout(changeColorLoop, 1000); // call again after 1 second
}

 changeColorLoop();

 
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => {
        document.getElementById("joke").innerText = data.setup + " 😄 🤣😂 " + data.punchline;
      })
      .catch(error => {
        document.getElementById("joke").innerText = "తప్పు వచ్చింది: " + error;
      });
  }