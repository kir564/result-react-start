// import { useState } from 'react';
// import { AppContext } from './context';
// import { useRequestTasks } from './hooks';

// const filterTasks = (tasks, searchPhrase) =>
//   tasks.filter((task) =>
//     task.title.toLowerCase().includes(searchPhrase.toLowerCase().trim())
//   );

// export const AppProvider = ({ children }) => {
//   const [updateFlag, setUpdateFlag] = useState(false);
//   const [phrase, setPhrase] = useState('');

//   const { tasks } = useRequestTasks(updateFlag);
//   const tasksFiltered = filterTasks(tasks, phrase);

//   return (
//     <AppContext.Provider
//       value={{ tasks: tasksFiltered, setUpdateFlag, setPhrase }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
