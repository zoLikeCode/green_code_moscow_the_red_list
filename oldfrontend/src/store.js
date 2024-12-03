import { create } from 'zustand';

export const useShowParks = create((set) => ({
  parks: 'Все парки',
  setParks: (parks) => set(() => ({ parks: parks })),
}));

export const useShowTypes = create((set) => ({
  types: 'Виды',
  setTypes: (types) => set(() => ({ types: types })),
}));

export const useShowStatus = create((set) => ({
  status: 'Статус',
  setStatus: (status) => set(() => ({ status: status })),
}));

export const useShowCountOnPage = create((set) => ({
  countShows: 10,
  setCountShows: (countShows) => set(() => ({ countShows: countShows })),
}));

export const useSearchAnimals = create((set) => ({
  searchAnimals: '',
  setSearchAnimals: (searchAnimals) => set(() => ({ searchAnimals: searchAnimals })),
}));
