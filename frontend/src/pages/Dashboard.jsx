// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Appbar } from "../components/Appbar";
// import { Balance } from "../components/Balance";
// import { Users } from "../components/Users";

// export const Dashboard = () => {
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     const fetchBalance = async () => {
//       try {
//         const response = await axios.get(
//           // "http://localhost:3001/api/v1/account/balance",
//           "https://paytm-jq5n.onrender.com/api/v1/account/balance",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         setBalance(response.data.balance);
//       } catch (error) {
//         console.error("Error fetching balance:", error);
//       }
//     };

//     fetchBalance();
//   }, []);

//   return (
//     <div>
//       <Appbar />
//       <div className="m-8">
//         <Balance value={balance} />
//         <Users />
//       </div>
//     </div>
//   );
// };



import React, { useEffect, useState } from "react"; // Import React and hooks
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [username, setUsername] = useState(""); // Add state for username

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "https://paytm-jq5n.onrender.com/api/v1/account/balance",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    const fetchUsername = async () => {
      try {
        const response = await axios.get(
          "https://paytm-jq5n.onrender.com/api/v1/account/username", // Replace with your actual endpoint
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUsername(response.data.username); // Adjust based on actual response structure
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchBalance();
    fetchUsername();
  }, []);

  return (
    <div>
      <Appbar username={username} /> {/* Pass username as prop */}
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};
