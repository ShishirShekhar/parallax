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
        let para = `
        That night we lay on the dark brown carpet <br>
        and you told me that expected thing <br>
        I closed my eyes and tried to do <br>
        the soft and mutable equation <br>
        of what we do and what we promise to do <br>
        and I just couldn't think for the sound <br>
        of strange doors opening and old ones closing. <br>
        You know I'm not good with figures <br>
        even when the world is still and calm. <br>
        But now I will answer you as best I can: <br>
        and the feeling was without a name <br>
        like the true colour of light <br>
        before it is fractured and labelled <br>
        containing simply everything <br>
        in the known and unknown spectra of my life.`
    
        document.getElementById('logo').innerHTML = logo;
        document.getElementById('text').innerHTML = text;
        document.getElementById('para').innerHTML = para;
        document.getElementById('secAbout').innerHTML = secAbout;
    }
}
