import React, { useState, useEffect } from 'react';
import SpainFlag from '../assets/flags/esp.svg';
import { ReactComponent as MissionsBlackIcon } from '../assets/icons/black/missions_black.svg';
import { ReactComponent as ReportsBlackIcon } from '../assets/icons/black/reports_black.svg';
import Screenshot from '../assets/images/screenshot.png';
import FlightPathChart2D from '../components/Charts/FlightPathChart2D';
import FlightPathChart3D from '../components/Charts/FlightPathChart3D';
import jsonData from '../data/dataset.json';

// TableRow Component: Renders a row in the table
const TableRow = ({ name, frequency, range, polarization }) => (
  <tr>
    {/* Display information for each column */}
    <td className="whitespace-nowrap px-4 py-2 text-gray-900">{name}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{frequency}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{range}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{polarization}</td>
    <td className="px-4 py-2">
      {/* Edit button */}
      <button className="inline-block rounded bg-quadsatPrimary px-4 py-2 text-xs text-white hover:bg-quadsatSecondary hover:text-quadsatPrimary">
        Edit
      </button>
    </td>
    <td className="px-4 py-2">{/* Placeholder for image component */}</td>
  </tr>
);

// DropdownMenu Component: Renders a dropdown menu
const DropdownMenu = ({ icon, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center justify-between w-full px-4 py-2 mt-2 text-xl font-semibold text-left bg-gray-200 rounded-md md:w-auto md:inline md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:shadow-outline"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <span className="flex items-center">
          {React.cloneElement(icon, { className: "inline w-7 h-4 mr-2" })}
          <span>{title}</span>
        </span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`inline w-4 h-4 ml-2 transition-transform duration-200 transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md border border-gray-100 bg-white shadow-lg">
          <div className="p-2">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block rounded px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MissionsPage = () => {
  // State for flight data
  const [flightData, setFlightData] = useState(null);

  // Fetch flight data on component mount
  useEffect(() => {
    setFlightData(jsonData);
  }, []);

  // Dropdown items for Missions and Reports
  const missionsDropdownItems = [
    { label: 'Hey', link: '#' },
    { label: 'there!', link: '#' },
  ];

  const reportsDropdownItems = [
    { label: 'Action 1', link: '#' },
    { label: 'Action 2', link: '#' },
  ];

  // Sample data for table rows
  const tableRows = Array.from({ length: 10 }, (_, index) => ({
    name: `Single point tracking_${index + 1}`,
    frequency: '12.6GHz',
    range: '+30deg',
    polarization: 'Co',
  }));

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow-md md:col-span-1 row-span-2 py-8">
          <div className="mb-4 border-b pb-40">
            <h1 className="mb-4 md:text-3xl lg:text-4xl">Mission</h1>
            <h2 className="text-xl font-semibold mb-2 text-gray-800" style={{ display: 'inline-block' }}>
              Mallorca, Spain
              <img src={SpainFlag} alt="Spanish Flag" className="w-4 h-3" style={{ display: 'inline-block', marginLeft: '4px' }} />
            </h2>
            <div class="flex items-center justify-center">
              <img src={Screenshot} alt="Screenshot" />
              </div>
          </div>
          <div className="mb-4 border-b pb-10">
            <p className="font-bold mb-2 text-left p-4">Scope:</p>
            <div className="text-justify overflow-auto max-h-80 p-4">
            The prototype TT&C antenna is required to acquire and start tracking on the satellite during the first orbital pass. Therefore, the pointing offsets should be well calibrated. The team at Amazon will identify the pointing offset using a sun track method. QuadSAT will then make an antenna diagnostic by measuring the offsets in the initial state, thereafter, if necessary, will improve the [...]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacinia ex, nec feugiat justo sollicitudin ut. Duis auctor mauris sit amet elit euismod, a consequat odio blandit. Proin dapibus, tortor vel viverra auctor, turpis felis feugiat ante, a vestibulum libero neque at nisi. Curabitur vel ipsum a tellus tristique tincidunt vel in odio. Sed vitae efficitur lectus. Fusce consectetur justo vel libero venenatis, at congue tortor dapibus. In hac habitasse platea dictumst. Integer vitae lacus nunc. Nullam et dui auctor, cursus mi at, sodales turpis. Donec ut massa vel risus commodo convallis. Fusce rhoncus nibh a leo suscipit, sit amet vestibulum sapien bibendum. Vestibulum vitae suscipit velit, non tincidunt sem. Fusce nec tortor vitae mi congue ullamcorper in at elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacinia ex, nec feugiat justo sollicitudin ut. Duis auctor mauris sit amet elit euismod, a consequat odio blandit. Proin dapibus, tortor vel viverra auctor, turpis felis feugiat ante, a vestibulum libero neque at nisi. Curabitur vel ipsum a tellus tristique tincidunt vel in odio. Sed vitae efficitur lectus. Fusce consectetur justo vel libero venenatis, at congue tortor dapibus. In hac habitasse platea dictumst. Integer vitae lacus nunc. Nullam et dui auctor, cursus mi at, sodales turpis. Donec ut massa vel risus commodo convallis. Fusce rhoncus nibh a leo suscipit, sit amet vestibulum sapien bibendum. Vestibulum vitae suscipit velit, non tincidunt sem. Fusce nec tortor vitae mi congue ullamcorper in at elit.
            </div>
          </div>
          <div className="flex justify-between">
            <DropdownMenu icon={<MissionsBlackIcon />} title="Missions" items={missionsDropdownItems} />
            <DropdownMenu icon={<ReportsBlackIcon />} title="Reports" items={reportsDropdownItems} />
          </div>
        </div>
        <div className="container mx-auto mt-8">
        {flightData && <FlightPathChart3D data={flightData} />}
      </div>
      <div className="container mx-auto mt-8">
        {flightData && <FlightPathChart2D data={flightData} />}
      </div>
        <div className="bg-white p-4 rounded shadow-md md:col-span-2">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Frequency</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Range</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Polarization</th>
                  <th className="px-4 py-2 font-medium text-gray-900">Edit</th>
                  <th className="px-4 py-2 font-medium text-gray-900">Image</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tableRows.map((row, index) => (
                  <TableRow key={index} {...row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <label className="block text-sm font-medium text-gray-700">Select Option</label>
            <select
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                Alignments
              </option>
              <option value="option1">Polarization alignment</option>
              <option value="option2">Peak alignment</option>
            </select>
          </div>
        <div className="bg-white p-4 rounded shadow-md">
          <label className="block text-sm font-medium text-gray-700">Rationale</label>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem nulla pharetra diam sit. Adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet. Semper eget duis at tellus at urna. Sed viverra tellus in hac. Sit amet luctus venenatis lectus magna. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Et odio pellentesque diam volutpat commodo. Amet justo donec enim diam vulputate ut pharetra sit amet. Pharetra et ultrices neque ornare aenean. Suscipit tellus mauris a diam maecenas sed enim ut sem.
            Quis lectus nulla at volutpat. Sapien pellentesque habitant morbi tristique senectus et netus et. At auctor urna nunc id cursus metus aliquam eleifend. A scelerisque purus semper eget duis at tellus. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eget nunc lobortis mattis aliquam. Risus at ultrices mi tempus imperdiet nulla. Ut ornare lectus sit amet. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Ac felis donec et odio pellentesque diam volutpat. Commodo ullamcorper a lacus vestibulum sed arcu. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Eu consequat ac felis donec. Curabitur vitae nunc sed velit. Risus nullam eget felis eget nunc lobortis. Vestibulum lectus mauris ultrices eros in cursus.
          </p>
          </div>
      </div>
    </div>
  );
};

export default MissionsPage;
