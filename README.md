# CF8Frontend

Μετα το κατεβασμα τη εφαρμογης ο χρηστης πρεπει να τρεξει την εντολη npm install απο ενα command prompt terminal για να εγκατασταθουν τα dependencies.  
Η εφαρμογη τρεχει με την εντολη ng serve απο ενα command prompt στο port 4200 του localhost.  
Η εφαρμογη γινεται build με την εντολη ng build.  
Μετα το build η javascript τρεχει με την εντολη npx serve dist/CF8-frontend/browser -s -l 5000 στο port 5000 του localhost η σε οποιο port επιθυμει ο χρηστης.  
Το frontend παρεχει σελιδες για login και signup καθως και σελιδα profile με τα στοιχεια του χρηστη. Στη σελιδα show users εχουν προσβαση μονο οι χρηστες με ρολο Administrator. 

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
