// export default function PostgresAdapter(pool: { query: (arg0: string) => Promise<any>; }, options = {}) {
//   return {
//     async createUser(user: { email: any; }) {
//       const addUser = `INSERT INTO users(email) SELECT * FROM (SELECT '${user.email}') AS tmp
//         WHERE NOT EXISTS (
//           SELECT * FROM users WHERE email='${user.email}')
//           LIMIT 1 RETURNING id, name, about_me, email, photo_url;`;
//       return pool.query(addUser)
//       .then((loggedInUser: any) =>{
//         if (loggedInUser.rowCount === 0) {
//           pool.query(`SELECT id, name, about_me, email, photo_url FROM users WHERE email='${user.email}'`)
//           .then((user: any) =>{
//             return user.rows[0];
//           })
//         } else {
//           return loggedInUser.rows[0];
//         }
//       })
//       .catch((err) => {
//         console.log('Error adding user', err);
//       })
//     },
//     async getUser(id: any) {
//       const checkUserCredentials = `SELECT * FROM users WHERE id='${id}'`;
//       pool.query(checkUserCredentials)
//       .then((loggedInUser: any) => {
//         if (loggedInUser.rowCount === 0) {
//           return null;
//         } else {
//           return loggedInUser.rowCount[0]
//         }
//       })
//       .catch((err) => {
//         console.log('Error getting user', err);
//       })
//     },
//     async getUserByEmail(email: any) {
//       const getByEmail = `SELECT * FROM users WHERE email='${email}'`;
//       return pool.query(getByEmail)
//         .then((user: any) =>{
//           if (user.rowCount === 0) {
//             return null;
//           } else {
//             return user.rows[0];
//           }
//         })
//         .catch((err) => {
//           console.log('Error getting user by email', err);
//         })
//     },
//     async getUserByAccount({ providerAccountId, provider }) {
//       const getUser =
//       `SELECT users.id, users.name, users.about_me, users.email, users.photo_url
//       FROM users INNER JOIN account ON users.id=account.user_id
//       WHERE users.id=(SELECT user_id
//         FROM account WHERE providerAccountId='${providerAccountId}'
//         AND provider='${provider}' LIMIT 1)`;
//       return pool.query(getUser)
//       .then((user: any) =>{
//         if (user.rowCount === 0) {
//           return null;
//         } else {
//           return user.rows[0];
//         }
//       })
//       .catch((err) => {
//         console.log('Error getting user by account provider id', err);
//       })
//     },
//     async updateUser(user: any) {
//       return
//     },
//     async deleteUser(userId: any) {
//       return
//     },
//     async linkAccount(account: any) {
//       const { userId, provider, type, providerAccountId, access_token, expires_at, scope, token_type} = account;
//       const addAccount = `INSERT INTO account (user_id, type, provider, providerAccountId, access_token, expires_at, token_type, scope)
//       VALUES (${userId}, '${type}', '${provider}', '${providerAccountId}', '${access_token}', ${expires_at}, '${token_type}', '${scope}');`;
//       return pool.query(addAccount)
//         .then((user: any) =>{
//           if (user.rowCount === 0) {
//             return null;
//           } else {
//             return user.rows[0];
//           }
//         })
//         .catch((err) => {
//           console.log('Error linking account', err);
//         })
//     },
//     async unlinkAccount({ providerAccountId, provider }) {
//       return pool.query(`DELETE FROM accounts WHERE providerAccountId='${sessionToken}' AND provider=${provider}`)
//       .then(() => {
//         return null;
//       })
//     },
//     async createSession({ sessionToken, userId }) {
//       const addSession = `INSERT INTO sessions (user_id, sessionToken) VALUES (${userId}, '${sessionToken}');`;
//       console.log(addSession)
//       return pool.query(addSession)
//         .then((session: any) =>{
//           if (session) {
//             const getByEmail = `SELECT id, name, about_me, email, photo_url FROM users WHERE id='${userId}'`;
//             return pool.query(getByEmail)
//               .then((user: any) =>{
//                 if (user.rowCount === 0) {
//                   return null;
//                 } else {
//                   session.user = user.rows[0];
//                   return session;
//                 }
//               })
//               .catch((err) => {
//                 console.log('Error getting user by email', err);
//               })
//           } else {
//             return null;
//           }
//         })
//         .catch((err) => {
//           console.log('Error creating sessions', err);
//         })
//     },
//     async getSessionAndUser(sessionToken: any) {
//       return
//     },
//     async updateSession({ sessionToken }) {
//       return
//     },
//     async deleteSession(sessionToken: any) {
//     return pool.query(`DELETE FROM session WHERE sessionToken='${sessionToken}'`)
//     .then(() => {
//       return null;
//     })

//     },
//     async createVerificationToken({ identifier, expires, token }) {
//       return
//     },
//     async useVerificationToken({ identifier, token }) {
//       return
//     },
//   }
// }