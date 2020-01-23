var xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function () {
  if (xhr1.readyState === 4 && xhr1.status === 200) {
    var rooms = JSON.parse(xhr1.responseText);
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
xhr1.open('GET', '../data/rooms.json');
xhr1.send();

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML1 = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML1 += '<li class="in">';
      } else {
        statusHTML1 += '<li class="out">';
      }
      statusHTML1 += employees[i].name;
      statusHTML1 += '</li>';
    }
    statusHTML1 += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML1;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();