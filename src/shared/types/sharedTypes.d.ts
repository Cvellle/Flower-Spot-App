interface IFlower {
  id: string;
  name: string;
  latinName: string;
  genus: string;
  pictureUrl: string;
  authorId: string;
  sightingsNum: number;
}

interface ISighting {
  id: string;
  name: string;
  authorId: string;
  flowerId: string;
  latitude: number;
  longitude: number;
  commentCount: number;
  likeCount: number;
  pictureUrl: string;
  description: string;
}
