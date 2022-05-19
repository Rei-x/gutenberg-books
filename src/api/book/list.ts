import { removeUndefinedFromObject } from "../../utils/removeUndefinedFromObject";
import { url } from "../config";

export const listBooks =
  ({ search, languages }: { search?: string; languages?: string }) =>
  async ({ pageParam }: { pageParam?: string }) => {
    const params = {
      search,
      languages,
      page: pageParam,
    };

    removeUndefinedFromObject(params);

    const urlSearchParams = new URLSearchParams(
      params as Record<string, string>
    );

    const data = await fetch(`${url}/book?${urlSearchParams}`);
    return data.json();
  };
