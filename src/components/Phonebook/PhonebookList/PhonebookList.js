import { BsTelephone } from 'react-icons/bs';
import { ListItem } from './PhonebookList.styled';
import { List } from './PhonebookList.styled';
import { Btn } from 'components/shared/Button/Button.styled';

import { getFilteredContacts } from 'components/redux/contacts/ContactsSelector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/contacts/ContactsSlice';
import { Title } from 'components/shared/Title/Title';

export const PhonebookList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const isContacts = Boolean(filteredContacts.length);

  const contact = filteredContacts.map(({ id, name, number }) => (
    <ListItem key={id} c>
      {name}
      <BsTelephone /> {number}
      <Btn type="submit" onClick={() => removeContact(id)}>
        delete
      </Btn>
    </ListItem>
  ));

  const contactList = isContacts ? (
    <List>{contact}</List>
  ) : (
    <Title>No contacts in list</Title>
  );

  return contactList;
};
