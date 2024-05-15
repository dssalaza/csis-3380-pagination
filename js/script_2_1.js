const studentList = document.querySelector(".student-list");
const studentItem = studentList.children;

const perPage = 10;

const init = () => {
  const total = users.length;
  document.querySelector(".total").innerText = `Total: ${total}`;
  for (i = 0; i < users.length; i++) {
    document.querySelector(".student-list").innerHTML += renderUser(users[i]);
  }
  showPage(studentItem, 0);
};

const renderUser = (user) => {
  return `
  <li class="student-item cf">
  <div class="student-details">
  <img class="avatar" src="${user.picture.thumbnail}">
  <h3>${user.name.first} ${user.name.last}</h3>
  <span class="email">${user.email}</span>
  </div>
  <div class="joined-details">
  <span class="date">Joined ${new Date(user.registered.date).toLocaleDateString("en-US")}</span>
  </div>
  </li> `;
};

const showPage = (list, page) => {
  for (let i = 0; i < list.length; i++) {
    if (i < page * 10 || i > page * 10 + 9) {
      list[i].style.display = "none";
    } else {
      list[i].style.display = "block";
    }
  }
};

const appendPageLinks = (list) => {
  const totalPages = Math.ceil(list.length / perPage);
  console.log('totalPages: ',totalPages);
  const ItemList = document.querySelector("div.pagination");
  for (let i = 1; i <= totalPages; i++) {
    var addbutton = document.createElement("li");
    addbutton.innerHTML = '<a class="active" >' + i + "</a>";
    ItemList.appendChild(addbutton);
  }
  var itembuttons = document.querySelectorAll(".active");
  console.log("itembuttons: ",itembuttons.length);
  for (let i = 0; i < itembuttons.length; i++) {
    itembuttons[i].classList.remove("active");
  }
  for (let i = 0; i < itembuttons.length; i++) {
    itembuttons[i].addEventListener("click", () => {
      for (let j = 0; j < itembuttons.length; j++) {
        itembuttons[j].classList.remove("active");
      }
      showPage(studentItem, i);
      itembuttons[i].classList.add("active");
    });
  }
};

appendPageLinks(users);

init();
