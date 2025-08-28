const GroupButton = ({done, cancel, remove}) => {
  return (
    <div className='flex justify-between'>
      <button onClick={remove} className="rounded-sm border border-gray-600 px-2 cursor-pointer text-base text-gray-600 hover:bg-[#e2e5e9]">Delete</button>

      <div className="flex justify-between gap-2"> 
        <button type="button" onClick={cancel} className="rounded-sm border border-gray-600 px-2 cursor-pointer text-base text-gray-600 hover:bg-[#e2e5e9]">Cancel</button>
        <button type="button" onClick={done} className="bg-gray-600 rounded-sm px-2 cursor-pointer text-base text-white hover:bg-gray-700">Save</button>

      </div>

    </div>
  )
}

export default GroupButton;
