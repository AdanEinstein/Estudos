import { useState } from "react"
import Layout from "../components/Layout"
export default function Estado(){
    const [numero, setNumero] = useState(0) // React Hooks

    function incrementar(){
        setNumero(numero + 1)
    }
    return (
        <Layout titulo="Componente com Estado">
            <div style={{
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: 'coral',
                fontSize: '2rem',
                color: 'black'
            }}>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}