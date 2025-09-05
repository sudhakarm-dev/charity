
function close_card(){
    const close=document.getElementById("donation_card");
    close.style.display = "none";
}
function open_card(){
    const close=document.getElementById("donation_card");
    const body=document.getElementById("body");
    close.style.display ="flex";
    body.style.filter ="blur(5px) grayscale(20%)";
}

