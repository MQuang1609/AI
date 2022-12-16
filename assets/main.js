const tabBtns = document.querySelectorAll('.tab-btns button');
const tabContent = document.querySelectorAll('.tab-content');

const tabBtnHome = document.querySelectorAll('.tab-btn-home button');
const tabContentHome = document.querySelectorAll('.tab-content-home');


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
    console.log(tab)
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


    // const target2 = tab.getAttribute('data-TabId');
    // const activetab2 = document.querySelector(target2);
    // console.log(activetab2)
    // activetab2.classList.add('active3')
}

const handleChangeTabHome = (tab) => {
    console.log(tab)
    tabBtnHome.forEach((button) => {
        button.classList.remove('active');
    })
    tabContentHome.forEach((p) => {
        console.log(p)
        p.classList.remove('active');

    })
    tab.classList.add('active');
    const target = tab.getAttribute('data-TiengViet');
    const activetab = document.querySelector(target);
    activetab.classList.add('active');
}

for (const tabBtn of tabBtns) {
    tabBtn.addEventListener('click', () => {
        handleChangeTab(tabBtn);
    })
}
for (const btn of tabBtnHome) {
    btn.addEventListener('click', () => {
        handleChangeTabHome(btn);
    })
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
    const active = document.querySelector(target);
    active.classList.add('active2')
}


for (const tab of navLink) {
    tab.addEventListener('click', () => {
        handleChange(tab);
    })
}



