document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Remove active class from all buttons
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Hide all tab panes
      tabPanes.forEach((pane) => pane.classList.remove("active"));
      // Show the selected tab pane
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Curriculum accordion
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.querySelector("i").classList.replace(
          "fa-chevron-up",
          "fa-chevron-down"
        );
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.querySelector("i").classList.replace(
          "fa-chevron-down",
          "fa-chevron-up"
        );
      }
    });
  });

  // FAQ accordion
  const faqBtns = document.querySelectorAll(".faq-btn");

  faqBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.querySelector("i").classList.replace(
          "fa-chevron-up",
          "fa-chevron-down"
        );
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.querySelector("i").classList.replace(
          "fa-chevron-down",
          "fa-chevron-up"
        );
      }
    });
  });
});

const fetchCourseDetails = async (url) => {
  try {
    const response = await fetch(url);
    const courseDetails = await response.json();
      return courseDetails;
  } catch (error) {
    console.log(error.message);
  }
};

document.addEventListener("DOMContentLoaded", async function () {
  // بيانات الكورس
    const courseData = await fetchCourseDetails(`./data/courses/course_02.json`);
    console.log(courseData)
  // تعبئة البيانات في الصفحة
  document.querySelector(".title").textContent = courseData.title;
  document.querySelector(".course-description").textContent =
    courseData.description;

  // إنشاء تقييم النجوم
  const starsContainer = document.querySelector(".stars");
  const fullStars = Math.floor(courseData.rating);
  const hasHalfStar = courseData.rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsContainer.innerHTML += '<i class="fas fa-star"></i>';
    } else if (i === fullStars && hasHalfStar) {
      starsContainer.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    } else {
      starsContainer.innerHTML += '<i class="far fa-star"></i>';
    }
  }

  document.querySelector(
    ".reviews"
  ).textContent = `(${courseData.reviews} reviews)`;
  document.querySelector(".students").textContent = courseData.students;
  document.querySelector(".lectures").textContent = courseData.lectures;
  document.querySelector(".hours").textContent = `${courseData.hours} hours`;

  // معلومات المدرب
  document.querySelector(".instructor-img").src = courseData.instructor.image;
  document.querySelector(
    ".instructor-name"
  ).textContent = `By: ${courseData.instructor.name}`;

  // السعر
  document.querySelector(
    ".current-price"
  ).textContent = `$${courseData.price.current}`;
  document.querySelector(
    ".original-price"
  ).textContent = `$${courseData.price.original}`;
  document.querySelector(".discount").textContent = courseData.price.discount;

  // صورة الكورس
  document.querySelector(".course-img").src = courseData.image;

  // باقي الكود الخاص بالتبويبات والأكورديون...
});
