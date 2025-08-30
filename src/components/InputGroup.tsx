interface InputGroupProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  placeholder: string;
  type?: string;
  optional?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default function InputGroup ({
  id,
  name,
  label,
  value,
  placeholder,
  onChange,
  type,
  optional
}: InputGroupProps) {
  return (
    <div className="flex flex-col gap-1.5">
     <label htmlFor={id}>
       <span>{label}</span>
       {optional && <span className="bg-red text-gray-500 text-xs ml-1.5">optional</span>}
     </label>
     {type === 'textarea' ? (
       <textarea 
          id={id}
          name={name}
          value={value}
          placeholder={placeholder} 
          onChange={onChange}
          className="bg-[#F3F4F6] text-[13px] mb-1.5 rounded-lg outline-none focus:shadow-md focus:shadow-blue-200/100 focus:border-2 border-blue-500 py-2 px-2"
       />
     ) : (
       <input
          id={id}
          name={name}
          value={value}
          type={type} 
          onChange={onChange}
          placeholder={placeholder} 
          className="bg-[#F3F4F6] text-[13px] mb-1.5 rounded-lg outline-none focus:shadow-md focus:shadow-blue-200/100 focus:border-2 border-blue-500 py-2 px-2"
       />
     )

     }
    </div>
  )
}

