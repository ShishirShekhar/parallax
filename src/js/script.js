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
        Maybe it's the way you say my name <br>
        Maybe it's the way you play your game <br>
        But it's so good, I've never known anybody like you <br>
        But it's so good, I've never dreamed of nobody like you <br>
        <br>
        And I've heard of a love that comes once in a lifetime <br>
        And I'm pretty sure that you are that love of mine <br>
        <br>
        'Cause I'm in a field of dandelions <br>
        Wishing on every one that you'll be mine, mine <br>
        And I see forever in your eyes <br>
        I feel okay when I see you smile, smile <br>
        Wishing on dandelions all of the time <br>
        Praying to God that one day you'll be mine <br>
        Wishing on dandelions all of the time, all of the time <br>
        </p>
        
        <div id="song">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2eAvDnpXP5W0cVtiI0PUxV?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>`
    
        document.getElementById('logo').innerHTML = logo;
        document.getElementById('text').innerHTML = text;
        document.getElementById('secAbout').innerHTML = secAbout;
        document.getElementById('para').innerHTML = para;
    }
}
