import RNPickerSelect from 'react-native-picker-select';

const Dropdown = ({
  placeholder = 'Please select',
  item = {},
  onChange = () => {},
  value = ''
}) => {
  // console.log("====item===>", item);
  return (
    <RNPickerSelect
      placeholder={{
        label: placeholder,
        value: null,
      }}
      style={{
        ...pickerStyle,
      }}
      onValueChange={value => onChange(value)}
      items={item}
      value = {value}
    />
  );
};

const pickerStyle = {
  inputIOS: {
    color: 'grey',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  placeholder: {
    color: 'grey',
  },
  inputAndroid: {
    color: 'black',
    paddingHorizontal: 10,
    
  },
};

export default Dropdown;
