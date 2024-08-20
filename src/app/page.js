import HomePage from '../components/home'

export default function Home() {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 py-4 px-32 cursor-pointer bg-gradient-to-r from-blue-200 via-purple-700 to-pink-800 shadow-lg z-50">
        <div className="flex justify-between items-center text-white">
          <div>
            <h2>Zeke App</h2>
          </div>

          <div className="flex justify-between space-x-10">
            <select className="outline-none bg-transparent cursor-pointer hover:text-red-300">
              <option value="Company">Company</option>
              <option value="Company">Company One</option>
              <option value="Company">Company Two</option>
            </select>

            <h2 className='hover:text-red-300'>Product</h2>
            <h2 className='hover:text-red-300'>Blog</h2>
          </div>

          <div className="flex space-x-10">
            <a href="#" className='hover:text-red-300 hover:border-l-2 border-r-2 px-3 rounded-full border-white'>Sign Up</a>
            <a href="#" className='hover:text-red-300 text-pink-600 border bg-white hover:bg-transparent rounded-full px-5 pt-1'>Login</a>
          </div>
        </div>
      </div>
      
      <HomePage />
    </>
  );
}
