import ExpandForm from "./ExpandForm"
import type {ExperienceFormProps} from "../components/experience/ExperienceForm";

interface FormData {
  id: string;
  [key: string]: string;
  company: string;
  position: string;
  location: string;
}

interface DisplayFormProps {
  forms: FormData[];
  titleKey: string;
  arrayName: string;
  onCancel: (e: React.MouseEventHandler) => void;
  toggleCollapsed: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;  
  FormComponent: ExperienceFormProps 
}

const DisplayForm: React.FC<DisplayFormProps> = ({
  forms,
  onChange,
  titleKey, 
  arrayName,
  onCancel,
  toggleCollapsed,

  FormComponent

}) => {
  return (
    <div> 
      {forms.map((form) => 
        form.isCollapsed ? (
          <ExpandForm 
            key={form.id}
            title={form[titleKey]}
            arrayName={arrayName}
            onClick={toggleCollapsed}
            form={form}
          />
        ) : (
          <FormComponent 
            key={form.id}
            form={form}
            onChange={onChange}
            cancel={onCancel}
            done={toggleCollapsed}
          />
        ) 
      )}
    </div>
  )
}

export default DisplayForm;
