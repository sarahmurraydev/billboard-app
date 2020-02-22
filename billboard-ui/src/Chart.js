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
                    chart: response
                })
            })
            .catch(err => {
                console.log("there was a problem!", err)
            })
    }

    render(){
        return <div style={{width: '50%'}}>
            <button onClick={this.getChartData}>Click here to get the chart!</button>
            {!!this.state.chart && <ol>
                {this.state.chart.data.entries.map((entry, i) => {
                    return <li key={`${this.state.chart.data.date}-#${i}`}>{entry.artist} - {entry.title}</li>
                })}
            </ol>}
        </div>
    }
}

export default Chart