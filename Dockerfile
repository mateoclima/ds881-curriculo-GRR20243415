# Imagem base leve do Node.js
FROM node:20-alpine

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de definição de dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta do servidor de desenvolvimento
EXPOSE 8080

# Comando para iniciar o servidor de desenvolvimento do Vite configurado para a porta 8080
CMD ["npm", "run", "dev", "--", "--host"]
