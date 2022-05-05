start();

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});

function start() {
    var pass = prompt("Enter your full name");
    pass = pass.toLowerCase();
    
    if (pass == "nisha kumari" || pass == "nisha singh") {
        let logo = 'Nisha';
        let text = 'tsuki ga kirei desu ne';
        let secAbout = 'Feelings Without a Name'
        let para = `<p>
        If you're feeling like you need a little bit of company <br>
        You met me at the perfect time <br>
        <br>
        You want me, I want you, baby <br>
        My sugarboo, I'm levitating <br>
        The Milky Way, we're renegading <br>
        Yeah, yeah, yeah, yeah, yeah <br>
        <br>
        I got you, moonlight, you're my starlight <br>
        I need you all night, come on, dance with me <br>
        I'm levitating <br>
        You, moonlight, you're my starlight (you're the moonlight) <br>
        I need you all night, come on, dance with me <br>
        I'm levitating <br>
        </p>
        
        <div id="song">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/39LLxExYz6ewLAcYrzQQyP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>`
    
        document.getElementById('logo').innerHTML = logo;
        document.getElementById('text').innerHTML = text;
        document.getElementById('secAbout').innerHTML = secAbout;
        document.getElementById('para').innerHTML = para;
    }
}
