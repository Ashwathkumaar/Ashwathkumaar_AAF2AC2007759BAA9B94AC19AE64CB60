document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/transactions")
        .then(response => response.json())
        .then(data => {
            const transactionList = document.getElementById("transaction-list");
            data.forEach(transaction => {
                const li = document.createElement("li");
                li.textContent = `Transaction ID: ${transaction.id}, Amount: ${transaction.amount}, Status: ${transaction.status}`;
                transactionList.appendChild(li);
            });
        });

    fetch("/api/metrics")
        .then(response => response.json())
        .then(data => {
            document.getElementById("loan-performance").textContent = `Loan Performance: ${data.loan_performance}%`;
            document.getElementById("deposit-growth").textContent = `Deposit Growth: ${data.deposit_growth}%`;
            document.getElementById("customer-acquisition").textContent = `Customer Acquisition: ${data.customer_acquisition}`;
        });

    fetch("/api/compliance")
        .then(response => response.json())
        .then(data => {
            const status = `Compliance Status: ${data.current_value} / ${data.threshold}`;
            document.getElementById("compliance-status").textContent = status;
        });
});
