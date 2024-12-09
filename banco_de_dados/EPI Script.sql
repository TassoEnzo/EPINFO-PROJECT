create database db_EPI;
use db_EPI;

#drop database db_EPI;

CREATE TABLE funcionario (
    idFuncionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    departamento VARCHAR(100),
    senha VARCHAR(32)
);

CREATE TABLE EPI (
    idEPI INT PRIMARY KEY,
    marca VARCHAR(100),
    tipo VARCHAR(100)
);

CREATE TABLE estoque (
    idEstoque INT PRIMARY KEY,
    idEPI INT,
    dataValidade DATE,
    FOREIGN KEY (idEPI) REFERENCES EPI(idEPI)
);

CREATE TABLE epi_funcionario (
    idFuncionario INT, 
    idEstoque INT,
    dataRetirada DATE,
    dataDevolucao DATE,
    FOREIGN KEY (idFuncionario) REFERENCES funcionario(idFuncionario), 
    FOREIGN KEY (idEstoque) REFERENCES estoque(idEstoque)
);

select*from funcionario;