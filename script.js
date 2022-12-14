const btn = document.getElementById('action-button');
btn.addEventListener("click", fetchMeet);

function fetchMeet() 
{
    btn.innerHTML = '<i class="fa fa-circle-o-notch fa-spin"></i> Fetching';
    btn.disabled = true;
    const error = document.getElementById('error-message');
    const URL = window.location.toString().split("/");
    const domain = URL.at(-2);
    if (domain != "meet.google.com")
    {
        error.innerHTML = "Switch to a Google Meet and retry";
        btn.innerHTML = "Detect Meet"
        btn.disabled = false;
        return;
    }
    const meetCode = URL.at(-1);
    const success = document.getElementById('success-message');
    success.innerHTML = meetCode;
    btn.innerHTML = "Meet Detected"
}