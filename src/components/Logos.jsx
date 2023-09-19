

const Logos = () => {
  return (
    <footer className="bg-whiterounded-xl dark:bg-white m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/OneCrewLogo.png?alt=media&token=1c50235f-67f7-413b-a2fa-6434bdb4a5d8"
              className="h-8 mr-3"
              alt="OneCrewLogo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              OneCrew Technologies
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
        <span className="block text-sm text-black sm:text-center dark:text-black">
          © 2023{' '}
          <a href="#" className="hover:underline">
            OneCrew™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Logos;
