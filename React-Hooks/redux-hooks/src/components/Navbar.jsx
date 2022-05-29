


import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex">
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/new"}> New </Link>
      </div>
      <div>
        <Link to={"/home"}>Todos </Link>
      </div>
      <div><Link to={"/summary"}>Summary</Link></div>
    </div>
  );
};