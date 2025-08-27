import ExpandForm from "./ExpandForm"
import type {Experience} from "../../src/data";

interface FormData {
  id: string;
  [key: string]: string; 
}

interface DisplayFormProps {
  forms: FormData[];
  titleKey: string;
  arrayName: string;
  toggleCollapsed: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;  
  // FormComponent: 
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
            cancel={onCancel}
            save={toggleCollapsed}
          />
        ) 
      )}
    </div>
  )
}

export default DisplayForm;
