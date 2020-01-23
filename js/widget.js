var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var rooms = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i = 0; i < rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/rooms.json');
xhr.send();