import InputGroup from "../InputGroup"

interface GeneralInfoProps {
  fullName: string;
  email: string;
  phone: string;
  github: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({
  fullName,
  email,
  phone,
  github,
  onChange
}) => {
  return (
    <form className="bg-white w-full max-w-[500px] p-5 rounded-md">
      <h1 className="font-bold text-xl mb-1.5">General Information</h1>
      <InputGroup 
        id="name"
        name="fullName"
        label="Name"
        value={fullName}
        placeholder="Enter your full name"
        type="email"
        onChange={onChange}
      />
      <InputGroup 
        id="email"
        name="email"
        label="Email"
        value={email}
        placeholder="Enter your email"
        type="email"
        onChange={onChange}
      />
      <InputGroup 
        id="phone"
        name="phone"
        label="Phone number"
        value={phone}
        placeholder="Enter your phone number"
        type="tel"
        onChange={onChange}
      />
      <InputGroup 
        id="github"
        name="github"
        label="Github"
        value={github}
        placeholder="https://github.com/user"
        type="text"
        optional
        onChange={onChange}
      />
    </form>
  )
}

export default GeneralInfo;
