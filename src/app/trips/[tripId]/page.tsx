import React from "react";
import { prisma } from "@/lib/prisma";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighlights from "./components/TripHighlights";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};

const TripDatails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      {/* Cabeçalho */}
      <TripHeader trip={trip} />
      {/* Reservas */}
      <TripReservation trip={trip} />
      {/* Descrição */}
      <TripDescription description={trip.description} />
      {/* Melhores momentos */}
      <TripHighlights highlights={trip.highlights} />
    </div>
  );
};

export default TripDatails;
