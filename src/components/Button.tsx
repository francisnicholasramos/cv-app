interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'save' | 'cancel' | 'add';
  text: string;
  icon: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  className,
  icon,
  text,
  ...props
}) => {
  const variants: Record<'save' | 'cancel' | 'add', string> = {
    save: 'bg-gray-600 rounded-sm px-2 cursor-pointer text-base text-white hover:bg-gray-700',
    cancel: 'rounded-sm border border-gray-600 px-2 cursor-pointer text-base text-gray-600 hover:bg-[#e2e5e9]',
    add: 'gap-1 bg-[#dedede] rounded-sm px-2 cursor-pointer text-base text-[#333] hover:bg-[#cccccc]'
  }

  const variantStyles = variants[variant] 

  return (
    <button className={`${variantStyles} ${className}`} {...props}>
      {icon} {text}
    </button>  
  )
}

export default Button;

