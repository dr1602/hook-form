import { type Path, type FieldValues } from 'react-hook-form';

import type { Option } from './option';

export type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
};

export type PropsSinLabel<T extends FieldValues> = Omit<Props<T>, 'label'>;
