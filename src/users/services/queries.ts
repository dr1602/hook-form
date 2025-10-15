import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { type Option } from '../../types/option';

export const useStates = () => {
  return useQuery({
    queryKey: ['states'],
    queryFn: () =>
      axios
        .get<Option[]>('http://localhost:8082/states')
        .then((res) => res.data),
  });
};
