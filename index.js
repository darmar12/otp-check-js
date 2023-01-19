const arrInputs = document.querySelectorAll(".otp__input");
const otpBtn = document.querySelectorAll(".otp__btn");

arrInputs.forEach((input, mainIndex) => {
    input.addEventListener("keyup", (e) => {
        const activeInput = input;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;

        if (nextInput && nextInput.hasAttribute("disabled") && activeInput.value.length > 0) {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        if(e.key === "Backspace") {
            arrInputs.forEach((input, activeIndex) => {
                if (prevInput && mainIndex <= activeIndex) {
                    prevInput.focus();
                    input.setAttribute("disabled", true);
                    input.value = "";
                }
            });
        }

        if (activeInput.value.length > 1) activeInput.value = "";
    });
});