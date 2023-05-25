import React, { useState } from 'react'
import './CostForm.css'

function CostForm(props) {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (e) => {
        setInputName(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setInputDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }

        props.onSaveCostData(costData)

        setInputName('')
        setInputAmount('')
        setInputDate('')
    }

    return (
                <form onSubmit={submitHandler}>
                    <div className='new-cost__controls'>
                        <div className='new-cost__control'>
                            <label>Название</label>
                            <input type='text' onChange={nameChangeHandler} value={inputName}/>
                        </div>
                        <div className='new-cost__control'>
                            <label>Сумма</label>
                            <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={inputAmount}/>
                        </div>
                        <div className='new-cost__control'>
                            <label>Дата</label>
                            <input type='date' min='2019-01-01' max='2023-04-19' onChange={dateChangeHandler} value={inputDate}/>
                        </div>
                        <div className='new-cost__actions'>
                            <button type='submit'>Добавить расход</button>
                            <button type='button' onClick={props.onCancel}>Отмена</button>
                        </div>
                    </div>
                </form> 

    )
}

export default CostForm