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
import {RiArrowLeftSLine} from "react-icons/ri";
import {RiArrowRightSLine} from "react-icons/ri";
import {FcWorkflow} from "react-icons/fc";
import {FcFlowChart} from "react-icons/fc";
import {PiFlower} from "react-icons/pi";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineArrowUp} from "react-icons/ai";
import {AiOutlineCalendar} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {IoNotificationsOutline} from "react-icons/io5";
import {IoNotificationsOffOutline} from "react-icons/io5";
import {GoLink} from "react-icons/go";


import {useState} from "react";


const items = [BsCameraVideo, BsPerson, BsFillGridFill, BsBookmark, BsCloud, BsDisplay, BsGear, FiPhoneCall,];

function App() {
    const [state, setState] = useState(2);
    const [stateMon, setStateMon] = useState(false);
    const [stateNot, setStateNot] = useState(true);
    return (<div className="bg-blue-50 w-full h-[100vh] flex">
        <div className="w-14 h-full px-1 py-2 ">
            <ul className="w-full h-full bg-gray-950 rounded-xl py-2">
                <li><BsVimeo className='w-6 h-6 text-gray-100 mt-1 mb-10 m-auto'/></li>
                {items.map((Icon, index) => (<li className="relative" onClick={() => {
                    setState(index)
                }}>
                    {index === state ? <BsPlayFill className={"w-5 h-5 absolute right-[-18px] mt-2"}/> : null}
                    <Icon
                        className={`w-8 h-8 p-2 text-gray-100 mb-10 m-auto hover:rounded-full hover:bg-blue-50 hover:text-gray-950 hover:p-1.5 cursor-pointer transition delay-75 duration-75 ease-in-out rounded-full ${state === index ? "rounded-full bg-blue-50 text-gray-950" : ''}`}/>
                </li>))}
                <li><FiLogOut
                    className='w-8 h-8 p-2 ml-2 text-white bottom-6 absolute hover:rounded-full hover:bg-blue-50 hover:text-gray-950 hover:p-1.5 cursor-pointer transition delay-75 duration-75 ease-in-out rounded-full'/>
                </li>
            </ul>
        </div>
        <div className='min-w-[950px] w-3/5 h-full ml-4 pt-3 space-y-5'>
            <div className='w-full h-1/5 bg-[#d5d0f0] rounded-xl relative drop-shadow-xl overflow-hidden'>
                <img className='absolute right-0 h-full rounded-r-lg w-52' src="/flower.png" alt=""/>

                <p className='text-[2.4em] pl-7  pt-2'>Work`s always better together</p>
                <div className='flex flex-row items-end mt-5 justify-between pr-48'>
                    <p className='ml-7 text-md inline-block'>Add teammates and you`ll be able to
                        collaborate <br/> and quickly get sense of what`s happening at work.</p>

                    <span
                        className='bg-gray-950 text-[#d5d0f0] drop-shadow-xl px-5 py-2 rounded-3xl ml-7 inline-flex items-center transition-all delay-100 duration-100 ease-in-out border cursor-pointer hover:bg-[#e7e4f8]  hover:text-gray-950 hover:border-gray-950 border-gray-950 '>
                    <AiOutlinePlusCircle className='w-5 h-5 inline mr-1.5 '/>
                            Add member

                </span>
                </div>
            </div>
            <div className='flex w-full h-2/6 space-x-3 '>
                <div className='w-3/6 h-full rounded-2xl bg-white drop-shadow-xl overflow-hidden0 flex flex-col'>
                    <p className='flex flex-row items-center justify-between font-bold px-4 py-3'>
                        <span className='text-lg'>Members</span>
                        <AiOutlinePlusCircle className='w-5 h-5 cursor-pointer'/>
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
                        <BsArrowRightShort className='w-6 h-6 cursor-pointer'/>
                    </p>

                    <p className='text-5xl mt-5'>10,4h</p>
                    <div className='flex justify-between mt-6 space-x-1'>


                        <div className='w-3/6'>
                            <div className='flex items-start h-full '>

                                <div className='w-0.5 h-full bg-gray-400 rounded-full'></div>
                                <span className='text-gray-400 text-xs  ml-0.5'>9h39m</span>
                            </div>
                            <div className='mt-0.5 w-full h-2 bg-black rounded-full'></div>
                            <p className='flex items-center mt-2'>
                                <div className='bg-gray-950 w-2 h-2 rounded '></div>
                                <span className='text-xs text-gray-950 ml-0.5'>+50%</span>
                            </p>
                        </div>


                        <div className='w-2/6'>
                            <div className='flex items-start h-full '>

                                <div className='w-0.5 h-full bg-gray-400 rounded-full'></div>
                                <span className='text-gray-400 text-xs  ml-0.5'>2h27m</span>
                            </div>
                            <div className='mt-0.5 w-full h-2 bg-purple-300 rounded-full'></div>
                            <p className='flex items-center mt-2'>
                                <div className='bg-purple-300 w-2 h-2 rounded '></div>
                                <span className='text-xs text-gray-950 ml-0.5'>+33%</span>
                            </p>
                        </div>

                        <div className='w-1/6 h-[9vh]'>
                            <div className='flex items-start h-full '>

                                <div className='w-0.5 h-full bg-gray-400 rounded-full'></div>
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
                <div className='w-1/6 rounded-2xl bg-white drop-shadow-xl '>
                    <p className='px-4 py-3'>Impact</p>
                    <div className='flex items-end space-x-4 bottom-5 absolute w-full h-full justify-center'>
                        <div className='w-1/5 h-2/5 bg-pink-100 rounded-lg'></div>
                        <div className='w-1/5 h-3/5 bg-purple-300 rounded-lg relative'>
                            <p className='bg-gray-950 text-white w-12 py-1 px-2 rounded-xl m-auto  text-xs absolute top-[-35px] left-[-5px]'>
                                <span className=''>+56%</span>
                                <RiArrowDownSFill
                                    className='w-7 h-7 absolute bottom-[-15px] text-gray-950 left-auto ring-auto'/>
                            </p>
                        </div>
                        <div className='w-1/5 h-3/6 bg-pink-100 rounded-lg'></div>
                    </div>

                </div>
            </div>
            <div className='w-full h-2/5 space-x-3 flex '>
                <div className='w-3/5 h-full bg-white rounded-2xl px-4 py-2 drop-shadow-xl'>
                    <div className='flex justify-between items-center'>
                        <span className='text-2xl'>Statistics</span>
                        <p className='space-x-1 text-sm bg-gray-200 pr-1 rounded-xl cursor-pointer'>
                            <button
                                className={`${stateMon ? '' : 'bg-gray-950 text-white rounded-xl px-1'} `}
                                onClick={() => {
                                    setStateMon(false)
                                }}>Weekly
                            </button>
                            <button className={`${stateMon ? 'bg-gray-950 text-white rounded-xl px-1' : ''} `}
                                    onClick={() => {
                                        setStateMon(true)
                                    }}>Monthly
                            </button>
                        </p>
                    </div>
                    <div className='flex items-end'>
                        <span className='text-[3.5em]'>49
                            <span className='text-gray-200 font-serif'>|</span>
                            83</span>
                        <p className='text-sm text-gray-400'>tasks complete</p>
                    </div>

                    <div className='flex justify-between space-x-3 mt-3'>
                        <div className='bg-gray-100 w-1/2 h-32 rounded-xl text-center'>
                            <FcWorkflow className='w-14 h-14 m-auto mt-1'/>
                            <p className='text-3xl'>23</p>
                            <p className='text-gray-500'>Project complete</p>
                        </div>
                        <div className='bg-gray-100 w-1/2 h-32 rounded-xl text-center'>
                            <FcFlowChart className='w-14 h-14 m-auto mt-1'/>
                            <p className='text-3xl'>23</p>
                            <p className='text-gray-500'>Project complete</p>
                        </div>


                    </div>

                </div>
                <div className='w-2/5 h-full space-y-5'>
                    <div
                        className="w-full h-2/6 bg-stone-800 rounded-2xl drop-shadow-xl relative px-3 box-border flex justify-center">
                        <div
                            className=' w-11/12 h-12 bg-white rounded-full py-1.5 px-3 absolute z-30 top-5 drop-shadow-lg flex items-center justify-between'>
                            <div className='flex items-center'>
                                <PiFlower className='bg-purple-200 w-7 h-7 rounded-full p-0.5 text-violet-500 '/>
                                <p className='text-sm ml-3'>Breakthrough Brainstorm <br/> <span
                                    className='text-xs text-stone-500'>12:45pm</span></p>
                            </div>
                            <div
                                className='p-0.5 rounded-full bg-gradient-to-bl  from-stone-900 via-stone-900 cursor-pointer'>

                                <AiOutlineClose className='p-1 w-6 h-6 bg-white rounded-full'/>
                            </div>

                        </div>
                        <div
                            className='w-10/12 h-12 bg-stone-300 rounded-full py-1.5 px-2 absolute z-20 top-8 drop-shadow-lg'>
                        </div>
                        <div className='w-9/12 h-12 bg-stone-400 rounded-full py-1.5 px-2 absolute z-10 top-10'>
                        </div>

                    </div>
                    <div className="w-full h-3/5 bg-white rounded-2xl drop-shadow-xl py-1 px-2.5 flex">
                        <img src="/2.png" alt="" className='w-1/3 h-full'/>
                        <div className='relative'>
                            <p className='text-3xl ml-6'>Unleash Your <br/> Potential</p>
                            <p className='text-md ml-6 text-stone-600 mt-2 lg:text-sm'>Indulge in the <br/>ultimate subscription
                            </p>

                            <button
                                className='flex justify-center drop-shadow-md items-center bg-violet-200 text-gray-950 py-1.5 px-2.5 rounded-2xl m-auto absolute bottom-2 left-5 transition-all delay-100 duration-100 ease-in-out border cursor-pointer hover:bg-gray-950  hover:text-violet-200 hover:border-violet-200'>
                                <AiOutlineArrowUp
                                    className='p-0.5 w-5 h-5 border-2 rounded-full border-stone-500'/>
                                <span className='ml-2 text-sm font-medium'>Upgrade plan</span>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className=' w-2/5 h-full pt-2 overflow-hidden'>
            <div className='h-auto w-full overflow-hidden'>
                <div className='flex justify-between items-center pl-8 pr-2'>
                    <p className='text-5xl font-medium'>May,2023</p>
                    <div className='flex justify-between items-center w-24 px-1 mr-5 '>
                        <button>
                            <RiArrowLeftSLine className='p-0.5 w-9 h-9 bg-white rounded-full drop-shadow-md hover:bg-stone-700 hover:text-white hover:drop-shadow-lg transition duration-75 delay-75 ease-in-out'/>
                        </button>
                        <button>
                            <RiArrowRightSLine className='p-0.5 w-9 h-9 bg-white rounded-full drop-shadow-md hover:bg-stone-700 hover:text-white hover:drop-shadow-lg transition duration-75 delay-75 ease-in-out'/>
                        </button>
                    </div>

                </div>
                <div className='pt-5 flex justify-between w-full px-7'>
                    <div className=' w-16 h-20 rounded-2xl text-white text-center py-3'>
                        <p className='text-stone-600'>Mon</p>
                        <p className='mt-2 font-bold text-black'>15</p>
                    </div>
                    <div className=' w-16 h-20 rounded-2xl text-white text-center py-3'>
                        <p className='text-stone-600'>Tue</p>
                        <p className='mt-2 font-bold text-black'>16</p>
                    </div>
                    <div className='bg-stone-700 w-16 h-20 rounded-2xl text-white text-center py-3 drop-shadow'>
                        <p className='font-extralight text-stone-300'>Wed</p>
                        <p className='mt-2 font-bold text-stone-100'>17</p>
                    </div>
                    <div className=' w-16 h-20 rounded-2xl text-white text-center py-3'>
                        <p className='text-stone-600'>Thu</p>
                        <p className='mt-2 font-bold text-black'>18</p>
                    </div>
                    <div className=' w-16 h-20 rounded-2xl text-white text-center py-3'>
                        <p className='text-stone-600'>Fri</p>
                        <p className='mt-2 font-bold text-black'>19</p>
                    </div>
                    <div className=' w-16 h-20 rounded-2xl text-white text-center py-3'>
                        <p className='text-stone-600'>Sat</p>
                        <p className='mt-2 font-bold text-black'>20</p>
                    </div>


                </div>
                <div className='ml-6 mt-2 overflow-hidden py-2 pl-2'>
                    <div className='flex items-center justify-between mr-10'>
                        <p className='text-3xl'>Last videos</p>
                        <button><AiOutlinePlusCircle className='w-8 h-8 p-1 bg-white rounded-full drop-shadow'/>
                        </button>
                    </div>
                    <div className='w-full h-52 flex  mt-2 space-x-3'>
                        <div className='bg-white min-w-[172px] w-48 p-2 rounded-2xl drop-shadow-lg'>
                            <div className='w-full h-28 relative'>
                                <img src="/video2.jpg" alt="" className='w-full h-full object-cover rounded-2xl z-0'/>
                                <span
                                    className='text-stone-100 absolute text-xs z-50 right-2 bottom-2 px-2 py-0.5 bg-gray-950 rounded-2xl'>4 min</span>
                            </div>
                            <p className='text-xs font-bold mt-1.5 px-0.5'>Brain Aneurysm Clipping with the Leica M530
                                OH6 Neurosurgical</p>
                            <div
                                className=' flex justify-between items-center w-full text-xs absolute bottom-2 left-0 px-2.5'>
                                <span className='flex text-stone-500 items-center'><AiOutlineCalendar
                                    className='w-5 h-4'/> Mar2</span>
                                <span className='flex text-stone-500 items-center'><AiOutlineEye className='w-5 h-4'/> 3</span>
                                <span className='flex text-stone-500 items-center'><FaRegComment className='w-5 h-4'/> 15</span>
                            </div>
                        </div>
                        <div className='bg-white min-w-[172px] w-48 p-2 rounded-2xl drop-shadow-lg'>
                            <div className='w-full h-28 relative'>
                                <img src="/video1.jpg" alt="" className='w-full h-full object-cover rounded-2xl z-0'/>
                                <span
                                    className='text-stone-100 absolute text-xs z-50 right-2 bottom-2 px-2 py-0.5 bg-gray-950 rounded-2xl'>4 min</span>
                            </div>
                            <p className='text-xs font-bold mt-1.5 px-0.5'>About the National Hospital for Neurology and
                                Neurosurgery</p>
                            <div
                                className=' flex justify-between items-center w-full text-xs absolute bottom-2 left-0 px-2.5'>
                                <span className='flex text-stone-500 items-center'><AiOutlineCalendar
                                    className='w-5 h-4'/> Mar2</span>
                                <span className='flex text-stone-500 items-center'><AiOutlineEye className='w-5 h-4'/> 3</span>
                                <span className='flex text-stone-500 items-center'><FaRegComment className='w-5 h-4'/> 15</span>
                            </div>

                        </div>
                        <div className='bg-white min-w-[172px] w-48 p-2 rounded-2xl drop-shadow-lg'>
                            <div className='w-full h-28 relative'>
                                <img src="/video2.jpg" alt="" className='w-full h-full object-cover rounded-2xl z-0'/>
                                <span
                                    className='text-stone-100 absolute text-xs z-50 right-2 bottom-2 px-2 py-0.5 bg-gray-950 rounded-2xl'>4 min</span>
                            </div>
                            <p className='text-xs font-bold mt-1.5 px-0.5'>Brain Aneurysm Clipping with the Leica M530
                                OH6 Neurosurgical</p>
                            <div
                                className=' flex justify-between items-center w-full text-xs absolute bottom-2 left-0 px-2.5'>
                                <span className='flex text-stone-500 items-center'><AiOutlineCalendar
                                    className='w-5 h-4'/> Mar2</span>
                                <span className='flex text-stone-500 items-center'><AiOutlineEye className='w-5 h-4'/> 3</span>
                                <span className='flex text-stone-500 items-center'><FaRegComment className='w-5 h-4'/> 15</span>
                            </div>
                        </div>
                        <div className='bg-white min-w-[172px] w-48 p-2 rounded-2xl drop-shadow-lg'>
                            <div className='w-full h-28 relative'>
                                <img src="/video1.jpg" alt="" className='w-full h-full object-cover rounded-2xl z-0'/>
                                <span
                                    className='text-stone-100 absolute text-xs z-50 right-2 bottom-2 px-2 py-0.5 bg-gray-950 rounded-2xl'>4 min</span>
                            </div>
                            <p className='text-xs font-bold mt-1.5 px-0.5'>About the National Hospital for Neurology and
                                Neurosurgery</p>
                            <div
                                className=' flex justify-between items-center w-full text-xs absolute bottom-2 left-0 px-2.5'>
                                <span className='flex text-stone-500 items-center'><AiOutlineCalendar
                                    className='w-5 h-4'/> Mar2</span>
                                <span className='flex text-stone-500 items-center'><AiOutlineEye className='w-5 h-4'/> 3</span>
                                <span className='flex text-stone-500 items-center'><FaRegComment className='w-5 h-4'/> 15</span>
                            </div>

                        </div>


                    </div>
                </div>


            </div>
            <div className='h-full w-full pt-1.5 px-10'>
                <div className='flex justify-between items-center'>
                    <p className='text-2xl'>Notification</p>
                    <div className='flex items-center justify-between bg-white rounded-2xl p-0.5 drop-shadow cursor-pointer'>
                        <IoNotificationsOutline
                            className={`w-7 h-7 p-1.5 ${stateNot ? '' : 'bg-gray-950 text-white rounded-full'}`}
                            onClick={() => {
                                setStateNot(false)
                            }}/>
                        <IoNotificationsOffOutline
                            className={`w-7 h-7 p-1.5 ${stateNot ? 'bg-gray-950 text-white rounded-full' : ''}`}
                            onClick={() => {
                                setStateNot(true)
                            }}/>
                    </div>
                </div>
                <div className='w-full border-b space-x-3 text-gray-700 py-1 text-sm'>
                    <span className='text-black font-bold border-b-2 border-violet-400 py-1.5'>Overview</span>
                    <span>Shared</span>
                    <span>Comments</span>
                </div>
                <div className='w-full h-20 rounded-2xl bg-white mt-2.5 drop-shadow-lg'>
                    <div className='flex items-start relative py-2 px-3 space-x-3 justify-between'>

                        <img src="/profile2.jpg" alt="" className='w-11 h-11 object-cover rounded-full'/>
                        <p className='text-[0.9em]'>Jennifer Campbell Invites You to a Call: 'Personal Development
                            Strategies'</p>
                        <button className='bg-gray-950 text-white px-2 py-0.5 rounded-2xl text-xs flex items-center'>
                            <GoLink className='mr-1'/> Link
                        </button>
                    </div>

                    <div className='w-full absolute bottom-2 left-0 text-xs flex justify-between px-4 text-stone-500'>
                        <span>Invite</span>
                        <span>30 min ago</span>

                    </div>
                </div>
                <div className='w-full h-20 rounded-2xl bg-white mt-2.5 drop-shadow-lg'>
                    <div className='flex items-start relative py-2 px-3 space-x-3 justify-between'>

                        <img src="/profile2.jpg" alt="" className='w-11 h-11 object-cover rounded-full'/>
                        <p className='text-[0.9em]'>Sarah Thompson Left a Comment on Your Video: 'Mastering the Art of
                            Photography'</p>
                        <button className='bg-gray-950 text-white px-2 py-0.5 rounded-2xl text-xs flex items-center'>
                            <GoLink className='mr-1'/> Link
                        </button>
                    </div>

                    <div className='w-full absolute bottom-2 left-0 text-xs flex justify-between px-4 text-stone-500'>
                        <span>Comment</span>
                        <span>1 hour ago</span>

                    </div>
                </div>
                <div className='w-full h-20 rounded-2xl bg-white mt-2.5 drop-shadow-lg'>
                    <div className='flex items-start relative py-2 px-3 space-x-3 justify-between'>

                        <img src="/profile2.jpg" alt="" className='w-11 h-11 object-cover rounded-full'/>
                        <p className='text-[0.9em]'>Daniel Turner Watched Your Video: 'Cooking with Passion'</p>
                        <button className='bg-gray-950 text-white px-2 py-0.5 rounded-2xl text-xs flex items-center'>
                            <GoLink className='mr-1'/> Link
                        </button>
                    </div>

                    <div className='w-full absolute bottom-2 left-0 text-xs flex justify-between px-4 text-stone-500'>
                        <span>Viewing</span>
                        <span>1 day ago</span>

                    </div>
                </div>

            </div>


        </div>

    </div>);
}

export default App;
