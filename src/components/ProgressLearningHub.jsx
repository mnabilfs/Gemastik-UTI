import React from 'react'

const ProgressLearningHub = () => {
  return (
    <div className="p-5 bg-white border border-gray-200 shadow-sm rounded-xl">
            <h4 className="mb-3 font-medium text-gray-900 text-md">
              Progress Learning Hub
            </h4>
            <div className="mb-2 text-sm font-semibold text-gray-700">
              Total Bacaan Minggu ini
            </div>
            <div className="w-full h-3 overflow-hidden bg-gray-100 rounded-full">
              <div className="w-3/5 h-3 bg-blue-500" /> 
            </div>
            <div className="mt-2 text-xs text-gray-500">15/25</div>
          </div>
  )
}

export default ProgressLearningHub