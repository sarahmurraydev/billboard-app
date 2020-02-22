from flask import Flask 
from flask import jsonify
import billboard

app = Flask( __name__ )

@app.route('/')
def home():
    return "Hello World!"

@app.route('/give-me-charts/<name>/<date>')
def charts(name, date):
    # add data validation on name and date
    chart = billboard.ChartData(name, date)
    return chart.json()


if __name__ == '__main__': 
    app.run( debug=True )