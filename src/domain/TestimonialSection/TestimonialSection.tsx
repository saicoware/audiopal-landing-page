import femaleThumbNail from './images/female005.png';
import maleThumbNail from './images/male006.jpeg';

export default function TestimonialSection() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-6 sm:mt-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What Our Users Are Saying
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>
                  “Running a food business means juggling a million things at once. AudioPal has been an incredible
                  tool
                  for me and my team. We often use voice messages to communicate during busy hours, but keeping track
                  of
                  everything was always tricky. With AudioPal, I just send my voice notes to the bot and get a text
                  version in seconds. It’s super affordable, and I love that I only pay based on the audio length.
                  It’s
                  especially useful for organizing orders, team instructions, or feedback from customers. I’d
                  recommend
                  AudioPal to any business owner who needs quick, reliable transcriptions!”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  alt=""
                  src={femaleThumbNail}
                  className="h-14 w-14 rounded-full bg-gray-800"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Sofia Torres</div>
                  <div className="mt-1 text-gray-400">Food Business Owner</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div
            className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>
                  “AudioPal has been a game changer for me in my real estate business. I’m constantly on the go, and a
                  lot of my communication happens through voice messages on Telegram. Before, I used to spend so much
                  time manually typing out notes from my clients or instructions for my team. With AudioPal, that
                  hassle
                  is completely gone. Now, I simply forward voice messages to the bot, and within seconds, I have a
                  clean, accurate transcription that I can read or share easily. It’s saved me hours every week and
                  has
                  made organizing my conversations so much easier. The best part? The pricing is super affordable, and
                  I only pay for what I need. If you're in real estate, I can't recommend AudioPal enough!”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  alt=""
                  src={maleThumbNail}
                  className="h-14 w-14 rounded-full bg-gray-800"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Javier Ríos</div>
                  <div className="mt-1 text-gray-400">Real State Agent</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
)
}
