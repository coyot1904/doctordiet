import { gql } from "@apollo/client";

export const FREE_MEAL_PLAN_QUERY = gql`
  query GetFreeMealPlans {
    freeMealplans {
      ...MealPlanFragment
    }
  }
`;
