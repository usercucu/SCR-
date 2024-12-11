document.getElementById('generateForm').addEventListener('click', generateInputs);

let graphData = [];

function generateInputs() {
    const n = parseInt(document.getElementById('n').value);
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; 
    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number greater than 0");
        return;
    }


    for (let i = 0; i < n; i++) {
        const inputGroup = document.createElement('div');
        inputGroup.classList.add('input-group');

       
        const name1Input = document.createElement('input');
        name1Input.type = 'text';
        name1Input.placeholder = `Name 1 (Connection ${i + 1})`;
        name1Input.required = true;

    
        const name2Input = document.createElement('input');
        name2Input.type = 'text';
        name2Input.placeholder = `Name 2 (Connection ${i + 1})`;
        name2Input.required = true;

       
        const distanceInput = document.createElement('input');
        distanceInput.type = 'number';
        distanceInput.placeholder = `Distance (Connection ${i + 1})`;
        distanceInput.required = true;

 
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = () => inputGroup.remove();

        
        inputGroup.appendChild(name1Input);
        inputGroup.appendChild(name2Input);
        inputGroup.appendChild(distanceInput);
        inputGroup.appendChild(removeBtn);

       
        formContainer.appendChild(inputGroup);
    }
}


function validateForm() {
    const inputs = document.querySelectorAll('.input-group input');
    let isValid = true;
    
    
    document.querySelectorAll('.error').forEach(error => error.remove());

    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
            const error = document.createElement('div');
            error.classList.add('error');
            error.textContent = 'This field is required!';
            input.parentElement.appendChild(error);
            isValid = false;
        } else if (input.type === 'number' && parseFloat(input.value) <= 0) {
            input.style.borderColor = 'red';
            const error = document.createElement('div');
            error.classList.add('error');
            error.textContent = 'Distance must be a positive number!';
            input.parentElement.appendChild(error);
            isValid = false;
        } else {
            input.style.borderColor = '#ccc';
        }
    });

    if (!isValid) {
        alert('Please fill in all fields before submitting!');
        return false;
    }

   
    graphData = [];
    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach(group => {
        const name1 = group.querySelector('input:nth-child(1)').value;
        const name2 = group.querySelector('input:nth-child(2)').value;
        const distance = parseFloat(group.querySelector('input:nth-child(3)').value);
        graphData.push({ name1, name2, distance });
    });

    
    calculateShortestPath(graphData);
    return false; 
}

// Shortest Path Calculation (Dijkstra's Algorithm)
function calculateShortestPath(graphData) {
    // Example: Simple Dijkstra's Algorithm simulation (real implementation can be added)
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Clear previous results

   
    resultContainer.innerHTML = `<strong>Graph Data:</strong> <pre>${JSON.stringify(graphData, null, 2)}</pre>`;

    // Real shortest path calculation would happen here...
}

// Reset Form
function resetForm() {
    document.getElementById('pipeForm').reset();
    document.getElementById('formContainer').innerHTML = '';
    document.getElementById('resultContainer').innerHTML = '';
    graphData = [];
}
