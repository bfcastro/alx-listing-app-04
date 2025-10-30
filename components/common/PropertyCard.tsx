import React from "react";
import type { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="h-48 md:h-40 w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Top Info */}
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-gray-800 truncate">
              {property.name}
            </h3>
            <span className="text-sm text-yellow-600 font-semibold">
              {property.rating?.toFixed(2)}★
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            {property.address?.city}, {property.address?.country}
          </p>

          {property.category?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {property.category.slice(0, 3).map((c) => (
                <span
                  key={c}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                >
                  {c}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* Price & Discount */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">From</div>
            <div className="text-lg font-bold text-gray-900">
              ${property.price?.toLocaleString()}
            </div>
          </div>

          {property.discount ? (
            <div className="text-sm text-red-600 font-semibold bg-red-50 px-2 py-1 rounded">
              {property.discount}% off
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;