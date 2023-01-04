import { createGlobalStyle, css } from "styled-components";
import schoolZoneBg from "../images/footer-bg.png";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  translucentEffect: "rgba(255, 255, 255, 0.7)",
  transparent: "rgba(255, 255, 255, 0)",
  garamond: "'EB Garamond', serif",
  hind: "'Hind Madurai', sans-serif",
  primaryColor: "#f46e16",
  transparentPrimaryColor: "rgba(244,110,22, 0.7)",
  primaryColorHover: "#fef2eb",
  primaryColorActive: "#fbd0b5",
  secondaryColor: "#63b231",
  transparentSecondaryColor: "rgba(99,178,49, 0.7)",
  darkSecondaryColor: " #478320",
  lightTint: "#54f6f6",
  darkTint: "#fb413f",
  deepGray: "rgba(0, 0, 0, 1)",
  whitesmoke: "whitesmoke",
  midGray: "#d9d9d9",
  darkMidGray: "#bababa",
  secondaryDarkMidGray: "rgba(0, 149, 12, 0.5)",
  white: "white",
  red: "rgba(255, 0, 0, 1)",
  lightRed: "rgba(255, 0, 0, 0.3)",
  green: "#00af00",
  lime: "#00d600",
  orange: "orange",
  lightGray: " rgba(0, 0, 0, 0.3)",
  lightestGray: "rgba(0, 0, 0, 0.1)",
  whiteSmoke: "rgba(0, 0, 0, 0.05)",
  systemFont:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  darkGray: "rgba(0, 0, 0, 0.4)",
  textShadow: "-1px -1px var(--light-tint), 1px 1px var(--dark-tint)",
  sideBarHeadingColor: "#8f4102",
  filter: "invert(0)",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  translucentEffect: "rgba(0, 0, 0, 0.7)",
  transparent: "rgba(255, 255, 255, 0)",
  garamond: "'EB Garamond', serif",
  hind: "'Hind Madurai', sans-serif",
  primaryColor: "#f46e16",
  transparentPrimaryColor: "rgba(244,110,22, 0.7)",
  primaryColorHover: "rgba(0, 0, 0, 0.7)",
  primaryColorActive: "#fdae7d",
  secondaryColor: "#63b231",
  transparentSecondaryColor: "rgba(99,178,49, 0.7)",
  darkSecondaryColor: "#478320",
  lightTint: "#54f6f6",
  darkTint: "#fb413f",
  deepGray: "rgba(0, 0, 0, 1)",
  whitesmoke: "whitesmoke",
  midGray: "#d9d9d9",
  darkMidGray: "#bababa",
  secondaryDarkMidGray: "rgba(0, 149, 12, 0.5)",
  white: "white",
  lightGray: " rgba(0, 0, 0, 0.3)",
  lightestGray: "rgba(0, 0, 0, 0.1)",
  whiteSmoke: "#888888",
  red: "rgba(255, 0, 0, 1)",
  lightRed: "rgba(255, 0, 0, 0.3)",
  green: "rgba(0, 255, 0, 1)",
  lime: "#00bb00",
  orange: "orange",
  systemFont:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  darkGray: "rgba(0, 0, 0, 0.7)",
  textShadow: "-1px -1px var(--light-tint), 1px 1px var(--dark-tint)",
  sideBarHeadingColor: "#8f4102",
  filter: "invert(100%)",
};

