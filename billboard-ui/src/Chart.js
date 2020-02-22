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
            })
            .catch(err => {
                console.log("there was a problem!", err)
            })
    }

    render(){
        return <button onClick={this.getChartData}>yeaaaaaaah buddy</button>
    }
}

export default Chart