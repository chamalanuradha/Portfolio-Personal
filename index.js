function sendMail(){
    var parms= {
        name:document.getElementById("name").value ,
        subject:document.getElementById("subject").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value ,
    };
    const serviceID="service_y55gi3r";
    const templateID="template_fket15c"

emailjs
.send(serviceID,templateID,parms)
.then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("subject").value ="";
    document.getElementById("email").value = "";
    document.getElementById("message").value ="";
    console.log(res);
    alert("Your massege sent sucessfully");
})
.catch((err) => console.log(err));
}

