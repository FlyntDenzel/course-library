import React from "react";

const LoadingPage = () => {
  return (
    <div class="flex justify-center items-center h-screen bg-gray-200">
      <div class="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin border-t-blue-500 border-b-transparent border-r-transparent border-l-transparent"></div>
    </div>
  );
};

export default LoadingPage;
