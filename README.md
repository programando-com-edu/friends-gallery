# Projeto Angular 12 com Django e Python 3.10

Este é um projeto que combina Angular 12 para o frontend e Django com Python 3.10 para o backend. A estrutura do projeto inclui uma pasta chamada `back` para os arquivos do projeto Django e uma pasta chamada `front` para os arquivos do projeto Angular.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina antes de iniciar:

- [Node.js](https://nodejs.org/) (v12 ou superior)
- [Angular CLI](https://angular.io/cli) (v12 ou superior)
- [Python](https://www.python.org/) (v3.10)
- [Django](https://www.djangoproject.com/) (v3.2)

## Configuração do Backend (Django)

1. Navegue até o diretório `back`:

   ```bash
   cd back
   ```

2. Crie e ative um ambiente virtual (recomendado, mas opcional):

   ```bash
   python3.10 -m venv venv
   source venv/bin/activate
   ```

3. Instale as dependências do Django:

   ```bash
   pip install -r requirements.txt
   ```

4. Execute as migrações do banco de dados:

   ```bash
   python manage.py migrate
   ```

5. Inicie o servidor Django:

   ```bash
   python manage.py runserver
   ```

O backend Django estará acessível em [http://localhost:8000/](http://localhost:8000/).

## Configuração do Frontend (Angular)

1. Navegue até o diretório `front`:

   ```bash
   cd front
   ```

2. Instale as dependências do Angular:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do Angular:

   ```bash
   ng serve
   ```

O frontend Angular estará acessível em [http://localhost:4200/](http://localhost:4200/).
