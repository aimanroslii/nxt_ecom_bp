

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
        {/* LEFT */}
        <div className="flex gap-6 flex-wrap">
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option value="">Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>
            <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option value="">Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
            </select>
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option value="">Category</option>
                <option value="">New Arrival</option>
                <option value="">Popular</option>
            </select>
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option value="">All Filters</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
        </div>
        {/* RIGHT */}
        <div className="">
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400">
                <option value="">Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
            </select>
        </div>
    </div>
  )
}

export default Filter
