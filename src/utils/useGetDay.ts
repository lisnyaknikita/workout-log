import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useGetDay = (): string => {
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
    useSelector((state: RootState) => state.days);

  const pathName = window.location.pathname;
  const lastSymbol = pathName.length - 1;
  const idDay = +pathName[lastSymbol];
  let day: string = '';
  idDay === 0
    ? (day = monday)
    : idDay === 1
    ? (day = tuesday)
    : idDay === 2
    ? (day = wednesday)
    : idDay === 3
    ? (day = thursday)
    : idDay === 4
    ? (day = friday)
    : idDay === 5
    ? (day = saturday)
    : idDay === 6
    ? (day = sunday)
    : (day = '');
  return day;
};
