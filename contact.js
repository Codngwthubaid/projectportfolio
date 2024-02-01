function sendmsg() {
    (function () {
        emailjs.init("SM8asVDSZJqrnsEZt");  //account public key
    })();

    let serviceID = "service_cq4tj0e";
    let templateID = "template_9foj3gm";

    let parameters = {
        sendername: document.querySelector("#contact-name-input").value,
        senderemail: document.querySelector("#contact-email-input").value,
        sendermessage: document
            .querySelector("#contact-msg-input").value
    };

    emailjs.send(serviceID, templateID, parameters)
        .then( res => {
            alert("Thank You" + parameters["sendername"] + ".! Your message has been sent.")
        })
        .catch();
}