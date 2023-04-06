// import {
//   addContact,
//   deleteContact,
//   getContacts,
// } from 'components/shared/servises/contacts-api';
// import {
//   fetchAddContactError,
//   fetchAddContactLoading,
//   fetchAddContactSuccess,
//   fetchContactsError,
//   fetchContactsLoading,
//   fetchContactsSuccess,
//   fetchDeleteContactLoading,
//   fetchDeleteContactSuccess,
// } from './ContactsActions';

import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'components/shared/servises/contacts-api';
////////////////////
// import axios from 'axios';

// export const contactInstance = axios.create({
//   baseURL: 'https://642b4c71208dfe2547160104.mockapi.io/contacts',
// });

// export const getContacts = async () => {
//   const { data } = await contactInstance.get('/');
//   console.log(data);
//   return data;
// };
// export const addContact = async data => {
//   const { data: result } = await contactInstance.post('/', data);
//   return result;
// };

// export const deleteContact = async id => {
//   const { data } = await contactInstance.delete('/', id);
//   return data;
// };

/////////////

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch ({ response }) {
      // catch (error) {
      //   return thunkAPI.rejectWithValue(error.message);
      // }
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contact/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
    // catch (error) {
    //   return rejectWithValue(error.message);
    // }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalizedName;
      });
      if (result) {
        toast.success(`${name} 🦄 is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      // catch (error) {
      //   return rejectWithValue(error.message);
      // }
      return rejectWithValue(response.data.message);
    }
  }
);
//id => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchDeleteContactLoading());
//       await deleteContact(id);
//       dispatch(fetchDeleteContactSuccess(id));
//     } catch ({ response }) {
//       dispatch(fetchAddContactError(response.data.message));
//     }
//   };
//   return func;
// };
// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchContactsLoading());
//       const data = await getContacts();
//       //   console.log(data);
//       dispatch(fetchContactsSuccess(data));
//     } catch ({ response }) {
//       dispatch(fetchContactsError(response));
//     }
//     // catch ({ response }) {
//     //   console.log(response);
//     //   dispatch(fetchContactsError(response.data.message));
//     // }
//   };
//   return func;
// };

// const isDublicate = (contacts, { name }) => {
//   const normalizedName = name.toLowerCase();

//   const result = contacts.find(({ name }) => {
//     return name.toLowerCase() === normalizedName;
//   });

//   return Boolean(result);
// };

// export const fetchAddContact = data => {
//   const func = async (dispatch, getState) => {
//     try {
//       const { contacts } = getState();
//       if (isDublicate(data, contacts.items)) {
//         toast.success(`${data.name} 🦄 is already in contacts`);
//         return false;
//       }

//       dispatch(fetchAddContactLoading());
//       const result = await addContact();
//       dispatch(fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(fetchAddContactError(response.data.message));
//     }
//   };
//   return func;
// };

// export const fetchDeleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchDeleteContactLoading());
//       await deleteContact(id);
//       dispatch(fetchDeleteContactSuccess(id));
//     } catch ({ response }) {
//       dispatch(fetchAddContactError(response.data.message));
//     }
//   };
//   return func;
// };
