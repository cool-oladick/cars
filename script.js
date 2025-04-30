// function openFord() {
//     window.open("ford.html", "ford", "width=400,height=300");
//   }
//   function openMazda() {
//     window.open("mazda.html", "mazda", "width=400,height=300");
//   }
//   function openVolvo() {
//     window.open("volvo.html", "volvo", "width=400,height=300");
//   }

function openCar(car) {
    window.open(car + ".html", car, "width=400,height=300");
}

function openCar(url, name, width, height) {
    let leftpos = (screen.width - width) / 2;
    let toppos = (screen.height - height) / 2;
    return window.open(url, name, `width=${width},height=${height},left=${leftpos},top=${toppos}`);
}


function closePict() {
    window.close();
}