const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
const spin = () => {
  for (let i = 0; i < spinner.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinner[i]);
    } , 100 * i);
  }
  setTimeout(spin, 400);
  //spin();
};
spin();
