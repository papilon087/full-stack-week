import Image from "next/image";
import React from "react";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-2">Destaques</h2>

      <div className="flex flex-wrap gap-y-3">
        {highlights.map((highlights, index) => (
          <div key={highlights} className="flex items-center gap-2 w-1/2">
            <Image
              src="/check-icon.png"
              width={15}
              height={15}
              alt={highlights}
            />

            <p className="text-grayPrimary text-xs">{highlights}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
