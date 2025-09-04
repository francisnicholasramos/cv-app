const GenInfoSection = ({property}) => {
    const {fullName, email, phone, github} = property
    const arr = [email, phone, github]
    return (
        <div className="flex flex-col items-center">
            <div className="font-bold uppercase text-xl">{fullName}</div>
            <div className="">
                {arr.map((prop, i) => i !== arr.length - 1 ? (
                    <span key={prop.id}>{prop} | </span>
                ) : (
                        <span key={prop.id}>{prop}</span>
                    ))}
            </div>
        </div>
    )
}

export default GenInfoSection;
