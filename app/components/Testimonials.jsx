import Image from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autuplaySpeed: 2000,
        cssEase: "linear",
      };


  return (
    <div>
        
        <div className="text-center pb-[77px]">
          <h2 className="cookie text-[24px] max-md:text-[18px] theme-color py-[24px] capitalize">
            Our Customers
          </h2>
          <h1 className="w-[47%] leading-[55px] max-md:leading-[45px] max-md:w-[80%] text-5xl max-md:text-4xl justify-self-center font-medium font-serif">
            We provide good services with lots of facilities
          </h1>
        </div>

        <section className="w-[40%] max-md:w-[80%] pb-20 justify-self-center">
        <Slider {...settings}>
            
            <div className="text-center justify-self-center">
                <div className="text-[20px] text-gray-500">“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</div>
                <Image src={'/p-1.jpg'} width={80} height={90} alt="client" className="rounded-full w-[64px] h-[64px] justify-self-center mt-7 mb-2" />
                <h1 className="font-serif text-[18px] font-medium">Maxim Smith</h1>
                <h1 className="font-serif text-[14px] mt-1 text-gray-500">CEO, Founder</h1>
            </div>
            
            
            <div className="text-center justify-self-center">
                <div className="text-[20px] text-gray-500">“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</div>
                <Image src={'/p-2.jpg'} width={80} height={90} alt="client" className="rounded-full w-[64px] h-[64px] justify-self-center mt-7 mb-2" />
                <h1 className="font-serif text-[18px] font-medium">Maxim Smith</h1>
                <h1 className="font-serif text-[14px] mt-1 text-gray-500">CEO, Founder</h1>
            </div>
            
            
            <div className="text-center justify-self-center">
                <div className="text-[20px] text-gray-500">“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</div>
                <Image src={'/p-3.jpg'} width={80} height={90} alt="client" className="rounded-full w-[64px] h-[64px] justify-self-center mt-7 mb-2" />
                <h1 className="font-serif text-[18px] font-medium">Maxim Smith</h1>
                <h1 className="font-serif text-[14px] mt-1 text-gray-500">CEO, Founder</h1>
            </div>
            

        </Slider>
        </section>
      
    </div>
  )
}

export default Testimonials
