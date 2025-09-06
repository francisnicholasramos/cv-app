import { useState } from "react";
import GeneralInformation from "./components/personal-details/GeneralInformation"
import AddExperience from "./components/experience/AddExperience";
import AddEducation from "./components/education/AddEducation";
import View from "./components/View"
import data from "../src/data"
import type { Sections, Education, Experience } from "../src/data"

type SectionKey = keyof Sections; // educations | experience
type ToggleKeys = "isCollapsed" | "isOpen";

function App() {
    const [loadData, setLoadData] = useState(data.personalDetails);
    const [sections, setSections] = useState(data.sections);
    const [sectionOpen, setSectionOpen] = useState<string | null>(null)

    const [prevState, setPrevState] = useState<Record<string, Education | Experience>>({});

    const setOpen = (sectionName: string) => setSectionOpen(sectionName);

    function toggleValue(e: React.MouseEvent<HTMLButtonElement>, key: ToggleKeys) {
        const sectionForm = (e.target as HTMLElement).closest(".section-form") as HTMLElement & {
            dataset: {arrayName: SectionKey};
            id: string;
        }
        const { id } = sectionForm;
        const { arrayName } = sectionForm.dataset;

        const section = sections[arrayName];

        setPrevState({
            ...prevState,
            [id]: { ...section.find((form) => form.id === id)! }, // save snapshot
        });

        setSections({
            ...sections,
            [arrayName]: section.map((form) => {
                if (form.id === id) {
                    return { ...form, [key]: !form[key] }; // flip isCollapsed
                }
                return form;
            }),
        });
    }

    function removeForm(e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) {
        const form = (e.target as HTMLElement).closest(".section-form") as HTMLElement & {
            dataset: {arrayName: SectionKey}
        };
        const { arrayName } = form.dataset;
        const section = sections[arrayName];
        const { id } = form;

        setSections({
            ...sections,
            [arrayName]: section.filter((item) => item.id !== id),
        });
    }


    function cancelForm(e: React.MouseEvent<HTMLButtonElement | HTMLInputElement>) {
        const sectionForm = (e.target as HTMLElement).closest(".section-form") as HTMLElement & {
            dataset: {arrayName: SectionKey}
        };
        const { id } = sectionForm;
        const { arrayName } = sectionForm.dataset;
        const section = sections[arrayName];

        const prev = prevState[id];
        if (!prevState) {
            removeForm(e);
            return;
        }

        setSections({
            ...sections,
            [arrayName]: section.map((form) => {
                if (form.id === id) {
                    return { ...prev, isCollapsed: true }; // restore + collapse
                }
                return form;
            }),
        });
    }

    function editable(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        id?: string 
    ) {
        const { name, value, type } = e.target;

        if (type === "tel") {
            const input = value.replace(/\D/g, "").slice(0, 11);

            setLoadData({
                ...loadData,
                [name]: input,
            });

            return;
        }

        if (!id) {
            setLoadData({
                ...loadData,
                [name]: value,
            });
            return;
        }

        setSections((prev) => ({
            ...prev,
            experiences: prev.experiences.map((exp) =>
                exp.id === id ? { ...exp, [name]: value } : exp
            ),
        }));

        setSections((prev) => ({
            ...prev,
            educations: prev.educations.map((edu) => 
                edu.id === id ? { ...edu, [name]: value } : edu
            )
        }))

    }

    function createForm(
        arrayName: SectionKey, 
        object: Education | Experience,
    ) {
        // Clone array to not push object to original
        if (arrayName === "educations") {
            const section: Education[] = structuredClone(sections[arrayName]);
            section.push(object as Education);
            setSections({ ...sections, [arrayName]: section });
        } else if (arrayName === "experiences") {
            const section: Experience[] = structuredClone(sections[arrayName]);
            section.push(object as Experience);
            setSections({ ...sections, [arrayName]: section });
        }

    }


    const createEducationForm = () =>
        createForm("educations", {
            degree: "",
            school: "",
            location: "",
            startDate: "",
            endDate: "",
            isOpen: true,
            isCollapsed: false,
            id: crypto.randomUUID(),
        });

    const createExperienceForm = () =>
        createForm("experiences", {
            company: "",
            position: "",
            location: "",
            description: "",
            startDate: "",
            endDate: "",
            isOpen: true,
            isCollapsed: false,
            id: crypto.randomUUID(),
        });

    const toggleCollapsed = (e: React.MouseEvent<HTMLButtonElement>) => toggleValue(e, "isCollapsed" );

    return (
        <div className="flex flex-col lg:flex-row justify-center gap-4 p-5"> 
            <div className="flex flex-col gap-4 w-full lg:w-[600px] max-w-full">
                <GeneralInformation
                    fullName={loadData.fullName}
                    email={loadData.email}
                    phone={loadData.phone}
                    github={loadData.github}
                    onChange={editable}
                />
                <AddExperience 
                    setOpen={setOpen}
                    isOpen={sectionOpen === "Experience"}
                    experiences={sections.experiences}
                    onCancel={cancelForm}
                    toggleCollapsed={toggleCollapsed}
                    createForm={createExperienceForm}
                    onChange={editable}
                    onRemove={removeForm}
                />
                <AddEducation 
                    setOpen={setOpen}
                    isOpen={sectionOpen === "Education"}
                    educations={sections.educations}
                    onCancel={cancelForm}
                    toggleCollapsed={toggleCollapsed}
                    createForm={createEducationForm}
                    onChange={editable}
                    onRemove={removeForm}
                />

            </div>

            <div className="w-full lg:w-auto xl:w-[800px] h-screen bg-white max-w-full">
                <View
                    genInfo={loadData}
                    arraySection={sections}
                    arrayProperty={sections}
                />
            </div>
        </div>
    )
}

export default App
