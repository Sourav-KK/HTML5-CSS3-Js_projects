document.addEventListener("DOMContentLoaded", () => {
  const OTPVal = document.getElementById("otpVal");

  const btnCLick = document.getElementById("btn");

  const copyBtnn = document.getElementById("copyBtn");
  copyBtnn.style.display = "none";

  btnCLick.addEventListener("click", () => {
    console.log("clicked");
    copyBtnn.innerText = "Copy";

    const digits = "0123456789";
    let OTP = "";
    const limit = 5;

    for (let i = 0; i < limit; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }

    OTPVal.value = OTP;

    if (OTP) {
      console.log(OTP, "otp");
      if (copyBtnn) {
        copyBtnn.style.display = "block";
      }
    }
  });

  copyBtnn.addEventListener("click", async () => {
    const text = OTPVal.value;

    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
      // alert(`OTP Copied: ${text}`);
      copyBtnn.innerText = "Copied !";

      // popper(text);
    } catch (err) {
      console.error("Failed to copy: ", err.message);
      alert("Failed to Copy text");
    }
  });
});
