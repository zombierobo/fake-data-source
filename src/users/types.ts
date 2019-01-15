export namespace UserDS {
  export interface User {
    userId: number;
    name: string;
    dob: Date;
    favColor: string;
    city: string;
  }
  
  export type UserKeySet = keyof User;
  
  export interface PaginationOption {
    offset: number; // index of the first record. starts from zero.
    size: number;
  }
  
  export interface SortOption {
    key: UserKeySet;
    order: 'asc' | 'desc';
  }
  
  export interface FilterOption {
    userId?: number;
    name?: string; // regular expression
    favColor?: string[]; // list of colors
    dob?: {
      from?: Date;
      to?: Date;
    };
    city?: string[]; // list of cities
  }
  
  export interface QueryOption {
    pagination?: PaginationOption;
    filter?: FilterOption;
    sort?: SortOption;
  }
  
  export interface DataSourceResponse {
    total: number;
    opts?: QueryOption;
    list: User[];
  }
}
