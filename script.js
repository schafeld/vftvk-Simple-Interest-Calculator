function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);

    // The quiz' test case prints the interest instead of the total amount,
    // see below. I would have used this value instead. 
    // var amount = parseFloat(principal) + parseFloat(interest);

    // Return an error message and stop script execution if user forgot to enter principal amount.
    if (principal <= 0) {
        alert("Enter a positive number");
        return false;
    }

    document.getElementById("result").innerHTML = `
        If you deposit <b>$ ${principal}</b><br />
        at an interest rate of <b>${rate}%</b><br />
        you will receive an amount of <b>$ ${interest}</b><br />
        in the year <b>${year}</b>.
    `;

    document.getElementById("principal").focus();
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}