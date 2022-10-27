import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFactorial(n - 1) * 2
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1) 
    const [fatorial, setFatorial] = useState(1)

    useEffect(function() {
        setFatorial(calcFactorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = "Eita!!!"
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'não existe' : fatorial}</span>
                </div>
                <input type="number" className="input" 
                    value={number} 
                    onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #01"/>
        </div>
    )
}

export default UseEffect
