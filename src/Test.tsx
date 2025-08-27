import {useState} from 'react';
import InputGroup from "../src/components/InputGroup"
import Button from "../src/components/Button"
import data from "../src/data"

export default function Test() {
  const [loadData, setLoadData] = useState(data.personalDetails)
  return (
    <div className="flex flex-col m-auto p-5 bg-white w-[800px] ">
      <InputGroup 
        id="input"
        label="Test"
        placeholder="Input here"
        value={loadData.fullName}
      />
      <InputGroup 
        id="email"
        label="Email"
        placeholder="Input here"
        value={loadData.email}
      />
      <InputGroup 
        id="phone"
        label="Phonenumber"
        placeholder="Input here"
        value={loadData.phoneNumber}
      />
      <Button 
        text="Click"
        variant="save"
      />
    </div>
  )
}

