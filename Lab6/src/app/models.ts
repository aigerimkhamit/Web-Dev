export interface Album {
  userId: number;
  id: number;
  title:string;
  editing: boolean;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
