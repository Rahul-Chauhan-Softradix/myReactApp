import React, { useState } from 'react'
import Select from 'react-select'
import '../App.css'

function Dropdown() {
    const [value,setValue] = useState()
    const options = [
        {value:"CHOCOLATE",label:"chocolate"},
        {value:"CANDY",label:"candy"},
        {value:"BERRY",label:"berry"},
        {value:"BURGER",label:"burger"},
        {value:"ICE CREAM",label:"ice cream"}
    ]
    const selectDropDown = (event)=>{
        setValue(event.value)
    }
  return (
    <div>
        <Select className='Dropdown' options={options} defaultValue={value} onChange={selectDropDown} placeholder = "Select your snack"/>

    </div>
  )
}

export default Dropdown;