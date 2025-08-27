import InputGroup from "../InputGroup"

interface PersonalDetailsProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  github: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({onChange, email, fullName, phoneNumber, github}) => {
  return (
    <form className="bg-white w-[500px] p-3 rounded-md">
      <h1 className="font-bold text-xl mb-1.5">Personal Details</h1>
      <InputGroup 
        id="full-name"
        label="Full name"
        placeholder="First and last name"
        value={fullName}
        onChange={onChange}
      />
      <InputGroup 
        type="email"
        id="email"
        label="Email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <InputGroup
        type="tel"
        id="phone-number"
        label="Phone number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={onChange}
        maxLength={11}
        optional
      />
      <InputGroup
        type="text"
        id="github"
        label ="Github link"
        placeholder="https://github.com/user/"
        value={github}
        onChange={onChange}
        optional
      />
    </form>
  )
}

export default PersonalDetails
