const ClickableForm = ({
  companyName,
  arrayName,
  onClick,
  form
}) => {
  const {id} = form;
  return (
    <div className="my-3 w-full bg-white px-3 py-2 cursor-pointer rounded-md"> 
      <button
        id={String(id)}
        onClick={onClick}
        data-array-name={arrayName}
        className="section-form flex cursor-pointer"
      >
        <span>
          {companyName}
        </span>
      </button>
    </div>
  )
}

export default ClickableForm
