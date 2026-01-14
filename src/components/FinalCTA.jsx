import React from 'react'

export default function FinalCTA(){
  return (
    <section className="bg-offwhite rounded-3xl p-8 text-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Superpowers starting $9.99/month.</h3>
          <p className="text-sm text-[#6b6b6b] mt-1">Free for 7 days.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-3xl font-semibold">Try free</button>
          <button className="border border-black text-black px-6 py-3 rounded-3xl">Compare plans</button>
        </div>
      </div>
    </section>
  )
}
