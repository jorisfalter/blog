console.log("succes");

///////// Change favicon and tab content on Chrome
function changeFavicon(src) {
  var link = document.createElement("link"),
    oldLink = document.getElementById("dynamic-favicon");
  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    // This will change the title when the tab is not active
    document.title = "COME BACK HERE";
    changeFavicon("pics/favicon_angry.ico");
  } else {
    // This will reset the title back to normal when the tab is active
    document.title = "Joris' Homepage";
    changeFavicon("pics/favicon.ico");
  }
});

///////// Show Popup after 15 seconds
let timeout;

function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    showPopup(); // Function to show the popup
  }, 15000); // 15000 milliseconds = 15 seconds
}

// Events that reset the timer
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer; // catches touchscreen presses
window.onclick = resetTimer; // catches touchpad clicks
window.onscroll = resetTimer; // catches scrolling with arrow keys
window.onkeydown = resetTimer;

function showPopup() {
  document.getElementById("myModal").style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  document.getElementById("myModal").style.display = "none";
};
