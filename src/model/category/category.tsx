export interface CategoryObject {
  id: number;
  API?: string;
  Description?: string;
  Auth?: any;
  HTTPS?: any;
  Cors?: any;
  Link?: any;
  Category?: string;
}

export interface RootObjectCategorie {
  result_object: CategoryObject[];
  result_num?: number;
  result_message?: string;
}
