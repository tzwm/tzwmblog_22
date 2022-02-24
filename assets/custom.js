document.addEventListener("DOMContentLoaded", () => {
  initUtterances();
});

const initUtterances = () => {
  const darkSwitchesArray = document.querySelectorAll('.dark-light-switch');
  darkSwitchesArray.forEach(darkSwitch => {
    darkSwitch.addEventListener('click', toggleUtterancesTheme);
  });

  addEventListener('message', event => {
    if (event.origin !== 'https://utteranc.es') {
      return;
    }
    if (!getCookie('nightMode')) {
      return;
    }
    toggleUtterancesTheme();
  });
};

const toggleUtterancesTheme = () => {
  const theme = getCookie('nightMode') ? 'github-dark' : 'boxy-light'
  const message = {
    type: 'set-theme',
    theme: theme
  };
  const utterances = document.querySelector('.utterances-frame').contentWindow; // try event.source instead
  utterances.postMessage(message, 'https://utteranc.es');
}
