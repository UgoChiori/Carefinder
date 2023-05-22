// import React from "react";
// import { auth, firestore } from "../Firebase";
// import { CSVLink } from "react-csv";

// const ExportUsers: React.FC = () => {
//   const [users, setUsers] = React.useState([]);
//   const [csvData, setCsvData] = React.useState([]);
//   const [csvUrl, setCsvUrl] = React.useState("");

//   React.useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersSnapshot = await firestore.collection("users").get();
//         const usersData = usersSnapshot.docs.map((doc) => doc.data());
//         setUsers(usersData);
//         setCsvData(formatCsvData(usersData));
//       } catch (error) {
//         console.log("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const formatCsvData = (data) => {
//     // Format the user data into CSV format
//     const csvData = [["Name", "Email"]]; // CSV header
//     data.forEach((user) => {
//       csvData.push([user.name, user.email]); // CSV row
//     });
//     return csvData;
//   };

//   const handleGenerateCsvUrl = () => {
//     const csvContent = formatCsvData(users)
//       .map((row) => row.join(","))
//       .join("\n");
//     const csvBlob = new Blob([csvContent], { type: "text/csv" });
//     const csvUrl = URL.createObjectURL(csvBlob);
//     setCsvUrl(csvUrl);
//   };

//   const handleSendEmail = () => {
//     const userEmail = auth.currentUser?.email;

//     if (userEmail) {
//       // Send email with CSV attachment
//       const emailSubject = "User Data CSV";
//       const emailBody = `Please find the attached CSV file containing user data.`;
//       const emailLink = `mailto:${userEmail}?subject=${encodeURIComponent(
//         emailSubject
//       )}&body=${encodeURIComponent(emailBody)}`;
//       window.open(emailLink);
//     }
//   };

//   return (
//     <div>
//       <h1>User Data Export</h1>
//       <button onClick={handleGenerateCsvUrl}>Generate CSV</button>
//       {csvUrl && (
//         <>
//           <CSVLink data={csvData} filename={"users.csv"} target="_blank">
//             Download CSV
//           </CSVLink>
//           <button onClick={handleSendEmail}>Send CSV via Email</button>
//           <input
//             type="text"
//             value={csvUrl}
//             readOnly
//             onClick={(e) => e.target.select()}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default ExportUsers;