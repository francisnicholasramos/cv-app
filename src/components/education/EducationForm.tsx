import InputGroup from "../InputGroup";
import GroupButton from "../GroupButton";

const EducationForm = (props) => {
  const {id, degree, school, startDate, endDate} = props.properties;
  const {onChange, cancel, done, remove} = props;
  return (
    <div id={id} data-array-name="educations" className="section-form bg-white p-2">
      <InputGroup
        onChange={(e) => onChange(e, id)}
        value={school}
        id="school"
        name="school"
        label="College school"
        placeholder="University/College school name"
      />
      <InputGroup
        onChange={(e) => onChange(e, id)}
        value={degree}
        id="degree"
        name="degree"
        label="Degree"
        placeholder="College degree"
      />
      <div className="flex gap-2">
        <InputGroup
          onChange={(e) => onChange(e, id)}
          value={startDate}
          id="start"
          name="start"
          label="Start date"
          placeholder="Sept 2021"
        />
        <InputGroup
          onChange={(e) => onChange(e, id)}
          value={endDate}
          id="end"
          name="end"
          label="End date"
          placeholder="Aug 2025"
        />
      </div>
      <GroupButton done={done} cancel={cancel} remove={remove} />
    </div>
  )
}

export default EducationForm;
