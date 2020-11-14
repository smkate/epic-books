export const toRub = (value) => {

  if (value < 10000) {
    return `${value}&thinsp;₽`;
  } else {
    return `${value.toLocaleString("ru-RU")}&thinsp;₽`;
  }
};

export const declOfNum = (count, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const word =
    titles[
      count % 100 > 4 && count % 100 < 20
        ? 2
        : cases[count % 10 < 5 ? count % 10 : 5]
    ];

  return `${count}&nbsp;${word}`;
};
