import { Client } from "./client.model";

export class Project {
  id: number;
  title: string;
  description: string;
  finish_date: string;
  cost_per_hour: number;
  img_src: string;
  status: string;
  client_id: number;
  user_id: number;
  client: Client;
}
