# Evaluación Técnica Geo

Para ejecutar la aplicación seguir los siguientes pasos:

1.Configurar las siguientes variables de entorno:
- GEO_USER_DB: conteniendo el nombre de usuario con acceso a la base de datos
- GEO_PASS_DB: contenido el password con el cual acceder a la base de datos
- Ejecutar el script data.sql para poder generar la base de datos con datos de prueba

2.Backend ejecutar los siguientes pasos: 
- $cd geo
- $./mvnw clean install
- $./mvnw spring-boot:run
- la aplicación debería ejecutar sobre el puerto 8080

3.Frontend ejecutar los siguientes pasos:
- $cd geo-frontend
- $npm install
- $npm start
- la aplicación deberia ejecutar sobre el puerto 4200
