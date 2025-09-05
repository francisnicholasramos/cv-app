import ExpandForm from "./ExpandForm"
import ExperienceForm from "../components/experience/ExperienceForm";
import EducationForm from "../components/education/EducationForm";
import type {Education, Experience} from "../../src/data";

type FormData = Education | Experience;

type TitleKey = "degree" | "school" | "company" | "position";

interface DisplayFormProps {
    forms: FormData[];
    titleKey: TitleKey;
    arrayName: string;
    onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
    toggleCollapsed: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;  
    // FormComponent: React.FC<ExperienceFormProps | EducationFormProps>;
}

const getTitle = (form: FormData, key: TitleKey): string => {
    // If the form is Education
    if ("degree" in form && "school" in form) {
        if (key === "degree" || key === "school") {
            return form[key]; 
        }
    }
    // If the form is Experience
    if ("company" in form && "position" in form) {
        if (key === "company" || key === "position") {
            return form[key]; 
        }
    }
    return ""; // fallback
};

const DisplayForm: React.FC<DisplayFormProps> = ({
    forms,
    onChange,
    titleKey, 
    arrayName,
    onCancel,
    onRemove,
    toggleCollapsed,

    // FormComponent

}) => {
    return (
        <div> 
            {forms.map((form) => {
                if (form.isCollapsed) {
                    return (
                        <ExpandForm
                            key={form.id}
                            title={getTitle(form, titleKey)}
                            arrayName={arrayName}
                            onClick={toggleCollapsed}
                            form={form}
                        />
                    );
                }

                // Type narrowing
                if ("degree" in form && "school" in form) {
                    return (
                        <EducationForm
                            key={form.id}
                            properties={form} // TypeScript knows this is Education
                            onChange={onChange}
                            cancel={onCancel}
                            done={toggleCollapsed}
                            remove={onRemove}
                        />
                    );
                }

                if ("company" in form && "position" in form) {
                    return (
                        <ExperienceForm
                            key={form.id}
                            properties={form} // TypeScript knows this is Experience
                            onChange={onChange}
                            cancel={onCancel}
                            done={toggleCollapsed}
                            remove={onRemove}
                        />
                    );
                }

                return null;
            })}
        </div>
    )
}

export default DisplayForm;