export const GlobalStyles = createGlobalStyle`
    :root {
        --garamond: ${({ theme }) => theme.garamond};
        --hind: ${({ theme }) => theme.hind};
        --background: ${({ theme }) => theme.body};
        --text: ${({ theme }) => theme.text};
        --primary-color: ${({ theme }) => theme.primaryColor};
        --transparent-primary-color: ${({ theme }) =>
          theme.transparentPrimaryColor};
        --primary-color-hover:  ${({ theme }) => theme.primaryColorHover};
        --primary-color-active: ${({ theme }) => theme.primaryColorActive};
        --secondary-color: ${({ theme }) => theme.secondaryColor};
        --transparent-secondary-color: ${({ theme }) =>
          theme.transparentSecondaryColor};
        --dark-secondary-color: ${({ theme }) => theme.darkSecondaryColor};
        --light-tint: ${({ theme }) => theme.lightTint};
        --dark-tint: ${({ theme }) => theme.darkTint};
        --deep-gray: ${({ theme }) => theme.deepGray};
        --whitesmoke: ${({ theme }) => theme.whiteSmoke};
        --mid-gray: ${({ theme }) => theme.midGray};
        --dark-mid-gray: ${({ theme }) => theme.darkMidGray};
        --secondary-dark-mid-gray:${({ theme }) => theme.secondaryDarkMidGray};
        --white: ${({ theme }) => theme.white};
        --red: ${({ theme }) => theme.red};
        --light-red: ${({ theme }) => theme.lightRed};
        --transparent: ${({ theme }) => theme.transparent};
        --green: ${({ theme }) => theme.green};
        --lime: ${({ theme }) => theme.lime};
        --orange: ${({ theme }) => theme.orange};
        --light-gray: ${({ theme }) => theme.lightGray};
        --lightest-gray: ${({ theme }) => theme.lightestGray}
        --whitesmoke: ${({ theme }) => theme.whiteSmoke};
        --system-font: ${({ theme }) => theme.systemFont};
        --dark-gray: ${({ theme }) => theme.darkGray};
        --translucent-white: ${({ theme }) => theme.translucentEffect};
        --text-shadow: ${({ theme }) => theme.textShadow};
        --sidebar-heading-color: ${({ theme }) => theme.sideBarHeadingColor};
        --filter: ${({ theme }) => theme.filter};

    }
    #root {
      background-image: ${({ isLoggedIn }) =>
        isLoggedIn
          ? css`
    url(${schoolZoneBg});
      background-size: 240px;
      background-repeat: repeat;
      background-attachment: fixed;
      position: relative;

      ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        background: linear-gradient(
              to bottom,
              var(--transparent-primary-color),
              var(--transparent-secondary-color)
            );
      }
      `
          : css`
    url(${schoolZoneBg});
      background-size: 240px;
      background-repeat: repeat;
      background-attachment: fixed;
      position: relative;

      ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        background: linear-gradient(
              to bottom,
              var(--transparent-primary-color),
              var(--transparent-secondary-color)
            );
      }
      `}
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        position: relative;
        background: ${({ theme }) => theme.body};
    }

    /* DEThemes Scheduler popup styles */
    body .dx-field-item-help-text, body .dx-field-item-label-text {
        color: var(--primary-color);
    }
    body .dx-texteditor-input {
    font-family: var(--hind);
    }
    body .dx-scheduler-time-panel-cell.dx-scheduler-time-panel-current-time-cell {
        color: var(--primary-color);
    }
    body .dx-scheduler-time-panel-cell.dx-scheduler-time-panel-current-time-cell::before {
        background-color:var(--secondary-color);
    }
    body .dx-scheduler-date-time-indicator {
      background-color:var(--secondary-color);
    }
    body .dx-scheduler-date-time-indicator::before {
    color: var(--primary-color);
    }
    body .dx-popup-wrapper.dx-scheduler-appointment-tooltip-wrapper .dx-tooltip-appointment-item .dx-tooltip-appointment-item-content .dx-tooltip-appointment-item-content-subject, .dx-scheduler-overlay-panel .dx-tooltip-appointment-item .dx-tooltip-appointment-item-content .dx-tooltip-appointment-item-content-subject {
      font-family: var(--hind);
    }
    body .dx-popup-wrapper.dx-scheduler-appointment-tooltip-wrapper .dx-tooltip-appointment-item .dx-tooltip-appointment-item-content .dx-tooltip-appointment-item-content-date, .dx-scheduler-overlay-panel .dx-tooltip-appointment-item .dx-tooltip-appointment-item-content .dx-tooltip-appointment-item-content-date {
      font-family: var(--hind);
    }
    body .dx-scheduler-appointment-content > * {
      font-family: var(--hind);
    }
    body .dx-scheduler-appointment-collector .dx-button-content span:last-child, .dx-scheduler-appointment-collector .dx-scheduler-appointment-collector-content span:last-child {
      font-family: var(--hind);
    }
    body .dx-scheduler-appointment {
      background-color: var(--secondary-color);
    }
    body .dx-scheduler-appointment-collector.dx-button, .dx-scheduler-appointment-collector.dx-button.dx-state-active, .dx-scheduler-appointment-collector.dx-button.dx-state-focused, .dx-scheduler-appointment-collector.dx-button.dx-state-hover {
      background-color: var(--secondary-color);
    }
    body .dx-popup-wrapper.dx-scheduler-appointment-tooltip-wrapper .dx-tooltip-appointment-item .dx-tooltip-appointment-item-marker-body, .dx-scheduler-overlay-panel .dx-tooltip-appointment-item .dx-tooltip-appointment-item-marker-body {
      background-color: var(--secondary-color);
    }
    body .dx-scheduler-appointment-collector.dx-button,
    body .dx-scheduler-appointment-collector.dx-button.dx-state-active,
    body .dx-scheduler-appointment-collector.dx-button.dx-state-focused,
    body .dx-scheduler-appointment-collector.dx-button.dx-state-hover {
      background-color: var(--secondary-color);
    }
    body .dx-calendar-cell.dx-calendar-selected-date.dx-calendar-contoured-date,
    body .dx-calendar-cell.dx-calendar-selected-date.dx-calendar-today.dx-calendar-contoured-date {
      box-shadow: inset 0 0 0 1px #6c6c6c,
        inset 0 0 0 1000px var(--primary-color);
    }

    body .dx-calendar-navigator .dx-calendar-caption-button.dx-button .dx-button-content {
    color: var(--primary-color);
    }
    body .dx-dropdownlist-popup-wrapper .dx-list:not(.dx-list-select-decorator-enabled) .dx-list-item-content {
      padding: 7px 9px;
      font-family: var(--hind);
    }
    body .dx-timeview-hourarrow {
      filter: hue-rotate(195deg);
    }   
    body .dx-timeview-minutearrow {
      filter: hue-rotate(260deg);
    }
    body .dx-icon-chevronright::before {
      content: "\f010";
      color: var(--primary-color);
    }
    body .dx-icon-chevronleft::before {
      content: "\f012";
      color: var(--primary-color);
    }
    body .dx-scheduler-header-panel-cell.dx-scheduler-header-panel-current-time-cell {
      color: var(--primary-color);
    }
    body {
      .dx-scheduler-header-panel-cell.dx-scheduler-header-panel-current-time-cell::before {
        background-color: var(--primary-color);
      }
    }

    body .dx-dropdowneditor-button-visible body .dx-texteditor-input {
      font-family: var(--hind);
      caret-color: var(--primary-color);
    }
    
    body .dx-dropdowneditor-input-wrapper body .dx-texteditor-input {
      font-family: var(--hind);
      caret-color: var(--primary-color);
    }
    body .dx-dropdowneditor-button-visible body .dx-texteditor-input {
      padding-right: 0;
      font-family: var(--hind);
      caret-color: var(--primary-color);
    }
    body .dx-dropdowneditor-input-wrapper body .dx-texteditor-input {
      font-family: var(--hind);
      caret-color: var(--primary-color);
    }
    body .dx-overlay-wrapper input, body.dx-overlay-wrapper textarea {
      font-family: var(--hind);
      caret-color: var(--primary-color);
    }
    body .dx-textarea .dx-texteditor-input {
      font-family: var(--hind);
      caret-color: var(--primary-color);
    }
    body .dx-texteditor.dx-state-hover {
      border-color: var(--primary-color-active);
  }
    body .dx-texteditor.dx-state-active.dx-editor-outlined,
    body .dx-texteditor.dx-state-active.dx-editor-underlined,
    body .dx-texteditor.dx-state-active.dx-editor-filled,
    body .dx-texteditor.dx-state-focused.dx-editor-filled,
    body .dx-texteditor.dx-state-focused.dx-editor-outlined,
    body .dx-texteditor.dx-state-focused.dx-editor-underlined {
      border-color: var(--primary-color);
    }
    body .dx-button-text {
      font-family: var(--hind);
    }
    body .dx-field-item-content .dx-field-item-content-location-bottom {
      font-family: var(--hind);
    }
    body .dx-recurrence-repeat-end-label {
      font-family: var(--hind);

    }   
    body .dx-radiobutton-icon-checked .dx-radiobutton-icon-dot {
      background: var(--secondary-color);
    }

    body .dx-radiobutton.dx-state-hover .dx-radiobutton-icon::before {
        border-color: var(--dark-secondary-color);
    }

    body .dx-switch-on-value .dx-switch-handle::before {
        background-color: var(--secondary-color);
    }
    body .dx-switch.dx-state-hover .dx-switch-handle::before {
        background-color: var(--secondary-color);
    }
    body .dx-switch.dx-state-hover .dx-switch-container {
        border-color: var(--secondary-color);
    }
    body .dx-switch.dx-state-focused .dx-switch-handle::before {
        background-color: var(--secondary-color);
    }
    body .dx-switch.dx-state-focused.dx-state-active .dx-switch-handle::before {
        background-color: var(--secondary-color);
    }
    body .dx-switch.dx-state-focused .dx-switch-container {
        border-color: var(--secondary-color);
    }
    body .dx-switch-handle::before {
        background-color: var(--dark-secondary-color);
    }

    body .dx-scheduler-all-day-table-cell.dx-scheduler-focused-cell,
    body .dx-scheduler-date-table-cell.dx-scheduler-focused-cell {
      box-shadow: inset 0 0 0 1px var(--primary-color);
    }
    body .dx-scheduler-all-day-table-cell.dx-state-focused,
    body .dx-scheduler-date-table-cell.dx-state-focused {
      background-color: var(--primary-color-active);
      opacity: 1;
    }
    body .dx-scheduler-all-day-table-cell.dx-state-hover.dx-state-focused,
    body .dx-scheduler-date-table-cell.dx-state-hover.dx-state-focused {
      background-color: var(--primary-color-active);
    }

    /* HTML Editor Styles */
    
    body .dx-tabpanel.dx-state-focused > .dx-tabpanel-tabs .dx-tab.dx-tab-selected {
      -webkit-box-shadow: inset 0 1px var(--primary-color),
        inset -1px 0 var(--primary-color), inset 1px 0 var(--primary-color);
      box-shadow: inset 0 1px var(--primary-color),
        inset -1px 0 var(--primary-color), inset 1px 0 var(--primary-color);
    }
    body .dx-htmleditor-add-image-popup > .dx-overlay-content > .dx-popup-content .dx-tabpanel.dx-state-focused .dx-tab.dx-tab-selected:first-child {
      -webkit-box-shadow: inset 0 1px var(--primary-color),
        inset -1px 0 var(--primary-color), inset 1px 0 var(--primary-color);
      box-shadow: inset 0 1px var(--primary-color),
        inset -1px 0 var(--primary-color), inset 1px 0 var(--primary-color);
    }
    body .dx-tabpanel.dx-state-focused > .dx-tabpanel-tabs .dx-tab {
      -webkit-box-shadow: inset 0 1px,inset 0 -1px var(--primary-color);
      box-shadow: inset 0 1px,inset 0 -1px var(--primary-color)
    }
    body .dx-htmleditor-add-image-popup > .dx-overlay-content > .dx-popup-content .dx-tabpanel.dx-state-focused .dx-tab:first-child {
      -webkit-box-shadow: inset 0 1px #4d4d4d,inset 0 0 #4d4d4d,inset 0 -1px var(--primary-color),inset 0 0 #4d4d4d;
      box-shadow: inset 0 1px #4d4d4d,inset 0 0 #4d4d4d,inset 0 -1px var(--primary-color),inset 0 0 #4d4d4d;
    }
    body .dx-tabpanel.dx-state-focused > .dx-tabpanel-tabs .dx-tabs {
    -webkit-box-shadow: inset 0 1px var(--primary-color);
    -webkit-box-shadow: inset 0 -1px var(--primary-color),inset 0 1px,inset -1px 0,inset 1px 0;
      box-shadow: inset 0 -1px var(--primary-color),inset 0 1px,inset -1px 0,inset 1px 0;
    }

     h1, h2, h3, h4, h5, label {
        color: var(--primary-color);
        font-family: var(--garamond);
    }

    .primary-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--primary-color);
      font-family: var(--hind);
      color: var(--white);
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: var(--white);
      }
    
    }
    
    .secondary-btn {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--background);
      font-family: var(--hind);
      border: 2px solid var(--secondary-color);
      color: var(--secondary-color);
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        transform: scale(1.1);
        box-shadow: 0 5px 10px var(--secondary-dark-mid-gray);
        background: var(--secondary-color);
        color: var(--white);
      }
    }
    .primary-white-btn {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--background);
      font-family: var(--hind);
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        transform: scale(1.05);
        box-shadow: 0 5px 10px var(--primary-dark-mid-gray);
        background: var(--primary-color);
        color: var(--white);
      }
    }
    .white-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      border: 1px solid var(--dark-mid-gray);
      background: var(--background);
      font-family: var(--hind);
      color: var(--text);
      font-weight: 500;
      transition: all 200ms ease;
      width: 100%;
      cursor: pointer;
      transition: all 300ms ease;

      :hover {
        background: var(--white);
          box-shadow: 0 5px 10px var(--secondary-dark-mid-gray);
          color: var(--secondary-color);
      }
    }
    .cancel-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      border: 1px solid var(--dark-mid-gray);
      background: var(--background);
      font-family: var(--hind);
      color: var(--text);
      font-weight: 500;
      transition: all 200ms ease;
      width: 100%;
      cursor: pointer;
      transition: all 300ms ease;

      :hover {
        background: var(--translucent-white);
        box-shadow: 0 5px 10px var(--dark-gray);
        color: var(--text);
      }
    
    }
    .delete-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--background);
      border: 1px solid var(--red);
      font-family: var(--hind);
      color: var(--red);
      font-weight: 500;
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        background: var(--red);
        box-shadow: 0 5px 10px var(--dark-gray);
        color: var(--white);
        transform: scale(1.05);
      }
    
    }
`;
