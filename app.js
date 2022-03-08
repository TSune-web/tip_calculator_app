const bill = document.getElementById('cost');
const peopleNum = document.getElementById('peopleNum');
const btns = document.querySelectorAll('button');
const tipTotal = document.getElementById('tipTotal');
const resetBtn = document.getElementById('reset');


const tips = btns.forEach(btn => {
    let result = 0;
    btn.addEventListener('click', function() {
        result = this.value * bill.value;
        return result;
        // console.log(result)
    });
});
console.log(tips)

// Get the total tip
// function tipAmount() {
//     for (let btn of btns) {
//         btn.addEventListener('click', function() {
//             tips = bill.value * this.value
//             // console.log(tips)
//         });
//     }
// }

// Get the total cost per person
function perPerson() {}

// Reset all the numbers
function reset() {}


// Render the result of tips
// bill.addEventListener('input', e => {
//     e.preventDefault();

//     // const tipResult = tipAmount();

//     // tipTotal.innerText = `$${bill.value}.00`;
// });

// Render the result of total amount per person
