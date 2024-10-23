export type GridMap = {
  [key: string]: {
    up: string | null;
    down: string | null;
    left: string | null;
    right: string | null;
  };
};
