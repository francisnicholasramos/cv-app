import Accordion from "../Accordion"
import DisplayForm from "../DisplayForm"
import ExperienceForm from "./ExperienceForm"
import Button from "../Button"
import type {Experience} from "../../../src/data"
import { BsBriefcaseFill } from "react-icons/bs"
import { MdOutlineAddCircleOutline } from "react-icons/md"

interface AddExperienceProps {
  isOpen: boolean;
  setOpen: (sectionName: string) => void;
  experiences: Experience;
  toggleCollapsed: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddExperience: React.FC<AddExperienceProps> = ({
  isOpen,
  // createForm,
  setOpen, 
  experiences,
  // onChange,
  // onCancel,
  toggleCollapsed,
  // onHide,
  // onRemove
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
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          }`}   
        >
          <DisplayForm 
            forms={experiences}
            toggleCollapsed={toggleCollapsed}
            FormComponent={ExperienceForm}
            titleKey="company"
            arrayName="experiences"
          />


          <div className="flex p-2 bg-white rounded-b-lg justify-center w-full">
            <Button
              className="flex p-2 items-center"
              icon={<MdOutlineAddCircleOutline/>}
              text="Add Experience"
              variant="add"
            />
          </div>
        </div>
    </div>
  )
}

export default AddExperience
