import SectionHeader from "../SectionHeader";
import {Fragment} from "react";
import type {Education} from "../../../src/data"

type EducationSectionProps = {
    arraySection: Education[];
    arrayProperty: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({arraySection, arrayProperty}) => {
    return (
        <div className="flex flex-col">
            <SectionHeader title="Education" arraySection={arraySection}/>
            {arrayProperty
                .map((property) => (
                <Fragment key={property.id}>
                    <div className="flex flex-col mt-2">
                        <p className="font-bold uppercase">{property.degree}</p>
                        <p>{property.school}</p>
                        <p>{property.location}</p>

                        <span>
                            {property.startDate} 
                            {property.startDate && property.endDate ? " - " : ""}
                            {property.endDate}
                        </span>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default EducationSection;
