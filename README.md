# Frontend y Calidad – React + Vite

**Incluye:** 3+ componentes funcionales con props/estado, manejo de eventos del DOM, consumo de API con `fetch` y ciclo de carga/éxito/error, y **pruebas unitarias** con Vitest + Testing Library.

## Scripts
```bash
npm install
npm run dev        # iniciar en http://localhost:5173
npm run test       # ejecutar pruebas
npm run build      # build de producción
```

## API usada
- `https://jsonplaceholder.typicode.com/users`

- Backend local (gestor-reservas)

El backend está incluido como submódulo en gestor-reservas. Para levantarlo localmente:

1. Clonar el repositorio con submódulos
git clone <URL_DEL_REPO_PRINCIPAL>
git submodule update --init --recursive

2. Entrar al directorio del backend
cd gestor-reservas

3. Compilar y ejecutar

Con Maven:

mvn clean install
mvn spring-boot:run

El backend quedará disponible en http://localhost:8085.

4. Configuración CORS

Asegurarse de que el backend permita peticiones desde el frontend (http://localhost:5173), por ejemplo agregando en los controladores:

@CrossOrigin(origins = "http://localhost:5173")

5. Probar endpoints

## Documentación de la API – Swagger

El backend Spring Boot incluye **Swagger/OpenAPI** para explorar y probar los endpoints.  

### 1. Acceder a Swagger UI

Con el backend levantado (`http://localhost:8085`), abrí en el navegador:

http://localhost:8085/swagger-ui.html

yaml
Copiar código

o en algunas versiones:

http://localhost:8085/swagger-ui/index.html

markdown
Copiar código

### 2. Qué se puede hacer en Swagger

- Visualizar todos los endpoints disponibles (`/usuarios`, `/reservas`)  
- Ver los parámetros y modelos esperados  
- Probar peticiones directamente desde el navegador (GET, POST, PUT, DELETE)  
- Ver las respuestas y códigos de estado
