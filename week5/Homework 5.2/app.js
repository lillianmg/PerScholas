let menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];


let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

function iterateMenuLink(array, menuElement) {
  array.forEach((element) => {
    const newElement = document.createElement("a");

    newElement.setAttribute("href", element.href);

    newElement.innerHTML = element.text;

    menuElement.append(newElement);
  });
}

iterateMenuLink(menuLinks, topMenuEl);

let subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

let topMenuLinks = document.querySelectorAll("#top-menu a");

let showingSubMenu = false;

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";

  subLinks.forEach((link) => {
    const subMenuLink = document.createElement("a");

    subMenuLink.href = link.href;

    subMenuLink.textContent = link.text;

    subMenuEl.appendChild(subMenuLink);
  });
}

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName !== "A") {
    return;
  }
  
  console.log(event.target.textContent);

  if (event.target.classList.contains("active")) {
   
    event.target.classList.remove("active");

    showingSubMenu = false;

    subMenuEl.style.top = "0";

    return;
  }

  topMenuLinks.forEach((link) => link.classList.remove("active"));

  event.target.classList.add("active");

  const link = menuLinks.find((link) => link.text === event.target.textContent);

  if (link && link.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  if (showingSubMenu) {
    buildSubMenu(link.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }
});

subMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  topMenuLinks.forEach((element) => {
    element.classList.remove("active");
  });
});

subMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`;
});

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  if (event.target.innerHTML === "ABOUT") {
    mainEl.innerHTML = `<h1>about</h1>`;
  } else {
    mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`;
  }
});