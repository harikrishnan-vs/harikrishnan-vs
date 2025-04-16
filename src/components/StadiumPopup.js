import { useState } from 'react'

const StadiumPopup = ({ onConfirm }) => {
  const [selected, setSelected] = useState(2) // Default to 2
  const [dropdownValue, setDropdownValue] = useState(null)

  // Handle button click
  const handleSelect = (value) => {
    setSelected(value)
    if (value !== '5+') {
      setDropdownValue(null) // Reset dropdown value if a button other than '5+' is selected
    }
  }

  // Handle "View Tickets" button click
  const handleConfirm = () => {
    const finalValue = selected === '5+' ? dropdownValue : selected
    if (finalValue) onConfirm(Number(finalValue))
  }

  // Disable "View Tickets" button if no value is selected or dropdown value is missing
  const isDisabled = selected === null || (selected === '5+' && !dropdownValue)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full text-center shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Choose Your Seats</h2>
        <p className="mb-4 text-gray-600">Stadium: St James Park, Newcastle</p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {['Any', 1, 2, 3, 4, '5+'].map((btn) => (
            <div key={btn}>
              {/* If it's 5+ and user has clicked it, show the dropdown */}
              {btn === '5+' && selected === '5+' ? (
                <select
                  className="px-4 py-2 border rounded text-sm"
                  value={dropdownValue || ''}
                  onChange={(e) => setDropdownValue(e.target.value)}
                >
                  {Array.from({ length: 16 }, (_, i) => i + 5).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              ) : (
                <button
                  onClick={() => handleSelect(btn)}
                  className={`px-4 py-2 rounded border text-sm ${
                    selected === btn ? 'bg-blue-600 text-white' : 'bg-white text-black'
                  }`}
                >
                  {btn}
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleConfirm}
          disabled={isDisabled}
          className={`mt-4 w-full py-2 rounded text-white ${
            isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          View Tickets
        </button>
      </div>
    </div>
  )
}

export default StadiumPopup
