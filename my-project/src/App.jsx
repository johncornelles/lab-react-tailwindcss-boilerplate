
const App = () => {
  return (
    <>
      <div className="bg-red-500 text-white">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className='flex items-center'>
            <div className="text-2xl font-bold">Kalvium</div>
            <div className="flex space-x-4 ml-10 mt-1">
              <a href="#" className="hover:text-gray-300">About Us</a>
              <a href="#" className="hover:text-gray-300">Contacts</a>
              <a href="#" className="hover:text-gray-300">Courses</a>
            </div>
          </div>
          <button className="border border-solid border-white	hover:bg-blue-700 text-white py-2 px-4 rounded hover:font-bold">LOGIN</button>
        </nav>
      </div>
      <div className='mt-10 mb-10 ml-28'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-5 rounded font-bold" >Button One</button>
      </div>
      <div className='border border-red-500 bg-red-300 text-red-700 px-4 py-3 w-10/12 mx-auto'>
        <strong className='text-red-700'>Alert ! </strong>
        <span>This is awesome</span>
      </div>
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="h-12 w-12" />
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 font-bold">Kalvium Store</h4>
          <p className="text-base text-gray-700">You have a  new Course</p>
        </div>
      </div>

      <footer className="bg-gray-200 text-center lg:text-left">
        <div className="text-gray-700 text-center py-4">
          2021 Copyright Kalvium
        </div>
      </footer>


    </>
  );
}

export default App;