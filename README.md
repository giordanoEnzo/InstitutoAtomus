# Instituto ATOMUS - Portal & Painel Administrativo

Este repositório contém o portal institucional e o painel administrativo da ATOMUS. O projeto foi construído utilizando **Next.js 14+ (App Router)**, **React**, **TypeScript**, e banco de dados local **Prisma (SQLite)**.

## 🛠 Pré-requisitos para Instalação

Antes de rodar o projeto, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Git

## 🚀 Como rodar o projeto em uma nova máquina

Siga o passo a passo abaixo para clonar, configurar e executar o projeto perfeitamente.

### 1. Clonar o Repositório
Abra o seu terminal (Prompt de Comando, PowerShell ou Terminal do Mac/Linux) e rode:
```bash
git clone https://github.com/giordanoEnzo/InstitutoAtomus.git
cd InstitutoAtomus
```

### 2. Instalar as Dependências
O projeto possui diversas bibliotecas fundamentais (Next.js, Prisma, etc). Para baixá-las para a nova máquina, execute:
```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente
Como medidas de segurança, arquivos de senha não sobem para o GitHub. Portanto, você precisará recriar o arquivo `.env` na raiz do projeto (`InstitutoAtomus/.env`). 

Crie o arquivo `.env` e coloque o seguinte conteúdo dentro dele:
```env
# Banco de Dados Local
DATABASE_URL="file:./dev.db"

# Senha de Acesso ao Painel Administrativo (/admin/login)
ADMIN_PASSWORD="sua_senha_secreta_aqui"

# Segredo de Criptografia para os Cookies de Sessão (Mínimo de 32 caracteres)
SESSION_SECRET="sua_chave_criptografica_muito_segura_aqui_123456"
```

### 4. Gerar o Cliente do Banco de Dados
Para o código TypeScript conseguir enxergar as tabelas do seu banco de dados, você precisa gerar o Prisma Client:
```bash
npx prisma generate
```

### 5. Sincronizar (ou Criar) o Banco de Dados
Caso seja a primeira vez levantando a estrutura, ou se quiser empurrar a estrutura de tabelas mais recente (Leads, Ebooks, Posts) para o SQLite local, efetue o comando de push do Prisma:
```bash
npx prisma db push
```

*(Esse comando vai fabricar o arquivo `prisma/dev.db` na raiz da sua máquina se ele ainda não existir)*

### 6. Rodar o Servidor
Com tudo configurado e dependências processadas, inicie o servidor interno de desenvolvimento:
```bash
npm run dev
```

Pronto! A aplicação estará rodando limpa no endereço interno: **[http://localhost:3000](http://localhost:3000)**. Você pode acessar a plataforma pelo seu navegador.

---
## ✨ Comandos Úteis

- **Iniciar Sistema**: `npm run dev`
- **Build de Produção**: `npm run build`
- **Acessar o Banco de Dados Interativo (Visual)**: `npx prisma studio` (Isso abrirá uma tela do Prisma Studios no navegador para ver as tabelas e linhas do DB diretamente via interface gráfica).
