// src/shared.types.ts

export type Gif = {
  id: string;
  title: string;
  url: string;
};

export type ApiResponse = {
  data: {
    id?: string;
    title?: string;
    images?: {
      original: {
        url: string;
      };
    };
  };
  meta: {
    status: number;
    msg: string;
  };
};