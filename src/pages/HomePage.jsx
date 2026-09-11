import { MapContainer, TileLayer } from 'react-leaflet';
import { Search } from 'lucide-react';
import {
  avgFixTime,
  displayDate,
  displayStatusColor,
  getCountByCategory,
  getCountByStatus,
} from '../utils/helpers';
import issues from '../data/Issues';

export function HomePage() {
  return (
    <>
      <div className="border-b border-gray-300 pb-5">
        <div className="flex flex-col pl-3">
          <h2 className="text-red-800 font-medium">Example District</h2>
          <p className="text-xs text-gray-500">
            {issues.length} issues this month - updated just now
          </p>
        </div>
        <div className="flex gap-1 text-center justify-center mt-6 mx-4 text-xs">
          <div className="border border-red-800 p-2 flex-1">
            <span className=" text-red-800 font-bold">
              {getCountByStatus().open}
            </span>
            <p>Open</p>
          </div>
          <div className="border border-red-800 p-2 flex-1">
            <span className=" text-orange-800 font-bold">
              {getCountByStatus().active}
            </span>
            <p>Active</p>
          </div>
          <div className="border border-red-800 p-2 flex-1">
            <span className=" text-green-800 font-bold">
              {getCountByStatus().resolved}
            </span>
            <p>Resolved</p>
          </div>
          <div className="border border-red-800 p-2 flex-1">
            <span className=" text-gray-800 font-bold">
              {avgFixTime().toFixed(1)}
            </span>
            <p>Avg fix</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-3">
        <MapContainer
          center={[6.9271, 79.8912]}
          zoom={13}
          className="h-50 w-11/12"
        >
          <TileLayer
            attribution="© OpenStreetMap © CARTO"
            url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png?key=cb1_31sx_1_843714cdfe87fab2ae5c9aa4"
          />
        </MapContainer>
      </div>
      <div className="flex gap-5 text-xs mt-3 pl-3">
        <div className="flex gap-2 items-center">
          <span className="inline-block w-2 h-2 bg-red-800 rounded-full"></span>
          <p>Open</p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
          <p>Active</p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
          <p>Resolved</p>
        </div>
      </div>
      <div className="mt-6 border-b border-gray-300 pb-5">
        <h2 className="pl-3 uppercase text-xs text-red-800 font-semibold">
          Issues by type
        </h2>
        <div className="mt-3 space-y-4 mb-4 mx-2">
          <div className="text-sm">
            <div className="flex justify-between mx-3">
              <h3>Potholes</h3>
              <span>{getCountByCategory().potholes}</span>
            </div>
            <div className="w-11/12 h-2 bg-gray-200 overflow-hidden rounded-4xl mt-2 mx-auto">
              <div
                className=" bg-red-800 h-full rounded-full"
                style={{
                  width: `${(getCountByCategory().potholes / issues.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="text-sm">
            <div className="flex justify-between mx-3">
              <h3>Streetlight</h3>
              <span>{getCountByCategory().streetlight}</span>
            </div>
            <div className="w-11/12 h-2 bg-gray-200 overflow-hidden rounded-4xl mt-2 mx-auto">
              <div
                className=" bg-orange-500 h-full rounded-full"
                style={{
                  width: `${(getCountByCategory().streetlight / issues.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="text-sm">
            <div className="flex justify-between mx-3">
              <h3>Waste/litter</h3>
              <span>{getCountByCategory().waste}</span>
            </div>
            <div className="w-11/12 h-2 bg-gray-200 overflow-hidden rounded-4xl mt-2 mx-auto">
              <div
                className=" bg-green-500 h-full rounded-full"
                style={{
                  width: `${(getCountByCategory().waste / issues.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="text-sm">
            <div className="flex justify-between mx-3">
              <h3>Signage</h3>
              <span>{getCountByCategory().signage}</span>
            </div>
            <div className="w-11/12 h-2 bg-gray-200 overflow-hidden rounded-4xl mt-2 mx-auto">
              <div
                className=" bg-blue-500 h-full rounded-full"
                style={{
                  width: `${(getCountByCategory().signage / issues.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="text-sm">
            <div className="flex justify-between mx-3">
              <h3>Other</h3>
              <span>{getCountByCategory().other}</span>
            </div>
            <div className="w-11/12 h-2 bg-gray-200 overflow-hidden rounded-4xl mt-2 mx-auto">
              <div
                className=" bg-gray-500 h-full rounded-full"
                style={{
                  width: `${(getCountByCategory().other / issues.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-4 p-3">
        <div className="flex justify-between mx-3 text-sm gap-3">
          <button className="border border-gray-300 flex-1 py-1 px-2">
            All
          </button>
          <button className="border border-gray-300 flex-1 py-1 px-2">
            Open
          </button>
          <button className="border border-gray-300 flex-1 py-1 px-2">
            Active
          </button>
          <button className="border border-gray-300 flex-1 py-1 px-2">
            Resolved
          </button>
        </div>
        <div className="flex justify-center text-sm items-center gap-2">
          <input
            type="text"
            placeholder="Search issues or locations..."
            className="border border-gray-300 px-2 py-1 w-8/12"
          />
          <Search />
        </div>
        <div className="flex justify-between text-sm mx-4">
          <select name="" id="">
            <option value="">All types</option>
            <option value="">Potholes</option>
            <option value="">Streetlights</option>
            <option value="">Waste</option>
            <option value="">Signage</option>
          </select>

          <select name="" id="">
            <option value="">Newest first</option>
            <option value="">Oldest first</option>
            <option value="">Most upvoted</option>
          </select>
        </div>
      </div>
      <div className="space-y-3 mt-3">
        <div className="flex justify-between p-3">
          <h2 className="uppercase text-xs text-red-800">Recent reports</h2>
          <span className="text-xs">{issues.length} total</span>
        </div>
        {issues.map((issue) => {
          return (
            <div
              key={issue.id}
              className="flex items-center justify-between mx-2 border-b p-2 m-2 border-gray-300 "
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold">{issue.title}</h3>
                <div className="flex text-[11px] gap-2 text-gray-600">
                  <p>{issue.category}</p>
                  <p>{issue.location.split(',')[0]}</p>
                  <p>{displayDate(issue.date)}</p>
                </div>
                <span className="text-[11px] text-gray-600">
                  {issue.upvotes} saw this
                </span>
              </div>
              <span
                className={`text-xs font-bold border border-none py-1 px-3 rounded-md
                  ${displayStatusColor(issue.status)}`}
              >
                {issue.status}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-8 px-3 pb-2">
        <div className="flex justify-end">
          <button className="rounded bg-black px-3 py-2 text-xs font-medium text-white hover:bg-gray-800">
            View All
          </button>
        </div>
      </div>
    </>
  );
}
