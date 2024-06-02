// PropertyPile.tsx
import React from 'react';
import { Properties } from './GameTable';
import Card from './Card';

interface PropertyPileProps {
  properties: Properties;
}

const PropertyPile: React.FC<PropertyPileProps> = ({ properties }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h3 className="text-md font-semibold mb-2">Properties</h3>
      {Object.entries(properties).map(([key, value]) => {
        if (value.length > 0) {
          return (
            <div key={key}>
              <h2>{key}</h2>
              {value.map((item, index) => {
                console.log(item);
                return (
                  <ul key={`${key}-${index}`}>
                    <Card count={item.numberOfCards} />
                  </ul>
                );
              })}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PropertyPile;
