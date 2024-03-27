// import React, { useState } from "react";
// import SignInScreen from "../SignInScreen/SignInScreen";
// import "./LoginScreen.css";

// const LoginScreen = () => {
//   const [signIn, setSignIn] = useState(false);

//   return (
//     <div className="loginScreen">
//       <div className="loginScreen__background">
//         <img
//           className="loginScreen_logo"
//           src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
//           alt=""
//         />
//         <button className="loginScreen__button" onClick={() => setSignIn(true)}>
//           Sign In
//         </button>

//         <div className="loginScreen__gradient" />
//       </div>

//       <div className="loginScreen__body">
//         {signIn ? (
//           <SignInScreen />
//         ) : (
//           <>
//             <h1>Unlimited movies, TV shows and more.</h1>
//             <h2>Watch anywhere. Cancel anytime.</h2>
//             <h3>
//               Ready to watch? Enter your email to create or restart your
//               membership.
//             </h3>

//             <div className="loginScreen__input">
//               <form>
//                 <input type="email" placeholder="Email Address" />
//                 <button
//                   onClick={() => setSignIn(true)}
//                   className="loginScreen__getStarted"
//                 >
//                   GET STARTED
//                 </button>
//               </form>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginScreen;