const a = {
  one: 1,
  two: 2,
};

console.log(a);

const immediateReturnFunc = () => true;
immediateReturnFunc();

interface DesturctureArgsParams {
  a: string;
  b: number;
  c: string;
}

const desturctureArgs = ({ a, b, c }: DesturctureArgsParams) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

desturctureArgs({ a: 'a', b: 1, c: 'c' });

