import { useQuery, gql } from "@apollo/client";

const CHARACTERS_QUERY = gql`
  query Query {
    characters {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

const Characters = () => {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY);

  if (loading) {
    return "Loading...";
  }
  if (error) {
    return <pre>{error.message}</pre>;
  }

  console.log(data);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Characters;
