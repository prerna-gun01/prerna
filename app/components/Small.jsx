"use client"
import React, { useState } from 'react'
import Style from "../../css/home.module.css"
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaBehance } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Image from 'next/image';
const Page = () => {



  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    service: '',
  })


  const handleSubmitt = async (e) => {
    e.preventDefault();
    let toastId = null;
    console.log(formdata);
    try {
      toastId = toast.loading('Submitting...', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formdata),
      })
      console.log(response);
      if (response.ok) {
        toast.update(toastId, {
          render: 'Information Submitted successfully',
          type: 'success', // Use lowercase 'success' for react-toastify
          isLoading: false,
          autoClose: 3000,
        });
        setFormdata({
          name: '',
          surname: '',
          email: '',
          message: '',
          phone: '',
          service: '',
        })
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={`${Style.backgroundimageSmall} bg-gray-800 `}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container px-5 pt-10 pb-5">
        <div className={``}>

          <div className="">

            {/* About me */}
            <div className={`text-white p-1 text-center md:text-left backdrop-blur-md md:p-5 mb-5  ${Style.border} ${Style.bordercontainer}`}>

              <div className="">
                <div className={`mx-auto w-max my-2 `}>
                  <Image height={1000} width={1000}  src="/me.png" alt="" className='w-24' />
                </div>
                <div className={` text-center h-fit mb-1 `}>
                  I am <span className='text-lg font-semibold'>Prerna Kangtani</span>
                </div>
                <div className={` h-fit mb-2 `}>
                  <span className={`font-bold`}>Website Developer <br />Web Designer</span>
                  <br />
                  <span className={`text-sm px-10`}>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people.</span>
                </div>
              </div>
            </div>


            {/* Contact me */}
            <div className={`text-white p-1 text-center md:text-left md:p-5 backdrop-blur-md mb-5 md:rounded-lg  ${Style.border} ${Style.bordercontainer}`}>
              <div className={`text-center h-fit mb-2 p-1 ${Style.texth} font-semibold`}>
                Contact Me
              </div>
              {/* <div className={`${Style.border} ${Style.borderinner} text-center h-fit mb-2 p-2 ${Style.textp}`}>
                                I design and code beautifully simple things and I love what I do. Just simple like that!
                            </div> */}

              <div className='h-fit'>

                <div className="">

                  <div className={` ${Style.textp} grid grid-cols-2`}>
                    <Link href="tel:+918767322683" className="p-2">
                      <div className='text-gray-300'>
                        <FiPhoneCall className='inline' /> <span> Phone</span>
                      </div>
                      <div>8767322683</div>
                    </Link>
                    <Link href="mailto:prean14012003@gmail.com" className="p-2">
                      <div className='text-gray-300'>
                        <MdOutlineEmail className='inline' /> <span> Email</span>
                      </div>
                      <div className=''>prean14012003@gmail.com</div>
                    </Link>
                    {/* <div className="p-2 col-span-2">
                      <div className='text-gray-300'>
                        <IoLocationOutline className='inline' /> <span> Address</span>
                      </div>
                      <div className=''>2/32, Bohra Market, Ichalkaranji</div>
                    </div> */}
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="">
            {/* Skills */}
            <div className={`text-white p-1 text-center backdrop-blur-md md:text-left md:p-5 mb-5  ${Style.border} ${Style.bordercontainer}`}>

              <div className={`text-center ${Style.texth} font-semibold p-1`}>
                My Skills
              </div>
              <div className={`text-center ${Style.textp} p-1`}>
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
              </div>

              <div className="grid grid-cols-4 grid-rows-2 gap-4 p-2">
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <div className='flex justify-center pb-1'>
                    <Image height={1000} width={1000}  src='/JavaScript-logo.png' className="h-10" />
                  </div>
                  <div className={` ${Style.text} ${Style.text} `}>JavaScript</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <div className='flex justify-center '>
                    <Image height={1000} width={1000}  src='/pngegg.png' className="h-10" />
                  </div>

                  <div className={` ${Style.text} ${Style.text} `}>React JS</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <div className='flex justify-center '>
                    <Image height={1000} width={1000}  src='/next.svg' className="h-10" />
                  </div>

                  <div className={` ${Style.text} ${Style.text} `}>Next JS</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <div className='flex justify-center pb-1'>
                    <Image height={1000} width={1000}  src='/node-js.svg' className="h-10" />
                  </div>
                  <div className={` ${Style.text} ${Style.text} `}>Node JS</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <div className='flex justify-center pb-1'>
                    <Image height={1000} width={1000}  src='/HTML.png' className="h-10" />
                  </div>
                  <div className={` ${Style.text} ${Style.text} `}>HTML, CSS</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <div className='flex justify-center pb-1'>
                    <Image height={1000} width={1000}  src='/new-php-logo.svg' className="h-10" />
                  </div>
                  <div className={` ${Style.text} ${Style.text} `}>PHP</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <div className='flex justify-center pb-1'>
                    <Image height={1000} width={1000}  src='/1012821_code_development_logo_mysql_icon.png' className="h-10" />
                  </div>
                  <div className={` ${Style.text} ${Style.text} `}>MYSQL</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <div className='flex justify-center pb-1'>
                    <Image height={1000} width={1000}  src='/figma.svg' className="h-10" />
                  </div>
                  <div className={` ${Style.text} ${Style.text} `}>Figma</div>
                </div>

              </div>

            </div>


            {/* My Work */}
            <div className={`text-white p-1 text-center backdrop-blur-md md:text-left md:p-5 mb-5 md:rounded-lg  ${Style.border} ${Style.bordercontainer}`}>
              <div className={`text-center ${Style.texth} font-semibold p-1`}>
                My Work
              </div>
              <div className={`text-center ${Style.textp} p-1`}>
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
              </div>

              <div className="grid grid-cols-2 gap-4 p-1">
                <a href='https://mahalaxmibiogreen.com/' target='_blank' className={`${Style.border} ${Style.borderinner} cursor-pointer w-full`}>
                  <div className={` ${Style.text} p-1 mb-1`}>Shree Mahalxmi</div>
                  <Image height={1000} width={1000}  src="/shree.png" alt="" className='h-16 p-1 rounded-sm' />
                </a>
                <a href='https://trulygood.in/' target='_blank' className={`${Style.border} ${Style.borderinner} cursor-pointer w-full`}>
                  <div className={` ${Style.text} p-1 mb-1`}>Truly Good</div>
                  <Image height={1000} width={1000}  src="/trulyGood.png" alt="" className='h-16 p-1 rounded-sm' />
                </a>
                <a href='https://india-electricals.com/' target='_blank' className={`${Style.border} ${Style.borderinner} cursor-pointer w-full`}>
                  <div className={` ${Style.text} p-1 mb-1`}>India Electricals</div>
                  <Image height={1000} width={1000}  src="/indiaelectricals.png" alt="" className='h-16 p-1 rounded-sm' />
                </a>
                <a href='https://frontend-patronage.vercel.app/' target='_blank' className={`${Style.border} ${Style.borderinner} cursor-pointer w-full`}>
                  <div className={` ${Style.text} p-1 mb-1`}>Patronage</div>
                  <Image height={1000} width={1000}  src="/patronage.png" alt="" className='h-16 p-1 rounded-sm' />
                </a>
                {/* <a href='https://rojim.vercel.app/' target='_blank' className={`${Style.border} ${Style.borderinner} cursor-pointer w-full`}>
                  <div className={`${Style.text} p-1 mb-1`}>Portfolio</div>
                  <Image height={1000} width={1000}  src="/rojim.png" alt="" className='h-16  p-1 rounded-sm' />
                </a> */}
                <a href='http://irontribe.in' target='_blank' className={`${Style.border} ${Style.borderinner} cursor-pointer w-full`}>
                  <div className={` ${Style.text} p-1 mb-1`}>Iron Tribe</div>
                  <Image height={1000} width={1000}  src="/ironTribe.png" alt="" className='h-16 w-full p-1 rounded-sm' />
                </a>
                <a href='https://www.badrivishalgroup.com/' target='_blank' className={`${Style.border} ${Style.borderinner} cursor-pointer w-full`}>
                  <div className={`${Style.text} p-1 mb-1`}>Badri Vishal</div>
                  <Image height={1000} width={1000}  src="/badri.png" alt="" className='h-16 w-full p-1 rounded-sm' />
                </a>

              </div>

            </div>

            <div className={`text-white p-2 text-center ${Style.texth} font-semibold cursor-pointer mb-5 backdrop-blur-md  md:rounded-lg ${Style.border} ${Style.bordercontainer} ${Style.backgroundColor}`}>
              <a download href='/prerna_resume.pdf' >
                Download CV
              </a>
            </div>



          </div>

          <div className="">


            {/* My Experience */}
            <div className={`text-white p-1 text-center md:text-left md:p-5 backdrop-blur-md mb-5  ${Style.border} ${Style.bordercontainer}`}>
              <div className={`text-center ${Style.texth} font-semibold p-1`}>
                My Experience
              </div>
              <div className={`${Style.textp}`}>
                <div className="grid grid-cols-1 grid-rows-1  mb-2 mt-2">
                  <div className='flex justify-center'>
                    <span >2024 - Present</span>
                    <span className='pl-2 text-xs'>Jr. Developer, TF Strategies Pvt. Ltd</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 grid-rows-1  mb-2 mt-2">
                  <div className='flex justify-center'>
                    <span >2023 - 3 Months</span>
                    <span className='pl-2 text-xs'>Web Development Training, Acmegrade</span>
                  </div>
                </div>
                {/* <div className="grid grid-cols-1 grid-rows-1  mb-2 mt-2">
                  <div className='flex justify-center'>
                    <span >2022 - 2023</span>
                    <span className='pl-2 text-xs'>Research Associate, Ameliorate Digital</span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* education */}
            <div className={`text-white p-1 text-center md:text-left md:p-5 backdrop-blur-md mb-5  ${Style.border} ${Style.bordercontainer}`}>
              <div className={`text-center ${Style.texth} font-semibold p-1`}>
                My Education
              </div>
              <div className={`${Style.textp}`}>
                <div className="grid grid-cols-1 grid-rows-1  mb-2 mt-2">
                  <div className='flex justify-center'>
                    <span >2021 - 2024</span>
                    <span className='pl-2 text-xs'>Bachelor of Computer Application, Amity University Online</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 grid-rows-1  mb-2 mt-2">
                  <div className='flex justify-center'>
                    <span >2019 - 2021</span>
                    <span className='pl-2 text-xs'>EMHS Jr. College DKTE</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Form */}
            <div className={`text-white p-1 text-center md:text-left md:p-5 backdrop-blur-md mb-5 md:rounded-lg } `}>

              <div className={`text-center h-fit mb-2 p-1 ${Style.texth} font-semibold`}>
                Let us Work Together!
              </div>

              <div className='h-fit'>

                <div className="">

                  <div className={`${Style.border} ${Style.borderinner} `}>
                    <form onSubmit={handleSubmitt}>
                      <div className={`grid grid-cols-2 grid-rows-2 gap-1 ${Style.textp} p-2`}>


                        <div className={`${Style.line} p-1`}>
                          <input type="text" name='name' onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} placeholder='Name' className='w-full bg-transparent focus:outline-0' />
                        </div>
                        <div className={`${Style.line} p-1`}>
                          <input type="text" name='surname' onChange={(e) => setFormdata({ ...formdata, surname: e.target.value })} placeholder='Surname' className='w-full bg-transparent focus:outline-0' />
                        </div>
                        <div className={`${Style.line} p-1`}>
                          <input type="email" name='email' onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} placeholder='Email' className='w-full bg-transparent focus:outline-0' />
                        </div>
                        <div className={`${Style.line} p-1`}>
                          <input type="tel" name='phone' onChange={(e) => setFormdata({ ...formdata, phone: e.target.value })} placeholder='Tel No.' className='w-full bg-transparent focus:outline-0' />
                        </div>

                      </div>
                      <div className={`${Style.line} ${Style.textp} mx-2 p-1`}>
                        <select className='w-full bg-transparent focus:outline-none' defaultValue={'nothing'} onChange={(e) => setFormdata({ ...formdata, service: e.target.value })} name='service'>
                          <option value="nothing" className='bg-gray-600' disabled >Choose Service</option>
                          <option value="Web Designing" className='bg-gray-600'>Web Designing</option>
                          <option value="Web Development" className='bg-gray-600'>Web Development</option>

                        </select>
                      </div>
                      <div className={`${Style.line} ${Style.textp} mx-2 p-1`}>
                        <textarea rows="2" name='message' onChange={(e) => setFormdata({ ...formdata, message: e.target.value })} placeholder='Message' className='bg-transparent focus:outline-none w-full p-1'></textarea>
                      </div>
                      <div className={`${Style.line} ${Style.textp} text-center p-1 mx-2`}>
                        <button className='' type='submit'>Submit</button>
                      </div>
                    </form>
                  </div>

                </div>

              </div>
            </div>

            <div className={`text-white  mx-auto p-2 w-fit backdrop-blur-md mt-2  ${Style.border} ${Style.bordercontainer}`}>
              <a target='_blank' href='/prerna_resume.pdf' className={`text-center h-fit p-1 text-xs font-semibold inline-block cursor-pointer`}>
                Hire Me
              </a>
              {/* <a href="https://www.linkedin.com/in/prerna-kangtani-jain-584669224/" target='_blank'><FaLinkedin className='inline mx-2 cursor-pointer' /></a> */}
              <a href="https://www.linkedin.com/in/prerna-kangtani-jain-584669224/" target='_blank'><FaLinkedin className='inline mx-2 cursor-pointer' /></a>
              <a href="https://github.com/prerna-gun01" target='_blank'><VscGithub className='inline mx-2 cursor-pointer' /></a>
              {/* <FaBehance className='inline mx-2 cursor-pointer' /> */}
            </div>



          </div>

          {/* <footer className=" body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2  rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl text-white">SOL</span>
              </a>
              <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">SOL - 
                <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Designed and Developed by Prerna</a>
              </p>
              
            </div>
          </footer> */}

        </div>

      </div>

    </div>
  )
}

export default Page
