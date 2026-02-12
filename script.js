function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.getElementById('.final-message').classList.add('active');
}

function moveButton(btn) {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 100;
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}