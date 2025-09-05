import InputGroup from "../InputGroup";
import GroupButton from "../GroupButton";

type ExperienceFormData = {
    id: string;
    company: string;
    position: string;
    location: string;
    description: string;
}

export type ExperienceFormProps = {
    properties: ExperienceFormData;
    cancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
    done: (e: React.MouseEvent<HTMLButtonElement>) => void;
    remove: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => void;  
};


const ExperienceForm: React.FC<ExperienceFormProps> = (props) => {
    const { id, company, position, location, description } = props.properties;
    const { onChange, cancel, done, remove } = props;
    return (
        <div id={id} data-array-name="experiences" className='section-form bg-white p-2'>
            <InputGroup 
                value={company}
                onChange={(e) => onChange(e, id)}
                id="company"
                name="company"
                label="Company Name"
                placeholder="Enter the company name"
            />
            <InputGroup 
                value={position}
                onChange={(e) => onChange(e, id)}
                id="position"
                name="position"
                label="Position/Role"
                placeholder="Enter the position/role"
            />
            <InputGroup 
                value={location}
                onChange={(e) => onChange(e, id)}
                id="location"
                name="location"
                label="Location"
                placeholder="Enter location"
                optional
            />
            <InputGroup 
                value={description}
                id="desc"
                name="description"
                onChange={(e) => onChange(e, id)}
                type="textarea"
                label="Description"
                placeholder="Short description of your job"
                optional
            />

            <GroupButton done={done} cancel={cancel} remove={remove}/>

        </div>
    )
}

export default ExperienceForm;
