import React from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:5000';

class Chart extends React.Component {

    state = {
        chart: null
    }

    getChartData = () => {
        axios.get(`${API_URL}/give-me-charts/2019-07-20`)
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
            <button onClick={this.getChartData}>Click here to get the data!</button>
            {!!chartData && <div>
                <h3>Now Viewing the Billboard {chartData.name.toUpperCase()} for the week of {chartData.date}</h3>
                <ol>
                    {chartData.entries.map((entry, i) => {
                        return <li key={`${chartData.date}-#${i}`}>{entry.artist} - {entry.title}</li>
                    })}
            </ol>}
        </div>
    }
}

export default Chart