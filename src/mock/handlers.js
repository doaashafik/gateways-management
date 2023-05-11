import { GET_ALL_PRODUCTS } from "../APIS";
import { rest } from 'msw';

export const handlers = [
    rest.get(`${GET_ALL_PRODUCTS}`, async (req, res, ctx) => {
        req.url.searchParams.get('q');
        const originalResponse = await ctx.fetch(req)
        const originalResponseData = await originalResponse.json();
        console.log(originalResponseData, 'data.....................')
        return res(
            ctx.json({
                ...originalResponseData
            })
        )
    })
];