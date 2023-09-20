import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Custom Software Development:',
    description:
      'We create unique software applications to meet your business needs.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Web Development:',
    description: 'Get responsive, user-friendly websites and web apps.',
    icon: LockClosedIcon,
  },
  {
    name: 'Mobile App Development:',
    description: 'Reach your audience on iOS and Android with our mobile app expertise.',
    icon: ServerIcon,
  },
  {
    name: 'E-commerce Solutions:',
    description: 'Enhance online sales with secure and scalable e-commerce solutions.',
    icon: CloudArrowUpIcon,
  },
   {
    name: 'Cloud Services:',
    description: 'Optimize your operations with cloud computing solutions.',
    icon: ServerIcon,
  },
   {
    name: 'Digital Transformation: ',
    description: 'Stay competitive with our tech-driven consultancy.',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-black">We Deliver</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Beyond Expectations </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ready to take your business to the next level? Contact us today to discuss your project, request a quote, or learn more about how our software services can benefit your organization.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-black" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
           <div style={{ backgroundColor: 'black', textAlign: 'center', padding: '30px', borderRadius:'2%' }}>
         <p className=" mb-6 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl d">Modern Tech Stacks</p>
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
  )
}
