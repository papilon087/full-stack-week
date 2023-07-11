import QuikiSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendeTrips";
import TripSearch from "./components/TripSearch";

export default function Home() {
  return (
    <div className="">
      <TripSearch />
      <QuikiSearch />
      <RecommendedTrips />
    </div>
  );
}
