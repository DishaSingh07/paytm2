
// export const Appbar = () => {
//   return (
//     <div className="shadow-md h-16 bg-white flex justify-between items-center px-6">
//       <div className="text-2xl font-bold text-gray-700">PayTM App</div>
//       <div className="flex items-center">
//         <div className="text-gray-700 mr-4">Hello</div>
//         <div className="rounded-full h-12 w-12 bg-gray-200 flex justify-center items-center">
//           <div className="text-xl text-gray-600">A</div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Appbar = ({ username }) => {
  return (
    <div className="shadow-lg h-20 bg-gradient-to-r from-gray-800 to-gray-900 flex justify-between items-center px-8 py-4">
      <div className="text-4xl font-extrabold text-white">Digital Payment App</div>
      <div className="flex items-center space-x-6">
        <div className="text-white text-xl font-medium">Hello, {username}</div>
        <div className="relative">
          <div className="rounded-full h-16 w-16 bg-gray-700 flex justify-center items-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl text-white font-semibold">
              {username ? username[0].toUpperCase() : 'A'}
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-gray-600 -z-10"></div>
        </div>
      </div>
    </div>
  );
};



