function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar img e texto
    const img = document.querySelector("#profile img")

    // subst. img
    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assest/avatar-light.png")         
    } else {
        // manter o avatar ini
        img.setAttribute("src", "./assest/avatar.png")        
    }

    // texto do avatar
    if(html.classList.contains("light")) {
        img.setAttribute("alt", "Foto do Avatar Sun")         
    } else {
       img.setAttribute("alt", "Foto do Avatar Moon")        
    }
}