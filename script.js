const cartIcon = document.getElementById('cartIcon'),
    cartCont = document.getElementById('cartCont'),
    menuIcon = document.getElementById('menuIcon'),
    menuCont = document.getElementById('menuCont'),
    closeIcon = document.getElementById('closeIcon'),

    thumbnail1 = document.getElementById('1'),
    thumbnail2 = document.getElementById('2'),
    thumbnail3 = document.getElementById('3'),
    thumbnail4 = document.getElementById('4'),

    bigImage = document.getElementById('bigImage'),


    thumbnails = document.querySelectorAll('.thumbnail'),

    plus = document.getElementById('plusIcon'),
    minus = document.getElementById('minusIcon'),
    quantityValue = document.getElementById('quantity-value'),
    atcBtn = document.getElementById('atcBtn'),
    cartQuantityIcon = document.getElementById('cartQuantityIcon'),
    cartEmpty = document.getElementById('cartEmpty'),
    cartField = document.getElementById('cartField'),
    quantity = document.getElementById('quantity'),
    total = document.getElementById('total'),
    deleteIcon = document.getElementById('deleteIcon'),

    spotLight = document.getElementById('spotLight'),
    sliderbx = document.getElementById('sliderbx'),
    sliderRight = document.getElementById('sliderRight'),
    sliderLeft = document.getElementById('sliderLeft'),
    thumbnailsSpot = document.querySelectorAll('.thumbnail-spot'),
    spotColse = document.getElementById('spotClose'),

    mobileSliderBx = document.getElementById('mobileSliderBx'),
    mobileSliderRight = document.getElementById('mobileSliderRight'),
    mobileSliderLeft = document.getElementById('mobileSliderLeft');

let x = 0;

cartIcon.onclick = () => {
    cartCont.classList.toggle('active');
}

menuIcon.onclick = () => {
    menuCont.classList.toggle('active');
    cartCont.classList.remove('active');
}

closeIcon.onclick = () => {
    menuCont.classList.remove('active');
}

thumbnail1.onclick = () => {
    bigImage.src = './images/image-product-1.jpg';
}
thumbnail2.onclick = () => {
    bigImage.src = './images/image-product-2.jpg';
}
thumbnail3.onclick = () => {
    bigImage.src = './images/image-product-3.jpg';
}
thumbnail4.onclick = () => {
    bigImage.src = './images/image-product-4.jpg';
}



thumbnails.forEach(thumbnail => {
    thumbnail.onclick = () => {
        thumbnails[0].classList.remove('active');
        thumbnails[1].classList.remove('active');
        thumbnails[2].classList.remove('active');
        thumbnails[3].classList.remove('active');
        thumbnail.classList.add('active');
        bigImage.src = `./images/image-product-${thumbnail.id}.jpg`;
    }
});

let number = 1;
plus.onclick = () => {
    number++
    quantityValue.innerHTML = number
    newFunction();
}
minus.onclick = () => {
    number--
    quantityValue.innerHTML = number
    newFunction();
}

newFunction();
function newFunction() {
    if (number <= 1) {
        minus.style.pointerEvents = 'none'; minus.style.opacity = .2;
        localStorage.setItem('number', number);
    } else {
        minus.style.pointerEvents = 'all'; minus.style.opacity = 1;
        localStorage.setItem('number', number);
    }
}
atcBtn.onclick = () => {
    cartCont.classList.add('active');
    if (cartQuantityIcon.style.display = 'none') {
        cartQuantityIcon.style.display = 'flex';
        cartQuantityIcon.innerHTML = number;
    } else {
        cartQuantityIcon.style.display = 'none'
    }
    cartEmpty.style.display = 'none';
    cartField.style.display = 'block';
    quantity.innerHTML = number;
    total.innerHTML = `$${number * 125}.00`;

}

deleteIcon.onclick = () => {
    cartCont.classList.add('active');
    cartQuantityIcon.style.display = 'none';
    cartQuantityIcon.innerHTML = 0;
    cartEmpty.style.display = 'flex';
    cartField.style.display = 'none';
    quantity.innerHTML = 0;
    total.innerHTML = `00.00`;
}



sliderRight.onclick = () => {
    if (x > "-300") {
        x = x - 100;
        sliderbx.style.left = x + "%";
    }
}
sliderLeft.onclick = () => {
    if (x < 0) {
        x = x + 100;
        sliderbx.style.left = x + "%";
    }
}

thumbnailsSpot.forEach(thumbnail => {
    thumbnail.onclick = () => {
        thumbnailsSpot[0].classList.remove('active');
        thumbnailsSpot[1].classList.remove('active');
        thumbnailsSpot[2].classList.remove('active');
        thumbnailsSpot[3].classList.remove('active');
        thumbnail.classList.add('active');
    }
});

thumbnailsSpot[0].onclick = () => {
    sliderbx.style.left = 0 + "%";
}
thumbnailsSpot[1].onclick = () => {
    sliderbx.style.left = -100 + "%";
}
thumbnailsSpot[2].onclick = () => {
    sliderbx.style.left = -200 + "%";
}
thumbnailsSpot[3].onclick = () => {
    sliderbx.style.left = -300 + "%";
}


bigImage.onclick = () => {
    spotLight.classList.add('active');
}

spotColse.onclick = () => {
    spotLight.classList.remove('active');
}

mobileSliderRight.onclick = () => {
    if (x > "-300") {
        x = x - 100;
        mobileSliderBx.style.left = x + "%";
    }
}
mobileSliderLeft.onclick = () => {
    if (x < 0) {
        x = x + 100;
        mobileSliderBx.style.left = x + "%";
    }
}