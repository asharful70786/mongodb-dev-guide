# ACID Properties of a Database Transaction

ACID properties ensure reliable transaction processing in Database, maintaining data integrity in multi-user environments.

1. **Atomicity**: A transaction is an indivisible unit of work. It either completes fully or is rolled back entirely.
2. **Consistency**: A transaction moves the database from one valid state to another, adhering to rules and constraints.
3. **Isolation**: Transactions execute independently, preventing interference and ensuring correctness.
4. **Durability**: Once committed, transactions remain permanent, even in case of system failures.

MongoDB supports ACID compliance with multi-document transactions, ensuring reliability and consistency in database operations.
