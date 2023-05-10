/*---------------------------------------------------- */
/*	contact form
------------------------------------------------------ */

/* local validation */

// $(document).ready(function() {
//   $("form").submit(function() {

//     var contactName = $("#contactName").val();
//     var contactEmail = $("#contactEmail").val();
//     var contactSubject = $("#contactSubject").val();
//     var contactMessage = $("#contactMessage").val();
//     var contactSubmit = $("#submitForm").val();
//     $(".message-success").load("form/mail.php", {
//       contactName: contactName,
//       contactEmail: contactEmail,
//       contactSubject: contactSubject,
//       contactMessage: contactMessage,
//       contactSubmit: contactSubmit
//     });
//   });
// })































// submitForm.addEventListener("click", (e) => {

//   e.preventDefault();
//   validForm();

// });

// function validForm() {

//   if(contactName == ""){

//     document.querySelector(".msgWarning").style.display = "flex";
//     setTimeout(() => {
//       document.querySelector(".msgWarning").style.display = "none";
//     }, 3000);
    

//   } else if (contactName.length < 5){
    
//     document.querySelector(".msgWarning").style.display = "flex";
//     document.querySelector(".msgWarning.name").innerHTML = "Votre nom doit comporter au moins 5 caractères.";
//     setTimeout(() => {
//       document.querySelector(".msgWarning").style.display = "none";
//     }, 5000);

//   } else {

//     return false;

//   }

  // if(contactEmail == ""){

  //   document.querySelector(".msgWarning").style.display = "flex";
  //   setTimeout(() => {
  //     document.querySelector(".msgWarning").style.display = "none";
  //   }, 3000);
    

  // } else if (contactEmail.){
    
  //   document.querySelector(".msgWarning").style.display = "flex";
  //   document.querySelector(".msgWarning.name").innerHTML = "Votre nom doit comporter au moins 5 caractères.";
  //   setTimeout(() => {
  //     document.querySelector(".msgWarning").style.display = "none";
  //   }, 5000);

  // }

// }