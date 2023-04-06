import { FormGroup, Label, Input } from './PhonebookFilter.styled';

import { getFilter } from 'components/redux/filter/FilterSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filter/FilterSlice';

export const PhonebookFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <FormGroup>
      <Label></Label>
      <Input
        value={filter}
        name="filter"
        type="text"
        onChange={handleFilter}
        placeholder="find contacts by name"
        autoComplete="off"
      />
    </FormGroup>
  );
};
