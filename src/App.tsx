import { useState } from "react";
import PersonalDetails from "./components/personal-details/PersonalDetails"
import AddExperience from "./components/experience/AddExperience";
import AddEducation from "./components/education/AddEducation";
import View from "./components/View"
import data from "../src/data"

function App() {
  const [loadData, setLoadData] = useState(data.personalDetails);
  const [sections, setSections] = useState(data.sections);
  const [property, setProperty] = useState(data.sections.experiences)
  const [sectionOpen, setSectionOpen] = useState<string | null>(null)
  const [prevState, setPrevState] = useState<Record<string, boolean>>({});

  const setOpen = (sectionName: string) => setSectionOpen(sectionName);

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;

    const section = sections[arrayName];

    setPrevState({
      ...prevState,
      [id]: { ...section.find((form) => form.id === id) }, // save snapshot
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

  function removeForm(e) {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    });
  }
  

function cancelForm(e) {
  const sectionForm = e.target.closest(".section-form");
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

  function createForm(arrayName, object) {
    setPrevState(null);
    // Clone array to not push object to original
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section });
  }


  const createEducationForm = () =>
    createForm("educations", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: crypto.randomUUID(),
    });

  const createExperienceForm = () =>
    createForm("experiences", {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: crypto.randomUUID(),
    });

  const toggleCollapsed = (e: React.MouseEvent<HTMLButtonElement>) => toggleValue(e, "isCollapsed" );

  return (
    <div className="flex justify-center"> 
      <div className="flex flex-col gap-4">
        <PersonalDetails
          fullName={loadData.fullName}
          email={loadData.email}
          phone={loadData.phone}
          github={loadData.github}
          onChange={editable}
        />

        <AddEducation 
          setOpen={setOpen}
          isOpen={sectionOpen === "Education"}
          educations={sections.educations}
          onCancel={cancelForm}
          toggleCollapsed={toggleCollapsed}
          createForm={createExperienceForm}
          onChange={editable}
          onRemove={removeForm}
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

        <br/>
        
      </div>

      <div className="border w-[800px] max-w-[800px]">
        <View
          fullName={loadData.fullName}
        />
      </div>
    </div>
  )
}

export default App
