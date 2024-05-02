import React, { useEffect, useState } from 'react'
import style from './Finance.module.css'

const Finance = () => {
    const [textEntry, setTextEntry] = useState('')
    const [textOutput, setTextOutput] = useState('')

    const [countEntry, setCountEntry] = useState(0)
    const [countOutput, setCountOutput] = useState(0)

    const [addTaskEntry, setAddTaskEntry] = useState('')
    const [addTaskOutput, setAddTaskOutput] = useState('')

    const [showEntry, setShowEntry] = useState(false)
    const [showOutput, setShowOutput] = useState(false)

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

    const generateEntry = () => {
        const addTaskEntry = `${textEntry} ${countEntry}`
        setAddTaskEntry(addTaskEntry)

        setShowEntry(true)
    }

    const generateOutput = () => {
        const addTaskOutput = `${textOutput} ${countOutput}`
        setAddTaskOutput(addTaskOutput)

        setShowOutput(true)
    }

    return (
        <>
            <div className={style.container}>
                <section className={style.entry}>
                    <h2>Entradas</h2>
                    <input
                        type="text"
                        placeholder='Entrada'
                        onChange={taskEntry}
                        value={textEntry}
                    />
                    <input
                        type="number"
                        placeholder='Valor'
                        onChange={counterEntry}
                        value={countEntry}
                    />
                    <button onClick={generateEntry}>Adicionar</button>
                    {showEntry &&
                        (
                            <div className={style.task}>
                                <span>{addTaskEntry}</span>
                                <button>Editar</button>
                                <button>X</button>
                            </div>
                        )
                    }
                </section>
                <section className={style.output}>
                    <h2>Saídas</h2>
                    <input
                        type="text"
                        placeholder='Saída'
                        onChange={taskOutput}
                        value={textOutput}
                    />
                    <input
                        type="number"
                        placeholder='Valor'
                        onChange={counterOutput}
                        value={countOutput}
                    />
                    <button onClick={generateOutput}>Adicionar</button>
                    {showOutput &&
                        (
                            <div className={style.task}>
                                <span>{addTaskOutput}</span>
                                <button>Editar</button>
                                <button>X</button>
                            </div>
                        )

                    }
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