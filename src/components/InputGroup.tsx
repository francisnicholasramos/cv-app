interface InputGroupProps {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  maxLength?: number;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  value?: string;
  optional?: boolean;
}

const InputGroup: React.FC<InputGroupProps> = ({
  id, 
  name,
  placeholder,
  type = 'text',
  maxLength,
  label,
  onChange,
  value, 
  optional,
}) => {
  return (
    <div className="flex flex-col gap-1.5"> 
      <label htmlFor={id}>
        <span>{label}</span>
        {optional && <span className="text-gray-500 text-xs ml-1.5">optional</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          className="bg-[#F3F4F6] min-h-15 max-h-40 text-[13px] mb-1.5 rounded-lg outline-none focus:shadow-md focus:shadow-blue-200/100 focus:border-2 border-blue-500 py-2 px-2"
          placeholder={placeholder} 
          onChange={onChange}
          value={value}
        ></textarea>
      ) : (
          <input 
            id={id}
            name={name}
            className="bg-[#F3F4F6] text-[13px] mb-1.5 rounded-lg outline-none focus:shadow-md focus:shadow-blue-200/100 focus:border-2 border-blue-500 py-2 px-2"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            maxLength={maxLength}
          />
      )}
    </div>
  )
}

export default InputGroup
