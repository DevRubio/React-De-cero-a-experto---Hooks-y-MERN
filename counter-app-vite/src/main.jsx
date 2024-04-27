import React from 'react'
import ReactDOM from "react-dom/client"
import {FirstApp} from './HelloWordApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Hola' subtitle={123}/>
    </React.StrictMode>
)