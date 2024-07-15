// export const Appbar = () => {
//     return <div className="shadow h-14 flex justify-between">
//         <div className="flex flex-col justify-center h-full ml-4">
//             PayTM App
//         </div>
//         <div className="flex">
//             <div className="flex flex-col justify-center h-full mr-4">
//                 Hello
//             </div>
//             <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
//                 <div className="flex flex-col justify-center h-full text-xl">

//                 </div>
//             </div>
//         </div>
//     </div>
// }

export const Appbar = () => {
  return (
    <div className="shadow-md h-16 bg-white flex justify-between items-center px-6">
      <div className="text-2xl font-bold text-gray-700">PayTM App</div>
      <div className="flex items-center">
        <div className="text-gray-700 mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-gray-200 flex justify-center items-center">
          <div className="text-xl text-gray-600">A</div>
        </div>
      </div>
    </div>
  );
};
