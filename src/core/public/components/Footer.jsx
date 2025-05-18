const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 pb-6 text-sm text-gray-600 space-y-4 rounded-t-lg">
        <div className="flex flex-wrap justify-start items-center gap-4">
          <div className="flex items-center space-x-2">
            <img src="/Logo/paypal-logo2.png" alt="PayPal" className="w-40" />
          </div>
          <div className="flex flex-wrap gap-4 text-xl text-black">
            <a href="#" className="hover:underline">
              Help
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Security
            </a>
          </div>
        </div>

        <div className="text-xs text-gray-500">
          ©1999–2025 PayPal, Inc. All rights reserved. &nbsp;
          <a href="#" className="hover:underline">
            Privacy
          </a>{" "}
          ·
          <a href="#" className="hover:underline">
            Cookies
          </a>{" "}
          ·
          <a href="#" className="hover:underline">
            Legal
          </a>
        </div>

        <p className="text-xs text-gray-400">
          PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore as
          a Major Payment Institution under the Payment Services Act 2019.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
