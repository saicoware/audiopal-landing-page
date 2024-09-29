const features = [
  {
    name: 'High-Accuracy Transcription.',
    description: 'Leverages advanced transcription technology to ensure precise conversion of voice notes to text.',
  },
  {
    name: 'Telegram Integration.',
    description: 'Works seamlessly within Telegram, allowing users to transcribe voice messages directly in the app.',
  },
  {
    name: 'Fast Turnaround Time.',
    description: 'Converts voice messages to text in seconds, so you never have to wait.',
  },
  {
    name: 'Supports Multiple Languages.',
    description: 'AudioPal can transcribe voice notes in different languages, including support for Mexico and The United States.',
  },
  {
    name: 'Secure and Private.',
    description: 'Audio data is handled confidentially, ensuring user privacy.',
  },
  {
    name: 'Affordable Pay-Per-Minute Pricing.',
    description: 'Pricing is transparent at 25 MXN or 1.25 USD per minute, with a maximum of 10 minutes per transcription.',
  },
  {
    name: 'No Character Limit.',
    description: 'Handles long voice notes up to the 10-minute limit.',
  },
  {
    name: 'Supports Various Voice Formats.',
    description: 'Compatible with different audio formats used in Telegram.',
  },
]

export default function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Makes AudioPal Stand Out?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            AudioPal offers fast, accurate transcription with features that make converting voice notes to text simple
            and secure. From high accuracy to multi-language support, AudioPal is designed to meet your transcription
            needs efficiently.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-100">{feature.name}</dt>
              <dd className="mt-1 text-gray-300">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
