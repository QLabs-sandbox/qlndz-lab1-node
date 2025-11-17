export const getExampleService = () => {
  return {
    id: 1,
    message: "Service layer working",
    timestamp: new Date().toISOString(), // added field
  };
};
