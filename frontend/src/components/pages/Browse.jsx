import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightCircle, Construction } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Browse = () => {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-center">
    <Construction className="text-blue-600 w-20 h-20 mb-6 animate-bounce" />

    <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Under Construction</h1>
    <p className="text-lg text-gray-600 max-w-md mb-6">
      We're working hard to bring you something amazing. Please check back soon!
    </p>

    <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
      <ArrowRightCircle className="w-5 h-5" />
     <Link to='/'> Go Back to Home</Link>
    </Button>
  </div>
  )
}

export default Browse
