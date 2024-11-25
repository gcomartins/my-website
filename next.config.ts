/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configura o Next.js para gerar arquivos estáticos
  basePath: '/<nome-do-repositorio>', // Substitua pelo nome do seu repositório
  trailingSlash: true, // Adiciona barra no final dos caminhos
};

module.exports = nextConfig;
