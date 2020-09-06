import React from 'react'

const SearchBar: React.FC = () => {
  return (
    <div className="m-8 flex">
      <input
        className="flex-initial bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="What do you want to watch?"
      />
      <button className="flex-initial ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </div>
  )
}

export default SearchBar
