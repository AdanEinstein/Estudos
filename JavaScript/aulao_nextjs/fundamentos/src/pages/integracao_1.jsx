import { useState } from 'react'
import Layout from '../components/Layout'
export default function Integracao(props) {

    const [cliente, setCliente] = useState({})
    const [codigo, setCodigo] = useState(1)


    function obterCliente() {
        return fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    }

    return (
        <Layout titulo="Integração da API com FrontEnd">
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>E-mail: {cliente.email}</li>
            </ul>
        </Layout>
    )
}