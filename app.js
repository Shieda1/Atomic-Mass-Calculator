// https://calculator.swiftutors.com/atomic-mass-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const atomicMassRadio = document.getElementById('atomicMassRadio');
const numberofProtonsRadio = document.getElementById('numberofProtonsRadio');
const numberofNeutronsRadio = document.getElementById('numberofNeutronsRadio');

let atomicMass;
let numberofProtons = v1;
let numberofNeutrons = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

atomicMassRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of Protons';
  variable2.textContent = 'Number of Neutrons';
  numberofProtons = v1;
  numberofNeutrons = v2;
  result.textContent = '';
});

numberofProtonsRadio.addEventListener('click', function() {
  variable1.textContent = 'Atomic Mass';
  variable2.textContent = 'Number of Neutrons';
  atomicMass = v1;
  numberofNeutrons = v2;
  result.textContent = '';
});

numberofNeutronsRadio.addEventListener('click', function() {
  variable1.textContent = 'Atomic Mass';
  variable2.textContent = 'Number of Protons';
  atomicMass = v1;
  numberofProtons = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(atomicMassRadio.checked)
    result.textContent = `Atomic Mass = ${computeAtomicMass().toFixed(2)}`;

  else if(numberofProtonsRadio.checked)
    result.textContent = `Number of Protons = ${computeNumberofProtons().toFixed(2)}`;

  else if(numberofNeutronsRadio.checked)
    result.textContent = `Number of Neutrons = ${computeNumberofNeutrons().toFixed(2)}`;
})

// calculation

function computeAtomicMass() {
  return Number(numberofProtons.value) + Number(numberofNeutrons.value);
}

function computeNumberofProtons() {
  return Number(atomicMass.value) - Number(numberofNeutrons.value);
}

function computeNumberofNeutrons() {
  return Number(atomicMass.value) - Number(numberofProtons.value);
}