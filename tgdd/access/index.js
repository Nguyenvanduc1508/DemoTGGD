const rightBtn = document.querySelector('.icon-right');
const lefttBtn = document.querySelector('.icon-left');
const imgNumber = document.querySelectorAll('.home-banner');
let index = 0;
// click button banner right
rightBtn.addEventListener('click', function() {
    index += 1;
    if(index > imgNumber.length-1) {
        index = 0
    }
    removeActive()
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%';
    imgNumberLi[index].classList.add('active')
})
// click button banner left
lefttBtn.addEventListener('click', function() {
    index -= 1;
    if(index < 0) {
        index = imgNumber.length-1;
    }
    removeActive()
    imgNumberLi[index].classList.add('active')
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%';
})

// behavior li 
const imgNumberLi = document.querySelectorAll('.tab-item');
imgNumberLi.forEach((image, index) => {
    image.addEventListener('click', function() {
        removeActive()
        document.querySelector('.slider-content-left-top').style.right = index * 100 + '%';
        image.classList.add('active')
    })
})
// remove
function removeActive() {
    const imgActive = document.querySelector('.tab-item.active');
    imgActive.classList.remove('active')
}
// auto
function autoImg() {
    index += 1;
    if(index > imgNumber.length-1) {
        index = 0;
    }
    removeActive();
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%'
    imgNumberLi[index].classList.add('active')
}
setInterval(autoImg, 5000)

// focus header
const focusHeader = document.querySelector('.header-address');
focusHeader.onclick = function() {
    document.querySelector('.overley').style.display = 'flex'
}
// close oveley
const closeOveley = document.querySelector('.closeBtn')
closeOveley.onclick = function() {
    document.querySelector('.overley').style.display = 'none'
}

// promo
const nextPromo = document.querySelector('.next');
const prevPromo = document.querySelector('.prev');
const slidePromo = document.querySelectorAll('.sp-promo__all')

nextPromo.onclick = function() {
    index += 1;
    if(index > slidePromo.length-1) {
        index = 0
    }
    document.querySelector('.home-promo').style.right = index * 100 + '%'
}
prevPromo.onclick = function() {
    index -= 1;
    if(index < 0) {
        index = slidePromo.length-1
    }
    document.querySelector('.home-promo').style.right = index * 100 + '%'
}
// laptop-tablet-phu kien
const nextProduct = document.querySelector('.next-product');
const prevProduct = document.querySelector('.prev-product');
const listProduct = document.querySelectorAll('.list-product');

nextProduct.onclick = function() {
    index += 1
    if(index > listProduct.length-1) {
        index = 0
    }
    document.querySelector('.home-product').style.right = index * 100 + '%'
}
prevProduct.onclick = function() {
    index -= 1;
    if(index < 0) {
        index = listProduct.length-1
    }
    document.querySelector('.home-product').style.right = index * 100 + '%'
}
// Phụ kiện
const nextPK = document.querySelector('.next-PK');
const prevPK = document.querySelector('.prev-PK');
const listPK = document.querySelectorAll('.list-PK');

nextPK.onclick = function() {
    index += 1
    if(index > listPK.length-1) {
        index = 0
    }
    document.querySelector('.home-PK').style.right = index * 100 + '%'
}
prevPK.onclick = function() {
    index -= 1;
    if(index < 0) {
        index = listPK.length-1
    }
    document.querySelector('.home-PK').style.right = index * 100 + '%'
}
// Đồng hồ
const nextDH = document.querySelector('.next-DH');
const prevDH = document.querySelector('.prev-DH');
const listDH = document.querySelectorAll('.list-DH');

nextDH.onclick = function() {
    index += 1;
    if(index > listDH.length-1) {
        index = 0
    }
    document.querySelector('.home-DH').style.right = index * 100 + '%'
}
prevDH.onclick = function() {
    index -= 1;
    if(index < 0) {
        index = listDH.length-1
    }
    document.querySelector('.home-DH').style.right = index * 100 + '%'
}

// ẩn hiện sp
const listBottom = document.querySelectorAll('.DH-bottom');
const presently =  document.querySelector('.DH-bottom.active');
const clickHeader = document.querySelectorAll('.top-left__item');
clickHeader.forEach((head, index) => {
    const listBT = listBottom[index];
    head.onclick = function() {
        document.querySelector('.top-left__item.active').classList.remove('active')
        this.classList.add('active');
        document.querySelector('.DH-bottom.active').classList.remove('active');
        listBT.classList.add('active');
    }
})

