import React from 'react';

interface ComponentProps {
  optionalProp?: string;
}

export const react: React.FC<ComponentProps> = ({
  optionalProp,
}) => (
  <div
    data-id="id"
    data-test-id="test-id"
  >
    Hello {optionalProp}
  </div>
);
