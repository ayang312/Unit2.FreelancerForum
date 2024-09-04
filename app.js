//Create h1 and append to the document
const h1 = document.createElement('h1');
h1.textContent = 'Freelancer Forum';
document.querySelector('header').appendChild(h1);


//create h2 and append to the document above the table
const h2 = document.createElement('h2');
h2.textContent = 'Available Freelancers';
document.querySelector('#freelancers').appendChild(h2);

//Here are my arrays of names, occupations, and starting prices
const names = ['Andrew', 'Kathy', 'Mike', 'Grace', 'Elizabeth', 'Frank', 'Angela', 'Sienna', 'John', 'Daniel', 'Jasmin'];
const occupations = ['Pharmacist', 'Manager', 'Photographer', 'Nurse', 'Speech Language Pathologist', 'Nurse Practitioner', 'Barista', 'Plumber', 'Architect', 'UX Designer'];
const startingPrices = [80, 60, 50, 70, 40, 100, 20, 30];
const maxFreelancers = 10;
const freelancers = [
    { name: 'Alice', occupation: 'Writer', price: 30 },
    { name: 'Bob', occupation: 'Teacher', price: 50 }
];

// create average prices div to display average starting price
function calculateAveragePrice() {
    const prices = freelancers.map((freelancer) => {
        return parseInt(freelancer.price);
    });
    const totalPrices = prices.reduce((sum, price) => sum + price, 0);
    const averagePrice = totalPrices / prices.length;
    return averagePrice;
};

const average = calculateAveragePrice();
const avgPrices = document.querySelector('#average');
avgPrices.innerText = `The average starting price is $${average}`;


//set Interval and clear it
const addFreelancerInterval = setInterval(addFreelancer, 2000);

//call function
render();

//render function
function render() {
    const tbody = document.querySelector('tbody');
    const rows = freelancers.map((freelancer) => {
        const row = document.createElement('tr');

        //Name
        const nameCol = document.createElement('td');
        nameCol.textContent = freelancer.name;
        row.appendChild(nameCol);

        //Occupation
        const occupationCol = document.createElement('td');
        occupationCol.textContent = freelancer.occupation;
        row.appendChild(occupationCol);

        //Starting Price
        const priceCol = document.createElement('td');
        priceCol.textContent = `$${freelancer.price}`
        row.appendChild(priceCol);

        return row;
    });
    tbody.replaceChildren(...rows);
};

//Add a random Freelancer to the freelancers array (CLEAR INTERVAL once it reaches max freelancers)
function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)]
    const occupation = occupations[Math.floor(Math.random() * occupations.length)]
    const price = startingPrices[Math.floor(Math.random() * startingPrices.length)]
    freelancers.push({name, occupation, price});
    render();

    const average = calculateAveragePrice();
    if (avgPrices){
        avgPrices.innerText = `The average starting price is $${average}`
    }

    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerInterval);
    };
};