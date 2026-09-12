import { Search, SquareArrowLeft, SquareArrowRight } from 'lucide-react';
import {
  avgFixTime,
  displayDate,
  displayStatusColor,
  getCountByCategory,
  getCountByStatus,
} from '../utils/helpers';
import issues from '../data/Issues';
import UseIssues from '../hooks/useIssues';
import { IssueMap } from '../components/IssueMap';

export function HomePage() {
  const {
    allfilteredIssues,
    paginatedIssues,
    filter,
    setFilter,
    search,
    setSearch,
    type,
    setType,
    sort,
    setSort,
    page,
    setPage,
    totalPages,
    resetPage,
  } = UseIssues();

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
      <IssueMap issues={allfilteredIssues} />
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
          <button
            onClick={() => {
              setFilter('all');
              resetPage();
            }}
            className="border border-gray-300 flex-1 py-1 px-2"
          >
            All
          </button>
          <button
            onClick={() => {
              setFilter('open');
              resetPage();
            }}
            className="border border-gray-300 flex-1 py-1 px-2"
          >
            Open
          </button>
          <button
            onClick={() => {
              setFilter('active');
              resetPage();
            }}
            className="border border-gray-300 flex-1 py-1 px-2"
          >
            Active
          </button>
          <button
            onClick={() => {
              setFilter('resolved');
              resetPage();
            }}
            className="border border-gray-300 flex-1 py-1 px-2"
          >
            Resolved
          </button>
        </div>
        <div className="flex justify-center text-sm items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              resetPage();
            }}
            placeholder="Search issues or locations..."
            className="border border-gray-300 px-2 py-1 w-8/12"
          />
          <Search />
        </div>
        <div className="flex justify-between text-sm mx-4">
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              resetPage();
            }}
          >
            <option value={'all'}>All types</option>
            <option value={'potholes'}>Potholes</option>
            <option value={'streetlight'}>Streetlights</option>
            <option value={'waste'}>Waste</option>
            <option value={'signage'}>Signage</option>
          </select>

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              resetPage();
            }}
          >
            <option value="newest-first">Newest first</option>
            <option value="oldest-first">Oldest first</option>
            <option value="most-upvoted">Most upvoted</option>
          </select>
        </div>
      </div>
      <div className="space-y-3 mt-3">
        <div className="flex justify-between p-3">
          <h2 className="uppercase text-xs text-red-800">Recent reports</h2>
          <span className="text-xs">{issues.length} total</span>
        </div>
        {paginatedIssues.map((issue) => {
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

        {totalPages > 1 && (
          <div className="flex gap-2 justify-center items-center pt-2 mx-2 text-sm">
            <button
              className="disabled:opacity-40 border py-1 px-2 border-gray-400"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Prev
            </button>
            <span className=" text-gray-500 ">
              {page} of {totalPages}
            </span>
            <button
              className="disabled:opacity-40 border py-1 px-2  border-gray-400"
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div className="mt-8 px-3 pb-2 justify-end flex">
        <button className="bg-black text-white p-2 text-xs hover:bg-red-80 cursor-pointer">
          + Report Issue
        </button>
      </div>
    </>
  );
}
