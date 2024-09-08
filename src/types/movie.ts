export interface TitleText {
  text: string;
  __typename: string;
}

export interface YearRange {
  year: number;
  endYear: number | null;
  __typename: string;
}

export interface Caption {
  plainText: string;
  __typename: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: Caption;
  __typename: string;
}

export interface TitleType {
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  __typename: string;
}

export default interface Movie {
  _id: string;
  id: string;
  primaryImage: Image | null;
  titleType: TitleType;
  titleText: TitleText;
  originalTitleText: TitleText;
  releaseYear: YearRange;
  releaseDate: string | null;
}
