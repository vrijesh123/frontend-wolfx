import APIBase from "@/utils/apiBase";

const base_url = 'https://crawdad-game-probably.ngrok-free.app/api'

export const digitalAssetApi = new APIBase({
  baseURL: `${base_url}/incident/anti-phishing/view/`,
  // baseURL: `${base_url}/asset/executive-profile/view/`,

  tokenKey: true,
  // debounceDelay: 1000,
});