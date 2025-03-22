Certainly! Below is the GraphQL schema and resolver code according to your specifications:

```graphql
schema-codegen-start
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
schema-codegen-end
```

```javascript
resolver-codegen-start
const premiumAdjustments = [
  {
    id: "1",
    comment: "Initial comment",
    totalBorrowerFees: 1000.0,
    cuRetailRate: 0.05,
    protectedLoanAmount: 50000.0,
    payRate: 0.02,
    premiumDue: 250.0,
    totalAmount: 50250.0,
  },
  // Add more sample data as needed
];

const resolvers = {
  Query: {
    getPremiumAdjustments: () => {
      return premiumAdjustments;
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      const index = premiumAdjustments.findIndex(adj => adj.id === input.id);
      if (index === -1) {
        throw new Error("Premium Adjustment not found");
      }
      premiumAdjustments[index] = {...input};
      return premiumAdjustments[index];
    },
  },
};
resolver-codegen-end
```