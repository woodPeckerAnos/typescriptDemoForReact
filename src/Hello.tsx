import * as React from 'react';

export interface Props {
  name: string,
  enthusiasmLevel: number
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {

  if (enthusiasmLevel <= 0) {
    throw new Error('You could add a lit bit more enthusiastic :)')
  }

  return (
    <div className='hello'>
      <div>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// helpers 
function getExclamationMarks(numberChar: number) {
  return new Array(numberChar + 1).join('!')
}
