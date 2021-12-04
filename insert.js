// insert zopim

function chatZopim(sources) {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = sources;
    document.body.appendChild(js);
}

chatZopim("https://rawcdn.githack.com/catatanpribadi/umum/90e84178c29f6675196d8e85f999617d242ad145/zopim.js");

// insert banner kiri

function banner(sources) {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = sources;
    document.body.appendChild(js);
}

banner("https://raw.githubusercontent.com/catatanpribadi/umum/main/bannerkiri.js");

// insert css

function style(href) {
    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = href
    document.head.appendChild(css);
}

style("https://github.com/catatanpribadi/umum/blob/main/style.css");
