function themeSwitch(theme){
    const html = document.documentElement;
    html.className = theme;
    try {
        window.localStorage.setItem("theme",theme);
    } catch{
        console.warn("Can't save theme");
    }
}

function showSubmenu(id){
    document.getElementById(id).classList.toggle("hidden");
}

let domReady = (cb) => {
      document.readyState === 'interactive' || document.readyState === 'complete'
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
    };

domReady(() => {
    document.getElementById('my-theme-toggle').addEventListener('click', function(){
        showSubmenu('theme-submenu');
    })
    document.body.style.visibility = 'visible';
});
