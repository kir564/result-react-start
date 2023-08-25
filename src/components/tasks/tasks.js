import Select from 'react-select';
import { AddTask, FindTask, Nav, TaskList } from '../../components';
import { SELECT_OPTIONS } from '../../constants';
import { getSelectValue } from '../../utils';
import './react-select.css';

export const Tasks = ({
  tasks,
  isLoad,
  updateFlag,
  setQuery,
  setSortingValue,
  sortingValue,
}) => {
  return (
    <>
      <Nav isTasks={true} />
      <Select
        classNamePrefix='custom-select'
        options={SELECT_OPTIONS}
        defaultValue={SELECT_OPTIONS[0]}
        value={getSelectValue(sortingValue)}
        onChange={(newValue) => {
          setSortingValue(newValue);
        }}
      />
      <FindTask setQuery={setQuery} />
      <AddTask updateFlag={updateFlag} isLoad={isLoad} />
      <TaskList tasks={tasks} isLoad={isLoad} />
    </>
  );
};
