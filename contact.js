const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

// function toggleSideBar(){
//     sidebar.classList.toggle('close')

//     Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
//         ul.classList.remove('show')
//         ul.previousElementSibling.classList.remove('rotate')
//     })
// }


// function toggleSubMenu(button){
//     button.nextElementSibling.classList.toggle('show')
//     button.classList.toggle('rotate')

//     if(sidebar.classList.contains('close')){
//         sidebar.classList.toggle('close')
//         toggleButton.classList.toggle('rotate')
//     }
// }

function toggleSideBar(){
    sidebar.classList.toggle('close')
}

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}


function autoCloseSidebar() {
    if (window.innerWidth <= 800) {
        sidebar.classList.add('close');
    } else {
        sidebar.classList.remove('close');
    }
}

autoCloseSidebar();

window.addEventListener('resize', autoCloseSidebar);


