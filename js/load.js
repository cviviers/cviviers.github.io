var socialtags = [{
    img: "img/github.svg",
    link: "https://github.com/cviviers"
}, {
    img: "img/linkedin.svg",
    link: "https://www.linkedin.com/in/chrisviviers/"
}, {
    img: "img/twitter.svg",
    link: "https://twitter.com/@Chris_Viviers"
}, {
    img: "img/email.svg",
    link: "mailto:c.g.a.viviers@gmail.com"
},{
    img: "img/google-scholar.svg",
    link: "https://scholar.google.com/citations?user=wE8xva4AAAAJ&hl=en&authuser=3"
    
    }]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "dark") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'dark');
    }

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "dark") {
        element.classList.remove("light-mode");
    } else {
        element.classList.add("light-mode");
    }
}

checkDayNight()


function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

