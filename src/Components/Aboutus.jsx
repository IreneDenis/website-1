// eslint-disable-next-line no-unused-vars
import React from 'react'
import AU from "../assets/Images/AU.jpg";
import { BackgroundImage, Text } from "@mantine/core";


const Aboutus = () => {
  return (
    <div className="flex  bg-slate-500 w-full h-screen ">
        <div className="flex flex-col absolute top-3 ">
           <div className='text-white flex flex-col justify-center items-center '>
              <Text className='flex underline '>ABOUT US</Text>
              <Text>WELCOME TO NAPPY SHOPPING CENTER</Text>
              <Text>
                 We deal with all products needed in the human environment and all these are safe for everyone. We consider all gender and all age of the people whether small or big we have all sizes available. We have Toys for the kids and the the todlers who are still growing. we have clothes of all kinds, we also have elecrtonic devices like phones and chargers.
               </Text>
               <Text>We are found all over the globe and in all countries we have stores, so we plead that you can shop physically so that you can experience shopping with us and actually see the location of our stores.</Text>
               <Text>You can also experience the fun in shopping with us through internet by using your mobile phone and an active internet connection </Text>
               <Text>You can find us anywhere! We welcome all to do shopping with us</Text>
               <Text className='underline'>Contact Us through: +25567 456 7834</Text>
           </div>
      </div>
        <BackgroundImage src={AU}>
        <div className="flex w-full h-full"></div>
      </BackgroundImage>
      
    </div>
  )
}

export default Aboutus