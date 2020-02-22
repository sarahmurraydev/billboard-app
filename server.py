from flask import Flask 
from flask import jsonify
import billboard

app = Flask( __name__ )

@app.route('/')
def home():
    return "Hello World!"

@app.route('/give-me-charts/<date>')
def charts(date):
    chart = billboard.ChartData('hot-100', date)
    return chart.json()


if __name__ == '__main__': 
    app.run( debug=True )