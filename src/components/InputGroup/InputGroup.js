// import './InputGroup.scss';

function InputGroup(props) {
  return (
    <div className="input-group">
      <label for={props.id} className="input-group__label">{props.text}</label>
      <input id={props.id} className="input-group__input" type={props.type} />
    </div>
  );
}

export default InputGroup;
