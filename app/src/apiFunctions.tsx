import axios from 'axios';
import { ICard, IDeck, IUser } from './types';

export const getUser = async (id: number): Promise<IUser> => {
  let res = await axios.get(`http://localhost:8080/users/${id}`);
  return res.data;
};

export const getUserDecks = async (id: number): Promise<Array<IDeck>> => {
  let res = await axios.get(`http://localhost:8080/decks?userId=${id}`);
  return res.data;
};

export const getCards = async (id: number): Promise<Array<ICard>> => {
  let res = await axios.get(`http://localhost:8080/cards?deckId=${id}`);
  return res.data;
};
