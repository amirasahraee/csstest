import logo from './logo.svg';
import {BsVimeo} from "react-icons/bs";
import {BsCameraVideo} from "react-icons/bs";
import {BsPlayFill} from "react-icons/bs";
import {BsPerson} from "react-icons/bs";
import {BsFillGridFill} from "react-icons/bs";
import {BsBookmark} from "react-icons/bs";
import {BsCloud} from "react-icons/bs";
import {BsDisplay} from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs";
import {BsGear} from "react-icons/bs";
import {FiPhoneCall} from "react-icons/fi";
import {FiLogOut} from "react-icons/fi";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {RiArrowDownSFill} from "react-icons/ri";
import {FcWorkflow} from "react-icons/fc";
import {FcFlowChart} from "react-icons/fc";
import {useState} from "react";

const items = [
    BsCameraVideo,
    BsPerson,
    BsFillGridFill,
    BsBookmark,
    BsCloud,
    BsDisplay,
    BsGear,
    FiPhoneCall,
];

function App() {
    const [state, setState] = useState(2);
    return (<div className="bg-blue-50 w-full h-[100vh] flex">
        <div className="w-14 h-full px-1 py-4">
            <ul className="w-full h-full bg-gray-950 rounded-xl py-2">
                <li><BsVimeo className='w-6 h-6 text-gray-100 mt-1 mb-10 m-auto'></BsVimeo></li>
                {
                    items.map((Icon, index) => (<li className="relative"  onClick={()=>{
                        setState(index)
                    }}>
                        {index === state ? <BsPlayFill className={"w-5 h-5 absolute right-[-18px] mt-2"}/> : null
                        }
                        <Icon
                            className={`w-8 h-8 p-2 text-gray-100 mb-10 m-auto hover:rounded-full hover:bg-blue-50 hover:text-gray-950 cursor-pointer ${state === index ? "rounded-full bg-blue-50 text-gray-950" : ''}`}/>
                    </li>))
                }
                <li><FiLogOut
                    className='w-8 h-8 p-2 ml-2.5 text-white bottom-6 absolute hover:rounded-full hover:bg-blue-50 hover:text-gray-950 cursor-pointer'></FiLogOut>
                </li>
            </ul>
        </div>
        <div className='w-3/5 h-full p-5'>
            <div className='w-full h-36 bg-[#d5d0f0] rounded-xl relative drop-shadow-xl overflow-hidden'>
                <img className='absolute right-0 h-full rounded-r-lg w-52' src="/flower.png" alt=""/>

                <p className='text-[2.4em] pl-7  pt-2'>Work`s always better together</p>
                <div className='flex flex-row items-center mt-3 justify-between pr-48'>
                    <p className='ml-7 text-md inline-block'>Add teammates and you`ll be able to
                        collaborate <br/> and quickly get sense of what`s happening at work.</p>

                    <span
                        className='bg-gray-950 text-[#d5d0f0] px-5 py-2 rounded-3xl ml-7 inline-flex items-center  cursor-pointer '>
                    <AiOutlinePlusCircle className='w-5 h-5 text-[#d5d0f0] inline mr-1.5 '></AiOutlinePlusCircle>
                            Add member

                </span>
                </div>
            </div>
            <div className='flex w-full h-60 mt-5 space-x-3 '>
                <div className='w-3/6 h-60 rounded-2xl bg-white drop-shadow-xl overflow-hidden0 flex flex-col'>
                    <p className='flex flex-row items-center justify-between font-bold px-4 py-3'>
                        <span className='text-lg'>Members</span>
                        <AiOutlinePlusCircle className='w-5 h-5 cursor-pointer'></AiOutlinePlusCircle>
                    </p>

                    <div
                        className='px-3 mt-2 grid grid-flow-row grid-cols-3 gap-4 overflow-y-scroll h-fit  custom-scroll'>
                        <div className='w-full'>
                            <img className='rounded-full h-20 w-20 object-cover m-auto' src="/profile1.jpg" alt=""/>
                            <p className='text-[0.9em] text-center mt-2 leading-none'>Alex <br/>Johnson</p>
                        </div>
                        <div className='w-full'>
                            <img className='rounded-full h-20 w-20 object-cover m-auto' src="/profile1.jpg" alt=""/>
                            <p className='text-[0.9em] text-center mt-2 leading-none'>Alex <br/>Johnson</p>
                        </div>
                        <div className='w-full'>
                            <img className='rounded-full h-20 w-20 object-cover m-auto' src="/profile1.jpg" alt=""/>
                            <p className='text-[0.9em] text-center mt-2 leading-none'>Alex <br/>Johnson</p>
                        </div>
                        <div className='w-full'>
                            <img className='rounded-full h-20 w-20 object-cover m-auto' src="/profile1.jpg" alt=""/>
                            <p className='text-[0.9em] text-center mt-2 leading-none'>Alex <br/>Johnson</p>
                        </div>
                        <div className='w-full'>
                            <img className='rounded-full h-20 w-20 object-cover m-auto' src="/profile1.jpg" alt=""/>
                            <p className='text-[0.9em] text-center mt-2 leading-none'>Alex <br/>Johnson</p>
                        </div>
                        <div className='w-full'>
                            <img className='rounded-full h-20 w-20 object-cover m-auto' src="/profile1.jpg" alt=""/>
                            <p className='text-[0.9em] text-center mt-2 leading-none'>Alex <br/>Johnson</p>
                        </div>
                        <div className='w-full'>
                            <img className='rounded-full h-20 w-20 object-cover m-auto' src="/profile1.jpg" alt=""/>
                            <p className='text-[0.9em] text-center mt-2 leading-none'>Alex <br/>Johnson</p>
                        </div>
                        <div className='w-full'>
                            <img className='rounded-full h-20 w-20 object-cover m-auto' src="/profile1.jpg" alt=""/>
                            <p className='text-[0.9em] text-center mt-2 leading-none'>Alex <br/>Johnson</p>
                        </div>


                    </div>
                </div>
                <div className='w-2/6 rounded-2xl bg-white drop-shadow-xl px-4 py-3'>
                    <p className='flex justify-between items-center'>
                        <span>Data</span>
                        <BsArrowRightShort className='w-6 h-6 cursor-pointer'></BsArrowRightShort>
                    </p>

                    <p className='text-5xl mt-5'>10,4h</p>
                    <div className='flex justify-between mt-6 space-x-1'>


                        <div className='w-3/6'>
                            <div className='flex items-start '>

                                <div className='w-0.5 h-14 bg-gray-400 rounded-full'></div>
                                <span className='text-gray-400 text-xs  ml-0.5'>9h39m</span>
                            </div>
                            <div className='mt-0.5 w-full h-2 bg-black rounded-full'></div>
                            <p className='flex items-center mt-2'>
                                <div className='bg-gray-950 w-2 h-2 rounded '></div>
                                <span className='text-xs text-gray-950 ml-0.5'>+50%</span>
                            </p>
                        </div>


                        <div className='w-2/6'>
                            <div className='flex items-start '>

                                <div className='w-0.5 h-14 bg-gray-400 rounded-full'></div>
                                <span className='text-gray-400 text-xs  ml-0.5'>2h27m</span>
                            </div>
                            <div className='mt-0.5 w-full h-2 bg-purple-300 rounded-full'></div>
                            <p className='flex items-center mt-2'>
                                <div className='bg-purple-300 w-2 h-2 rounded '></div>
                                <span className='text-xs text-gray-950 ml-0.5'>+33%</span>
                            </p>
                        </div>

                        <div className='w-1/6'>
                            <div className='flex items-start '>

                                <div className='w-0.5 h-14 bg-gray-400 rounded-full'></div>
                                <span className='text-gray-400 text-xs  ml-0.5'>42m</span>
                            </div>
                            <div className='mt-0.5 w-full h-2 bg-pink-100 rounded-full'></div>
                            <p className='flex items-center mt-2'>
                                <div className='bg-pink-100 w-2 h-2 rounded '></div>
                                <span className='text-xs text-gray-950 ml-0.5'>+17%</span>
                            </p>
                        </div>
                    </div>

                </div>
                <div className='w-1/6 rounded-2xl bg-white drop-shadow-xl px-4 py-3'>
                    <p>Impact</p>

                    <p className='bg-gray-950 text-white w-12 py-1 px-2 rounded-xl mt-8 m-auto  text-xs relative'>
                        <span className=''>+56%</span>
                        <RiArrowDownSFill
                            className='w-7 h-7 absolute bottom-[-15px] text-gray-950 left-auto ring-auto'></RiArrowDownSFill>

                    </p>
                    <div className='flex items-end space-x-3 bottom-5 absolute'>
                        <div className='w-6 h-16 bg-pink-100 rounded-lg'></div>
                        <div className='w-6 h-28 bg-purple-300 rounded-lg'></div>
                        <div className='w-6 h-20 bg-pink-100 rounded-lg'></div>
                    </div>

                </div>
            </div>

            <div className='w-full h-80 mt-5 space-x-1 flex'>
                <div className='w-3/5 h-full bg-white rounded-2xl px-4 py-2 drop-shadow-xl'>
                    <div className='flex justify-between items-center'>
                        <span className='text-2xl'>Statistics</span>
                        <p className='space-x-1 text-sm bg-gray-200 pr-1 rounded-xl'><span
                            className='bg-gray-950 text-white rounded-xl px-1 cursor-pointer'>Weekly</span>
                            <span className=' cursor-pointer'>Monthly</span>
                        </p>
                    </div>
                    <div className='flex items-end mt-4'>
                        <p className='text-6xl'>49
                            <span className='text-gray-200 font-serif'>|</span>
                            83</p>
                        <p className='text-sm text-gray-400'>tasks complete</p>
                    </div>

                    <div className='flex justify-between space-x-3 mt-7'>
                        <div className='bg-gray-100 w-1/2 h-40 rounded-xl text-center'>
                            <FcWorkflow className='w-16 h-16 m-auto mt-5'></FcWorkflow>
                            <p className='text-3xl'>23</p>
                            <p className='text-gray-500'>Project complete</p>
                        </div>
                        <div className='bg-gray-100 w-1/2 h-40 rounded-xl text-center'>
                            <FcFlowChart className='w-16 h-16 m-auto mt-5'></FcFlowChart>
                            <p className='text-3xl'>23</p>
                            <p className='text-gray-500'>Project complete</p>
                        </div>


                    </div>

                </div>


            </div>
        </div>


    </div>);
}

export default App;
