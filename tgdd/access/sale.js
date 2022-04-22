var CourseApi = "http://localhost:3000/courses";

function start() {
    getCourse(renderCourse);
}
start();

function getCourse(callback) {
    fetch(CourseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function renderCourse(courses) {
    var listCourseBlock = document.querySelector('.sp-promo__all');
    var htmls = courses.map(function(course){
        return `
            <div class="sp-promo">
                <a class="frames" href="">
                <p class="installment">${course.installment}</p>
                <img src="${course.img}" alt="">
                <div class="home-sp">
                    <h3 class="title-sp">${course.product}</h3>
                    <p class="price-cost">${course.price_cost}</p>
                    <strong class="price-sp">${course.price_current}</strong>
                    <p class="descripton-sp">${course.description}</p>
                    <p class="padd"></p>
                </div>
                </a>
            </div>
        `
    });
    listCourseBlock.innerHTML = htmls.join('')
}