for (let i = 1; i <= 0; i++) {
    if (i % 2 == 0) {
        console.log("ini mod 2");
        // break
        // continue
    } 
    
    if(i == 4) {
        console.log("ini 4");
    } else {
        console.log("number: ", i);
    }
    
    switch (i) {
        case 4:
            console.log("ini 4 switch");
            break;
        case 4:
            console.log("ini 4 switch 2");
            break;
            
        default:
            console.log("number switch: ", i);
            break;
    }
}


function calc(no1, no2, no3, no4, no5, no6) {
    let total = no1 * no2
    
    if(no3)
    total *= no3 // total = total * no3
    
    console.log("total: ", total);
}
calc(3, 2, 4)
calc(4, 5)

function addDivChild() {
    
    let x = 0
    const loop = setInterval(function(){
        console.log(x++)
    }, 500)

    setTimeout(function(){

        clearInterval(loop)

        console.info("ini setimeout");
        const div1 = document.getElementById("div1")
        
        let ii = 1
        let children = ""
        while (ii <= 10) {
            children += `<div id="div1${ii}">div ke ${ii}</div>`
            ii++
        }

        // div1.innerHTML = children

        // changeValueDiv11()
    }, 1000)
}

function changeValueDiv11() {
    console.log("ini changeValueDiv11()");
    const div11 = document.getElementById("div11")
    div11.innerHTML = "ini hasil ganti"
}

addDivChild()

function buttonClicked() {
    let name = document.biodata.username

    console.log(name.value);
    name.value = "ini hasil click"
}

