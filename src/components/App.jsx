import { PhonebookFilter } from './Phonebook/PhonebookFilter/PhonebookFilter';
import { PhonebookForm } from './Phonebook/PhonebookForm/PhonebookForm';
import { PhonebookList } from './Phonebook/PhonebookList/PhonebookList';
import { Title } from './shared/Title/Title';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Title>Phonebook</Title>

      <PhonebookForm />
      <PhonebookFilter />
      <PhonebookList />
    </Layout>
  );
};
