import { useState } from "react";
import PersonalDetails from "./components/personal-details/PersonalDetails"
import AddExperience from "./components/experience/AddExperience";
import ExpandForm from "./components/ExpandForm";
import DisplayForm from "./components/DisplayForm";
import Accordion from "./components/Accordion";
import ExperienceForm from "./components/experience/ExperienceForm";
import data from "../src/data"

// THIS ONE SHOULD NOT BE AVAILABLE ON OTHER BRANCHES

function App() {
  const [loadData, setLoadData] = useState(data.personalDetails);
  const [sections, setSections] = useState(data.sections);
  const [sectionOpen, setSectionOpen] = useState<string | null>(null)
  const [prevState, setPrevState] = useState(null);

  const setOpen = (sectionName: string) => setSectionOpen(sectionName);

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;

    console.log("id:", id);
    console.log("arrayName:", arrayName);
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form));
          form[key] = !form[key];
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
    // if no prevState found remove form
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          // Revert back to previous state
          form = prevState;
          form.isCollapsed = true;
        }

        return form;
      }),
    });
  }

  const toggleCollapsed = (e: React.MouseEvent<HTMLButtonElement>) => toggleValue(e, "isCollapsed");

  return (
    <div className="flex justify-center"> 
      <div>
        <PersonalDetails
          fullName={loadData.fullName}
          email={loadData.email}
          phoneNumber={loadData.phoneNumber}
          github={loadData.github}
        />


        <br/>

        <AddExperience 
          setOpen={setOpen}
          isOpen={sectionOpen === "Experience"}
          experiences={sections.experiences}
          onCancel={cancelForm}
          toggleCollapsed={toggleCollapsed}
        />

        <br/>
        
      </div>

      <div className="border w-[800px]">
        test
      </div>
    </div>
  )
}

export default App
