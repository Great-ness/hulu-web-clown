const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')


const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick (e) {
    if(e.target == modal) {
        closeModal()
    }
}


const mobile = document.querySelector('.mobile')
const mobileOpen = document.querySelector('.hamburger')


const mobileClose = document.querySelector('.close-mobile')

mobileOpen.addEventListener('click', openMobile)
mobileClose.addEventListener('click', closeMobile)
window.addEventListener('click', outsideClick)

function openMobile() {
    mobile.style.display = 'block'
}

function closeMobile() {
    mobile.style.display = 'none'
}

function outsideClick (e) {
    if(e.target == mobile) {
        closeMobile()
    }
};




// const mobilemodal1 = document.querySelector('.modal')
// const mobileloginBtn1 = document.querySelector('.hamburger')


// const mobilecloseBtn1 = document.querySelector('.close')

// mobileloginBtn.addEventListener('click', openModal)
// mobilecloseBtn.addEventListener('click', closeModal)
// window.addEventListener('click', outsideClick)

// function openModal() {
//     modal.style.display = 'block'
// }

// function closeModal() {
//     modal.style.display = 'none'
// }

// function outsideClick (e) {
//     if(e.target == modal) {
//         closeModal()
//     }
// }