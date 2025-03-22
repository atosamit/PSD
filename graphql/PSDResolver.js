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

export default resolvers;