import React, { FC, useState } from 'react';

const Example: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
};

const Main: FC = () => {
  return (
    <div>
      main
      <Example />
      <Example />
    </div>
  );
};
export default Main;
