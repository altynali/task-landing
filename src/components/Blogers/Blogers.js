import './Blogers.css';
import './Select.css';
import Card from './Card';
import Select from './Select';

const Blogers = () => {
  return (
    <>
      <div className='content'>
        <h1>Блогеры</h1>
        <div className='selects'>
          <span className='selects-title'>Сортировать по:</span>
          <Select />
          <Select />
        </div>
        <div className='cards'>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <Card i={i + 1} key={i} />
          ))}
        </div>
      </div>
      <fieldset>
        <legend align='center'>Подгружаем...</legend>
      </fieldset>
    </>
  );
};

export default Blogers;
