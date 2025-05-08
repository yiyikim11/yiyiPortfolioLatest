import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-16 mb-16">
  <h2 className="text-4xl font-bold mb-4 text-center">Thanks for stopping by 👋</h2>
  <p className="text-xl text-gray-500 mb-6 text-center">
    Want to chat? Just shoot me a DM through email and I'll respond whenever I can.
  </p>

  <img
    className="pt-2 w-26 h-26"
    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzAxMzFsZ3A2Z2xobDU5ZDhxcWZ0MjZycWxtMGtoemZnb3V4ZzdvMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/xUA7bhnsHzkwUo6vtK/giphy.gif"
    alt="footerGif"
  />
  <p className='mt-8'>© 2025 yiyikim11@gmail.com <br /> <span className='ml-9'>All rights reserved</span> </p>
</footer>

  )
}

export default Footer;