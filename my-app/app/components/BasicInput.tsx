import React from 'react'
import { Input } from '@heroui/input'

interface Info {
    id: string
    type: string
    labelText: string
}
const BasicInput = ({ id, type, labelText,// onChange, value
}: Info) => {
    return (
        <div>
            <Input
                className="mt-[10px]" 
                id={id}
                type={type}
                label={labelText}
            />
        </div>
    )
}

export default BasicInput
