document.getElementById("contactForm").addEventListener("submit", (e) => {

    e.preventDefault();

    var contactName = document.getElementById("contactName").value;
    var contactEmail = document.getElementById("contactEmail").value;
    var contactSubject = document.getElementById("contactSubject").value;
    var contactMessage = document.getElementById("contactMessage").value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // CHECK NAME

    if(contactName == ""){
        $("#contact form .form-field label.name").show(50);
        setTimeout(() => {
            $("#contact form .form-field label.name").hide();
        }, 3000);
    } else if(contactName.length < 3){
        $("#contact form .form-field label.name").show(50);
        $("#contact form .form-field label.name").html("3 caractère au minimum !");
        setTimeout(() => {
            $("#contact form .form-field label.name").html("Ce champ est requis.");
            $("#contact form .form-field label.name").hide();
        }, 3000);

    } 

    // CHECK EMAIL

    else if(contactEmail == ""){
        $("#contact form .form-field label.email").show(50);
        setTimeout(() => {
            $("#contact form .form-field label.email").hide();
        }, 3000);
    } else if(!contactEmail.match(regexEmail)){
        $("#contact form .form-field label.email").show(50);
        $("#contact form .form-field label.email").html("Veuillez saisir une adresse Email valide !");
        setTimeout(() => {
            $("#contact form .form-field label.email").html("Ce champ est requis.");
            $("#contact form .form-field label.email").hide();
        }, 3000);
    } 

    //CHECK SUBJECT

    else if(contactSubject == ""){
        $("#contact form .form-field label.subject").show(50);
        setTimeout(() => {
            $("#contact form .form-field label.subject").hide();
        }, 3000);
    } else if(contactSubject.length < 5){
        $("#contact form .form-field label.subject").show(50);
        $("#contact form .form-field label.subject").html("5 caractère au minimum !");
        setTimeout(() => {
            $("#contact form .form-field label.subject").html("Ce champ est requis.");
            $("#contact form .form-field label.subject").hide();
        }, 3000);
    }

    // CHECK MESSAGE

    else if(contactMessage == ""){
        $("#contact form .form-field label.message").show(50);
        setTimeout(() => {
            $("#contact form .form-field label.message").hide();
        }, 3000);
    } else if(contactMessage.length < 30){
        $("#contact form .form-field label.message").show(50);
        $("#contact form .form-field label.message").html("30 caractère au minimum !");
        setTimeout(() => {
            $("#contact form .form-field label.message").html("Ce champ est requis.");
            $("#contact form .form-field label.message").hide();
        }, 3000);
    } else {
        
        var formData = {
            name: contactName,
            email: contactEmail,
            subject: contactSubject,
            message: contactMessage,
        };

        // Requête AJAX
        $.ajax({
            type: "POST",
            url: "form/mail.php",
            data: formData,
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
        });
    }
    
})