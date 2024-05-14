export default defineEventHandler(async (event) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
  return {
    test: Math.random(),
  };
});
