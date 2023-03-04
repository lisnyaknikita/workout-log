export const useGetPathId = (): string | number => {
  const pathName = window.location.pathname;
  const lastSymbol = pathName.length - 1;
  const pathId = +pathName[lastSymbol];
  return pathId;
};
