import { IoReorderThreeSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="py-6 px-10 font-semibold shadow-sm">
      <ul className="flex justify-around items-center ">
        <li>Home</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li>
          <IoReorderThreeSharp className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
