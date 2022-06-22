import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.28.1',
  defaultReleaseBranch: 'main',
  name: 'projen-merge-test',
  projenrcTs: true,

  release: true,
  githubOptions: {
    mergify: true,
  },
  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['lazy-automation'] },
});
project.addExcludeFromCleanup('test/**'); // because snapshots include the projen marker...
project.synth();