const btn = document.getElementById('action-button');
btn.addEventListener("click", validateMeet);

document.getElementById('messi').onclick = function() {
    soundEffect('messi');
}

document.getElementById('messi-goal').onclick = function() {
    soundEffect('messi-goal');
}

document.getElementById('heartbeat').onclick = function() {
    soundEffect('heartbeat');
}

document.getElementById('crowd').onclick = function() {
    soundEffect('crowd');
}

document.getElementById('party-horn').onclick = function() {
    soundEffect('party-horn');
}

document.getElementById('air-horn').onclick = function() {
    soundEffect('air-horn');
}

document.getElementById('goal').onclick = function() {
    soundEffect('goal');
}

document.getElementById('applause').onclick = function() {
    soundEffect('applause');
}

document.getElementById('siuuu').onclick = function() {
    soundEffect('siuuu');
}

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
}


function soundEffect(effectName)
{
    var audio = new Audio("audio/"+effectName+".wav");
    audio.play();
}
