document.addEventListener("DOMContentLoaded", () => {
  initRemark42();
});

const initRemark42 = () => {
  const darkSwitchesArray = document.querySelectorAll('.dark-light-switch');
  darkSwitchesArray.forEach(darkSwitch => {
    darkSwitch.addEventListener('click', toggleRemark42Theme);
  });

  if (getCookie('nightMode')) {
    window.REMARK42.changeTheme('dark');
  }
}

const toggleRemark42Theme = () => {
  const theme = getCookie('nightMode') ? 'dark' : 'light';
  window.REMARK42.changeTheme(theme);
}
