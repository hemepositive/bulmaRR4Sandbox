// import React from "react";
// import { Link } from "react-router-dom";

// // class Authentication extends React.Component {
// //   state = { user: false };
// //   toggleUser() {
// //     this.setState({ user: !this.state.user });
// //   }
// //   render() {
// //     return <Navigation {...props} />;
// //   }
// // }

// const Navigation = props =>
//   props.user ? (
//     <NavigationAuth toggleUser={props.toggleUser} />
//   ) : (
//     <NavigationNonAuth toggleUser={props.toggleUser} />
//   );

// const NavigationAuth = props => (
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/meats">Meats</Link>
//     </li>
//     <li>
//       <Link to="/veggies">Veggies</Link>
//     </li>
//     <li>
//       <button onClick={props.toggleUser}>Sign In</button>
//     </li>
//   </ul>
// );

// const NavigationNonAuth = props => (
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <button onClick={props.toggleUser}>Sign In</button>
//     </li>
//   </ul>
// );

// export default Navigation;
