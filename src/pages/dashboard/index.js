import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import data from '@/data/data.json'; // import your JSON

export default function Dashboard() {
    const [svgContent, setSvgContent] = useState('');

    const matchDetails = data.matchDetails;
    const stands = data.stands;

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
        <>
            <Header />
            <div className="flex h-[calc(100vh-64px)]">
                {/* Left Panel */}
                <div className="w-full border-r border-r-gray-100 flex flex-col max-w-[550px]">
                    {/* Match Details (fixed) */}
                    <div className="border-b border-b-gray-100 shrink-0 pt-4 px-6 pb-4">
                        <div class="h-5 flex justify-end gap-[1rem]"><button type="button" tabindex="0" aria-expanded="false" id="react-aria-«R5d8jmtrmqhnbH1»" class="p-0 flex items-center justify-center text-color-black bg-transparent cursor-pointer outline-none data-[pending=true]:opacity-50 data-[pending=true]:cursor-wait data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed size-5" data-rac=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg></button><button type="button" tabindex="0" aria-expanded="false" id="react-aria-«R9d8jmtrmqhnbH1»" aria-label="Open Event Info" class="p-0 flex items-center justify-center text-color-black bg-transparent cursor-pointer outline-none data-[pending=true]:opacity-50 data-[pending=true]:cursor-wait data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed" data-rac=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg></button></div>
                        <p className='block text-lg font-bold'>{matchDetails.teams}</p>
                        <p className='text-color-[#3b4148] text-[14px]'>{matchDetails.date}</p>
                        <p>{matchDetails.time}</p>
                    </div>

                    {/* Scrollable Stand List */}
                    <div className="overflow-auto flex-1">
                        <div className="ListingGuarantee_container__J4rIl !border-0 flex items-center"><svg width="40" height="40" viewBox="0 0 71 71" xmlns="http://www.w3.org/2000/svg" aria-label="seatpick guarantee"><g fill="none" fill-rule="evenodd"><path d="M27.461 8.836c2.519-3.276 7.49-3.27 10.001 0a6.323 6.323 0 007.15 2.082c3.901-1.406 8.08 1.264 8.416 5.364.22 2.72 2.197 4.98 4.878 5.584 4.047.91 6.11 5.396 4.155 9.026a6.202 6.202 0 001.063 7.314c2.908 2.939 2.197 7.817-1.423 9.821a6.219 6.219 0 00-3.097 6.721c.846 4.02-2.403 7.758-6.55 7.497-2.746-.169-5.283 1.45-6.268 3.996-1.477 3.834-6.249 5.237-9.598 2.795a6.333 6.333 0 00-7.45 0c-3.333 2.434-8.11 1.055-9.598-2.795-.982-2.547-3.522-4.165-6.266-3.996-4.139.258-7.393-3.466-6.552-7.497a6.22 6.22 0 00-3.094-6.721c-3.642-2.015-4.323-6.901-1.423-9.82a6.205 6.205 0 001.06-7.315c-1.958-3.633.111-8.114 4.155-9.026 2.681-.604 4.659-2.863 4.88-5.584.33-4.1 4.518-6.767 8.414-5.364a6.316 6.316 0 007.147-2.082z" fill="#043ADE" fill-opacity="0.1" fill-rule="nonzero"></path><g transform="translate(45.982 2)"><ellipse stroke="#FFF" stroke-width="3" fill="#47B009" cx="11.496" cy="12.514" rx="11.496" ry="12.514"></ellipse><path d="M15.093 6.881c1.527 1.073 2.22 1.609 2.08 1.609l-7.15 9.345c.029-.156-1.116-1.227-3.433-3.215a.548.548 0 010-.758l1.558-1.608 1.66 1.712 4.834-6.483.45-.602z" fill="#FFF"></path></g><path d="M17.517 39.009v-.037c0-4.543.958-8.887 2.702-12.877H45.67a32.495 32.495 0 011.497 4.175c-2.1.401-3.692 2.31-3.692 4.605 0 2.586 2.022 4.682 4.515 4.682.127 0 .253-.005.377-.016A32.032 32.032 0 0145.67 51.85H20.22a32.554 32.554 0 01-1.325-3.587c2.107-.395 3.706-2.308 3.706-4.607 0-2.586-2.021-4.683-4.515-4.683-.192 0-.383.013-.569.037z" fill="#043ADE" fill-rule="nonzero"></path></g></svg><div class="ListingGuarantee_right__Fbt1F"><div class="ListingGuarantee_title__LV4HA">Seatpick Vetted</div><div class="ListingGuarantee_text__jDud2">Every ticket is verified and covered by a 100% guarantee.</div></div></div>
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
                                                                    {index === 0 ? <svg width="16" height="16" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M38.1432 36.1771C37.6218 36.1771 37.1217 36.3842 36.753 36.753C36.3842 37.1217 36.1771 37.6218 36.1771 38.1432V61.737C36.1771 62.8223 37.0579 63.7031 38.1432 63.7031H61.737C62.2584 63.7031 62.7585 63.496 63.1273 63.1273C63.496 62.7585 63.7031 62.2584 63.7031 61.737V38.1432C63.7031 37.6218 63.496 37.1217 63.1273 36.753C62.7585 36.3842 62.2584 36.1771 61.737 36.1771H38.1432ZM28.3125 38.1432C28.3125 32.7114 32.7167 28.3125 38.1432 28.3125H61.737C67.1688 28.3125 71.5677 32.7167 71.5677 38.1432V61.737C71.5677 67.1688 67.1635 71.5677 61.737 71.5677H38.1432C35.536 71.5677 33.0355 70.532 31.1919 68.6884C29.3482 66.8447 28.3125 64.3442 28.3125 61.737V38.1432ZM38.1432 87.2969C37.6218 87.2969 37.1217 87.504 36.753 87.8727C36.3842 88.2415 36.1771 88.7416 36.1771 89.263V112.857C36.1771 113.942 37.0579 114.823 38.1432 114.823H61.737C62.2584 114.823 62.7585 114.616 63.1273 114.247C63.496 113.878 63.7031 113.378 63.7031 112.857V89.263C63.7031 88.7416 63.496 88.2415 63.1273 87.8727C62.7585 87.504 62.2584 87.2969 61.737 87.2969H38.1432ZM28.3125 89.263C28.3125 83.8312 32.7167 79.4323 38.1432 79.4323H61.737C67.1688 79.4323 71.5677 83.8365 71.5677 89.263V112.857C71.5677 118.289 67.1635 122.688 61.737 122.688H38.1432C35.536 122.688 33.0355 121.652 31.1919 119.808C29.3482 117.965 28.3125 115.464 28.3125 112.857V89.263ZM89.263 36.1771C88.7416 36.1771 88.2415 36.3842 87.8727 36.753C87.504 37.1217 87.2969 37.6218 87.2969 38.1432V61.737C87.2969 62.8223 88.1777 63.7031 89.263 63.7031H112.857C113.378 63.7031 113.878 63.496 114.247 63.1273C114.616 62.7585 114.823 62.2584 114.823 61.737V38.1432C114.823 37.6218 114.616 37.1217 114.247 36.753C113.878 36.3842 113.378 36.1771 112.857 36.1771H89.263ZM79.4323 38.1432C79.4323 32.7114 83.8365 28.3125 89.263 28.3125H112.857C118.289 28.3125 122.688 32.7167 122.688 38.1432V61.737C122.688 67.1688 118.283 71.5677 112.857 71.5677H89.263C86.6557 71.5677 84.1553 70.532 82.3116 68.6884C80.468 66.8447 79.4323 64.3442 79.4323 61.737V38.1432Z"
                                                                            fill="black"></path>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M44.0417 47.9743C44.0417 46.9314 44.4559 45.9312 45.1934 45.1937C45.9308 44.4563 46.931 44.042 47.9739 44.042H51.9062C52.9491 44.042 53.9493 44.4563 54.6868 45.1937C55.4242 45.9312 55.8385 46.9314 55.8385 47.9743V51.9066C55.8385 52.9495 55.4242 53.9497 54.6868 54.6871C53.9493 55.4246 52.9491 55.8389 51.9062 55.8389H47.9739C46.931 55.8389 45.9308 55.4246 45.1934 54.6871C44.4559 53.9497 44.0417 52.9495 44.0417 51.9066V47.9743ZM44.0417 99.0941C44.0417 98.0512 44.4559 97.051 45.1934 96.3135C45.9308 95.5761 46.931 95.1618 47.9739 95.1618H51.9062C52.9491 95.1618 53.9493 95.5761 54.6868 96.3135C55.4242 97.051 55.8385 98.0512 55.8385 99.0941V103.026C55.8385 104.069 55.4242 105.069 54.6868 105.807C53.9493 106.544 52.9491 106.959 51.9062 106.959H47.9739C46.931 106.959 45.9308 106.544 45.1934 105.807C44.4559 105.069 44.0417 104.069 44.0417 103.026V99.0941ZM95.1614 47.9743C95.1614 46.9314 95.5757 45.9312 96.3132 45.1937C97.0506 44.4563 98.0508 44.042 99.0937 44.042H103.026C104.069 44.042 105.069 44.4563 105.807 45.1937C106.544 45.9312 106.958 46.9314 106.958 47.9743V51.9066C106.958 52.9495 106.544 53.9497 105.807 54.6871C105.069 55.4246 104.069 55.8389 103.026 55.8389H99.0937C98.0508 55.8389 97.0506 55.4246 96.3132 54.6871C95.5757 53.9497 95.1614 52.9495 95.1614 51.9066V47.9743ZM79.4323 83.3649C79.4323 82.322 79.8466 81.3218 80.584 80.5844C81.3215 79.8469 82.3217 79.4326 83.3646 79.4326H87.2969C88.3398 79.4326 89.34 79.8469 90.0774 80.5844C90.8149 81.3218 91.2292 82.322 91.2292 83.3649V87.2972C91.2292 88.3401 90.8149 89.3403 90.0774 90.0778C89.34 90.8152 88.3398 91.2295 87.2969 91.2295H83.3646C82.3217 91.2295 81.3215 90.8152 80.584 90.0778C79.8466 89.3403 79.4323 88.3401 79.4323 87.2972V83.3649ZM79.4323 114.823C79.4323 113.78 79.8466 112.78 80.584 112.043C81.3215 111.305 82.3217 110.891 83.3646 110.891H87.2969C88.3398 110.891 89.34 111.305 90.0774 112.043C90.8149 112.78 91.2292 113.78 91.2292 114.823V118.756C91.2292 119.798 90.8149 120.799 90.0774 121.536C89.34 122.274 88.3398 122.688 87.2969 122.688H83.3646C82.3217 122.688 81.3215 122.274 80.584 121.536C79.8466 120.799 79.4323 119.798 79.4323 118.756V114.823ZM110.891 83.3649C110.891 82.322 111.305 81.3218 112.042 80.5844C112.78 79.8469 113.78 79.4326 114.823 79.4326H118.755C119.798 79.4326 120.798 79.8469 121.536 80.5844C122.273 81.3218 122.687 82.322 122.687 83.3649V87.2972C122.687 88.3401 122.273 89.3403 121.536 90.0778C120.798 90.8152 119.798 91.2295 118.755 91.2295H114.823C113.78 91.2295 112.78 90.8152 112.042 90.0778C111.305 89.3403 110.891 88.3401 110.891 87.2972V83.3649ZM110.891 114.823C110.891 113.78 111.305 112.78 112.042 112.043C112.78 111.305 113.78 110.891 114.823 110.891H118.755C119.798 110.891 120.798 111.305 121.536 112.043C122.273 112.78 122.687 113.78 122.687 114.823V118.756C122.687 119.798 122.273 120.799 121.536 121.536C120.798 122.274 119.798 122.688 118.755 122.688H114.823C113.78 122.688 112.78 122.274 112.042 121.536C111.305 120.799 110.891 119.798 110.891 118.756V114.823ZM95.1614 99.0941C95.1614 98.0512 95.5757 97.051 96.3132 96.3135C97.0506 95.5761 98.0508 95.1618 99.0937 95.1618H103.026C104.069 95.1618 105.069 95.5761 105.807 96.3135C106.544 97.051 106.958 98.0512 106.958 99.0941V103.026C106.958 104.069 106.544 105.069 105.807 105.807C105.069 106.544 104.069 106.959 103.026 106.959H99.0937C98.0508 106.959 97.0506 106.544 96.3132 105.807C95.5757 105.069 95.1614 104.069 95.1614 103.026V99.0941Z"
                                                                            fill="black"></path>
                                                                    </svg> : <svg width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M22.9527 15.9194H2.04252L2.04751 12.2319C2.04751 12.169 2.10313 12.1156 2.16896 12.1156H3.25184C3.31744 12.1156 3.37329 12.1688 3.37329 12.2319V12.8559C3.06146 13.1553 2.86846 13.5683 2.86846 14.0239V14.8223C2.86846 15.127 3.12587 15.3737 3.44317 15.3737C9.47979 15.3737 15.5152 15.3737 21.5518 15.3737C21.8691 15.3737 22.1261 15.127 22.1261 14.8223V14.0239C22.1261 13.5737 21.9376 13.1653 21.6331 12.867V12.2319C21.6331 12.169 21.6887 12.1156 21.7546 12.1156H22.8374C22.903 12.1156 22.9587 12.1688 22.9587 12.2308L22.9527 15.9194ZM21.7137 18.1401C21.7137 18.3606 21.5269 18.5399 21.2968 18.5399C21.067 18.5399 20.8801 18.3606 20.8801 18.1401V17.0218H21.7137V18.1401ZM12.9197 18.1401C12.9197 18.3606 12.7327 18.5399 12.5026 18.5399C12.273 18.5399 12.0862 18.3606 12.0862 18.1401V17.0218H12.9197V18.1401ZM4.11462 18.1401C4.11462 18.3606 3.92756 18.5399 3.69773 18.5399C3.46741 18.5399 3.28083 18.3606 3.28083 18.1401V17.0218H4.11462V18.1401ZM4.52177 6.88797V12.3708L10.6912 12.371V6.88797C10.6912 6.15937 10.073 5.56623 9.31341 5.56623H5.89936C5.13997 5.56623 4.52177 6.15914 4.52177 6.88797ZM11.1842 14.0241C11.1842 13.7163 10.9194 13.4716 10.6085 13.4716H4.59307C4.2829 13.4716 4.01693 13.7156 4.01693 14.0241V14.2713H11.184L11.1842 14.0241ZM13.1655 12.1156H11.8402V12.867C12.1449 13.1656 12.3331 13.574 12.3331 14.0239V14.2711H12.6609V14.0239C12.6609 13.5683 12.8541 13.1551 13.1655 12.8559V12.1156ZM14.3147 6.88797V12.3708L20.4839 12.371V6.88797C20.4839 6.15937 19.8655 5.56623 19.1061 5.56623H15.6923C14.9327 5.56623 14.3147 6.15914 14.3147 6.88797ZM20.9771 14.0241C20.9771 13.7154 20.7114 13.4716 20.4012 13.4716H14.3855C14.0756 13.4716 13.8096 13.7156 13.8096 14.0241V14.2713H20.9769L20.9771 14.0241ZM22.837 11.0133L21.6329 11.0187V6.88797C21.6329 5.55141 20.4996 4.46387 19.1061 4.46387H15.6923C14.299 4.46387 13.1655 5.55141 13.1655 6.88797V11.0133H11.8402V6.88797C11.8402 5.55141 10.7069 4.46387 9.31341 4.46387H5.89936C4.50608 4.46387 3.37282 5.55141 3.37282 6.88797V11.019L2.16873 11.0133C1.46852 11.0133 0.898322 11.5597 0.898322 12.231L0.892856 16.4701C0.89238 16.6163 0.953226 16.7568 1.0609 16.8601C1.16857 16.9634 1.31474 17.0218 1.46757 17.0218H2.13189V18.1401C2.13189 18.9681 2.83423 19.6424 3.69773 19.6424C4.56098 19.6424 5.26357 18.9681 5.26357 18.1401V17.0218H10.9372V18.1401C10.9372 18.9681 11.6398 19.6424 12.5026 19.6424C13.3666 19.6424 14.0687 18.9681 14.0687 18.1401V17.0218H19.7314V18.1401C19.7314 18.9681 20.4338 19.6424 21.2968 19.6424C22.1603 19.6424 22.8626 18.9681 22.8626 18.1401V17.0218H23.5272C23.8445 17.0218 24.1017 16.775 24.1017 16.4708L24.1071 12.2319C24.1071 11.5599 23.5374 11.0133 22.837 11.0133Z"
                                                                            fill="black"></path>
                                                                    </svg>}
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

                {/* Right Panel (SVG Map) */}
                <div className="w-full  bg-[#fcfcfc]">
                    <div className="filter-bar px-2 py-2">
                        <div className="relative h-12 flex p-2 gap-2 overflow-x-auto">
                            {/* Optional placeholder buttons if needed */}
                            <button className="filter-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                                <path fill-rule="evenodd"
                                    d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
                                    clip-rule="evenodd"></path>
                            </svg></button>
                            <button className="filter-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                                <path
                                    d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z">
                                </path>
                            </svg></button>

                            {/* Tickets Dropdown */}
                            <select className="filter-select">
                                <option>Any amount</option>
                                {[...Array(20)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>

                            {/* Filter Buttons */}
                            <button className="filter-btn">Seated Together</button>
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
                        className="w-full h-full p-6 max-w-[1200px] max-h-[700px] flex justify-center"
                        dangerouslySetInnerHTML={{ __html: svgContent }}
                    />
                </div>
            </div>
        </>
    );
}
