import { FaChevronDown } from "react-icons/fa";

const Accordion = ({
  sectionName,
  setOpen,
  icon,
  isCollapsed
}) => {
  return (
    <button onClick={() => setOpen(isCollapsed ? "" : sectionName)} className={`w-full bg-white px-3 py-2 cursor-pointer rounded-md`}>
       <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {icon} 
            {sectionName} 
          </div>
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : "rotate-0"
          }`}
        />
        </div>      
    </button>
  )
}

export default Accordion;
