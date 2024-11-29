import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'High-accuracy transcription',
  'Fast processing and text delivery',
  'Compatibility with Telegram and multiple audio formats',
  'Secure payment through a trusted processor',
  'Support for multiple languages, including Mexico and United States',
]

export default function PricingSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            With AudioPal, you only pay for what you use. Transcribe your voice notes quickly and affordably, with
            clear and transparent pricing. No hidden fees, no long-term commitments, just reliable transcription when
            you need it.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-800 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-100">Simple, No-Tricks Pricing</h3>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-slate-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-300">Pay per minute</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-100">$1.25</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  Start Transcribing Now
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Maximum of 10 minutes per transcription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
