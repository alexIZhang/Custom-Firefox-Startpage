function detectTime() {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      return 'Good Morning';
    } else if (curHr < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
}
let msg = detectTime();
let usernameDiv = document.getElementById("userBlock");
let username = document.createElement('p');
username.innerHTML = msg + " " + "Alex";
usernameDiv.appendChild(username);