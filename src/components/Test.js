function Test(props) {
  return (
    <div>Hello, {props.name}</div>
  );
}

Test.defaultProps = {
  name: 'name'
};

export default Test;
