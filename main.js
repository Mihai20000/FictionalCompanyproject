const beforeUnloadListener = (event) => {
  event.preventDefault();
  return (event.returnValue = 'Are you sure you want to exit?');
};
