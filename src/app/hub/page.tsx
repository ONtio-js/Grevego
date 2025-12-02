"use client";
import React from 'react'
import Image from 'next/image'
import Button from '../_components/Button';

const DashboardPage = () => {

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-20 px-5 lg:px-20">
      <div className="mt-20 md:mt-16 flex flex-col gap-4">
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-700">
          Welcome to Grevego Hub
        </h2>
        <p className="text-center text-gray-700 ">
          Manage your organic meal business with our comprehensive dashboard
          platform
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
            Select Your Role to Continue
          </h3>
          <p className="text-gray-700">Choose how you work with Grevego</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-300 p-10">
            <div className="rounded-full bg-primaryColor/10 p-4">
              <Image
                src="/home/icons/vendor.svg"
                alt="Vendor"
                width={32}
                height={32}
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-700">
              I am a Vendor
            </h4>
            <p className="max-w-[500px] text-center text-gray-700 ">
              Manage your inventory, track orders, and analyze sales
              performance.
            </p>
            <div className="mt-10 flex w-full flex-col gap-4">
              <Button title="Sign In" variant="secondary" onclick={() => ""} />
              <Button
                title="create account"
                variant="primary"
                onclick={() => ""}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-300 p-10">
            <div className="rounded-full bg-amber-100/20 p-4">
              <Image
                src="/home/icons/rider.svg"
                alt="Vendor"
                width={32}
                height={32}
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-700">
              I am a Rider
            </h4>
            <p className="text-gray-700 text-center">
              Manage deliveries, optimize routes, and track earnings.
            </p>
            <div className="mt-16 flex w-full flex-col gap-4">
              <Button title="Sign In" variant="secondary" onclick={() => ""} />
              <Button
                title="create account"
                variant="primary"
                onclick={() => ""}
                style="bg-amber-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2 my-10'>
        <h2 className='text-3xl font-semibold text-gray-700 capitalize'>need help?</h2>
        <p className='text-gray-700'>Reach out to our support team for quick assistance.</p>
        <div className='space-y-5 mt-5 flex flex-col items-center'>
          <p className='text-gray-700'>
            <span className='font-semibold'>Email us at: </span>
            <a href="mailto:support@grevego.com">grevegohq@gmail.com</a>
          </p>
          <p className='text-gray-700'>
            <span className='font-semibold'>or call:</span>{" "}
            <a href="tel:+2349053306268">+2349053306268</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage