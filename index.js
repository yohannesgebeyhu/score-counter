let homeEl = document.getElementById("homescore")
let guestEl = document.getElementById("guestscore")
let count = 0
let gcount = 0


function updatedHighlight(){
    homeEl.classList.remove("winner")
    guestEl.classList.remove("winner")
    if(count > gcount){
        homeEl.classList.add("winner")
    } 
    else if(gcount > count){
        guestEl.classList.add("winner")
    }

}
function addone() { 
    count += 1; 
    homeEl.textContent = count; 
    updatedHighlight() 
}
function addtwo() { 
    count += 2; 
    homeEl.textContent = count; 
    updatedHighlight() 
}
function addthree() { 
    count += 3; 
    homeEl.textContent = count; 
    updatedHighlight() 
}
function gaddone() { 
    gcount += 1; 
    guestEl.textContent = gcount; 
    updatedHighlight() 
}
function gaddtwo() { 
    gcount += 2; 
    guestEl.textContent = gcount; 
    updatedHighlight() 
}
function gaddthree() { 
    gcount += 3; 
    guestEl.textContent = gcount; 
    updatedHighlight() 
}

function reset(){
    count = 0
    gcount= 0
    homeEl.textContent = count
    guestEl.textContent = gcount
    homeEl.classList.remove("winner")
    guestEl.classList.remove("winner")
}
