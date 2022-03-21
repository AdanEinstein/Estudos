import Navegador from "../components/Navegador"

export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" />
            <Navegador destino="/exemplo" texto="Exemplo" cor="rgb(135, 16, 240)" />
            <Navegador destino="/jsx" texto="JSX" cor="rgb(240, 16, 57)" />
            <Navegador destino="./navegacao" texto="Navegação #01" cor="green" />
            <Navegador destino="./cliente/sp-2/123" texto="Navegação #02" />
            <Navegador destino="./estado" texto="Componente com Estado" cor="coral" />
            <Navegador destino="./integracao_1" texto="Integração com API #01" cor="#FA2A1A" />
            <Navegador destino="./estatico" texto="Conteúdo Estático" cor="#DEDC33" />
        </div>
    )
}