
class UserController {
    
    static newUser(req, res) {
        const user = req.body
        return User.create({
            name: user.name,
            email: user.email,
            password: user.password
        }).then(User => res.status(201).send(User))
        .catch(error => res.status(400).send(error))
        
    }

//     static async addBook(newBook) {
//         try {
//             return await database.Book.create(newBook);
//         } catch (error) {
//             throw error;
//         }
//     }

//     static async updateBook(id, updateBook) {
//         try {
//             const bookToUpdate = await database.Book.findOne({
//                 where: {
//                     id: Number(id)
//                 }
//             });

//             if (bookToUpdate) {
//                 await database.Book.update(updateBook, {
//                     where: {
//                         id: Number(id)
//                     }
//                 });

//                 return updateBook;
//             }
//             return null;
//         } catch (error) {
//             throw error;
//         }
//     }

//     static async getABook(id) {
//         try {
//             const theBook = await database.Book.findOne({
//                 where: {
//                     id: Number(id)
//                 }
//             });

//             return theBook;
//         } catch (error) {
//             throw error;
//         }
//     }

//     static async deleteBook(id) {
//         try {
//             const bookToDelete = await database.Book.findOne({
//                 where: {
//                     id: Number(id)
//                 }
//             });

//             if (bookToDelete) {
//                 const deletedBook = await database.Book.destroy({
//                     where: {
//                         id: Number(id)
//                     }
//                 });
//                 return deletedBook;
//             }
//             return null;
//         } catch (error) {
//             throw error;
//         }
//     }
// }
}

module.exports = UserController