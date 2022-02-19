function verify_email()
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mailid = (document.getElementById("emailAddr").value);

    if(mailid.match(mailformat)) {
        document.getElementById("message-neg").style.display = "none";
        document.getElementById("message-poss").style.display = "block";
    }

    else {
        document.getElementById("message-neg").style.display = "flex"
        document.getElementById("message-poss").style.display = "none";
    }

}