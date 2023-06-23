import React from 'react'
import '../App.css'

function Contacts(props) {
    return (
        <div>Contacts
            <div className='contacts'>
                {console.log(props.info)}
                {props.info.name} 
            </div>
        </div>
    )
}

export default Contacts