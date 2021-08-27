const Select = () => {
  return (
    <span className='select'>
      <select>
        <option value='def' selected disabled hidden>
          выберете площадку
        </option>
        <option value='all'>Все</option>
        <option value='diy'>DIY</option>
        <option value='auto'>Авто</option>
        <option value='show'>Авторское шоу</option>
        <option value='unbox'>Анбоксинг</option>
        <option value='food'>Еда</option>
        <option value='animals'>Животные</option>
        <option value='games'>Игры</option>
        <option value='langs'>Иностранные языки</option>
        <option value='kino'>Кино</option>
        <option value='animals'>Животные</option>
        <option value='beauty'>Красота</option>
      </select>
    </span>
  );
};

export default Select;
