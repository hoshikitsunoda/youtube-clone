import React from 'react'

const App: React.FC = () => {
  return (
    <div>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="jane@example.com"
      />
    </div>
  )
}

export default App
