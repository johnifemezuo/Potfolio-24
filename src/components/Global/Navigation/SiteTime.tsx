import { time } from "console";

export const SiteTime = () => {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  const currentTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${amOrPm}`;

  return (
    <div className="flex border border-border-color rounded-full px-4 py-2 space-x-2 capitalize text-sm font-medium">
      <span className="text-stone-500">Nigeria</span>
      <span className="text-stone-200">{currentTime}</span>
    </div>
  );
};
