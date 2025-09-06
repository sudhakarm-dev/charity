// to open and close donation card
function close_card(){
    const close=document.getElementById("donation_card");
    close.style.display = "none";
    // custom amount button text
    const custom=document.getElementById("custom");
    custom.textContent = "Custom";
    // cutom amount input
    const amt=document.getElementById("custom_amount");
    amt.style.display = "none";
}
function open_card(){
    const close=document.getElementById("donation_card");
    close.style.display = "block";
}

// to send mail with custom message
function send_mail(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const content = document.getElementById("content").value;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
    event.target.reset();
}

function custom_amt(){
    // cutom amount input
    const amt=document.getElementById("custom_amount");
    amt.style.display = "block";
    // custom amount button text
    const custom=document.getElementById("custom");
    custom.textContent = "Send";
  }