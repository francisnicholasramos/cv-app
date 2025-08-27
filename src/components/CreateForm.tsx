interface CreateFormProps {
  text: string;
  icon: React.ReactNode; 
  onClick: () => void; 
}

const CreateForm: React.FC<CreateFormProps> = ({onClick, icon, text}) => {
  return (
    <button onClick={onClick} className="">
      {icon} {text}
    </button>
  )
}

export default CreateForm;
