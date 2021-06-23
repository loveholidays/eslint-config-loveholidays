import React from 'react';

interface ComponentProps {
}

export const react: React.FC<ComponentProps> = () => (
  <div
    data-id="id"
    data-test-id="test-id"
  >
    Hello
  </div>
);
