const container = document.getElementById("content");
const nav = makeNavBar();
document.body.insertBefore(nav, document.body.firstChild);
const home = pageLoad();
container.appendChild(home);
const footer = createFooter();
container.appendChild(footer);

const homeTab = document.querySelector("#home");
homeTab.parentElement.classList.add('showing')
const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");

homeTab.addEventListener("click", () => {
  container.textContent = "";
  container.appendChild(home);
  container.appendChild(footer);
  menuTab.parentElement.classList.remove('showing');
  contactTab.parentElement.classList.remove('showing');
  homeTab.parentElement.classList.add('showing')
});

menuTab.addEventListener("click", () => {
  container.textContent = "";
  const menu = menuPage();
  container.appendChild(menu);
  container.appendChild(footer);
  homeTab.parentElement.classList.remove('showing');
  contactTab.parentElement.classList.remove('showing');
  menuTab.parentElement.classList.add('showing');
});

contactTab.addEventListener("click", () => {
  container.textContent = "";
  const contact = contactPage();
  container.appendChild(contact);
  container.appendChild(footer);
  contactTab.parentElement.classList.add('showing');
  menuTab.parentElement.classList.remove('showing');
  homeTab.parentElement.classList.remove('showing');
});

// home
function createHtmlElement(type, content) {
  const element = document.createElement(type);
  if (content) {
    element.innerText = content;
    element.setAttribute("id", content);
  }
  return element;
}

function makeNavBar() {
  const header = document.createElement("HEADER");
  const nav = document.createElement("nav");
  const navItems = ["home", "menu", "contact"];
  const unorderedList = document.createElement("ul");

  navItems.forEach((item) => {
    const listTags = document.createElement("li");
    listTags.setAttribute("id", `#${item}ListItem`);
    listTags.setAttribute("class", "tab");
    const element = createHtmlElement("a", item);
    listTags.appendChild(element);
    unorderedList.appendChild(listTags);
  });
  nav.appendChild(unorderedList);
  header.appendChild(nav);

  return header;
}

function pageLoad() {
  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "homeDiv");

  const homeImg = document.createElement("div");
  homeImg.setAttribute("id", "homeImg");
  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", 'homeContainer');
  const banner = document.createElement("h1");
  banner.textContent = "Vesuvio";
  const restaurantReview = document.createElement("p");
  const moreAbout = document.createElement("p");
  restaurantReview.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque. Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque. Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque.";
  moreAbout.textContent =
    "Driving down High Street it's a bit odd to come upon a vintage relic of a building in a funky little neighborhood. For almost 100 years High Street Market and Deli has been serving the city of San Luis Obispo. Built in 1927, High Street Market and Deli carried everything from milk, butter, chewing tobacco and fishing gear. The area was known as the railroad district and housed many of the workers and their families. When High Street was still a dirt road, those workers would stop in to get a pint of milk, cigarettes and a deli sandwich on the way to and from the railroad station. Throughout a century High Street Market and Deli has been a lot of people's corner store but in the recent years, it's become San Luis Obispo's original sandwich joint.";
//   const frontImage = document.createElement("img");
//   frontImage.src = "./images/churros.jpg";
//   frontImage.alt = "Churros";

  homeContainer.appendChild(banner);
  homeContainer.appendChild(restaurantReview);
  homeContainer.appendChild(moreAbout);
//   homeDiv.appendChild(frontImage);
  homeDiv.appendChild(homeImg)
  homeDiv.appendChild(homeContainer);

  return homeDiv;
}


// menu
function createMenuSection(headerTitle) {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menu-section-header");

  const menuHeaderTitle = document.createElement("h2");
  menuHeaderTitle.textContent = headerTitle;

  menuHeader.appendChild(menuHeaderTitle);
  menuSection.appendChild(menuHeader);
  return menuSection;
}

function createMenuItem(itemName, itemPrice, itemInfo) {
  const menuItem = document.createElement("li");
  const menuItemHeading = document.createElement("p");
  menuItemHeading.textContent = itemName;

  const menuItemPrice = document.createElement("p");
  menuItemPrice.textContent = itemPrice;

  const menuItemInfo = document.createElement("p");
  menuItemInfo.textContent = itemInfo;

  menuItem.appendChild(menuItemHeading);
  menuItem.appendChild(menuItemPrice);
  menuItem.appendChild(menuItemInfo);
  return menuItem;
}

function menuPage() {
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menuDiv");

  const banner = document.createElement("h1");
  banner.textContent = "Menu";

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menuContainer");

  const gShots = createMenuSection("GOLGAPPA SHOTS");
  const menuListOne = document.createElement("ul");
  const cjp = createMenuItem("CLASSIC JALJEERA & POTATO (EACH)", 4, "vegan");
  const spa = createMenuItem(
    "SPICED TEQUILA & AVOCADO (EACH)",
    6,
    "vegetarian"
  );
  const vpp = createMenuItem(
    "VODKA PAANI & PICKLED BEETS (EACH)",
    6,
    "vegetarian"
  );
  menuListOne.appendChild(cjp);
  menuListOne.appendChild(spa);
  menuListOne.appendChild(vpp);
  gShots.appendChild(menuListOne);

  const sPlates = createMenuSection("SMALL PLATES");
  const menuListTwo = document.createElement("ul");
  const gtc = createMenuItem("GOAT CHEESE & SPINACH SAMOSA", 14, "vegetarian");
  const rsk = createMenuItem("ROCK SHRIMP KOLIWADA", 14, "gluten free");
  const ogr = createMenuItem("OCTOPUS GHEE ROAST", 14, "gluten free");
  menuListTwo.appendChild(gtc);
  menuListTwo.appendChild(rsk);
  menuListTwo.appendChild(ogr);
  sPlates.appendChild(menuListTwo);

  menuContainer.appendChild(banner);
  menuContainer.appendChild(gShots);
  menuContainer.appendChild(sPlates);
  menuDiv.appendChild(menuContainer);

  return menuDiv;
}

// contact 
function contactPage() {
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contactDiv");

  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "containerDiv");

  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("id", "imageDiv");

  const banner = document.createElement("h1");
  banner.textContent = "Contact Us";

  const streetAddress = document.createElement("p");
  streetAddress.textContent = "2049 Fillmore St San Francisco, CA 94115";

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "(222)-888 5555";

  const frontImage = document.createElement("img");
  frontImage.src = "./images/churros.jpg";
  frontImage.alt = "Churros";

  contactContainer.appendChild(banner);
  contactContainer.appendChild(streetAddress);
  contactContainer.appendChild(phoneNumber);
  imageContainer.appendChild(frontImage);
  contactDiv.appendChild(contactContainer);
  contactDiv.appendChild(imageContainer);

  return contactDiv;
}


// footer 

function createFooter() {
   const footer = document.createElement('footer');
   let footerText = document.createElement('p')
   footerText.textContent = "Antonio Melena";
   footer.appendChild(footerText);
   return footer;
};
