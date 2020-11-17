CREATE DATABASE elhombremasricodebabilonia;

USE elhombremasricodebabilonia;

--Tabla de usuarios
CREATE TABLE usuarios(
    id INT(11) NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL
);

ALTER  TABLE usuarios
    ADD PRIMARY KEY (id); 

ALTER  TABLE usuarios
    MODIFY id INT ( 11 ) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =  2 ; 

DESCRIBE usuarios; 

--Tabla de comprobanntes
CREATE TABLE comprobantes (
    id INT(11) NOT NULL,
    fecha timestamp NOT NULL DEFAULT current_timestamp,
    titulo VARCHAR(200) NOT NULL,
    monto INT(200) NOT NULL,
    descripcion TEXT,
    idUsuario INT(11),
    CONSTRAINT fk_usuarios FOREIGN KEY (idUsuario) REFERENCES usuarios (id) 
);

ALTER  TABLE comprobantes
    ADD PRIMARY KEY (id); 

ALTER  TABLE comprobantes
    MODIFY id INT ( 11 ) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =  2 ; 

DESCRIBE comprobantes; 