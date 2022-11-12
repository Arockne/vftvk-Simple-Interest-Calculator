function compute() {
    const principal = document.getElementById("principal").value;

    if (principal <= 0) {
        alert('Enter a positive number')
        document.getElementById("principal").focus()
        return
    }

    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = calculateInterest(principal, years, rate)
    const year = calculateYear(years)
    
    const result = document.getElementById("result")
    result.innerHTML = calculatedResults(principal, rate, interest, year)
}

function updateRate(rate) {
    document.getElementById("rate_val").innerText = `${rate.value}%`;
}

function calculatedResults(principal, rate, interest, year) {
    return `If you deposit <mark>${principal}</mark>,<br/>at an interest rate of <mark>${rate}</mark>.<br/>You will receive an amount of <mark>${interest}</mark>,<br/>in the year <mark>${year}</mark><br/><br/>`
}

const calculateInterest = (principal, years, rate) => principal * years * rate / 100;

const calculateYear = (years) => new Date().getFullYear() + parseInt(years);