const { User, Expense } = require('./models');

User.sync({ force: true });
Expense.sync({ force: true });
