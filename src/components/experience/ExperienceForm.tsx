import InputGroup from "../InputGroup";
import Button from "../Button";
import GroupButton from "../GroupButton";
import type {Experience} from "../../../src/data"

interface ExpForm {
  form: Experience;  
}

const ExperienceForm: React.FC<ExpForm> = ({form}) => {

  const { cancel, done, remove } = form;
  return (
      <div className='bg-white p-2'>
        <InputGroup 
          value={form.company}
          id="company"
          label="Company Name"
          placeholder="Enter the company name"
        />
        <InputGroup 
          value={form.position}
          id="position"
          label="Position/Role"
          placeholder="Enter the position/role"
        />
        <InputGroup 
          value={form.location}
          id="location"
          label="Location"
          placeholder="Enter location"
          optional
        />
        <InputGroup 
          id="desc"
          type="textarea"
          label="Description"
          placeholder="Description"
          optional
        />

        <GroupButton done={done} cancel={cancel} del={remove}/>

      </div>
  )
}

export default ExperienceForm;
