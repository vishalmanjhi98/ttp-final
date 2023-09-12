import React from 'react'
import DD1 from './Assets/imagee.jpg';
import DD2 from './Assets/ddimagee.jpg';
import DD3 from './Assets/ddimageee.jpg';
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <div>
        <div
      id="feature"
       style={{background: '#5DB2FF'}} className="w-full min-h-screen p-2 flex items-center from-white to-gray-400"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={DD1}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Meet Our Doctors
                </h3>
                <br/>
                <p className="text-sm text-gray-500">BDS | Surgeons | MBBS</p>
                <p className="text-lg font-bold text-gray-700 mt-4">
                be a member to get the exclusive benefits at Hospitals and extra discount
                </p>
                {/* <button
                  className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700"
                >
                  Doctors
                </button> */}
                <div ><BsFillArrowUpRightCircleFill size={40}/></div>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={DD2}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Become Member
                </h3>
                <p className="text-sm text-gray-500">
                  Comfortable Beds | 24x7 Service | Nursing Staff Available
                </p>

                <p className="text-lg font-bold text-gray-700 mt-4">
                be a member to get the exclusive benefits at Hospitals and extra discount
                </p>
                {/* <button  className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700"> */}
                <div style={{marginBottom:'3px'}}><BsFillArrowUpRightCircleFill size={40}/></div>
                {/* </button> */}
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={DD3}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Our Hospitals
                </h3>
                <br/>
                <p className="text-sm text-gray-500">
                  Caring | Rutine Checkup | Ambulance Service
                </p>
                <p className="text-lg font-bold text-gray-700 mt-4">
                be a member to get the exclusive benefits at Hospitals and extra discount
                </p>
                {/* <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  Patient
                </button> */}
                <div><BsFillArrowUpRightCircleFill size={40}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services