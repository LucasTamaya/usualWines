const header = document.querySelector("header")

// Animation au scroll
document.addEventListener("scroll", () => {
    let scrollPosition = scrollY;
    console.log("top", scrollPosition)
    if(scrollPosition > 150){
        header.style.display = "none";
        console.log("bottom", scrollY)
    }
    else if(scrollPosition < 150){
        header.style.display = "initial";
    }
})