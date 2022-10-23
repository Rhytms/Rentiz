function closeMenuBurger() {
	const burgerIcon = document.querySelector('.menu-icon')
	const burgerBody = document.querySelector('.menu')

	if (burgerBody.classList.contains('_active')) {
		burgerBody.classList.remove('_active')
		document.body.classList.remove('_lock')
	}
	if (burgerIcon.classList.contains('_active')) {
		burgerIcon.classList.remove('_active')
	}
	return
}
function openMenuBurger() {
	const burgerIcon = document.querySelector('.menu-icon')
	const burgerBody = document.querySelector('.menu')

	burgerBody.classList.toggle('_active')
	document.body.classList.toggle('_lock')
	burgerIcon.classList.toggle('_active')
	return
}

const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')

if (burger && menu) {
	burger.addEventListener('click', (e) => {
		const menuItems = document.querySelectorAll('.menu__list')
		// burger.classList.toggle('_active')
		// menu.classList.toggle('_active')
		// document.body.classList.toggle('_lock')
		openMenuBurger()
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.header__navigation')) {
				closeMenuBurger()
			}
			if (e.target.classList.contains('header__menu')) {
				closeMenuBurger()
			}
			// if (e.target == burger) {
			// 	closeMenuBurger()
			// }
		})
		menuItems.forEach(listItem => {
			listItem.addEventListener('click', (e) => {
				closeMenuBurger(listItem)

			})
		})
	})
}


//---------------- filter
function closeBlockFilter(blockFilter) {

	const icon = blockFilter.querySelector('.block-filter__icon')
	const dropdown = blockFilter.querySelector('.block-filter__dropdown')
	if (icon.classList.contains('_active')) {
		icon.classList.remove('_active')
	}
	if (dropdown.classList.contains('_active')) {
		dropdown.classList.remove('_active')
	}
	return blockFilter
}

function openBlockFilter(blockFilter) {

	const icon = blockFilter.querySelector('.block-filter__icon')
	const dropdown = blockFilter.querySelector('.block-filter__dropdown')
	if (!icon.classList.contains('_active')) {
		icon.classList.add('_active')
	}
	if (!dropdown.classList.contains('_active')) {
		dropdown.classList.add('_active')
	}
	return blockFilter
}

function closeAllBlockFilter() {
	const blockFilterItems = document.querySelectorAll('.block-filter')
	blockFilterItems.forEach(blockFilterItem => {
		closeBlockFilter(blockFilterItem)
	})
}


const filter = document.querySelector('.filter')

if (filter) {
	const filterItems = document.querySelectorAll('.block-filter')

	filterItems.forEach(item => {
		item.addEventListener('click', event => {
			closeAllBlockFilter()
			openBlockFilter(item)

			document.addEventListener('click', (event) => {
				if (!event.target.closest('.block-filter')) {
					closeBlockFilter(item)
				}
			})

			document.addEventListener('keyup', (event) => {
				if (event.code === 'Escape') {
					closeBlockFilter(item)
				}
			})

			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent
				closeBlockFilter(item)
			}

		})
	});
}

//------------------ swiper
const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20, // --відстань мід айтемами
	slidesPerView: 1, //--кількість слайдів на сторінці
	// Navigation arrows
	navigation: {
		nextEl: '.slider-item-next',
		prevEl: '.slider-item-prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3
		},
		660: {
			slidesPerView: 2
		}
	}
});

const reviewsSlider = new Swiper('.slider-reviews', {
	spaceBetween: 20, // --відстань мід айтемами
	slidesPerView: 1, //--кількість слайдів на сторінці
	autoHeight: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-reviews-btn-next',
		prevEl: '.slider-reviews-btn-prev',
	},
});

const galleryItems = document.querySelectorAll('.gallery__item')

if (galleryItems) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1,
			autoplay: {
				delay: 3000,
			},
			allowTouchMove: false,

		})
	})
}


//------------------- touch-pad
function onPhone() {
	const wrapper = document.querySelector('.wrapper')
	const menu = document.querySelector('.menu')

	wrapper.classList.add('_touch')
	menu.classList.add('_hidden')

	return
}
function onPC() {
	const wrapper = document.querySelector('.wrapper')
	const menu = document.querySelector('.menu')

	wrapper.classList.remove('_touch')
	menu.classList.remove('_hidden')

	return
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
	.test(navigator.userAgent)) {
	onPhone()
	const header = document.querySelector('.header')
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		header.classList.add('_touch')
	} else {
		header.classList.remove('_touch')
	}
	window.onscroll = function () { fixedHeader() }

	function fixedHeader() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			header.classList.add('_touch')
		} else {
			header.classList.remove('_touch')
		}
	}



} else {
	const btnToTop = document.querySelector('.btn-to-top')
	onPC()
	window.onscroll = function () { visibleBtnToTop() }

	function visibleBtnToTop() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			btnToTop.classList.remove('_hide')
		} else {
			btnToTop.classList.add('_hide')
		}
	}
	btnToTop.addEventListener('click', scrollToTop)
	function scrollToTop(e) {
		e.preventDefault()
		const timerFunc = {
			duration: 2000,

		}
		document.body.animate(scrollTo({ top: 0, behavior: 'smooth' }), '300')
		document.documentElement.animate(scrollTo({ top: 0, behavior: 'smooth' }), '300')
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
}




