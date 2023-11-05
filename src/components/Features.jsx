

const features = [
  {
    name: 'Custom Software Development:',
    description: 'We create unique software applications to meet your business needs.',
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/SoftwareDev.svg?alt=media&token=da24ea53-690e-4711-ac14-be656dcbecf5&_gl=1*1hvuh4v*_ga*MjEwMzQ1MzMzNy4xNjk9MTQ0*_ga_CW55HF8NVT*MTY5OTE0MDE0NC4xLjEuMTY5OTE0MDg2Ni42MC4wLjA.',
    hiddenOnDesktop: false,
  },
  {
    name: 'Web Development:',
    description: 'Get responsive, user-friendly websites and web apps crafted to meet your specific business needs.',
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/WebDev.svg?alt=media&token=2d428f32-df29-488b-889f-bb42279d2d35&_gl=1*1twvfd6*_ga*MjEwMzQ1MzMzNy4xNjk9MTQ0*_ga_CW55HF8NVT*MTY5OTE0MDE0NC4xLjEuMTY5OTE0MDkxNS4xMS4wLjA.',
    hiddenOnDesktop: false,
  },
  {
    name: 'Mobile App Development:',
    description: 'Reach your audience on iOS and Android with our mobile app expertise.',
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/MobileDev.svg?alt=media&token=9458dcb0-682a-4394-a992-a737644d17b0&_gl=1*5bqi0v*_ga*MjEwMzQ1MzMzNy4xNjk9MTQ0*_ga_CW55HF8NVT*MTY5OTE0MDE0NC4xLjEuMTY5OTE0MDk0OC42MC4wLjA.',
    hiddenOnDesktop: false,
  },
  {
    name: 'E-commerce Solutions:',
    description: 'Enhance online sales with secure and scalable e-commerce solutions.',
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/Ecom.svg?alt=media&token=a86d8b26-822b-4a74-b146-aed2f65796d0&_gl=1*618b6s*_ga*MjEwMzQ1MzMzNy4xNjk9MTQ0*_ga_CW55HF8NVT*MTY5OTE0MDE0NC4xLjEuMTY5OTE0MDk4Ny4yMS4wLjA.',
    hiddenOnDesktop: true,
  },
  {
    name: 'Cloud Services:',
    description: 'Optimize your operations with cloud computing solutions, streamlining efficiency and scalability for your business.',
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/Cloud.svg?alt=media&token=f373b45d-8e02-401a-b7e7-fc88b8989d6d&_gl=1*f55fwf*_ga*MjEwMzQ1MzMzNy4xNjk9MTQ0*_ga_CW55HF8NVT*MTY5OTE0MDE0NC4xLjEuMTY5OTE0MTAxNS42MC4wLjA.',
    hiddenOnDesktop: true,
  },
  {
    name: 'Digital Transformation: ',
    description: 'Stay competitive with our tech-driven consultancy, empowering your business to thrive in the digital age.',
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/Dtrans.svg?alt=media&token=5be53d26-7178-4a7b-bc28-fbf82826191b&_gl=1*159xask*_ga*MjEwMzQ1MzMzNy4xNjk9MTQ0*_ga_CW55HF8NVT*MTY5OTE0MDE0NC4xLjEuMTY5OTE0MTA1OC4xNy4wLjA.',
    hiddenOnDesktop: true,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-black">We Deliver</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Beyond Expectations</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ready to take your business to the next level? Contact us today to discuss your project, request a quote, or learn more about how our software services can benefit your organization.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className={`relative ${feature.hiddenOnDesktop ? 'hidden' : ''}`}>
                    <div className="flex items-center">
                      <div className="p-4 bg-gray-200 rounded-xl inline-block transition-transform transform hover:scale-110">
                        <img
                          src={feature.iconUrl}
                          alt={feature.name}
                          className="pl-4 w-12 h-12 text-black" // Adjust the icon size here
                        />
                        <div className="ml-4">
                          <dt className="font-semibold text-gray-900">{feature.name}</dt>
                          <dd>{feature.description}</dd>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div style={{ backgroundColor: 'black', textAlign: 'center', padding: '30px', borderRadius: '2%' }}>
            <p className="mb-6 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Modern Tech Stacks</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/techs.webp?alt=media&token=30a64fbc-f273-441d-8516-a84bd0c0b1a1"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
