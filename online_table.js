const btn = document.getElementById("reserve_table");
const adult_e = document.getElementById("adult_error");
const child_e = document.getElementById("children_error");
const date_e = document.getElementById("date_error");
const time_e = document.getElementById("time_error");
const name_e = document.getElementById("name_error");
const phone_e = document.getElementById("phone_error");
const success= document.getElementById("success_booking");
let isvalid = true;


btn.addEventListener("click", function () {

    adult_e.textContent = "";
    child_e.textContent = "";
    date_e.textContent = "";
    time_e.textContent = "";
    name_e.textContent = "";
    phone_e.textContent = "";
    success.textContent="";

    const adult_tag = document.getElementById("adult");
    const child_tag = document.getElementById("children");
    const date_tag = document.getElementById("date");
    const time_tag = document.getElementById("time");
    const booking_name_tag = document.getElementById("booking_name");
    const phone_tag = document.getElementById("phone_number");


    const adult_input = adult_tag.value.trim();
    const child_input = child_tag.value.trim();
    const date_input = date_tag.value.trim();
    const time_input = time_tag.value.trim();
    const booking_name_input = booking_name_tag.value.trim();
    const phone_input = phone_tag.value.trim();


    if (adult_input === "" || parseInt(adult_input) < 1) {
        adult_e.textContent = "Enter number of adults.";
        isvalid = false;


    }
    if (child_input === "" || parseInt(child_input) < 0) {
        child_e.textContent = "Enter number of children.";
        isvalid = false;
    }
    if (date_input === "") {
        date_e.textContent = "Enter the date.";
        isvalid = false;
    }
    if (time_input === "") {
        time_e.textContent = "Enter the time.";
        isvalid = false;
    }
    if (booking_name_input === "") {
        name_e.textContent = "Enter your name.";
        isvalid = false;
    }
    if (phone_input === "") {
        phone_e.textContent = "Enter your phone number";
        isvalid = false;
    } else if ((isNaN(parseInt(phone_input)) === false) && (phone_input.length < 10 || phone_input.length > 10)) {
        phone_e.textContent = "Phone number must be 10 digits";
        isvalid = false;
    } else if (isNaN((phone_input)) || parseInt(phone_input) < 0) {
        phone_e.textContent = "Enter a valid phone number";
        isvalid = false;
    }
    
    if (isvalid) {
        adult_tag.value="";
        child_tag.value="";
        date_tag.value="";
        time_tag.value="";
        booking_name_tag.value="";
        phone_tag.value="";
        success.textContent = "Your booking is received";
    }




});