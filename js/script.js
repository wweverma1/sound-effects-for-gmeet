const btn = document.getElementById('action-button');
btn.addEventListener("click", validateMeet);

async function validateMeet() 
{
    btn.disabled = true;
    btn.innerHTML = '<i class="fa fa-circle-o-notch fa-spin"></i> Fetching';
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    const tabURL = tabs[0].url.split("/");
    const domain = tabURL.at(-2);
    const meetCode = tabURL.at(-1);
    if (domain != "meet.google.com" || meetCode.length!=12)
    {
        const error = document.getElementById('error-message');
        error.innerHTML = "Switch to a valid Google Meet and retry";
        btn.innerHTML = "Detect Meet"
        btn.disabled = false;
        return;
    }
    meetControls(meetCode);
}

function meetControls(meetCode)
{
    document.getElementById('welcome-page').style.display = "none";
    document.getElementById('meet-page').style.display = "block";
    const success = document.getElementById('success-message');
    success.innerHTML = meetCode;
}