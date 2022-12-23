export interface BannerObject {
  message?: string;
  status?: string;
}

export interface RootObjectBanner {
  result_object: BannerObject[];
  result_num?: number;
  result_message?: string;
}
