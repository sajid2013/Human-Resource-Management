"use client";
import "./Announcements.scss";
const Announcements = () => {
  return (
    <div className="main-announcements">
      <div className="title">
        <h1 className="text-xl font-semibold my-4">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="map-main">
        <div className="bg-greenlight rounded-md p-4 ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium"> Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-green rounded-md p-4 ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium"> Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-skylight rounded-md p-4 ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium"> Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
{
  /* {events.map((event) => (
          <div className="map-div" key={event.id}>
            <div className="flex items-center justify-between ">
              <h1 className="text-xl font-semibold text-gray-600">
                {event.title}
              </h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}    */
}
