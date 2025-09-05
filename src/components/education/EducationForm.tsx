import InputGroup from "../InputGroup";
import GroupButton from "../GroupButton";
import type {Education} from "../../../src/data"

export type EducationFormProps = {
    properties: Education;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => void;
    cancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
    done: (e: React.MouseEvent<HTMLButtonElement>) => void;
    remove: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const EducationForm: React.FC<EducationFormProps> = (props) => {
    const {id, degree, school, location, startDate, endDate} = props.properties;
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
            <InputGroup
                onChange={(e) => onChange(e, id)}
                value={location}
                id="location"
                name="location"
                label="Location"
                placeholder="Enter location"
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
