document.addEventListener("DOMContentLoaded", () => {
  addToggleDarkThemeListener();
  initMermaid();
  initRemark42();
});

const initRemark42 = () => {
  if (getCookie('nightMode')) {
    window.REMARK42.changeTheme('dark');
  }
}

const initMermaid = () => {
  mermaid.initialize({
    startOnLoad: true,
    theme: "default",
  });
  window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
}

const toggleDarkTheme = () => {
  const theme = getCookie('nightMode') ? 'dark' : 'light';
  window.REMARK42.changeTheme(theme);
  //document.getElementById("solarized-style").setAttribute('href', '/assets/solarized_' + theme + '.css');
}

const addToggleDarkThemeListener = () => {
  const darkSwitchesArray = document.querySelectorAll('.dark-light-switch');
  darkSwitchesArray.forEach(darkSwitch => {
    darkSwitch.addEventListener('click', toggleDarkTheme);
  });
}
