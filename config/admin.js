module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eca7cd7a87f792c0e3222306f3dd3893'),
  },
});
