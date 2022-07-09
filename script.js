function back(pay) {
  console.log(`50000 X ` + parseInt(pay / 50000));
  pay %= 50000;
  console.log(`10000 X ` + parseInt(pay / 10000));
  pay %= 10000;
  console.log(`5000 X ` + parseInt(pay / 5000));
  pay %= 5000;
  console.log(`1000 X ` + parseInt(pay / 1000));
  pay %= 1000;
  console.log(`500 X ` + parseInt(pay / 500));
  pay %= 500;
}

back(12300);
