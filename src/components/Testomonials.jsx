import React from 'react';
import anisha from '../assets/avatar-anisha.png';
import ali from '../assets/avatar-ali.png';
import richard from '../assets/avatar-richard.png';

function Testomonials() {
  return (
    <div>
        <div class="container mx-auto mt-32 text-center">

        <h2 class="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">

          <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src={anisha} class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src={ali}  class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src={richard} class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        <div class="my-16">
          <a href="/s" class="p-3 px-6 pt-2 text-white
          bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a>
        </div>
    </div>
    </div>
  )
}

export default Testomonials
