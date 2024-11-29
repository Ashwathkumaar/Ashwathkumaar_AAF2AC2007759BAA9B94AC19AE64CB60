from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# Simulated data
data = {
    "transactions": [{"id": 1, "amount": 100, "status": "flagged"}, {"id": 2, "amount": 200, "status": "normal"}],
    "metrics": {"loan_performance": 85, "deposit_growth": 10, "customer_acquisition": 20},
    "compliance": {"threshold": 90, "current_value": 80},
}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/transactions")
def get_transactions():
    return jsonify(data["transactions"])

@app.route("/api/metrics")
def get_metrics():
    return jsonify(data["metrics"])

@app.route("/api/compliance")
def get_compliance():
    return jsonify(data["compliance"])

if __name__ == "__main__":
    app.run(debug=True)
