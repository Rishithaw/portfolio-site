import React from 'react';
import { Text } from '../../Components/Text';

export const DeveloperSetup: React.FC = () => {
  return (
    <div>
      <h1>Developer Setup</h1>

      <h3>VSCode</h3>
      <Text content="Extensions: ESLint, Prettier. Recommended settings: formatOnSave=true, defaultFormatter=esbenp.prettier-vscode" />

      <h3>Terminal</h3>
      <Text content="Preferred: Git Bash (Windows) or integrated terminal in VSCode. Node 20 is used for builds." />

      <h3>Preferred Font</h3>
      <Text content="Fira Code, size 14, ligatures enabled." />
    </div>
  );
};
