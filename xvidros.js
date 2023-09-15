var a1 = document.querySelectorAll(".videor")

a1.forEach((a5) => {
    a5.addEventListener("mouseenter", () => {
        a5.src = "/jailsongif.gif"
        setTimeout(() => {
            a5.src = "/screenshot_24.png"
        }, 20000);
    })
    a5.addEventListener("mouseleave", () => {
        a5.src = "/screenshot_24.png"
    })
})
var a2 = document.querySelectorAll(".videow")

a2.forEach((a5) => {
    a5.addEventListener("mouseenter", () => {
        a5.src = "macacogif.gif"
        setTimeout(() => {
            a5.src = "/image.png"
        }, 20000);
    })
    a5.addEventListener("mouseleave", () => {
        a5.src = "/image.png"
    })
})
var a3 = document.querySelectorAll(".videom")

a3.forEach((a5) => {
    a5.addEventListener("mouseenter", () => {
        a5.src = "gifj.gif"
        setTimeout(() => {
            a5.src = "/mohamed.png"
        }, 20000);
    })
    a5.addEventListener("mouseleave", () => {
        a5.src = "/mohamed.png"
    })
})
