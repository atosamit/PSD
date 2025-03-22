import { gql } from 'apollo-server';

const typeDefs = `
  type Query {
    getPremiumAdjustments: [PremiumAdjustment]
  }

  type Mutation {
    editPremiumAdjustment(input: EditPremiumAdjustmentInput!): PremiumAdjustment
  }

  type PremiumAdjustment {
    id: ID!
    comment: String!
    totalBorrowerFees: Float!
    cuRetailRate: Float
    protectedLoanAmount: Float!
    payRate: Float
    premiumDue: Float
    totalAmount: Float
  }

  input EditPremiumAdjustmentInput {
    id: ID!
    comment: String!
    totalBorrowerFees: Float!
    cuRetailRate: Float
    protectedLoanAmount: Float!
    payRate: Float
    premiumDue: Float
    totalAmount: Float
  }
`;

export default typeDefs;