<h1 align="center"> EPINFO-PROJECT </h1></br>
<h2 align="center"> DESCRIÇÃO </h2></br>
<h3>Este projeto tem a intencão de facilitar a administração e cadastro de EPIs, tem o foco de ser utilizado unicamente por empresas</h3><br/>
 
<h2 align="center"> AUTORES </h2></br>
<p align="center">
<h3 align="center">github.com/TassoEnzo</h3><br/>
<h3 align="center">github.com/lincolnsm</h3><br/>
<h3 align="center">github.com/MarcoAurelio010</h3><br/>
</p>

<h2 align="center"> REQUERIMENTOS </h2></br>
<h3>Python Interpreter(https://www.python.org/downloads/)</h3></br>
<h3>MySQL Server(https://dev.mysql.com/downloads/mysql/)</h3></br>
<h3>MySQL Workbench(https://dev.mysql.com/downloads/workbench/)</h3></br>
<h3>(Recomendação) VSCode(https://code.visualstudio.com/download)</h3></br>

<h2 align="center"> UTILIZAÇÃO </h3></br>
<h3>O projeto ja inclui tudo o que é necessario incluindo o banco de dados, porém deve-se prestar atenção os comandos para rodar o programa. Esse guia de utilização foi pensado para ser utilizado no ambiente Windows, ele funcionará igualmente em Linux ou MacOS, mudando apenas os nomes dos comandos.</h3></br>
</br>
1. Instale todos os requerimentos, apenas o vscode é opcional, sendo recomendado pois ele permite a edição dos scripts e também utilização, mas o usuario pode utilizar um editor de sua escolha.</br>
2. Utilize o Workbench do sql para criar o banco de dados, tecnicamente não é um passo extremamente necessario, porém ele util para verificar se os dados estão sendo salvos no banco.</br>
3. Dentro do editor deve-se abrir primeiramente o arquivo App.py, ele é o link da aplicação com o banco. Na parte de cima, estão presentes as configurações que o usuario terá que editar "MYSQL_USER", "MYSQL_PASSWORD", "MYSQL_DB" E "MYSQL_HOST", preste atenção que a parte que deve ser editada é aquela após o simbolo de igual, agora darei uma explicação para o que deve ser preenchidos esses campos.</br>
   3.1 "MYSQL_USER" - Deve ser trocado pelo nome que o usuario cadastrou na instalação do MySQL Server, o padrão é root, se no usuario alterou ele deve utilizar o nome cadastrado.</br>
   3.2 "MYSQL_PASSWORD" - Esse é a senha cadastrada também no MySQL Server, o usuario deve escreve-la neste campo.</br>
   3.3 "MYSQL_DB" - Esse é o nome do banco que é "db_EPI", não deve ser alterado este campo.</br>
   3.4 "MYQL_HOST" - Este é mais um campo que provavelmente não deve ser alterado.</br>
4. Abra o terminal para inicializar o programa, no VsCode utilize o atalho Ctrl + ' ou Ctrl + j ou aba o terminal na parte superior direita, é o segundo terminal da esquerda para direita.</br>
5. É necessario dois terminais, pois um será o reponsavel por rodar a aplicação flask enquanto o outro a aplicação em si, então com o terminal em aberto na parte direita do terminal aperte na cruz ou utilize o comando Crtl + Shift + '.</br>
6. Com os dois terminais abertos, sendo possivel trocar entre eles na parte direita do terminal, em qualquer um deles utilize o seguinte comando "cd backend" e após isso utilize o comando "python app.py", ele deve aparecer inicializar e ficar assim:</br>
7. Não feche o terminal, apenas troque para o outro e utilize o seguinte comando "npm run dev" ele deve aparecer isto:</br>
8. Com o botão Ctrl pressionado click na linha "Local: http://localhost/", após isso será aberta uma aba no seu navegador, no qual você poderá finalmente poderá utilizar o programa.</br>
9. Com isso finalizo nosso guia 😎 </br>

<img src="/assets/img/obrigado.gif>
