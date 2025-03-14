export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      photos: {
        Row: {
          // the data expected from .select()
          id: number;
          uuid: string;
          photoname: string;
          tag: string | null;
        };
        Update: {
          // the data to be passed to .update()
          id: number;
          uuid?: string; // `not null` columns are optional on .update()
          tag: string;
        };
      };
    };
  };
}
