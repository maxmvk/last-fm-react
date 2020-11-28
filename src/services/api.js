import axios from 'axios';

const API_KEY = 'a5fb42f50f89f9b58dd27259ca9ae98f'

const instance = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/'
});

export const api = {

  async getTopTracks() {
    const response = await instance.get(`?method=chart.gettoptracks&api_key=${API_KEY}&format=json`);
    return response.data;
  },

  async getArtistInfo(artistName) {
    const response = await instance.get(`?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`);
    return response.data;
  },

  async getSearchResult(data) {
    const response = await instance.get(`?method=track.search&track=${data}&api_key=${API_KEY}&format=json`);
    return response.data;
  }
};