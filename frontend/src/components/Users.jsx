// // import { useEffect, useState } from "react";
// // import { Button } from "./Button";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // export const Users = () => {
// //   // Replace with backend call
// //   const [users, setUsers] = useState([]);
// //   const [filter, setFilter] = useState("");

// //   //debouncing
// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:3001/api/v1/user/bulk?filter=" + filter)
// //       .then((response) => {
// //         setUsers(response.data.user);
// //       });
// //   }, [filter]);

// //   return (
// //     <>
// //       <div className="font-bold mt-6 text-lg">Users</div>
// //       <div className="my-2">
// //         <input
// //           onChange={(e) => {
// //             setFilter(e.target.value);
// //           }}
// //           type="text"
// //           placeholder="Search users..."
// //           className="w-full px-2 py-1 border rounded border-slate-200"
// //         ></input>
// //       </div>
// //       <div>
// //         {users.map((user) => (
// //           <User user={user} />
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // function User({ user }) {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="flex justify-between">
// //       <div className="flex">
// //         <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
// //           <div className="flex flex-col justify-center h-full text-xl">
// //             {user.firstName[0]}
// //           </div>
// //         </div>
// //         <div className="flex flex-col justify-center h-ful">
// //           <div>
// //             {user.firstName} {user.lastName}
// //           </div>
// //         </div>
// //       </div>

// //       <div className="flex flex-col justify-center h-ful">
// //         <Button
// //           onClick={(e) => {
// //             navigate("/send?id=" + user._id + "&name=" + user.firstName);
// //           }}
// //           label={"Send Money"}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // // import { useState } from "react";
// // // import { Button } from "./Button";

// // // export const Users = () => {
// // //   // Replace with backend call
// // //   const [users, setUsers] = useState([
// // //     {
// // //       firstName: "Harkirat",
// // //       lastName: "Singh",
// // //       _id: 1,
// // //     },
// // //   ]);

// // //   return (
// // //     <>
// // //       <div className="font-bold mt-6 text-lg">Users</div>
// // //       <div className="my-2">
// // //         <input
// // //           type="text"
// // //           placeholder="Search users..."
// // //           className="w-full px-2 py-1 border rounded border-slate-200"
// // //         ></input>
// // //       </div>
// // //       <div>
// // //         {users.map((user) => (
// // //           <User user={user} />
// // //         ))}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // function User({ user }) {
// // //   return (
// // //     <div className="flex justify-between">
// // //       <div className="flex">
// // //         <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
// // //           <div className="flex flex-col justify-center h-full text-xl">
// // //             {user.firstName[0]}
// // //           </div>
// // //         </div>
// // //         <div className="flex flex-col justify-center h-ful">
// // //           <div>
// // //             {user.firstName} {user.lastName}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="flex flex-col justify-center h-ful">
// // //         <Button label={"Send Money"} />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// import { useEffect, useState } from "react";
// import { Button } from "./Button";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/v1/user/bulk?filter=" + filter)
//       .then((response) => {
//         setUsers(response.data.user);
//       });
//   }, [filter]);

//   return (
//     <>
//       <div className="font-bold mt-6 text-lg text-gray-700">Users</div>
//       <div className="my-4">
//         <input
//           onChange={(e) => {
//             setFilter(e.target.value);
//           }}
//           type="text"
//           placeholder="Search users..."
//           className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
//         ></input>
//       </div>
//       <div className="space-y-4">
//         {users.map((user) => (
//           <User user={user} key={user._id} />
//         ))}
//       </div>
//     </>
//   );
// };

// function User({ user }) {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
//       <div className="flex items-center">
//         <div className="rounded-full h-12 w-12 bg-gray-200 flex justify-center items-center text-xl text-gray-600 mr-4">
//           {user.firstName[0]}
//         </div>
//         <div className="text-gray-700">
//           {user.firstName} {user.lastName}
//         </div>
//       </div>
//       <Button
//         onClick={(e) => {
//           navigate("/send?id=" + user._id + "&name=" + user.firstName);
//         }}
//         label={"Send Money"}
//         className="px-2 py-1 text-sm"
//       />
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      // .get("http://localhost:3001/api/v1/user/bulk?filter=" + filter)
      .get("https://paytm-jq5n.onrender.com/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg text-gray-700">Users</div>
      <div className="my-4">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></input>
      </div>
      <div className="space-y-4">
        {users.map((user) => (
          <User user={user} key={user._id} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-gray-200 flex justify-center items-center text-xl text-gray-600 mr-4">
          {user.firstName[0]}
        </div>
        <div className="text-gray-700">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <Button
        onClick={(e) => {
          navigate("/send?id=" + user._id + "&name=" + user.firstName);
        }}
        label={"Send Money"}
        className="px-2 py-1 text-sm"
      />
    </div>
  );
}
