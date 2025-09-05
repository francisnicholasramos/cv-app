import Accordion from "../Accordion"
import DisplayForm from "../DisplayForm"
import EducationForm from "./EducationForm"
import Button from "../Button"
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineAddCircleOutline } from "react-icons/md"
import type { Education } from "../../../src/data"

type AddEducationProps = {
    setOpen: (e: string) => void;
    isOpen: boolean;
    educations: Education[];
    createForm: (e: React.MouseEvent) => void;
    toggleCollapsed: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string) => void;
    onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddEducation: React.FC<AddEducationProps> = ({
  setOpen,
  isOpen,
  educations,
  createForm,
  toggleCollapsed,
  onChange,
  onRemove,
  onCancel
}) => {
  return (
    <div>
      <Accordion 
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        icon={<FaGraduationCap/>}
      />

      <div
        className={`flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen 
            ? 'max-h-screen'
            : 'max-h-0'
        }`}
      >
        <DisplayForm
          forms={educations}
          toggleCollapsed={toggleCollapsed}
          FormComponent={EducationForm}
          titleKey="school"
          arrayName="educations"
          onCancel={onCancel}
          onChange={onChange}
          onRemove={onRemove}
        />

        <div className="flex p-2 bg-white rounded-b-lg justify-center w-full">
          <Button
            className="flex p-2 items-center"
            icon={<MdOutlineAddCircleOutline/>}
            text="Add Education"
            variant="add"
            onClick={createForm}
          />
        </div>

      </div>
    </div>
  )
}

export default AddEducation
