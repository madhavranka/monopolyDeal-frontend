// PropertyPile.tsx
import React from 'react';
import { Properties } from './GameTable';

interface PropertyPileProps {
  properties: Properties;
}

const PropertyPile: React.FC<PropertyPileProps> = ({ properties }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h3 className="text-md font-semibold mb-2">Properties</h3>
      {Object.keys(properties).map((color, index) => (
        <div key={index} className="bg-green-200 p-2 rounded">
          {color}
        </div>
      ))}
    </div>
  );
};

export default PropertyPile;
