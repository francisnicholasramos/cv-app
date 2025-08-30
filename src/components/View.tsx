const View = ({
  fullName,
  email,
  phone,
  github,

}) => {
  return (
    <div className="flex flex-col">
      <div>
        <h2>{fullName}</h2>
      </div>
    </div>
  )
}

export default View;
