window.addEventListener('load', function (event){
    let banner = document.querySelector("#footer h4");
    window.addEventListener('click', function (event){
        if(event.target.matches('.change-banner-color')) {
            let color = banner_colors[Math.floor(Math.random() * banner_colors.length)];
            banner.style.backgroundColor = color;

        }
    })
})