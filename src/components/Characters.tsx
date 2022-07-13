import { useQuery, gql } from "@apollo/client";
import React, { useState } from "react";

const CHARACTERS_QUERY = gql`
  query Query {
    locations {
      results {
        name
        residents {
          id
          name
          gender
          image
          status
          species
          origin {
            name
            dimension
          }
          location {
            name
            dimension
          }
          episode {
            air_date
          }
        }
      }
    }
  }
`;

const Characters = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const { data, loading, error } = useQuery(CHARACTERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <pre>{error.message}</pre>;
  }

  console.log(data);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="h-12 rounded-lg border w-96 focus:border-gray-400 p-3 outline-none"
      />
      {data.locations.results.map((location: any) => {
        return (
          <>
            <h2 className="text-4xl font-bold">{location.name}</h2>
            <div key={location.name} className="grid grid-cols-5 gap-3">
              {location.residents.map((resident: any) => {
                if (
                  resident.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return (
                    <div className="">
                      <div key={resident.id} className="flex items-start flex-col">
                        <h3>{resident.name}</h3>
                        <p>
                          <img src={resident.image} alt={resident.name} />
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Characters;
