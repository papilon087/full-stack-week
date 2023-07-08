"use client";

import QuikiSearch from "./components/QuickSearch";
import TripSearch from "./components/TripSearch";

export default function Home() {
  return (
    <div className="">
      <TripSearch />
      <QuikiSearch />
    </div>
  );
}
