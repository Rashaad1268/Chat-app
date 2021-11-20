import type { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

type Data = {
    error?: string,
    message?: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const cookies = new Cookies(req, res);
        const token = req.body?.accessToken;
        if (!token) {
            res.status(400).json({
                error: 'Missing access token',
            });
            return;
        }
        cookies.set('token', token, {
            httpOnly: true,
            secure: false,
        });
        res.status(200).json({
            message: "Success"
        });
    } else {
        res.status(405).json({
            error: 'Method not allowed',
        });
    }
}