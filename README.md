Friends Gallery - Projeto Django + Angular
Este é um projeto que combina o framework Django (utilizando Python 3.10) no lado do servidor e o framework Angular (versão 12) no lado do cliente para criar uma aplicação web dinâmica e robusta.

Configuração do Ambiente
Certifique-se de ter o Python 3.10 instalado. Recomenda-se o uso de um ambiente virtual para isolar as dependências do projeto. Você pode criar e ativar um ambiente virtual da seguinte maneira:

bash
Copy code
# Crie um ambiente virtual
python3.10 -m venv venv

# Ative o ambiente virtual
source venv/bin/activate   # No Linux/Mac
venv\Scripts\activate      # No Windows
Agora, instale as dependências do Django:

bash
Copy code
pip install -r back/requirements.txt
Certifique-se também de ter o Node.js e o npm instalados para o desenvolvimento Angular. Você pode instalá-los aqui.

Em seguida, vá para o diretório front e instale as dependências do Angular:

bash
Copy code
cd front
npm install
Executando o Projeto
Certifique-se de estar no diretório principal do projeto. Execute o servidor Django com o seguinte comando:

bash
Copy code
python back/manage.py runserver
Isso iniciará o servidor Django na porta padrão (localhost:8000).

Agora, abra uma nova janela do terminal e vá para o diretório front. Inicie o servidor de desenvolvimento do Angular com o seguinte comando:

bash
Copy code
ng serve
Isso iniciará o servidor de desenvolvimento Angular na porta padrão (localhost:4200).

Acesse a aplicação em seu navegador visitando http://localhost:4200.
