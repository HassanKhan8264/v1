import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../environments/environment";

export interface State {}

export const reducers: ActionReducerMap<any> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
