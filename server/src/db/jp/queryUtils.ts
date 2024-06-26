import pool from "../connection";
import type { ResultSetHeader} from 'mysql2';

//select
export async function SelectQuery<T>(queryString: string): Promise<Partial<T[]>> {
    const [results] = await pool.execute(queryString);
    return results as T[];
  }

//insert, update, delete
export async function ModifyQuery<T>(queryString: string): Promise<ResultSetHeader> {
    const [results] = await pool.execute(queryString);
    return results as ResultSetHeader;
  }
  