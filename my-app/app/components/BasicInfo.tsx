import React from 'react'
import BasicInput from './BasicInput'
import '../../assets/styles/basicInfo.scss'

const BasicInfo = () => {
    return (
        <>
        <div className="container">
            <BasicInput id="full-name" labelText="Full Name" type="text" />
            <BasicInput id="email" labelText="Email" type="email" />
            <BasicInput id="github" labelText="Github" type='email'/>
            <BasicInput id="linkedin" labelText="Phone number" type="number" />
        </div>
        </>
        
    )
}

export default BasicInfo