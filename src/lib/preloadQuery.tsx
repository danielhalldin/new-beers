const preloadQuery = ({
  query,
  variables,
  client,
}: {
  query: any;
  variables: any;
  client: any;
}) => {
  if (query) {
    client.query({
      query,
      variables,
    });
  }
};

export default preloadQuery;
