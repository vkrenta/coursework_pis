import { Action, SET_PAGE_NAME, Page } from '../actions/types';

export default function pageNameReducer(
  state: Page = null,
  action: Action<Page>
) {
  return action.type === SET_PAGE_NAME ? action.payload : state;
}
