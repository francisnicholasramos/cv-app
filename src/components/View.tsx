import GenInfoSection from "./personal-details/GenInfoSection";
import ExperienceSection from "./experience/ExperienceSection";
import EducationSection from "./education/EducationSection";

const View = ({genInfo, arrayProperty, arraySection}) => {
    return (
        <div className="flex flex-col font-serif text-[#454545] p-6 max-w-[794px] max-h-[1123px]">
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
