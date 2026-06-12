# Currículo e Portfólio Profissional — DS881

Este repositório contém o código-fonte do currículo e portfólio profissional de **Matheus José**, desenvolvido como projeto individual para a disciplina **DS881**. 

O projeto demonstra o domínio prático de **conteinerização (Docker & Docker Compose)**, **automação de pipelines de CI/CD (GitHub Actions)** e **governança de código (Branch Protection & Conventional Commits)**.

---

## 🚀 Link do Projeto em Produção

O portfólio está publicado e pode ser acessado publicamente em:
👉 **[Link do Currículo no GitHub Pages](https://alexkutzke.github.io/ds881-curriculo-template/)** *(Substitua pelo link gerado pelo seu repositório após o deploy)*

---

## 🛠️ Executando o Projeto Localmente (Docker)

O projeto foi totalmente conteinerizado utilizando o Docker. Isso significa que você pode executar e editar o site sem a necessidade de instalar Node.js ou dependências locais no seu sistema operacional.

### Pré-requisitos
- [Docker](https://www.docker.com/) instalado
- [Docker Compose](https://docs.docker.com/compose/) instalado

### Passos para Execução

1. **Subir o servidor de desenvolvimento:**
   No diretório raiz do projeto, execute o comando abaixo para construir a imagem e iniciar o contêiner:
   ```bash
   docker compose up --build
   ```

2. **Acessar a aplicação:**
   Abra seu navegador e acesse:
   👉 **[http://localhost:8080](http://localhost:8080)**

3. **Hot Reload:**
   Qualquer alteração feita nos arquivos locais da pasta `src/` ou no arquivo `index.html` será refletida instantaneamente no seu navegador de forma automática.

4. **Encerrar a execução:**
   Para parar o contêiner, use `Ctrl + C` no terminal ou execute:
   ```bash
   docker compose down
   ```

### Outros Comandos Úteis no Contêiner

- **Executar a Verificação Estática (Linter/ESLint):**
  ```bash
  docker compose run --rm web npm run lint
  ```

- **Gerar o Build de Produção Estático:**
  ```bash
  docker compose run --rm web npm run build
  ```

---

## 🛡️ Governança de Código e Fluxo de Trabalho (Git Workflow)

Para garantir a qualidade do código e simular um ambiente profissional de desenvolvimento, são adotadas as seguintes regras:

### 1. Mensagens de Commit (Conventional Commits)
Todas as mensagens de commit devem seguir o padrão *Conventional Commits* em **português**:
- `feat: ...` para novas funcionalidades (ex: `feat: adicionar seção de projetos`)
- `fix: ...` para correções de bugs (ex: `fix: ajustar responsividade no mobile`)
- `docs: ...` para alterações em documentação (ex: `docs: atualizar README com instruções`)
- `style: ...` para ajustes de estilização/formatação (ex: `style: ajustar fontes no css`)
- `ci: ...` para configurações do workflow (ex: `ci: ajustar passos de deploy`)

### 2. Fluxo de Integração (Git Branching)
- É proibido realizar *push* direto na branch `main`.
- Toda e qualquer alteração deve ser desenvolvida em uma branch secundária criada a partir da `main` (ex: `feat/adicionar-tema-escuro`).
- A integração das alterações é feita exclusivamente via **Pull Request (PR)** para a branch `main`.
- O merge do PR só é permitido se:
  - O pipeline de CI/CD (GitHub Actions) passar com status verde (sucesso).
  - As regras configuradas de proteção da branch `main` forem atendidas.

---

## 🛡️ Configuração de Branch Protection da Branch `main`

A branch `main` está configurada como protegida nas configurações do repositório no GitHub para garantir a integridade do código em produção.

As seguintes regras foram ativadas no repositório:
1. **Require a pull request before merging:** Exige que todas as alterações passem por um PR antes de serem mescladas na `main`.
2. **Require status checks to pass before merging:** Impede que um PR seja mesclado se o job `build-and-lint` do GitHub Actions falhar.

### Comprovação da Regra de Branch Protection

Abaixo está o registro da configuração das regras de proteção ativas na branch `main`:

*(Insira aqui o print de comprovação do GitHub das configurações de Branch Protection sob a branch `main`)*

![Configuração da Regra de Branch Protection da Main](./public/branch_protection_screenshot.png)

---

Desenvolvido para fins acadêmicos na disciplina de Governança de TI e Software.
