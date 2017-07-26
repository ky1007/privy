import { values } from 'lodash';

export const selectGoals = allGoals => values(allGoals);
export const selectEntries = allEntries => values(allEntries);
export const selectReflections = allReflections => values(allReflections);
