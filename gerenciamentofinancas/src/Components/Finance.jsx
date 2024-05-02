import React, { useEffect, useState } from 'react'
import style from './Finance.module.css'

// provavelmente vou ter que ou criar mais Finance no app para arrumar lá ou separar e criar varios seletores

const Finance = () => {
    const [textEntry, setTextEntry] = useState('')
    const [textOutput, setTextOutput] = useState('')

    const [countEntry, setCountEntry] = useState(0)
    const [countOutput, setCountOutput] = useState(0)

    const [addtask, setAddTask] = useState('')

    const taskEntry = (e) => {
        const textEntry = e.target.value
        setTextEntry(textEntry)
    }

    const taskOutput = (e) => {
        const textOutput = e.target.value
        setTextOutput(textOutput)
    }

    const counterEntry = (e) => {
        const countEntry = e.target.value
        setCountEntry(countEntry)
    }

    const counterOutput = (e) => {
        const countOutput = e.target.value
        setCountOutput(countOutput)
    }

    const generate = () => {

    }

    return (
        <>
            <div className={style.container}>
                <section className={style.entry}>
                    <h2>Entradas</h2>
                    <input type="text" placeholder='Entrada' onChange={taskEntry} value={textEntry} />
                    <input type="number" placeholder='Valor' onChange={counterEntry} value={countEntry} />
                    <button onClick={generate}>Adicionar</button>
                    <span>{addtask}</span>
                </section>
                <section className={style.output}>
                    <h2>Saídas</h2>
                    <input type="text" placeholder='Saída' onChange={taskOutput} value={textOutput} />
                    <input type="number" placeholder='Valor' onChange={counterOutput} value={countOutput} />
                    <button>Adicionar</button>
                    <span>{addtask}</span>
                </section>
            </div>
            <section className={style.total}>
                <h2>Meu Saldo</h2>
                <p></p>
            </section>
        </>
    )
}

export default Finance