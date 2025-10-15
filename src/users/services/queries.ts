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

export const useLanguages = () => {
  return useQuery({
    queryKey: ['languages'],
    queryFn: () =>
      axios
        .get<Option[]>('http://localhost:8082/languages')
        .then((res) => res.data),
  });
};

export const useGenders = () => {
  return useQuery({
    queryKey: ['genders'],
    queryFn: () =>
      axios
        .get<Option[]>('http://localhost:8082/genders')
        .then((res) => res.data),
  });
};

export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: () =>
      axios
        .get<Option[]>('http://localhost:8082/skills')
        .then((res) => res.data),
  });
};
