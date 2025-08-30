export default function GroupButtons({
  save, cancel, remove
}) {
  return (
    <div className="flex justify-between">
      <button className="rounded-sm border border-gray-600 px-2 cursor-pointer text-base text-gray-600 hover:bg-[#e2e5e9]">Delete</button>

      <div className="flex gap-2">
        <button className="rounded-sm border border-gray-600 px-2 cursor-pointer text-base text-gray-600 hover:bg-[#e2e5e9]">Cancel</button>
        <button className="bg-gray-600 rounded-sm px-2 cursor-pointer text-base text-white hover:bg-gray-700">Save</button>
      </div>
    </div>
  )
}
