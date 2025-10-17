import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="relative w-80 h-[640px] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] bg-white border border-gray-200 flex flex-col overflow-hidden">
        <div className="h-12 flex items-center justify-center border-b border-gray-100 px-4">
          <div className="w-14 h-2 rounded-full bg-gray-200" />
        </div>
        <div className="flex-1 overflow-auto p-4 bg-white">
          {children}
        </div>
        <div className="h-16 flex items-center justify-center border-t border-gray-100">
          <div className="w-24 h-3 rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default Layout
