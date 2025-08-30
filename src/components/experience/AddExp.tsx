import Accordion from '../../components/Accordion'
import CollapsedForm from '../CollapsedForm'
import ExpForm from './ExpForm'
import { BsBriefcaseFill } from "react-icons/bs";

const AddExp = ({
  setOpen,
  isCollapsed,
  experiences,
  toggle,
}) => {
  return (
    <div>
      <Accordion 
        sectionName="Experience"
        setOpen={setOpen}
        isCollapsed={isCollapsed}
        icon={<BsBriefcaseFill/>}
      />

      <CollapsedForm
        forms={experiences}
        formTitle="company"
        FormComponent={ExpForm}
        toggle={toggle}
        arrayName="experiences"
      />

    </div>
  )
}

export default AddExp;
