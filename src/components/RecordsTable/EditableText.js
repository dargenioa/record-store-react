import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import PropTypes from 'prop-types';


function EditableText({ value, recordKey, id, handler }) {
  return (
    <Editable
      defaultValue={value}
      className="flex gap-2 items-center text-purple-200"
    >
      <EditablePreview />
      <EditableInput data-key={recordKey} data-id={id} onChange={handler} onBlur={handler} size="xs" />
    </Editable>
  );
}
EditableText.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handler: PropTypes.func.isRequired,
  recordKey: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default EditableText;
