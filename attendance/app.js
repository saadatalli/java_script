var userData = [
  {
    name: "Abdullah",
    fatherName: "Mushtaq",
    age: 37,
    rollNo: 4654,
    status: null
  },
  {
    name: "Bilal",
    fatherName: "abc",
    age: 34,
    rollNo: 4565,
    status: null
  },
  {
    name: "Junaid",
    fatherName: "xyz",
    age: 87,
    rollNo: 768,
    status: null
  },
  
    {
      name: 'John Doe',
      fatherName: 'Richard Doe',
      age: 16,
      rollNo: '101',
      status: null
    },
    {
      name: 'Jane Smith',
      fatherName: 'Robert Smith',
      age: 15,
      rollNo: '102',
      status: null
    },
    {
      name: 'Michael Johnson',
      fatherName: 'James Johnson',
      age: 17,
      rollNo: '103',
      status: null
    },
    {
      name: 'Emily Davis',
      fatherName: 'William Davis',
      age: 14,
      rollNo: '104',
    status: null
    },
    {
      name: 'Jessica Brown',
      fatherName: 'Charles Brown',
      age: 16,
      rollNo: '105',
      class: '10th Grade',
    },
    {
      name: 'Daniel Wilson',
      fatherName: 'Thomas Wilson',
      age: 15,
      rollNo: '106',
      class: '9th Grade',
    },
    {
      name: 'Sarah Taylor',
      fatherName: 'Andrew Taylor',
      age: 17,
      rollNo: '107',
      class: '11th Grade',
    },
    {
      name: 'David Lee',
      fatherName: 'George Lee',
      age: 14,
      rollNo: '108',
    status: null
    },
    {
      name: 'Laura Martin',
      fatherName: 'Paul Martin',
      age: 16,
      rollNo: '109',
      status: null
    },
    {
      name: 'Kevin White',
      fatherName: 'Mark White',
      age: 15,
      rollNo: '110',
      status: null
    },
    {
      name: 'Anna Harris',
      fatherName: 'Steven Harris',
      age: 17,
      rollNo: '111',
      class: '11th Grade',
    },
    {
      name: 'Brian Clark',
      fatherName: 'Edward Clark',
      age: 14,
      rollNo: '112',
    status: null
    },
    {
      name: 'Sophia Lewis',
      fatherName: 'Henry Lewis',
      age: 16,
      rollNo: '113',
      class: '10th Grade',
    },
    {
      name: 'Christopher Walker',
      fatherName: 'Frank Walker',
      age: 15,
      rollNo: '114',
      status: null
    },
    {
      name: 'Grace Hall',
      fatherName: 'Peter Hall',
      age: 17,
      rollNo: '115',
      class: '11th Grade',
    },
    {
      name: 'Justin Allen',
      fatherName: 'Patrick Allen',
      age: 14,
      rollNo: '116',
    status: null
    },
    {
      name: 'Olivia Young',
      fatherName: 'Bruce Young',
      age: 16,
      rollNo: '117',
      class: '10th Grade',
    },
    {
      name: 'Nathan Hernandez',
      fatherName: 'Larry Hernandez',
      age: 15,
      rollNo: '118',
      class: '9th Grade',
    },
    {
      name: 'Mia King',
      fatherName: 'Joe King',
      age: 17,
      rollNo: '119',
      class: '11th Grade',
    },
    {
      name: 'Ethan Wright',
      fatherName: 'Stanley Wright',
      age: 14,
      rollNo: '120',
    status: null
    },
    {
      name: 'Ava Lopez',
      fatherName: 'Timothy Lopez',
      age: 16,
      rollNo: '121',
      status: null
    },
    {
      name: 'Jacob Scott',
      fatherName: 'Chris Scott',
      age: 15,
      rollNo: '122',
      status: null
    },
    {
      name: 'Samantha Green',
      fatherName: 'Shawn Green',
      age: 17,
      rollNo: '123',
      status: null
    },
    {
      name: 'Andrew Adams',
      fatherName: 'Jason Adams',
      age: 14,
      rollNo: '124',
    status: null
    },
    {
      name: 'Ella Baker',
      fatherName: 'Ryan Baker',
      age: 16,
      rollNo: '125',
      status: null
    },
  ];

var userTable = document.getElementById("userTable");
var userName = document.getElementById("name");
var fatherName = document.getElementById("fatherName");
var rollno = document.getElementById("rollno");
var age = document.getElementById("age");

var totalPresent = document.getElementById("totalPresent");
var totalAbsent = document.getElementById("totalAbsent");
var totalLeave = document.getElementById("totalLeave");

var presentCount = 0;
var absentCount = 0;
var leaveCount = 0;

function addData() {
  userTable.innerHTML = "";
  for (var i = 0; i < userData.length; i++) {
    userTable.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${userData[i].name}</td>
        <td>${userData[i].fatherName}</td>
        <td>${userData[i].rollNo}</td>
        <td>${userData[i].age}</td>
        <td>
          <input type="radio" name="status${i}" value="present" onchange="updateStatus(${i}, 'present')"> Present <br>
          <input type="radio" name="status${i}" value="absent" onchange="updateStatus(${i}, 'absent')"> Absent<br>
          <input type="radio" name="status${i}" value="leave" onchange="updateStatus(${i}, 'leave')"> Leave
        </td>
      </tr>
    `;
  }
}

function addUser() {
  var obj = {
    name: userName.value,
    fatherName: fatherName.value,
    rollNo: rollno.value,
    age: age.value,
    status: null
  };

  userData.push(obj);
  addData();
}

function updateStatus(index, status) {
  var previousStatus = userData[index].status;
  userData[index].status = status;

  if (previousStatus === 'present') {
    presentCount--;
    totalPresent.innerHTML = `PRESENT: ${presentCount}`;
  } else if (previousStatus === 'absent') {
    absentCount--;
    totalAbsent.innerHTML = `ABSENT: ${absentCount}`;
  } else if (previousStatus === 'leave') {
    leaveCount--;
    totalLeave.innerHTML = `LEAVE: ${leaveCount}`;
  }

  if (status === 'present') {
    presentCount++;
    totalPresent.innerHTML = `PRESENT: ${presentCount}`;
  } else if (status === 'absent') {
    absentCount++;
    totalAbsent.innerHTML = `ABSENT: ${absentCount}`;
  } else if (status === 'leave') {
    leaveCount++;
    totalLeave.innerHTML = `LEAVE: ${leaveCount}`;
  }
}

addData();
