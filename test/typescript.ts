const a = {
  one: 1,
  two: 2,
};

const immediateReturnFunc = () => true;
immediateReturnFunc();

interface DesturctureArgsParams {
  a: string;
  b: number;
  c: string;
  f?: () => void;
}

const desturctureArgs = ({ a, b, c }: DesturctureArgsParams) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

desturctureArgs({ a: 'a', b: 1, c: 'c' });

// a very lonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnng comment
const templateString = `${a.one} ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss`;
console.log(templateString);
