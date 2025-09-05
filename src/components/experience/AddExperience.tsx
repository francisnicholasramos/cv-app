import Accordion from "../Accordion"
import DisplayForm from "../DisplayForm"
import Button from "../Button"
import type {Experience} from "../../../src/data"
import { BsBriefcaseFill } from "react-icons/bs"
import { MdOutlineAddCircleOutline } from "react-icons/md"

interface AddExperienceProps {
  isOpen: boolean;
  createForm: (e: React.MouseEvent) => void;
  setOpen: (sectionName: string) => void;
  experiences: Experience[];
  toggleCollapsed: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddExperience: React.FC<AddExperienceProps> = ({
  isOpen,
  createForm,
  setOpen, 
  experiences,
  onChange,
  onCancel,
  toggleCollapsed,
  // onHide,
  onRemove
}) => {

  return (
    <div>
      <Accordion
        isOpen={isOpen} 
        setOpen={setOpen} 
        sectionName="Experience"
        icon={<BsBriefcaseFill/>}
      />

        <div
          className={`flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? 'max-h-screen' 
              : 'max-h-0'
          }`}   
        >
          <DisplayForm 
            forms={experiences}
            toggleCollapsed={toggleCollapsed}
            titleKey="company"
            arrayName="experiences"
            onCancel={onCancel}
            onChange={onChange}
            onRemove={onRemove}
          />


          <div className="flex p-2 bg-white rounded-b-lg justify-center w-full">
            <Button
              className="flex p-2 items-center"
              icon={<MdOutlineAddCircleOutline/>}
              text="Add Experience"
              variant="add"
              onClick={createForm}
            />
          </div>  
        </div>
    </div>
  )
}

export default AddExperience
