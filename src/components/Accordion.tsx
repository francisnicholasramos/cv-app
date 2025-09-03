import { FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  isOpen: boolean;
  setOpen: (name: string) => void;
  sectionName: string;
  icon: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({isOpen, setOpen, sectionName, icon}) => {
  return (
    <button
      className={`w-full rounded-md bg-white p-3 cursor-pointer ${isOpen ? 'rounded-b-none' : 'rounded-b-md'}`}
      onClick={() => setOpen(isOpen ? "" : sectionName)}    
    >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {icon} 
            {sectionName} 
          </div>
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
        </div>
    </button>
  )
}

export default Accordion;
