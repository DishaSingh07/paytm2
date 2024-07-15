// export function Button({ label, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       type="button"
//       class="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
//     >
//       {label}
//     </button>
//   );
// }

// export function Button({ label, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       type="button"
//       className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
//     >
//       {label}
//     </button>
//   );
// }

export const Button = ({ onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200 ${className}`}
    >
      {label}
    </button>
  );
};
