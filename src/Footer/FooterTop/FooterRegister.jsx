export default function FooterRegister() {
  return (
    <div className="w-full z-50">
      <ul className="flex flex-col text-white/80 text-lg w-full gap-4 md:gap-8 justify-start">
        <li className="text-white font-titleFont">Company</li>
        <li className="hover:text-white cursor-pointer transition-all duration-200 hover:transition-all hover:duration-200">
          <a>Login</a>
        </li>
        <li className="hover:text-white cursor-pointer transition-all duration-200 hover:transition-all hover:duration-200">
          <a>Sign Up</a>
        </li>
        <li className="hover:text-white cursor-pointer transition-all duration-200 hover:transition-all hover:duration-200">
          <a>Privacy</a>
        </li>
        <li className="hover:text-white cursor-pointer transition-all duration-200 hover:transition-all hover:duration-200">
          <a>Products</a>
        </li>
      </ul>
    </div>
  );
}
