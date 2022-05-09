const setup = () => {


    let items = document.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'listitem';
    }

    let myPic = document.createElement('img');
    myPic.setAttribute ("src", 'https://www.facebook.com/photo?fbid=2008069632669264&set=a.111426142333632');

    document.querySelector("body").appendChild(myPic);
};
window.addEventListener("load", setup);