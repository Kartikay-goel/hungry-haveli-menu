const contact_form= document.getElementById("contact-form");
const thankyou=document.getElementById("thank_you");
const name_fail=document.getElementById("name_error");
const message_fail=document.getElementById("message_error");


contact_form.addEventListener("submit",  function(e){
    e.preventDefault();
    name_fail.textContent = "";
    message_fail.textContent = "";
    thankyou.textContent = "";
    
    const name= document.getElementById("form_name_text");
    const message=document.getElementById("form_message_text")
    const messagevalue=message.value.trim();
    const namevalue=name.value.trim();
    if(namevalue==="" || messagevalue===""){

        if(namevalue===""){
            name_fail.textContent="Please enter your name";
            name_fail.classList.add("name_fail");
        }
        if(messagevalue===""){
            
            message_fail.textContent="Please enter your message";
            message_fail.classList.add("message_fail");
        }
   
    }else{

        
        name.value="";
        message.value="";
        thankyou.textContent="Thank You, "+namevalue+" for your feedback!";
        thankyou.classList.add("thank_you_message");
        
    }
    
});

