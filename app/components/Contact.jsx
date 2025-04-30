"use client"


const Contact = () => {
    return (
        <div>
            <section className="w-[80%] justify-self-center">

            <div className='text-center'>
                <h2 className='cookie text-[24px] theme-color py-[24px] capitalize'>Contact Us</h2>
                <h1 className='w-[50%] text-5xl max-xl:text-4xl max-md:text-3xl max-xl:w-[80%] max-sm:text-2xl justify-self-center font-medium font-serif'>Get In Touch</h1>
            </div>

            <article className="justify-between w-[80%] my-15 justify-self-center flex flex-wrap">
                <input type="text" placeholder="Your Name" className="w-[49%] max-md:w-[100%] hover:border-2 hover:border-[][] bg-gray-100 my-2 py-[20px] px-[18px]" />
                <input type="email" placeholder="Email Address" className="w-[49%] bg-gray-100 max-md:w-[100%] my-2 py-[20px] px-[18px]" />
                <input type="number" placeholder="Phone Number" className="w-[49%] bg-gray-100 my-2 py-[20px] max-md:w-[100%] px-[18px]" />
                <input type="text" placeholder="Subject" className="w-[49%] bg-gray-100 my-2 py-[20px] px-[18px] max-md:w-[100%]" />
                <textarea type="text" placeholder="Your Message" className="w-[100%] h-[200px] resize-none bg-gray-100 my-2 py-[20px] px-[18px]" ></textarea>
            </article>
                <div className="text-center justify-items-center">

                <button type="submit" name="submit" className='bg-theme-color text-white uppercase font-bold text-sm px-[35px] mb-5 duration-200 py-[14px] cursor-pointer theme-btn' >Send Message</button>
                </div>

            </section>
                <article className="w-[99%] my-5 justify-self-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.621953488383!2d68.34924945!3d25.356442350000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c706e8c701a23%3A0xa06878d4ff6aaa7e!2sUnit%2010%20Latifabad%20Unit%2010%20Latifabad%2C%20Hyderabad!5e1!3m2!1sen!2s!4v1745755034344!5m2!1sen!2s" width="600" height="450" className="border-0 w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
        </div>
    )
}

export default Contact
