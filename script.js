function nextStep(step) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('step-' + step).classList.add('active');
}

function prevStep(step) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('step-' + step).classList.add('active');
}

function selectTheme(element) {
    document.querySelectorAll('.theme-card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');
}

// When Finish is clicked, show the final message
function finishSetup() {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('step-4').classList.add('active');
}

// Restart the process
function restart() {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('step-1').classList.add('active');
}
