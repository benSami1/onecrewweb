import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Cutting-Edge Custom Solutions:',
    description:
      'Experience excellence with our top-tier company offering custom mobile applications. From healthcare to retail, our expertly crafted solutions meet diverse industry needs, ensuring your app outshines the competition.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Efficiency Meets User-Centric Design: ',
    description: 'Discover efficient, user-friendly mobile apps that excel. Our fusion of technical prowess and market insight results in products that satisfy tech requirements and captivate markets. Stand out and thrive in a competitive digital arena.',
    icon: LockClosedIcon,
  },
  {
    name: 'Diverse Development, Optimal Results:',
    description: 'Embrace Cordova, Xamarin, Flutter, and React Native expertise for iOS, Android, and cross-platform development. Collaborate with market analysts to pinpoint ideal channels and platforms. Elevate your brands reach with precision.',
    icon: ServerIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/mobiledoodle.png?alt=media&token=8a4a4099-8567-470e-be49-faa9bdfc1337"
            alt="Product screenshot"
            className="w-[30rem] max-w-nonesm:w-[57rem] md:-ml-4 lg:-ml-35"
            width={2432}
            height={1442}
          />
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-gray-600">Mobile App Development</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
