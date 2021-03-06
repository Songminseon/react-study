export const dateFormat = (date: string) => {
  const year = date.substring(0, 2);
  const month = date.substring(5, 7);
  return `${year}년 ${month}일`;
};

export const gradeFormat = (grade: number) => {
  return Math.round(grade * 10) / 10;
};
