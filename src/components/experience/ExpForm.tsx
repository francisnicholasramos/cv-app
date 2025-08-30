import InputGroup from '../InputGroup' 
import GroupButtons from '../GroupButtons'

const ExpForm = (props) => {
  const { id, company, position, location } = props.form;
  const { onChange, cancel, done, remove } = props;
  return (
    <form id={id} data-array-name="experiences" className="section-form bg-white p-2"> 
      <InputGroup 
        id="name"
        label="Company"
        value={company}
        placeholder="Name of the company"
        type="text"
      />
      <InputGroup 
        id="position"
        label="Position title"
        value={position}
        placeholder="Position/Role"
        type="text"
      />
      <InputGroup 
        id="loc"
        label="Location"
        value={location}
        placeholder="Enter location"
        type="text"
      />
      <InputGroup 
        id="job"
        label="Job responsibility"
        placeholder="Description of your job task"
        type="textarea"
      />

      <GroupButtons save={done} cancel={cancel} remove={remove} />
    </form>
  )
}

export default ExpForm;
