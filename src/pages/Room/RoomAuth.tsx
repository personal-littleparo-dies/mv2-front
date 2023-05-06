// import { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// function RoomAuth() {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [password, setPassword] = useState('');

//   function handleSubmit(event: any) {
//     event.preventDefault();

//     // Call the API endpoint to check the password
//     fetch('localhost:8000/auth', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.authenticated) {
//           navigate(`/room/${id}`);
//         } else {
//           alert('Invalid password!');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         alert('An error occurred while authenticating!');
//       });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default RoomAuth;
