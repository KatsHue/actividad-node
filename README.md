<div align="center">

<h2 align="center">Papelería Creativa con Node.js</h2>

Página web de papelería creativa con formulario de contacto funcional, desarrollada con **Bootstrap** en el frontend y **Node.js + SendGrid** en el backend.  <br><br> Clase: <strong>Programación para Internet 2025B<strong>


</div>

## Funcionalidades

- Formulario de contacto que envía emails mediante **SendGrid**.  
- Alertas emergentes para confirmar envío o mostrar errores.

## Cómo ejecutar localmente

1. **Clonar el repositorio**
```bash
git clone https://github.com/KatsHue/actividad-node.git
cd actividad-node
```

2. Instalar dependencias del backend
```bash
cd backend
npm install
```

3. Crear archivo .env dentro de la carpeta backend con las siguientes variables:
```bash
PORT=5000
SENDGRID_API_KEY=TU_API_KEY_DE_SENDGRID
EMAIL_FROM=correo_verificado@tudominio.com
EMAIL_TO=correo_receptor@tudominio.com
```

4. Ejecutar el servidor
```bash
npm start
```



## Capturas

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/ff4cff3f-ebb3-41e9-849a-95287a6ea25b" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/a0475d8d-7984-4a75-970e-d89e24f88729" />
<img width="484" height="337" alt="image" src="https://github.com/user-attachments/assets/a37c225c-07cd-4bc4-baab-e6576811ddb5" />






