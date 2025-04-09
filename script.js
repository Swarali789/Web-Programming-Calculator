function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case '*':
            result = num1 * num2;
            break;

        case '/':
            // Handle division by zero error
            if (num2 === 0) {
                document.getElementById('result').innerText = "Error: Division by zero!";
                return;
            } else {
                result = num1 / num2;
            }
            break;

        default:
            document.getElementById('result').innerText = "Invalid operation!";
            return;
    }

    // Display the result dynamically on the webpage
    document.getElementById('result').innerText = result;
}
