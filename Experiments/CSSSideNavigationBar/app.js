const posts = document.getElementsByClassName('post');
const navigationBar = document.querySelector('.navigation-bar');
let isMenuVisible = false;

const updateMenuVisibility = () => {
    if (isMenuVisible) {
        navigationBar.classList.add('navigation-bar-active');
        for ( let i = 0; i < posts.length; i++ ) {
            posts[i].classList.add('on-navigation-bar-open');
        }
    } else {
        navigationBar.classList.remove('navigation-bar-active');
        for ( let i = 0; i < posts.length; i++ ) {
            posts[i].classList.remove('on-navigation-bar-open');
        }
    }
}
const toggleMenu = () => {
    isMenuVisible = !isMenuVisible;
    console.log('Is Menu Visible: ' + isMenuVisible);
    updateMenuVisibility();
}