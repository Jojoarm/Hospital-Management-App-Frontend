import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="profile logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            vestibulum risus. Quisque vehicula enim eu mi laoreet finibus.
            Mauris at nulla ac ipsum volutpat blandit consectetur nec urna.
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain...
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+2348066825721</li>
            <li>devArmanicreates@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ DevArmani - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
