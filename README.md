# Modal component 
**Centiva Test VueJS frontend**

### Overview

VueJS application that allows evaluating compliance with requirements, reproduction of the designs with attention to detail, and code cleanliness.

Based on the design provided and the specifications below, the purpose of this application is to develop a VueJS component that would normally be found in the design system and that could be used in various applications.

## Requirements

The Modal must be customizable via props and slots to enable the following:

* Manage the content of the Modal from its parent (via a slot).
* Display an 'X' in the top right corner to allow closing the Modal.
* Close (or don't) the Modal when clicking outside of it.
* Include a custom footer to replace the default one containing the "Annuler" and "Confirmer" buttons (e.g., the footer where the "Ne plus afficher" checkbox is located in the design).
* Assign a status to the modal (info, success, alert and danger) in order to:
  * Display a colored border at the top
  * Change the color confirmation of the default confirmation button
  * Show up an icon next to the Modal title
    * Infos : [info-circle](https://fontawesome.com/icons/info-circle?f=classic&s=solid)
    * Success : [check-circle](https://fontawesome.com/icons/check-circle?style=solid&s=solid)
    * Alert : [exclamation-triangle](https://fontawesome.com/icons/exclamation-triangle?style=solid&s=solid)
    * Danger : [exclamation-circle](https://fontawesome.com/icons/exclamation-circle?style=solid&s=solid)
* The Modal should emit three events to its parent:
  * **Open** when it opens.
  * **Close** when it closes - either via the 'X', clicking outside, or clicking the "Annuler" button.
  * **Confirm** when the default confirmation button in the footer is clicked.
* The trigger to open the Modal should be outside the Modal component to ensure it is completely independent of its environment.
* The width of the Modal depends on its content but is limited to 580 pixels or 90% of the window width if the screen size is below 640 pixels.

**Props**

For your information, here is a list of props to create. Feel free to add or modify if it is considered pertinent.

|Prop|Requirement
|-|-
|active|* Boolean
||* Optional
||* Default: false
|title|* String
||* Mandatory
|closeOnOutsideClick|* Boolean
||* Optional
||* Default: true
|state|* String
||* Optional
||* Default: «info»

**Slots**

For your information, here is a list of slots to create. Feel free to add or modify if it is considered pertinent.

Représente le footer personnalisé. Il est facultatif; s’il n’est
pas fourni, nous affichons le footer par défaut (boutons
«Annuler» et «Confirmer»)

|Slot|Requirement
|-|-
|content|Represents the content of the Modal. It is mandatory; if not provided, it does not display in the component.
|footer|Represents the custom footer. It is optional, if not provided, it display the default footer (buttons «Annuler» and «Confirmer»)

### Constraints


* Descriptive and responsive mockup of the component [«Modal»](https://projects.invisionapp.com/share/Q5Z44MAPUV8#/screens)

## Technologies

The following technologies are used in this project:

||Version|Command for checking
|-|-:|-|
|node|20.11.1|node --version
|npm|10.2.4|npm --version
|vue-cli|5.0.8|ng --version

## Deployment

To deploy the application, follow these steps:

1. Install dependencies:

```bash
  npm install
```

2. Start the server:

```bash
  npm run serve
```

## Running Tests

Execute the following command to run the tests:

```bash
   npm run test:unit
```

## Solution Approach

The solution for building the Modal component involves the following steps:

> Note:
> This project was migrated from my old repository [GitHub: malfoc](https://github.com/malfoc)

**SCSS:** To maintain consistency and streamline styling across the project, global styles were implemented using SCSS. This includes defining variables for colors, fonts, and other design elements in `_variables.scss`. Additionally, mixins and utility classes were defined in `_mixins.scss` to facilitate reusability and maintainability. Global font styles were established in `_fonts.scss` to ensure uniform typography throughout the project.

**Environment:**  The environment for evaluating the Modal component includes a variety of buttons, each triggering the display of a unique Modal with distinct options. This environment provides a comprehensive testing ground to assess the functionality, responsiveness, and visual aspects of the Modal component under various scenarios.

**Vuex** Vuex, a state management library for Vue.js, was integrated into the project to handle global behaviors and manage application state efficiently. This ensures seamless communication between components and facilitates centralized state management, thereby enhancing maintainability and scalability.