import React from 'react'
import DiagramBar from './DiagramBar'
import './Diagram.css'

function Diagram(props) {

    const dataSetsValue = props.dataSets.map(dataSet => dataSet.value)
    const maxMonthCosts = Math.max(...dataSetsValue)

    return ( 
        <div className='diagram'>
            {props.dataSets.map((dataSet) => <DiagramBar value={dataSet.value} maxValue={maxMonthCosts} label={dataSet.label} key={dataSet.label}/>)}
        </div>
    )
}

export default Diagram