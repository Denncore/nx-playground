module.exports = {
  name: 'sock-chat',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sock-chat',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
