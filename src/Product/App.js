import React from 'react'
import Table from './table'

export default function App() {

    return (
        <>
         <div className='container mw-100 '>
            <div className='row'>
                <div className="col-md-1.5 bg-primary float-left">
                    <ul>
                        <li>
                            <i className="fas fa-briefcase-medical"> Medicos </i>
                        </li>
                        <li>
                            <i  className="fas fa-sign-out-alt"> Sign Out </i>
                        </li>                    
                    </ul>
                    
                </div>
                <div className="col-md-10">
                    <Table/>
                </div>
            </div>

        </div>
        </>
    )
}