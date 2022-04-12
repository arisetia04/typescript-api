"use strict";

const bcrypt = require("bcrypt");
const { v4 } = require("uuid");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const password = await bcrypt.hashSync("password", 10);
        await queryInterface.bulkInsert("users", [
            {
                id: v4(),
                name: "Ari Setiawan",
                email: "ari@mail.com",
                password,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
