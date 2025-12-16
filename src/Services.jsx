import React from 'react'

export const Services = () => {
  return (
    <section className='services'>
        <h1 className='servicesHeader'>
            our services
        </h1>
        <div className='servicesContainer'>
            <div className='smallContainer'>
                <i class="fa-solid fa-truck-fast"></i>
                <h1 className='smallContainerHeader'>Fast Delivery</h1>
                <p className='text'>Fast and reliable delivery services tailored to your needs.</p>
            </div>
            <div className='smallContainer'>
                <i class="fa-solid fa-rotate-left"></i>
                <h1 className='smallContainerHeader'>10 Days Replacement</h1>
                <p className='text'>Easy 10-day replacement policy ensures customer satisfaction and convenience.</p>
            </div>
            <div className='smallContainer'>
                <i class="fa-solid fa-headset"></i>
                <h1 className='smallContainerHeader'>24/7 Support</h1>
                <p className='text'>Round-the-clock support available to assist you anytime, anywhere.</p>
            </div>
        </div>

    </section>
  )
}
