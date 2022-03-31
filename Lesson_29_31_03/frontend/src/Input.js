function Input({ initValue, onChange, id, fieldname, editable }) {

    const onInputChange = event => {
        onChange(event, id, fieldname);
    }
    return (
        <input value={initValue} onChange={onInputChange} readOnly={editable}></input>
    )
}
export default Input;