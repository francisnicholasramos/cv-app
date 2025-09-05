import SectionHeader from "../SectionHeader";
import {Fragment} from "react";
import type {Experience} from "../../../src/data";

type ExperienceSectionProps = {
    arraySection: Experience[];
    arrayProperty: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({arraySection, arrayProperty}) => {
    return (
        <div className="flex flex-col">
            <SectionHeader title="Experience" arraySection={arraySection}/>
            {arrayProperty.map((property) => (
                <Fragment key={property.id}>
                    <div className="flex flex-col mt-2">
                        <p className="font-bold uppercase">{property.company}</p>
                        <p className="italic">{property.position}</p>
                        <p>{property.location}</p>
                        <span>{property.description}</span>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default ExperienceSection;
