import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import data from '@/data/data.json'; // import your JSON

export default function Dashboard() {
    const [svgContent, setSvgContent] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    const matchDetails = data.matchDetails;
    const stands = data.stands;

    useEffect(() => {
        // Check if window is available (client-side)
        if (typeof window !== 'undefined') {
            // Set initial state
            setIsMobile(window.innerWidth < 768);
            
            // Add resize listener
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };
            
            window.addEventListener('resize', handleResize);
            
            // Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        fetch(
            'https://s3.1boxoffice.com/backend-uploads/stadium/maps/user-uploads/newcastle-united-st-james-park-svg-1696426294.svg'
        )
            .then((res) => res.text())
            .then((data) => {
                setSvgContent(data);
            });
    }, []);

    useEffect(() => {
        const buttons = document.querySelectorAll('.filter-btn');
      
        buttons.forEach(btn => {
          btn.addEventListener('click', () => {
            // Remove "active" class from all buttons
            buttons.forEach(b => b.classList.remove('active'));
      
            // Add "active" class to the clicked one
            btn.classList.add('active');
          });
        });
      
        // Cleanup on unmount
        return () => {
          buttons.forEach(btn => {
            btn.removeEventListener('click', () => {});
          });
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            
            {/* Main content - Flex column on mobile, row on desktop */}
            <div className={`flex ${isMobile ? 'flex-col relative' : 'h-[calc(100vh-64px)] flex-row-reverse'}`}>
                
                {/* Right Panel (SVG Map) - First on mobile */}
                <div className={`${isMobile ? 'w-full order-1 sticky top-0' : 'w-full'} bg-[#fcfcfc]`}>
                    <div className="filter-bar px-2 py-2">
                        <div className="relative h-12 flex p-2 gap-2 overflow-x-auto hide-scrollbar">
                            {/* Filter buttons */}
                            <button className="filter-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                                    <path fill-rule="evenodd"
                                        d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <button className="filter-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                                    <path
                                        d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z">
                                    </path>
                                </svg>
                            </button>

                            {/* Tickets Dropdown */}
                            {/* <select className="filter-select">
                                <option>Any amount</option>
                                {[...Array(20)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select> */}

                            {/* Filter Buttons */}
                            {/* <button className="filter-btn">Seated Together</button> */}
                            <button className="filter-btn">₹36,928 - ₹1,062,295</button>
                            <button className="filter-btn">Ticket Types</button>
                            <button className="filter-btn">Best Seats</button>
                            <button className="filter-btn">Away</button>
                            <button className="filter-btn">VIP</button>
                            <button className="filter-btn">Benches</button>
                            <button className="filter-btn">Behind The Goal</button>
                            <button className="filter-btn">Sections</button>
                        </div>
                    </div>

                    <div
                        className={`w-full p-4 ${isMobile ? 'h-[40vh]' : 'h-full p-10 max-h-[700px]'} max-w-[1200px] flex justify-center mx-auto`}
                        dangerouslySetInnerHTML={{ __html: svgContent }}
                    />
                </div>

                {/* Left Panel - Second on mobile */}
                <div className={`${isMobile ? 'w-full order-2 overflow-auto' : 'w-full border-r border-r-gray-100 max-w-[550px]'} flex flex-col`}>
                    {/* Match Details (fixed) */}
                    <div className="border-b border-b-gray-100 shrink-0 pt-4 px-6 pb-4">
                        <div className="h-5 flex justify-end gap-[1rem]">
                            <button type="button" tabIndex="0" aria-expanded="false" id="react-aria-«R5d8jmtrmqhnbH1»" className="p-0 flex items-center justify-center text-color-black bg-transparent cursor-pointer outline-none data-[pending=true]:opacity-50 data-[pending=true]:cursor-wait data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed size-5" data-rac="">
                                <svg xmlns="http://www.w3.org/2000/svg" id="heart" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20" height="20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                                </svg>
                            </button>
                            <button type="button" tabIndex="0" aria-expanded="false" id="react-aria-«R9d8jmtrmqhnbH1»" aria-label="Open Event Info" className="p-0 flex items-center justify-center text-color-black bg-transparent cursor-pointer outline-none data-[pending=true]:opacity-50 data-[pending=true]:cursor-wait data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed" data-rac="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20" height="20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className='block text-lg font-bold'>{matchDetails.teams}</p>
                        <p className='text-color-[#3b4148] text-[14px]'>{matchDetails.date}</p>
                        <p>{matchDetails.time}</p>
                    </div>

                    {/* Scrollable Stand List */}
                    <div className={` ${isMobile ? 'max-h-[60vh]' : 'flex-1 overflow-auto'}`}>
                        <div className="ListingGuarantee_container__J4rIl !border-0 flex items-center">
                            <svg width="40" height="40" viewBox="0 0 71 71" xmlns="http://www.w3.org/2000/svg" aria-label="seatpick guarantee">
                                <g fill="none" fillRule="evenodd">
                                    <path d="M27.461 8.836c2.519-3.276 7.49-3.27 10.001 0a6.323 6.323 0 007.15 2.082c3.901-1.406 8.08 1.264 8.416 5.364.22 2.72 2.197 4.98 4.878 5.584 4.047.91 6.11 5.396 4.155 9.026a6.202 6.202 0 001.063 7.314c2.908 2.939 2.197 7.817-1.423 9.821a6.219 6.219 0 00-3.097 6.721c.846 4.02-2.403 7.758-6.55 7.497-2.746-.169-5.283 1.45-6.268 3.996-1.477 3.834-6.249 5.237-9.598 2.795a6.333 6.333 0 00-7.45 0c-3.333 2.434-8.11 1.055-9.598-2.795-.982-2.547-3.522-4.165-6.266-3.996-4.139.258-7.393-3.466-6.552-7.497a6.22 6.22 0 00-3.094-6.721c-3.642-2.015-4.323-6.901-1.423-9.82a6.205 6.205 0 001.06-7.315c-1.958-3.633.111-8.114 4.155-9.026 2.681-.604 4.659-2.863 4.88-5.584.33-4.1 4.518-6.767 8.414-5.364a6.316 6.316 0 007.147-2.082z" fill="#043ADE" fillOpacity="0.1" fillRule="nonzero"></path>
                                    <g transform="translate(45.982 2)">
                                        <ellipse id="tick" stroke="#FFF" strokeWidth="3" fill="#47B009" cx="11.496" cy="12.514" rx="11.496" ry="12.514"></ellipse>
                                        <path d="M15.093 6.881c1.527 1.073 2.22 1.609 2.08 1.609l-7.15 9.345c.029-.156-1.116-1.227-3.433-3.215a.548.548 0 010-.758l1.558-1.608 1.66 1.712 4.834-6.483.45-.602z" fill="#FFF"></path>
                                    </g>
                                    <path id="ick" d="M17.517 39.009v-.037c0-4.543.958-8.887 2.702-12.877H45.67a32.495 32.495 0 011.497 4.175c-2.1.401-3.692 2.31-3.692 4.605 0 2.586 2.022 4.682 4.515 4.682.127 0 .253-.005.377-.016A32.032 32.032 0 0145.67 51.85H20.22a32.554 32.554 0 01-1.325-3.587c2.107-.395 3.706-2.308 3.706-4.607 0-2.586-2.021-4.683-4.515-4.683-.192 0-.383.013-.569.037z" fill="#043ADE" fillRule="nonzero"></path>
                                </g>
                            </svg>
                            <div className="ListingGuarantee_right__Fbt1F">
                                <div className="ListingGuarantee_title__LV4HA">Seatpick Vetted</div>
                                <div className="ListingGuarantee_text__jDud2">Every ticket is verified and covered by a 100% guarantee.</div>
                            </div>
                        </div>
                        <ul className="space-y-2 px-3 py-2">
                            {stands.map((stand) => (
                                <button
                                    key={stand.id}
                                    type="button"
                                    tabIndex="0"
                                    className="w-full h-full flex outline-none cursor-pointer group/listing p-3 ring-1 ring-gray-300 bg-white font-montserrat rounded-lg shadow-sm hover:shadow-lg transition mb-4"
                                >
                                    <div className="text-left w-full">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-stretch">
                                                <div className="min-w-[0%] flex-1 flex flex-col justify-center pr-4">
                                                    <div className="flex flex-col gap-2.5">
                                                        <div className="flex items-center font-montserrat gap-2">
                                                            <span className="min-w-4 h-4 px-1 flex items-center justify-center text-xs rounded text-white leading-none bg-green-600">
                                                                {stand.rating}
                                                            </span>
                                                            <span className="text-xs whitespace-nowrap text-green-600">
                                                                {stand.label}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <h3 className="text-base text-black font-semibold truncate m-0">
                                                                {stand.title}
                                                            </h3>
                                                            <div className="text-xs text-gray-600 m-0">{stand.ticketInfo}</div>
                                                        </div>
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            {stand.features.map((feature, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="h-6 px-2 flex items-center text-xs bg-gray-100 text-gray-600 rounded gap-1"
                                                                >
                                                                    {index === 0 ? "hi" : "good "}
                                                                    <span className="whitespace-nowrap">{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end justify-between">
                                                    <div className="text-black font-semibold text-xl text-right leading-none">
                                                        {stand.price}
                                                        <span className="block text-xs font-normal">{stand.priceNote}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}