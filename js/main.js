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

  //amount payment function
  function payNow(amount) {
    const upiid="abccharity@icicibank";
    const ua = navigator.userAgent;
  
    if (/Android/i.test(ua)) {
      // UPI deep link
      const upiUrl = `upi://pay?pa=${upiid}&pn=ABC%20Charity&am=${amount}&cu=INR&tn=Donation`;
      window.location.href = upiUrl;
    } else if (/iPhone|iPad/i.test(ua)) {
      alert("Please use Apple Pay (Safari only).");
    } else {
      alert("Please scan the QR code to donate.");
    }
  }

//for custom aount function
  function custom_amt() {
    const amtInput = document.getElementById("custom_amount");
    amtInput.style.display = "block";
  
    const customBtn = document.getElementById("custom");
    customBtn.textContent = "Pay";
  
    customBtn.onclick = function () {
      const amount = amtInput.value;
      if (!amount || isNaN(amount)) {
        alert("Enter a valid amount");
        return;
      }
      payNow(amount);
    };
  }
  
  