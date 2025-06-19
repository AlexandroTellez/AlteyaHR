<p align="center">
  <img src="./frontend/src/assets/Logo.png" alt="AlteyaHR Logo" width="300"/><br/>
  <strong>🚧 Project Status: In Progress / Under Development </strong> 
</p>


AlteyaHR is currently under active development. Many features are still being implemented, and the project structure may evolve as the application grows.

---

## 💡 **Project Purpose**

**AlteyaHR** (Alteya Human Resources) is an employee management web application designed to help organizations effectively manage their workforce.

The platform aims to offer an intuitive and modern solution for companies to:

* Maintain centralized employee records.
* Manage job titles, departments, and contracts.
* Organize and visualize employee data.
* Support future features like authentication, permissions, reporting, and more.

The project is being built as part of a continuous learning process combining frontend, backend, and full-stack development best practices.

---

## 🔧 **Technology Stack**

### Frontend

* **Framework:** Angular 20 (Standalone components)
* **Language:** TypeScript
* **Styling:** SCSS / Bootstrap / FontAwesome

### Backend

* **Framework:** Spring Boot (Java 21)
* **Database:** MySQL
* **Build Tool:** Maven

---

## 🔻 **Project Structure**

### Main Folder Structure:

```
AlteyaHR/
├── frontend/
└── backend/
```

### Frontend Structure (`frontend/`):

```
.angular/
.vscode/
node_modules/
public/
    └── Favicon.png
src/
  ├── app/
  │   ├── core/
  │   │   ├── guards/
  │   │   ├── interceptors/
  │   │   ├── model/
  │   │   │   └── employee.model.ts
  │   │   ├── services/
  │   │   │   └── employee-service.ts
  │   │   └── utils/
  │   ├── features/
  │   │   └── employee/
  │   │       ├── components/
  │   │       │   ├── employee-card/
  │   │       │   │   ├── employee-card.component.html/.scss/.spec.ts/.ts
  │   │       │   └── employee-modal/
  │   │       │       ├── employee-modal.component.html/.scss/.spec.ts/.ts
  │   │       └── pages/
  │   │           └── employee-page.component.html/.scss/.spec.ts/.ts
  │   ├── shared/
  │   │   ├── components/
  │   │   │   ├── breadcrumb/
  │   │   │   │   ├── breadcrumb.component.html/.scss/.spec.ts/.ts
  │   │   │   └── navbar/
  │   │   │       ├── navbar.component.html/.scss/.spect.ts/.ts
  │   │   ├── directives/
  │   │   └── pipes/
  │   ├── app.config.ts
  │   ├── app.html
  │   ├── app.routes.ts
  │   ├── app.scss
  │   ├── app.spec.ts
  │   └── app.ts
  ├── assets/
  │   ├── Logo-fondo-blanco.png
  │   ├── Logo.png
  │   └── Monogram.PNG
  ├── environments/
  │   ├── environment.prod.ts
  │   └── environment.ts
  ├── index.html
  ├── main.ts
  └── styles.scss
.editorconfig
.gitignore
angular.json
package-lock.json
package.json
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
README.md
```

### Backend Structure (`backend/`):

```
.idea/
.mvn/
src/
  ├── main/
  │   ├── java/com/AlteyaHR/
  │   │   ├── AlteyaHrApplication.java
  │   │   ├── controller/
  │   │   │   └── EmployeeController.java
  │   │   ├── exception/
  │   │   │   └── UserNotFoundException.java
  |   |   |   └── ValidationExceptionHandler.java
  │   │   ├── model/
  │   │   │   └── Employee.java
  │   │   ├── repo/
  │   │   │   └── EmployeeRepo.java
  │   │   └── service/
  │   │       └── EmployeeService.java
  │   └── resources/
  │       ├── application.properties
  │       ├── application.properties.example
  │       ├── static/
  │       └── templates/
  ├── test/java/com/AlteyaHR/AlteyaHrApplicationTests.java
  
backend/target/
.gitattributes
.gitignore
HELP.md
mvnw
mvnw.cmd
pom.xml
```

---

## 🛠️ **Planned Features**

- Full authentication system with role-based access control.
- Dashboard with statistics, analytics, and visual reports.
- Extended Employee Management (UI improvements, advanced filtering and search, detailed contract and role management).
- Department and Settings management.
- Data import/export functionality.
- Fully responsive UI for all device types.
- Deployment-ready Docker setup compatible with Render and Vercel hosting.

---

## 🔹 **Project Motivation**

This project is part of an ongoing full-stack learning path combining:

* Angular standalone best practices.
* Backend development with Spring Boot & Java.
* Real-world software architecture and modularization.
* Practical full-stack integration and API development.

---

## 📄 **License**

This project is open-source and free to use for educational and personal development purposes.

---

## 📢 **Disclaimer**

> **Note:** This project is a work in progress. Many features are still under development, and the structure may change as the project evolves.

---


## 📬 **Get In Touch**  

### **Alexandro Tellez** | **Junior Full Stack Developer**  

`Angular` | `Spring Boot` | `MySQL`  

---

🔗 **Connect with me**:  

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alex-tellez-y)  
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/AlexandroTellez)  
[![Portfolio](https://img.shields.io/badge/-Portfolio-FF5722?style=flat&logo=google-chrome&logoColor=white)](https://www.alextellezy.com/)  

✉ **Email**:  
[alextellezyanes@gmail.com](mailto:alextellezyanes@gmail.com)  

---

🚀 *"Collaborations and opportunities are always welcome!"*  
