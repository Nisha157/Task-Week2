const form = document.getElementBylb("myForm");

form.addEventListener("submit",function(event){
    event.preventDefault();

    const name = document.getElementByld("name").value;
    const email = document.getElementByld("email").value;

    document.getElementByld("message").textContent =
       "Hello" + name + "! Your email is " + email;
});