import React from 'react'
import style from './Finance.module.css'

const Finance = () => {
    return (
        <>
            <div className={style.container}>
                <section className={style.entry}>
                    <h2>Entradas</h2>
                    <input type="text" placeholder='Entrada' />
                    <input type="number" placeholder='Valor' />
                    <button>Adicionar</button>
                    {/* <button>Remover</button>
                    <button>Editar</button> */}
                </section>
                <section className={style.output}>
                    <h2>Saídas</h2>
                    <input type="text" placeholder='Saída' />
                    <input type="number" placeholder='Valor' />
                    <button>Adicionar</button>
                    {/* <button>Remover</button>
                    <button>Editar</button> */}
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