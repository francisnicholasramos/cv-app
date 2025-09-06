import type {PersonalDetails} from "../../../src/data";

type GenInfoSectionProps = {
    property: PersonalDetails;
}

const GenInfoSection: React.FC<GenInfoSectionProps> = (props) => {
    const {fullName, email, phone, github} = props.property
    const arr = [email, phone, github]
    return (
        <div className="flex flex-col items-center">
            <div className="font-bold uppercase text-xl">{fullName}</div>
            <div className="">
                {arr
                    .filter((prop) => prop !== "")
                    .map((prop) => prop.replace("https://", ""))
                    .map((prop, i, filtered) => i !== arr.length - 1 ? (
                        <span key={i}>
                            {prop} 
                            {i !== filtered.length - 1 && " | "}
                        </span>
                    ) : (
                            <span key={i}>{prop}</span>
                ))}
            </div>
        </div>
    )
}

export default GenInfoSection;
