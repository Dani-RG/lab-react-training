const Greetings = (props) => {

const { language, children } = props;

let greeting = '';
if (language === 'de') {
  greeting = 'Hallo';
};
  if (language === 'en') {
  greeting = 'Hello';
};
  if (language === 'fr') {
  greeting = 'Bonjour';
};
  if (language === 'es') {
  greeting = 'Hola';
};

return (
  <div className="greetings">
    <p>{`${greeting}`} {children}</p>
  </div>
)

}

export default Greetings;