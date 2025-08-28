import InputGroup from "../InputGroup";
import GroupButton from "../GroupButton";

type ExperienceFormData = {
  id: string;
  company: string;
  position: string;
  location: string;
}

type ExperienceFormProps = {
  form: ExperienceFormData;
  cancel: () => void;
  done: () => void;
  remove: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;  
};


const ExperienceForm: React.FC<ExperienceFormProps> = (props) => {
  const { id, company, position, location } = props.form;
  const { onChange, cancel, done, remove } = props;
  return (
      <div id={id} data-array-name="experiences" className='section-form bg-white p-2'>
        <InputGroup 
          value={company}
          onChange={onChange}
          id="company"
          label="Company Name"
          placeholder="Enter the company name"
        />
        <InputGroup 
          value={position}
          onChange={onChange}
          id="position"
          label="Position/Role"
          placeholder="Enter the position/role"
        />
        <InputGroup 
          value={location}
          onChange={onChange}
          id="location"
          label="Location"
          placeholder="Enter location"
          optional
        />
        <InputGroup 
          id="desc"
          onChange={onChange}
          type="textarea"
          label="Description"
          placeholder="Description"
          optional
        />

        <GroupButton done={done} cancel={cancel} remove={remove}/>

      </div>
  )
}

export default ExperienceForm;
