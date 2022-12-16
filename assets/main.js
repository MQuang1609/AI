const tabBtns = document.querySelectorAll('.tab-btns button');
const tabContent = document.querySelectorAll('.tab-content');
const navLink = document.querySelectorAll('.nav-item button');
const tabHome = document.querySelectorAll('.tab-home');
//active content tab
// function activeContentTab(target) {
//     const tabActiveElement = document.querySelector('.tab-content.active');
//     tabActiveElement.classList.remove('active');
//     const activetab = document.querySelector(target);
//     activetab.classList.add('active');
// }

// function handleChangeTab(btn) {
//     const activeElement = document.querySelector('.tab-content.active');
//     activeElement.classList.remove('active');
//     activeContentTab(btn.getAttribute('data-TabID'));
//     btn.classList.add('active');
// }

const handleChangeTab = (tab) => {
    tabBtns.forEach((button) => {
        button.classList.remove('active');
    })
    tabContent.forEach((p) => {
        p.classList.remove('active');
    })

    tab.classList.add('active');

    const target = tab.getAttribute('data-TabID');
    const activetab = document.querySelector(target);
    activetab.classList.add('active')
}

for (const tabBtn of tabBtns) {
    tabBtn.addEventListener('click', () => {
        handleChangeTab(tabBtn);
    })
}
const handleChange = (tab) => {
    navLink.forEach((event) => {
        event.classList.remove('active2');
    })
    tabHome.forEach((event) => {
        event.classList.remove('active2');
    })
    tab.classList.add('active2');
    const target = tab.getAttribute('data-Tab');
    console.log(target)
    const active = document.querySelector(target);
    active.classList.add('active2')
}


for (const tab of navLink) {
    tab.addEventListener('click', () => {
        handleChange(tab);
    })
}



