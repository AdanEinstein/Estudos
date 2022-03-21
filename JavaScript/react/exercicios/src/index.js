import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
// // import BoaTarde, { BoaNoite } from './components/Multiplos'
// import Multi from './components/Multiplos'
//JSX

// ReactDOM.render(<BomDia nome="Guilherme" idade={10}/>, document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         {/* <BoaTarde nome="Adan"/> */}
//         <Multi.BoaTarde nome="Adan"/>
//         {/* <BoaNoite nome="Einstein"/> */}
//         <Multi.BoaNoite nome="Einstein"/>
//     </div>
//     , document.getElementById('root'))

// import Saudacao from './components/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo='Bom dia' nome='Adan'/>
//     </div>
// , document.getElementById('root'))

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <Pai nome='Paulo' sobrenome='Silva'>
        {/* Como passo os componentes Filhos aqui? */}
        <Filho nome="Pedro"/>
        <Filho nome="Paulo" sobrenome='Silva'/>
        <Filho nome="Carla" sobrenome='Silva'/>
    </Pai>
, document.getElementById('root'))