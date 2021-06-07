import api from 'api';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Text } from '@chakra-ui/react';
import RecordsTable from 'components/RecordsTable';
import RecordsForm from 'components/RecordsForm';

const fetchRecords = async () => await api.index();

function Records() {
  const { status, data, error } = useQuery('records', fetchRecords);

  const addRecord = useMutation(payload => api.create(payload));
  const queryClient = useQueryClient();


  const handleSubmit = event => {
    event.preventDefault();
    addRecord.mutate(Object.fromEntries(new FormData(event.target)), {
      onSuccess: () => {
        queryClient.invalidateQueries('records');
      },
    });
  };
  
  // eslint-disable-next-line default-case
  switch (status) {
    case 'loading':
      return <Text>Loading...</Text>;
    case 'error':
      return <Text color="tomato">{error.message}</Text>;
    default:
      return (
        <main className="container mx-auto">
          <RecordsTable records={data}/>
          <RecordsForm handler={handleSubmit}/>
        </main>
      );
  }
}

export default Records;
