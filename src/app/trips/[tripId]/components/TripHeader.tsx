import React from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { Trip } from "@prisma/client";

interface TripHeaderProps {
  trip: Trip;
}

const TripHeader = ({ trip }: TripHeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full lg:hidden">
        <Image
          src={trip.coverImage}
          fill
          style={{
            objectFit: "cover",
          }}
          alt={trip.name}
        />
      </div>

      {/* Titulo e informações */}
      <div className="flex flex-col p-5">
        <h1 className="font-semibold text-xl text-primaryDarker">
          {trip.name}
        </h1>

        <div className="flex items-center">
          <div className="flex items-center gap-1 my-1">
            <ReactCountryFlag countryCode={trip.countryCode} svg />
            <p className="text-xs text-grayPrimary underline">
              {trip.location}
            </p>
          </div>

          <p className="text-xs text-grayPrimary">
            <span className="text-primary font-medium">
              R${trip.pricePerDay.toString()}
            </span>{" "}
            por dia
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripHeader;
