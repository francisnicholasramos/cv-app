import InputGroup from "../InputGroup"

interface PersonalDetailsProps {
  fullName: string;
  email: string;
  phone: string;
  github: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({onChange, email, fullName, phone, github}) => {
  return (
    <form className="bg-white w-[500px] p-3 rounded-md">
      <h1 className="font-bold text-xl mb-1.5">Personal Details</h1>
      <InputGroup 
        id="full-name"
        name="fullName"
        label="Full name"
        placeholder="First and last name"
        value={fullName}
        onChange={onChange}
      />
      <InputGroup 
        type="email"
        name="email"
        id="email"
        label="Email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <InputGroup
        type="tel"
        id="phone-number"
        name="phone"
        label="Phone number"
        placeholder="Enter phone number"
        value={phone}
        onChange={onChange}
        maxLength={11}
        optional
      />
      <InputGroup
        type="text"
        id="github"
        name="github"
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
