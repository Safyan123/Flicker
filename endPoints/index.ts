import { API_KEY, POSTFIX_URL, PREFIX_URL } from "../config";
import { FlickerInfo } from "../typings";


export const flickerSearchApi = async (queryText: string = "kittens"): Promise<FlickerInfo[] | undefined> => {

  const url = `${PREFIX_URL}${API_KEY}${POSTFIX_URL}${queryText}`
  console.log('url: ', url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const responseJson = await response.json()
    if (responseJson.stat === "ok" && responseJson.photos && responseJson.photos.photo.length > 0) {
      return responseJson.photos.photo
    }
    return undefined;
  } catch (error) {
    console.log('error: ', error.json());
    return undefined;
  }
}