// Digital logic functions
function AND(a, b) {
    return a && b ? 1 : 0;
}

function OR(a, b) {
    return a || b ? 1 : 0;
}

function NOT(a) {
    return a === 0 ? 1 : 0;
}

// Function to update the output based on inputs and update gate images
function updateANDGate() {
    const inputA = parseInt(document.getElementById('and-input-a').textContent);
    const inputB = parseInt(document.getElementById('and-input-b').textContent);
    const result = AND(inputA, inputB);
    document.getElementById('and-output').textContent = result;
    updateGateImage('and', result);
}

function updateORGate() {
    const inputA = parseInt(document.getElementById('or-input-a').textContent);
    const inputB = parseInt(document.getElementById('or-input-b').textContent);
    const result = OR(inputA, inputB);
    document.getElementById('or-output').textContent = result;
    updateGateImage('or', result);
}

function updateNOTGate() {
    const input = parseInt(document.getElementById('not-input').textContent);
    const result = NOT(input);
    document.getElementById('not-output').textContent = result;
    updateGateImage('not', result);
}

// Function to update the image based on gate state
function updateGateImage(gate, state) {
    let img = document.getElementById(`${gate}-gate-img`);
    
    // Change the image depending on the state of the gate
    if (state === 1) {
        img.src = `images/${gate}-gate-1.png`;  // Image for output 1
    } else {
        img.src = `images/${gate}-gate-0.png`;  // Image for output 0
    }
}

// Event listeners to toggle inputs (0 or 1)
document.getElementById('and-input-a').addEventListener('click', function () {
    this.textContent = this.textContent === '0' ? '1' : '0';
    updateANDGate();
});

document.getElementById('and-input-b').addEventListener('click', function () {
    this.textContent = this.textContent === '0' ? '1' : '0';
    updateANDGate();
});

document.getElementById('or-input-a').addEventListener('click', function () {
    this.textContent = this.textContent === '0' ? '1' : '0';
    updateORGate();
});

document.getElementById('or-input-b').addEventListener('click', function () {
    this.textContent = this.textContent === '0' ? '1' : '0';
    updateORGate();
});

document.getElementById('not-input').addEventListener('click', function () {
    this.textContent = this.textContent === '0' ? '1' : '0';
    updateNOTGate();
});
