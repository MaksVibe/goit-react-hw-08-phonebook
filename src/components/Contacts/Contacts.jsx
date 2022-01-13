import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  logout,
  login,
  fetchCurrentUser,
  fetchContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operations";
// import {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
// } from "../../redux/todos/todoSlice";
// import Filter from "../Filter/Filter";

const Contacts = () => {
  const dispatch = useDispatch();
  //   const value = useSelector(state => state.filter);
  //   const filter = useSelector(state => state.contacts.filter);
  //   const [deleteTodo, { isLoading: isDeliting }] = useDeleteContactMutation();
  const contacts = useSelector((state) => state.contacts.items);
  console.log(`contacts`, contacts);

  //   const { data, isFetching } = useFetchContactsQuery();
  //   const isLoadingContacts = useSelector(state => !state);
  //   const onFilterContacts = () => {
  //     return data.filter(contact =>
  //       contact.name.toLowerCase().includes(value.toLowerCase())
  //     );
  //   };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // onFilterContacts()
  return (
    // !contacts && <p>No contacts yet</p>
    contacts && (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Contacts;
