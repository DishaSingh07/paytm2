// export const Balance = ({ value }) => {
//   return (
//     <div className="flex">
//       <div className="font-bold text-lg">Your balance</div>
//       <div className="font-semibold ml-4 text-lg">Rs {value}</div>
//     </div>
//   );
// };

export const Balance = ({ value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div className="font-bold text-lg text-gray-700">Your balance</div>
      <div className="font-semibold text-lg text-blue-600">Rs {value}</div>
    </div>
  );
};
