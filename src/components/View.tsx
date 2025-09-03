const View = ({
  fullName,
  email,
  phone,
  github,
  description
}) => {
  return (
    <div className="flex flex-col">
      <div>{fullName}</div>
    </div>
  )
}

export default View;
