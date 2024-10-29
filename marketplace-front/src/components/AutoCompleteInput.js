import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const AutoCompleteInput = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data) => {
    console.log('Selected:', data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <AutoComplete
      value={value}
      options={options}
      style={{ width: 500 }}
      onSelect={onSelect}
      onSearch={(text) => setOptions(getPanelValue(text))}
      onChange={onChange}
      placeholder="Buscar cursos..."
    />
  );
};

export default AutoCompleteInput;