import { url } from "@/api/config";
import { rest } from "msw";

export const handlers = [
  rest.get(url + "/book/:bookId", (req, res, ctx) => {
    return res(ctx.json({
      bookId: req.params.bookId
    }));
  }),
];
