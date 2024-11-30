import { ClockIcon, ClipboardDocumentIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const primaryFeatures = [
  {
    name: 'Save Time',
    description:
      'Stop wasting time manually typing out your voice messages. With Audio Pal, you can convert voice to text instantly and move on to your next task.',
    href: '#',
    icon: ClockIcon,
  },
  {
    name: 'Stay Organized',
    description:
      'Turn important conversations into easy-to-read text so you can keep track of instructions, tasks, and discussions effortlessly.',
    href: '#',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Simple and Affordable',
    description:
      'At just 25 MXN or 1.25 USD per minute, Audio Pal offers a cost-effective solution to streamline your workflow without breaking the bank.',
    href: '#',
    icon: CurrencyDollarIcon,
  },
];

export default function BenefitsSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-500">Transcribe Faster</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything You Need to Convert Your Voice Notes to Text
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Audio Pal makes it easy to transform your Telegram voice messages into text, saving you time and helping you
          stay organized. With just a few steps, you’ll get accurate and quick transcriptions, so you can focus on what
          really matters.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {primaryFeatures.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                  <feature.icon aria-hidden="true" className="h-6 w-6 text-white"/>
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
