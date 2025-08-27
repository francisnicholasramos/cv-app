import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
  title: string;
  arrayName: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isVisible: boolean;
  form: Form;
}

interface Form {
  id: number | string;
}

const ExpandForm: React.FC<Props> = ({
  title,
  arrayName,
  onClick,
  isVisible,
  form
}) => {
  
  const {id} = form;

  return (
    <div className='my-3'>
      <button 
        id={String(id)}
        onClick={onClick}
        data-array-name={arrayName}
        className="section-form w-full rounded-md bg-white p-3 cursor-pointer"
      >
        <span className="flex items-center justify-between cursor-pointer">
          {title} 
          { isVisible ? <AiOutlineEye/> : <AiOutlineEyeInvisible/> }
        </span>
      </button>
    </div>
  )
}

export default ExpandForm
