import React, { useState } from 'react'

interface Props {
  fetchVideo: (keyword: string) => Promise<void>
}

const SearchBar: React.FC<Props> = ({ fetchVideo }) => {
  const [keyword, setKeyword] = useState('')

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  return (
    <div className="m-8 flex row-span-3">
      <input
        className="flex-initial bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="What do you want to watch?"
        onChange={inputChangeHandler}
      />
      <button
        className="flex-initial ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => fetchVideo(keyword)}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
