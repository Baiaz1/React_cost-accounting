import React, { useState } from 'react'
import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import CostsList from './CostsList'
import CostsDiagram from './CostsDiagram'

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2023')

    const changeYearHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredCost = props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear)

    return (
        <div>
            <Card className='costs'>
                <CostsFilter onChangeYear={changeYearHandler} year={selectedYear}/>
                {/* {filteredCost.length === 0 && <p>В этом году нет расходов</p>}
                {filteredCost.length > 0 && filteredCost.map(cost => <CostItem date={cost.date} description={cost.description} amount={cost.amount} key={cost.id}/>)} */}
                <CostsDiagram costs={filteredCost}/>
                <CostsList costs={filteredCost}/>
            </Card>
        </div>  
    )
}

export default Costs