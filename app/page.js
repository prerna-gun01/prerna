"use client"
import React, { useState } from 'react'
import Style from "../css/home.module.css"
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaBehance } from "react-icons/fa6";

const Page = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(name, surname, message, service, email, phone);

    const formData = {
      name,
      surname,
      message,
      service,
      email,
      phone
    };

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  }

  return (
    <div className={`${Style.backgroundimage} bg-black`}>
      <div className="container px-5 pt-10 pb-5">
        <div className={`${Style.grid}`}>

          <div className="">
            <div className={`text-white p-1 text-center md:text-left backdrop-blur-md md:p-5 mb-5 ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>

              <div className="">
                <div className={`${Style.border} ${Style.borderinner} mx-auto w-max mb-2 `}>
                  <img src="./insan.png" alt="" />
                </div>
                <div className={`${Style.border} ${Style.borderinner} ${Style.texth} text-center h-fit mb-2 p-2`}>
                  I am SuKu
                </div>
                <div className={`${Style.border} ${Style.borderinner} h-fit mb-2 p-2`}>
                  <span className={`${Style.texth}`}>Graphic Designer <br />UX Designer</span>
                  <br />
                  <span className={`${Style.textp}`}>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people.</span>
                </div>
              </div>
            </div>

            <div className={`text-white p-1 text-center md:text-left backdrop-blur-md md:p-5 md:rounded-lg ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>
              <div className={`${Style.texth} text-center text-lg font-semibold p-1`}>
                My Education
              </div>
              <div className={`${Style.textp}`}>
                <div className="grid grid-cols-2 grid-rows-1 gap-2 mb-2 mt-2">
                  <div >2024 - Present Lead Developer Blockdots, London</div>
                  <div >2024 - Present Lead Developer Blockdots, London</div>
                </div>
                <div className="grid grid-cols-2 grid-rows-1 gap-2">
                  <div >2024 - Present Lead Developer Blockdots, London</div>
                  <div >2024 - Present Lead Developer Blockdots, London</div>
                </div>
              </div>
            </div>

          </div>

          <div className="">
            <div className={`text-white p-1 text-center backdrop-blur-md md:text-left md:p-5 mb-5 ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>

              <div className={`text-center ${Style.texth} font-semibold p-1`}>
                My Skills
              </div>
              <div className={`text-center ${Style.textp} p-1`}>
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
              </div>

              <div className="grid grid-cols-5 grid-rows-1 gap-4 p-2">
                <div className={`${Style.borderinner} ${Style.border} p-1 `}>
                  <img src='./next.svg' className="h-10" />
                  <div className={`${Style.border} ${Style.borderinset} ${Style.text} ${Style.text}`}>Photoshop</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <img src='./next.svg' className="h-10" />
                  <div className={`${Style.border} ${Style.borderinset} ${Style.text} ${Style.text}`}>Illustrator</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <img src='./next.svg' className="h-10" />
                  <div className={`${Style.border} ${Style.borderinset} ${Style.text} ${Style.text}`}>Aftereffect</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <img src='./next.svg' className="h-10" />
                  <div className={`${Style.border} ${Style.borderinset} ${Style.text} ${Style.text}`}>Premier Pro</div>
                </div>
                <div className={`${Style.borderinner} ${Style.border} p-2 `}>
                  <img src='./next.svg' className="h-10" />
                  <div className={`${Style.border} ${Style.borderinset} ${Style.text} ${Style.text}`}>3Ds Max</div>
                </div>

              </div>

            </div>

            <div className={`text-white p-1 text-center backdrop-blur-md md:text-left md:p-5 mb-5 md:rounded-lg ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>
              <div className={`text-center ${Style.texth} font-semibold p-1`}>
                My Quality Services
              </div>
              <div className={`text-center ${Style.textp} p-1`}>
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
              </div>
              <div className="p-1 grid grid-cols-3 gap-4">
                <div className={`${Style.border} ${Style.borderinner} ${Style.text} p-1 mb-1`}>Graphic Design</div>
                <div className={`${Style.border} ${Style.borderinner} ${Style.text} p-1 mb-1`}>Motion Graphics</div>
                <div className={`${Style.border} ${Style.borderinner} ${Style.text} p-1 mb-1`}>Video Editing</div>
                <div className={`${Style.border} ${Style.borderinner} ${Style.text} p-1 mb-1`}>Illustrations</div>
                <div className={`${Style.border} ${Style.borderinner} ${Style.text} p-1 `}>3D Models</div>
              </div>
            </div>

            <div className={`text-white p-1 text-center backdrop-blur-md md:text-left md:p-5 mb-5 md:rounded-lg ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>
              <div className={`text-center ${Style.texth} font-semibold p-1`}>
                My Work
              </div>
              <div className={`text-center ${Style.textp} p-1`}>
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
              </div>

              <div className="grid grid-cols-4 grid-rows-1 gap-4 p-1">
                <div className={`${Style.border} ${Style.borderinner}`}>
                  <img src="./Portfolio.png" alt="" className='h-16' />
                </div>
                <div className={`${Style.border} ${Style.borderinner}`}>
                  <img src="./Portfolio.png" alt="" className='h-16' />
                </div>
                <div className={`${Style.border} ${Style.borderinner}`}>
                  <img src="./Portfolio.png" alt="" className='h-16' />
                </div>
                <div className={`${Style.border} ${Style.borderinner}`}>
                  <img src="./Portfolio.png" alt="" className='h-16' />
                </div>
              </div>

            </div>

          </div>

          <div className="">
            <div className={`text-white p-1 text-center md:text-left md:p-5 backdrop-blur-md mb-5 ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>
              <div className={`text-center ${Style.texth} font-semibold p-1`}>
                My Experience
              </div>
              <div className={`${Style.textp}`}>
                <div className="grid grid-cols-2 grid-rows-1 gap-2 mb-2 mt-2">
                  <div >2024 - Present Lead Developer Blockdots, London</div>
                  <div >2024 - Present Lead Developer Blockdots, London</div>
                </div>
                <div className="grid grid-cols-2 grid-rows-1 gap-2">
                  <div >2024 - Present Lead Developer Blockdots, London</div>
                  <div >2024 - Present Lead Developer Blockdots, London</div>
                </div>
              </div>
            </div>

            <div className={`text-white p-2 text-center ${Style.texth} font-semibold cursor-pointer mb-5 backdrop-blur-md  md:rounded-lg ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>
              Download CV
            </div>

            

            <div className={`text-white p-1 text-center md:text-left md:p-5 backdrop-blur-md mb-5 md:rounded-lg ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>
              <div className={`text-center h-fit mb-2 p-1 ${Style.texth} font-semibold`}>
                Let us Work Together!
              </div>
              <div className={`${Style.border} ${Style.borderinner} text-center h-fit mb-2 p-2 ${Style.textp}`}>
                I design and code beautifully simple things and I love what I do. Just simple like that!
              </div>

              <div className='h-fit'>

                <div className="grid grid-cols-2 grid-rows-1 gap-2">

                  <div className={`${Style.border} ${Style.borderinner} `}>
                    <form onSubmit={handleFormSubmit}>
                      <div className={`grid grid-cols-2 grid-rows-2 gap-1 ${Style.textp} p-2`}>


                        <div className={`${Style.line} p-1`}>
                          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-full bg-transparent focus:outline-0' />
                        </div>
                        <div className={`${Style.line} p-1`}>
                          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='Surname' className='w-full bg-transparent focus:outline-0' />
                        </div>
                        <div className={`${Style.line} p-1`}>
                          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full bg-transparent focus:outline-0' />
                        </div>
                        <div className={`${Style.line} p-1`}>
                          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Tel No.' className='w-full bg-transparent focus:outline-0' />
                        </div>

                      </div>
                      <div className={`${Style.line} ${Style.textp} mx-2 p-1`}>
                        <select className='bg-transparent focus:outline-none' defaultValue={'nothing'} onChange={(e) => setService(e.target.value)}>
                          <option value="nothing" className='bg-gray-600' disabled >Choose Service</option>
                          <option value="Graphic Design" className='bg-gray-600'>Graphic Design</option>
                          <option value="Motion Graphics" className='bg-gray-600'>Motion Graphics</option>
                          <option value="Video Editing" className='bg-gray-600'>Video Editing</option>
                          <option value="Illustrations" className='bg-gray-600'>Illustrations</option>
                          <option value="3D Models" className='bg-gray-600'>3D Models</option>
                        </select>
                      </div>
                      <div className={`${Style.line} ${Style.textp} mx-2 p-1`}>
                        <textarea rows="2" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='bg-transparent focus:outline-none w-full p-1'></textarea>
                      </div>
                      <div className={`${Style.line} ${Style.textp} text-center p-1 mx-2`}>
                        <button className='' type='submit'>Submit</button>
                      </div>
                    </form>
                  </div>

                  <div className={`${Style.border} ${Style.borderinner} ${Style.textp}`}>
                    <div className="p-2">
                      <div className='text-gray-300'>
                        <FiPhoneCall className='inline' /> <span> Phone</span>
                      </div>
                      <div>7218863811</div>
                    </div>
                    <div className="p-2">
                      <div className='text-gray-300'>
                        <MdOutlineEmail className='inline' /> <span> Email</span>
                      </div>
                      <div className=''>suyashkumbhar77<br />@gmail.com</div>
                    </div>
                    <div className="p-2">
                      <div className='text-gray-300'>
                        <IoLocationOutline className='inline' /> <span> Address</span>
                      </div>
                      <div className=''>Nivara Colony, Bhosalewadi Kolhapur</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className={`text-white p-2 text-center ${Style.texth} font-semibold cursor-pointer  backdrop-blur-md  md:rounded-lg ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>
              Hire Me
            </div>

          </div>

        </div>
        <div className={`text-white  mx-auto p-2 w-fit backdrop-blur-md mt-2 ${Style.backgroundColor} ${Style.border} ${Style.bordercontainer}`}>
        <FaLinkedin className='inline mx-2 cursor-pointer'/>
        <VscGithub className='inline mx-2 cursor-pointer'/>
        <FaBehance className='inline mx-2 cursor-pointer'/>
        </div>
      </div>

    </div>
  )
}

export default Page
