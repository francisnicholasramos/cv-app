import GenInfoSection from "./personal-details/GenInfoSection";
import ExperienceSection from "./experience/ExperienceSection";
import EducationSection from "./education/EducationSection";
import type {Sections} from "../../src/data"

type ViewProps = {
    genInfo: {fullName: string, email: string, phone: string, github: string};
    arrayProperty: Sections;
    arraySection: Sections;
}

const View: React.FC<ViewProps> = ({genInfo, arrayProperty, arraySection}) => {
    return (
        <div className="flex flex-col font-serif text-[#454545] p-6">
            <GenInfoSection 
                property={genInfo}
            />

            <div className="flex flex-col gap-y-5">
                <ExperienceSection 
                    arraySection={arraySection.experiences}
                    arrayProperty={arrayProperty.experiences}
                />

                <EducationSection 
                    arraySection={arraySection.educations}
                    arrayProperty={arrayProperty.educations}
                />
            </div>



        </div>
    )
}

export default View;
