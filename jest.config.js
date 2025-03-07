module.exports = {
  preset: 'ts-jest', // Usar ts-jest para transpilação
  testEnvironment: 'jsdom', // Para testar como se estivesse em um ambiente de navegador
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transformar arquivos ts/tsx com ts-jest
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Arquivo de configuração global
}
