from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configurações do banco de dados MySQL
# Coloque seus dados aqui
app.config['MYSQL_USER'] = 'nome do workbench(normalmente root)'
app.config['MYSQL_PASSWORD'] = 'senha workbench'
app.config['MYSQL_DB'] = 'db_EPI' #Nome do banco não altere
app.config['MYSQL_HOST'] = 'localhost' #Nome do host não altere

mysql = MySQL(app)

@app.route('/api/epis', methods=['GET'])
def get_epis():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM EPI")
    rows = cur.fetchall()
    cur.close()
    return jsonify(rows)

@app.route('/api/funcionarios', methods=['POST'])
def add_funcionario():
    data = request.get_json()
    nome = data['nome']
    email = data['email']
    departamento = data['departamento']
    senha = data['senha']
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM funcionario WHERE email = %s", (email,))
    existing_user = cur.fetchone()
    if existing_user:
        return jsonify({'message': 'Email já cadastrado.'}), 409
    cur.execute("INSERT INTO funcionario (nome, email, departamento, senha) VALUES (%s, %s, %s, %s)", (nome, email, departamento, senha))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Funcionário cadastrado com sucesso!'})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    registro = data['registro']
    senha = data['senha']
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM funcionario WHERE (nome = %s OR email = %s) AND senha = %s", (registro, registro, senha))
    usuario = cur.fetchone()
    cur.close()
    if usuario:
        return jsonify({'message': 'Login bem-sucedido!', 'usuario': {'nome': usuario[1], 'email': usuario[2], 'departamento': usuario[3]}})
    else:
        return jsonify({'message': 'Registro ou senha incorretos'}), 401

if __name__ == '__main__':
    app.run(debug=True)
