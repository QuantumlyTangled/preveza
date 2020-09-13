module.exports = {
	displayName: 'end-to-end test',
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRunner: 'jest-circus/runner',
	testMatch: ['<rootDir>/app.e2e-spec.ts']
};
