module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['ts', 'js'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  preset: 'ts-jest'
}
