import React from "react";

const TopAiTheWeek = () => {
  return (
    <div className="p-5 bg-white border border-gray-200 shadow-sm rounded-xl">
      <h4 className="mb-3 font-medium text-gray-900 text-md">
        Top AI The Week
      </h4>
      <ol className="space-y-2 text-sm text-gray-700">
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-6 h-6 text-xs rounded-full bg-violet-100 text-violet-700">
            1
          </span>
          Jasper AI
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-6 h-6 text-xs text-green-700 bg-green-100 rounded-full">
            2
          </span>
          ChatGPT
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-6 h-6 text-xs rounded-full bg-amber-100 text-amber-700">
            3
          </span>
          Midjourney
        </li>
      </ol>
    </div>
  );
};

export default TopAiTheWeek;
