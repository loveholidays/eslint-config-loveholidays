import React, { useEffect, useState } from 'react';

interface ComponentProps {
  optionalProp?: string;
}

export const MyComponent: React.FC<ComponentProps> = ({
  optionalProp,
}) => {
  const [ state, setState ] = useState<string | null>(null);

  useEffect(() => {
    if (!state) {
      setState('Hello World!');
    }
  }, [ state ]);

  return (
    <div
      data-id="id"
      data-test-id="test-id"
    >
      Hello {optionalProp}
    </div>
  );
};
