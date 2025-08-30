import {useState} from 'react'
import GeneralInfo from './components/personal/GeneralInfo'
import AddExp from './components/experience/AddExp'
import Accordion from './components/Accordion'
import View from './components/View'
import data from './data'
import './index.css' 

const App = () => {
  const [basicInfo, setBasicInfo] = useState(data.generalInformation)
  const [sections, setSections] = useState(data.sections)
  const [accordion, setAccordion] = useState<string | null>(null)
  const [prevState, setPrevState] = useState(null);

  const setOpen = (sectionName: string) => setAccordion(sectionName);

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


 const toggleCollapsed = (e: React.MouseEvent<HTMLButtonElement>) => toggleValue(e, "isCollapsed");

  return (
    <div className="flex justify-center">
      <div className="w-[500px] max-w-[500px] gap-y-2">
        <GeneralInfo 
          fullName={basicInfo.fullName}
          email={basicInfo.email}
          phone={basicInfo.phoneNumber}
          github={basicInfo.github}
          onChange={(e) => setBasicInfo({
            ...basicInfo,
            [e.target.name]: e.target.value
          })}
        />

        <AddExp 
          setOpen={setOpen}
          isCollapsed={accordion === 'Experience'}
          experiences={sections.experiences}
          toggle={toggleCollapsed}
        />
      </div>

      <div className="border w-[700px] max-w-[700px]">
        <View
          fullName={basicInfo.fullName}
          email={basicInfo.email}
          phone={basicInfo.phoneNumber}
          github={basicInfo.github}
        />
      </div>
    </div>
  )
}

export default App;
