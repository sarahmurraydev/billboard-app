import React from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:5000';

class Chart extends React.Component {

    state = {
        chart: null,
        date: null, 
        type: null
    }

    handleInputChange = (inputName) => event => {
        event.preventDefault()

        let newState = {};
        newState[inputName] = event.target.value;
        this.setState(newState)
    }

    onClick = () => event => {
        event.preventDefault()
        let chartType = this.state.type;
        let chartDate = this.state.date;

        this.getChartData(chartType, chartDate);
    }

    getChartData = (type, date) => {
        axios.get(`${API_URL}/give-me-charts/${type}/${date}`)
            .then(response => {
                console.log("got a response!", response)
                this.setState({
                    chart: response.data
                })
            })
            .catch(err => {
                console.log("there was a problem!", err)
            })
    }

    render(){
        let chartData = this.state.chart
        return <div style={{width: '75%'}} className="chart-data">
            <input type='input' onChange={this.handleInputChange('type')}></input>
            <input type='input' onChange={this.handleInputChange('date')}></input>
            <button onClick={this.onClick()}>Click here to get the data!</button>
            {!!chartData && <div>
                <h3>Now Viewing the Billboard {chartData.name.toUpperCase()} for the week of {chartData.date}</h3>
                <ol>
                    {chartData.entries.map((entry, i) => {
                        return <li key={`${chartData.date}-#${i}`}>{entry.artist} - {entry.title}</li>
                    })}
                </ol>
            </div>}
        </div>
    }
}

export default Chart