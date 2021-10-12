import { NextApiRequest, NextApiResponse } from 'next';
import qr from 'qrcode';

const qrcodeApi = async (
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> => {
  try {
    const url = request.query.url || 'https://www.twitter.com';

    const qrcodeUrl = await qr.toDataURL(String(url));

    return response.status(200).json({ qrcodeUrl });
  } catch (error) {
    return response.status(500).json(error);
  }
};

export default qrcodeApi;
