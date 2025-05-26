function createBox(
  ref,
  url,
  _category,
  _rating,
  _title,
  _studentsCount,
  _price
) {
  const box = document.createElement("div");
  box.classList.add("box");
  const card = document.createElement("a");
  card.href = ref;
  box.appendChild(card);
  const image = document.createElement("img");
  image.src = url;
  card.appendChild(image);
  const details = document.createElement("div");
  card.appendChild(details);
  const category = document.createElement("div");
  category.classList.add("category");
  details.appendChild(category);
  const firstSpan = document.createElement("span");
  const categoryText = document.createTextNode(_category);
  firstSpan.appendChild(categoryText);
  category.appendChild(firstSpan);
  const secondSpan = document.createElement("span");
  category.appendChild(secondSpan);
  const starIcon = document.createElement("i");
  starIcon.classList.add("fa-solid", "fa-star");
  secondSpan.appendChild(starIcon);
  const rating = document.createTextNode(" " + _rating);
  secondSpan.appendChild(rating);
  category.appendChild(secondSpan);
  const title = document.createElement("div");
  title.classList.add("title");
  const titleText = document.createTextNode(_title);
  title.appendChild(titleText);
  details.appendChild(title);
  const price = document.createElement("div");
  price.classList.add("price");
  details.appendChild(price);
  const firstDiv = document.createElement("div");
  price.appendChild(firstDiv);
  const userIcon = document.createElement("i");
  userIcon.classList.add("fa-solid", "fa-user");
  firstDiv.appendChild(userIcon);
  const studentsSpan = document.createElement("span");
  const studentsCount = document.createTextNode(" " + _studentsCount + " ");
  studentsSpan.appendChild(studentsCount);
  firstDiv.appendChild(studentsSpan);
  const students = document.createElement("span");
  students.classList.add("students");
  const studentsText = document.createTextNode("students");
  students.appendChild(studentsText);
  firstDiv.appendChild(students);
  const secondDiv = document.createElement("div");
  price.appendChild(secondDiv);
  const priceText = document.createTextNode("$" + _price);
  secondDiv.appendChild(priceText);
  return box;
}

let pageNumber = 1;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const createCoursesList = async () => {
  const courses = await fetchData(`./data/courses-${pageNumber}.json`);
  const coursesList = document.querySelector(".courses-list");
  for (let index = 0; index < courses.length; index++) {
    const { ref, url, _category, _rating, _title, _studentsCount, _price } =
      courses[index];
    const course = createBox(
      ref,
      url,
      _category,
      _rating,
      _title,
      _studentsCount,
      _price
    );
    coursesList.appendChild(course);
  }
};

createCoursesList();

const nextButt = document.getElementById("next");
nextButt.addEventListener("click", () => {
  if (pageNumber === 2) return;
  pageNumber++;
  const coursesList = document.querySelector(".courses-list");
  coursesList.innerHTML = "";
  createCoursesList();
});

const previousButt = document.getElementById("previous");
previousButt.addEventListener("click", () => {
  if (pageNumber === 1) return;
  pageNumber--;
  const coursesList = document.querySelector(".courses-list");
  coursesList.innerHTML = "";
  createCoursesList();
});
