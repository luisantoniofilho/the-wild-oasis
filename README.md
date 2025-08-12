# The Wild Oasis

### [➡️ Ver Demo Ao Vivo](https://the-wild-oasis-web-js.netlify.app/)

> Painel de gerenciamento interno para uma rede de hotéis boutique, focado em alta produtividade e uma experiência de usuário moderna.

## 📜 Sobre o Projeto

**The Wild Oasis** é uma aplicação web completa que funciona como um sistema de gerenciamento interno para funcionários de um hotel. Através deste painel, é possível controlar todas as operações essenciais do dia a dia: gestão de hóspedes, reservas (bookings), acomodações (cabins) e configurações gerais do hotel.

O projeto foi desenvolvido utilizando as tecnologias mais modernas do ecossistema React para construir uma aplicação robusta, reativa e escalável. A arquitetura é focada na separação de responsabilidades e em um gerenciamento de estado eficiente, utilizando o Supabase como um Backend-as-a-Service (BaaS).

## ✨ Principais Funcionalidades

- **📈 Dashboard Analítico:** Visualização de estatísticas chave em um período selecionado (ex: últimos 7, 30 ou 90 dias), incluindo:
  - Taxa de ocupação.
  - Total de vendas e check-ins.
  - Gráficos de vendas e duração das estadias.
- **🏨 Gestão de Reservas (Bookings):**
  - Listagem completa de todas as reservas com paginação.
  - Filtragem por status (`unconfirmed`, `checked-in`, `checked-out`).
  - Ordenação por data de início, data de término e valor total.
  - Ações de check-in, check-out e exclusão de reservas.
- **🏠 Gestão de Acomodações (Cabins):**
  - Criação de novas acomodações com upload de imagem.
  - Edição e exclusão de acomodações existentes.
  - Visualização da tabela de acomodações com seus respectivos dados (preço, desconto, capacidade).
- **⚙️ Configurações Gerais:** Painel para que gerentes possam atualizar informações importantes do hotel, como:
  - Duração mínima e máxima das reservas.
  - Número máximo de hóspedes por reserva.
  - Valor do café da manhã.
- **🔐 Autenticação e Usuários:**
  - Sistema de login e logout para funcionários.
  - Criação de novos usuários.
  - Atualização de dados do usuário (nome, avatar e senha).
- **🌙 Modo Escuro (Dark Mode):** Alternância de tema para melhor conforto visual do usuário.

## 🛠️ Stack de Tecnologias

O projeto utiliza uma gama de tecnologias modernas para entregar uma experiência de desenvolvimento e de usuário de alta qualidade:

- **Framework Principal:** [React](https://react.dev/) com [Vite](https://vitejs.dev/)
- **Linguagem:** JavaScript
- **Estilização:** [Styled Components](https://styled-components.com/) para componentização de estilos.
- **Backend e Banco de Dados (BaaS):** [Supabase](https://supabase.com/)
  - **Database:** Banco de dados PostgreSQL para armazenar reservas, acomodações e hóspedes.
  - **Authentication:** Gerenciamento de usuários e sessões.
  - **Storage:** Armazenamento de imagens das acomodações e avatares de usuários.
- **Gerenciamento de Estado do Servidor:** [React Query](https://tanstack.com/query/latest)
  - Utilizado para fetching, caching, sincronização e atualização de dados do servidor, eliminando a necessidade de estados complexos de `loading` e `error`.
- **Roteamento:** [React Router DOM](https://reactrouter.com/)
- **Gerenciamento de Formulários:** [React Hook Form](https://react-hook-form.com/) para formulários performáticos e com validação eficiente.
- **UI e UX:**
  - **Gráficos:** [Recharts](https://recharts.org/) para a criação de gráficos interativos no dashboard.
  - **Notificações:** [React Hot Toast](https://react-hot-toast.com/) para feedbacks visuais ao usuário.
  - **Ícones:** [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

- Node.js (v18 ou superior)
- Git
- Uma conta no [Supabase](https://supabase.com/) para criar seu próprio backend.

### Instalação e Configuração

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/the-wild-oasis.git](https://github.com/seu-usuario/the-wild-oasis.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd the-wild-oasis
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  **Configure o Supabase:**

    - Crie um novo projeto no Supabase.
    - Dentro do "SQL Editor", crie as tabelas necessárias (`bookings`, `cabins`, `guests`, `settings`).
    - Vá para `Project Settings > API` e copie a URL do Projeto e a chave `anon` (public key).

5.  **Configure as Variáveis de Ambiente:**
    - Crie um arquivo chamado `.env` na raiz do projeto.
    - Adicione as chaves obtidas no passo anterior:
    ```env
    VITE_SUPABASE_URL="SUA_URL_DO_PROJETO_SUPABASE"
    VITE_SUPABASE_KEY="SUA_CHAVE_ANON_PUBLICA"
    ```

### Rodando a Aplicação

1.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
2.  Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) no seu navegador para ver a aplicação.
