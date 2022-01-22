
var tl = gsap.timeline();
console.log(tl) 
tl.to(".metamorphosis", {
    // square  
    background: "#F15A5A",
    height: 100,
    width: 100,
    borderColor: "white",
    delay: 1
})
tl.to(".metamorphosis", { 
    // CIRCLE 
    width: 100, 
    height: 100,
    borderRadius: "50%",
    background: "#F0C419",
    duration: 2
})
tl.to(".metamorphosis", { 
    // OVAL 
    width: 200,
    height: 100,
    background: "#4EBA6F",
    borderRadius: "50%",
    duration: 2
})
tl.to(".metamorphosis", { 
    // Bullet
    borderColor: "transparent",
    width: 100,
    height: 70,
    background: "black",
    borderRadius: "0% 100% 100% 0%",
    borderStyle: "none",
    duration: 2
})
tl.to(".metamorphosis", { 
    // rectangle
    width: 200,
    height: 100,
    background: "#2D95BF",
    borderRadius: "0%",
    duration: 2,
    delay: 1
})
tl.to(".metamorphosis", { 
    // triangle
    width: 0,
    height: 0,
    borderRight: "60px solid transparent",
    borderLeft: "60px solid transparent",
    borderBottom: "100px solid #955BA5",
    background: "transparent",
    duration: 2
})
tl.to(".metamorphosis", { 
    // Ribon
    width: 0,
    height: 100,
    borderLeft: "60px solid #d9534f",
    borderRight: "60px solid #d9534f",
    borderBottom: "35px solid transparent",
    duration: 2
})

tl.repeat(10)
tl.yoyo(true)


/* tl.to(".metamorphosis", { 
    // leaf
    width: 100,
    height: 100,
    borderRadius: "0% 50% 0% 50%",
    background: "#5cb85c",
    border: "3px solid #555",
    duration: 2
}) */


// Fantasma
// Trevol
// corazon
// paralelogramo
// luna 
// sobre
// 
