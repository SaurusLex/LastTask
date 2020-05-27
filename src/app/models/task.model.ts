export class Task {
  id: number;
  title: string;
  description: string;
  duration: number; //hours
  estimated_duration:number;
  estimated_cost: number;
  project_id: number;
  created_at: Date;
  status:string
}
