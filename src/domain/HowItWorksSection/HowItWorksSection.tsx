import { DevicePhoneMobileIcon, SpeakerWaveIcon, WalletIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Open AudioPal in Telegram.',
    description:
      'No downloads or complicated setups are required. AudioPal works directly within Telegram, so you can start using it right away, whether you’re on mobile or desktop',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Send Your Voice Message.',
    description: 'Just forward or send your voice message to AudioPal, and the bot will start processing it immediately. It can handle messages in various formats and multiple languages, making it versatile for users everywhere.',
    icon: SpeakerWaveIcon,
  },
  {
    name: 'Pay for Your Transcription.',
    description: 'AudioPal will provide a secure payment link. Once you complete the payment, the text version of your voice message will be delivered instantly within the same Telegram conversation, ready for you to use.',
    icon: WalletIcon,
  },
]

export default function HowItWorksSection() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">How AudioPal Works</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Using AudioPal to convert your voice notes to text is simple and fast. Follow these easy steps to
                transcribe your Telegram messages and receive the text you need. Pay securely and get instant access
                to your transcription.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-500" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
