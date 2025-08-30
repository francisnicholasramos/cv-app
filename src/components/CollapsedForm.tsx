import ClickableForm from './ClickableForm'

const CollapsedForm = ({
  forms,
  formTitle,
  toggle,
  FormComponent,
  arrayName
}) => {
  return (
    <>
      {forms.map((form) => form.isCollapsed ? (
        <ClickableForm 
          key={form.id}
          companyName={form[formTitle]}
          onClick={toggle}
          arrayName={arrayName}
          form={form}
        />
      ): (
        <FormComponent 
          key={form.id}
          form={form}
        />
      ) 

      )}
    </>
  )
}

export default CollapsedForm;
